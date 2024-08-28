import React from "react";
import Image from "next/image";
import { Satisfy } from "next/font/google";

const satisfy = Satisfy({ subsets: ["latin"], weight: "400" });

function Logo2() {
  return (
    <div className="flex items-center gap-1 px-0.20rem">
      {/* Uncomment if you want to use an image */}
      {/* <Image src={"/logo.svg"} alt="Logo" width={40} height={40} /> */}
      <h2 className={`${satisfy.className} text-2xl gradient-text z-50`}>
        {/* empty for now */}
        synnex
      </h2>
    </div>
  );
}

export default Logo2;
