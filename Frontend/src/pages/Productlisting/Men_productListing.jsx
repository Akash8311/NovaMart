import React from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import HomeIcon from "@mui/icons-material/Home";
import WhatshotIcon from "@mui/icons-material/Whatshot";

import MenProduct1 from "../ProductDetails/Men/MenProduct1";
import MenProduct2 from "../ProductDetails/Men/MenProduct2";
import MenProduct3 from "../ProductDetails/Men/MenProduct3";
import MenProduct4 from "../ProductDetails/Men/MenProduct4";
import MenProduct5 from "../ProductDetails/Men/MenProduct5";
import MenProduct6 from "../ProductDetails/Men/MenProduct6";
import MenProduct7 from "../ProductDetails/Men/MenProduct7";
import MenProduct8 from "../ProductDetails/Men/MenProduct8";
import MenProduct9 from "../ProductDetails/Men/MenProduct9";
import MenProduct10 from "../ProductDetails/Men/MenProduct10";
import MenProduct11 from "../ProductDetails/Men/MenProduct11";
import MenProduct12 from "../ProductDetails/Men/MenProduct12";


import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import CircularProgress from "@mui/material/CircularProgress";

import { IoGrid } from "react-icons/io5";
import { IoMdMenu } from "react-icons/io";

// ── Hook: tracks window width so inline styles can respond like breakpoints ──
const useWindowWidth = () => {
  const [width, setWidth] = React.useState(
    typeof window !== "undefined" ? window.innerWidth : 1200
  );

  React.useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return width;
};

const Productlisting = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [sortValue, setSortValue] = React.useState("Featured");
  const [viewType, setViewType] = React.useState("grid");
  const [loading, setLoading] = React.useState(false);
  const [sidebarOpen, setSidebarOpen] = React.useState(false);

  const width = useWindowWidth();
  const isMobile = width < 768;
  const isTablet = width >= 768 && width < 1024;

  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  React.useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const fullHeight = document.documentElement.scrollHeight;

      if (scrollTop + windowHeight >= fullHeight - 100) {
        setLoading(true);
        setTimeout(() => {
          setLoading(false);
        }, 1500);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      style={{
        padding: isMobile ? "14px" : "25px",
        minHeight: "100vh",
      }}
    >
      {/* Breadcrumb */}
      <Breadcrumbs
        style={{
          marginBottom: isMobile ? "16px" : "25px",
          fontSize: isMobile ? "13px" : "15px",
          fontWeight: "600",
          flexWrap: "wrap",
        }}
      >
        <Link
          underline="hover"
          color="inherit"
          href="/"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "5px",
          }}
        >
          <HomeIcon fontSize="small" />
          Home
        </Link>

        <Link
          underline="hover"
          color="inherit"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "5px",
          }}
        >
          <WhatshotIcon fontSize="small" />
          Fashion
        </Link>
      </Breadcrumbs>

      {/* Mobile filter toggle */}
      {isMobile && (
        <Button
          onClick={() => setSidebarOpen((prev) => !prev)}
          style={{
            width: "100%",
            marginBottom: "16px",
            borderRadius: "14px",
            padding: "12px",
            background: "#111",
            color: "#fff",
            textTransform: "none",
            fontWeight: "600",
          }}
        >
          {sidebarOpen ? "Hide filters" : "Show filters"}
        </Button>
      )}

      {/* Main Layout */}
      <div
        style={{
          display: "flex",
          gap: isMobile ? "16px" : "25px",
          flexWrap: "wrap",
          alignItems: "flex-start",
          flexDirection: isMobile ? "column" : "row",
        }}
      >
        {/* ─── SIDEBAR ─── */}
        {(!isMobile || sidebarOpen) && (
          <div
            className="sidebarWrap"
            style={{
              flex: isMobile ? "1 1 100%" : isTablet ? "1 1 220px" : "1 1 250px",
              width: isMobile ? "100%" : "auto",
              position: isMobile ? "static" : "sticky",
              top: "25px",
              borderRadius: "20px",
              padding: isMobile ? "16px" : "20px",
              boxShadow: "0 5px 20px rgba(0,0,0,0.06)",
              height: "fit-content",
              background: "#fff",
              boxSizing: "border-box",
            }}
          >
            <Sidebar />
          </div>
        )}

        {/* Products Section */}
        <div style={{ flex: "4 1 300px", width: "100%", minWidth: 0 }}>
          {/* Top Bar */}
          <div
            style={{
              borderRadius: "20px",
              padding: isMobile ? "14px 16px" : "18px 25px",
              marginBottom: isMobile ? "16px" : "25px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: isMobile ? "stretch" : "center",
              flexDirection: isMobile ? "column" : "row",
              flexWrap: "wrap",
              gap: "15px",
              background: "#fff",
              boxShadow: "0 5px 20px rgba(0,0,0,0.06)",
            }}
          >
            {/* Left */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "15px",
                flexWrap: "wrap",
                justifyContent: isMobile ? "space-between" : "flex-start",
              }}
            >
              <div style={{ display: "flex", gap: "10px" }}>
                <Button
                  onClick={() => setViewType("list")}
                  style={{
                    minWidth: isMobile ? "42px" : "48px",
                    height: isMobile ? "42px" : "48px",
                    borderRadius: "14px",
                    background: viewType === "list" ? "#111" : "#f5f5f5",
                    color: viewType === "list" ? "#fff" : "#333",
                    transition: "0.3s",
                  }}
                >
                  <IoMdMenu size={isMobile ? 18 : 22} />
                </Button>

                <Button
                  onClick={() => setViewType("grid")}
                  style={{
                    minWidth: isMobile ? "42px" : "48px",
                    height: isMobile ? "42px" : "48px",
                    borderRadius: "14px",
                    background: viewType === "grid" ? "#111" : "#f5f5f5",
                    color: viewType === "grid" ? "#fff" : "#333",
                    transition: "0.3s",
                  }}
                >
                  <IoGrid size={isMobile ? 18 : 22} />
                </Button>
              </div>

              <span
                style={{
                  fontSize: isMobile ? "13px" : "15px",
                  color: "#555",
                  fontWeight: "500",
                  whiteSpace: "nowrap",
                }}
              >
                Showing <b>12</b> Products
              </span>
            </div>

            {/* Right */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                justifyContent: isMobile ? "space-between" : "flex-start",
              }}
            >
              <span style={{ fontWeight: "600", color: "#444", fontSize: isMobile ? "13px" : "14px" }}>
                Sort By
              </span>

              <Button
                onClick={handleClick}
                style={{
                  background: "#fff",
                  borderRadius: "12px",
                  padding: isMobile ? "8px 14px" : "10px 18px",
                  textTransform: "none",
                  color: "#222",
                  border: "1px solid #eee",
                  boxShadow: "0 3px 10px rgba(0,0,0,0.06)",
                  fontSize: isMobile ? "13px" : "14px",
                  flex: isMobile ? 1 : "none",
                }}
              >
                {sortValue}
              </Button>

              <Menu
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                PaperProps={{
                  style: {
                    borderRadius: "16px",
                    padding: "8px",
                  },
                }}
              >
                {["Featured", "Newest", "Price Low To High", "Price High To Low"].map(
                  (item) => (
                    <MenuItem
                      key={item}
                      onClick={() => {
                        setSortValue(item);
                        handleClose();
                      }}
                      style={{
                        borderRadius: "10px",
                        marginBottom: "4px",
                      }}
                    >
                      {item}
                    </MenuItem>
                  )
                )}
              </Menu>
            </div>
          </div>

          {/* Product Grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                viewType === "list"
                  ? "1fr"
                  : isMobile
                    ? "repeat(auto-fit,minmax(150px,1fr))"
                    : isTablet
                      ? "repeat(auto-fit,minmax(190px,1fr))"
                      : "repeat(auto-fit,minmax(220px,1fr))",
              gap: isMobile ? "14px" : "24px",
            }}
          >
            <div className="productCard"><MenProduct1 view={viewType} /></div>
            <div className="productCard">  <MenProduct2 view={viewType} /></div>
            <div className="productCard">  <MenProduct3 view={viewType} /></div>
            <div className="productCard">  <MenProduct4 view={viewType} /></div>
            <div className="productCard">  <MenProduct5 view={viewType} /></div>
            <div className="productCard">  <MenProduct6 view={viewType} /></div>
            <div className="productCard">  <MenProduct7 view={viewType} /></div>
            <div className="productCard">  <MenProduct8 view={viewType} /></div>
            <div className="productCard">  <MenProduct9 view={viewType} /></div>
            <div className="productCard">  <MenProduct10 view={viewType} /></div>
            <div className="productCard">  <MenProduct11 view={viewType} /></div>
            <div className="productCard"><MenProduct12 view={viewType} /></div>
          </div>

          {/* Loader */}
          {loading && (
            <div
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                gap: "15px",
                padding: "40px 0",
              }}
            >
              <CircularProgress
                size={isMobile ? 36 : 45}
                thickness={4}
                style={{ color: "#111" }}
              />
              <p
                style={{
                  fontWeight: "600",
                  color: "#444",
                  letterSpacing: "1px",
                  fontSize: isMobile ? "13px" : "14px",
                  textAlign: "center",
                }}
              >
                Loading More Products...
              </p>
            </div>
          )}
        </div>
      </div>

      {/*
        Note: hover states, @keyframes animation, and ::-webkit-scrollbar
        cannot be expressed as inline styles (React inline style objects
        support neither pseudo-classes nor pseudo-elements nor @keyframes).
        A minimal <style> tag is kept for those three effects only; every
        layout, spacing, and breakpoint decision above is inline JS/CSS
        driven by the isMobile/isTablet flags.
      */}
      <style>
        {`
          .sidebarWrap {
            animation: slideInLeft 0.55s cubic-bezier(.22,1,.36,1) both;
          }

          @keyframes slideInLeft {
            from { opacity: 0; transform: translateX(-40px); }
            to { opacity: 1; transform: translateX(0); }
          }

          .productCard {
            border-radius: 22px;
            transition: transform 0.4s cubic-bezier(.22,1,.36,1),
                        box-shadow 0.4s ease;
            animation: fadeUp 0.6s cubic-bezier(.22,1,.36,1) both;
          }

          .productCard:hover {
            transform: translateY(-12px) scale(1.03);
            box-shadow: 0 20px 45px rgba(0,0,0,0.12);
          }

          .productCard:nth-child(1)  { animation-delay: 0.05s; }
          .productCard:nth-child(2)  { animation-delay: 0.10s; }
          .productCard:nth-child(3)  { animation-delay: 0.15s; }
          .productCard:nth-child(4)  { animation-delay: 0.20s; }
          .productCard:nth-child(5)  { animation-delay: 0.25s; }
          .productCard:nth-child(6)  { animation-delay: 0.30s; }
          .productCard:nth-child(7)  { animation-delay: 0.35s; }
          .productCard:nth-child(8)  { animation-delay: 0.40s; }
          .productCard:nth-child(9)  { animation-delay: 0.45s; }
          .productCard:nth-child(10) { animation-delay: 0.50s; }
          .productCard:nth-child(11) { animation-delay: 0.55s; }
          .productCard:nth-child(12) { animation-delay: 0.60s; }

          @keyframes fadeUp {
            from { opacity: 0; transform: translateY(40px); }
            to { opacity: 1; transform: translateY(0); }
          }

          html {
            scroll-behavior: smooth;
          }

          ::-webkit-scrollbar {
            width: 8px;
          }

          ::-webkit-scrollbar-thumb {
            background: #111;
            border-radius: 20px;
          }
        `}
      </style>
    </section>
  );
};

export default Productlisting;