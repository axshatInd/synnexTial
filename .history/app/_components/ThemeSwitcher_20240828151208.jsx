import { SunIcon, MoonIcon } from "@heroicons/react/24/solid"; // Import Heroicons

const ThemeSwitcher = ({ isDark, onChange }) => {
  return (
    <button
      onClick={onChange}
      aria-label={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
      className="theme-switcher-button p-1 sm:p-2"
    >
      {isDark ? (
        <MoonIcon className="w-3 h-3 sm:w-5 sm:h-5 text-yellow-400" />
      ) : (
        <SunIcon className="w-3 h-3 sm:w-5 sm:h-5 text-yellow-500" />
      )}
    </button>
  );
};

export default ThemeSwitcher;
