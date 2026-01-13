import React from 'react'
import { Link } from "react-router-dom";
import { useState } from 'react';


const BlogItems3 = () => {
     const [hover, setHover] = useState(false);
          const [textHover, setTextHover] = useState(false);
        
  return (
       <div
              className="imgwr"
              style={{
                overflow: "hidden",
                width: "45vh",
                borderRadius: "5px",
                position: "relative",
                cursor: "pointer",
              }}
              onMouseEnter={() => setHover(true)}
              onMouseLeave={() => setHover(false)}
            >
              {/* IMAGE */}
              <img
                src="https://www.searchenginejournal.com/wp-content/uploads/2019/02/6-Reasons-Your-Ecommerce-Site-Needs-a-Blog-Booster-Shot.png"
                alt=""
                style={{
                  width: "100%",
                  borderRadius: "5px",
                  transition: "0.4s ease",
                  transform: hover ? "scale(1.1)" : "scale(1)",
                }}
              />
        
              {/* DATE BADGE */}
              <div
                style={{
                  position: "absolute",
                  top: "10px",
                  left: "10px",
                  background: "rgba(0,0,0,0.6)",
                  color: "white",
                  padding: "5px 10px",
                  borderRadius: "5px",
                  fontSize: "14px",
                  fontWeight: "500",
                  backdropFilter: "blur(4px)"
                }}
              >
                22 Nov 2025
              </div>
        
              {/* ICON WRAPPER */}
              <div
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  display: "flex",
                  gap: "15px",
                  opacity: hover ? 1 : 0,
                  transition: "0.4s ease",
                  fontSize: "30px",
                  color: "white",
                }}
              >
                
              </div>
        
              {/* TITLE */}
              <h3
                style={{
                  fontSize: "18px",
                  fontWeight: "600",
                  lineHeight: "20px",
                  transition: "0.3s ease",
                  color: textHover ? "#0077ff" : "#000",
                  cursor: "pointer"
                }}
                onMouseEnter={() => setTextHover(true)}
                onMouseLeave={() => setTextHover(false)}
              >
                Explore sustainable living through cutting-edge prefabricated homes
              </h3>
        
              {/* TEXT */}
              <span style={{ fontSize: "15px", opacity: "0.8" }}>
                Give2 lady of they such they sure it. Me contained explained my education. Vulgar as hearts by garret...
              </span>
        
              {/* READ MORE */}
              <Link
                to="/"
                style={{
                  display: "block",
                  marginTop: "8px",
                  fontSize: "15px",
                  transition: "0.3s ease",
                  color: textHover ? "#0077ff" : "#000",
                  textDecoration: textHover ? "underline" : "none",
                  cursor: "pointer"
                }}
                onMouseEnter={() => setTextHover(true)}
                onMouseLeave={() => setTextHover(false)}
              >
                Read More →
              </Link>
            </div>
  )
}

export default BlogItems3