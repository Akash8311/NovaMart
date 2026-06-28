import React from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import HomeIcon from "@mui/icons-material/Home";
import WhatshotIcon from "@mui/icons-material/Whatshot";

import ProductItems from "../../components/ProductItems/ProductItems";
import ProductItems2 from "../../components/ProductItems/ProductItems2";
import ProductItems3 from "../../components/ProductItems/ProductItems3";
import ProductItems4 from "../../components/ProductItems/ProductItems4";
import ProductItems5 from "../../components/ProductItems/ProductItems5";
import ProductItems6 from "../../components/ProductItems/ProductItems6";
import ProductItems7 from "../../components/ProductItems/ProductItems7";
import ProductItems8 from "../../components/ProductItems/ProductItems8";
import ProductItems9 from "../../components/ProductItems/ProductItems9";
import ProductItems10 from "../../components/ProductItems/ProductItems10";
import ProductItems11 from "../../components/ProductItems/ProductItems11";
import ProductItems12 from "../../components/ProductItems/ProductItems12";

import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import CircularProgress from "@mui/material/CircularProgress";

import { IoGrid } from "react-icons/io5";
import { IoMdMenu } from "react-icons/io";

const Productlisting = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [sortValue, setSortValue] = React.useState("Featured");
  const [viewType, setViewType] = React.useState("grid");
  const [loading, setLoading] = React.useState(false);

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
        padding: "25px",
        minHeight: "100vh",
      }}
    >
      {/* Breadcrumb */}
      <Breadcrumbs
        style={{
          marginBottom: "25px",
          fontSize: "15px",
          fontWeight: "600",
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

      {/* Main Layout */}
      <div
        style={{
          display: "flex",
          gap: "25px",
          flexWrap: "wrap",
          alignItems: "flex-start", /* ← required for sticky to work */
        }}
      >
        {/* ─── SIDEBAR: sticky + slide-in animation ─── */}
        <div
          className="sidebarWrap"
          style={{
            flex: "1 1 250px",
            position: "sticky",   /* ← no scroll */
            top: "25px",          /* ← sticks 25px from top of viewport */
            borderRadius: "20px",
            padding: "20px",
            boxShadow: "0 5px 20px rgba(0,0,0,0.06)",
            height: "fit-content",
            background: "#fff",
          }}
        >
          <Sidebar />
        </div>

        {/* Products Section */}
        <div style={{ flex: "4 1 900px" }}>
          {/* Top Bar */}
          <div
            style={{
              borderRadius: "20px",
              padding: "18px 25px",
              marginBottom: "25px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
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
              }}
            >
              <Button
                onClick={() => setViewType("list")}
                style={{
                  minWidth: "48px",
                  height: "48px",
                  borderRadius: "14px",
                  background: viewType === "list" ? "#111" : "#f5f5f5",
                  color: viewType === "list" ? "#fff" : "#333",
                  transition: "0.3s",
                }}
              >
                <IoMdMenu size={22} />
              </Button>

              <Button
                onClick={() => setViewType("grid")}
                style={{
                  minWidth: "48px",
                  height: "48px",
                  borderRadius: "14px",
                  background: viewType === "grid" ? "#111" : "#f5f5f5",
                  color: viewType === "grid" ? "#fff" : "#333",
                  transition: "0.3s",
                }}
              >
                <IoGrid size={22} />
              </Button>

              <span
                style={{
                  fontSize: "15px",
                  color: "#555",
                  fontWeight: "500",
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
              }}
            >
              <span style={{ fontWeight: "600", color: "#444" }}>Sort By</span>

              <Button
                onClick={handleClick}
                style={{
                  background: "#fff",
                  borderRadius: "12px",
                  padding: "10px 18px",
                  textTransform: "none",
                  color: "#222",
                  border: "1px solid #eee",
                  boxShadow: "0 3px 10px rgba(0,0,0,0.06)",
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
                  : "repeat(auto-fit,minmax(220px,1fr))",
              gap: "24px",
            }}
          >
            <div className="productCard"><ProductItems view={viewType} /></div>
            <div className="productCard"><ProductItems2 view={viewType} /></div>
            <div className="productCard"><ProductItems3 view={viewType} /></div>
            <div className="productCard"><ProductItems4 view={viewType} /></div>
            <div className="productCard"><ProductItems5 view={viewType} /></div>
            <div className="productCard"><ProductItems6 view={viewType} /></div>
            <div className="productCard"><ProductItems7 view={viewType} /></div>
            <div className="productCard"><ProductItems8 view={viewType} /></div>
            <div className="productCard"><ProductItems9 view={viewType} /></div>
            <div className="productCard"><ProductItems10 view={viewType} /></div>
            <div className="productCard"><ProductItems11 view={viewType} /></div>
            <div className="productCard"><ProductItems12 view={viewType} /></div>
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
                size={45}
                thickness={4}
                style={{ color: "#111" }}
              />
              <p
                style={{
                  fontWeight: "600",
                  color: "#444",
                  letterSpacing: "1px",
                }}
              >
                Loading More Products...
              </p>
            </div>
          )}
        </div>
      </div>

      {/* ─── CSS ─── */}
      <style>
        {`
          /* ── Sidebar slide-in from left ── */
          .sidebarWrap {
            animation: slideInLeft 0.55s cubic-bezier(.22,1,.36,1) both;
          }

          @keyframes slideInLeft {
            from {
              opacity: 0;
              transform: translateX(-40px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }

          /* ── Product cards: fade-up + staggered delays ── */
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
            from {
              opacity: 0;
              transform: translateY(40px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
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