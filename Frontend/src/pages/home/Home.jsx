import React, { useState } from "react";
import HomeSlider from "../../components/HomesSlider/HomeSlider";
import CatSlider from "../../components/CatSlider/CatSlider";
import { TbTruckDelivery } from "react-icons/tb";
import { SiFreenet } from "react-icons/si";
import AdsBanner from "../../components/AdsBannerSlider/AdsBanner";
import { MdOutlineShoppingCart } from "react-icons/md";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Poducts from "../../components/ProductsSlider/Poducts";
import AdsSectionHome from "../../components/AdsSectionHome/AdsSectionHome";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import BlogItems from "../../components/BlogItems/BlogItems";
import BlogItems2 from "../../components/BlogItems/BlogItems2";
import BlogItems4 from "../../components/BlogItems/BlogItems4";

const Home = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };




  return (
    <div>
      <div style={{ backgroundColor: "#e0e0e0", overflow: "hidden" }}>
        <HomeSlider />
        <CatSlider />

        <section style={{ background: "#fff", marginTop: "5px" }}>
          <style>
            {`
            @keyframes pop {
              0% { transform: scale(1); color:#000; }
              100% { transform: scale(1.15); color:blue; }
            }

            @keyframes moveTruck {
              0% { transform: translateX(0) scale(1); }
              100% { transform: translateX(12px) scale(1.1); }
            }
          `}
          </style>

          <div
            className="my-container"
            style={{ paddingTop: "25px", paddingBottom: "25px" }}
          >
            {/* Free Shipping Section */}
            <div
              style={{
                border: "2px solid #bfbfbf",
                padding: "20px",
                display: "flex",
                justifyContent: "center",
                gap: "40px",
                alignItems: "center",
                width: "100%",
                transition: "0.4s ease",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-4px)";
                e.currentTarget.style.boxShadow = "0 8px 20px rgba(0,0,0,0.15)";
                e.currentTarget.querySelector(".truck").style.animation =
                  "moveTruck .6s forwards";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0px)";
                e.currentTarget.style.boxShadow = "none";
                e.currentTarget.querySelector(".truck").style.animation =
                  "none";
              }}
            >
              <div
                style={{ display: "flex", alignItems: "center", gap: "12px" }}
              >
                <TbTruckDelivery
                  className="truck"
                  style={{ fontSize: "70px", transition: "0.4s" }}
                />
                <span
                  style={{
                    fontSize: "28px",
                    fontWeight: "600",
                    display: "flex",
                    gap: "5px",
                  }}
                >
                  FREE SHIPPING <SiFreenet style={{ marginTop: "5px" }} />
                </span>
              </div>
              <div
                style={{ height: "55px", width: "2px", background: "#8C8C8C" }}
              ></div>
              <span style={{ fontSize: "20px", fontWeight: "400" }}>
                Free Delivery Now on Your First Order And Over $200
              </span>
              <div
                style={{ height: "55px", width: "2px", background: "#8C8C8C" }}
              ></div>
              <span
                style={{
                  fontSize: "30px",
                  fontWeight: "700",
                  animation: "pop 1.5s infinite alternate",
                }}
              >
                - ONLY $200
              </span>
            </div>
            {/* 🔥 Popular Products Section */}
            <section style={{ padding: "10px 0" }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <div>
                  <h2
                    style={{
                      fontSize: "25px",
                      marginBottom: "3px",
                      display: "flex",
                      alignItems: "center",
                      gap: "5px",
                    }}
                  >
                    Popular Products <MdOutlineShoppingCart />
                  </h2>
                  <p
                    style={{
                      marginTop: "0px",
                      color: "black",
                      fontSize: "15px",
                    }}
                  >
                    Do not miss the current offers until the end of the Year....
                  </p>
                </div>

                {/* RIGHT TAB FILTER */}
                <Box
                  sx={{
                    maxWidth: { xs: 200, sm: 480 },
                    bgcolor: "background.paper",
                  }}
                >
                  <Tabs
                    value={value}
                    onChange={handleChange}
                    variant="scrollable"
                    scrollButtons
                    allowScrollButtonsMobile
                  >
                    <Tab label="Fashion" style={{ fontWeight: "bold" }} />
                    <Tab label="Electronics" style={{ fontWeight: "bold" }} />
                    <Tab label="Mobile" style={{ fontWeight: "bold" }} />
                    <Tab label="Grocery" style={{ fontWeight: "bold" }} />
                    <Tab label="Shoes" style={{ fontWeight: "bold" }} />
                    <Tab label="Cosmetics" style={{ fontWeight: "bold" }} />
                    <Tab label="Jewellery" style={{ fontWeight: "bold" }} />
                  </Tabs>
                </Box>
              </div>

              <Poducts items={5} />
            </section>

            <AdsSectionHome />

            <AdsBanner items={4} />
          </div>
        </section>



        {/* from vlog section */}
        <section className="blogsection" style={{padding:"5px",background:"#fff",paddingBottom:"10px",paddingLeft:"75px"}}>
                  <div style={{padding:"5"}}> 
                    <h2 style={{fontSize:"3vh",paddingBottom:"0px",fontWeight:"400",}}>From The Blog</h2>
                     <div
        style={{
        margin: "auto",
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
        gap: "40px",  
      }}
    >
          <BlogItems />
          <BlogItems2 />
          <BlogItems />
          <BlogItems4 />
       </div>
                  </div>
        </section>



{/* footer section */}
      <section style={{background:"#fff"}}>
        <div>
        </div>
      </section>

      </div>
    </div>
  );
};

export default Home;
