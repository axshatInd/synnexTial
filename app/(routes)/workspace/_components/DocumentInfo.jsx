import CoverPicker from "@/app/_components/CoverPicker";
import Image from "next/image";
import React, { useState } from "react";

function DocumentInfo() {
  const [coverImage, setCoverImage] = useState("/cover.png");

  return (
    <div>
      {/* Cover Image */}
      <CoverPicker>
        <div className="relative shadow-2xl rounded-xl group">
          {/* Cover Image */}
          <div className="relative">
            <Image
              src={coverImage}
              width={400}
              height={440}
              alt="Cover Image"
              className="w-full h-[150px] object-cover rounded-t-xl"
            />
            <h2 className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white opacity-0 group-hover:opacity-100 rounded-t-xl transition-opacity duration-300">
              Change Cover
            </h2>
          </div>
        </div>
      </CoverPicker>

      {/* Emoji Picker */}

      {/* File Name */}
    </div>
  );
}

export default DocumentInfo;
