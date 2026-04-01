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



export const MyContext = createContext();

const App = () => {



  return (
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


       

    </BrowserRouter>
  );
};

export default App;