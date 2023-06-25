import { useEffect, useRef, useState } from "react";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { motion } from "framer-motion";
import { getServerSession } from "next-auth";
import { authOptions, getAuthSession } from "@/lib/auth";



const Chat = ({ message, user }: { message: string; user: "me" | "gpt" }) => {
  const chatStringIndex = useRef(0);
  const [chatMessage, setChatMessage] = useState("");

  function appendChar() {
    setChatMessage((prev) => prev + message[chatStringIndex.current]);
    chatStringIndex.current++;
  }

  useEffect(() => {
    if (chatStringIndex.current < message.length - 1) {
      const appendCharInterval = setInterval(appendChar, 50);
      return () => clearInterval(appendCharInterval);
    }
  }, [chatMessage, chatStringIndex.current]);

  return (
    <motion.div
      className={`w-auto max-w-90% ${
        user === "gpt" ? "self-start" : "self-end"
      }`}
      initial={{
        opacity: 0,
        translateY: "100%",
      }}
      animate={{ opacity: 1, translateY: 0, transition: { duration: 0.3 } }}
      exit={{ opacity: 0, translateY: 0 }}
    >
      <div
        className={`flex gap-1 w-full ${
          user === "gpt" ? "flex-row" : "flex-row-reverse"
        }`}
      >
        <div
          className={`inline-block w-6 h-6 bg-border-color rounded-full align-middle`}
          title={user === "me" ? "Me" : "GPT"}
        ></div>
        <div
          className={`border border-slate-200 bg-main-bg p-2 w-auto ${
            user === "gpt"
              ? "rounded-bl-none rounded-lg"
              : "rounded-br-none rounded-lg"
          } text-lg flex flex-col`}
        >
          {user === "gpt" && (
            <div className="self-end opacity-40 text-xs font-semibold">
              GPT
            </div>
          )}
          {user === "me" && (
            <div className="self-start opacity-40 text-xs font-semibold">
              Me
            </div>
          )}
          <ReactMarkdown rehypePlugins={[]}>
            {user === "gpt" ? chatMessage || "" : message || ""}
          </ReactMarkdown>
        </div>
      </div>
    </motion.div>
  );
};

export default Chat;
