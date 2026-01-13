import React, { useState } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import { IoClose } from "react-icons/io5";
import { RiMenuAddFill, RiSubtractFill } from "react-icons/ri";
import logo from "../../assets/logo.png";

const Category = (props) => {
  const [openFashion, setOpenFashion] = useState(false);
  const [openElectronic, setOpenElectronic] = useState(false);
  const [openBags, setOpenBags] = useState(false);
const [opneFootWear,setOpenFootWear] = useState (false);


  const toggleDrawer = (newOpen) => () => {
    props.setisOpenCatPanel(newOpen);
    props.setisOpenCatPanel(newOpen);
    props.setisOpenBags(newOpen);
    props.serisOpenFootWear

  };

  const DrawerList = (
    <Box
      sx={{
        width: 250,
        height: "100vh",
        overflow: "hidden",
        padding: "10px 8px",
      }}
      role="presentation"
    >
      {/* Header */}
      <img
        src={logo}
        alt="logo"
        className="w-[120px] h-auto mb-3 object-contain"
        style={{ width: "35vh",height:"8vh", padding: "0", margin: "0" ,marginRight:"300vh"}}
      />
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          fontSize: "3vh",
          fontWeight: "400",
        }}
      >
        Shop By Categories
        <IoClose
          style={{ cursor: "pointer", fontSize: "3vh" }}
          onClick={toggleDrawer(false)}
        />
      </div>

      {/* Underline */}
      <hr
        style={{
          marginTop: "28px",
          border: "none",
          borderBottom: "2px solid rgba(0,0,0,0.1)",
          margin: "10px 0 15px 0",
        }}
      />

      {/* Category List */}

      <ul className="w-full">
        <li className="list-none">
          {/* Main Category Button */}
          <Button
            onClick={() => setOpenFashion(!openFashion)}
            className="w-full !justify-start !text-left !text-black"
            sx={{
              color: "black",
              fontSize: "14px",
              textTransform: "none",
              justifyContent: "space-between",
              width: "100%",
              paddingLeft: "5px",

              "&:hover": { backgroundColor: "rgba(0,0,0,0.05)" },
            }}
          >
            Fashion
            {openFashion ? (
              <RiSubtractFill
                style={{ fontSize: "20px", marginLeft: "17vh" }}
              />
            ) : (
              <RiMenuAddFill style={{ fontSize: "20px", marginLeft: "17vh" }} />
            )}
          </Button>

          {/* Submenu (only visible if openFashion = true) */}
          {openFashion && (
            <ul className="ml-5 mt-1 space-y-1 transition-all duration-300 ease-in-out">
              <li className="list-none">
                <Button
                  className="w-full !justify-start !text-left !text-black"
                  sx={{
                    color: "black",
                    fontSize: "13px",
                    textTransform: "none",
                    justifyContent: "flex-start",
                    width: "100%",
                    "&:hover": { backgroundColor: "rgba(0,0,0,0.05)" },
                  }}
                >
                  Men
                </Button>
              </li>

              <li className="list-none">
                <Button
                  className="w-full !justify-start !text-left !text-black"
                  sx={{
                    color: "black",
                    fontSize: "13px",
                    textTransform: "none",
                    justifyContent: "flex-start",
                    width: "100%",
                    "&:hover": { backgroundColor: "rgba(0,0,0,0.05)" },
                  }}
                >
                  Women
                </Button>
              </li>

              <li className="list-none">
                <Button
                  className="w-full !justify-start !text-left !text-black"
                  sx={{
                    color: "black",
                    fontSize: "13px",
                    textTransform: "none",
                    justifyContent: "flex-start",
                    width: "100%",
                    "&:hover": { backgroundColor: "rgba(0,0,0,0.05)" },
                  }}
                >
                  Kids
                </Button>
              </li>
            </ul>
          )}
        </li>
      </ul>

      <ul className="w-full">
        <li className="list-none">
          {/* Main Category Button */}
          <Button
            onClick={() => setOpenElectronic(!openElectronic)}
            className="w-full !justify-start !text-left !text-black"
            sx={{
              color: "black",
              fontSize: "14px",
              textTransform: "none",
              justifyContent: "space-between",
              width: "100%",
              paddingLeft: "5px",
              "&:hover": { backgroundColor: "rgba(0,0,0,0.05)" },
            }}
          >
            Electronics
            {openElectronic ? (
              <RiSubtractFill
                style={{ fontSize: "20px", marginLeft: "13.5vh" }}
              />
            ) : (
              <RiMenuAddFill
                style={{ fontSize: "20px", marginLeft: "13.5vh" }}
              />
            )}
          </Button>

          {openElectronic && (
            <ul className="ml-5 mt-1 space-y-1 transition-all duration-300 ease-in-out">
              <li className="list-none">
                <Button
                  className="w-full !justify-start !text-left !text-black"
                  sx={{
                    color: "black",
                    fontSize: "13px",
                    textTransform: "none",
                    justifyContent: "flex-start",
                    width: "100%",
                    "&:hover": { backgroundColor: "rgba(0,0,0,0.05)" },
                  }}
                >
                  Smart Watch
                </Button>
              </li>

              <li className="list-none">
                <Button
                  className="w-full !justify-start !text-left !text-black"
                  sx={{
                    color: "black",
                    fontSize: "13px",
                    textTransform: "none",
                    justifyContent: "flex-start",
                    width: "100%",
                    "&:hover": { backgroundColor: "rgba(0,0,0,0.05)" },
                  }}
                >
                  Laptops
                </Button>
              </li>

              <li className="list-none">
                <Button
                  className="w-full !justify-start !text-left !text-black"
                  sx={{
                    color: "black",
                    fontSize: "13px",
                    textTransform: "none",
                    justifyContent: "flex-start",
                    width: "100%",
                    "&:hover": { backgroundColor: "rgba(0,0,0,0.05)" },
                  }}
                >
                  Mobiles
                </Button>
              </li>
              
              <li className="list-none">
                <Button
                  className="w-full !justify-start !text-left !text-black"
                  sx={{
                    color: "black",
                    fontSize: "13px",
                    textTransform: "none",
                    justifyContent: "flex-start",
                    width: "100%",
                    "&:hover": { backgroundColor: "rgba(0,0,0,0.05)" },
                  }}
                >
                  Headphone
                </Button>
              </li>
            </ul>
          )}
        </li>
      </ul>

      <ul className="w-full">
        <li className="list-none">
          {/* Main Category Button */}
          <Button
            onClick={() => setOpenBags(!openBags)}
            className="w-full !justify-start !text-left !text-black"
            sx={{
              color: "black",
              fontSize: "14px",
              textTransform: "none",
              justifyContent: "space-between",
              width: "100%",
              paddingLeft: "5px",
              "&:hover": { backgroundColor: "rgba(0,0,0,0.05)" },
            }}
          >
            Bags
            {openBags ? (
              <RiSubtractFill
                style={{ fontSize: "20px", marginLeft: "19.5vh" }}
              />
            ) : (
              <RiMenuAddFill
                style={{ fontSize: "20px", marginLeft: "19.5vh" }}
              />
            )}
          </Button>

          {openBags && (
            <ul className="ml-5 mt-1 space-y-1 transition-all duration-300 ease-in-out">
              <li className="list-none">
                <Button
                  className="w-full !justify-start !text-left !text-black"
                  sx={{
                    color: "black",
                    fontSize: "13px",
                    textTransform: "none",
                    justifyContent: "flex-start",
                    width: "100%",
                    "&:hover": { backgroundColor: "rgba(0,0,0,0.05)" },
                  }}
                >
                  Men Bags
                </Button>
              </li>

              <li className="list-none">
                <Button
                  className="w-full !justify-start !text-left !text-black"
                  sx={{
                    color: "black",
                    fontSize: "13px",
                    textTransform: "none",
                    justifyContent: "flex-start",
                    width: "100%",
                    "&:hover": { backgroundColor: "rgba(0,0,0,0.05)" },
                  }}
                >
                  Women Bags
                </Button>
              </li>
            </ul>
          )}
        </li>
      </ul>

      <ul className="w-full">
        <li className="list-none">
          {/* Main Category Button */}
          <Button
            onClick={() => setOpenFootWear(!opneFootWear)}
            className="w-full !justify-start !text-left !text-black"
            sx={{
              color: "black",
              fontSize: "14px",
              textTransform: "none",
              justifyContent: "space-between",
              width: "100%",
              paddingLeft: "5px",
              "&:hover": { backgroundColor: "rgba(0,0,0,0.05)" },
            }}
          >
            FootWear
            {opneFootWear ? (
              <RiSubtractFill
                style={{ fontSize: "20px", marginLeft: "14.5vh" }}
              />
            ) : (
              <RiMenuAddFill
                style={{ fontSize: "20px", marginLeft: "14.5vh" }}
              />
            )}
          </Button>

          {opneFootWear && (
            <ul className="ml-5 mt-1 space-y-1 transition-all duration-300 ease-in-out">
              <li className="list-none">
                <Button
                  className="w-full !justify-start !text-left !text-black"
                  sx={{
                    color: "black",
                    fontSize: "13px",
                    textTransform: "none",
                    justifyContent: "flex-start",
                    width: "100%",
                    "&:hover": { backgroundColor: "rgba(0,0,0,0.05)" },
                  }}
                >
                  Men FootWear
                </Button>
              </li>

              <li className="list-none">
                <Button
                  className="w-full !justify-start !text-left !text-black"
                  sx={{
                    color: "black",
                    fontSize: "13px",
                    textTransform: "none",
                    justifyContent: "flex-start",
                    width: "100%",
                    "&:hover": { backgroundColor: "rgba(0,0,0,0.05)" },
                  }}
                >
                  Womens FootWear
                </Button>
              </li>
            </ul>
          )}
        </li>
      </ul>





 <ul className="w-full">
        <li className="list-none">
          {/* Main Category Button */}
          <Button
        
            className="w-full !justify-start !text-left !text-black"
            sx={{
              color: "black",
              fontSize: "14px",
              textTransform: "none",
              justifyContent: "space-between",
              width: "100%",
              paddingLeft: "5px",
              "&:hover": { backgroundColor: "rgba(0,0,0,0.05)" },
            }}
          >
            Groceries
          <RiMenuAddFill style={{marginLeft:"14.5vh",fontSize: "20px"}}/>
          </Button>

         
        </li>
      </ul>






 <ul className="w-full">
        <li className="list-none">
          {/* Main Category Button */}
          <Button
        
            className="w-full !justify-start !text-left !text-black"
            sx={{
              color: "black",
              fontSize: "14px",
              textTransform: "none",
              justifyContent: "space-between",
              width: "100%",
              paddingLeft: "5px",
              "&:hover": { backgroundColor: "rgba(0,0,0,0.05)" },
            }}
          >
            Beauty
          <RiMenuAddFill style={{marginLeft:"17vh",fontSize: "20px"}}/>
          </Button>

         
        </li>
      </ul>





 <ul className="w-full">
        <li className="list-none">
          <Button
        
            className="w-full !justify-start !text-left !text-black"
            sx={{
              color: "black",
              fontSize: "14px",
              textTransform: "none",
              justifyContent: "space-between",
              width: "100%",
              paddingLeft: "5px",
              "&:hover": { backgroundColor: "rgba(0,0,0,0.05)" },
            }}
          >
            Wellness
          <RiMenuAddFill style={{marginLeft:"14.5vh",fontSize: "20px"}}/>
          </Button>

         
        </li>
      </ul>






 <ul className="w-full">
        <li className="list-none">
          {/* Main Category Button */}
          <Button
        
            className="w-full !justify-start !text-left !text-black"
            sx={{
              color: "black",
              fontSize: "16px",
              textTransform: "none",
              justifyContent: "space-between",
              width: "100%",
              paddingLeft: "5px",
              "&:hover": { backgroundColor: "rgba(0,0,0,0.05)" },
            }}
          >
            Jewellery
          <RiMenuAddFill style={{marginLeft:"14.5vh",fontSize: "20px"}}/>
          </Button>

         
        </li>
      </ul>



    </Box>
  );

  return (
    <Drawer
      open={props.isOpenCatPanel}
      onClose={toggleDrawer(false)}
      PaperProps={{
        sx: { overflow: "hidden" },
      }}
    >
      {DrawerList}
    </Drawer>
  );
};

export default Category;
