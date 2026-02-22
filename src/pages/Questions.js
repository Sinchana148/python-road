import React from "react";
import { Link } from "react-router-dom";

function Questions() {
  const isPaid = localStorage.getItem("isPaid") === "true";

  const handlePayment = () => {
    window.location.href = "https://imjo.in/5Ude7d";
  };

  return (
    <div style={{ padding: "40px", fontFamily: "Arial" }}>
      <h1>💡 Python Interview Questions</h1>

      {!isPaid ? (
        <>
          <h3>Preview:</h3>
          <ul>
            <li>Difference between list and tuple</li>
            <li>Explain decorators</li>
            <li>What is GIL?</li>
            <li>Shallow vs Deep copy</li>
          </ul>

          <p style={{ color: "red", fontWeight: "bold" }}>
            🔒 Full 100+ Questions Locked
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
          <h3>🎉 Full Interview Questions</h3>
          <ul>
            <li>Explain Python memory management</li>
            <li>How multithreading works</li>
            <li>Generators vs Iterators</li>
            <li>Django vs Flask</li>
            <li>And 100+ more...</li>
          </ul>
        </>
      )}

      <br />
      <Link to="/">⬅ Back to Home</Link>
    </div>
  );
}

export default Questions;