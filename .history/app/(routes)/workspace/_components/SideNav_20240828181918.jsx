"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import Logo2 from "./Logo2";
import { Bell } from "lucide-react";
import { Button } from "@/components/ui/button";

function SideNav() {
  const sideNavRef = useRef(null);
  const logoRef = useRef(null);
  const bellRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      sideNavRef.current,
      { x: -50, opacity: 0 }, // Initial state
      { x: 0, opacity: 1, duration: 1, ease: "power2.out" } // Animation
    );

    gsap.fromTo(
      logoRef.current,
      { scale: 0.8, opacity: 0 }, // Initial state for logo
      { scale: 1, opacity: 1, duration: 1, ease: "power2.out", delay: 0.3 } // Animation
    );

    gsap.fromTo(
      bellRef.current,
      { scale: 0.8, opacity: 0 }, // Initial state for bell
      { scale: 1, opacity: 1, duration: 1, ease: "power2.out", delay: 0.3 } // Animation
    );
  }, []);

  return (
    <div
      ref={sideNavRef} // Reference for GSAP
      className="h-screen md:w-72 hidden md:block fixed bg-slate-50 dark:bg-black rounded-3xl z-40 shadow-2xl"
    >
      <div className="flex justify-between items-center p-4">
        <div ref={logoRef}>
          <Logo2 />
        </div>
        <div className="relative" ref={bellRef}>
          <Bell className="h-8 w-8 p-2 rounded-full bg-gray-200 dark:bg-white text-gray-800 dark:text-black shadow-md" />
        </div>
      </div>
      <hr className=" mt-0.20rem mb-0.10rem" />
      <div className="p-4 flex items-center justify-between">
        <h2 className="font-medium">Workspace Name</h2>
        <Button size="sm" className="text-xs">
          +
        </Button>
      </div>
    </div>
  );
}

export default SideNav;
