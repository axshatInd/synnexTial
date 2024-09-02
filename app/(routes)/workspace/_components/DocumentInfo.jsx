"use client";
import CoverPicker from "@/app/_components/CoverPicker";
import EmojiPickerComponent from "@/app/_components/EmojiPickerComponent";
import { db } from "@/config/firebaseConfig";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { SmilePlus } from "lucide-react";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { toast } from "sonner";

function DocumentInfo({ params }) {
  const [coverImage, setCoverImage] = useState("/cover.png");
  const [emoji, setEmoji] = useState(); // State to store selected emoji
  const [documentInfo, setDocumentInfo] = useState();

  useEffect(() => {
    if (params?.documentid) {
      GetDocumentInfo();
    }
  }, [params]);

  const GetDocumentInfo = async () => {
    try {
      const docRef = doc(db, "workspaceDocuments", params?.documentid);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setDocumentInfo(docSnap.data());
        setEmoji(docSnap.data()?.emoji);
        docSnap.data()?.coverImage && setCoverImage(docSnap.data()?.coverImage);
      }
    } catch (error) {
      console.error("Error getting document:", error);
    }
  };

  const updateDocumentInfo = async (key, value) => {
    if (!params?.documentid) {
      console.error("Document ID is not available");
      return;
    }

    try {
      const docRef = doc(db, "workspaceDocuments", params.documentid);
      await updateDoc(docRef, {
        [key]: value,
      });
      console.log("Document updated successfully"); // Debugging statement
      toast("Document Updated");
    } catch (error) {
      console.error("Error updating document:", error);
    }
  };

  return (
    <div className="relative">
      {/* Cover Image */}
      <CoverPicker
        setNewCover={(cover) => {
          console.log("New cover selected:", cover); // Debugging statement
          setCoverImage(cover);
          updateDocumentInfo("coverImage", cover);
        }}
      >
        <div className="relative shadow-2xl rounded-xl group">
          <div className="relative">
            <Image
              src={coverImage}
              width={400}
              height={440}
              alt="Cover Image"
              className="w-full h-[200px] object-cover rounded-t-xl"
            />
            <h2 className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white opacity-0 group-hover:opacity-100 rounded-t-xl transition-opacity duration-300">
              Change Cover
            </h2>
          </div>
        </div>
      </CoverPicker>

      {/* Emoji Picker */}
      <div className="mt-4">
        <EmojiPickerComponent
          setEmojiIcon={(emoji) => {
            setEmoji(emoji);
            updateDocumentInfo("emoji", emoji);
          }}
        >
          <div className="p-4 rounded-md cursor-pointer">
            {emoji ? (
              <span className="text-3xl">{emoji}</span>
            ) : (
              <SmilePlus className="h-10 w-10 text-gray-500" />
            )}
          </div>
        </EmojiPickerComponent>
      </div>

      {/* File Name */}
      <div className="flex items-center justify-center">
        <input
          type="text"
          placeholder="Untitled SynDoc"
          defaultValue={documentInfo?.documentName}
          className="text-black dark:text-white font-semibold text-2xl outline-none p-2 rounded-lg min-w-[100px] max-w-full bg-transparent placeholder-gray-500 dark:placeholder-gray-400"
          onBlur={(event) =>
            updateDocumentInfo("documentName", event.target.value)
          }
        />
      </div>
    </div>
  );
}

export default DocumentInfo;
