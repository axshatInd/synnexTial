import React from "react";
import SideNav from "../../_components/SideNav";

function WorkspaceDocument() {
  return (
    <div>
      {/* div for Side Nav below */}
      <div className="ml-2">
        <SideNav />
      </div>

      {/* div for DOcument below */}
      <div className=" md:ml-72">Document</div>
    </div>
  );
}

export default WorkspaceDocument;