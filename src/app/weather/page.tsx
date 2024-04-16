"use client";

import AuthData from "@/UI/AuthData";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Navbar from "@/components/UI/Navbar";
import WeatherData from "@/components/WeatherData";
import { PhoneUpdateOutput } from "@/validators/phoneUpdate";
import { useSession, signIn, signOut } from "next-auth/react";
import { useEffect, useState, ChangeEvent } from "react";
import { useGeolocated } from "react-geolocated";
import { getUserData, getUserDataByName } from "../../lib/helper";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [listofUsers, setUsers] = useState<Array<any>|undefined>([]);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const handleSearch = async () => {
    const listOfUsers2 = await getUserDataByName(searchQuery)
    console.log(listOfUsers2)
    setUsers(listOfUsers2)
    // console.log('Searching for:', searchQuery);
  };



  const { data: session } = useSession();
  const [phoneData, setPhoneData] = useState<PhoneUpdateOutput | null>(null);
  const { coords, isGeolocationAvailable, isGeolocationEnabled } =
    useGeolocated({
      positionOptions: {
        enableHighAccuracy: false,
      },
      userDecisionTimeout: 5000,
    });

  useEffect(() => {
    if (session?.user) {
      getUserData(session.user.email!).then((e) => setPhoneData(e));
    }
  }, [session?.user]);

  if (session) {
    return (
      <>
        <Navbar buttonText={"Booking"} buttonPath={"/bookings"} />
        <MaxWidthWrapper className="mb-12 mt-28 sm:mt-14 flex flex-col items-center justify-center text-center">
          <div className="flex flex-col items-start justify-start">
            <div>
              {phoneData?.phone && phoneData?.city ? (
                <WeatherData session={session} city={phoneData?.city!} temp={phoneData?.temp!} />
              ) : (
                <AuthData
                  session={session}
                  setPhoneData={setPhoneData}
                  coords={coords!}
                />
              )}
            </div>
            {!coords?.latitude && !(phoneData?.phone || phoneData?.city) && (
              <div className="flex flex-row">
                <p>Getting the location please wait</p>

                <div className=" ml-5 animate-spin rounded-full h-5 w-5 border-t-2 border-b-2 border-gray-900"></div>
              </div>
            )}
          </div>
        </MaxWidthWrapper>
      </>
    );
  }

  return (
    <div className="w-full h-screen flex flex-col justify-center items-center">
      <p className="text-2xl mb-2">Not Signed In</p>
      <button
        className="bg-blue-600 py-2 px-6 rounded-md mb-2 text-white"
        onClick={() => signIn("google")}
      >
        Sign in with google
      </button>
      <div className="flex items-center pt-2">
      <input
        type="text"
        placeholder="Enter the name of user"
        value={searchQuery}
        onChange={handleInputChange}
        className="px-4 py-2 mr-2 border text-black border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
      />
      <button
        onClick={handleSearch}
        className="px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none"
      >
        Search
      </button>
    </div>
    <div className="pt-4">

    {listofUsers!.map((data, index) => (
      <div key={index} className="bg-slate-500 px-4 py-1 rounded-md m-2">
            <h2>Name -- {data.name}</h2>
            <p>Temperature -- {data.temp}</p>
            <p>City -- {data.city}</p>
          </div>
        ))}
        </div>
    </div>
  );
}
