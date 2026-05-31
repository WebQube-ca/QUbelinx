"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import { signIn } from "next-auth/react";
import { Apple, ArrowRight, CheckCircle2, Chrome, Mail, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { appName } from "@/data/linkhub";

type AuthMode = "login" | "signup";

export function AuthCard({ mode }: { mode: AuthMode }) {
  const isSignup = mode === "signup";
  const [email, setEmail] = useState("");
  const [pendingProvider, setPendingProvider] = useState<string | null>(null);

  async function handleEmailAuth(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setPendingProvider("email");
    await signIn("email", {
      email,
      callbackUrl: "/dashboard",
    });
    setPendingProvider(null);
  }

  async function handleProviderAuth(provider: "google" | "apple") {
    setPendingProvider(provider);
    await signIn(provider, { callbackUrl: "/dashboard" });
    setPendingProvider(null);
  }

  return (
    <section className="min-h-screen bg-[radial-gradient(circle_at_top_left,rgba(124,58,237,0.18),transparent_34%),linear-gradient(180deg,#fff,#eef2ff)] px-5 py-28 md:px-8 lg:px-12">
      <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[0.92fr_1.08fr]">
        <div className="hidden lg:block">
          <div className="rounded-[2.5rem] bg-slate-950 p-8 text-white shadow-2xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm text-white/72">
              <Sparkles className="h-4 w-4 text-cyan-200" />
              Conversion workspace
            </div>
            <h1 className="mt-8 text-5xl font-black tracking-[-0.05em]">
              Your Instagram traffic deserves a better destination.
            </h1>
            <div className="mt-10 grid gap-4">
              {[
                "Publish one premium link hub in minutes",
                "Start with 5 free links and basic analytics",
                "Upgrade when you need unlimited links and lead tracking",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3 rounded-2xl bg-white/[0.08] p-4">
                  <CheckCircle2 className="h-5 w-5 text-emerald-300" />
                  <span className="text-white/76">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="mx-auto w-full max-w-md rounded-[2rem] border border-white bg-white p-6 shadow-2xl md:p-8">
          <Link href="/" className="text-sm font-black text-violet-600">
            {appName}
          </Link>
          <h2 className="mt-6 text-3xl font-black tracking-[-0.04em] text-slate-950">
            {isSignup ? "Create your account" : "Welcome back"}
          </h2>
          <p className="mt-2 text-slate-500">
            {isSignup
              ? "Sign up with email, Google, or Apple to start building your conversion-ready bio page."
              : "Log in with email, Google, or Apple to manage links, analytics, and your live profile."}
          </p>
          <div className="mt-8 grid gap-3">
            <Button
              type="button"
              variant="outline"
              className="h-12 justify-start border-slate-200 bg-white text-slate-900 hover:bg-slate-50"
              onClick={() => handleProviderAuth("google")}
              disabled={pendingProvider !== null}
            >
              <Chrome className="h-4 w-4" />
              {pendingProvider === "google"
                ? "Connecting Google..."
                : `${isSignup ? "Sign up" : "Login"} with Google`}
            </Button>
            <Button
              type="button"
              variant="outline"
              className="h-12 justify-start border-slate-200 bg-white text-slate-900 hover:bg-slate-50"
              onClick={() => handleProviderAuth("apple")}
              disabled={pendingProvider !== null}
            >
              <Apple className="h-4 w-4" />
              {pendingProvider === "apple"
                ? "Connecting Apple..."
                : `${isSignup ? "Sign up" : "Login"} with Apple`}
            </Button>
          </div>
          <div className="my-6 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-slate-400">
            <span className="h-px flex-1 bg-slate-200" />
            or use email
            <span className="h-px flex-1 bg-slate-200" />
          </div>
          <form className="space-y-5" onSubmit={handleEmailAuth}>
            {isSignup && (
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" placeholder="Ava Studio" />
              </div>
            )}
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="you@brand.com"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                required
              />
            </div>
            {isSignup && (
              <div className="space-y-2">
                <Label htmlFor="username">Profile username</Label>
                <Input id="username" placeholder="avastudio" />
              </div>
            )}
            <Button
              className="w-full bg-slate-950 hover:bg-slate-800"
              size="lg"
              disabled={pendingProvider !== null}
            >
              <Mail className="h-4 w-4" />
              {pendingProvider === "email"
                ? "Sending secure login link..."
                : `${isSignup ? "Sign up" : "Login"} with Email`}
              <ArrowRight className="h-4 w-4" />
            </Button>
          </form>
          <p className="mt-6 text-center text-sm text-slate-500">
            {isSignup ? "Already have an account?" : "New to BioBoost?"}{" "}
            <Link
              href={isSignup ? "/login" : "/signup"}
              className="font-bold text-violet-600"
            >
              {isSignup ? "Login" : "Create an account"}
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
