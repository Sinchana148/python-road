import React from "react";

function Roadmap() {

  const handlePayment = () => {
    window.location.href =
      "upi://pay?pa=sinchana@okaxis&pn=Sinchana&am=49&cu=INR";
  };

  return (
    <div style={{ padding: "40px", fontFamily: "Arial" }}>
      <h1>🚀 Python Developer 30-Day Roadmap</h1>

      <p style={{ marginTop: "10px", fontSize: "16px" }}>
        Become a job-ready Python Developer in 30 days.
      </p>

      <hr style={{ margin: "20px 0" }} />

      <h3>🔍 Preview:</h3>

      <ul style={{ lineHeight: "1.8" }}>
        <li>Week 1 – Python Basics (Variables, Loops, Functions)</li>
        <li>Week 2 – OOP Concepts + Mini Projects</li>
        <li>Week 3 – DSA Practice + Problem Solving</li>
        <li>Week 4 – Real-world Project + Interview Prep</li>
      </ul>

      <p style={{ marginTop: "20px", fontWeight: "bold", color: "red" }}>
        🔒 Full detailed roadmap is locked.
      </p>

      <button
        onClick={handlePayment}
        style={{
          padding: "14px 30px",
          backgroundColor: "#28a745",
          color: "white",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer",
          marginTop: "25px",
          fontSize: "16px",
        }}
      >
        Pay ₹49 to Unlock
      </button>

      <p style={{ marginTop: "15px", fontSize: "14px", color: "#555" }}>
        You will be redirected to your UPI app to complete payment.
      </p>
    </div>
  );
}

export default Roadmap;
