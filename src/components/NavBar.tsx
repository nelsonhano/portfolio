import Link from "next/link";

import { sections } from "@/lib/utils";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { createElement } from "react";

export default function NavBar() {
  return (
    <nav>
      <div className="flex justify-between items-center fixed top-0 right-0 left-0 z-30 py-4 px-6 border-b border-ring bg-foreground/95 backdrop-blur-md">
        <Link href="/" className="flex items-center">
          <h1 className="text-2xl font-bold text-white ml-5">My Portfolio</h1>
        </Link>
        <div className="hidden md:flex gap-6 mr-5">
          {sections.map(({ iconName, href, icon: Icon }) => (
            <Link className="text-white flex gap-2" href={href} key={href}>
              <Icon className="w-5 h-5" />{" "}
              {iconName}
            </Link>
          ))}
        </div>
        <div className="md:hidden">
          <MobileNav />
        </div>
      </div>
    </nav>
  );
}

const MobileNav = () => {
  return (
    <Sheet>
      <SheetTrigger className="text-white">
        <Menu />
      </SheetTrigger>
      <SheetContent className="w-96 h-full bg-foreground/5 backdrop-blur-md">
        <SheetHeader>
          <SheetTitle className="text-white">My Portfolio</SheetTitle>
          <SheetDescription className="mt-10">
            {sections.map(({ iconName, href, icon }) => (
              <Link className="text-white block py-2" href={href} key={href}>
                {iconName}
                {icon && createElement(icon, { className: "inline-block ml-2 size-4" })}
              </Link>
            ))}
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};