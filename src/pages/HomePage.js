// HomePage.js
import React, { useState, useEffect } from "react";

function HomePage() {
  const [count, setCount] = useState(0);
  const [feedback, setFeedback] = useState({ good: 0, average: 0, bad: 0 });
  const [text, setText] = useState("");
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="card home-card">
      <h1>Welcome to the Voting System</h1>

      <div className="section">
        <h2>Counter: {count}</h2>
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <button onClick={() => setCount(count - 1)}>Decrement</button>
      </div>

      <div className="section">
        <h2>Feedback Collector</h2>
        <button onClick={() => setFeedback({ ...feedback, good: feedback.good + 1 })}>Good</button>
        <button onClick={() => setFeedback({ ...feedback, average: feedback.average + 1 })}>Average</button>
        <button onClick={() => setFeedback({ ...feedback, bad: feedback.bad + 1 })}>Bad</button>
        <p>
          Good: {feedback.good} | Average: {feedback.average} | Bad: {feedback.bad}
        </p>
      </div>

      <div className="section">
        <input
          type="text"
          placeholder="Type something..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <p>Typed Text: {text}</p>
      </div>

      <div className="section">
        <h2>Current Time: {time}</h2>
      </div>
    </div>
  );
}

export default HomePage;
