'use client'

import { FC, useState } from "react";
import { signIn, signOut } from "next-auth/react";
import Button from "./ui/Button";
import { toast } from "react-hot-toast";


interface SignOutButtonProps {}

const SignOutButton: FC<SignOutButtonProps> = ({}) => {
  const [isSigningOut, setIsSigningOut] = useState<boolean>(false);

  async function signUserOut() {
    setIsSigningOut(true);

    try {
      await signOut();
    } catch (error) {
      toast.error("There was a problem signing out.");
    } finally {
      setIsSigningOut(false);
    }
  };

  return (
    <Button isLoading={isSigningOut} onClick={signUserOut} variant={"ghost"} size={"sm"}>
        Sign Out
    </Button>
  );
};

export default SignOutButton;
