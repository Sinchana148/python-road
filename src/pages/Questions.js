import React from "react";
import { Link } from "react-router-dom";

function Questions() {
  return (
    <div className="content-page">
      <h1>💡 Important Python Interview Questions</h1>

      <p>1. What is difference between list and tuple?</p>
      <p>2. What is shallow copy vs deep copy?</p>
      <p>3. Explain *args and **kwargs</p>
      <p>4. What is GIL in Python?</p>
      <p>5. How to remove duplicates from list?</p>

      <br />
      <Link to="/">⬅ Back to Home</Link>
    </div>
  );
}

export default Questions;
