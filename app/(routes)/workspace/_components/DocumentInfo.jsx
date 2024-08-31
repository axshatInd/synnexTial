import CoverPicker from "@/app/_components/CoverPicker";
import EmojiPickerComponent from "@/app/_components/EmojiPickerComponent";
import { SmilePlus } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";

function DocumentInfo() {
  const [coverImage, setCoverImage] = useState("/cover.png");
  const [emoji, setEmoji] = useState(); // State to store selected emoji

  return (
    <div>
      {/* Cover Image */}
      <CoverPicker setNewCover={(cover) => setCoverImage(cover)}>
        <div className="relative shadow-2xl rounded-xl group">
          {/* Cover Image */}
          <div className="relative">
            <Image
              src={coverImage}
              width={400}
              height={440}
              alt="Cover Image"
              className="w-full h-[200px] object-cover rounded-t-xl"
            />
            <h2 className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white opacity-0 group-hover:opacity-100 rounded-t-xl transition-opacity duration-300">
              Change Cover
            </h2>
          </div>
        </div>
      </CoverPicker>

      {/* Emoji Picker */}
      <div className="absolute mt-[-40px] cursor-pointer">
        <EmojiPickerComponent setEmojiIcon={(emoji) => setEmoji(emoji)}>
          <div className="p-4 rounded-md">
            {emoji ? (
              <span className="text-3xl">{emoji}</span>
            ) : (
              <SmilePlus className="h-5 w-5 text-gray-500" />
            )}
          </div>
        </EmojiPickerComponent>
      </div>

      {/* File Name */}
    </div>
  );
}

export default DocumentInfo;
