import Link from "next/link";
import { buttonVariants } from "./button";
import MaxWidthWrapper from "../MaxWidthWrapper";

import React from 'react';

type NavbarProps = {
  buttonText: string;
  buttonPath: string;
};

const Navbar:React.FC<NavbarProps> = ({buttonPath, buttonText}) => {
  return (
    <nav className="sticky h-14 inset-x-0 top-0 z-30 w-full dark:bg-zinc-950 bg-white backdrop-blur-lg transition-all">
      <MaxWidthWrapper>
        <div className="flex h-14 items-center justify-between px-5 ">
          <Link href="/" className="flex z-40 font-semibold">
            <span>Booking App</span>
          </Link>

          <div className="items-center space-x-4 flex">
            <Link
              href={buttonPath}
              className={buttonVariants({
                variant: "ghost",
                size: "sm",
                className: "bg-blue-600 text-white",
              })}
            >
              {buttonText}
            </Link>
          </div>
        </div>
      </MaxWidthWrapper>
    </nav>
  );
};

export default Navbar;
