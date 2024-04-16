// "use client";
import Calander from "@/components/Calendar";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Link from "next/link";
import React from "react";

type HomePageProps = {};

const HomePage: React.FC<HomePageProps> = () => {
  return (
    <>
      <MaxWidthWrapper className="mb-12 mt-28 sm:mt-14 flex flex-col items-center justify-center text-center">
        <div className="mx-auto mb-4 flex max-w-fit items-center justify-center space-x-2 overflow-hidden rounded-full border border-gray-200 bg-white px-7 py-2 shadow-md backdrop-blur transition-all hover:border-gray-300 hover:bg-white/50 ">
          <p className="text-sm font-semibold text-gray-700">
            Quill is now public
          </p>
        </div>
        <h1 className="max-w-4xl text-5xl font-bold md:text-6xl lg:text-7x1">
          Chat with your <span className="text-blue-600"> documents</span> in
          seconds.
        </h1>
        <p className="mt-5 max-w-prose text-zinc-700 sm:text-1g">
          Quill allows you to have conversations with any PDF document. Simply
          upload your file and start asking questions right away.
        </p>
        {/* <div className="pt-10">

        <Calander />
        </div> */}
      </MaxWidthWrapper>
    </>
  );
};
export default HomePage;
