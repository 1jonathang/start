

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

const Navbar = async ({}) => {
  // acheiving the current session
  const session = await getServerSession(authOptions);

  return (
    <div className="fixed backdrop-blur-sm dark:backdrop-blur-sm bg-white/75 dark:bg-slate-700/75 z-50 top-0 left-0 right-0 h-20 border-b border-slate-300 dark:border-slate-400 shadow-sm flex items-center justify-between rounded-b rounded-sm">
      <div className="container max-w-7xl mx-auto w-full flex justify-between items-center">
        <div className="flex justify-between items-center gap-3">
          <div className="overflow-hidden border border-slate-900 border-sm">
            <Image
              width={40}
              height={40}
              src={flag}
              alt={`Russian flag`}
              className="rounded-sm"
            />
          </div>
          <Link href={"/"} className="text-slate-900 dark:text-slate-400 font-semibold">
            RUReady
          </Link>
          {/* {session ? (
            <p className="ml-5 text-slate-900 dark:text-slate-400 font-semibold">Hi! {session.user.name}</p>
          ) : null} */}
        </div>

        {/* dark mode button for small devices */}
        <div className="md:hidden">
          {/* <ThemeToggle /> */}
          <ThemeButton />
        </div>

        <div className="hidden md:flex gap-4">
          <Searchbar />
          <ThemeButton />

          <Link href="/" className={buttonVariants({ variant: "ghost" })}>
            Translate
          </Link>

          <Link href="/" className={buttonVariants({ variant: "ghost" })}>
            Saved
          </Link>
          {session ? <SignOutButton /> : <SignInButton />}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
