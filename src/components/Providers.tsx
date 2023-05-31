"use client";

import { ThemeProvider } from "next-themes";
import { FC, ReactNode } from "react";
import { Toaster } from "react-hot-toast";


interface ProvidersProps {
  children: ReactNode;
}

const Providers: FC<ProvidersProps> = ({ children }) => {
  return (
    <>
      <ThemeProvider attribute="class" enableSystem>
        <Toaster position="top-center" reverseOrder={false} />
        {children}
      </ThemeProvider>
    </>
  );
};

export default Providers;
