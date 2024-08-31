import { Button } from "@/components/ui/button";
import React from "react";

function DocumentHeader() {
  return (
    <div>
      <div className="z-10 flex gap-2 shadow-sm justify-end pr-3 py-3 rounded-xl">
        <Button>Share</Button>
      </div>
    </div>
  );
}

export default DocumentHeader;
