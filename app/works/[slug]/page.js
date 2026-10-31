// import { notFound } from "next/navigation";
// import KineticGrid from "@/components/ui/kinetic-grid";
// import ProjectDetail from "@/components/ui/ProjectDetail";
// import { projects } from "@/lib/projects";

// export function generateStaticParams() {
//   return projects.map((p) => ({ slug: p.slug }));
// }

// export async function generateMetadata({ params }) {
//   const { slug } = await params;
//   const project = projects.find((p) => p.slug === slug);
//   if (!project) return {};
//   return {
//     title: `${project.title} | Anas Shaikh`,
//     description: project.description,
//   };
// }

// export default async function ProjectPage({ params }) {
//   const { slug } = await params;
//   const index = projects.findIndex((p) => p.slug === slug);
//   if (index === -1) notFound();

//   const project = projects[index];
//   const pick = ({ slug, title, number }) => ({ slug, title, number });
//   const prev = pick(projects[(index - 1 + projects.length) % projects.length]);
//   const next = pick(projects[(index + 1) % projects.length]);

//   return (
//     <KineticGrid>
//       <ProjectDetail project={project} prev={prev} next={next} total={projects.length} />
//     </KineticGrid>
//   );
// }













import { Suspense } from "react";
import { notFound } from "next/navigation";
import KineticGrid from "@/components/ui/kinetic-grid";
import ProjectDetail from "@/components/ui/ProjectDetail";
import { projects } from "@/lib/projects";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};
  return {
    title: `${project.title} | Anas Shaikh`,
    description: project.description,
  };
}

// Reads the slug inside its own Suspense boundary
async function ProjectContent({ params }) {
  const { slug } = await params;
  const index = projects.findIndex((p) => p.slug === slug);
  if (index === -1) notFound();

  const project = projects[index];
  const pick = ({ slug, title, number }) => ({ slug, title, number });
  const prev = pick(projects[(index - 1 + projects.length) % projects.length]);
  const next = pick(projects[(index + 1) % projects.length]);

  return (
    <ProjectDetail
      project={project}
      prev={prev}
      next={next}
      total={projects.length}
    />
  );
}

function ProjectFallback() {
  return (
    <div className="mx-auto flex min-h-[70vh] max-w-[1100px] items-center px-5 sm:px-8 lg:px-[4%]">
      <div className="flex items-center gap-4">
        <span className="h-[2px] w-10 bg-[#FF704D]" />
        <span className="font-mono text-sm tracking-[0.2em] text-white/60">
          LOADING PROJECT
        </span>
      </div>
    </div>
  );
}

export default function ProjectPage({ params }) {
  return (
    <KineticGrid>
      <Suspense fallback={<ProjectFallback />}>
        <ProjectContent params={params} />
      </Suspense>
    </KineticGrid>
  );
}