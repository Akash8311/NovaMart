import React, { createContext, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

import Home from "./pages/home/Home";
import Productlisting from "./pages/Productlisting/Productlisting";
import Men_productListing from "./pages/Productlisting/Men_productListing";

import ProductDetails from "./pages/ProductDetails/ProductDetails";

// Men Products
import MenProductDetails1 from "./pages/ProductDetails/Men/MenProductDetails1";
import MenProductDetails2 from "./pages/ProductDetails/Men/MenProductDetails2";
import MenProductDetails3 from "./pages/ProductDetails/Men/MenProductDetails3";
import MenProductDetails4 from "./pages/ProductDetails/Men/MenProductDetails4";

// Girls Product
import ProductDrtails2 from "./pages/ProductDetails/ProductReaview/girlsProductDetails/productDrtails2";
import ProductDetails3 from "./pages/ProductDetails/ProductReaview/girlsProductDetails/productDetails3";
import ProductDetails4 from "./pages/ProductDetails/ProductReaview/girlsProductDetails/productDetails4";

import LogIn from "./pages/auth/logIn";
import Register from "./pages/auth/Register";

import Drawer from "@mui/material/Drawer";

export const MyContext = createContext();

const App = () => {
  const [openCartPanel, setOpenCartPanel] = useState(false);

const [cartItems, setCartItems] = useState([]);

const values = {
  openCartPanel,
  setOpenCartPanel,
  cartItems,
  setCartItems
};

  return (
    <MyContext.Provider value={values}>
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Productlisting" element={<Productlisting />} />
          <Route path="/Men_productListing" element={<Men_productListing />} />
          <Route path="/Product/:id" element={<ProductDetails />} />
          <Route path="/logIn" element={<LogIn />} />
          <Route path="/Register" element={<Register />} />

          <Route path="/MenproductDetails1" element={<MenProductDetails1 />} />
          <Route path="/menproductDetails2" element={<MenProductDetails2 />} />
          <Route path="/menproductDetails3" element={<MenProductDetails3 />} />
          <Route path="/menproductDetails4" element={<MenProductDetails4 />} />

          <Route path="/productDrtails2" element={<ProductDrtails2 />} />
          <Route path="/ProductDetails3" element={<ProductDetails3 />} />
          <Route path="/ProductDetails4" element={<ProductDetails4 />} />
        </Routes>

        <Footer />

       <Drawer
  anchor="right"
  open={openCartPanel}
  onClose={() => setOpenCartPanel(false)}
>
  <div
    style={{
      width: 320,
      height: "100%",
      display: "flex",
      flexDirection: "column",
      background: "#f9f9f9",
      fontFamily: "sans-serif",
    }}
  >
    <div
      style={{
        padding: "18px 20px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        borderBottom: "1px solid #ddd",
        background: "#fff",
      }}
    >
      <h3 style={{ margin: 0, fontSize: "18px" }}>🛒 Shopping Cart</h3>

      <button
        onClick={() => setOpenCartPanel(false)}
        style={{
          border: "none",
          background: "transparent",
          fontSize: "18px",
          cursor: "pointer",
        }}
      >
        ✖
      </button>
    </div>


<div
  style={{
    flex: 1,
    padding: "20px",
    overflowY: "auto"
  }}
>
  {cartItems.length === 0 ? (
    <p style={{ textAlign: "center", color: "#777" }}>
      Cart is empty
    </p>
  ) : (
    cartItems.map((item) => (
      <div
        key={item.id}
        style={{
          marginBottom: "12px",
          padding: "10px",
          background: "#fff",
          borderRadius: "6px",
          border: "1px solid #eee"
        }}
      >
        <p style={{ margin: 0, fontWeight: "500" }}>
          {item.name}
        </p>
        <p style={{ margin: 0, fontSize: "13px", color: "#555" }}>
          Qty: {item.qty}
        </p>
      </div>
    ))
  )}
</div>

    <div
      style={{
        padding: "15px",
        borderTop: "1px solid #ddd",
        background: "#fff",
      }}
    >
      <button
        style={{
          width: "100%",
          padding: "12px",
          background: "#000",
          color: "#fff",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer",
        }}
      >
        Checkout
      </button>
    </div>
  </div>
</Drawer>
      </BrowserRouter>
    </MyContext.Provider>
  );
};

export default App;