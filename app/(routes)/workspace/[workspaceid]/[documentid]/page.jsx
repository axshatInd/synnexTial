"use client";
import React from "react";
import SideNav from "../../_components/SideNav";

function WorkspaceDocument({ params }) {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="fixed">
        <SideNav params={params} />
      </div>

      {/* Main Content Area */}
      <div className="flex-1 ml-72 p-6 mt-16 md:mt-4">
        <div className="bg-white dark:bg-black rounded-lg p-4 shadow-md h-full">
          Document
        </div>
      </div>
    </div>
  );
}

export default WorkspaceDocument;
