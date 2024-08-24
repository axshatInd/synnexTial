"use client";
import { Button } from "@/components/ui/button";
import { useUser } from "@clerk/nextjs";
import React from "react";

function WorkspaceList() {
  const { user } = useUser();
  return (
    <div className="my-10 px-4 sm:px-6 md:px-8 lg:px-10 xl:px-10 py-4 border border-gray-300 shadow-lg rounded-lg max-w-6xl mx-auto">
      <div className="flex justify-between items-center">
        <h2 className="font-semibold text-xl gradient-text3">
          Hello, {user?.username}!
        </h2>
        <Button>+</Button>
      </div>
    </div>
  );
}

export default WorkspaceList;