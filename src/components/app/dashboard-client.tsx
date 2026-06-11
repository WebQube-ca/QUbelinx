"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { signOut } from "next-auth/react";
import {
  BarChart3,
  Eye,
  GripVertical,
  Link2,
  LoaderCircle,
  LogOut,
  MessageCircle,
  MousePointerClick,
  Pencil,
  Plus,
  Trash2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { analyticsCards } from "@/data/linkhub";
import type { DashboardLink, ProfilePayload } from "@/lib/profile";
import { STARTER_LINK_LIMIT } from "@/lib/profile";
import { cn } from "@/lib/utils";

type ProfileState = {
  name: string;
  username: string;
  bio: string;
  image: string | null;
};

const DEFAULT_IMAGE =
  "https://images.unsplash.com/photo-1554151228-14d9def656e4?auto=format&fit=crop&w=240&q=80";

export function DashboardClient({ userEmail }: { userEmail: string | null }) {
  const [links, setLinks] = useState<DashboardLink[]>([]);
  const [draggedId, setDraggedId] = useState<string | null>(null);
  const [profile, setProfile] = useState<ProfileState>({
    name: "",
    username: "",
    bio: "",
    image: DEFAULT_IMAGE,
  });
  const [pageViews, setPageViews] = useState(0);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const loadProfile = useCallback(async () => {
    setError(null);
    const response = await fetch("/api/profile");

    if (!response.ok) {
      throw new Error("Could not load your profile.");
    }

    const data = (await response.json()) as { profile: ProfilePayload };
    setProfile({
      name: data.profile.name,
      username: data.profile.username,
      bio: data.profile.bio,
      image: data.profile.image,
    });
    setLinks(data.profile.links);
    setPageViews(data.profile.pageViews);
  }, []);

  useEffect(() => {
    loadProfile()
      .catch((loadError) => {
        setError(loadError instanceof Error ? loadError.message : "Could not load profile.");
      })
      .finally(() => setLoading(false));
  }, [loadProfile]);

  const totalClicks = useMemo(
    () => links.reduce((total, link) => total + link.clicks, 0),
    [links]
  );

  const averageCtr = useMemo(() => {
    if (!pageViews) return 0;
    return Number(((totalClicks / pageViews) * 100).toFixed(1));
  }, [pageViews, totalClicks]);

  async function saveProfile(nextProfile: ProfileState) {
    setSaving(true);
    setError(null);

    const response = await fetch("/api/profile", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(nextProfile),
    });

    const data = await response.json();

    if (!response.ok) {
      setError(data.error ?? "Could not save profile.");
      setSaving(false);
      return false;
    }

    setProfile({
      name: data.profile.name,
      username: data.profile.username,
      bio: data.profile.bio,
      image: data.profile.image,
    });
    setLinks(data.profile.links);
    setPageViews(data.profile.pageViews);
    setSaving(false);
    return true;
  }

  async function addLink() {
    if (links.length >= STARTER_LINK_LIMIT) return;

    setSaving(true);
    setError(null);

    const response = await fetch("/api/links", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: "New campaign link",
        url: "https://example.com/new-offer",
        type: "Campaign",
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      setError(data.error ?? "Could not add link.");
      setSaving(false);
      return;
    }

    setLinks(data.profile.links);
    setSaving(false);
  }

  async function updateLink(id: string, key: "title" | "url", value: string) {
    setLinks((current) =>
      current.map((link) => (link.id === id ? { ...link, [key]: value } : link))
    );

    await fetch(`/api/links/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ [key]: value }),
    });
  }

  async function deleteLink(id: string) {
    setSaving(true);
    const response = await fetch(`/api/links/${id}`, { method: "DELETE" });
    const data = await response.json();

    if (response.ok) {
      setLinks(data.profile.links);
    }

    setSaving(false);
  }

  async function reorder(targetId: string) {
    if (!draggedId || draggedId === targetId) return;

    const draggedIndex = links.findIndex((link) => link.id === draggedId);
    const targetIndex = links.findIndex((link) => link.id === targetId);
    const next = [...links];
    const [dragged] = next.splice(draggedIndex, 1);
    next.splice(targetIndex, 0, dragged);
    setLinks(next);

    await fetch("/api/links/reorder", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ orderedIds: next.map((link) => link.id) }),
    });
  }

  if (loading) {
    return (
      <section className="flex min-h-screen items-center justify-center bg-[#f7f8ff]">
        <div className="flex items-center gap-3 rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-600 shadow-soft">
          <LoaderCircle className="h-4 w-4 animate-spin" />
          Loading your workspace...
        </div>
      </section>
    );
  }

  return (
    <section className="min-h-screen bg-[#f7f8ff] px-5 pb-12 pt-28 md:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col justify-between gap-5 lg:flex-row lg:items-end">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.28em] text-violet-600">
              Dashboard
            </p>
            <h1 className="mt-3 text-4xl font-black tracking-[-0.05em] text-slate-950 md:text-6xl">
              Build and optimize your profile page.
            </h1>
            <p className="mt-4 max-w-2xl text-slate-600">
              Free plan limit: {links.length}/{STARTER_LINK_LIMIT} links.
              Changes save to your live profile at{" "}
              <Link href={`/${profile.username}`} className="font-bold text-violet-600">
                /{profile.username || "username"}
              </Link>
              .
            </p>
            {userEmail && (
              <p className="mt-2 text-sm text-slate-500">Signed in as {userEmail}</p>
            )}
          </div>
          <div className="flex flex-wrap gap-3">
            <Button
              onClick={addLink}
              disabled={links.length >= STARTER_LINK_LIMIT || saving}
              className="bg-slate-950 hover:bg-slate-800"
            >
              <Plus className="h-4 w-4" />
              Add link
            </Button>
            <Button variant="outline" onClick={() => signOut({ callbackUrl: "/" })}>
              <LogOut className="h-4 w-4" />
              Sign out
            </Button>
          </div>
        </div>

        {error && (
          <p className="mt-6 rounded-2xl border border-rose-200 bg-rose-50 px-4 py-3 text-sm font-medium text-rose-700">
            {error}
          </p>
        )}

        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {analyticsCards.map((card, index) => (
            <div key={card.label} className="rounded-[1.75rem] border border-white bg-white p-5 shadow-soft">
              <div className="flex items-center justify-between">
                <card.icon className="h-5 w-5 text-violet-600" />
                <span className="rounded-full bg-emerald-100 px-2.5 py-1 text-xs font-bold text-emerald-700">
                  {index === 0 && `${pageViews.toLocaleString()} views`}
                  {index === 1 && `${totalClicks.toLocaleString()} total`}
                  {index === 2 && `${averageCtr.toFixed(1)}% avg`}
                  {index === 3 && "Free plan"}
                </span>
              </div>
              <p className="mt-5 text-3xl font-black tracking-tight">
                {index === 0 && pageViews.toLocaleString()}
                {index === 1 && totalClicks.toLocaleString()}
                {index === 2 && `${averageCtr.toFixed(1)}%`}
                {index === 3 && `${links.length} / ${STARTER_LINK_LIMIT}`}
              </p>
              <p className="mt-1 text-sm text-slate-500">{card.label}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_410px]">
          <div className="space-y-6">
            <ProfileEditor
              profile={profile}
              saving={saving}
              onSave={saveProfile}
              onChange={setProfile}
            />
            <div className="rounded-[2rem] border border-white bg-white p-5 shadow-xl">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <h2 className="text-xl font-black text-slate-950">Links</h2>
                  <p className="text-sm text-slate-500">
                    Drag and drop to move high-converting CTAs above the fold.
                  </p>
                </div>
                <span className="rounded-full bg-violet-100 px-3 py-1 text-xs font-bold text-violet-700">
                  Free max {STARTER_LINK_LIMIT}
                </span>
              </div>
              <div className="mt-5 space-y-4">
                {links.map((link) => (
                  <div
                    key={link.id}
                    draggable
                    onDragStart={() => setDraggedId(link.id)}
                    onDragOver={(event) => {
                      event.preventDefault();
                      reorder(link.id);
                    }}
                    onDragEnd={() => setDraggedId(null)}
                    className={cn(
                      "rounded-[1.5rem] border border-slate-200 bg-slate-50 p-4 transition",
                      draggedId === link.id && "opacity-50"
                    )}
                  >
                    <div className="flex gap-3">
                      <button
                        type="button"
                        className="mt-8 cursor-grab text-slate-400 active:cursor-grabbing"
                        aria-label="Drag link"
                      >
                        <GripVertical className="h-5 w-5" />
                      </button>
                      <div className="grid flex-1 gap-3 md:grid-cols-2">
                        <div className="space-y-2">
                          <Label htmlFor={`title-${link.id}`}>Link title</Label>
                          <Input
                            id={`title-${link.id}`}
                            value={link.title}
                            onChange={(event) =>
                              updateLink(link.id, "title", event.target.value)
                            }
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor={`url-${link.id}`}>URL</Label>
                          <Input
                            id={`url-${link.id}`}
                            value={link.url}
                            onChange={(event) =>
                              updateLink(link.id, "url", event.target.value)
                            }
                          />
                        </div>
                      </div>
                      <button
                        type="button"
                        onClick={() => deleteLink(link.id)}
                        className="mt-8 flex h-11 w-11 items-center justify-center rounded-2xl bg-white text-rose-500 shadow-sm"
                        aria-label={`Delete ${link.title}`}
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                    <div className="mt-4 grid gap-3 pl-8 text-sm text-slate-500 sm:grid-cols-3">
                      <span className="flex items-center gap-2">
                        <MousePointerClick className="h-4 w-4 text-violet-500" />
                        {link.clicks} clicks
                      </span>
                      <span className="flex items-center gap-2">
                        <BarChart3 className="h-4 w-4 text-violet-500" />
                        {link.ctr}% CTR
                      </span>
                      <span className="flex items-center gap-2">
                        <Pencil className="h-4 w-4 text-violet-500" />
                        {link.type}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <LivePreview links={links} profile={profile} />
        </div>
      </div>
    </section>
  );
}

function ProfileEditor({
  profile,
  saving,
  onSave,
  onChange,
}: {
  profile: ProfileState;
  saving: boolean;
  onSave: (profile: ProfileState) => Promise<boolean>;
  onChange: (profile: ProfileState) => void;
}) {
  function updateProfile(key: keyof ProfileState, value: string) {
    onChange({ ...profile, [key]: value });
  }

  return (
    <div className="rounded-[2rem] border border-white bg-white p-5 shadow-xl">
      <div className="flex items-center justify-between gap-3">
        <div>
          <h2 className="text-xl font-black text-slate-950">Create profile page</h2>
          <p className="mt-1 text-sm text-slate-500">
            Edit the public profile shown at /{profile.username || "username"}.
          </p>
        </div>
        <Button
          disabled={saving}
          onClick={() => onSave(profile)}
          className="bg-slate-950 hover:bg-slate-800"
        >
          {saving ? "Saving..." : "Save profile"}
        </Button>
      </div>
      <div className="mt-5 grid gap-4 md:grid-cols-[120px_1fr_1fr]">
        <Image
          src={profile.image ?? DEFAULT_IMAGE}
          alt="Profile avatar"
          width={120}
          height={120}
          className="h-28 w-28 rounded-[2rem] object-cover"
        />
        <div className="space-y-2">
          <Label htmlFor="profile-name">Name</Label>
          <Input
            id="profile-name"
            value={profile.name}
            onChange={(event) => updateProfile("name", event.target.value)}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="profile-username">Username</Label>
          <Input
            id="profile-username"
            value={profile.username}
            onChange={(event) =>
              updateProfile(
                "username",
                event.target.value.toLowerCase().replace(/\s+/g, "")
              )
            }
          />
        </div>
        <div className="space-y-2 md:col-span-2 md:col-start-2">
          <Label htmlFor="profile-bio">Bio</Label>
          <Textarea
            id="profile-bio"
            value={profile.bio}
            onChange={(event) => updateProfile("bio", event.target.value)}
            className="min-h-24"
          />
        </div>
      </div>
    </div>
  );
}

function LivePreview({ links, profile }: { links: DashboardLink[]; profile: ProfileState }) {
  return (
    <aside className="lg:sticky lg:top-28 lg:self-start">
      <div className="rounded-[2.25rem] border border-white bg-white p-5 shadow-2xl">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="font-black text-slate-950">Live preview</h2>
          <span className="flex items-center gap-2 rounded-full bg-emerald-100 px-3 py-1 text-xs font-bold text-emerald-700">
            <Eye className="h-3.5 w-3.5" />
            Public
          </span>
        </div>
        <div className="rounded-[2rem] bg-slate-950 p-4 text-white">
          <div className="rounded-[1.5rem] bg-gradient-to-b from-indigo-950 via-slate-950 to-slate-900 p-5">
            <Image
              src={profile.image ?? DEFAULT_IMAGE}
              alt={profile.name}
              width={88}
              height={88}
              className="mx-auto h-20 w-20 rounded-full object-cover ring-4 ring-white/10"
            />
            <div className="mt-4 text-center">
              <h3 className="text-xl font-black">{profile.name || "Untitled profile"}</h3>
              <p className="mt-1 text-sm text-white/60">
                {profile.bio || "Add a short bio to explain why visitors should click."}
              </p>
            </div>
            <div className="mt-6 space-y-3">
              {links.map((link, index) => (
                <div
                  key={link.id}
                  className={cn(
                    "group flex items-center justify-between rounded-2xl px-4 py-3 text-sm font-bold transition",
                    index === 0
                      ? "bg-white text-slate-950"
                      : "bg-white/10 text-white ring-1 ring-white/10"
                  )}
                >
                  <span>{link.title}</span>
                  <Link2 className="h-4 w-4 opacity-50" />
                </div>
              ))}
            </div>
            <div className="mt-5 flex items-center justify-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10">
                <MessageCircle className="h-4 w-4" />
              </span>
              <span className="rounded-full bg-white/10 px-4 py-3 text-sm font-semibold">
                Share profile
              </span>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}
