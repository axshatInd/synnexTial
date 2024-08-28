import React from "react";
import Image from "next/image";
import { Dancing_Script } from "next/font/google";

const dancing_script = Dancing_Script({ subsets: ["latin"] });

function Logo() {
  return (
    <div className="flex items-center gap-1">
      <Image src={"/logo2.svg"} alt="Logo" width={50} height={50} />
      <h2
        className={`${dancing_script.className} font-semibold text-2xl gradient-text4`}
      >
        {/* empty for now */}
        Nex
      </h2>
    </div>
  );
}

export default Logo;
