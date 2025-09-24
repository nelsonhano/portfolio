import { ReactNode } from "react";

import NavBar from "@/components/NavBar";

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <main>
      <div className="relative z-10">
        {/* <NavBar /> */}
        <div>{children}</div>
      </div>
    </main>
  );
}


