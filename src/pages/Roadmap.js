import React from "react";
import { Link } from "react-router-dom";

function Roadmap() {
  const isPaid = localStorage.getItem("isPaid") === "true";

  const handlePayment = () => {
    window.location.href = "https://imjo.in/5Ude7d";
  };

  return (
    <div style={{ padding: "40px", fontFamily: "Arial" }}>
      <h1>🚀 Python Developer 30-Day Roadmap</h1>

      {!isPaid ? (
        <>
          <h3>Preview:</h3>
          <ul>
            <li>Week 1 – Python Basics</li>
            <li>Week 2 – OOP Concepts</li>
            <li>Week 3 – DSA Practice</li>
            <li>Week 4 – Real Project</li>
          </ul>

          <p style={{ color: "red", fontWeight: "bold" }}>
            🔒 Full detailed roadmap locked
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
        </>
      ) : (
        <>
          <h3>🎉 Full Roadmap</h3>
          <ul>
            <li>Day 1–3: Variables, Data Types, Loops</li>
            <li>Day 4–7: Functions, Modules</li>
            <li>Week 2: OOP + Mini Projects</li>
            <li>Week 3: DSA + 50 Problems</li>
            <li>Week 4: Full Stack Project + Interview Prep</li>
          </ul>
        </>
      )}

      <br />
      <Link to="/">⬅ Back to Home</Link>
    </div>
  );
}

export default Roadmap;