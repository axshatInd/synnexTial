import React from "react";
import Image from "next/image";
import { Dancing_Script } from "next/font/google";
import Link from "next/link"; // Import Link from Next.js

const dancing_script = Dancing_Script({ subsets: ["latin"] });

function Logo() {
  return (
    <Link href="/" passHref>
      <div className="flex items-center cursor-pointer">
        <Image src="/logo2.svg" alt="Logo" width={50} height={50} />
        <h2
          className={`${dancing_script.className} font-semibold text-2xl gradient-text4`}
        >
          {/* empty for now */}
          Nex
        </h2>
      </div>
    </Link>
  );
}

export default Logo;
