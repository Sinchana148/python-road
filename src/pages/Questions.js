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
      <h1>💻 Most Asked Python Coding Interview Questions</h1>

      {!isUnlocked ? (
        <>
          <h3>Free Preview:</h3>

          <p><strong>1. Reverse a String</strong></p>
          <p>Rearrange the characters of a string from last to first.</p>

          <p><strong>2. Check Palindrome</strong></p>
          <p>Determine whether a string reads the same forward and backward.</p>

          <p><strong>3. Find Second Largest Number</strong></p>
          <p>Identify the second highest element in a list without using shortcuts.</p>

          <p><strong>4. Prime Number Check</strong></p>
          <p>Check whether a number is divisible only by 1 and itself.</p>

          <p><strong>5. Remove Duplicates from List</strong></p>
          <p>Return only unique elements from a list.</p>

          <p style={{ color: "red", fontWeight: "bold", marginTop: "20px" }}>
            🔒 Pay and Unlock Full Detailed Explanations & Concepts

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
          <h3>🎉 Full Coding Interview Concepts</h3>

          <p><strong>1. Reverse a String – Concept</strong></p>
          <p>Reversing a string means rearranging characters from the last position to the first. This can be achieved using slicing, loops, or built-in functions.</p>

          <p><strong>2. Palindrome Check – Concept</strong></p>
          <p>A palindrome reads the same forward and backward. The logic compares the original string with its reversed version.</p>

          <p><strong>3. Remove Duplicates – Concept</strong></p>
          <p>Identify repeated elements and keep only unique values using iteration or sets.</p>

          <p><strong>4. Second Largest Number – Concept</strong></p>
          <p>Traverse or sort elements carefully to find the second highest value.</p>

          <p><strong>5. Prime Number – Concept</strong></p>
          <p>Check divisibility from 2 to square root of the number.</p>

          <p><strong>6. Fibonacci Series – Concept</strong></p>
          <p>Each number is the sum of the previous two numbers. Can be solved using loops or recursion.</p>

          <p><strong>7. Two Sum – Concept</strong></p>
          <p>Find two numbers that add up to a target using indexing or hashing.</p>

          <p><strong>8. Sorting Algorithms – Concept</strong></p>
          <p>Arrange elements in ascending or descending order using bubble sort, selection sort, or insertion sort.</p>

        </>
      )}

      <br /><br />
      <Link to="/">⬅ Back to Home</Link>
    </div>
  );
}

export default Questions;