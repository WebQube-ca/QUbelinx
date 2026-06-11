import type { NextAuthOptions } from "next-auth";
import AppleProvider from "next-auth/providers/apple";
import EmailProvider from "next-auth/providers/email";
import GoogleProvider from "next-auth/providers/google";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { ensureUserProfile } from "@/lib/profile";
import { prisma } from "@/lib/prisma";

const hasEmailServer = Boolean(process.env.EMAIL_SERVER?.trim());
const hasGoogle =
  Boolean(process.env.GOOGLE_CLIENT_ID?.trim()) &&
  Boolean(process.env.GOOGLE_CLIENT_SECRET?.trim());
const hasApple =
  Boolean(process.env.APPLE_CLIENT_ID?.trim()) &&
  Boolean(process.env.APPLE_CLIENT_SECRET?.trim());

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  pages: {
    signIn: "/login",
  },
  session: {
    strategy: "database",
  },
  providers: [
    EmailProvider({
      server: process.env.EMAIL_SERVER ?? "smtp://localhost:1025",
      from: process.env.EMAIL_FROM ?? "QubeLinx <login@webqube.ca>",
      ...(hasEmailServer
        ? {}
        : {
            sendVerificationRequest({ identifier, url }) {
              console.log("\n[QubeLinx] Magic login link");
              console.log(`  Email: ${identifier}`);
              console.log(`  URL:   ${url}\n`);
            },
          }),
    }),
    ...(hasGoogle
      ? [
          GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
          }),
        ]
      : []),
    ...(hasApple
      ? [
          AppleProvider({
            clientId: process.env.APPLE_CLIENT_ID!,
            clientSecret: process.env.APPLE_CLIENT_SECRET!,
          }),
        ]
      : []),
  ],
  events: {
    async createUser({ user }) {
      await ensureUserProfile(user.id, {
        name: user.name,
        email: user.email,
      });
    },
  },
  callbacks: {
    session({ session, user }) {
      if (session.user) {
        session.user.id = user.id;
      }
      return session;
    },
    redirect({ baseUrl }) {
      return `${baseUrl}/dashboard`;
    },
  },
};

export const authProviders = {
  email: true,
  google: hasGoogle,
  apple: hasApple,
  devEmailMode: !hasEmailServer,
};
