"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Logo from "@/app/_components/Logo";
import { OrganizationSwitcher, useAuth, UserButton } from "@clerk/nextjs";
import ThemeSwitcher from "@/app/_components/ThemeSwitcher";
import useTheme from "@/app/_components/useTheme"; // Import useTheme here

function Header() {
  const { orgId } = useAuth();
  const headerRef = useRef(null);

  // GSAP animation for the header
  useEffect(() => {
    gsap.fromTo(headerRef.current, { opacity: 0 }, { opacity: 1, duration: 1 });
  }, []);

  const { theme, toggleTheme } = useTheme();

  return (
    <header
      ref={headerRef} // Reference for animation
      className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-4 py-2 md:px-6 md:py-3 shadow-xl rounded-b-lg max-w-8xl mx-auto bg-white"
    >
      <Logo />
      <ThemeSwitcher isDark={theme === "dark"} onChange={toggleTheme} />
      <OrganizationSwitcher
        afterCreateOrganizationUrl={"/dashboard"}
        afterLeaveOrganizationUrl={"/dashboard"}
      />
      <UserButton />
    </header>
  );
}

export default Header;
