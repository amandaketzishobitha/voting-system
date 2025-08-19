import React, { useState } from "react";

function LoginMessage() {
  const [loggedIn, setLoggedIn] = useState(false);
  return (
    <div>
      <p>{loggedIn ? "Welcome User" : "Please Login"}</p>
      <button onClick={() => setLoggedIn(!loggedIn)}>Toggle Login</button>
    </div>
  );
}

export default LoginMessage;
