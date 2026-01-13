import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import Search from "../search/Search";
import Button from "@mui/material/Button";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import { BsCart3 } from "react-icons/bs";
import { BiGitCompare } from "react-icons/bi";
import { CiHeart } from "react-icons/ci";
import Tooltip from '@mui/material/Tooltip';
import Navigation from "./Navigation/Navigation";



const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${(theme.vars ?? theme).palette.background.paper}`,
    padding: "0 4px",
  },
}));

const Header = () => {
  return (
    <header>
<div className="top-strip py-2 border-b" style={{ borderColor: 'rgba(0,0,0,0.2)' }}>

        <div className="my-container px-4 mx-auto">
          <div className="flex items-center justify-between">
            <p className="text-[12px] font-normal text-gray-700">
              Get Up to 50% off new season styles, limited time offer
            </p>
            <ul
              className="flex items-center gap-8 bg-gray-100 "
              style={{ gap: "50px" }}
            >
              <li className="list-none">
                <Link
                  to="/help-center"
                  className="text-[14px] Link no-underline transition "
                >
                  Help Center
                </Link>
              </li>
              <li className="list-none">
                <Link
                  to="/order-tracking"
                  className="text-[14px] Link no-underline transition"
                >
                  Order Tracking
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="header py-5 border-b" style={{ borderColor: 'rgba(0,0,0,0.2)' }}>
        <div className="my-container flex items-center justify-between">
          <div className="col1 w-[25%] h-[80%]">
            <Link to="/">
              <img src={logo} className="w-full h-auto" alt="logo" />
            </Link>
          </div>
          <div className="cal2 w-[40%]">
            <Search />
          </div>

          <div className="cal3 w-[30%] flex items-center">
           <ul
              className="flex items-center gap-3 justify-end w-full"
              style={{ gap: "8px" ,marginRight:"20px"}}
            >              <li className="list-none">
                <Link
                  to="/login"
                  className="text-[17px] Link no-underline transition font-[400]"
                >
                 Login
                </Link>
              </li>
              <span>|</span>
              <li className="list-none">
                <Link
                  to="/register"
                  className="text-[17px] Link no-underline transition font-[400]"
                >
                  Register
                </Link>
              </li>


      <li className="list-none">
            <Tooltip title="Compare">

                <IconButton aria-label="cart">
                  <StyledBadge badgeContent={4} color="secondary">
                    <BiGitCompare  />
                  </StyledBadge>
                </IconButton>
                </Tooltip>
              </li>

                 <li className="list-none">
                              <Tooltip title="Wishlist">

                <IconButton aria-label="cart">
                  <StyledBadge badgeContent={4} color="secondary">
                    <CiHeart  />
                  </StyledBadge>
                </IconButton>
                </Tooltip>
              </li>
               <li className="list-none">
                 <Tooltip title="Cart">
                <IconButton aria-label="cart">
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
  <Navigation/>
</div>


    </header>
  );
};

export default Header;
