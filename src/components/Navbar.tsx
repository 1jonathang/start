

import flag from "@/app/flag.png";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import Image from "next/image";
import Link from "next/link";
import SignInButton from "./SignInButton";
import SignOutButton from "./SignOutButton";
import { buttonVariants } from "./ui/Button";
import ThemeButton from "./ui/ThemeButton";
import Searchbar from "./Searchbar";

const Navbar = async () => {
  // acheiving the current session
  const session = await getServerSession(authOptions);

  return (
    <div className="mt-5 fixed bg-transparent dark:bg-transparent z-50 top-0 w-full h-25 ">
    <div className="container max-w-5xl mx-auto flex justify-between items-center">
      <div className="flex justify-between items-center gap-5">
        <Link
          href={"/"}
          className="ml-3 text-slate-900 dark:text-slate-400 font-semibold text-lg"
        >
          COMPANY
        </Link>
        <Link
          href="/transcribe"
          className={buttonVariants({ variant: "ghost", size: "sm" })}
        >
          Transcribe
        </Link>
        <Link
          href="/"
          className={buttonVariants({ variant: "ghost", size: "sm" })}
        >
          Page
        </Link>
        <Link
          href="/"
          className={buttonVariants({ variant: "ghost", size: "sm" })}
        >
          Page
        </Link>

      </div>

      {/* dark mode button for small devices */}
      <div className="md:hidden">
        <ThemeButton />
      </div>

      <div className="hidden md:flex gap-4">
        <ThemeButton />
        {session ? <SignOutButton /> : <SignInButton />}
      </div>
    </div>
  </div>
  );
};

export default Navbar;
