import React, { useContext } from "react";
import { VoteContext } from "../context/VoteContext";
import "../App.css";

export default function VotingPage() {
  const { castVote } = useContext(VoteContext);

  return (
    <div className="page-container">
      <h1>Cast Your Vote</h1>
      <div className="vote-options">
        <button className="vote-button" onClick={() => castVote("React")}>
          React
        </button>
        <button className="vote-button" onClick={() => castVote("CSS")}>
          CSS
        </button>
        <button className="vote-button" onClick={() => castVote("JavaScript")}>
          JavaScript
        </button>
        <button className="vote-button" onClick={() => castVote("HTML")}>
          HTML
        </button>
      </div>
    </div>
  );
}
