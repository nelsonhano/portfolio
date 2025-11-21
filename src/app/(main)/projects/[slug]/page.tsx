import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { buildProjectOverviewItems, post } from "@/lib/utils";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { BackgroundGradient } from "@/components/ui/background-gradient";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

type Project = (typeof post)[number];

function getProjectBreakdown(project: Project) {
  switch (project.slug) {
    case "saas_web_application_1":
      return {
        requirements:
          "Build an AI-powered SaaS where users can upload images, apply intelligent transformations, and manage usage through a credit-based system.",
        functionality:
          "Supports secure authentication, image upload, history, profile management, and AI actions like restore or enhance, all in a responsive dashboard UI.",
        techStack:
          "Next.js & React render the dashboard and routes, Cloudinary (or similar) stores and transforms media, Tailwind CSS styles the UI, and a Node.js/TypeScript backend coordinates AI requests and credit logic.",
      };
    case "saas_web_application_2":
      return {
        requirements:
          "Provide a social platform where users can create accounts, post content, follow others, and engage via likes and comments.",
        functionality:
          "Implements authentication, user profiles, timelines, notifications, and an experience optimized for both mobile and desktop users.",
        techStack:
          "Next.js handles routing and data fetching, React renders interactive feeds, Tailwind CSS provides consistent styling, and a Node.js/TypeScript API persists users, posts, and relationships in a database like MongoDB or PostgreSQL.",
      };
    case "saas_web_application_3":
      return {
        requirements:
          "Create a job board where companies can publish roles and candidates can search, filter, and apply to jobs.",
        functionality:
          "Includes job creation and management, listing pages, search and filtering, and detailed job views with clear application calls-to-action.",
        techStack:
          "Next.js provides server-side rendering for SEO-friendly job listings, an ORM like Prisma or Drizzle manages relational job data, and PostgreSQL stores jobs, companies, and applications.",
      };
    case "saas_web_application_4":
      return {
        requirements:
          "Digitize library or hospital-style resource management: track items, members/users, borrowing, returns, and administration.",
        functionality:
          "Offers authentication for admins and members, catalog browsing, borrowing/return flows, dashboards for latest items, and admin controls.",
        techStack:
          "Next.js & React build the management interface, a Node.js/TypeScript backend enforces business rules, and a relational database like PostgreSQL keeps records of inventory, members, and transactions.",
      };
    case "saas_web_application_5":
      return {
        requirements:
          "Provide a secure file-storage SaaS where users can sign up, verify accounts, upload, organize, and delete files.",
        functionality:
          "Handles sign-up/sign-in with OTP verification, folder-style organization, renaming and deleting items, and detailed file views with previews.",
        techStack:
          "Next.js routes and server actions orchestrate uploads and file operations, UploadThing or blob storage persists files, and React, Tailwind CSS, and TypeScript deliver a polished, robust user experience.",
      };
    default:
      return {
        requirements:
          "Deliver a modern full-stack web application with clear business goals and user journeys.",
        functionality:
          "Implements auth, domain-specific actions, and fast, reliable access to data with a responsive UI.",
        techStack:
          "Next.js & React handle the frontend, a Node.js/TypeScript backend encapsulates business logic, and a database like PostgreSQL or MongoDB stores persistent data.",
      };
  }
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;

  const project = post.find((p) => p.slug === slug);
  // console.log(post.slug, slug);

  if (!project) {
    notFound();
  }

  const breakdown = getProjectBreakdown(project);

  return (
    <div className="mx-auto flex max-w-6xl flex-col gap-16 py-12 text-white">
      {/* 1. Description + images */}
      <div className="grid gap-10 md:grid-cols-2">
        {/* Left: project description */}
        <div className="space-y-4">
          <h1 className="text-3xl font-bold md:text-4xl">{project.title}</h1>
          <p className="text-sm text-slate-300">{project.shortDesc}</p>
          <p className="text-sm leading-relaxed text-slate-400">
            {project.longDesc}
          </p>
          <div className="mt-4 flex flex-wrap gap-4">
            <Link
              href={project.urlLive}
              target="_blank"
              className="rounded-full border border-emerald-500 px-4 py-2 text-sm font-medium hover:bg-emerald-500/10"
              >
              Live demo
            </Link>
            <Link
              href={project.repoUrl}
              target="_blank"
              className="rounded-full border border-slate-600 px-4 py-2 text-sm font-medium hover:bg-slate-800"
            >
              View source code
            </Link>
          </div>
        </div>

        {/* Right: image carousel */}
        <div className="relative">
          <Carousel className="w-full">
            <CarouselContent>
              {project.projectImgs.map((imgSrc, index) => (
                <CarouselItem key={index}>
                  <div className="overflow-hidden rounded-2xl border border-slate-700 bg-black/40">
                    <Image
                      src={imgSrc}
                      alt={`${project.title} screenshot ${index + 1}`}
                      width={1200}
                      height={500}
                      className="h-52 w-full object-fill md:h-96"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>

      {/* 2. Video section (optional) */}
      {project.projectVideo && project.projectVideo.length > 0 && (
        <div className="space-y-4 w-full">
          <h2 className="text-2xl font-semibold">Project demo</h2>
          <video
            src={project.projectVideo[0]}
            controls
            className="w-full  rounded-2xl border border-slate-700 bg-black"
          />
        </div>
      )}

      {/* 3. Requirements / functionality / tech stack */}
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold">Project breakdown</h2>
        <div className="grid gap-4 md:grid-cols-3">
          <BackgroundGradient className="h-full rounded-3xl bg-slate-950/80 p-4">
            <h3 className="mb-2 text-lg font-semibold">Project requirements</h3>
            <p className="text-sm text-slate-200">{breakdown.requirements}</p>
          </BackgroundGradient>
          <BackgroundGradient className="h-full rounded-3xl bg-slate-950/80 p-4">
            <h3 className="mb-2 text-lg font-semibold">Core functionality</h3>
            <p className="text-sm text-slate-200">{breakdown.functionality}</p>
          </BackgroundGradient>
          <BackgroundGradient className="h-full rounded-3xl bg-slate-950/80 p-4">
            <h3 className="mb-2 text-lg font-semibold">Tech stack & roles</h3>
            <p className="text-sm text-slate-200">{breakdown.techStack}</p>
          </BackgroundGradient>
        </div>
      </div>
    </div>
  );
}
