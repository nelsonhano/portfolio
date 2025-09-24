import { extractRouterConfig } from "uploadthing/server";
import { fileUploader } from "./api/uploadthing/core";
import { Inter } from "next/font/google";
import { connection } from "next/server";
import type { Metadata } from "next";
import { Suspense } from "react";

import { NextSSRPlugin } from "@uploadthing/react/next-ssr-plugin";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

async function UTSSR() {
  await connection();
  return <NextSSRPlugin routerConfig={extractRouterConfig(fileUploader)} />;
}

export const metadata: Metadata = {
  title: {
    default: "My portfolio",
    template: "%s | My portfolio",
  },
  description:
    "My personal portfolio website, where I showcase my projects, skills, and experience.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} bg-foreground antialiased`}>
        <Suspense>
          <UTSSR />
        </Suspense>
        <div className="min-h-screen w-full bg-black relative">
          <div
            className="absolute inset-0 z-0"
            style={{
              background: "#000000",
              backgroundImage: `
        linear-gradient(to right, rgba(255,255,255,0.06) 1px, transparent 1px),
        linear-gradient(to bottom, rgba(255,255,255,0.06) 1px, transparent 1px),
        radial-gradient(circle, rgba(255,255,255,0.6) 1px, transparent 1px)
      `,
              backgroundSize: "20px 20px, 20px 20px, 20px 20px",
              backgroundPosition: "0 0, 0 0, 0 0",
            }}
          />
          <div className="relative z-10 overflow-hidden">
            <div>{children}</div>
          </div>
        </div>
      </body>
    </html>
  );
}
