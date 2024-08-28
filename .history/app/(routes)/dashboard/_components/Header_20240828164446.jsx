"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Logo from "@/app/_components/Logo";
import { OrganizationSwitcher, useAuth, UserButton } from "@clerk/nextjs";
import useTheme from "@/app/_components/useTheme"; // Import useTheme here

function Header() {
  const { orgId } = useAuth();
  const headerRef = useRef(null);

  // GSAP animation for the header
  useEffect(() => {
    gsap.fromTo(headerRef.current, { opacity: 0 }, { opacity: 1, duration: 1 });
  }, []);

  const { theme } = useTheme();

  return (
    <header
      ref={headerRef} // Reference for animation
      className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-50 flex justify-between items-center px-4 py-2 md:px-6 md:py-3 shadow-xl rounded-full bg-white w-full max-w-7xl overflow-hidden border ${
        theme === "dark" ? "border-white" : "border-gray-300"
      }`}
    >
      <div className="w-full max-w-screen-xl px-1 flex justify-between items-center">
        <Logo />
        <OrganizationSwitcher
          afterCreateOrganizationUrl={"/dashboard"}
          afterLeaveOrganizationUrl={"/dashboard"}
        />
        <UserButton />
      </div>
    </header>
  );
}

export default Header;
