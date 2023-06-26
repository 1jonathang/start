import Navbar from "@/components/Navbar";
import Svg1 from "@/components/Svg1";
import Svg2 from "@/components/Svg2";
import { buttonVariants } from "@/components/ui/Button";
import LargeHeading from "@/components/ui/LargeHeading";
import Paragraph from "@/components/ui/Paragraph";
import { authOptions, getAuthSession } from "@/lib/auth";
import { getServerSession } from "next-auth";
import Link from "next/link";
import { InferGetServerSidePropsType } from "next";
import Footer from "@/components/Footer";
import { ChevronRight } from "lucide-react";

export const metadata = {
  title: "Placeholder",
  description: "Automate your learning with AI.",
};

export default async function Home() {
  const session = await getAuthSession();

  return (
    <div className="relative overflow-y-auto flex items-center justify-center overflow-x-hidden scrollbar scrollbar-thumb-gray-900 scrollbar-track-gray-100">
      <div className="shadow-container shadow-[0_15px_50px_-15px_rgba(0,0,0,0.3)] max-w-[85rem] mx-auto w-full h-full">
        <div className="flex flex-col items-center h-full gap-20 md:gap-8">
          
          <Navbar session={session}/>
          <div className="circle-1"></div>
          <div className="circle-2"></div>
          <div className="circle-3"></div>
          <div className="scroll-fade-overlay"></div>
          <div className="gap-8 mt-32 w-full flex flex-col items-center text-center md:text-left">
            <LargeHeading
              size="lg"
              className="three-d text-[#585858] dark:text-slate-200"
            >
              Automate your learning <br />
              with AI.
            </LargeHeading>
            <div className="flex justify-center w-full">
              <Link
                href="/"
                className={buttonVariants({
                  variant: "outline",
                  size: "default",
                })}
              >
                Start Now
              </Link>
            </div>
            <div className="md:block hidden">
              <Svg1 />
            </div>
            <div className="md:hidden block">
              <Svg2 />
            </div>
          </div>

          <div className="w-full flex justify-center">
            <div className="text-center">
              <Paragraph>
                Embrace the power of AI and transform the way you study. <br />
                Our smart algorithms can personalize your learning experience,{" "}
                <br />
                making it more engaging and efficient than traditional methods.{" "}
                <br />
                With AI, your education is tailored to you.
              </Paragraph>
            </div>
          </div>

          <br />
          <br />
          <br />

          <div className="w-full flex-col justify-center">
            <div className="text-center mb-10">
              <LargeHeading
                size="default"
                className="three-d text-[#585858] dark:text-slate-200"
              >
                Scan your textbooks for <br />
                automated notes.
              </LargeHeading>
            </div>
            <div className="flex flex-col md:flex-row justify-center items-center gap-10">
              <div className="flex flex-col gap-6 items-center justify-center">
                <div className="circle-4"></div>
                <Link
                  className="flex items-center text-[#585858] dark:text-[#ebcaff]"
                  href={"/"}
                >
                  Get Started
                  <ChevronRight />
                </Link>
              </div>

              <div className="flex flex-col gap-6 items-center justify-center">
                <div className="circle-4"></div>
                <Link
                  className="flex items-center text-[#585858] dark:text-[#ebcaff]"
                  href={"/"}
                >
                  Get Started
                  <ChevronRight />
                </Link>
              </div>

              <div className="flex flex-col gap-6 items-center justify-center">
                <div className="circle-4"></div>
                <Link
                  className="flex items-center text-[#585858] dark:text-[#ebcaff]"
                  href={"/"}
                >
                  Get Started
                  <ChevronRight />
                </Link>
              </div>

              <div className="flex flex-col gap-6 items-center justify-center">
                <div className="circle-4"></div>
                <Link
                  className="flex items-center text-[#585858] dark:text-[#ebcaff]"
                  href={"/"}
                >
                  Get Started
                  <ChevronRight />
                </Link>
              </div>
            </div>
          </div>

          <Footer />
        </div>
      </div>
    </div>
  );
}
