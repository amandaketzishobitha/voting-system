import React from "react";

function TaskList() {
  const tasks = ["React", "JS", "CSS", "HTML"];
  return (
    <ul>
      {tasks.map((task, index) => (
        <li key={index}>{task}</li>
      ))}
    </ul>
  );
}

export default TaskList;
