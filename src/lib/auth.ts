import type { NextAuthOptions } from "next-auth";
import AppleProvider from "next-auth/providers/apple";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { ensureUserProfile } from "@/lib/profile";
import { verifyPassword } from "@/lib/password";
import { prisma } from "@/lib/prisma";

const hasGoogle =
  Boolean(process.env.GOOGLE_CLIENT_ID?.trim()) &&
  Boolean(process.env.GOOGLE_CLIENT_SECRET?.trim());
const hasApple =
  Boolean(process.env.APPLE_CLIENT_ID?.trim()) &&
  Boolean(process.env.APPLE_CLIENT_SECRET?.trim());

const placeholderSecret = "replace-with-a-long-random-secret";
const authSecret = process.env.NEXTAUTH_SECRET?.trim();
const hasAuthSecret = Boolean(authSecret && authSecret !== placeholderSecret);

export const authOptions: NextAuthOptions = {
  secret: authSecret,
  adapter: PrismaAdapter(prisma),
  pages: {
    signIn: "/login",
  },
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60,
  },
  providers: [
    CredentialsProvider({
      id: "credentials",
      name: "Email and password",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const email = credentials?.email?.trim().toLowerCase();
        const password = credentials?.password ?? "";

        if (!email || !password) {
          return null;
        }

        const user = await prisma.user.findUnique({ where: { email } });

        if (!user?.passwordHash) {
          return null;
        }

        const valid = await verifyPassword(password, user.passwordHash);
        if (!valid) {
          return null;
        }

        return {
          id: user.id,
          email: user.email,
          name: user.name,
          image: user.image,
        };
      },
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
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
      }
      return token;
    },
    session({ session, token }) {
      if (session.user && token.id) {
        session.user.id = token.id as string;
      }
      return session;
    },
    redirect({ baseUrl }) {
      return `${baseUrl}/dashboard`;
    },
  },
};

export const authProviders = {
  credentials: true,
  google: hasGoogle,
  apple: hasApple,
  authConfigured: hasAuthSecret,
  setupError: !hasAuthSecret
    ? "Auth secret is missing. Set NEXTAUTH_SECRET in your environment variables."
    : null,
};
