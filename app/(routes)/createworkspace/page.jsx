"use client"; // Add this directive at the top of the file

import CoverPicker from "@/app/_components/CoverPicker";
import EmojiPickerComponent from "@/app/_components/EmojiPickerComponent";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { db } from "@/config/firebaseConfig";
import { useAuth, useUser } from "@clerk/nextjs";
import { doc, setDoc } from "firebase/firestore";
import { Loader2Icon, SmilePlus } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";

function CreateWorkspace() {
  const [coverImage, setCoverImage] = useState("/cover.png");
  const [workspacename, setWorkspaceName] = useState();
  const [emoji, setEmoji] = useState();
  const { user } = useUser();
  const { orgId } = useAuth();
  const [loading, setLoading] = useState(false);

  /* Used to create new workspace and save the data in dataspace */
  const OnCreateWorkspace = async () => {
    setLoading(true);
    const docId = Date.now();
    const result = await setDoc(doc(db, "Workspace", docId.toString()), {
      workspaceName: workspacename,
      emoji: emoji,
      coverImage: coverImage,
      createdBy: user?.primaryEmailAddress?.emailAddress,
      id: docId,
      orgId: orgId ? orgId : user?.primaryEmailAddress?.emailAddress,
    });
    setLoading(false);
    console.log("Data Inserted");
  };

  return (
    <div className="p-10 md:px-36 lg:px-64 xl:px-96 py-28">
      <div className="shadow-2xl rounded-xl">
        <CoverPicker setNewCover={(v) => setCoverImage(v)}>
          {/* Cover Image */}
          <div className="relative group cursor-pointer">
            <h2 className="hidden absolute p-4 w-full h-full items-center group-hover:flex justify-center text-black">
              Change Cover
            </h2>
            <div className="group-hover:opacity-70">
              <Image
                src={coverImage}
                width={400}
                height={440}
                className="w-full h-[150px] object-cover rounded-t-xl"
              />
            </div>
          </div>
        </CoverPicker>

        {/* Input Section */}
        <div className="p-12">
          <h2 className="font-medium text-xl">Create a new Workspace</h2>
          <h2 className="text-lg mt-2 text-gray-700">
            <span className="font-medium">Synnex</span> lets you create a shared
            space to collaborate with your team.
          </h2>

          <div className="mt-8 flex gap-2 items-center">
            <EmojiPickerComponent setEmojiIcon={(v) => setEmoji(v)}>
              <Button variant="outline">{emoji ? emoji : <SmilePlus />}</Button>
            </EmojiPickerComponent>
            <Input
              placeholder="Workspace Name"
              onChange={(e) => setWorkspaceName(e.target.value)}
            />
          </div>
          <div className="mt-7 flex justify-end gap-6">
            <Button
              disabled={!workspacename?.length || loading}
              onClick={OnCreateWorkspace}
            >
              Create {loading && <Loader2Icon className="animate-spin ml-2" />}
            </Button>
            <Button variant="outline">Cancel</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateWorkspace;
