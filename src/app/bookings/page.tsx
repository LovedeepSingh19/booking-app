"use client"
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Navbar from "@/components/UI/Navbar";
import dummyData from '../../../public/dummyData.json';
import { useRouter } from 'next/navigation';


import React from "react";
import Image from "next/image";

type pageProps = {};

const HotelItem: React.FC<pageProps> = () => {
  const router = useRouter();

  return (
    <>
      <Navbar buttonText={"Weather"} buttonPath={"/weather"} />
      <MaxWidthWrapper className="mb-12 mt-28 sm:mt-14 flex flex-col items-center justify-center text-center">
      <div className="flex flex-wrap">
      {dummyData.map((hotel, index) => (
          <div key={index} onClick={() => router.push(`bookings/${index}`)} className="w-1/4 m-4 h-[220px] rounded-lg flex flex-col align-middle justify-center items-center bg-zinc-800">
          {/* Render your item component here */}
          <Image src={hotel.photo1} alt={"hotel image"} width={200} height={100} />
          <p className="text-xs font-light">Hotel name--</p>
          <div className="px-10 py-1 overflow-hidden whitespace-nowrap truncate" style={{ width: '250px' }}>{hotel.hotel_name}</div>
          <div className="px-10 py-1 flex flex-row align-middle justify-center items-center overflow-hidden whitespace-nowrap truncate" style={{ width: '250px' }}><p className="text-xs">cost --  </p> {hotel.rates_from} RS</div>
        </div>
        ))}
        </div>
      </MaxWidthWrapper>
    </>
  );
};
export default HotelItem;
