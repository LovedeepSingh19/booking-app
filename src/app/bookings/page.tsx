"use client"
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Navbar from "@/components/UI/Navbar";
import dummyData from '../../../public/dummyData.json';
import { useRouter } from 'next/navigation';


import React from "react";

type pageProps = {};

const HotelItem: React.FC<pageProps> = () => {
  const router = useRouter();

  return (
    <>
      <Navbar buttonText={"Weather"} buttonPath={"/weather"} />
      <MaxWidthWrapper className="mb-12 mt-28 sm:mt-14 flex flex-col items-center justify-center text-center">
      {dummyData.map((hotel, index) => (
          <div key={index} className="bg-slate-500 m-2" onClick={() => router.push(`/bookings/${hotel.hotel_id}`)}>
            <h2>{hotel.hotel_name}</h2>
            <p>{hotel.overview}</p>
            {/* Render other details as needed */}
          </div>
        ))}
      </MaxWidthWrapper>
    </>
  );
};
export default HotelItem;
