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
      className={`fixed top-0 left-0 right-0 z-50 flex justify-between items-center py-2 md:py-3 shadow-xl rounded-b-lg bg-white`}
      style={{
        marginLeft: "auto",
        marginRight: "auto",
        maxWidth: "calc(100% - 32px)",
      }} // Adjust this value for your desired spacing
    >
      <div className="flex-grow flex items-center justify-between">
        <Logo />
        <div className="flex items-center space-x-4">
          <OrganizationSwitcher
            afterCreateOrganizationUrl={"/dashboard"}
            afterLeaveOrganizationUrl={"/dashboard"}
          />
          <UserButton />
        </div>
      </div>
    </header>
  );
}

export default Header;
