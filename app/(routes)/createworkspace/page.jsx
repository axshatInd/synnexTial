"use client";
import Image from "next/image";
import React, { useState } from "react";

function CreateWorkspace() {
  const [coverImage, setCoverImage] = useState("/cover.png");

  return (
    <div className="p-10 md:px-36 lg:px-52 xl:px-80 py-20">
      <div>
        {/* Cover Image */}
        <div className="relative group">
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
      </div>
    </div>
  );
}

export default CreateWorkspace;
