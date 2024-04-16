// trpc-server/router.ts

import {
  PhoneUpdateOutput,
  phoneUpdateInput,
  phoneUpdateOutput,
} from "@/validators/phoneUpdate";
import { z } from 'zod';

import { router, publicProcedure } from ".";
import { getUserData, getUserDataByName } from "@/validators/getUserData";

export const appRouter = router({
  updatePhone: publicProcedure
    .input(phoneUpdateInput)
    .output(phoneUpdateOutput)
    .mutation(async ({ input }) => {
      console.log(input.city);
      const newData: PhoneUpdateOutput = {
        phone: null,
        email: "",
        city: null,
        temp: null,
        name: "",
      };
      await prisma?.user
        .update({
          where: {
            email: input.email,
          },
          data: {
            phone: input.phone,
            city: input.city,
            temp: input.temp,
          },
        })
        .then((val) => {
          newData.phone = val.phone;
          newData.email = val.email!;
          newData.city = val.city;
          newData.temp = val.temp;
          newData.name = val.name!;
        })
        .catch((e) => console.log(e));

      return newData;
    }),

  getUser: publicProcedure.input(getUserData).query(async ({ input }) => {
    console.log(input);
    const newData: PhoneUpdateOutput = {
      phone: null,
      email: "",
      city: null,
      temp: null,
      name: "",
    };
    await prisma?.user
      .findFirst({ where: { email: input.email } })
      .then((val) => {
        newData.phone = val!.phone;
        newData.email = val!.email!;
        newData.city = val!.city;
        newData.temp = val!.temp;
        newData.name = val!.name!;
      })
      .catch((e) => console.log(e));

    return newData;
  }),
  getUserByName: publicProcedure.input(getUserDataByName).query(async ({ input }) => {
    console.log(input);
    const data = await prisma?.user
      .findMany({ where: { name: input.name } })
      return data
  }),
});

export type AppRouter = typeof appRouter;
