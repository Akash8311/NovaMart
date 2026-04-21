import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";
import Search from "../search/Search";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import { BsCart3 } from "react-icons/bs";
import { BiGitCompare } from "react-icons/bi";
import { CiHeart } from "react-icons/ci";
import { CgProfile } from "react-icons/cg"; // 👤 profile icon
import Tooltip from "@mui/material/Tooltip";
import Navigation from "./Navigation/Navigation";
import { MyContext } from "../../App";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${(theme.vars ?? theme).palette.background.paper}`,
    padding: "0 4px",
  },
}));

const Header = () => {
  const { setOpenCartPanel, isLogin, setIsLogin } = useContext(MyContext);
  const [showDropdown, setShowDropdown] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    setIsLogin(false);
    setShowDropdown(false);
    navigate("/");
  };

  return (
    <header>
      {/* Top Strip */}
      <div className="top-strip py-2 border-b" style={{ borderColor: "rgba(0,0,0,0.2)" }}>
        <div className="my-container px-4 mx-auto">
          <div className="flex items-center justify-between">
            <p className="text-[12px] font-normal text-gray-700">
              Get Up to 50% off new season styles, limited time offer
            </p>
            <ul className="flex items-center gap-8 bg-gray-100" style={{ gap: "50px" }}>
              <li className="list-none">
                <Link to="/help-center" className="text-[14px] Link no-underline transition">
                  Help Center
                </Link>
              </li>
              <li className="list-none">
                <Link to="/order-tracking" className="text-[14px] Link no-underline transition">
                  Order Tracking
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="header py-5 border-b" style={{ borderColor: "rgba(0,0,0,0.2)" }}>
        <div className="my-container flex items-center justify-between">
          {/* Logo */}
          <div className="col1 w-[25%] h-[80%]">
            <Link to="/">
              <img src={logo} className="w-full h-auto" alt="logo" />
            </Link>
          </div>

          {/* Search */}
          <div className="cal2 w-[40%]">
            <Search />
          </div>

          {/* Right Icons */}
          <div className="cal3 w-[30%] flex items-center">
            <ul className="flex items-center justify-end w-full" style={{ gap: "8px", marginRight: "20px" }}>

              {/* ── AUTH SECTION ── */}
              {isLogin ? (
                <li className="list-none relative">
                  <Tooltip title="My Account">
                    <IconButton onClick={() => setShowDropdown((prev) => !prev)}>
                      <CgProfile size={24} />
                    </IconButton>
                  </Tooltip>

                  {showDropdown && (
                    <div
                      style={{
                        position: "absolute",
                        right: 0,
                        top: 46,
                        background: "#fff",
                        border: "1px solid #eee",
                        borderRadius: 10,
                        boxShadow: "0 8px 30px rgba(0,0,0,0.12)",
                        minWidth: 160,
                        zIndex: 999,
                        overflow: "hidden",
                      }}
                    >
                      <Link
                        to="/profile"
                        onClick={() => setShowDropdown(false)}
                        style={{ display: "block", padding: "12px 18px", fontSize: 13, color: "#333", textDecoration: "none" }}
                      >
                        My Profile
                      </Link>
                      <Link
                        to="/CartPage"
                        onClick={() => setShowDropdown(false)}
                        style={{ display: "block", padding: "12px 18px", fontSize: 13, color: "#333", textDecoration: "none" }}
                      >
                        My Orders
                      </Link>
                      <hr style={{ margin: 0, border: "none", borderTop: "1px solid #f0f0f0" }} />
                      <button
                        onClick={handleLogout}
                        style={{
                          width: "100%",
                          padding: "12px 18px",
                          background: "none",
                          border: "none",
                          textAlign: "left",
                          fontSize: 13,
                          color: "#dc2626",
                          cursor: "pointer",
                        }}
                      >
                        Logout
                      </button>
                    </div>
                  )}
                </li>
              ) : (
                // ✅ Logged out → show Login | Register
                <>
                  <li className="list-none">
                    <Link to="/logIn" className="text-[17px] Link no-underline transition font-[400]">
                      Login
                    </Link>
                  </li>
                  <span>|</span>
                  <li className="list-none">
                    <Link to="/Register" className="text-[17px] Link no-underline transition font-[400]">
                      Register
                    </Link>
                  </li>
                </>
              )}

              {/* Compare */}
              <li className="list-none">
                <Tooltip title="Compare">
                  <IconButton>
                    <StyledBadge badgeContent={4} color="secondary">
                      <BiGitCompare />
                    </StyledBadge>
                  </IconButton>
                </Tooltip>
              </li>

              {/* Wishlist */}
              <li className="list-none">
                <Tooltip title="Wishlist">
                  <IconButton>
                    <StyledBadge badgeContent={4} color="secondary">
                      <CiHeart />
                    </StyledBadge>
                  </IconButton>
                </Tooltip>
              </li>

              {/* Cart */}
              <li className="list-none">
                <Tooltip title="Cart">
                  <IconButton onClick={() => setOpenCartPanel(true)}>
                    <StyledBadge badgeContent={4} color="secondary">
                      <BsCart3 />
                    </StyledBadge>
                  </IconButton>
                </Tooltip>
              </li>

            </ul>
          </div>
        </div>
      </div>

      <div>
        <Navigation />
      </div>
    </header>
  );
};

export default Header;