import Navbar from "@/components/Navbar";
import Svg1 from "@/components/Svg1";
import { buttonVariants } from "@/components/ui/Button";
import LargeHeading from "@/components/ui/LargeHeading";
import Paragraph from "@/components/ui/Paragraph";
import Link from "next/link";

export const metadata = {
  title: "Placeholder| Scan your PDF's",
  description: "Upload any pdf to be read and given perfect notes.",
};

export default function Home() {
  return (
    <div className="relative overflow-y-auto flex items-center justify-center overflow-x-hidden">
      <div className="max-w-full mx-auto w-full h-full">
        <div className="flex flex-col items-center h-full gap-20 md:gap-8">
          {/* @ts-expect-error Server Component */}
          <Navbar />
          <div className="mt-32 w-full flex justify-center items-center flex-col">
            <div className="text-center">
              <LargeHeading
                size="default"
                className="three-d text-[#585858] dark:text-slate-200"
              >
                Scan your pdf&apos;s, and get <br />
                back perfect notes.
              </LargeHeading>
            </div>
            <div className="border-b-2 border-slate-400 dark:border-slate-600 w-72 mt-4"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
