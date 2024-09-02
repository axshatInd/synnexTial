"use client";
import React from "react";
import SideNav from "../../_components/SideNav";
import DocumentEditorSection from "../../_components/DocumentEditorSection";

function WorkspaceDocument({ params }) {
  return (
    <div className="flex flex-col md:flex-row h-screen">
      {/* Sidebar */}
      <SideNav params={params} />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col md:ml-2 ml-0 p-6 shadow-md md:mt-4 overflow-auto">
        <div className="bg-white dark:bg-black rounded-lg p-4 flex-1 overflow-auto">
          <DocumentEditorSection params={params} />
        </div>
      </div>
    </div>
  );
}

export default WorkspaceDocument;
