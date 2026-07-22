import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { projects, getProjectBySlug } from "@/lib/projects";
import { TechIcon } from "@/components/tech-icon";

// Pre-render one static page per project — cheap at build time, instant at runtime.
export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const project = getProjectBySlug(params.slug);
  if (!project) return {};
  return {
    title: `${project.title} — Case Study`,
    description: project.description,
  };
}

export default function ProjectDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const project = getProjectBySlug(params.slug);
  if (!project) notFound();

  const currentIndex = projects.findIndex((p) => p.slug === project.slug);
  const next = projects[(currentIndex + 1) % projects.length];

  return (
    <div className="min-h-screen bg-[#020617] text-slate-200">
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[10%] -left-[10%] w-[50%] h-[50%] rounded-full bg-indigo-900/20 blur-[140px]" />
        <div className="absolute bottom-[-10%] right-[-5%] w-[45%] h-[45%] rounded-full bg-purple-900/15 blur-[140px]" />
      </div>

      <div className="relative max-w-4xl mx-auto px-6 py-16 md:py-24">
        <Link
          href="/#portfolio"
          className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors font-bold text-xs uppercase tracking-widest mb-12"
        >
          <ArrowLeft size={16} /> Back to Portfolio
        </Link>

        <div className="flex flex-wrap items-center gap-3 mb-6">
          <span className="text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-full border border-white/10 bg-white/5 text-slate-300">
            {project.year}
          </span>
          <span className="text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-full border border-white/10 bg-white/5 text-slate-300">
            {project.category}
          </span>
        </div>

        <h1 className="text-4xl md:text-6xl font-black tracking-tighter text-white leading-none mb-4 italic">
          {project.title}
        </h1>
        <p className="text-lg text-slate-400 font-light mb-4">{project.role}</p>

        <div className="flex flex-wrap gap-3 mb-12">
          {project.stack.map((tech) => (
            <div
              key={tech}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10"
            >
              <TechIcon name={tech} size={16} showLabel />
            </div>
          ))}
        </div>

        <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-slate-900 aspect-[16/10] mb-16">
          <img
            src={project.img}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="grid md:grid-cols-2 gap-10 mb-16">
          <div className="p-8 rounded-[2rem] bg-white/5 border border-white/10 space-y-3">
            <h3 className="text-indigo-400 font-black text-xs tracking-[0.3em] uppercase">
              The Problem
            </h3>
            <p className="text-slate-300 font-light leading-relaxed">
              {project.problem}
            </p>
          </div>
          <div className="p-8 rounded-[2rem] bg-white/5 border border-white/10 space-y-3">
            <h3 className="text-purple-400 font-black text-xs tracking-[0.3em] uppercase">
              The Solution
            </h3>
            <p className="text-slate-300 font-light leading-relaxed">
              {project.solution}
            </p>
          </div>
        </div>

        <div className="mb-20">
          <h3 className="text-white font-bold text-2xl mb-6 italic">
            Highlights
          </h3>
          <div className="space-y-4">
            {project.highlights.map((point, i) => (
              <div key={i} className="flex items-start gap-4">
                <CheckCircle2
                  size={20}
                  className="text-emerald-400 shrink-0 mt-0.5"
                />
                <p className="text-slate-300 font-light leading-relaxed">
                  {point}
                </p>
              </div>
            ))}
          </div>
        </div>

        <Link
          href={`/project/${next.slug}`}
          className="group flex items-center justify-between p-8 rounded-[2rem] bg-white/5 border border-white/10 hover:border-white/20 transition-all"
        >
          <div>
            <p className="text-xs text-slate-500 uppercase tracking-widest font-bold mb-2">
              Next Project
            </p>
            <p className="text-2xl font-bold text-white group-hover:text-indigo-400 transition-colors italic">
              {next.title}
            </p>
          </div>
          <ArrowLeft
            size={24}
            className="text-slate-500 group-hover:text-white rotate-180 group-hover:translate-x-1 transition-all"
          />
        </Link>
      </div>
    </div>
  );
}
