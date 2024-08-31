import CoverPicker from "@/app/_components/CoverPicker";
import Image from "next/image";
import React, { useState } from "react";

function DocumentInfo() {
  const [coverImage, setCoverImage] = useState("/cover.png");
  return (
    <div>
      {/* Cover Image */}
      <CoverPicker>
        <div className="shadow-2xl rounded-xl">
          {/* Cover Image */}

          <h2 className="hidden absolute p-4 w-full h-full items-center group-hover:flex justify-center text-black">
            Change Cover
          </h2>
          <div className="group-hover:opacity-70">
            <Image
              src={coverImage}
              width={400}
              height={440}
              className="w-full h-[150px] object-cover rounded-t-xl"
            />
          </div>
        </div>
      </CoverPicker>

      {/* Emoji Picker */}

      {/* File Name */}
    </div>
  );
}

export default DocumentInfo;
