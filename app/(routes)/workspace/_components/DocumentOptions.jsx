import { Link2Icon, MoreVertical, PenBoxIcon, Trash2Icon } from "lucide-react";
import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import useTheme from "@/app/_components/useTheme";

function DocumentOptions({ doc, deleteDocument }) {
  // Destructure the props here
  const { theme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <MoreVertical
          className={`h-3 w-3 transition-colors duration-300 ${
            theme === "dark"
              ? "text-black group-hover:text-black dark:group-hover:text-black"
              : "text-black group-hover:text-white"
          }`}
        />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="bg-transparent">
        <DropdownMenuItem>
          <Link2Icon
            className={`h-3 w-3 mr-2 ${
              theme === "dark"
                ? "text-white group-hover:text-black dark:group-hover:text-black"
                : "text-black group-hover:text-white"
            }`}
          />{" "}
          Share Link
        </DropdownMenuItem>
        <DropdownMenuItem>
          <PenBoxIcon
            className={`h-3 w-3 mr-2 ${
              theme === "dark"
                ? "text-white group-hover:text-black dark:group-hover:text-black"
                : "text-black group-hover:text-white"
            }`}
          />{" "}
          Rename
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => deleteDocument(doc?.id)}>
          <Trash2Icon
            className={`h-3 w-3 mr-2 text-red-500 ${
              theme === "dark"
                ? "group-hover:text-black dark:group-hover:text-black"
                : "group-hover:text-white"
            }`}
          />{" "}
          Delete
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default DocumentOptions;
