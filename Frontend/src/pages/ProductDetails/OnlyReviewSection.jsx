import { useState } from "react";
import { FaStar } from "react-icons/fa";

export default function Reviews() {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");

  const [reviews, setReviews] = useState([
    {
      id: 1,
      name: "pankaj kumar",
      date: "2025-06-10",
      comment: "best product",
      rating: 5,
      avatar: "https://cdn-icons-png.flaticon.com/512/149/149071.png",
    },
    {
      id: 2,
      name: "Akash Maity",
      date: "2025-12-17",
      comment: "okk",
      rating: 3,
      avatar:
        "https://www.amity.edu/gurugram/microbackoffice/Uploads/TestimonialImage/98testi_RajivBasavaalumni.jpg",
    },
    {
      id: 2,
      name: "Varun Singh",
      date: "2025-02-13",
      comment: "Nice Product value of Money",
      rating: 2.5,
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFCzxivJXCZk0Kk8HsHujTO3Olx0ngytPrWw&s",
    },
    {
      id: 2,
      name: "Asutosh Das",
      date: "2025-11-23",
      comment: "This is really good product and Perfect Fiting",
      rating: 5,
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFCzxivJXCZk0Kk8HsHujTO3Olx0ngytPrWw&s",
    },
  ]);

  const handleSubmit = () => {
    if (!comment || rating === 0) {
      alert("Please write a review and select rating");
      return;
    }

    const newReview = {
      id: Date.now(),
      name: "You",
      date: new Date().toISOString().split("T")[0],
      comment,
      rating,
      avatar: "https://cdn-icons-png.flaticon.com/512/149/149071.png",
    };

    setReviews([newReview, ...reviews]); 
    setComment("");
    setRating(0);
  };

  return (
    <div
      style={{
        width: "100%",
        background: "#fff",
        padding: "24px",
        borderRadius: "8px",
        boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
      }}
    >
      <h2 style={{ fontSize: "18px", marginBottom: "16px" }}>
        Customer questions & answers
      </h2>

      {/* Reviews */}
      <div style={{ maxHeight: "300px", overflowY: "auto" }}>
        {reviews.map((r) => (
          <div
            key={r.id}
            style={{
              display: "flex",
              justifyContent: "space-between",
              borderBottom: "1px solid #e5e5e5",
              paddingBottom: "16px",
              marginBottom: "16px",
            }}
          >
            {/* Left */}
            <div style={{ display: "flex", gap: "12px" }}>
              <img
                src={r.avatar}
                alt={r.name}
                style={{
                  width: "48px",
                  height: "48px",
                  borderRadius: "50%",
                  objectFit: "cover",
                }}
              />
              <div>
                <h4 style={{ margin: 0, fontSize: "15px" }}>{r.name}</h4>
                <span style={{ fontSize: "12px", color: "#777" }}>
                  {r.date}
                </span>
                <p style={{ marginTop: "6px", fontSize: "14px" }}>
                  {r.comment}
                </p>
              </div>
            </div>

            {/* Rating */}
            <div style={{ display: "flex", gap: "4px" }}>
              {[...Array(5)].map((_, i) => (
                <FaStar
                  key={i}
                  size={14}
                  color={i < r.rating ? "#facc15" : "#d1d5db"}
                />
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Add Review */}
      <div
        style={{
          background: "#f9fafb",
          padding: "20px",
          borderRadius: "6px",
          marginTop: "20px",
        }}
      >
        <h3>Add a review</h3>

        <textarea
          placeholder="Write a review..."
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          style={{
            width: "100%",
            height: "120px",
            padding: "10px",
            borderRadius: "4px",
            border: "1px solid #ccc",
            resize: "none",
          }}
        />

        {/* Star Input */}
        <div style={{ display: "flex", gap: "6px", marginTop: "12px" }}>
          {[...Array(5)].map((_, i) => (
            <FaStar
              key={i}
              size={20}
              style={{ cursor: "pointer" }}
              color={i < rating ? "#facc15" : "#d1d5db"}
              onClick={() => setRating(i + 1)}
            />
          ))}
        </div>

        <button
          onClick={handleSubmit}
          style={{
            marginTop: "16px",
            background: "#1549b9",
            color: "#fff",
            padding: "10px 24px",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          SUBMIT REVIEW
        </button>
      </div>
    </div>
  );
}
