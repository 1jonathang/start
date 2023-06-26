import { Input, InputProps } from "@chakra-ui/react";
import React, { useRef } from "react";
import Icons from "./Icons";

type Props = {
  onSubmitClick: (e: React.MouseEvent<HTMLElement>) => Promise<void>;
  onSubmitKey: (e: React.KeyboardEvent<HTMLInputElement>) => Promise<void>;
  inputProps: InputProps;
};

const InputField = (props: Props) => {
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);
  const { onSubmitClick, onSubmitKey, inputProps } = props;

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (inputProps.onKeyDown) {
      inputProps.onKeyDown(e);
    }
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      onSubmitKey(e);
    }
  };

  return (
    <div className="items-center justify-center max-w-full as-form mx-auto border border-transparent bg-none pr-2">
      <Input
        p="1rem"
        h="60px"
        borderColor="none"
        backgroundColor={'rgb(51, 65, 85)'}
        borderRadius={'10px'}
        _hover={{ outline: "unset" }}
        _focus={{ outline: "unset" }}
        _focusVisible={{ borderColor: "transparent" }}
        resize="none"
        {...inputProps}
        onKeyDown={handleKeyDown}
      />

      <button
        className="p-2 rounded-md transition-all ease-in-out duration-200 hover:bg-main-bg"
        onClick={onSubmitClick}
      >
        <Icons.planeIcon className="fill-current text-slate-800 dark:text-white" />
      </button>
    </div>
  );
};

export default InputField;
