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
      where("workspaceId", "==", Number(params?.workspaceid))
    );
    setDocumentList([]);
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const documents = [];
      querySnapshot.forEach((doc) => {
        documents.push(doc.data());
      });
      setDocumentList(documents);
      // console.log("Fetched documents:", documents); // Log to check
    });
  };

  const sideNavRef = useRef(null);
  const logoRef = useRef(null);
  const bellRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      sideNavRef.current,
      { x: -50, opacity: 0 }, // Initial state
      { x: 0, opacity: 1, duration: 1, ease: "power2.out" } // Animation
    );

    gsap.fromTo(
      logoRef.current,
      { scale: 0.8, opacity: 0 }, // Initial state for logo
      { scale: 1, opacity: 1, duration: 1, ease: "power2.out", delay: 0.3 } // Animation
    );

    gsap.fromTo(
      bellRef.current,
      { scale: 0.8, opacity: 0 }, // Initial state for bell
      { scale: 1, opacity: 1, duration: 1, ease: "power2.out", delay: 0.3 } // Animation
    );
  }, []);

  const CreateNewDocument = async () => {
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

  return (
    <div
      ref={sideNavRef} // Reference for GSAP
      className="h-screen md:w-72 hidden md:block fixed bg-slate-50 dark:bg-black rounded-3xl z-50 shadow-2xl mt-2 md:mt-4"
    >
      <div className="flex justify-between items-center p-4">
        <div ref={logoRef}>
          <Logo2 />
        </div>
        <div className="relative" ref={bellRef}>
          <Bell className="h-8 w-8 p-2 rounded-full bg-gray-200 dark:bg-white text-gray-800 dark:text-black shadow-md" />
        </div>
      </div>
      <hr className=" mt-0.20rem mb-0.10rem" />
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
      <DocumentList documentList={documentList} params={params} />
    </div>
  );
}

export default SideNav;
