"use client";
import { Button } from "@/components/ui/button";
import { useUser } from "@clerk/nextjs";
import React from "react";

function WorkspaceList() {
  const { user } = useUser();
  return (
    <div className="my-10 p-10 md:px-24 lg:px-36 xl:px-52">
      <div className="flex justify-between">
        <h2 className="font-semibold text-xl">Hello, {user?.username}</h2>
        <Button>+</Button>
      </div>
    </div>
  );
}

export default WorkspaceList;
