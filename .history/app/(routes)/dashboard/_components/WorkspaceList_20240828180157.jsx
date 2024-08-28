"use client";
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { useUser } from "@clerk/nextjs";
import { AlignLeft, LayoutGrid } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import useTheme from "@/app/_components/useTheme"; // Import useTheme to get the current theme
import { gsap } from "gsap"; // Import GSAP

function WorkspaceList() {
  const { user } = useUser();
  const [workspaceList, setWorkspaceList] = useState([]);
  const { theme } = useTheme(); // Get the current theme
  const isDarkMode = theme === "dark"; // Check if the current theme is dark mode

  // References for GSAP animations
  const headerRef = useRef(null);
  const contentRef = useRef(null);
  const emptyStateRef = useRef(null);

  // GSAP animation for the component
  useEffect(() => {
    // Animate header and content on mount
    gsap.fromTo(
      headerRef.current,
      { opacity: 0, y: -50 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }
    );
    gsap.fromTo(
      contentRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power3.out", delay: 0.2 }
    );
    gsap.fromTo(
      emptyStateRef.current,
      { opacity: 0, scale: 0.9 },
      { opacity: 1, scale: 1, duration: 0.8, ease: "back.out(1.2)", delay: 0.4 }
    );
  }, []);

  return (
    <div className="min-h-screen flex flex-col px-4 sm:px-6 md:px-8 lg:px-10 xl:px-10 py-4 border border-gray-300 shadow-lg rounded-lg max-w-6xl mx-auto">
      {/* Header */}
      <div
        ref={headerRef} // Reference for GSAP animation
        className="flex justify-between items-center mb-8"
      >
        <h2
          className={`font-semibold text-xl ${
            isDarkMode ? "gradient-text-dark" : "gradient-text"
          }`}
        >
          Hello, {user?.username}!
        </h2>
        <Link href={"/createworkspace"}>
          <Button>+</Button>
        </Link>
      </div>

      {/* Main Content Area */}
      <div
        ref={contentRef} // Reference for GSAP animation
        className="flex flex-col flex-grow"
      >
        <div className="flex justify-between items-center mb-4">
          <div>
            <h2 className="font-medium text-primary">Workspaces</h2>
          </div>
          <div className="flex gap-2">
            <LayoutGrid />
            <AlignLeft />
          </div>
        </div>
        {workspaceList.length === 0 ? (
          <div
            ref={emptyStateRef} // Reference for GSAP animation
            className="flex flex-col justify-center items-center flex-grow mt-4"
          >
            <Image
              src="/workspace.png"
              width={200}
              height={200}
              alt="Workspace"
            />
            <h2 className="text-lg font-medium mt-2">Create a new Workspace</h2>
            <Link href={"/createworkspace"}>
              <Button variant="outline" className="my-3">
                + New Workspace
              </Button>
            </Link>
          </div>
        ) : (
          <div className="flex-grow mt-4">Workspace List</div>
        )}
      </div>

      {/* Footer */}
      <div className="py-4">{/* Add footer content or adjust as needed */}</div>
    </div>
  );
}

export default WorkspaceList;
