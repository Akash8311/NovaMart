import React, { createContext, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

import Home from "./pages/home/Home";
import Productlisting from "./pages/Productlisting/Productlisting";
import Men_productListing from "./pages/Productlisting/Men_productListing";

import ProductDetails from "./pages/ProductDetails/ProductDetails";

import MenProductDetails1 from "./pages/ProductDetails/Men/MenProductDetails1";
import MenProductDetails2 from "./pages/ProductDetails/Men/MenProductDetails2";
import MenProductDetails3 from "./pages/ProductDetails/Men/MenProductDetails3";
import MenProductDetails4 from "./pages/ProductDetails/Men/MenProductDetails4";

import ProductZoom from "./components/ProductZoom/ProductZoom"; // ✅ add this

import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";

export const MyContext = createContext();

const App = () => {

  const [openProductDetailsModel, setOpenProductDetailsModel] = useState(false);

  const handleCloseProductDetailsModel = () => {
    setOpenProductDetailsModel(false);
  };

  const values = {
    openProductDetailsModel,
    setOpenProductDetailsModel,
  };

  return (
    <BrowserRouter>

      <MyContext.Provider value={values}>

        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Productlisting" element={<Productlisting />} />
          <Route path="/Men_productListing" element={<Men_productListing />} />
          <Route path="/Product/:id" element={<ProductDetails />} />

          <Route path="/MenproductDetails1" element={<MenProductDetails1 />} />
          <Route path="/menproductDetails2" element={<MenProductDetails2 />} />
          <Route path="/menproductDetails3" element={<MenProductDetails3 />} />
          <Route path="/menproductDetails4" element={<MenProductDetails4 />} />
        </Routes>

        <Footer />


        {/* ✅ Dialog MUST be inside Provider */}
        <Dialog
          open={openProductDetailsModel}
          onClose={handleCloseProductDetailsModel}
          fullWidth
          maxWidth="md"
          className="productDetailsModel"
        >
          <DialogTitle>
            Product Details
          </DialogTitle>

          <DialogContent>

            <div className="flex items-center w-full productDetailsModelContainer">

              <div className="col1">
                <ProductZoom />
              </div>

            </div>

          </DialogContent>

        </Dialog>


      </MyContext.Provider>

    </BrowserRouter>
  );
};

export default App;