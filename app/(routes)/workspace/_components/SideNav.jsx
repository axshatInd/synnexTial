"use client";
import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import Logo2 from "./Logo2";
import { Bell, Loader2Icon } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  collection,
  doc,
  onSnapshot,
  query,
  setDoc,
  where,
} from "firebase/firestore";
import { db } from "@/config/firebaseConfig";
import DocumentList from "./DocumentList";
import uuid4 from "uuid4";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { Progress } from "@/components/ui/progress";
import { toast } from "sonner";

const MAX_FILE = 6;

function SideNav({ params }) {
  const [documentList, setDocumentList] = useState([]);
  const { user } = useUser();
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    params && GetDocumentList();
  }, [params]);

  const GetDocumentList = () => {
    const q = query(
      collection(db, "workspaceDocuments"),
      where("workspaceId", "==", Number(params?.workspaceId))
    );
    setDocumentList([]);
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const documents = [];
      querySnapshot.forEach((doc) => {
        documents.push(doc.data());
      });
      setDocumentList(documents);
    });
  };

  const sideNavRef = useRef(null);
  const logoRef = useRef(null);
  const bellRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      sideNavRef.current,
      { x: -50, opacity: 0 },
      { x: 0, opacity: 1, duration: 1, ease: "power2.out" }
    );

    gsap.fromTo(
      logoRef.current,
      { scale: 0.8, opacity: 0 },
      { scale: 1, opacity: 1, duration: 1, ease: "power2.out", delay: 0.3 }
    );

    gsap.fromTo(
      bellRef.current,
      { scale: 0.8, opacity: 0 },
      { scale: 1, opacity: 1, duration: 1, ease: "power2.out", delay: 0.3 }
    );
  }, []);

  const CreateNewDocument = async () => {
    if (documentList?.length >= MAX_FILE) {
      toast("Upgrade to add new SynDoc", {
        description:
          "You reached the Max SynDocs creation limit, Please upgrade for more benefits.",
        action: {
          label: "Upgrade",
          onClick: () => console.log("Undo"),
        },
      });
      return;
    }
    setLoading(true);
    const docId = uuid4();
    await setDoc(doc(db, "workspaceDocuments", docId.toString()), {
      workspaceId: Number(params?.workspaceId),
      createdBy: user?.primaryEmailAddress?.emailAddress,
      coverImage: null,
      emoji: null,
      id: docId,
      documentName: "Untitled Document",
      documentOutput: [],
    });

    setLoading(false);
    router.replace("/workspace/" + params?.workspaceId + "/" + docId);
  };

  const progressValue = (documentList.length / MAX_FILE) * 100;

  return (
    <div
      ref={sideNavRef}
      className="relative flex ml-3 flex-col min-h-[85vh] max-h-[95vh] md:w-72 w-0 md:flex hidden fixed top-0 left-0 bg-slate-50 dark:bg-black rounded-3xl z-50 shadow-2xl mt-2 md:mt-4"
      style={{ height: "100vh" }} // Ensures the SideNav takes the full viewport height
    >
      {/* Header */}
      <div className="flex justify-between items-center p-4">
        <div ref={logoRef}>
          <Logo2 />
        </div>
        <div className="relative" ref={bellRef}>
          <Bell className="h-8 w-8 p-2 rounded-full bg-gray-200 dark:bg-white text-gray-800 dark:text-black shadow-md" />
        </div>
      </div>
      <hr className="mt-0.20rem mb-0.10rem" />

      {/* SynDocs Header */}
      <div className="p-4 flex items-center justify-between">
        <h2 className="font-medium">SynDocs</h2>
        <Button
          size="sm"
          onClick={CreateNewDocument}
          className="text-lg py-0.5 rounded-full"
        >
          {loading ? <Loader2Icon className="h-3 w-3 animate-spin" /> : "+"}
        </Button>
      </div>

      {/* Document List */}
      <div className="flex-grow overflow-y-auto p-4">
        <DocumentList documentList={documentList} params={params} />
      </div>

      {/* Progress Bar */}
      <div className="px-6 pb-10">
        <Progress value={progressValue} />
        <h2 className="mb-2 mt-3">
          <strong>{documentList?.length}</strong> out of{" "}
          <strong>{MAX_FILE}</strong> SynDocs created
        </h2>
        <h2 className="text-sm font-light my-2">
          Please <strong>Upgrade</strong> your plan
        </h2>
      </div>
    </div>
  );
}

export default SideNav;
