import React, { useState, useEffect } from "react";

function ThemeSwitcher() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () =>
    setTheme((prev) => (prev === "light" ? "dark" : "light"));

  useEffect(() => {
    document.body.style.backgroundColor = theme === "light" ? "#f5f5f5" : "#121212";
    document.body.style.color = theme === "light" ? "#000" : "#fff";
  }, [theme]);

  return <button onClick={toggleTheme}>{theme === "light" ? "Dark Mode" : "Light Mode"}</button>;
}

export default ThemeSwitcher;
