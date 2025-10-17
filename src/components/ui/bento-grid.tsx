import { cn } from "@/lib/utils";
import Github from "@/svg/Github";
import { LinkIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
import { BackgroundGradient } from "./background-gradient";
import ToolTip from "../ToolTip";
import { Button } from "./button";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: ReactNode;
}) => {
  return (
    <div
      className={cn(
        "mx-auto grid max-w-7xl grid-cols-1 gap-4 md:auto-rows-[18rem] md:grid-cols-2 lg:grid-cols-3",
        className,
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  slug,
  version,
  updatedAt,
  createdAt,
  longDesc,
  shortDesc,
  featuredImage,
  urlLive,
  repoUrl,
  videoUrl,
}: {
  className?: string;
  slug: string;
  version: string;
  updatedAt: string;
  createdAt: string;
  longDesc: string;
  shortDesc: string;
  featuredImage: string;
  urlLive: string;
  repoUrl: string;
  videoUrl: string;
  title: string;
}) => {
  return (
    <BackgroundGradient className="rounded-[22px] gap-4 p-4 bg-black dark:bg-zinc-900">
      <div
        className={cn(
          "group/bento shadow-input row-span-1 flex flex-col justify-between space-y-4 rounded-xl border p-4 transition duration-200 hover:shadow-xl",
          className
        )}
      >
        <div className="flex flex-col md:columns-2 w-full h-full">
          <div>
            <Image
              src={featuredImage}
              alt="project image"
              width={150}
              height={50}
              className="object-cover w-full rounded-2xl border-2 border-green-600/40 h-36"
            />
          </div>

          <div className="transition duration-200 group-hover/bento:translate-x-2">
            <div className="mt-2 mb-2 font-sans text-white">{title}</div>
            <div className="flex justify-between">
              <div className="flex gap-1 text-white">
                <Link href={urlLive}>
                  <ToolTip message="Github Repo">
                    <Github className="w-7 h-7 border-2 cursor-pointer border-white rounded-full p-1" />
                  </ToolTip>
                </Link>
                <Link href={repoUrl}>
                  <ToolTip message="Live Site">
                    <LinkIcon className="border-2 border-white cursor-pointer rounded-full p-1 w-7 h-7" />
                  </ToolTip>
                </Link>
              </div>

              <Button asChild className="font-sans">
                <Link href={`projects/${slug}`}>Details</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </BackgroundGradient>
  );
};
