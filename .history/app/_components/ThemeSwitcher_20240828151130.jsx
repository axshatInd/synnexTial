import { SunIcon, MoonIcon } from "@heroicons/react/24/solid"; // Import Heroicons

const ThemeSwitcher = ({ isDark, onChange }) => {
  return (
    <button
      onClick={onChange}
      aria-label={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
      className="theme-switcher-button p-2 sm:p-3"
    >
      {isDark ? (
        <MoonIcon className="w-4 h-4 sm:w-6 sm:h-6 text-yellow-400" />
      ) : (
        <SunIcon className="w-4 h-4 sm:w-6 sm:h-6 text-yellow-500" />
      )}
    </button>
  );
};

export default ThemeSwitcher;
