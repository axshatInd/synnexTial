"use client";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { useRouter } from "next/navigation";

function DocumentList({ documentList, params }) {
  const router = useRouter();
  const itemsRef = useRef([]);

  useEffect(() => {
    gsap.fromTo(
      itemsRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, stagger: 0.1, duration: 0.5 }
    );
  }, [documentList]);

  if (!documentList || documentList.length === 0) {
    return <div>.....</div>;
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
          className={`group flex items-center mb-4 mt-2 ml-6 py-1 px-2 rounded-2xl mr-4 cursor-pointer ${
            doc?.id == params?.documentid
              ? "bg-yellow-200 dark:bg-yellow-600"
              : "hover:bg-black dark:hover:bg-gray-50"
          }`}
        >
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
      ))}
    </div>
  );
}

export default DocumentList;
