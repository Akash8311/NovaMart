import React from "react";
import { useState } from "react";
import OnlyReviewSection from "./OnlyReviewSection";

const ProductReview = () => {
  const [activeTab, setActiveTab] = useState("description");
  return (
    <>
      <div className="review w-full">
        {/* Tabs */}
        <div
          className="flex items-center review-tabs"
          style={{ paddingBlock: "10px" }}
        >
          <span
            className={`wishButton tab ${activeTab === "description" ? "active" : ""}`}
            onClick={() => setActiveTab("description")}
          >
            Description
          </span>

          <span
            className={`wishButton tab ${activeTab === "review" ? "active" : ""}`}
            onClick={() => setActiveTab("review")}
          >
            Review (27)
          </span>
        </div>

        {/* Content of the product */}
        <div
          className="tab-content"
          style={{ border: "2px solid gray", borderRadius: "8px" }}
        >
          {activeTab === "description" && (
            <div className="description">
              <h3
                style={{
                  fontSize: "22px",
                  marginBottom: "none",
                  marginTop: "none",
                }}
              >
                Product Details
              </h3>
              <p style={{ fontSize: "16px" }}>
                <span style={{ fontWeight: "bold" }}> Product Dimension:</span>{" "}
                30.48 x 24 x 10 cm; 450 g
                <br />
                <span style={{ fontWeight: "bold" }}>
                  {" "}
                  Date First Available:
                </span>{" "}
                2 April 2025
                <br />
                <span style={{ fontWeight: "bold" }}> Manufacturer:</span>{" "}
                NovaMART Brand - Symbol
                <br />
                <span style={{ fontWeight: "bold" }}> ASIN:</span> B09PRKQYCX
                <br />
                <span style={{ fontWeight: "bold" }}>
                  {" "}
                  Item model number:
                </span>{" "}
                AW17MFS229
                <br />
                <span style={{ fontWeight: "bold" }}>
                  {" "}
                  Country of Origin:
                </span>{" "}
                India
                <br />
                <span style={{ fontWeight: "bold" }}> Departmen:</span> Men
                <span style={{ fontWeight: "bold" }}> Manufacturer:</span>{" "}
                NovaMart Brand - Symbol, CLOUDTAIL INDIA PRIVATE LIMITED, Ground
                Floor, Rear Portion, H-9, Block B-1, Mohan Cooperative
                Industrial Area, Mathura Road, New Delhi-110044
                <br />
                <span style={{ fontWeight: "bold" }}> Packer:</span> CLOUDTAIL
                INDIA PRIVATE LIMITED, Ground Floor, Rear Portion, H-9, Block
                B-1, Mohan Cooperative Industrial Area, Mathura Road, New
                Delhi-110044
                <br />
                <span style={{ fontWeight: "bold" }}> Item Weight:</span> 420g
                <br />
                <span style={{ fontWeight: "bold" }}>
                  {" "}
                  tem Dimensions LxWxH:
                </span>{" "}
                Net Quantity
                <br />
                <span style={{ fontWeight: "bold" }}> Generic Name:</span>{" "}
                Cotton Rich Polo T Shirt | Classic Collar Tshirts | Half Sleeves
                | Plain - Regular Fit (Available in Plus Size and Combo Pack of
                2)
              </p>
            </div>
          )}

          {activeTab === "review" && (
            <OnlyReviewSection/>
          )}
        </div>
      </div>
    </>
  );
};

export default ProductReview;
