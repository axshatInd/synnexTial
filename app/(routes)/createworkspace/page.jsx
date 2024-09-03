"use client"; // Add this directive at the top of the file

import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import CoverPicker from "@/app/_components/CoverPicker";
import EmojiPickerComponent from "@/app/_components/EmojiPickerComponent";
import { db } from "@/config/firebaseConfig";
import { useAuth, useUser } from "@clerk/nextjs";
import { doc, setDoc } from "firebase/firestore";
import { Loader2Icon, SmilePlus } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import uuid4 from "uuid4";
import { gsap } from "gsap"; // Import GSAP

function CreateWorkspace() {
  const [coverImage, setCoverImage] = useState("/cover.png");
  const [workspacename, setWorkspaceName] = useState("");
  const [emoji, setEmoji] = useState("");
  const { user } = useUser();
  const { orgId } = useAuth();
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  // References for GSAP animations
  const coverRef = useRef(null);
  const inputSectionRef = useRef(null);

  // GSAP animation for the component
  useEffect(() => {
    gsap.fromTo(
      coverRef.current,
      { opacity: 0, scale: 0.95 },
      { opacity: 1, scale: 1, duration: 1, ease: "power3.out" }
    );
    gsap.fromTo(
      inputSectionRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out", delay: 0.2 }
    );
  }, []);

  // Function to create workspace
  const OnCreateWorkspace = async () => {
    setLoading(true);
    const workspaceId = Date.now();
    await setDoc(doc(db, "Workspace", workspaceId.toString()), {
      workspaceName: workspacename,
      emoji: emoji,
      coverImage: coverImage,
      createdBy: user?.primaryEmailAddress?.emailAddress,
      id: workspaceId,
      orgId: orgId ? orgId : user?.primaryEmailAddress?.emailAddress,
    });
    const docId = uuid4();
    await setDoc(doc(db, "workspaceDocuments", docId.toString()), {
      workspaceId: workspaceId,
      createdBy: user?.primaryEmailAddress?.emailAddress,
      coverImage: null,
      emoji: null,
      id: docId,
      documentName: "Untitled Document",
      documentOutput: [],
    });

    setLoading(false);
    router.replace("/workspace/" + workspaceId + "/" + docId);

    await setDoc(doc(db, "documentOutput", docId.toString()), {
      docId: docId,
      output: [],
    });
  };

  return (
    <div className="p-10 md:px-36 lg:px-64 xl:px-96 py-28">
      <div className="shadow-2xl rounded-xl">
        <CoverPicker setNewCover={(v) => setCoverImage(v)}>
          {/* Cover Image */}
          <div
            ref={coverRef} // Reference for GSAP animation
            className="relative group cursor-pointer"
          >
            <div className="relative">
              <Image
                src={coverImage}
                width={400}
                height={440}
                alt="Cover Image"
                className="w-full h-[150px] object-cover rounded-t-xl"
              />
              <h2 className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white opacity-0 group-hover:opacity-100 rounded-t-xl transition-opacity duration-300">
                Change Cover
              </h2>
            </div>
          </div>
        </CoverPicker>

        {/* Input Section */}
        <div
          ref={inputSectionRef} // Reference for GSAP animation
          className="p-12"
        >
          <h2 className="font-medium text-xl">Create a new Workspace</h2>
          <h2 className="text-lg mt-2 text-gray-700">
            <span className="font-medium">Synnextial</span> lets you create a
            shared space to collaborate with your team.
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
