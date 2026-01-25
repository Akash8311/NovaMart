import React from "react";
import { useState } from "react";
import OnlyReviewSection from "../../OnlyReviewSection";

const MenProductReview2 = () => {
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
                  marginBottom: "8px",
                }}
              >
                Product Details
              </h3>

              <p style={{ fontSize: "16px", lineHeight: "1.8" }}>
                <span style={{ fontWeight: "bold" }}>Product Dimensions:</span>{" "}
                26 x 25 x 2 cm; 300 g
                <br />
                <span style={{ fontWeight: "bold" }}>
                  Date First Available:
                </span>{" "}
                9 April 2025
                <br />
                <span style={{ fontWeight: "bold" }}>Brand:</span> NovaMart
                <br />
                <span style={{ fontWeight: "bold" }}>Manufacturer:</span> Brand
                Studio Lifestyle Pvt Ltd
                <br />
                <span style={{ fontWeight: "bold" }}>Product Code:</span>{" "}
                HLSH015266
                <br />
                <span style={{ fontWeight: "bold" }}>
                  Country of Origin:
                </span>{" "}
                India
                <br />
                <span style={{ fontWeight: "bold" }}>Department:</span> Men
                <br />
                <span style={{ fontWeight: "bold" }}>Packer:</span> Brand Studio
                Lifestyle Pvt Ltd, 113, Krishna Reddy Industrial Area, 7th Mile,
                Kudlu Gate, Hosur Road, Bangalore – 560068
                <br />
                <span style={{ fontWeight: "bold" }}>Importer:</span> Brand
                Studio Lifestyle Pvt Ltd, 113, Krishna Reddy Industrial Area,
                7th Mile, Kudlu Gate, Hosur Road, Bangalore – 560068
                <br />
                <span style={{ fontWeight: "bold" }}>Item Weight:</span> 300 g
                <br />
                <span style={{ fontWeight: "bold" }}>
                  Item Dimensions (L × W × H):
                </span>{" "}
                26 x 25 x 2 Centimeters
                <br />
                <span style={{ fontWeight: "bold" }}>Net Quantity:</span> 1
                Count
                <br />
                <span style={{ fontWeight: "bold" }}>Generic Name:</span>{" "}
                HLSH015266
              </p>
            </div>
          )}

          {activeTab === "review" && <OnlyReviewSection />}
        </div>
      </div>
    </>
  );
};

export default MenProductReview2;
