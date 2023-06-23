"use client";

import { useTheme } from "next-themes";
import Icons from "../Icons";
import Button from "./Button";

const ThemeButton = () => {
  const { theme, setTheme } = useTheme();

  return (
    <Button onClick={() => setTheme(theme === "dark" ? "light" : "dark")} variant={"ghost"}>
      {theme === "dark" ? <Icons.Sun /> : <Icons.Moon />}
    </Button>
  );
};

export default ThemeButton;
