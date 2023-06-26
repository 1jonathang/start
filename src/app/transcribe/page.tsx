"use client";

import Chat from "@/components/Chat";
import Icons from "@/components/Icons";
import InputField from "@/components/InputField";
import Navbar from "@/components/Navbar";
import Uploader from "@/components/Uploader";
import LargeHeading from "@/components/ui/LargeHeading";
import { AnimatePresence } from "framer-motion";
import type { NextPage } from "next";
import React, { useState } from "react";
import { FileUploader } from "react-drag-drop-files";

type Chat = {
  user: "me" | "gpt";
  message: string;
  originalIndex: number;
};

const Home: NextPage = () => {
  const [chats, setChats] = useState<Chat[]>([]);
  const [value, setValue] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [file, setFile] = useState<File | null>(null);

  const handleChange = (file: File) => {
    setFile(file);
  };

  const fileTypes = ["JPG", "PNG", "GIF"];

  const handleSubmit = async (
    e: React.MouseEvent<HTMLElement> | React.KeyboardEvent<HTMLInputElement>
  ) => {
    e.preventDefault();

    try {
      setIsSubmitting(true);
      setValue("");
      setChats((prev) => [
        { user: "me", message: value, originalIndex: prev.length },
        ...prev,
      ]);

      const response = await fetch("/api/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: [{ user: "me", message: value }, ...chats]
            .reverse()
            .map((d) => d.message)
            .join(""),
        }),
      });

      const data = await response.json();
      if (response.status !== 200) {
        throw (
          data.error ||
          new Error(`Request failed with status ${response.status}`)
        );
      }
      setChats((prev) => [
        { user: "gpt", message: data.result, originalIndex: prev.length },
        ...prev,
      ]);
    } catch (error) {
      console.log(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="relative overflow-y-auto flex items-center justify-center overflow-x-hidden">
      <div className="max-w-full mx-auto w-full h-full">
        <div className="flex flex-col items-center h-full gap-20 md:gap-8">
          {/* @ts-expect-error Server Component */}
          <Navbar />
          <div className="mt-32 w-full flex justify-center items-center flex-col">
            <div className="text-center">
              <LargeHeading
                size="default"
                className="three-d text-[#585858] dark:text-slate-200"
              >
                Scan your pdf&apos;s, and get <br />
                back perfect notes.
              </LargeHeading>
            </div>
            <div className="border-b-2 border-slate-400 dark:border-slate-600 w-72 mt-4"></div>
            <div className="min-w-fit mt-12 flex gap-52">
              <div className="text-left w-full flex-col">
                <LargeHeading
                  size="sm"
                  className="text-[#585858] text-left dark:text-slate-200"
                >
                  Submit your pdf here.
                </LargeHeading>
                <div className="mt-10">
                  {/* <FileUploader
                    handleChange={handleChange}
                    name="file"
                    types={fileTypes}
                  /> */}
                  <Uploader />
                </div>
              </div>

              <div className="max-w-2xl flex flex-col justify-between bg-button-color max-h-screen rounded-xl w-full mx-auto pb-4 pt-8 px-4">
                <div className="flex flex-col-reverse justify-start items-start max-w-800px h-full w-full mx-auto gap-8 overflow-y-auto px-4 py-8">
                  {isSubmitting && (
                    <div className="self-start justify-center px-8 py-2">
                      <Icons.dotLoader />
                    </div>
                  )}
                  <AnimatePresence>
                    {chats.map((chat, index) => {
                      return (
                        <Chat
                          key={chat.originalIndex}
                          message={chat.message}
                          user={chat.user}
                        />
                      );
                    })}
                  </AnimatePresence>
                </div>

                <InputField
                  inputProps={{
                    onKeyDown: (e) => {
                      if (e.key === "Enter" && !e.shiftKey) {
                        handleSubmit;
                      }
                    },
                    onChange: (e) => setValue(e.target.value),
                    autoFocus: true,
                    value,
                  }}
                  onSubmitKey={handleSubmit!}
                  onSubmitClick={handleSubmit!}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
