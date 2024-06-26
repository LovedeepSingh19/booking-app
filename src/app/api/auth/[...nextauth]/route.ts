import { PrismaAdapter } from "@next-auth/prisma-adapter";
import NextAuth from "next-auth"
import prisma from "@/lib/prismadb"
import GithubProvider from "next-auth/providers/github"
import GoogleProvider from "next-auth/providers/google";

const handler =  NextAuth({
  adapter: PrismaAdapter(prisma),
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
          })
    ],
})

export { handler as GET, handler as POST }