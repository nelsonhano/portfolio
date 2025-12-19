import Link from "next/link";
import { notFound } from "next/navigation";

import { post } from "@/lib/utils";
import { CardSpotlight } from "@/components/ui/card-spotlight";
import RequirementComp from "@/components/RequirementComp";
import ProjectCarousel from "@/components/ProjectCarousel";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;

  const project = post.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="mx-auto flex max-w-6xl flex-col gap-16 py-12 text-white">
      <div className="grid gap-10 md:grid-cols-2">
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

        <div className="relative">
          <ProjectCarousel 
            project={project}
          />
        </div>
      </div>

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

      <div className="space-y-6">
        <h2 className="text-2xl font-semibold">Project breakdown</h2>
        <div className="grid gap-4 md:grid-cols-3">
          <CardSpotlight className="h-full rounded-3xl bg-slate-950/80 p-4">
            <RequirementComp
              title="Project requirements"
              text={project.projectRequirement}
            />
          </CardSpotlight>
          <CardSpotlight className="h-full rounded-3xl bg-slate-950/80 p-4">
            <RequirementComp
              title="Core functionality"
              text={project.coreFunctionality}
            />
          </CardSpotlight>
          <CardSpotlight className="h-full rounded-3xl bg-slate-950/80 p-4">
            <RequirementComp
              title="Tech stack & roles"
              text={project.techStack}
            />
          </CardSpotlight>
        </div>
      </div>
    </div>
  );
}
