'use client'

import { FC, useState } from "react";
import { signIn, signOut } from "next-auth/react";
import Button, { buttonVariants } from "./ui/Button";
import { toast } from "react-hot-toast";
import Link from "next/link";

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
    <Link
      href="/sign-in"
      className={buttonVariants({ variant: "ghost", size: "sm" })}
    >
      Sign In
    </Link>
  );
};

export default SignInButton;
