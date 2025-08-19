import React, { useContext } from "react";
import { VoteContext } from "../context/VoteContext";

function ResultsPage() {
  const { votes } = useContext(VoteContext);

  const leading = Object.keys(votes).reduce(
    (a, b) => (votes[a] >= votes[b] ? a : b)
  );

  return (
    <div className="container">
      <h2>Voting Results</h2>
      <p>Candidate A: {votes.A}</p>
      <p>Candidate B: {votes.B}</p>
      <p>Candidate C: {votes.C}</p>
      <h3>Leading Candidate: {leading}</h3>
    </div>
  );
}

export default ResultsPage;
