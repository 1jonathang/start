"use client";

import { Dialog } from "@headlessui/react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import SignInButton from "./SignInButton";
import SignOutButton from "./SignOutButton";
import Button, { buttonVariants } from "./ui/Button";
import ThemeButton from "./ui/ThemeButton";

interface NavbarProps {
  session: any;
}

const Navbar: React.FC<NavbarProps> = ({ session }) => {

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="mt-5 fixed bg-transparent dark:bg-transparent z-50 top-0 w-full h-25 ">
      <div className="container max-w-5xl mx-auto flex justify-between items-center">
        <div className="flex justify-between items-center">
          <Link
            href={"/"}
            className={`ml-3 text-slate-900 dark:text-slate-400 font-semibold text-lg ${
              isOpen ? "hidden" : "block"
            }`}
          >
            COMPANY
          </Link>

          <div className={`md:block hidden ml-5 md:flex ${isOpen ? "hidden" : "items-start"}`}>
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

          <Dialog
            as="div"
            className="lg:hidden"
            open={isOpen}
            onClose={setIsOpen}
          >
            <div className="fixed inset-0 z-50" />
            <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto dark:bg-slate-800 bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
              <div className="flex items-center justify-between">
                <Link
                  href={"/"}
                  className="ml-3 text-slate-900 dark:text-slate-400 font-semibold text-lg"
                >
                  COMPANY
                </Link>
                <button
                  type="button"
                  className="-m-2.5 rounded-md p-2.5 text-gray-700"
                  onClick={() => setIsOpen(false)}
                >
                  <span className="sr-only">Close menu</span>
                  <X className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
              <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-gray-500/10">
                  <div className="space-y-2 py-6">
                    <Link
                      href="/transcribe"
                      className={`${buttonVariants({
                        variant: "ghost",
                        size: "sm",
                      })} md:hidden`}
                    >
                      Transcribe
                    </Link>
                    <Link
                      href="/"
                      className={`${buttonVariants({
                        variant: "ghost",
                        size: "sm",
                      })} md:hidden`}
                    >
                      Page
                    </Link>
                    <Link
                      href="/"
                      className={`${buttonVariants({
                        variant: "ghost",
                        size: "sm",
                      })} md:hidden`}
                    >
                      Page
                    </Link>
                  </div>
                  <div className="py-6">
                    {session ? <SignOutButton /> : <SignInButton />}
                  </div>
                </div>
              </div>
              
            </Dialog.Panel>
          </Dialog>
        </div>
        {/* dark mode button for small devices */}
        <div className={`md:hidden ${isOpen ? "hidden" : "block"}`}>
          <Button variant={"ghost"} onClick={toggleMenu} className="md:hidden">
            <span className="sr-only">Open main menu</span>
            <Menu className="h-6 w-6" aria-hidden="true" />
          </Button>
          <ThemeButton />
        </div>
        <div className="hidden md:flex gap-4">
          <Button variant={"ghost"} onClick={toggleMenu} className="md:hidden">
            <span className="sr-only">Open main menu</span>
            <Menu className="h-6 w-6" aria-hidden="true" />
          </Button>
          <ThemeButton />
          {session ? <SignOutButton /> : <SignInButton />}
        </div>
      </div>
    </div>
    
  );
};

export default Navbar;
