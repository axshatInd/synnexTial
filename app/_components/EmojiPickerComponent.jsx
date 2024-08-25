import EmojiPicker from "emoji-picker-react";
import React from "react";

function EmojiPickerComponent({ children }) {
  return (
    <div>
      <div>{children}</div>
      <EmojiPicker />
    </div>
  );
}

export default EmojiPickerComponent;
