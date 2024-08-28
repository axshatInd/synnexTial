// page.jsx
"use client";
import React from "react";
import SideNav from "../../_components/SideNav";

function WorkspaceDocument({ params }) {
  // console.log("WorkspaceDocument params:", params);

  return (
    <div>
      <div className="ml-2">
        <SideNav params={params} />
      </div>
      <div className="md:ml-72">Document</div>
    </div>
  );
}

export default WorkspaceDocument;
