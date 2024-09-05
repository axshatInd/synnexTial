"use client";
import React, { useEffect } from "react";
import { gsap } from "gsap";

function Hero() {
  useEffect(() => {
    // GSAP animation for the container
    gsap.fromTo(
      ".glass-container",
      { opacity: 0, y: 100 },
      { opacity: 1, y: 0, duration: 2, ease: "power3.out", delay: 0.5 }
    );

    // GSAP animation for the title text
    gsap.fromTo(
      ".intro-text",
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1.5, ease: "power3.out", delay: 1 }
    );

    // GSAP animation for the subtitle text
    gsap.fromTo(
      ".subtitle-text",
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1.5, ease: "power2.out", delay: 1.5 }
    );

    // GSAP animation for button
    gsap.fromTo(
      ".get-started-btn",
      { opacity: 0, scale: 0.5 },
      { opacity: 1, scale: 1, duration: 1, ease: "bounce.out", delay: 2 }
    );

    // GSAP cursor light animation
    const cursorLight = document.querySelector(".cursor-light");
    const handleMouseMove = (e) => {
      gsap.to(cursorLight, {
        duration: 0.3,
        x: e.clientX - cursorLight.clientWidth / 2,
        y: e.clientY - cursorLight.clientHeight / 2,
      });
    };
    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="relative" id="home">
      {/* Light Cursor Animation */}
      <div className="cursor-light absolute w-16 h-16 bg-gradient-to-br from-yellow-400 to-transparent rounded-full pointer-events-none opacity-60 z-50"></div>

      <div
        aria-hidden="true"
        className="absolute inset-0 grid grid-cols-2 -space-x-52 opacity-40 dark:opacity-20"
      >
        <div className="blur-[106px] h-56 bg-gradient-to-br from-primary to-purple-400 dark:from-blue-700"></div>
        <div className="blur-[106px] h-32 bg-gradient-to-r from-cyan-400 to-sky-300 dark:to-indigo-600"></div>
      </div>
      <div>
        <div className="relative pt-36 ml-auto">
          <div className="lg:w-2/3 text-center mx-auto">
            <h1 className="intro-text text-gray-900 dark:text-white font-bold text-5xl md:text-6xl xl:text-7xl">
              <span className="block">SynnexTial</span>
              <span className="block text-primary dark:text-white">
                where work happens, in sync.
              </span>
            </h1>
            <p className="subtitle-text mt-8 text-gray-700 dark:text-gray-300">
              This is your digital workspace for seamless collaboration and
              creative solutions. Designed for efficiency, it streamlines
              project management, fosters teamwork, and helps you turn ideas
              into impactful results. Unlock your team's potential and bring
              your visions to life with SynnexTial.
            </p>
            <div className="mt-16 flex flex-wrap justify-center gap-y-4">
              <a
                href="/dashboard"
                className="relative flex h-11 w-full items-center justify-center px-6 before:absolute before:inset-0 before:rounded-full before:bg-primary before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 sm:w-max dark:before:bg-black"
              >
                <span className="relative text-base font-semibold text-white dark:text-white">
                  Get started
                </span>
              </a>
            </div>
            <div className="hidden py-8 mt-16 border-y border-gray-100 dark:border-gray-800 sm:flex justify-center gap-8">
              <div className="text-center max-w-xs">
                <h6 className="text-lg font-semibold text-gray-700 dark:text-white">
                  Seamless Collaboration
                </h6>
                <p className="mt-2 text-gray-500 leading-relaxed">
                  Empower your teams to work together effortlessly, no matter
                  where they are.
                </p>
              </div>
              <div className="text-center max-w-xs">
                <h6 className="text-lg font-semibold text-gray-700 dark:text-white">
                  Innovation at Speed
                </h6>
                <p className="mt-2 text-gray-500 leading-relaxed">
                  Experience rapid project execution and stay ahead of the curve
                  with cutting-edge features.
                </p>
              </div>
              <div className="text-center max-w-xs">
                <h6 className="text-lg font-semibold text-gray-700 dark:text-white">
                  AI-Powered Content Creation
                </h6>
                <p className="mt-2 text-gray-500 leading-relaxed">
                  Leverage AI to generate high-quality content in our rich text
                  editor—simply provide a prompt, and let AI bring your ideas to
                  life.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
