import { Plus_Jakarta_Sans } from "next/font/google";

const profileFont = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-profile",
  display: "swap",
});

export default function PublicProfileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={`${profileFont.variable} w-full max-w-[100vw] overflow-x-clip`}>
      {children}
    </div>
  );
}
