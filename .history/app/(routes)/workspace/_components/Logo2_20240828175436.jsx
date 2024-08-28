"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { Satisfy } from "next/font/google";
import { gsap } from "gsap";

const satisfy = Satisfy({ subsets: ["latin"], weight: "400" });

function Logo2() {
  const textRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      textRef.current,
      { opacity: 0, y: -20 }, // Initial state
      { opacity: 1, y: 0, duration: 1.5, ease: "power2.out" } // Animation
    );
  }, []);

  return (
    <div className="flex items-center gap-1 px-0.20rem">
      {/* Uncomment if you want to use an image */}
      {/* <Image src={"/logo.svg"} alt="Logo" width={40} height={40} /> */}
      <h2
        ref={textRef} // Reference for GSAP
        className={`${satisfy.className} text-2xl gradient-text z-50`}
      >
        synnex
      </h2>
    </div>
  );
}

export default Logo2;
