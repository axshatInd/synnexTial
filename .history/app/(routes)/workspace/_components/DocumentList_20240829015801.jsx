"use client";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";

function DocumentList({ documentList }) {
  const itemsRef = useRef([]);

  useEffect(() => {
    gsap.fromTo(
      itemsRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, stagger: 0.1, duration: 0.5 }
    );
  }, [documentList]);

  if (!documentList || documentList.length === 0) {
    return <div className="justify-between items-center">.....</div>;
  }

  return (
    <div>
      {documentList.map((doc, index) => (
        <div
          key={index}
          ref={(el) => (itemsRef.current[index] = el)}
          className="flex items-center mb-4"
        >
          <Image
            src={"/document.svg"}
            width={40}
            height={40}
            alt="Document Icon"
          />
          <h2 className="ml-2">{doc.documentName}</h2>
        </div>
      ))}
    </div>
  );
}

export default DocumentList;
