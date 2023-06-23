import Navbar from "@/components/Navbar";
import Svg1 from "@/components/Svg1";
import { buttonVariants } from "@/components/ui/Button";
import LargeHeading from "@/components/ui/LargeHeading";
import Paragraph from "@/components/ui/Paragraph";
import Link from "next/link";

export const metadata = {
  title: "Placeholder",
  description: "Automate your learning with AI.",
};

export default function Home() {
  return (
    <div className="relative overflow-y-auto flex items-center justify-center overflow-x-hidden scrollbar scrollbar-thumb-gray-900 scrollbar-track-gray-100">
      <div className="shadow-container shadow-[0_15px_50px_-15px_rgba(0,0,0,0.3)] max-w-[85rem] mx-auto w-full h-full">
        <div className="flex flex-col items-center h-full gap-20 md:gap-8">
          {/* @ts-expect-error Server Component */}
          <Navbar />
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
            <Svg1 />
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

          <div className="w-full flex justify-center">
            <div className="text-center">
              <LargeHeading
                size="default"
                className="three-d text-[#585858] dark:text-slate-200"
              >
                Scan your textbooks for <br />
                automated notes.
              </LargeHeading>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
