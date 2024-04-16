"use client";
import React from "react";
// import { useRouter } from 'next/navigation';

import Navbar from "@/components/UI/Navbar";
import { useParams } from "next/navigation";
import dummyData from "../../../../public/dummyData.json";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Button } from "@/components/UI/button";
import PaymentForm from "@/components/UI/PaymentForm";

// type pageProps = {

// };

const NewPage = () => {
  const params = useParams();
  const { hotelindex } = params;
  console.log(hotelindex);
  const pageData = dummyData[parseInt(hotelindex as string)];

  return (
    <>
      <Navbar buttonText={"Weather"} buttonPath={"/weather"} />
      <div>
        <MaxWidthWrapper className="mb-12 mt-28 sm:mt-14 flex flex-col items-center justify-center text-center">
          <>
            <p>name of hotel chain -- {pageData.chain_name}</p>
            <p>cost -- {"500 RS"}</p>
            <PaymentForm />
          </>
        </MaxWidthWrapper>
      </div>
    </>
  );
};
export default NewPage;
