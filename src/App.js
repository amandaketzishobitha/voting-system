import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import VotingPage from "./pages/VotingPage";
import ResultsPage from "./pages/ResultsPage";
import { VoteProvider } from "./context/VoteContext";
import "./App.css";

function App() {
  return (
    <VoteProvider>
      <Router>
        <div className="App">
          <Navbar />
          <div className="page-container">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/vote" element={<VotingPage />} />
              <Route path="/results" element={<ResultsPage />} />
            </Routes>
          </div>
        </div>
      </Router>
    </VoteProvider>
  );
}

export default App;
