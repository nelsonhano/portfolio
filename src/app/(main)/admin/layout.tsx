import type { Metadata } from "next";
import { ReactNode } from "react";

import SideBar from "@/components/admin/SideBar";
import { SidebarProvider } from "@/components/ui/sidebar";
import { getServerSession } from "@/lib/get-session";
import { unauthorized } from "next/navigation";

export const metadata: Metadata = {
  title: "Admin | My portfolio",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
    const session = await getServerSession();
    const user = session?.session;

    if(!user) return unauthorized();
    
  return (
    <SidebarProvider>
      <main className="flex w-full">
        <SideBar />
        {children}
      </main>
    </SidebarProvider>
  );
}
