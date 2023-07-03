import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";

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
        className={`flex w-full ${
          user === "gpt" ? "flex-row" : "flex-row-reverse"
        }`}
      >
        <div
          className={`-mt-4 text-slate-500 dark:text-slate-200  bg-main-bg p-2 w-auto ${
            user === "gpt"
              ? "rounded-bl-none rounded-lg border border-blue-300 dark:border-blue-500"
              : "rounded-br-none rounded-lg border border-slate-700 dark:border-slate-200"
          } text-lg flex flex-col`}
        >
          <ReactMarkdown rehypePlugins={[]}>
            {user === "gpt" ? chatMessage || "" : message || ""}
          </ReactMarkdown>
        </div>
      </div>
    </motion.div>
  );
};

export default Chat;
