import EmojiPicker from "emoji-picker-react";
import React, { useState } from "react";

function EmojiPickerComponent({ children, setEmojiIcon }) {
  const [openEmojiPicker, setOpenEmojiPicker] = useState(false);

  const handleToggleEmojiPicker = () => {
    setOpenEmojiPicker((prev) => !prev); // Toggle the emoji picker visibility
  };

  return (
    <div>
      {/* Button to open/close the EmojiPicker */}
      <div onClick={handleToggleEmojiPicker}>{children}</div>

      {/* Conditional rendering for the EmojiPicker */}
      {openEmojiPicker && (
        <div className="absolute z-10">
          <EmojiPicker
            onEmojiClick={(e) => {
              setEmojiIcon(e.emoji);
              setOpenEmojiPicker(false); // Close the picker after selecting an emoji
            }}
          />
        </div>
      )}
    </div>
  );
}

export default EmojiPickerComponent;
