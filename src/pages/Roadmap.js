import React, { useState } from "react";
import { Link } from "react-router-dom";

function Roadmap() {
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
      <h1>🚀 Python Developer 30-Day Roadmap</h1>

      {!isUnlocked ? (
        <>
          <h3>Preview:</h3>
          <ul>
            <li>Week 1 – Python Basics</li>
            <li>Week 2 – OOP Concepts</li>
            <li>Week 3 – DSA Practice</li>
            <li>Week 4 – Real Project</li>
          </ul>

          <p style={{ color: "red", fontWeight: "bold" }}>
            🔒 Full roadmap locked
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
          <h3>🎉 Full Roadmap</h3>
          <ul>
            <li>Day 1–3: Variables, Loops, Conditions</li>
            <li>Day 4–7: Functions & Modules</li>
            <li>Week 2: OOP + Mini Projects</li>
            <li>Week 3: 50 DSA Problems</li>
            <li>Week 4: Real Project + Interview Prep</li>
          </ul>
        </>
      )}

      <br /><br />
      <Link to="/">⬅ Back to Home</Link>
    </div>
  );
}

export default Roadmap;