import React, { useState } from "react";

function TextInput() {
  const [text, setText] = useState("");
  return (
    <div>
      <input
        type="text"
        placeholder="Type something..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <p>Typed Text: {text}</p>
    </div>
  );
}

export default TextInput;
