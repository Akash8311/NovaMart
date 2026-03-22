import React from "react";
import { useState } from "react";
import OnlyReviewSection from "../../OnlyReviewSection";


const GirlsProducReview4 = () => {
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
            Review (125)
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
                2 April 2026
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
                <span style={{ fontWeight: "bold" }}> Departmen:</span> Wome
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
                <span style={{ fontWeight: "bold" }}> Item Weight:</span> 350g
                <br />
                <span style={{ fontWeight: "bold" }}>
                  {" "}
                  item Dimensions LxWxH:
                </span>{" "}
                Net Quantity
                <br />
                <span style={{ fontWeight: "bold" }}> Generic Name:</span>{" "}
                Dress
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

export default GirlsProducReview4