"use client";
import { Button } from "@/components/ui/button";
import { useUser } from "@clerk/nextjs";
import { AlignLeft, LayoutGrid } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

function WorkspaceList() {
  const { user } = useUser();
  const [WorkspaceList, setWorkspaceList] = useState([]);

  return (
    <div className="min-h-screen flex flex-col px-4 sm:px-6 md:px-8 lg:px-10 xl:px-10 py-4 border border-gray-300 shadow-lg rounded-lg max-w-6xl mx-auto">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <h2 className="font-semibold text-xl gradient-text3">
          Hello, {user?.username}!
        </h2>
        <Link href={"/createworkspace"}>
          <Button>+</Button>
        </Link>
      </div>

      {/* Main Content Area */}
      <div className="flex flex-col flex-grow">
        <div className="flex justify-between items-center mb-4">
          <div>
            <h2 className="font-medium text-primary">Workspaces</h2>
          </div>
          <div className="flex gap-2">
            <LayoutGrid />
            <AlignLeft />
          </div>
        </div>
        {WorkspaceList?.length === 0 ? (
          <div className="flex flex-col justify-center items-center flex-grow mt-4">
            <Image
              src="/workspace.png"
              width={200}
              height={200}
              alt="Workspace"
            />
            <h2 className="text-lg font-medium mt-2">Create a new Workspace</h2>
            <Link href={"/createworkspace"}>
              <Button variant="outline" className="my-3">
                + New Workspace
              </Button>
            </Link>
          </div>
        ) : (
          <div className="flex-grow mt-4">Workspace List</div>
        )}
      </div>

      {/* Footer */}
      <div className="py-4">{/* Add footer content or adjust as needed */}</div>
    </div>
  );
}

export default WorkspaceList;
