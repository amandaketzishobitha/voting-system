import React, { useContext } from "react";
import { VoteContext } from "../context/VoteContext";
import "../App.css";

export default function ResultsPage() {
  const { votes } = useContext(VoteContext);

  // Find leader
  const leader = Object.entries(votes).reduce(
    (max, [tech, count]) => (count > max.count ? { tech, count } : max),
    { tech: null, count: -1 }
  );

  return (
    <div className="page-container">
      <h1>Voting Results</h1>
      {Object.entries(votes).map(([tech, count]) => (
        <div
          key={tech}
          className={`result-item ${leader.tech === tech ? "leader" : ""}`}
        >
          {tech}: {count} votes
        </div>
      ))}
    </div>
  );
}
