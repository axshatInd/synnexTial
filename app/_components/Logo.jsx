import React from "react";
import Image from "next/image";
import { Dancing_Script } from "next/font/google";

const dancing_script = Dancing_Script({ subsets: ["latin"] });

function Logo() {
  return (
    <div className="flex items-center gap-1">
      <Image src={"/logo.svg"} alt="Logo" width={30} height={30} />
      <h2
        className={`${dancing_script.className} font-semibold text-2xl gradient-text2`}
      >
        {/* empty for now */}
        nex
      </h2>
    </div>
  );
}

export default Logo;
