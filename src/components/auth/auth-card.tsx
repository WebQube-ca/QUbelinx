"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import { Apple, ArrowRight, CheckCircle2, Chrome, Lock, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { appName } from "@/data/linkhub";

type AuthMode = "login" | "signup";

type AuthProviders = {
  credentials: boolean;
  google: boolean;
  apple: boolean;
  authConfigured: boolean;
  setupError: string | null;
};

export function AuthCard({
  mode,
  providers,
}: {
  mode: AuthMode;
  providers: AuthProviders;
}) {
  const router = useRouter();
  const isSignup = mode === "signup";
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [pendingProvider, setPendingProvider] = useState<string | null>(null);
  const [message, setMessage] = useState<string | null>(null);
  const [messageTone, setMessageTone] = useState<"success" | "error">("success");

  async function handleCredentialsAuth(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!providers.authConfigured) {
      setMessageTone("error");
      setMessage("Authentication is not configured on this server. Contact the site admin.");
      return;
    }

    setPendingProvider("credentials");
    setMessage(null);

    try {
      if (isSignup) {
        const registerResponse = await fetch("/api/auth/register", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ name, email, password, username }),
        });

        let registerData: { error?: string } = {};

        try {
          registerData = (await registerResponse.json()) as { error?: string };
        } catch {
          registerData = { error: "Server error during registration." };
        }

        if (!registerResponse.ok) {
          setMessageTone("error");
          setMessage(registerData.error ?? "Could not create your account.");
          return;
        }
      }

      const result = await signIn("credentials", {
        email,
        password,
        callbackUrl: "/dashboard",
        redirect: false,
      });

      if (result?.error) {
        setMessageTone("error");
        setMessage(
          isSignup
            ? "Account created, but sign-in failed. Try logging in."
            : "Invalid email or password."
        );
        return;
      }

      if (!result?.ok) {
        setMessageTone("error");
        setMessage("Login failed. Check server configuration and try again.");
        return;
      }

      router.push("/dashboard");
      router.refresh();
    } catch {
      setMessageTone("error");
      setMessage("Something went wrong. Please try again.");
    } finally {
      setPendingProvider(null);
    }
  }

  async function handleProviderAuth(provider: "google" | "apple") {
    setPendingProvider(provider);
    setMessage(null);

    try {
      await signIn(provider, { callbackUrl: "/dashboard" });
    } catch {
      setMessageTone("error");
      setMessage("Could not connect to the provider. Try again or use email and password.");
    } finally {
      setPendingProvider(null);
    }
  }

  const hasOAuth = providers.google || providers.apple;
  const setupWarning = providers.setupError;

  return (
    <section className="min-h-screen bg-[radial-gradient(circle_at_top_left,rgba(124,58,237,0.18),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(34,211,238,0.18),transparent_32%),linear-gradient(180deg,#fff,#eef2ff)] px-5 py-28 md:px-8 lg:px-12">
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
              ? "Create an account with email and password to start building your bio page."
              : "Sign in with your email and password to manage links and your live profile."}
          </p>

          {setupWarning && (
            <p className="mt-4 rounded-2xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm font-medium text-amber-900">
              {setupWarning}
            </p>
          )}

          {hasOAuth && (
            <div className="mt-8 grid gap-3">
              {providers.google && (
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
              )}
              {providers.apple && (
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
              )}
            </div>
          )}

          {providers.credentials && hasOAuth && (
            <div className="my-6 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-slate-400">
              <span className="h-px flex-1 bg-slate-200" />
              or use email
              <span className="h-px flex-1 bg-slate-200" />
            </div>
          )}

          {providers.credentials && (
            <form className="space-y-4" onSubmit={handleCredentialsAuth}>
              {isSignup && (
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    placeholder="Ava Studio"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                    required
                  />
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
                  autoComplete="email"
                />
              </div>
              {isSignup && (
                <div className="space-y-2">
                  <Label htmlFor="username">Profile username</Label>
                  <Input
                    id="username"
                    placeholder="avastudio"
                    value={username}
                    onChange={(event) =>
                      setUsername(event.target.value.toLowerCase().replace(/\s+/g, ""))
                    }
                  />
                </div>
              )}
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder={isSignup ? "At least 8 characters" : "Your password"}
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  required
                  minLength={isSignup ? 8 : undefined}
                  autoComplete={isSignup ? "new-password" : "current-password"}
                />
              </div>
              <Button
                className="w-full bg-slate-950 hover:bg-slate-800"
                size="lg"
                disabled={pendingProvider !== null}
              >
                <Lock className="h-4 w-4" />
                {pendingProvider === "credentials"
                  ? isSignup
                    ? "Creating account..."
                    : "Signing in..."
                  : isSignup
                    ? "Create account"
                    : "Sign in"}
                <ArrowRight className="h-4 w-4" />
              </Button>
            </form>
          )}

          {message && (
            <p
              className={
                messageTone === "error"
                  ? "mt-4 rounded-2xl border border-rose-200 bg-rose-50 px-4 py-3 text-sm font-medium text-rose-700"
                  : "mt-4 rounded-2xl bg-violet-50 px-4 py-3 text-sm font-medium text-violet-700"
              }
            >
              {message}
            </p>
          )}

          <p className="mt-6 text-center text-sm text-slate-500">
            {isSignup ? "Already have an account?" : `New to ${appName}?`}{" "}
            <Link
              href={isSignup ? "/login" : "/signup"}
              className="font-bold text-violet-600"
            >
              {isSignup ? "Sign in" : "Create an account"}
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
