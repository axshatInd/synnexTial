import { Button } from "@/components/ui/button";
import React from "react";

function DocumentHeader() {
  return (
    <div>
      <div className="z-10 flex gap-2 justify-end pr-3 pt-1 rounded-xl">
        <Button>Share</Button>
      </div>
    </div>
  );
}

export default DocumentHeader;
