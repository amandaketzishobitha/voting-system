import React, { createContext, useState } from "react";

export const VoteContext = createContext();

export const VoteProvider = ({ children }) => {
  const [votes, setVotes] = useState({
    React: 0,
    CSS: 0,
    JavaScript: 0,
    HTML: 0,
  });

  const castVote = (option) => {
    setVotes((prevVotes) => ({
      ...prevVotes,
      [option]: prevVotes[option] + 1,
    }));
  };

  return (
    <VoteContext.Provider value={{ votes, castVote }}>
      {children}
    </VoteContext.Provider>
  );
};
