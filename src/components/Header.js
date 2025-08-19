import React from "react";
import { Link } from "react-router-dom";
import ThemeSwitcher from "./ThemeSwitcher";

function Header() {
  return (
    <header className="header">
      <nav>
        <Link to="/">Home</Link>
        <Link to="/voting">Voting</Link>
        <Link to="/results">Results</Link>
      </nav>
      <ThemeSwitcher />
    </header>
  );
}

export default Header;
