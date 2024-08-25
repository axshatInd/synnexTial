import EmojiPicker from "emoji-picker-react";
import React, { useState } from "react";

function EmojiPickerComponent({ children, setEmojiIcon }) {
  const [openEmojiPicker, setOpenEmojiPicker] = useState(false);

  return (
    <div>
      {/* Button to open the EmojiPicker */}
      <div onClick={() => setOpenEmojiPicker(true)}>{children}</div>

      {/* Conditional rendering for the EmojiPicker */}
      {openEmojiPicker && (
        <div className="absolute z-10">
          <EmojiPicker
            onEmojiClick={(e) => {
              setEmojiIcon(e.emoji);
              setOpenEmojiPicker(false);
              {
                /* will now setup firebase backend */
              }
            }}
          />
        </div>
      )}
    </div>
  );
}

export default EmojiPickerComponent;
