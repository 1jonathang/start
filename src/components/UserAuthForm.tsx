"use client";

import { FC, useEffect, useState } from "react";
import Button, { buttonVariants } from "./ui/Button";
import { cn } from "@/lib/utils";
import { signIn, useSession } from "next-auth/react";
import { useToast } from "@/hooks/use-toast";
import Icons from "./Icons";

// so we can style
interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}

const UserAuthForm: FC<UserAuthFormProps> = ({ className, ...props }) => {
  const { toast } = useToast();
  const [isGoogleLoading, setIsGoogleLoading] = useState<boolean>(false);
  const [isGithubLoading, setIsGithubLoading] = useState<boolean>(false);

  

  const loginWithGoogle = async () => {
    setIsGoogleLoading(true);

    try {
      await signIn("google");
    } catch (error) {
      toast({
        title: "Error",
        description: "There was an error logging in with Google",
        variant: "destructive",
      });
    } finally {
      setIsGoogleLoading(false);
      console.log('successfully logged in')
    }
  };
  const loginWithGithub = async () => {
    setIsGithubLoading(true);

    try {
      await signIn("github");
    } catch (error) {
      toast({
        title: "Error",
        description: "There was an error logging in with Google",
        variant: "destructive",
      });
    } finally {
      setIsGithubLoading(false);
      console.log('successfully logged in')
    }
  };

  return (
    <div className={cn("flex flex-col items-center justify-center", className)} {...props}>
      <Button
        variant={"outline"}
        onClick={loginWithGoogle}
        isLoading={isGoogleLoading}
        size="sm"
        className="mt-5 w-2/4"
      >
        {isGoogleLoading ? null : <Icons.google className="h-4 w-4 mr-2" />}
        Google
      </Button>

      <Button
        variant={"outline"}
        onClick={loginWithGithub}
        isLoading={isGithubLoading}
        size="sm"
        className="mt-2 w-2/4"
      >
        {isGithubLoading ? null : <Icons.github className="h-5 w-5 mr-2" />}
        Github
      </Button>
      
    </div>
  );
};

export default UserAuthForm;