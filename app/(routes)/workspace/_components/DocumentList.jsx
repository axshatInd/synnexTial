"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useRouter } from "next/navigation";
import DocumentOptions from "./DocumentOptions";
import { Progress } from "@/components/ui/progress";

function DocumentList({ documentList, params }) {
  const router = useRouter();
  const itemsRef = useRef([]);
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Start the progress animation
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev < 100) {
          return prev + 25; // Increase progress by 25
        }
        return prev;
      });
    }, 500); // Update every 500ms

    // Simulate the loading process
    const loadingDuration = 2500; // 2.5 seconds
    if (documentList && documentList.length > 0) {
      setTimeout(() => {
        setProgress(100); // Ensure it reaches 100 at the end
        setLoading(false);
        clearInterval(interval); // Clear the interval once loading is complete
      }, loadingDuration);
    }

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [documentList]);

  useEffect(() => {
    // Trigger GSAP animation when loading is complete
    if (!loading) {
      if (
        itemsRef.current.length > 0 &&
        itemsRef.current.every((el) => el !== null)
      ) {
        gsap.fromTo(
          itemsRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, stagger: 0.1, duration: 0.5 }
        );
      }
    }
  }, [loading, documentList]);

  if (loading) {
    return (
      <div className="p-4">
        <Progress value={progress} />
      </div>
    );
  }

  return (
    <div>
      {documentList.map((doc, index) => (
        <div
          key={index}
          onClick={() =>
            router.push("/workspace/" + params?.workspaceId + "/" + doc?.id)
          }
          ref={(el) => (itemsRef.current[index] = el)}
          className={`group flex items-center justify-between mb-4 mt-2 ml-6 py-1 px-2 rounded-2xl mr-4 cursor-pointer ${
            doc?.id == params?.documentid
              ? "bg-yellow-200 dark:bg-yellow-600"
              : "hover:bg-black dark:hover:bg-gray-50"
          }`}
        >
          <div className="flex items-center">
            {!doc.emoji && (
              <Image
                src={"/document.svg"}
                width={20}
                height={20}
                alt="Document Icon"
                className="transition-colors duration-300 group-hover:text-white dark:group-hover:text-black"
                style={{
                  filter:
                    doc?.id == params?.documentid
                      ? "invert(0)"
                      : "invert(0) brightness(1)",
                }}
              />
            )}
            <h2
              className={`ml-2 text-sm ${
                doc?.id == params?.documentid
                  ? "text-black dark:text-white"
                  : "text-black group-hover:text-white dark:text-white dark:group-hover:text-black"
              }`}
            >
              {doc?.emoji}
              {doc.documentName}
            </h2>
          </div>
          <div className="mr-1">
            <DocumentOptions />
          </div>
        </div>
      ))}
    </div>
  );
}

export default DocumentList;
