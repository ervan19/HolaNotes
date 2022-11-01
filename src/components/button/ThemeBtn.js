import React from "react";
import { ThemeConsumer } from "../../context/ThemeContext";
import { HiMoon, HiSun } from "react-icons/hi";

export default function ThemeBtn() {
  return (
    <ThemeConsumer>
      {({ theme, toggleTheme }) => {
        return (
          <button className="header-btn theme-btn" onClick={toggleTheme}>
            {theme === "light" ? <HiMoon /> : <HiSun />}
          </button>
        );
      }}
    </ThemeConsumer>
  );
}
