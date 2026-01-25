import React, { useState } from "react";
import OnlyReviewSection from "../../OnlyReviewSection";

const MenProductReview3 = () => {
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
            className={`wishButton tab ${
              activeTab === "description" ? "active" : ""
            }`}
            onClick={() => setActiveTab("description")}
          >
            Description
          </span>

          <span
            className={`wishButton tab ${
              activeTab === "review" ? "active" : ""
            }`}
            onClick={() => setActiveTab("review")}
          >
            Review (13)
          </span>
        </div>

        {/* Content */}
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
                <span style={{ fontWeight: "bold" }}>Brand:</span>{" "}
                NovaMart
                <br />

                <span style={{ fontWeight: "bold" }}>Manufacturer:</span>{" "}
                KOTTY Lifestyle Pvt Ltd, GB-65, Bharat Vihar, Lakkarpur,
                Faridabad, Haryana – 121009
                <br />

                <span style={{ fontWeight: "bold" }}>Packer:</span>{" "}
                KOTTY Lifestyle Pvt Ltd, GB-65, Bharat Vihar, Lakkarpur,
                Faridabad, Haryana – 121009
                <br />

                <span style={{ fontWeight: "bold" }}>Importer:</span>{" "}
                KOTTY Lifestyle Pvt Ltd, GB-65, Bharat Vihar, Lakkarpur,
                Faridabad, Haryana – 121009
                <br />

                <span style={{ fontWeight: "bold" }}>Item Weight:</span>{" "}
                400 g
                <br />

                <span style={{ fontWeight: "bold" }}>
                  Item Dimensions (L × W × H):
                </span>{" "}
                30 x 20 x 3 Centimeters
                <br />

                <span style={{ fontWeight: "bold" }}>Generic Name:</span>{" "}
                Mens Jeans
              </p>
            </div>
          )}

          {activeTab === "review" && <OnlyReviewSection />}
        </div>
      </div>
    </>
  );
};

export default MenProductReview3;
