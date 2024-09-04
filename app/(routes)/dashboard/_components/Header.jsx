"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Logo from "@/app/_components/Logo";
import {
  OrganizationSwitcher,
  useAuth,
  UserButton,
  useUser,
} from "@clerk/nextjs";
import useTheme from "@/app/_components/useTheme"; // Import useTheme here
import { doc, setDoc } from "firebase/firestore";
import { db } from "@/config/firebaseConfig";

function Header() {
  const { orgId } = useAuth();
  const { user } = useUser();
  useEffect(() => {
    user && saveUserData();
  }, [user]);

  /**
   * Used to save user data
   */
  const saveUserData = async () => {
    const docId = user?.primaryEmailAddress?.emailAddress;
    try {
      await setDoc(doc(db, "SynnexUsers", docId), {
        name: user?.fullName,
        avatar: user?.imageUrl,
        email: user?.primaryEmailAddress?.emailAddress,
      });
    } catch (e) {}
  };
  const headerRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();

    tl.fromTo(
      headerRef.current,
      { y: -50, opacity: 0, scale: 0.95 },
      { y: 0, opacity: 1, scale: 1, duration: 1.2, ease: "power4.out" }
    );

    // You can add more animations if needed
    // Example: animate child elements or logo
    tl.fromTo(
      headerRef.current.querySelector("div"),
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1, ease: "power2.out" },
      "-=0.5" // Overlap with the previous animation
    );
  }, []);

  const { theme } = useTheme();

  return (
    <header
      ref={headerRef} // Reference for animation
      className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-50 flex justify-between items-center px-4 py-2 md:px-6 md:py-3 shadow-xl rounded-full bg-white w-full max-w-7xl overflow-hidden ${
        theme === "dark" ? "dark:bg-black" : ""
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
