import React, { useState } from "react";
import { Link } from "react-router-dom";

function Questions() {
  const [password, setPassword] = useState("");
  const [isUnlocked, setIsUnlocked] = useState(false);

  const correctPassword = "PYTHON49";

  const handlePayment = () => {
    window.location.href =
      "upi://pay?pa=sinchanapoojary102004@okhdfcbank&pn=Sinchana&am=49&cu=INR";
  };

  const handleUnlock = () => {
    if (password === correctPassword) {
      setIsUnlocked(true);
    } else {
      alert("Wrong password!");
    }
  };

  return (
    <div style={{ padding: "40px", fontFamily: "Arial" }}>
      <h1>💡 Python Interview Questions</h1>

      {!isUnlocked ? (
        <>
          <h3>Preview:</h3>
          <ul>
            <li>What is GIL?</li>
            <li>List vs Tuple</li>
            <li>Decorators</li>
            <li>OOP Concepts</li>
          </ul>

          <p style={{ color: "red", fontWeight: "bold" }}>
            🔒 Full 100+ Questions locked
          </p>

          <button
            onClick={handlePayment}
            style={{
              padding: "12px 25px",
              backgroundColor: "#28a745",
              color: "white",
              border: "none",
              borderRadius: "5px",
              marginTop: "20px",
              cursor: "pointer"
            }}
          >
            Pay ₹49 via UPI
          </button>

          <p style={{ marginTop: "20px" }}>
            After payment, fill this form:
          </p>

          <a
            href="https://forms.gle/FT7H1Eis4n7TfRoQ8"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "blue", fontWeight: "bold" }}
          >
            👉 Submit Payment Confirmation Form
          </a>

          <p style={{ marginTop: "20px" }}>
            After verification, you will receive a password.
          </p>

          <input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ padding: "8px", marginTop: "10px" }}
          />

          <br /><br />

          <button
            onClick={handleUnlock}
            style={{
              padding: "8px 20px",
              backgroundColor: "#007bff",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer"
            }}
          >
            Unlock Content
          </button>
        </>
      ) : (
        <>
          <h3>🎉 Full Interview Questions</h3>
          <ul>
            <li>Explain Python memory management</li>
            <li>Explain multithreading</li>
            <li>Explain asyncio</li>
            <li>Explain metaclasses</li>
          </ul>
        </>
      )}

      <br /><br />
      <Link to="/">⬅ Back to Home</Link>
    </div>
  );
}

export default Questions;