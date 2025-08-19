import React, { useState } from "react";

function Feedback() {
  const [good, setGood] = useState(0);
  const [average, setAverage] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <div>
      <h3>Feedback Collector</h3>
      <button onClick={() => setGood(good + 1)}>Good</button>
      <button onClick={() => setAverage(average + 1)}>Average</button>
      <button onClick={() => setBad(bad + 1)}>Bad</button>
      <p>
        Good: {good} | Average: {average} | Bad: {bad}
      </p>
    </div>
  );
}

export default Feedback;
