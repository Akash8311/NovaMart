import React from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import HomeIcon from "@mui/icons-material/Home";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import ProductItems from "../../components/ProductItems/ProductItems";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { IoGrid } from "react-icons/io5";
import { IoMdMenu } from "react-icons/io";

const Productlisting = () => {
  // sort dropdown
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [sortValue, setSortValue] = React.useState("Name, A To Z");

  // grid / list toggle
  const [viewType, setViewType] = React.useState("grid"); // grid | list

  const open = Boolean(anchorEl);
  const handleClick = (e) => setAnchorEl(e.currentTarget);
  const handleClose = () => setAnchorEl(null);

  return (
    <section style={{ padding: "10px", background: "#fafafa" }}>
      {/* Breadcrumb */}
      <Breadcrumbs style={{ marginBottom: "10px" }}>
        <Link underline="hover" color="inherit" href="/">
          <HomeIcon fontSize="small" /> Home
        </Link>
        <Link underline="hover" color="inherit">
          <WhatshotIcon fontSize="small" /> Fashion
        </Link>
      </Breadcrumbs>

      {/* Main Layout */}
      <div style={{ display: "flex", gap: "12px" }}>
        {/* Sidebar */}
        <div style={{ width: "20%" }}>
          <Sidebar />
        </div>

        {/* Right Content */}
        <div style={{ width: "80%" }}>
          {/* Top Filter Bar */}
          <div
            style={{
              background: "#fff",
              borderRadius: "8px",
              padding: "10px 14px",
              marginBottom: "12px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
            }}
          >
            {/* Left Controls */}
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              {/* List View */}
              <Button
                onClick={() => setViewType("list")}
                style={{
                  minWidth: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  background:
                    viewType === "list" ? "#e0e0e0" : "#f5f5f5",
                }}
              >
                <IoMdMenu />
              </Button>

              {/* Grid View */}
              <Button
                onClick={() => setViewType("grid")}
                style={{
                  minWidth: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  background:
                    viewType === "grid" ? "#e0e0e0" : "#f5f5f5",
                }}
              >
                <IoGrid />
              </Button>

              <span style={{ fontSize: "14px", color: "#555" }}>
                There are <b>27</b> Products
              </span>
            </div>

            {/* Sort By */}
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <span style={{ fontSize: "14px", color: "#555" }}>
                Sort By
              </span>

              <Button
                onClick={handleClick}
                style={{
                  textTransform: "none",
                  background: "#fff",
                  border: "1px solid #ddd",
                  borderRadius: "6px",
                  padding: "6px 14px",
                  fontSize: "14px",
                  color: "#000",
                  boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
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
                    borderRadius: "8px",
                    marginTop: "6px",
                    minWidth: "200px",
                    boxShadow: "0 6px 18px rgba(0,0,0,0.15)",
                  },
                }}
              >
                {[
                  "Name, A To Z",
                  "Name, Z To A",
                  "Price, Low To High",
                  "Price, High To Low",
                ].map((item) => (
                  <MenuItem
                    key={item}
                    onClick={() => {
                      setSortValue(item);
                      handleClose();
                    }}
                    style={{
                      fontSize: "14px",
                      fontWeight: sortValue === item ? "600" : "400",
                    }}
                  >
                    {item}
                  </MenuItem>
                ))}
              </Menu>
            </div>
          </div>

          {/* Product Layout */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                viewType === "list"
                  ? "1fr" // 👈 list view (niche niche)
                  : window.innerWidth < 768
                  ? "repeat(2, 1fr)"
                  : "repeat(4, 1fr)", // 👈 grid view (pasapasi)
              gap: "16px",
              background: "#f5f5f5",
              padding: "12px",
              borderRadius: "8px",
            }}
          >
            <ProductItems view={viewType} />
            <ProductItems view={viewType} />
            <ProductItems view={viewType} />
            <ProductItems view={viewType} />
            <ProductItems view={viewType} />
            <ProductItems view={viewType} />
            <ProductItems view={viewType} />
            <ProductItems view={viewType} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Productlisting;
