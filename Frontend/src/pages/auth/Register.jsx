import React, { useState, useEffect, useRef, useCallback } from "react";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { app } from "../../firebase";
const rules = {
  name:    v => v.trim().length >= 2 ? "" : "Full name must be at least 2 characters",
  email:   v => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v) ? "" : "Enter a valid email address",
  password: v => {
    if (v.length < 8)              return "Minimum 8 characters required";
    if (!/[A-Z]/.test(v))          return "Include at least one uppercase letter";
    if (!/[0-9]/.test(v))          return "Include at least one number";
    if (!/[^A-Za-z0-9]/.test(v))   return "Include at least one special character";
    return "";
  },
  confirm: (v, pw) => v === pw ? "" : "Passwords do not match",
};

const pwStrength = pw => {
  let s = 0;
  if (pw.length >= 8)            s++;
  if (/[A-Z]/.test(pw))          s++;
  if (/[0-9]/.test(pw))          s++;
  if (/[^A-Za-z0-9]/.test(pw))   s++;
  return s;
};
const StarCanvas = () => {
  const ref = useRef(null);
  useEffect(() => {
    const c = ref.current; if (!c) return;
    const ctx = c.getContext("2d");
    let W, H, stars, raf;
    const init = () => {
      W = c.width = c.offsetWidth; H = c.height = c.offsetHeight;
      stars = Array.from({ length: 75 }, () => ({
        x: Math.random()*W, y: Math.random()*H,
        r: Math.random()*1.5+.3,
        vx: (Math.random()-.5)*.2, vy: (Math.random()-.5)*.2,
        o: Math.random()*.5+.15,
      }));
    };
    const draw = () => {
      ctx.clearRect(0,0,W,H);
      stars.forEach(s=>{
        s.x+=s.vx; s.y+=s.vy;
        if(s.x<0)s.x=W; if(s.x>W)s.x=0;
        if(s.y<0)s.y=H; if(s.y>H)s.y=0;
        ctx.beginPath(); ctx.arc(s.x,s.y,s.r,0,Math.PI*2);
        ctx.fillStyle=`rgba(212,172,94,${s.o})`; ctx.fill();
      });
      for(let i=0;i<stars.length;i++) for(let j=i+1;j<stars.length;j++){
        const dx=stars[i].x-stars[j].x, dy=stars[i].y-stars[j].y;
        const d=Math.sqrt(dx*dx+dy*dy);
        if(d<95){ ctx.beginPath(); ctx.moveTo(stars[i].x,stars[i].y); ctx.lineTo(stars[j].x,stars[j].y);
          ctx.strokeStyle=`rgba(212,172,94,${.11*(1-d/95)})`; ctx.lineWidth=.5; ctx.stroke(); }
      }
      raf=requestAnimationFrame(draw);
    };
    init(); draw();
    const ro=new ResizeObserver(init); ro.observe(c);
    return ()=>{ cancelAnimationFrame(raf); ro.disconnect(); };
  },[]);
  return <canvas ref={ref} style={{position:"absolute",inset:0,width:"100%",height:"100%",pointerEvents:"none",zIndex:0}}/>;
};

const Cursor = () => {
  const dot=useRef(null), ring=useRef(null);
  const pos=useRef({x:0,y:0}), lag=useRef({x:0,y:0});
  useEffect(()=>{
    const onM=e=>{ pos.current={x:e.clientX,y:e.clientY}; };
    window.addEventListener("mousemove",onM);
    let raf;
    const tick=()=>{
      lag.current.x+=(pos.current.x-lag.current.x)*.13;
      lag.current.y+=(pos.current.y-lag.current.y)*.13;
      if(dot.current){ dot.current.style.left=pos.current.x+"px"; dot.current.style.top=pos.current.y+"px"; }
      if(ring.current){ ring.current.style.left=lag.current.x+"px"; ring.current.style.top=lag.current.y+"px"; }
      raf=requestAnimationFrame(tick);
    };
    tick();
    return ()=>{ window.removeEventListener("mousemove",onM); cancelAnimationFrame(raf); };
  },[]);
  return(<>
    <div ref={dot} style={{position:"fixed",width:6,height:6,borderRadius:"50%",background:"#D4AC5E",pointerEvents:"none",zIndex:9999,transform:"translate(-50%,-50%)",mixBlendMode:"screen",transition:"width .2s,height .2s"}}/>
    <div ref={ring} style={{position:"fixed",width:30,height:30,borderRadius:"50%",border:"1px solid rgba(212,172,94,.4)",pointerEvents:"none",zIndex:9998,transform:"translate(-50%,-50%)"}}/>
  </>);
};

const Toast = ({ msg, type, onClose }) => (
  <div style={{
    position:"fixed",top:24,right:24,zIndex:10000,
    padding:"14px 20px",
    background:type==="success"?"linear-gradient(135deg,#2A1C0F,#3D2A10)":"linear-gradient(135deg,#1C0F0F,#3D1010)",
    border:`1px solid ${type==="success"?"rgba(212,172,94,.5)":"rgba(220,80,80,.4)"}`,
    color:type==="success"?"#D4AC5E":"#E88",
    fontFamily:"'DM Sans',sans-serif",fontSize:13,letterSpacing:.5,
    display:"flex",alignItems:"center",gap:12,
    boxShadow:"0 16px 48px rgba(0,0,0,.45)",
    animation:"toast-in .4s cubic-bezier(.16,1,.3,1) forwards",
    maxWidth:340,
  }}>
    <span style={{fontSize:15}}>{type==="success"?"✦":"✕"}</span>
    <span style={{flex:1,lineHeight:1.5}}>{msg}</span>
    <button onClick={onClose} style={{background:"none",border:"none",color:"inherit",cursor:"pointer",opacity:.55,fontSize:18,lineHeight:1}}>×</button>
  </div>
);

const FloatInput = ({ label, name, type="text", value, onChange, onBlur, error, rightEl }) => {
  const [focused, setFocused] = useState(false);
  const floated = focused || value.length > 0;
  return (
    <div style={{marginBottom:20,position:"relative"}}>
      <div style={{position:"relative"}}>
        <label style={{
          position:"absolute",left:44,zIndex:2,pointerEvents:"none",
          top: floated ? 7 : "50%",
          transform: floated ? "none" : "translateY(-50%)",
          fontSize: floated ? 9 : 13,
          letterSpacing: floated ? 3 : .3,
          textTransform: floated ? "uppercase" : "none",
          color: floated ? (error ? "#E06060" : "#D4AC5E") : "#9A8E84",
          fontFamily:"'DM Sans',sans-serif",
          fontWeight: floated ? 600 : 300,
          transition:"all .25s cubic-bezier(.16,1,.3,1)",
        }}>{label}</label>

        {/* Left icon */}
        <div style={{position:"absolute",left:14,top:"50%",transform:"translateY(-50%)",color:focused?"#D4AC5E":"#7A6E66",transition:"color .25s",zIndex:2,display:"flex",pointerEvents:"none"}}>
          {name==="name"    && <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"><circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/></svg>}
          {name==="email"   && <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"><rect x="2" y="4" width="20" height="16" rx="2"/><polyline points="22,6 12,13 2,6"/></svg>}
          {(name==="password"||name==="confirm") && <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>}
        </div>

        <input
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          onFocus={()=>setFocused(true)}
          onBlur={()=>{ setFocused(false); onBlur&&onBlur(); }}
          style={{
            width:"100%",
            padding: floated ? "23px 46px 9px 44px" : "16px 46px 16px 44px",
            background: focused ? "rgba(255,255,255,.94)" : "rgba(255,255,255,.65)",
            border:`1px solid ${error?"rgba(220,80,80,.5)":focused?"rgba(212,172,94,.5)":"rgba(180,165,148,.3)"}`,
            borderBottom:"none",outline:"none",
            fontFamily:"'DM Sans',sans-serif",fontSize:13,fontWeight:300,
            color:"#1A1310",letterSpacing:.4,
            transition:"all .25s",borderRadius:0,WebkitAppearance:"none",
          }}
        />
        <div style={{
          position:"absolute",bottom:0,
          left:focused?0:"50%",right:focused?0:"50%",
          height:2,
          background:error?"linear-gradient(90deg,#E06060,#C04040)":"linear-gradient(90deg,#D4AC5E,#C8956C)",
          transition:"left .35s cubic-bezier(.16,1,.3,1),right .35s cubic-bezier(.16,1,.3,1)",
        }}/>
        {rightEl && <div style={{position:"absolute",right:12,top:"50%",transform:"translateY(-50%)",zIndex:3}}>{rightEl}</div>}
      </div>
      {error && <p style={{fontFamily:"'DM Sans',sans-serif",fontSize:11,color:"#E06060",marginTop:5,letterSpacing:.3,paddingLeft:2}}>{error}</p>}
    </div>
  );
};

const StrengthBar = ({ pw }) => {
  const s = pwStrength(pw);
  const labels = ["","Weak","Fair","Good","Strong"];
  const colors = ["","#E06060","#E0A060","#A0C060","#60C090"];
  if (!pw) return null;
  return (
    <div style={{marginTop:-12,marginBottom:16,paddingLeft:2}}>
      <div style={{display:"flex",gap:4,marginBottom:5}}>
        {[1,2,3,4].map(i=>(
          <div key={i} style={{flex:1,height:3,borderRadius:2,background:i<=s?colors[s]:"rgba(180,165,148,.2)",transition:"background .4s"}}/>
        ))}
      </div>
      <span style={{fontFamily:"'DM Sans',sans-serif",fontSize:10,letterSpacing:2,color:colors[s],textTransform:"uppercase",fontWeight:600}}>{labels[s]}</span>
    </div>
  );
};

const Register = () => {

  /* ── original state ── */
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirm: ""
  });
  const [gLoading, setGLoading] = useState(false);

  /* ── UI-only state (added) ── */
  const [errors, setErrors]   = useState({});
  const [touched, setTouched] = useState({});
  const [showPw, setShowPw]   = useState(false);
  const [showCf, setShowCf]   = useState(false);
  const [agreed, setAgreed]   = useState(false);
  const [loading, setLoading] = useState(false);
  const [toast, setToast]     = useState(null);
  const [mounted, setMounted] = useState(false);
  const [mousePos, setMousePos]= useState({x:0,y:0});
  const [ripples, setRipples] = useState([]);

  useEffect(()=>{ setTimeout(()=>setMounted(true),60); },[]);
  useEffect(()=>{
    const mv=e=>setMousePos({x:(e.clientX/window.innerWidth-.5)*2,y:(e.clientY/window.innerHeight-.5)*2});
    window.addEventListener("mousemove",mv);
    return()=>window.removeEventListener("mousemove",mv);
  },[]);

  const showToast = (msg,type)=>{ setToast({msg,type}); setTimeout(()=>setToast(null),4000); };

  const handleGoogle = async () => {
    try {
      setGLoading(true);

      const auth = getAuth(app);
      const provider = new GoogleAuthProvider();

      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      console.log(user);
      localStorage.setItem("user", JSON.stringify(user));

      alert("Login successful!");
      window.location.href = "/";

    } catch (error) {
      console.error(error);
      alert("Google login failed");
    } finally {
      setGLoading(false);
    }
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    // Also keep live validation for UI
    if (touched[e.target.name]) {
      const field = e.target.name;
      const val   = e.target.value;
      const err   = field === "confirm"
        ? rules.confirm(val, form.password)
        : rules[field]?.(val) ?? "";
      setErrors(prev=>({...prev,[field]:err}));
    }
  };
  const handleSubmit = (e) => {
    // Mark all as touched to show errors
    setTouched({name:true,email:true,password:true,confirm:true});
    const errs={
      name:    rules.name(form.name),
      email:   rules.email(form.email),
      password:rules.password(form.password),
      confirm: rules.confirm(form.confirm,form.password),
    };
    setErrors(errs);

    if (!form.name || !form.email || !form.password || !form.confirm) {
      alert("All fields are required");
      return;
    }

    if (form.password !== form.confirm) {
      alert("Passwords do not match");
      return;
    }

    if (!agreed) { showToast("Please agree to the Terms & Conditions","error"); return; }

    // Ripple effect
    const btn = e.currentTarget;
    const rect = btn.getBoundingClientRect();
    const id = Date.now();
    setRipples(r=>[...r,{x:rect.width/2,y:rect.height/2,id}]);
    setTimeout(()=>setRipples(r=>r.filter(rr=>rr.id!==id)),700);

    setLoading(true);
    setTimeout(()=>{
      setLoading(false);
      alert("Account Created Successfully!");
    },1800);
  };

  /* ── validation onBlur ── */
  const onBlur = field => () => {
    setTouched(t=>({...t,[field]:true}));
    const err = field==="confirm"
      ? rules.confirm(form.confirm, form.password)
      : rules[field]?.(form[field]) ?? "";
    setErrors(prev=>({...prev,[field]:err}));
  };

  const px = (mousePos.x*16).toFixed(1);
  const py = (mousePos.y*10).toFixed(1);

  const perks=[
    ["✦","Early access to every new drop"],
    ["◈","Free delivery on orders over ₹2,000"],
    ["⟳","Effortless 30-day returns"],
  ];

  return (
    <>
      <Cursor/>
      {toast&&<Toast msg={toast.msg} type={toast.type} onClose={()=>setToast(null)}/>}

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&family=DM+Sans:wght@300;400;500;600&display=swap');
        *,*::before,*::after{margin:0;padding:0;box-sizing:border-box;}
        html,body{height:100%;}
        @keyframes toast-in{from{opacity:0;transform:translateX(40px)}to{opacity:1;transform:translateX(0)}}
        @keyframes orb-drift{0%,100%{transform:scale(1) translate(0,0)}33%{transform:scale(1.07) translate(26px,-18px)}66%{transform:scale(.95) translate(-18px,25px)}}
        @keyframes spin-cw{to{transform:rotate(360deg)}}
        @keyframes spin-ccw{to{transform:rotate(-360deg)}}
        @keyframes line-up{to{transform:translateY(0)}}
        @keyframes fade-up{from{opacity:0;transform:translateY(14px)}to{opacity:1;transform:translateY(0)}}
        @keyframes slide-r{from{opacity:0;transform:translateX(-16px)}to{opacity:1;transform:translateX(0)}}
        @keyframes line-grow{to{transform:scaleX(1)}}
        @keyframes ripple-out{to{transform:translate(-50%,-50%) scale(32);opacity:0}}
        @keyframes load-fill{to{width:100%}}
        @keyframes shimmer-bar{0%,100%{background-position:0% 50%}50%{background-position:100% 50%}}
        @keyframes vert-in{from{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}
        @keyframes corner-in{from{opacity:0;transform:scale(.6)}to{opacity:1;transform:scale(1)}}
        @keyframes g-spin{to{transform:rotate(360deg)}}

        @media(max-width:860px){
          .nm-grid{grid-template-columns:1fr !important;}
          .nm-left{display:none !important;}
          .nm-right{padding:36px 24px !important;}
        }
      `}</style>

      <div className="nm-grid" style={{
        minHeight:"100vh",display:"grid",
        gridTemplateColumns:"1fr 450px",
        fontFamily:"'DM Sans',sans-serif",
        background:"#0A0705",overflow:"hidden",cursor:"none",
      }}>

        <div className="nm-left" style={{
          position:"relative",overflow:"hidden",
          display:"flex",flexDirection:"column",justifyContent:"space-between",
          padding:"52px 56px",
          transform:`translate(${Number(px)*.28}px,${Number(py)*.18}px)`,
          transition:"transform .1s linear",
        }}>
          <StarCanvas/>

          {[
            {w:520,h:520,top:-180,left:-180,c:"rgba(200,133,106,.2)",d:"10s"},
            {w:360,h:360,bottom:-120,right:-80,c:"rgba(212,172,94,.12)",d:"14s",rev:true},
            {w:240,h:240,top:"45%",left:"52%",c:"rgba(200,133,106,.08)",d:"8s",del:"2s"},
          ].map((o,i)=>(
            <div key={i} style={{
              position:"absolute",borderRadius:"50%",filter:"blur(80px)",
              pointerEvents:"none",zIndex:0,
              width:o.w,height:o.h,top:o.top,left:o.left,bottom:o.bottom,right:o.right,
              background:`radial-gradient(circle,${o.c} 0%,transparent 65%)`,
              animation:`orb-drift ${o.d} ease-in-out ${o.del||"0s"} infinite ${o.rev?"reverse":""}`,
            }}/>
          ))}

          <div style={{position:"absolute",inset:0,background:"repeating-linear-gradient(-55deg,transparent,transparent 2px,rgba(200,133,106,.02) 2px,rgba(200,133,106,.02) 4px)",pointerEvents:"none",zIndex:1}}/>

          {[
            {top:32,left:32,borderTop:"1px solid rgba(200,133,106,.4)",borderLeft:"1px solid rgba(200,133,106,.4)"},
            {bottom:32,right:32,borderBottom:"1px solid rgba(200,133,106,.4)",borderRight:"1px solid rgba(200,133,106,.4)"},
          ].map((s,i)=>(
            <div key={i} style={{position:"absolute",width:55,height:55,zIndex:2,pointerEvents:"none",...s,
              opacity:mounted?1:0,transform:mounted?"scale(1)":"scale(.6)",
              transition:`opacity .7s ease ${.3+i*.15}s,transform .7s ease ${.3+i*.15}s`,
            }}/>
          ))}

          <div style={{position:"absolute",right:0,top:0,bottom:0,width:38,borderLeft:"1px solid rgba(200,133,106,.18)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:3}}>
            <span style={{writingMode:"vertical-rl",fontSize:9,letterSpacing:4,color:"rgba(200,133,106,.28)",textTransform:"uppercase",animation:"vert-in .8s ease 1.1s both"}}>
              NovaMart · Est. 2026
            </span>
          </div>
          <div style={{position:"relative",zIndex:4,opacity:mounted?1:0,transform:mounted?"translateY(0)":"translateY(-24px)",transition:"opacity .9s cubic-bezier(.16,1,.3,1) .2s,transform .9s cubic-bezier(.16,1,.3,1) .2s"}}>
            <div style={{display:"flex",alignItems:"center",gap:14}}>
              <div style={{width:44,height:44,position:"relative",flexShrink:0}}>
                <svg viewBox="0 0 44 44" style={{position:"absolute",inset:0,width:"100%",height:"100%"}}>
                  <polygon points="22,2 42,22 22,42 2,22" fill="none" stroke="rgba(200,133,106,.5)" strokeWidth=".8" style={{transformOrigin:"22px 22px",animation:"spin-cw 20s linear infinite"}}/>
                  <polygon points="22,8 36,22 22,36 8,22" fill="none" stroke="rgba(212,172,94,.6)" strokeWidth=".8" style={{transformOrigin:"22px 22px",animation:"spin-ccw 12s linear infinite"}}/>
                  <circle cx="22" cy="22" r="4.5" fill="rgba(200,133,106,.8)"/>
                  <circle cx="22" cy="22" r="2.2" fill="#D4AC5E"/>
                </svg>
              </div>
              <span style={{fontFamily:"'Cormorant Garamond',serif",fontSize:28,fontWeight:300,color:"#F5EFE6",letterSpacing:8,textTransform:"uppercase"}}>NovaMart</span>
            </div>
            <div style={{fontSize:9,letterSpacing:4,color:"rgba(200,133,106,.4)",textTransform:"uppercase",paddingLeft:58,marginTop:7}}>Curated Luxury &amp; Style</div>
          </div>

          {/* Hero copy */}
          <div style={{position:"relative",zIndex:4,opacity:mounted?1:0,transform:mounted?"translateY(0)":"translateY(40px)",transition:"opacity 1s cubic-bezier(.16,1,.3,1) .4s,transform 1s cubic-bezier(.16,1,.3,1) .4s"}}>
            <div style={{fontSize:9,letterSpacing:5,color:"#D4AC5E",textTransform:"uppercase",marginBottom:22,display:"flex",alignItems:"center",gap:12,opacity:0,animation:mounted?"slide-r .7s ease 1s forwards":"none"}}>
              <span style={{display:"inline-block",width:28,height:1,background:"#D4AC5E",flexShrink:0,transform:"scaleX(0)",transformOrigin:"left",animation:mounted?"line-grow .6s ease 1.2s forwards":"none"}}/>
              New Members
            </div>

            <h1 style={{fontFamily:"'Cormorant Garamond',serif",fontSize:"clamp(40px,5vw,64px)",fontWeight:300,color:"#F5EFE6",lineHeight:1.08,marginBottom:26}}>
              {["Join the world","of premium",""].map((line,i)=>(
                <span key={i} style={{display:"block",overflow:"hidden"}}>
                  <span style={{display:"block",transform:mounted?"translateY(0)":"translateY(110%)",transition:`transform .9s cubic-bezier(.16,1,.3,1) ${.55+i*.15}s`}}>
                    {i===1
                      ? <><em style={{fontStyle:"italic",background:"linear-gradient(135deg,#D4AC5E,#C8956C)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text"}}>premium</em>{" shopping."}</>
                      : line}
                  </span>
                </span>
              ))}
            </h1>

            <p style={{fontSize:13,fontWeight:300,color:"rgba(245,239,230,.4)",lineHeight:1.9,maxWidth:340,letterSpacing:.4,opacity:0,animation:mounted?"fade-up .8s ease 1.2s forwards":"none"}}>
              Gain exclusive access to curated collections, early drops,
              and member-only privileges — crafted for those with impeccable taste.
            </p>
            <div style={{display:"flex",flexDirection:"column",gap:15,marginTop:42}}>
              {perks.map(([icon,text],i)=>(
                <div key={i} style={{display:"flex",alignItems:"center",gap:16,opacity:0,animation:mounted?`fade-up .6s ease ${1.1+i*.15}s forwards`:"none"}}>
                  <div style={{width:34,height:34,flexShrink:0,position:"relative",display:"flex",alignItems:"center",justifyContent:"center"}}>
                    <div style={{position:"absolute",inset:0,border:"1px solid rgba(200,133,106,.28)",transform:"rotate(45deg)"}}/>
                    <span style={{fontSize:12,position:"relative",zIndex:1,color:"rgba(212,172,94,.9)"}}>{icon}</span>
                  </div>
                  <span style={{fontSize:12,fontWeight:300,color:"rgba(245,239,230,.45)",letterSpacing:.4}}>{text}</span>
                </div>
              ))}
            </div>
          </div>
          <div style={{position:"relative",zIndex:4,opacity:mounted?1:0,transition:"opacity .6s ease 1.9s",display:"flex",gap:18,fontSize:10,letterSpacing:2,color:"rgba(200,133,106,.2)",textTransform:"uppercase",alignItems:"center"}}>
            <span>© 2026 NovaMart</span>
            <span style={{width:3,height:3,borderRadius:"50%",background:"rgba(200,133,106,.25)",display:"inline-block"}}/>
            <span>Privacy</span>
            <span style={{width:3,height:3,borderRadius:"50%",background:"rgba(200,133,106,.25)",display:"inline-block"}}/>
            <span>Terms</span>
          </div>
        </div>
        <div className="nm-right" style={{
          background:"#EDE4D8",position:"relative",overflowY:"auto",
          display:"flex",flexDirection:"column",justifyContent:"center",
          padding:"44px 42px",
          opacity:mounted?1:0,transform:mounted?"translateX(0)":"translateX(50px)",
          transition:"opacity .9s cubic-bezier(.16,1,.3,1) .25s,transform .9s cubic-bezier(.16,1,.3,1) .25s",
        }}>
          <div style={{position:"absolute",top:0,left:0,right:0,height:3,background:"linear-gradient(90deg,transparent,#D4AC5E,#C8956C,#D4AC5E,transparent)",backgroundSize:"300% 100%",animation:"shimmer-bar 4s ease-in-out infinite"}}/>
          {/* Left accent */}
          <div style={{position:"absolute",left:0,top:0,bottom:0,width:3,background:"linear-gradient(to bottom,transparent,#D4AC5E,#C8956C,#D4AC5E,transparent)",opacity:.38}}/>
          {/* Texture */}
          <div style={{position:"absolute",inset:0,backgroundImage:`url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23n)' opacity='.025'/%3E%3C/svg%3E")`,pointerEvents:"none",opacity:.5}}/>

          <div style={{position:"relative",zIndex:1}}>
            <div style={{marginBottom:28,opacity:mounted?1:0,transform:mounted?"translateY(0)":"translateY(20px)",transition:"opacity .7s ease .6s,transform .7s ease .6s"}}>
              <div style={{fontSize:9,letterSpacing:4,textTransform:"uppercase",color:"#D4AC5E",fontWeight:600,marginBottom:10,display:"flex",alignItems:"center",gap:10}}>
                New Account
                <span style={{flex:1,height:1,background:"linear-gradient(to right,rgba(200,133,106,.4),transparent)",display:"block"}}/>
              </div>
              <div style={{fontFamily:"'Cormorant Garamond',serif",fontSize:30,fontWeight:400,color:"#1A1310",lineHeight:1.2}}>
                Create your <em style={{fontStyle:"italic",color:"#C8956C"}}>account</em>
              </div>
              <div style={{marginTop:7,fontSize:12,fontWeight:300,color:"#7A6E66",letterSpacing:.3}}>
                Start your journey with NovaMart
              </div>
            </div>

            <button
              type="button"
              onClick={handleGoogle}
              style={{
                
                width:"100%",padding:"13px 16px",marginBottom:22,
                background:gLoading?"rgba(255,255,255,.7)":"rgba(255,255,255,.85)",
                border:"1px solid rgba(180,165,148,.4)",
                display:"flex",alignItems:"center",justifyContent:"center",gap:10,
                cursor:"pointer",fontFamily:"'DM Sans',sans-serif",
                fontSize:15,fontWeight:500,color:"#1A1310",
                letterSpacing:1.5,textTransform:"uppercase",
                position:"relative",overflow:"hidden",borderRadius:0,
                transition:"all .25s",
                color:"blue",borderRadius:"25px"
              

              }}
              onMouseEnter={e=>{ e.currentTarget.style.background="rgba(255,255,255,.98)"; e.currentTarget.style.borderColor="rgba(200,133,106,.45)"; e.currentTarget.style.transform="translateY(-2px)"; e.currentTarget.style.boxShadow="0 8px 24px rgba(200,133,106,.15)"; }}
              onMouseLeave={e=>{ e.currentTarget.style.background="rgba(255,255,255,.85)"; e.currentTarget.style.borderColor="rgba(180,165,148,.4)"; e.currentTarget.style.transform=""; e.currentTarget.style.boxShadow=""; }}
            >
              {gLoading ? (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#C8956C" strokeWidth="2.5" strokeLinecap="round" style={{animation:"g-spin 1s linear infinite"}}><path d="M12 2a10 10 0 0 1 10 10"/></svg>
              ) : (
                <svg width="36" height="26" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
              )}
              {gLoading ? "Connecting..." : "Continue with Google"}
            </button>
            <div style={{display:"flex",alignItems:"center",gap:12,marginBottom:22}}>
              <span style={{flex:1,height:1,background:"rgba(180,165,148,.3)"}}/>
              <span style={{fontSize:9,color:"#9A8E84",letterSpacing:2,textTransform:"uppercase"}}>or sign up with email</span>
              <span style={{flex:1,height:1,background:"rgba(180,165,148,.3)"}}/>
            </div>
            <FloatInput label="Full Name"     name="name"     value={form.name}     onChange={handleChange} onBlur={onBlur("name")}     error={touched.name&&errors.name}/>
            <FloatInput label="Email Address" name="email"    value={form.email}    onChange={handleChange} onBlur={onBlur("email")}    error={touched.email&&errors.email}   type="email"/>
            <FloatInput
              label="Password" name="password" type={showPw?"text":"password"}
              value={form.password} onChange={handleChange} onBlur={onBlur("password")}
              error={touched.password&&errors.password}
              rightEl={
                <button type="button" onMouseDown={e=>{e.preventDefault();setShowPw(v=>!v);}} style={{background:"none",border:"none",cursor:"pointer",color:"#9A8E84",display:"flex",alignItems:"center",padding:4,transition:"color .2s"}} onMouseEnter={e=>e.currentTarget.style.color="#D4AC5E"} onMouseLeave={e=>e.currentTarget.style.color="#9A8E84"}>
                  {showPw
                    ? <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20C7 20 2.73 16.39 1 12c.98-2.45 2.74-4.52 5-5.94"/><path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c5 0 9.27 3.61 11 8a18.5 18.5 0 0 1-2.16 3.48"/><line x1="1" y1="1" x2="23" y2="23"/></svg>
                    : <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
                  }
                </button>
              }
            />
            <StrengthBar pw={form.password}/>
            <FloatInput
              label="Confirm Password" name="confirm" type={showCf?"text":"password"}
              value={form.confirm} onChange={handleChange} onBlur={onBlur("confirm")}
              error={touched.confirm&&errors.confirm}
              rightEl={
                <button type="button" onMouseDown={e=>{e.preventDefault();setShowCf(v=>!v);}} style={{background:"none",border:"none",cursor:"pointer",color:"#9A8E84",display:"flex",alignItems:"center",padding:4,transition:"color .2s"}} onMouseEnter={e=>e.currentTarget.style.color="#D4AC5E"} onMouseLeave={e=>e.currentTarget.style.color="#9A8E84"}>
                  {showCf
                    ? <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20C7 20 2.73 16.39 1 12c.98-2.45 2.74-4.52 5-5.94"/><path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c5 0 9.27 3.61 11 8a18.5 18.5 0 0 1-2.16 3.48"/><line x1="1" y1="1" x2="23" y2="23"/></svg>
                    : <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
                  }
                </button>
              }
            />

            <div style={{display:"flex",alignItems:"flex-start",gap:10,marginBottom:24,marginTop:-4}}>
              <div onClick={()=>setAgreed(v=>!v)} style={{
                width:16,height:16,
                border:`1.5px solid ${agreed?"#D4AC5E":"rgba(180,165,148,.5)"}`,
                background:agreed?"#D4AC5E":"transparent",
                flexShrink:0,marginTop:2,cursor:"pointer",
                display:"flex",alignItems:"center",justifyContent:"center",
                transition:"all .25s",
              }}>
                {agreed&&<svg width="10" height="10" viewBox="0 0 12 12" fill="none" stroke="#1A1310" strokeWidth="2.2" strokeLinecap="round"><polyline points="2 6 5 9 10 3"/></svg>}
              </div>
              <span style={{fontSize:11,fontWeight:300,color:"#7A6E66",letterSpacing:.3,lineHeight:1.65}}>
                I agree to the{" "}
                <a href="#" style={{color:"#C8956C",textDecoration:"none",fontWeight:400}}>Terms &amp; Conditions</a>
                {" "}and{" "}
                <a href="#" style={{color:"#C8956C",textDecoration:"none",fontWeight:400}}>Privacy Policy</a>
              </span>
            </div>

            <button
              type="button"
              onClick={handleSubmit}
              disabled={loading}
              style={{
                width:"100%",padding:"16px",
                background: loading ? "#2A1C17" : "#1A1310",
                color:"#F5EFE6",border:"none",cursor:loading?"not-allowed":"pointer",
                fontFamily:"'DM Sans',sans-serif",fontSize:10,letterSpacing:5,
                textTransform:"uppercase",fontWeight:400,
                position:"relative",overflow:"hidden",borderRadius:0,
                transition:"background .35s,transform .15s,box-shadow .35s",
              }}
              onMouseEnter={e=>{ if(!loading){ e.currentTarget.style.background="#2A1C17"; e.currentTarget.style.boxShadow="0 12px 40px rgba(10,7,5,.35)"; e.currentTarget.style.transform="translateY(-2px)"; }}}
              onMouseLeave={e=>{ e.currentTarget.style.background=loading?"#2A1C17":"#1A1310"; e.currentTarget.style.boxShadow=""; e.currentTarget.style.transform=""; }}
            >
              {/* Ripple layer */}
              <div style={{position:"absolute",inset:0,overflow:"hidden",pointerEvents:"none"}}>
                {ripples.map(r=>(
                  <span key={r.id} style={{position:"absolute",width:10,height:10,borderRadius:"50%",background:"rgba(212,172,94,.3)",left:r.x,top:r.y,transform:"translate(-50%,-50%) scale(0)",animation:"ripple-out .7s ease-out forwards"}}/>
                ))}
              </div>
              {/* Loading bar */}
              {loading&&<div style={{position:"absolute",bottom:0,left:0,height:2,background:"linear-gradient(90deg,#D4AC5E,#C8956C)",width:0,animation:"load-fill 1.8s ease-out forwards"}}/>}

              <span style={{position:"relative",zIndex:1,display:"flex",alignItems:"center",justifyContent:"center",gap:8}}>
                {loading ? (
                  <>
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" style={{animation:"g-spin 1s linear infinite"}}><path d="M12 2a10 10 0 0 1 10 10"/></svg>
                    Creating account...
                  </>
                ) : "Create My Account"}
              </span>
            </button>

            <p style={{marginTop:22,textAlign:"center",fontSize:12,fontWeight:300,color:"#7A6E66",letterSpacing:.3}}>
              Already have an account?{" "}
              <a href="/login" style={{color:"#C8956C",fontWeight:400,textDecoration:"none",transition:"opacity .2s"}} onMouseEnter={e=>e.currentTarget.style.opacity=".65"} onMouseLeave={e=>e.currentTarget.style.opacity="1"}>
                Sign in
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;