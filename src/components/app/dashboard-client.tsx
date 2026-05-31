"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import {
  BarChart3,
  Eye,
  GripVertical,
  Link2,
  MessageCircle,
  MousePointerClick,
  Pencil,
  Plus,
  Trash2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { analyticsCards, dashboardLinks } from "@/data/linkhub";
import { cn } from "@/lib/utils";

type DashboardLink = (typeof dashboardLinks)[number];
const STARTER_LINK_LIMIT = 4;

export function DashboardClient() {
  const [links, setLinks] = useState<DashboardLink[]>(dashboardLinks);
  const [draggedId, setDraggedId] = useState<string | null>(null);

  const totalClicks = useMemo(
    () => links.reduce((total, link) => total + link.clicks, 0),
    [links]
  );

  function addLink() {
    if (links.length >= STARTER_LINK_LIMIT) return;
    setLinks((current) => [
      ...current,
      {
        id: crypto.randomUUID(),
        title: "New campaign link",
        url: "https://example.com/new-offer",
        clicks: 0,
        ctr: 0,
        type: "Campaign",
      },
    ]);
  }

  function updateLink(id: string, key: "title" | "url", value: string) {
    setLinks((current) =>
      current.map((link) => (link.id === id ? { ...link, [key]: value } : link))
    );
  }

  function deleteLink(id: string) {
    setLinks((current) => current.filter((link) => link.id !== id));
  }

  function reorder(targetId: string) {
    if (!draggedId || draggedId === targetId) return;

    setLinks((current) => {
      const draggedIndex = current.findIndex((link) => link.id === draggedId);
      const targetIndex = current.findIndex((link) => link.id === targetId);
      const next = [...current];
      const [dragged] = next.splice(draggedIndex, 1);
      next.splice(targetIndex, 0, dragged);
      return next;
    });
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
              Starter plan limit: {links.length}/{STARTER_LINK_LIMIT} links.
              Drag to reorder, edit live, and watch click analytics update in
              the workspace.
            </p>
          </div>
          <Button
            onClick={addLink}
            disabled={links.length >= STARTER_LINK_LIMIT}
            className="bg-slate-950 hover:bg-slate-800"
          >
            <Plus className="h-4 w-4" />
            Add link
          </Button>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {analyticsCards.map((card, index) => (
            <div key={card.label} className="rounded-[1.75rem] border border-white bg-white p-5 shadow-soft">
              <div className="flex items-center justify-between">
                <card.icon className="h-5 w-5 text-violet-600" />
                <span className="rounded-full bg-emerald-100 px-2.5 py-1 text-xs font-bold text-emerald-700">
                  {index === 1 ? totalClicks.toLocaleString() : card.delta}
                </span>
              </div>
              <p className="mt-5 text-3xl font-black tracking-tight">{card.value}</p>
              <p className="mt-1 text-sm text-slate-500">{card.label}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_410px]">
          <div className="space-y-6">
            <ProfileEditor />
            <div className="rounded-[2rem] border border-white bg-white p-5 shadow-xl">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <h2 className="text-xl font-black text-slate-950">Links</h2>
                  <p className="text-sm text-slate-500">
                    Drag and drop to move high-converting CTAs above the fold.
                  </p>
                </div>
                <span className="rounded-full bg-violet-100 px-3 py-1 text-xs font-bold text-violet-700">
                  Starter max {STARTER_LINK_LIMIT}
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
          <LivePreview links={links} />
        </div>
      </div>
    </section>
  );
}

function ProfileEditor() {
  return (
    <div className="rounded-[2rem] border border-white bg-white p-5 shadow-xl">
      <h2 className="text-xl font-black text-slate-950">Profile page</h2>
      <div className="mt-5 grid gap-4 md:grid-cols-[120px_1fr_1fr]">
        <Image
          src="https://images.unsplash.com/photo-1554151228-14d9def656e4?auto=format&fit=crop&w=240&q=80"
          alt="Profile avatar"
          width={120}
          height={120}
          className="h-28 w-28 rounded-[2rem] object-cover"
        />
        <div className="space-y-2">
          <Label htmlFor="profile-name">Name</Label>
          <Input id="profile-name" defaultValue="Ava Studio" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="profile-username">Username</Label>
          <Input id="profile-username" defaultValue="avastudio" />
        </div>
        <div className="space-y-2 md:col-span-2 md:col-start-2">
          <Label htmlFor="profile-bio">Bio</Label>
          <Input
            id="profile-bio"
            defaultValue="Creator growth systems, brand partnerships, and launch templates."
          />
        </div>
      </div>
    </div>
  );
}

function LivePreview({ links }: { links: DashboardLink[] }) {
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
              src="https://images.unsplash.com/photo-1554151228-14d9def656e4?auto=format&fit=crop&w=240&q=80"
              alt="Ava Studio"
              width={88}
              height={88}
              className="mx-auto h-20 w-20 rounded-full object-cover ring-4 ring-white/10"
            />
            <div className="mt-4 text-center">
              <h3 className="text-xl font-black">Ava Studio</h3>
              <p className="mt-1 text-sm text-white/60">
                Creator growth systems + brand partnerships
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
