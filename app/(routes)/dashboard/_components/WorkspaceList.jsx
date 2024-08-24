"use client";
import { useUser } from "@clerk/nextjs";
import React from "react";

function WorkspaceList() {
  const { user } = useUser();
  return (
    <div className="my-10 p-10 md:px-24 lg:px-36 xl:px-52">
      <div>
        <h2>Hello, {user?.username} </h2>
      </div>
    </div>
  );
}

export default WorkspaceList;
