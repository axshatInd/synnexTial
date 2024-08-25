import React from "react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import CoverOption from "../_shared/CoverOption";
import Image from "next/image";

function CoverPicker({ children }) {
  return (
    <Dialog>
      <DialogTrigger className="w-full">{children}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Change Cover Image</DialogTitle>
          <DialogDescription>
            <div>
              {CoverOption.map((cover, index) => (
                <div>
                  <Image src={cover?.imageUrl} width={200} height={140} />
                </div>
              ))}
            </div>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}

export default CoverPicker;
