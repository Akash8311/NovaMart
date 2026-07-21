import React, { useState, useEffect, useRef } from "react";
import HomeSlider from "../../components/HomesSlider/HomeSlider";
import CatSlider from "../../components/CatSlider/CatSlider";
import { TbTruckDelivery } from "react-icons/tb";
import { SiFreenet } from "react-icons/si";
import AdsBanner from "../../components/AdsBannerSlider/AdsBanner";
import {
  MdOutlineShoppingCart,
  MdOutlineSecurity,
  MdOutlineAssignmentReturn,
  MdSupportAgent,
  MdVerified,
} from "react-icons/md";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Poducts from "../../components/ProductsSlider/Poducts";
import AdsSectionHome from "../../components/AdsSectionHome/AdsSectionHome";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import BlogItems from "../../components/BlogItems/BlogItems";
import BlogItems2 from "../../components/BlogItems/BlogItems2";
import BlogItems4 from "../../components/BlogItems/BlogItems4";

/* ----------------------------------------------------------------
   DESIGN TOKENS — Editorial Fashion / E-commerce
------------------------------------------------------------------*/
const TOKENS = {
  ink: "#14110F",
  paper: "#FFFFFF",
  paperSoft: "#F7F5F1",
  wine: "#7A1F3D",
  gold: "#C9A24B",
  line: "#E4E0D8",
  muted: "#6E6A63",
};

/* ----------------------------------------------------------------
   Reveal — fade + lift on scroll. Accepts a "from" direction so
   sections can enter from below, left, right, or scale in.
------------------------------------------------------------------*/
const Reveal = ({ children, delay = 0, from = "up", style = {} }) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(node);
        }
      },
      { threshold: 0.12 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const transforms = {
    up: visible ? "translateY(0)" : "translateY(40px)",
    left: visible ? "translateX(0)" : "translateX(-50px)",
    right: visible ? "translateX(0)" : "translateX(50px)",
    scale: visible ? "scale(1)" : "scale(0.92)",
  };

  return (
    <div
      ref={ref}
      style={{
        opacity: visible ? 1 : 0,
        transform: transforms[from],
        transition: `opacity 0.9s cubic-bezier(.2,.7,.2,1) ${delay}s, transform 0.9s cubic-bezier(.2,.7,.2,1) ${delay}s`,
        ...style,
      }}
    >
      {children}
    </div>
  );
};


const CountUp = ({ target, suffix = "", duration = 1400 }) => {
  const ref = useRef(null);
  const [val, setVal] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const start = performance.now();
          const step = (now) => {
            const progress = Math.min(1, (now - start) / duration);
            const eased = 1 - Math.pow(1 - progress, 3);
            setVal(Math.floor(eased * target));
            if (progress < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
          observer.unobserve(node);
        }
      },
      { threshold: 0.3 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [target, duration]);

  return (
    <span ref={ref}>
      {val.toLocaleString()}
      {suffix}
    </span>
  );
};

const TailorRail = () => {
  const [pct, setPct] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const doc = document.documentElement;
      const max = doc.scrollHeight - doc.clientHeight;
      setPct(max > 0 ? Math.min(100, (window.scrollY / max) * 100) : 0);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const ticks = Array.from({ length: 11 }, (_, i) => i * 10);

  return (
    <div className="tailor-rail">
      <span
        style={{
          fontSize: "10px",
          letterSpacing: "2px",
          color: TOKENS.muted,
          writingMode: "vertical-rl",
          marginBottom: "10px",
          fontFamily: "'Inter', sans-serif",
        }}
      >
        SCROLL
      </span>
      <div
        style={{
          position: "relative",
          width: "18px",
          height: "220px",
          borderLeft: `1px solid ${TOKENS.line}`,
        }}
      >
        {ticks.map((t) => (
          <div
            key={t}
            style={{
              position: "absolute",
              bottom: `${t}%`,
              left: 0,
              width: t % 50 === 0 ? "14px" : "8px",
              height: "1px",
              background: TOKENS.muted,
            }}
          />
        ))}
        <div
          style={{
            position: "absolute",
            bottom: `${pct}%`,
            left: "-5px",
            width: "10px",
            height: "10px",
            borderRadius: "50%",
            background: TOKENS.wine,
            boxShadow: `0 0 0 4px rgba(122,31,61,0.15)`,
            transition: "bottom 0.1s linear",
          }}
        />
      </div>
    </div>
  );
};

const Eyebrow = ({ children, light = false }) => (
  <div
    style={{
      display: "flex",
      alignItems: "center",
      gap: "10px",
      marginBottom: "10px",
    }}
  >
    <span
      style={{
        width: "28px",
        height: "1px",
        background: TOKENS.wine,
        display: "inline-block",
      }}
    />
    <span
      style={{
        fontFamily: "'Inter', sans-serif",
        fontSize: "12px",
        fontWeight: 600,
        letterSpacing: "3px",
        color: light ? TOKENS.gold : TOKENS.wine,
        textTransform: "uppercase",
      }}
    >
      {children}
    </span>
  </div>
);

const TRUST_ITEMS = [
  {
    icon: TbTruckDelivery,
    title: "Free Shipping",
    desc: "On orders over ₹199",
  },
  {
    icon: MdOutlineSecurity,
    title: "Secure Payment",
    desc: "100% protected checkout",
  },
  {
    icon: MdOutlineAssignmentReturn,
    title: "Easy Returns",
    desc: "7-day hassle-free returns",
  },
  {
    icon: MdSupportAgent,
    title: "24/7 Support",
    desc: "We're always here to help",
  },
];

const STATS = [
  { target: 12000, suffix: "+", label: "Products" },
  { target: 48000, suffix: "+", label: "Happy Customers" },
  { target: 120, suffix: "+", label: "Brands" },
  { target: 35, suffix: "+", label: "Cities Delivered" },
];

const Home = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div
      className="fashion-home"
      style={{
        background: TOKENS.paperSoft,
        fontFamily: "'Inter', sans-serif",
        color: TOKENS.ink,
      }}
    >
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,500;0,700;0,900;1,600&family=Inter:wght@400;500;600;700&display=swap');

          * { box-sizing: border-box; }

          .fashion-home h2.display-heading { font-family: 'Playfair Display', serif; }

          @keyframes pop {
            0%   { transform: scale(1);    color: ${TOKENS.ink}; }
            100% { transform: scale(1.12); color: ${TOKENS.wine}; }
          }
          @keyframes moveTruck {
            0%   { transform: translateX(0) scale(1); }
            100% { transform: translateX(12px) scale(1.08); }
          }
          @keyframes smoothScroll {
            0%   { transform: translateX(0%); }
            100% { transform: translateX(-40%); }
          }
          @keyframes fadeInPage { 0% { opacity: 0; } 100% { opacity: 1; } }
          @keyframes floatIcon {
            0%, 100% { transform: translateY(0); }
            50%      { transform: translateY(-6px); }
          }
          @keyframes shimmer {
            0%   { background-position: -200% 0; }
            100% { background-position: 200% 0; }
          }
          @keyframes pulseRing {
            0%   { box-shadow: 0 0 0 0 rgba(122,31,61,0.28); }
            100% { box-shadow: 0 0 0 14px rgba(122,31,61,0); }
          }

          .fashion-home { animation: fadeInPage 0.6s ease; }

          .tailor-rail {
            position: fixed; right: 26px; top: 50%; transform: translateY(-50%);
            display: flex; flex-direction: column; align-items: center;
            z-index: 40; pointer-events: none;
          }
          @media (max-width: 1024px) { .tailor-rail { display: none; } }

          .shipping-bar { border: 1px solid ${TOKENS.line}; background: ${TOKENS.paper}; transition: 0.4s ease; }
          .shipping-bar:hover { border-color: ${TOKENS.wine}; box-shadow: 0 14px 34px rgba(20,17,15,0.10); transform: translateY(-4px); }

          .fh-tab .MuiTabs-indicator { background-color: ${TOKENS.wine} !important; height: 2px !important; }
          .fh-tab .MuiTab-root { font-family: 'Inter', sans-serif; font-weight: 600; letter-spacing: 0.5px; color: ${TOKENS.muted} !important; text-transform: none; }
          .fh-tab .Mui-selected { color: ${TOKENS.ink} !important; }

          .trust-card {
            background: ${TOKENS.paper};
            border: 1px solid ${TOKENS.line};
            border-radius: 14px;
            padding: 26px 20px;
            text-align: center;
            transition: transform 0.4s ease, box-shadow 0.4s ease, border-color 0.4s ease;
          }
          .trust-card:hover {
            transform: translateY(-8px);
            box-shadow: 0 18px 40px rgba(20,17,15,0.10);
            border-color: ${TOKENS.gold};
          }
          .trust-icon-wrap {
            width: 56px; height: 56px; border-radius: 50%;
            display: flex; align-items: center; justify-content: center;
            background: ${TOKENS.paperSoft};
            margin: 0 auto 14px;
            animation: floatIcon 3.2s ease-in-out infinite;
          }

          .stat-card { text-align: center; padding: 10px 14px; }
          .stat-number {
            font-family: 'Playfair Display', serif;
            font-size: 42px;
            font-weight: 900;
            color: ${TOKENS.wine};
          }

          .brand-wrapper { width: 100%; overflow: hidden; position: relative; }
          .brand-slider { display: flex; width: max-content; animation: smoothScroll 22s linear infinite; }
          .brand-name {
            font-family: 'Playfair Display', serif;
            font-size: 30px; font-weight: 700; margin: 0 45px;
            white-space: nowrap; transition: 0.4s ease; cursor: pointer;
            letter-spacing: 1px; color: ${TOKENS.muted};
          }
          .brand-name:hover { color: ${TOKENS.wine}; transform: scale(1.1); }

          .blog-desc { color: ${TOKENS.muted}; font-size: 15px; max-width: 520px; line-height: 1.6; }
          .blog-grid-item { transition: transform 0.5s ease, box-shadow 0.5s ease; border-radius: 10px; }
          .blog-grid-item:hover { transform: translateY(-6px); box-shadow: 0 18px 40px rgba(20,17,15,0.12); }

          .newsletter-box {
            border: 1px dashed ${TOKENS.gold};
            border-radius: 18px;
            background: linear-gradient(120deg, ${TOKENS.paper} 25%, ${TOKENS.paperSoft} 50%, ${TOKENS.paper} 75%);
            background-size: 200% 100%;
            animation: shimmer 6s linear infinite;
          }
          .newsletter-btn {
            background: ${TOKENS.wine};
            color: #fff;
            border: none;
            border-radius: 999px;
            padding: 14px 28px;
            font-weight: 600;
            cursor: pointer;
            transition: 0.3s ease;
            animation: pulseRing 2.4s infinite;
          }
          .newsletter-btn:hover { background: ${TOKENS.ink}; transform: translateY(-2px); }
        `}
      </style>

      <TailorRail />

      <div style={{ overflow: "hidden" }}>
        <Reveal>
          <HomeSlider />
        </Reveal>

        <Reveal delay={0.05}>
          <CatSlider />
        </Reveal>

        <section style={{ background: TOKENS.paper, padding: "40px 0 10px" }}>
          <div className="my-container">
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                gap: "22px",
              }}
            >
              {TRUST_ITEMS.map((item, i) => {
                const Icon = item.icon;
                return (
                  <Reveal key={item.title} delay={i * 0.08} from="up">
                    <div className="trust-card">
                      <div className="trust-icon-wrap">
                        <Icon
                          style={{ fontSize: "26px", color: TOKENS.wine }}
                        />
                      </div>
                      <h4
                        style={{
                          margin: "0 0 4px",
                          fontFamily: "'Playfair Display', serif",
                          fontSize: "17px",
                          fontWeight: 700,
                        }}
                      >
                        {item.title}
                      </h4>
                      <p
                        style={{
                          margin: 0,
                          fontSize: "13px",
                          color: TOKENS.muted,
                        }}
                      >
                        {item.desc}
                      </p>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        <section style={{ background: TOKENS.paper, marginTop: "6px" }}>
          <div
            className="my-container"
            style={{ paddingTop: "34px", paddingBottom: "34px" }}
          >
            <Reveal from="scale">
              <div
                className="shipping-bar"
                style={{
                  padding: "22px",
                  display: "flex",
                  justifyContent: "center",
                  gap: "40px",
                  alignItems: "center",
                  width: "100%",
                  borderRadius: "14px",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => {
                  const truck = e.currentTarget.querySelector(".truck");
                  if (truck) truck.style.animation = "moveTruck .6s forwards";
                }}
                onMouseLeave={(e) => {
                  const truck = e.currentTarget.querySelector(".truck");
                  if (truck) truck.style.animation = "none";
                }}
              >
                <div
                  style={{ display: "flex", alignItems: "center", gap: "12px" }}
                >
                  <TbTruckDelivery
                    className="truck"
                    style={{
                      fontSize: "58px",
                      color: TOKENS.wine,
                      transition: "0.4s",
                    }}
                  />
                  <span
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      fontSize: "26px",
                      fontWeight: 700,
                      display: "flex",
                      gap: "6px",
                      alignItems: "center",
                    }}
                  >
                    FREE SHIPPING{" "}
                    <SiFreenet
                      style={{
                        marginTop: "5px",
                        fontSize: "20px",
                        color: TOKENS.gold,
                      }}
                    />
                  </span>
                </div>

                <div
                  style={{
                    height: "48px",
                    width: "1px",
                    background: TOKENS.line,
                  }}
                />

                <span
                  style={{
                    fontSize: "16px",
                    fontWeight: 400,
                    color: TOKENS.muted,
                    maxWidth: "260px",
                  }}
                >
                  Free delivery on your first order and on all orders over ₹199
                </span>

                <div
                  style={{
                    height: "48px",
                    width: "1px",
                    background: TOKENS.line,
                  }}
                />

                <span
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: "28px",
                    fontWeight: 900,
                    color: TOKENS.wine,
                    animation: "pop 1.6s infinite alternate",
                  }}
                >
                  ONLY ₹199
                </span>
              </div>
            </Reveal>

            {/* Popular Products */}
            <section style={{ padding: "48px 0 10px" }}>
              <Reveal>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-end",
                    flexWrap: "wrap",
                    gap: "18px",
                    borderBottom: `1px solid ${TOKENS.line}`,
                    paddingBottom: "18px",
                  }}
                >
                  <div>
                    <Eyebrow>Seasonal Edit</Eyebrow>
                    <h2
                      className="display-heading"
                      style={{
                        fontSize: "34px",
                        margin: 0,
                        display: "flex",
                        alignItems: "center",
                        gap: "10px",
                        fontWeight: 700,
                      }}
                    >
                      Popular Products{" "}
                      <MdOutlineShoppingCart
                        style={{ color: TOKENS.gold, fontSize: "26px" }}
                      />
                    </h2>
                    <p
                      style={{
                        marginTop: "8px",
                        color: TOKENS.muted,
                        fontSize: "15px",
                      }}
                    >
                      Do not miss the current offers until the end of the year.
                    </p>
                  </div>

                  <Box
                    className="fh-tab"
                    sx={{
                      maxWidth: { xs: 260, sm: 520 },
                      bgcolor: "transparent",
                    }}
                  >
                    <Tabs
                      value={value}
                      onChange={handleChange}
                      variant="scrollable"
                      scrollButtons
                      allowScrollButtonsMobile
                    >
                      <Tab label="Fashion" />
                      <Tab label="Electronics" />
                      <Tab label="Mobile" />
                      <Tab label="Grocery" />
                      <Tab label="Shoes" />
                      <Tab label="Cosmetics" />
                      <Tab label="Jewellery" />
                    </Tabs>
                  </Box>
                </div>
              </Reveal>

              <Reveal delay={0.08}>
                <Poducts items={5} />
              </Reveal>
            </section>

            <Reveal from="left">
              <AdsSectionHome />
            </Reveal>

            <Reveal delay={0.06} from="right">
              <AdsBanner items={4} />
            </Reveal>
          </div>
        </section>

        <section style={{ background: TOKENS.paperSoft, padding: "56px 0" }}>
          <div
            className="my-container"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
              gap: "16px",
            }}
          >
            {STATS.map((s, i) => (
              <Reveal key={s.label} delay={i * 0.08} from="scale">
                <div className="stat-card">
                  <div className="stat-number">
                    <CountUp target={s.target} suffix={s.suffix} />
                  </div>
                  <div
                    style={{
                      fontSize: "13px",
                      letterSpacing: "1px",
                      color: TOKENS.muted,
                      textTransform: "uppercase",
                      marginTop: "4px",
                    }}
                  >
                    {s.label}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        <section
          className="blogsection"
          style={{ padding: "70px 75px 60px", background: TOKENS.paper }}
        >
          <Reveal>
            <Eyebrow>Journal</Eyebrow>
            <h2
              className="display-heading"
              style={{
                fontSize: "38px",
                paddingBottom: "6px",
                fontWeight: 700,
                margin: 0,
              }}
            >
              From The Blog
            </h2>
            <p className="blog-desc">
              Explore trending insights, modern living ideas and inspiring
              stories from our latest blog updates.
            </p>
          </Reveal>

          <div
            style={{
              margin: "36px auto 0",
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "40px",
            }}
          >
            <Reveal delay={0.05} from="up">
              <div className="blog-grid-item">
                <BlogItems />
              </div>
            </Reveal>
            <Reveal delay={0.1} from="up">
              <div className="blog-grid-item">
                <BlogItems2 />
              </div>
            </Reveal>
            <Reveal delay={0.15} from="up">
              <div className="blog-grid-item">
                <BlogItems />
              </div>
            </Reveal>
            <Reveal delay={0.2} from="up">
              <div className="blog-grid-item">
                <BlogItems4 />
              </div>
            </Reveal>
          </div>
        </section>

        <section
          style={{ background: TOKENS.paperSoft, padding: "10px 75px 60px" }}
        >
          <Reveal from="scale">
            <div
              className="newsletter-box"
              style={{
                padding: "44px 36px",
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "space-between",
                alignItems: "center",
                gap: "24px",
              }}
            >
              <div style={{ maxWidth: "480px" }}>
                <Eyebrow>Stay In Style</Eyebrow>
                <h3
                  className="display-heading"
                  style={{
                    fontSize: "26px",
                    margin: "0 0 8px",
                    fontWeight: 700,
                  }}
                >
                  Get 10% off your first order
                </h3>
                <p style={{ margin: 0, color: TOKENS.muted, fontSize: "14px" }}>
                  Join our list for early access to new drops, private sales and
                  styling edits.
                </p>
              </div>
              <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
                <input
                  type="email"
                  placeholder="Enter your email"
                  style={{
                    padding: "14px 18px",
                    borderRadius: "999px",
                    border: `1px solid ${TOKENS.line}`,
                    minWidth: "240px",
                    fontSize: "14px",
                    outline: "none",
                    background: TOKENS.paper,
                  }}
                />
                <button className="newsletter-btn">Subscribe</button>
              </div>
            </div>
          </Reveal>
        </section>
        <section style={{ background: "transparent", padding: "20px 0 70px" }}>
          <Reveal>
            <div style={{ textAlign: "center", marginBottom: "36px" }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "12px",
                }}
              >
                <span
                  style={{
                    width: "40px",
                    height: "1px",
                    background: TOKENS.gold,
                  }}
                />
                <MdVerified style={{ color: TOKENS.gold, fontSize: "20px" }} />
                <span
                  style={{
                    width: "40px",
                    height: "1px",
                    background: TOKENS.gold,
                  }}
                />
              </div>
              <h2
                className="display-heading"
                style={{
                  fontSize: "36px",
                  fontWeight: 700,
                  marginTop: "10px",
                  color: TOKENS.ink,
                }}
              >
                Trusted Brands
              </h2>
              <p
                style={{
                  color: TOKENS.muted,
                  fontSize: "14px",
                  marginTop: "4px",
                }}
              >
                Authentic products from the labels you already love
              </p>
            </div>
          </Reveal>

          <div className="brand-wrapper">
            <div className="brand-slider">
              {[
                [
                  "ALLEN SOLLY",
                  "LOUIS PHILIPPE",
                  "PETER ENGLAND",
                  "VAN HEUSEN",
                  "MUFTI",
                  "WRANGLER",
                  "LEE",
                  "SPYKAR",
                  "FLYING MACHINE",
                  "WROGN",
                  "BEWAKOOF",
                  "MAX",
                  "BIBA",
                  "FABINDIA",
                  "MANYAVAR",
                  "AURELIA",
                  "GLOBAL DESI",
                  "US POLO ASSN",
                  "ROADSTER",
                  "HRX",
                ],
              ].map((brand, i) => (
                <span className="brand-name" key={`${brand}-${i}`}>
                  {brand}
                </span>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
