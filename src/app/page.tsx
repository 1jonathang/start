import HomeSvg1 from "@/components/HomeSvg";
import HomeSvg2 from "@/components/HomeSvg2";
import LargeHeading from "@/components/ui/LargeHeading";
import Paragraph from "@/components/ui/Paragraph";
import Link from "next/link";

export default function Home() {
  return (
    <div className="relative h-screen flex items-center justify-center overflow-x-hidden scrollbar-thumb-blue scrollbar-thumb-rounded scrollbar-track-blue-lighter scrollbar-w-2 scrolling-touch">
      <div className="container max-w-7xl mx-auto w-full h-full">
        <div className="flex flex-col items-center h-full gap-20 md:gap-8">
          <div className="mt-32 w-full flex justify-center md:justify-start text-center md:text-left items-center">
            <LargeHeading
              size="lg"
              className="three-d text-black dark:text-red-200"
            >
              Learning Russian is at <br />
              the tip of your fingers.
            </LargeHeading>
          </div>

          <div className="w-full flex justify-center md:justify-end">
            <div className="w-min text-center md:text-right">
              <HomeSvg1 />
              <Paragraph className="md:text-right">
                Utilize our real time neuro-networking translation service{" "}
                <Link
                  href="/"
                  className="underline underline-offset-3 text-black dark:text-red-200"
                >
                  here.
                </Link>
              </Paragraph>
            </div>
          </div>

          <div className="w-full flex flex-col items-center text-center md:text-left md:items-start">
            <div className="flex flex-col gap-10">
              <div>
                <LargeHeading
                  size="default"
                  className="three-d text-black dark:text-red-200"
                >
                  Save phrases and words for <br />
                  the most convenience.
                </LargeHeading>
              </div>
              <div>
                <HomeSvg2 />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
