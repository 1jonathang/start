import { FC, useRef, useState, useEffect } from "react";
import TextareaAutosize from "react-textarea-autosize";
import Button from "./ui/Button";
import axios from "axios";
import { toast } from "react-hot-toast";

interface ChatInputProps {}

interface ChatEntry {
  type: string;
  message: string;
}

const ChatInput: FC<ChatInputProps> = ({}) => {
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [input, setInput] = useState<string>("");
  const [chatLog, setChatLog] = useState<ChatEntry[]>([]);

  const handleSubmit = (event: FormDataEvent) => {
    event.preventDefault();

    setChatLog((prevChatLog) => [
      ...prevChatLog,
      { type: "user", message: input },
    ]);

    setInput("");
  };

  const sendMessage = async () => {
    // so you cant send a blank message
    if (!input) {
      return;
    }
    setIsLoading(true);

    try {
      // mock api response
      // await new Promise((resolve) => setTimeout(resolve, 1000));
      // call to api endpoint, handles each message that is being sent to the user
      // await axios.post("/api/message/send", { text: input, chatId });
      // usestate is chatinput so we can easily clear the chatinput by doing this
      setInput("");
      // focus is right back on the textbox when you click enter
      textareaRef.current?.focus();
    } catch (error) {
      toast.error(`Something went wrong. (${error})`);
    } finally {
      // usestates allow to easily change behaviour of component
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full justify-between p-4 m-2 md:w-[500px] border-t border-black dark:border-slate-400">
      <div className="shadow-md relative flex items-center overflow-hidden rounded-lg ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-red-200">
        {chatLog.map((message, index) => (
          <div key={index}>{message.message}</div>
        ))}
        <TextareaAutosize
          ref={textareaRef}
          onKeyDown={(e) => {
            if (e.key === "Enter" && !e.shiftKey) {
              e.preventDefault();
              sendMessage();
            }
          }}
          rows={1}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={"Translate..."}
          className="flex-grow block border-0 bg-transparent text-black dark:text-slate-400  placeholder:text-gray-400 sm:p-y-1.5 sm:text-sm sm:leading-6"
          style={{ outline: "none", boxShadow: "none" }}
        />

        <div className="flex-shrink-0 py-1.5 pr-2">
          <Button
            isLoading={isLoading}
            onClick={sendMessage}
            variant={"link"}
            className="text-xs w-15 h-7 py-0.25 my-auto"
          >
            Send
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ChatInput;
