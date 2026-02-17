import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Roadmap from "./pages/Roadmap";
import Questions from "./pages/Questions";
import "./App.css";

function Home() {
  return (
    <div className="main">

      <section className="hero">
        <h1>🚀 Python Developer – 30 Days Interview Ready</h1>
        <p>
          Crack Python interviews with a structured roadmap and real
          interview questions designed for final year students.
        </p>
      </section>

      <section className="features">
        <h2>Choose Your Material</h2>

        <div className="cards">

          <Link to="/roadmap" className="card-link">
            <div className="card">
              <h3>📅 30-Day Structured Plan</h3>
              <p>Click to access full roadmap</p>
            </div>
          </Link>

          <Link to="/questions" className="card-link">
            <div className="card">
              <h3>💡 50+ Interview Questions</h3>
              <p>Click to access full questions</p>
            </div>
          </Link>

        </div>
      </section>

    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/roadmap" element={<Roadmap />} />
        <Route path="/questions" element={<Questions />} />
      </Routes>
    </Router>
  );
}

export default App;
