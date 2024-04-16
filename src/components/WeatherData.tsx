import React from 'react';
import Image from "next/image";
import { signOut } from "next-auth/react"


type WeatherDataProps = {
    session: any,
    city: string,
    temp: string,
};

const WeatherData:React.FC<WeatherDataProps> = ({session, city, temp}) => {
    
    return (
        <div className="w-full h-screen flex flex-col justify-center items-center">
        <div className="w-44 h-44 relative mb-4">
        <Image
          src={session.user?.image as string}
          fill
          alt=""
          className="object-cover rounded-full"
          />
        </div>
        <p className="text-2xl mb-2">Welcome <span className="font-bold">{session.user?.name}</span>. Signed In As</p>
        <p className="text-2xl mb-2">City -- <span className="font-bold">{city}</span>.</p>
        <p className="text-2xl mb-2">Temperature -- <span className="font-bold">{temp}</span>.</p>
        <p className="font-bold mb-4">{session.user?.email}</p>
        <button className="bg-red-600 py-2 px-6 rounded-md" onClick={() => signOut()}>Sign out</button>
      </div>
    )
}
export default WeatherData;