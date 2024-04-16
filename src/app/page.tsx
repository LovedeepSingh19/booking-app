"use client";

import Calender from "@/components/Calendar";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { buttonVariants } from "@/components/UI/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export type CalendarDateRange = [Date | null, Date | null];

export default function Home() {
  const [calendarValues, onCalendarChange] = useState<CalendarDateRange>([
    null,
    null,
  ]);
  return (
    <>
      <MaxWidthWrapper className="mb-12 mt-28 sm:mt-14 flex flex-col items-center justify-center text-center">
        <div className="mx-auto mb-4 flex max-w-fit items-center justify-center space-x-2 overflow-hidden rounded-full border border-gray-200 bg-white px-7 py-2 shadow-md backdrop-blur transition-all hover:border-gray-300 hover:bg-white/50 ">
          <p className="text-sm font-semibold text-gray-700">Booking App</p>
        </div>
        <h1 className="max-w-4xl text-5xl font-bold md:text-6xl lg:text-7x1">
          Book<span className="text-blue-600"> Hotels </span> for your next trip
          with cheapest prices.
        </h1>
        <p className="mt-5 max-w-prose text-zinc-700 sm:text-1g">
        Book<span className="text-blue-600"> Hotels </span> for your next trip
          with cheapest prices.
        </p>
        <div className="pt-10">
          <Calender
            onCalendarChange={onCalendarChange}
            calendarValues={calendarValues}
          />
        </div>
        <Link
          className={buttonVariants({
            size: "lg",
            className: "mt-5 bg-blue-600",
          })}
          href="/bookings"
          
        >
          Get started <ArrowRight className="ml-2 h-5 w-5" />
        </Link>
      </MaxWidthWrapper>
    </>
  );
}
