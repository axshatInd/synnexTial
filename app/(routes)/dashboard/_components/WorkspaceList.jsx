"use client";
import { useUser } from "@clerk/nextjs";
import React from "react";

function WorkspaceList() {
  const { user } = useUser();
  return (
    <div className="my-10 p-10 md:px-24 lg:px-36 xl:px-52">
      <h2>Hello, {user?.fullName}</h2>
    </div>
  );
}

export default WorkspaceList;
