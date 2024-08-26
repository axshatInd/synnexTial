import React from "react";

const ThemeSwitcher = ({ isDark, onChange }) => {
  return (
    <button
      onClick={onChange}
      className="px-4 py-2 bg-secondary-foreground text-secondary rounded-md"
    >
      {isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
    </button>
  );
};

export default ThemeSwitcher;
