import { PrismaClient } from "@prisma/client";
import {PrismaAdapter} from "@next-auth/prisma-adapter";
import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { z } from "zod";
import { compare } from "bcrypt";

const loginSchema = z.object({
  username: z.string(),
  password: z.string()
});

const prisma = new PrismaClient();

export const authOptions = {
  adapter: PrismaAdapter(prisma),
  providers:[
    CredentialsProvider({
      type: "credentials",
      credentials: {
        username: {label:'username', type: "text", placeholder: "Username"},
        password: { label:'password', type: "password", placeholder: "Password"}
      },
      async authorize(credentials, req): Promise<any> {
        const {username, password} = loginSchema.parse(credentials);
        const validation = false;
        const user = await prisma.admin.findUnique({
          where: {
            username: username
          }
        });

        if(!user) return null;

        // const validatePass = await compare(password, user.password);
        // console.log(validatePass);
        if(user.password !== password) return null;
        // if(!validatePass) return null;

        console.log(user);

        return {
          id: `${user.id}`,
          name: user.name,
          username: user.username
        }
      }
    })
  ],
  pages: {
    signIn: "/api/auth/admin-login",
  },
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async jwt({token, user}){
      if(user){
        return {
          ...token,
          username: user.username
        }
      }
      return token;
    },
    async session({session, token, user}){
      return {
        ...session,
        user: {
          ...session.user,
          username: token.username
        }
      }
    }
  },
  secret: process.env.JWT_SECRET
} satisfies NextAuthOptions