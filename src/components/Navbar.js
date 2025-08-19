import React from "react";
import { Link } from "react-router-dom";
import "../App.css"; // for navbar styling

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/">Home</Link>
      <Link to="/vote">Vote</Link>
      <Link to="/results">Results</Link>
    </nav>
  );
}

export default Navbar;
