"use client";
import { useEffect, useRef } from "react";
import { SunIcon, MoonIcon } from "@heroicons/react/24/solid"; // Import Heroicons
import { gsap } from "gsap"; // Import GSAP

const ThemeSwitcher = ({ isDark, onChange }) => {
  const buttonRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      buttonRef.current,
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1, duration: 0.5, ease: "back.out(1.7)" }
    );
  }, []);

  const handleClick = () => {
    // Add a click animation for visual feedback
    gsap.to(buttonRef.current, {
      scale: 0.9,
      duration: 0.2,
      ease: "power2.inOut",
      yoyo: true,
      repeat: 1,
    });

    onChange(); // Call the passed in onChange function
  };

  return (
    <button
      ref={buttonRef} // Reference for GSAP animation
      onClick={handleClick}
      aria-label={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
      className="theme-switcher-button p-1 sm:p-2 transition-transform duration-150"
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
