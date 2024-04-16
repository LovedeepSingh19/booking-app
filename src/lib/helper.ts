"use server"
import { serverClient } from "@/trpc-client/server-client"

export const getUserData = async (email:string) => {
    const user = await serverClient.getUser({email: email});
    return user;
  }
export const getUserDataByName = async (name:string|undefined) => {
  if(name !== undefined){

    const user = await serverClient.getUserByName({name: name});
    return user;
  }else{
    return [];
  }
  }