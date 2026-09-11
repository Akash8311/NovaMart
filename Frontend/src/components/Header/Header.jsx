import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";
import Search from "../search/Search";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import { BsCart3 } from "react-icons/bs";
import { BiGitCompare } from "react-icons/bi";
import { CiHeart, CiSearch } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
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

// Scoped responsive styles for the header. Kept as a plain <style> tag (like
// the rest of the app's inline-CSS components) so no Tailwind config changes
// are needed — this only reflows the header itself at three breakpoints:
// tablet (<=1024px), mobile (<=768px) and small mobile (<=480px).
const HEADER_STYLES = `
  .site-header-topstrip-inner {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 6px 24px;
  }
  .site-header-topstrip-links {
    display: flex;
    align-items: center;
    gap: 24px;
    list-style: none;
  }
  .site-header-topstrip-promo {
    margin: 0;
  }

  .site-header-row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
    width: 100%;
  }
  .site-header-logo {
    flex: 0 0 auto;
    width: 180px;
  }
  .site-header-logo img { width: 100%; height: auto; display: block; }

  .site-header-search {
    flex: 1 1 auto;
    min-width: 0;
    max-width: 560px;
  }

  .site-header-actions-list {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 8px;
    list-style: none;
    margin: 0;
    flex: 0 0 auto;
  }

  .site-header-mobile-search-toggle,
  .site-header-hamburger {
    display: none;
    background: none;
    border: none;
    cursor: pointer;
    align-items: center;
    justify-content: center;
    padding: 8px;
    color: #222;
  }

  /* collapsible search bar shown under the header row on small screens */
  .site-header-mobile-search {
    overflow: hidden;
    max-height: 0;
    opacity: 0;
    transition: max-height .25s ease, opacity .2s ease, margin-top .25s ease;
    width: 100%;
  }
  .site-header-mobile-search.open {
    max-height: 80px;
    opacity: 1;
    margin-top: 14px;
  }

  /* nav wrapper — plain horizontal bar on desktop, collapsible drawer on mobile */
  .site-header-nav-wrapper {
    width: 100%;
  }

  @media (max-width: 1024px) {
    .site-header-logo { width: 140px; }
    .site-header-topstrip-links { gap: 16px; }
  }

  @media (max-width: 900px) {
    .site-header-search { display: none; }
    .site-header-mobile-search-toggle { display: flex; }
  }

  @media (max-width: 768px) {
    .site-header-topstrip-promo {
      font-size: 11px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      max-width: 60%;
    }
    .site-header-topstrip-links { gap: 12px; }
    .site-header-topstrip-links a { font-size: 12px !important; }

    .site-header-logo { width: 110px; }

    .site-header-hamburger { display: flex; }

    .site-header-nav-wrapper {
      display: none;
      position: absolute;
      left: 0;
      right: 0;
      top: 100%;
      background: #fff;
      border-top: 1px solid rgba(0,0,0,0.1);
      box-shadow: 0 12px 24px rgba(0,0,0,0.08);
      z-index: 998;
      max-height: 70vh;
      overflow-y: auto;
    }
    .site-header-nav-wrapper.open { display: block; }
  }

  @media (max-width: 480px) {
    .site-header-topstrip-links li:nth-child(2) { display: none; }
    .site-header-logo { width: 92px; }
    .site-header-actions-list { gap: 2px; }
  }
`;

const Header = () => {
  const {
    setOpenCartPanel,
    setOpenWishlistPanel,
    isLogin,
    setIsLogin,
    cartItems,
    wishlistItems,
  } = useContext(MyContext);

  const itemCount = cartItems.reduce((sum, item) => sum + item.qty, 0);
  const wishlistCount = wishlistItems.length;

  const [showDropdown, setShowDropdown] = useState(false);
  const [mobileSearchOpen, setMobileSearchOpen] = useState(false);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    // Remove saved login
    localStorage.removeItem("isLogin");
    localStorage.removeItem("user");

    setIsLogin(false);

    setShowDropdown(false);

    navigate("/");
  };

  return (
    <header style={{ position: "relative" }}>
      <style>{HEADER_STYLES}</style>

      <div
        className="top-strip py-2 border-b"
        style={{ borderColor: "rgba(0,0,0,0.2)" }}
      >
        <div className="my-container px-4 mx-auto">
          <div className="site-header-topstrip-inner">
            <p className="site-header-topstrip-promo text-[12px] font-normal text-gray-700">
              Get Up to 50% off new season styles, limited time offer
            </p>
            <ul className="site-header-topstrip-links">
              <li className="list-none">
                <Link
                  to="/HelpCenter"
                  className="text-[14px] Link no-underline transition"
                >
                  Help Center
                </Link>
              </li>
              <li className="list-none">
                <Link
                  to="/OrderTracking"
                  className="text-[14px] Link no-underline transition"
                >
                  Order Tracking
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div
        className="header py-5 border-b"
        style={{ borderColor: "rgba(0,0,0,0.2)" }}
      >
        <div className="my-container px-4">
          <div className="site-header-row">
            <div className="site-header-logo">
              <Link to="/">
                <img src={logo} alt="logo" />
              </Link>
            </div>

            <div className="site-header-search">
              <Search />
            </div>

            <div className="cal3 flex items-center">
              <ul className="site-header-actions-list">
                {isLogin ? (
                  <li className="list-none relative">
                    <Tooltip title="My Account">
                      <IconButton
                        onClick={() => setShowDropdown((prev) => !prev)}
                      >
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
                          style={{
                            display: "block",
                            padding: "12px 18px",
                            fontSize: 13,
                            color: "#333",
                            textDecoration: "none",
                          }}
                        >
                          My Profile
                        </Link>
                        <Link
                          to="/CartPage"
                          onClick={() => setShowDropdown(false)}
                          style={{
                            display: "block",
                            padding: "12px 18px",
                            fontSize: 13,
                            color: "#333",
                            textDecoration: "none",
                          }}
                        >
                          My Orders
                        </Link>
                        <hr
                          style={{
                            margin: 0,
                            border: "none",
                            borderTop: "1px solid #f0f0f0",
                          }}
                        />
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
                  <>
                    <li className="list-none">
                      <Link
                        to="/logIn"
                        className="text-[17px] Link no-underline transition font-[400]"
                      >
                        Login
                      </Link>
                    </li>
                    <span>|</span>
                    <li className="list-none">
                      <Link
                        to="/Register"
                        className="text-[17px] Link no-underline transition font-[400]"
                      >
                        Register
                      </Link>
                    </li>
                  </>
                )}

                {/* delete compare button */}

                {/* wishlist */}
                <li className="list-none">
                  <Tooltip title="Wishlist">
                    <IconButton onClick={() => setOpenWishlistPanel(true)}>
                      <StyledBadge badgeContent={wishlistCount} color="secondary">
                        <CiHeart />
                      </StyledBadge>
                    </IconButton>
                  </Tooltip>
                </li>
                {/* wishlist end */}

                <li className="list-none">
                  <Tooltip title="Cart">
                    <IconButton onClick={() => setOpenCartPanel(true)}>
                      <StyledBadge badgeContent={itemCount} color="secondary">
                        <BsCart3 />
                      </StyledBadge>
                    </IconButton>
                  </Tooltip>
                </li>

                {/* mobile-only: toggles the collapsible search bar below */}
                <li className="list-none">
                  <Tooltip title="Search">
                    <button
                      className="site-header-mobile-search-toggle"
                      onClick={() => setMobileSearchOpen((prev) => !prev)}
                      aria-label="Toggle search"
                    >
                      <CiSearch size={22} />
                    </button>
                  </Tooltip>
                </li>

                {/* mobile-only: toggles the Navigation drawer below */}
                <li className="list-none">
                  <button
                    className="site-header-hamburger"
                    onClick={() => setMobileNavOpen((prev) => !prev)}
                    aria-label="Toggle menu"
                  >
                    {mobileNavOpen ? (
                      <HiOutlineX size={24} />
                    ) : (
                      <HiOutlineMenu size={24} />
                    )}
                  </button>
                </li>
              </ul>
            </div>
          </div>

          {/* collapsible search bar — only visible/usable on narrow screens
              (site-header-search is hidden there via CSS) */}
          <div
            className={`site-header-mobile-search${
              mobileSearchOpen ? " open" : ""
            }`}
          >
            <Search />
          </div>
        </div>
      </div>

      <div className={`site-header-nav-wrapper${mobileNavOpen ? " open" : ""}`}>
        <Navigation />
      </div>
    </header>
  );
};

export default Header;