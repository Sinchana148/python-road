import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Roadmap from "./pages/Roadmap";
import Questions from "./pages/Questions";
import RoadmapFull from "./pages/RoadmapFull";
import QuestionsFull from "./pages/QuestionsFull";
import "./App.css";



function Home() {
  return (
    <div className="main">

      <section className="hero">
        <h1>Hello!🚀 Python Developer!!</h1>
        <p>
          Crack Python interviews with a structured and real
          interview questions.
        </p>
      </section>

      <section className="features">
        <h2>Choose Your Material</h2>

        <div className="cards">

          <Link to="/roadmap" className="card-link">
            <div className="card">
              <h3>📅 Most asked interview questions</h3>
              <p>Click to access full content</p>
            </div>
          </Link>

          <Link to="/questions" className="card-link">
            <div className="card">
              <h3>💡Coding questions to practice!</h3>
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
        <Route path="/RoadmapFull" element={<RoadmapFull />} />
        <Route path="/questions-Full" element={<QuestionsFull />} />
        

      </Routes>
    </Router>
  );
}

export default App;
// force production update

