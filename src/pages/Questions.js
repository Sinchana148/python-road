import React from "react";

function Questions() {

  const handlePayment = () => {
    window.location.href =
      "upi://pay?pa=sinchana8861001190@okicici&pn=Sinchana&am=49&cu=INR";
  };

  return (
    <div style={{ padding: "40px", fontFamily: "Arial" }}>
      <h1>💡 Python Interview Questions</h1>

      <h3>Preview:</h3>

      <ul>
        <li>Difference between list and tuple</li>
        <li>Explain decorators</li>
        <li>What is GIL?</li>
        <li>Shallow vs Deep copy</li>
      </ul>

      <p style={{ color: "red", fontWeight: "bold" }}>
        🔒 Full 100+ Interview Questions Locked
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
        Pay ₹30 to Unlock
      </button>
    </div>
  );
}

export default Questions;
