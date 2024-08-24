"use client";
import { Button } from "@/components/ui/button";
import { useUser } from "@clerk/nextjs";
import { AlignLeft, LayoutGrid } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";

function WorkspaceList() {
  const { user } = useUser();

  const [WorkspaceList, setWorkspaceList] = useState([]);
  return (
    <div className="my-10 px-4 sm:px-6 md:px-8 lg:px-10 xl:px-10 py-4 border border-gray-300 shadow-lg rounded-lg max-w-6xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <h2 className="font-semibold text-xl gradient-text3">
          Hello, {user?.username}!
        </h2>
        <Button>+</Button>
      </div>
      <div className="flex justify-between items-center">
        <div>
          <h2 className="font-medium text-primary">Workspaces</h2>
        </div>
        <div className="flex gap-2">
          <LayoutGrid />
          <AlignLeft />
        </div>
      </div>
      {WorkspaceList?.length == 0 ? (
        <div className="flex flex-col justify-center items-center">
          <Image
            src={"/workspace.png"}
            width={200}
            height={200}
            alt="Workspace"
          />
          <h2>Create a new Workspace</h2>
          <Button variant="outline" className="my-3">
            + New Workspace
          </Button>
        </div>
      ) : (
        <div>Workspace List</div>
      )}
    </div>
  );
}

export default WorkspaceList;
