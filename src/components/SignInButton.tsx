'use client'

import { FC, useState } from "react";
import { signIn, signOut } from "next-auth/react";
import Button from "./ui/Button";
import { toast } from "react-hot-toast";

interface SignInButtonProps {}

const SignInButton: FC<SignInButtonProps> = ({}) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  async function signUserIn() {
    setIsLoading(true);

    try {
      await signIn('google');
    } catch (error) {
      toast.error('Something went wrong logging in :(');
    } finally {
      setIsLoading(false);
      console.log('logged in succesfully.');
    }
  };

  return (
    <Button isLoading={isLoading} onClick={signUserIn} variant={"link"}>
        Sign In
    </Button>
  );
};

export default SignInButton;
