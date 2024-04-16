import { Button } from "@/components/UI/button";
import React, { Dispatch, SetStateAction, useState } from "react";
import { trpc } from "@/trpc-client/client";
import { User } from "@prisma/client";
import { PhoneUpdateOutput } from "@/validators/phoneUpdate";
import { tempratureFunction } from "@/lib/temprature";


interface AuthProps {
  session: any;
  setPhoneData: Dispatch<SetStateAction<PhoneUpdateOutput|null>>;
  coords: GeolocationCoordinates;
}

const Auth: React.FC<AuthProps> = ({ session, setPhoneData, coords }) => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const { data, mutate } = trpc.updatePhone.useMutation({
    onSuccess: (pv: PhoneUpdateOutput) => {
      setPhoneData(pv)
      console.log(pv)
    },
  });

  return (
    <div className="h-[80vh]">
      <div>
        <p>Set Phone Number</p>
        <input
          placeholder="Enter your Phone Number"
          value={phoneNumber}
          onChange={(event: any) => setPhoneNumber(event.target.value)}
        />
        <Button disabled={coords===undefined}
          onClick={async () => {
            tempratureFunction(coords).then((e) => 
              {console.log(e);
              mutate({ phone: phoneNumber, email: session?.user?.email, city: e[0], temp: `${e[1]}` })}
            )

        }}
        >
          Save
        </Button>
      </div>
    </div>
  );
};
export default Auth;
