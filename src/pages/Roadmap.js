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
      <h1>📘 Most Asked Python Theoretical Interview Questions</h1>

      {!isUnlocked ? (
        <>
          <h3>Free Preview:</h3>

          <p><strong>1. What is Python?</strong></p>
          <p>Explain features and why Python is widely used.</p>

          <p><strong>2. What is GIL?</strong></p>
          <p>Explain how threading works internally in Python.</p>

          <p><strong>3. Mutable vs Immutable?</strong></p>
          <p>Explain memory behavior of Python objects.</p>

          <p><strong>4. Explain OOP Principles</strong></p>
          <p>Describe Encapsulation, Abstraction, Inheritance, Polymorphism.</p>

          <p><strong>5. What are Decorators?</strong></p>
          <p>Explain how decorators modify function behavior.</p>

          <p style={{ color: "red", fontWeight: "bold", marginTop: "20px" }}>
              🔒Pay and Unlock Full Detailed Explanations & Concepts

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
            href="https://forms.gle/MGYZq1iUXfbk5of79"
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
          <h3>🎉 Full Interview Theory Answers</h3>

          <p><strong>1. What is Python?</strong></p>
          <p>Python is a high-level, interpreted, dynamically typed programming language known for its readability and simplicity. It supports multiple programming paradigms including object-oriented, procedural, and functional programming.</p>

          <p><strong>2. What is GIL?</strong></p>
          <p>The Global Interpreter Lock allows only one thread to execute Python bytecode at a time in CPython. It ensures memory safety but limits true parallelism in CPU-bound tasks.</p>

          <p><strong>3. Mutable vs Immutable</strong></p>
          <p>Mutable objects like list and dictionary can be modified after creation. Immutable objects like string and tuple cannot be changed once created, which makes them memory efficient and thread safe.</p>

          <p><strong>4. OOP Principles</strong></p>
          <p>Encapsulation binds data and methods together. Abstraction hides implementation details. Inheritance allows reuse of code. Polymorphism enables methods to behave differently based on objects.</p>

          <p><strong>5. Decorators</strong></p>
          <p>A decorator is a function that modifies another function without changing its code. It is commonly used for logging, authentication, and performance tracking.</p>

          <p><strong>6. Generators</strong></p>
          <p>Generators use the yield keyword to return values one at a time, reducing memory usage for large datasets.</p>

          <p><strong>7. Exception Handling</strong></p>
          <p>Exception handling in Python uses try, except, else, and finally blocks to handle runtime errors gracefully.</p>

          <p><strong>8. List vs Tuple</strong></p>
          <p>Lists are mutable and slower. Tuples are immutable and faster due to fixed memory allocation.</p>

        </>
      )}

      <br /><br />
      <Link to="/">⬅ Back to Home</Link>
    </div>
  );
}

export default Roadmap;