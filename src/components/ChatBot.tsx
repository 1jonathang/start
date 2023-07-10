"use client";

import { FC, useState } from "react";
import Icons from "./Icons";
import { AnimatePresence } from "framer-motion";
import Chat from "./Chat";
import InputField from "./InputField";

interface ChatBotProps {}

type Chat = {
  user: "me" | "gpt";
  message: string;
  originalIndex: number;
};

const ChatBot: FC<ChatBotProps> = ({}) => {
  const [chats, setChats] = useState<Chat[]>([
    {
      user: "gpt",
      message: "Hello, how can I help you?",
      originalIndex: -1,
    }
  ]);
  
  const [value, setValue] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (
    e: React.MouseEvent<HTMLElement> | React.KeyboardEvent<HTMLInputElement>
  ) => {
    e.preventDefault();

    // no messaging blank
    if (value.trim() === "") {
      return;
    }

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
  );
};

export default ChatBot;
