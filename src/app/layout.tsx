import type { Metadata, Viewport } from "next";
import { DM_Mono, Space_Grotesk } from "next/font/google";
import "aos/dist/aos.css";

import AosInit from "@/components/AosInit";
import CursorRing from "@/components/CursorRing";
import Hud from "@/components/Hud";
import Starfield from "@/components/Starfield";
import { site } from "@/data/site";
import "./globals.css";

const grotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-grotesk",
  display: "swap",
});

const dmMono = DM_Mono({
  weight: ["400", "500"],
  subsets: ["latin"],
  variable: "--font-dm-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: `${site.name} | ${site.role}`,
  description:
    "Aman Singh is a full stack developer building web apps with React, Next.js, Node.js and MongoDB, plus AI features with LLMs and RAG.",
  openGraph: {
    title: `${site.name} | ${site.role}`,
    description: "Full stack developer working with React, Next.js, Node.js and AI.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#010202",
};

// Runs before first paint so a saved light theme never flashes dark first.
const themeScript = `try{if(localStorage.getItem("theme")==="light")document.documentElement.dataset.theme="light"}catch(e){}`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${grotesk.variable} ${dmMono.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <noscript>
          <style>{`[data-aos]{opacity:1!important;transform:none!important}`}</style>
        </noscript>
      </head>
      <body className="font-sans antialiased">
        <Starfield />
        <div className="relative">{children}</div>
        <Hud />
        <CursorRing />
        <AosInit />
      </body>
    </html>
  );
}
