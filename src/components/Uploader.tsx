"use client";

import { UploadButton } from "@/utils/uploadthing";
import "@uploadthing/react/styles.css";
import { createContext, useContext, useState } from "react";
import { FC, ReactNode } from "react";

interface UploaderProps {
  children: ReactNode;
  className?: string;
}

export const ImageUrlContext = createContext<{
  imageUrl: string | null;
  setImageUrl: React.Dispatch<React.SetStateAction<string | null>>;
} | null>(null);

export const ImageUrlProvider: FC<UploaderProps> = ({ children }) => {
  const [imageUrl, setImageUrl] = useState<string | null>(null);

  return (
    <ImageUrlContext.Provider value={{ imageUrl, setImageUrl }}>
      {children}
    </ImageUrlContext.Provider>
  );
};

function Home({ className }: UploaderProps) {
  const { imageUrl, setImageUrl } = useContext(ImageUrlContext)!;
  return (
    <main>
      <UploadButton
        endpoint="imageUploader"
        onClientUploadComplete={(res) => {
          console.log("Files: ", res);
          if (res && res.length > 0) {
            setImageUrl(res[0].fileUrl);
          }
          alert("Upload Completed");
        }}
        onUploadError={(error: Error) => {
          alert(`ERROR! ${error.message}`);
        }}
      />
      {imageUrl && (
        <div
          className={`mt-8 h-screen w-[600px] overflow-auto flex-grow ${className}`}
        >
          <embed
            src={imageUrl + "#toolbar=0&zoom=72"}
            type="application/pdf"
            className="w-full h-full object-scale-down border-none"
          />
        </div>
      )}
    </main>
  );
}

export default Home;
