import React from "react";
import { FaShippingFast } from "react-icons/fa";
import { PiKeyReturnLight } from "react-icons/pi";
import { RiSecurePaymentLine } from "react-icons/ri";
import { LiaGiftSolid } from "react-icons/lia";
import { BiSupport } from "react-icons/bi";
import "./Footer.css";
import { Link } from "react-router-dom";
import { CiChat1 } from "react-icons/ci";
import { useState } from "react";
import { RiFacebookCircleFill } from "react-icons/ri";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
// import { FaCcVisa } from "react-icons/fa";
// import { FaRegCreditCard } from "react-icons/fa";
// import { IoCardSharp } from "react-icons/io5";
// import { BsCreditCard2Front } from "react-icons/bs";

const Footer = () => {

const [email, setEmail] = useState("");

  const handleSubscribe = () => {
    if (!email) {
      alert("⚠ Please enter an email address!");
      return;
    }
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      alert("❌ Please enter a valid email address!");
      return;
    }
    alert(`🎉 Successfully Subscribed: ${email}`);
    setEmail("");
  };


  return (
    <footer>
      <div
        className="my-container"
        style={{ paddingTop: "14vh" }}
      >
     <div style={{ display: "flex", justifyContent: "center", gap: "14vh", paddingBottom:"10vh", marginBottom:"0vh" }}>

          <div
            className="col"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
              gap: "4px", // gap kom
            }}
          >
            <FaShippingFast style={{ fontSize: "6vh" }} className="icone" />

            <h4 style={{ fontSize: "2.5vh", margin: "8px", fontWeight: "400" }}>
              Free Shipping
            </h4>
            <p
              style={{
                margin: "0",
                fontWeight: "300",
                fontSize: "14px",
                paddingTop: "6px",
              }}
            >
              For all Orders over $200
            </p>
          </div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div
              className="col"
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
                gap: "4px",
              }}
            >
              <PiKeyReturnLight style={{ fontSize: "6vh" }} className="icone" />

              <h4
                style={{ fontSize: "2.5vh", margin: "8px", fontWeight: "400" }}
              >
                7 Days Returns
              </h4>
              <p
                style={{
                  margin: "0",
                  fontWeight: "300",
                  fontSize: "14px",
                  paddingTop: "6px",
                }}
              >
                For an Exchange Product
              </p>
            </div>
          </div>

          <div style={{ display: "flex", justifyContent: "center" }}>
            <div
              className="col"
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
                gap: "4px",
              }}
            >
              <RiSecurePaymentLine
                style={{ fontSize: "6vh" }}
                className="icone"
              />

              <h4
                style={{ fontSize: "2.5vh", margin: "8px", fontWeight: "400" }}
              >
                Secured Payment
              </h4>
              <p
                style={{
                  margin: "0",
                  fontWeight: "300",
                  fontSize: "14px",
                  paddingTop: "6px",
                }}
              >
                Payment Cards Accepted
              </p>
            </div>
          </div>

          <div style={{ display: "flex", justifyContent: "center" }}>
            <div
              className="col"
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
                gap: "4px",
              }}
            >
              <LiaGiftSolid style={{ fontSize: "6vh" }} className="icone" />

              <h4
                style={{ fontSize: "2.5vh", margin: "8px", fontWeight: "400" }}
              >
                Special Gifts
              </h4>
              <p
                style={{
                  margin: "0",
                  fontWeight: "300",
                  fontSize: "14px",
                  paddingTop: "6px",
                }}
              >
                Our First Product Order
              </p>
            </div>
          </div>

          <div style={{ display: "flex", justifyContent: "center" }}>
            <div
              className="col"
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
                gap: "4px",
              }}
            >
              <BiSupport style={{ fontSize: "6vh" }} className="icone" />

              <h4
                style={{ fontSize: "2.5vh", margin: "8px", fontWeight: "400" }}
              >
                Support 24/7
              </h4>
              <p
                style={{
                  margin: "0",
                  fontWeight: "300",
                  fontSize: "14px",
                  paddingTop: "6px",
                }}
              >
                Contact us Anytime
              </p>
            </div>
          </div>
        </div>

        <div
  style={{
    width: "100%",
    margin: "auto",
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "wrap",
    gap: "80px",
    borderTop: "1px solid gray",
    paddingTop:"4vh"
  }}
>

        {/* Contact Section*/}
        <div style={{ width: "260px" }}>
          <h2 style={{ marginBottom: "15px" }}>Contact Us</h2>
          <p>NovaMart - Mega Super Store</p>
          <p>700090-Branagar Tobin Road, Kolkata</p>

          <Link
            className="link"
            to="mailto:sales@novamart.com"
            style={{
              color: "#000",
              textDecoration: "none",
              fontWeight: "500",
              display: "block",
              marginTop: "10px",
            }}
          >
            sales@novamart.com
          </Link>

          <span
            style={{
              color: "blue",
              display: "block",
              marginTop: "10px",
              fontSize: "22px",
            }}
          >
            +91 9831403680
          </span>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              marginTop: "15px",
            }}
          >
            <CiChat1 style={{ fontSize: "30px" }} />
            <span style={{ fontSize: "18px" }}>Online Chat - Expert Help</span>
          </div>
        </div>
<div
  style={{
    width: "2px",
    height: "250px",
    background: "#cccccc",
  }}
></div>
        {/*  Products*/}
        <div>
          <h2 style={{ marginBottom: "15px" }}>Products</h2>
          {["Prices drop", "New products", "Best sales", "Contact us", "Sitemap", "Stores"].map(
            (item, index) => (
              <p
                key={index}
                style={{
                  cursor: "pointer",
                  transition: "0.3s",
                  marginBottom: "8px",
                }}
                onMouseEnter={(e) => (e.target.style.color = "blue")}
                onMouseLeave={(e) => (e.target.style.color = "black")}
              >
                {item}
              </p>
            )
          )}
        </div>

        {/* -------- Company -------- */}
        <div>
          <h2 style={{ marginBottom: "15px" }}>Our Company</h2>
          {[
            "Delivery",
            "Legal Notice",
            "Terms & Conditions",
            "About Us",
            "Secure Payment",
            "Login",
          ].map((text, i) => (
            <p
              key={i}
              style={{
                cursor: "pointer",
                transition: "0.3s",
                marginBottom: "8px",
              }}
              onMouseEnter={(e) => (e.target.style.color = "blue")}
              onMouseLeave={(e) => (e.target.style.color = "black")}
            >
              {text}
            </p>
          ))}
        </div>

        {/* -------- Newsletter -------- */}
        <div style={{ width: "260px" }}>
      <h2 style={{ marginBottom: "15px" }}>Subscribe to Newsletter</h2>
      <p style={{ marginBottom: "10px" }}>
        Subscribe to get latest updates & discount offers.
      </p>

      <input
        type="email"
        placeholder="Enter Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={{
          width: "100%",
          padding: "10px",
          borderRadius: "8px",
          border: "1px solid #999",
          outline: "none",
        }}
      />

      <button
        onClick={handleSubscribe}
        style={{
          marginTop: "12px",
          width: "50%",
          padding: "10px",
          background: "black",
          color: "white",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
          fontWeight: "600",
          transition: "0.3s",
        }}
        onMouseEnter={(e) => (e.target.style.background = "#333")}
        onMouseLeave={(e) => (e.target.style.background = "black")}
      >
        Subscribe
      </button>
    </div>


      </div>

      {/* ---- Bottom Bar ---- */}
  
     <div
  style={{
    paddingTop: "1px",
    borderTop: "1px solid gray",
    fontSize: "15px",
    width: "100%",
    paddingBottom:"none"
  }}
>
  <div
    style={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      width: "90%",
      margin: "auto",
      flexWrap: "wrap",
      gap: "10px",
    }}
  >
    {/* Social Icons */}
    <div style={{ display: "flex", gap: "5px"}}>
      {[<RiFacebookCircleFill />, <FaYoutube />, <FaInstagram />, <FaTwitter />].map(
        (Icon, index) => (
          <div
            key={index}
            style={{
              width: "42px",
              height: "42px",
              borderRadius: "50%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontSize: "22px",
              cursor: "pointer",
              transition: "0.3s",
            }}
            
           
          >
            {Icon}
          </div>
        )
      )}
    </div>

    {/* Copyright */}
    <div style={{ textAlign: "center", opacity: "0.8", fontWeight: "500" }}>
      © 2025 NovaMart — All Rights Reserved.
    </div>

    {/* Payment Icons */}
    <div style={{ display: "flex", gap: "2px", fontSize: "26px" }}>
<img src="https://ecommerce-frontend-view.netlify.app/carte_bleue.png" alt="" srcset="" />    
<img src="https://ecommerce-frontend-view.netlify.app/visa.png" alt="" srcset="" />     
<img src="https://ecommerce-frontend-view.netlify.app/master_card.png" alt="" srcset="" />     
<img src="https://ecommerce-frontend-view.netlify.app/american_express.png" alt="" srcset="" />     
<img src="https://ecommerce-frontend-view.netlify.app/paypal.png" alt="" srcset="" />
      
    </div>
  </div>
</div>


      </div>
    </footer>
  );
};

export default Footer;
