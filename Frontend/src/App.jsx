import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./pages/home/Home";
import Footer from "./components/Footer/Footer";
import Productlisting from "./pages/Productlisting/Productlisting";
import ProductDetails from "./pages/ProductDetails/ProductDetails";
import MenProductDetails1 from "./pages/ProductDetails/Men/MenProductDetails1";
import MenProductDetails2 from "./pages/ProductDetails/Men/MenProductDetails2";
import MenProductDetails3 from "./pages/ProductDetails/Men/MenProductDetails3";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path={"/"} exact={true} element={<Home />} />
          <Route
            path={"/Productlisting"}
            exact={true}
            element={<Productlisting />}
          />
          <Route path="/Product/:id" element={<ProductDetails />} />
         <Route path="/MenproductDetails1"element={<MenProductDetails1/>}/>
         <Route path="/menproductDetails2"element={<MenProductDetails2/>}/>
         <Route path="/menproductDetails3"element={<MenProductDetails3/>}/>
          {/* <Route path="/help-center" element={<HelpCenter />} /> */}
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
