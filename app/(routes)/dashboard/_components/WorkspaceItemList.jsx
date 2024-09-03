import Image from "next/image";
import React from "react";

function WorkspaceItemList({ workspaceList }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {workspaceList &&
        workspaceList.map((workspace, index) => (
          <div key={index}>
            <Image
              src={workspace?.coverImage}
              width={400}
              height={200}
              alt="cover"
              className="h-[150px] object-cover rounded-t-xl"
            />
            <h2>{workspace.workspaceName}</h2>
          </div>
        ))}
    </div>
  );
}

export default WorkspaceItemList;
