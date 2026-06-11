export function ProfilePageSkeleton() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#07080f]">
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(99,102,241,0.12),transparent_60%)]" />

      <div className="relative z-10 mx-auto max-w-6xl animate-pulse px-4 pb-28 pt-6 sm:px-5 md:px-8 lg:pb-12 lg:pt-10">
        <div className="grid gap-6 lg:grid-cols-[minmax(0,22rem)_1fr] lg:gap-8 xl:grid-cols-[minmax(0,24rem)_1fr]">
          <aside className="space-y-4">
            <div className="h-64 rounded-[1.75rem] bg-white/[0.05] ring-1 ring-white/[0.06]" />
            <div className="grid grid-cols-2 gap-3">
              {Array.from({ length: 4 }).map((_, index) => (
                <div key={index} className="h-24 rounded-[1.25rem] bg-white/[0.04] ring-1 ring-white/[0.05]" />
              ))}
            </div>
          </aside>

          <main className="space-y-3">
            <div className="mb-4 h-8 w-40 rounded-lg bg-white/[0.05]" />
            {Array.from({ length: 4 }).map((_, index) => (
              <div key={index} className="h-[4.5rem] rounded-[1.25rem] bg-white/[0.04] ring-1 ring-white/[0.05]" />
            ))}
            <div className="mt-8 flex gap-3 overflow-hidden">
              {Array.from({ length: 3 }).map((_, index) => (
                <div key={index} className="h-44 w-[78vw] max-w-[18rem] shrink-0 rounded-[1.35rem] bg-white/[0.04] sm:w-auto sm:flex-1" />
              ))}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
