"use client";

import { UploadButton } from "@/utils/uploadthing";
// You need to import our styles for the button to look right. Best to import in the root /layout.tsx but this is fine
import "@uploadthing/react/styles.css";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  return (
    <main>
      <UploadButton
        endpoint="imageUploader"
        onClientUploadComplete={(res) => {
          // Do something with the response
          console.log("Files: ", res);
          if (res && res.length > 0) {
            setImageUrl(res[0].fileUrl); // Use fileUrl from the first element in res
          }
          alert("Upload Completed");
        }}
        onUploadError={(error: Error) => {
          // Do something with the error.
          alert(`ERROR! ${error.message}`);
        }}
      />
      {imageUrl && (
        <div className="mt-8 relative w-full">
          <Image
            src={imageUrl}
            alt="Uploaded image"
            className="border-none"
            layout="responsive" // or "intrinsic"
            width={500} // adjust to match your image's aspect ratio
            height={300} // adjust to match your image's aspect ratio
          />
        </div>
      )}
    </main>
  );
}
