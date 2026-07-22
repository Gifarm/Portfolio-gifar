import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiLaravel,
  SiPhp,
  SiMysql,
  SiFigma,
  SiReact,
  SiGit,
  SiJavascript,
} from "react-icons/si";
import { FaInstagram, FaTiktok, FaLinkedin, FaGithub } from "react-icons/fa6";
import type { IconType } from "react-icons";

// Central map: one place to add a new stack logo, reused everywhere.
export const TECH_ICONS: Record<
  string,
  { icon: IconType; label: string; color: string }
> = {
  nextjs: { icon: SiNextdotjs, label: "Next.js", color: "#ffffff" },
  typescript: { icon: SiTypescript, label: "TypeScript", color: "#3178C6" },
  tailwind: { icon: SiTailwindcss, label: "Tailwind CSS", color: "#38BDF8" },
  laravel: { icon: SiLaravel, label: "Laravel", color: "#FF2D20" },
  php: { icon: SiPhp, label: "PHP", color: "#777BB4" },
  mysql: { icon: SiMysql, label: "MySQL", color: "#4479A1" },
  figma: { icon: SiFigma, label: "Figma", color: "#F24E1E" },
  react: { icon: SiReact, label: "React", color: "#61DAFB" },
  git: { icon: SiGit, label: "Git", color: "#F05032" },
  javascript: { icon: SiJavascript, label: "JavaScript", color: "#F7DF1E" },
};

export const SOCIAL_ICONS = {
  instagram: FaInstagram,
  tiktok: FaTiktok,
  linkedin: FaLinkedin,
  github: FaGithub,
};

export function TechIcon({
  name,
  size = 20,
  showLabel = false,
  className = "",
}: {
  name: string;
  size?: number;
  showLabel?: boolean;
  className?: string;
}) {
  const entry = TECH_ICONS[name];
  if (!entry) return null;
  const Icon = entry.icon;
  return (
    <span className={`inline-flex items-center gap-2 ${className}`}>
      <Icon size={size} style={{ color: entry.color }} />
      {showLabel && (
        <span className="text-xs font-bold uppercase tracking-widest text-slate-400">
          {entry.label}
        </span>
      )}
    </span>
  );
}
