import React, { useContext } from "react";
import { VoteContext } from "../context/VoteContext";

function CandidateVote({ candidate }) {
  const { votes, voteCandidate } = useContext(VoteContext);

  return (
    <div className="candidate-card">
      <h3>Candidate {candidate}</h3>
      <p>Votes: {votes[candidate]}</p>
      <button onClick={() => voteCandidate(candidate)}>Vote</button>
    </div>
  );
}

export default CandidateVote;
