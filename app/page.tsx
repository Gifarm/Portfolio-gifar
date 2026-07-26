/* eslint-disable react-hooks/set-state-in-effect */
/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import "react-github-calendar/tooltips.css";
import { GitHubCalendar } from "react-github-calendar";

import {
  User,
  Code2,
  Briefcase,
  Mail,
  Home,
  ArrowUpRight,
  ChevronRight,
  Layers,
  Globe,
  Palette,
  ArrowRight,
  ArrowLeft,
  MapPin,
  Clock,
  Copy,
  Check,
  ArrowUp,
} from "lucide-react";
import { motion } from "framer-motion";
import { projects } from "@/lib/projects";
import { TechIcon, SOCIAL_ICONS } from "@/components/tech-icon";
import Navbar from "@/components/navbar";

// Tech stack shown in the Skills marquee — duplicated once in render for a seamless loop
const TECH_STACK = [
  "nextjs",
  "typescript",
  "tailwind",
  "laravel",
  "php",
  "mysql",
  "react",
  "figma",
  "git",
  "javascript",
];

// Translations
const translations = {
  en: {
    home: "Home",
    about: "About",
    skills: "Skills",
    github: "Activity",
    portfolio: "Work",
    contact: "Contact",
    openForOpportunities: "Open for Global Opportunities",
    designExcellence: "EXCELLENCE.",
    designDesc:
      "Expert digital designer crafting immersive experiences through",
    darkTheme: "dark-themed aesthetics",
    and: "and",
    cuttingEdge: "cutting-edge frontend technologies.",
    project: "Project",
    getInTouch: "Get In Touch",
    theVision: "The Vision",
    elevatingBrands: "Elevating brands with high-fidelity design.",
    aboutDesc:
      "I believe dark design is not just about aesthetics, but about comfort and focus. By combining strong coding skills and visual sensitivity, I create digital products that not only work, but also tell a story.",
    projects: "Projects",
    successRate: "Success Rate",
    uiuxDesign: "UI/UX Design",
    uiuxDesc: "High-end visual systems with focus on dark mode interfaces.",
    frontendEngine: "Frontend Engine",
    frontendDesc:
      "Clean Next.js architecture with high-performance animations.",
    globalScaling: "Global Scaling",
    globalDesc: "Ensuring your project performs at peak on any device.",
    consistency: "Consistency",
    devJourney: "Development Journey",
    githubDesc:
      "Transparency of the development process over the past year. Commitment to consistent code and automatic updates directly from GitHub.",
    autoUpdated: "Auto-updated from GitHub",
    viewProfile: "View Full Profile",
    portfolioTitle: "Project",
    seeDetails: "See Details",
    available: "Available for new projects",
    orderProject: "ORDER YOUR PROJECT?",
    contactDesc: "Don't hesitate to discuss your next big project.",
    email: "Email",
    location: "Location",
    responseTime: "Response Time",
    copied: "Copied!",
    workWithMe: "Work with me",
    navigate: "Navigate",
    footerDesc:
      "Frontend developer & digital designer, building elegant, fast, and comfortable interfaces — from Banjar for clients anywhere.",
    backToTop: "Back to top",
    basedIn: "Based in Banjar, ID",
    designingSince: "Designing since 2019",
    usuallyWithin: "Usually within 24 hours",
  },
  id: {
    home: "Beranda",
    about: "Tentang",
    skills: "Keahlian",
    github: "Aktivitas",
    portfolio: "Portofolio",
    contact: "Kontak",
    openForOpportunities: "Terbuka untuk Peluang Global",
    designExcellence: "KEUNGGULAN DESAIN.",
    designDesc:
      "Desainer digital ahli yang menciptakan pengalaman imersif melalui",
    darkTheme: "estetika tema gelap",
    and: "dan",
    cuttingEdge: "teknologi frontend terkini.",
    project: "Proyek",
    getInTouch: "Hubungi Saya",
    theVision: "Visi",
    elevatingBrands: "Meningkatkan brand dengan desain berkualitas tinggi.",
    aboutDesc:
      "Saya percaya bahwa desain gelap bukan hanya soal estetika, tapi tentang kenyamanan dan fokus. Dengan mengombinasikan teknis coding yang kuat dan kepekaan visual, saya menciptakan produk digital yang tidak hanya berjalan, tapi juga bercerita.",
    projects: "Proyek",
    successRate: "Tingkat Kesuksesan",
    uiuxDesign: "Desain UI/UX",
    uiuxDesc: "Sistem visual high-end dengan fokus pada antarmuka mode gelap.",
    frontendEngine: "Mesin Frontend",
    frontendDesc:
      "Arsitektur Next.js yang bersih dengan animasi berkinerja tinggi.",
    globalScaling: "Skala Global",
    globalDesc:
      "Memastikan proyek Anda berkinerja puncak di perangkat apa pun.",
    consistency: "Konsistensi",
    devJourney: "Perjalanan Pengembangan",
    githubDesc:
      "Transparansi proses pengembangan selama setahun terakhir. Komitmen kode yang konsisten dan pembaruan otomatis langsung dari GitHub.",
    autoUpdated: "Diperbarui otomatis dari GitHub",
    viewProfile: "Lihat Profil Lengkap",
    portfolioTitle: "Portofolio",
    seeDetails: "Lihat Detail",
    available: "Tersedia untuk proyek baru",
    orderProject: "PESAN PROYEK ANDA?",
    contactDesc:
      "Jangan ragu untuk berdiskusi tentang proyek besar Anda selanjutnya.",
    email: "Email",
    location: "Lokasi",
    responseTime: "Waktu Respon",
    copied: "Disalin!",
    workWithMe: "Kerja Sama",
    navigate: "Navigasi",
    footerDesc:
      "Frontend developer & desainer digital, membangun antarmuka yang elegan, cepat, dan nyaman dipakai — dari Banjar untuk klien di mana saja.",
    backToTop: "Kembali ke atas",
    basedIn: "Berbasis di Banjar, ID",
    designingSince: "Mendesain sejak 2019",
    usuallyWithin: "Biasanya dalam 24 jam",
  },
};

// --- Custom GitHub SVG Icon ---
const GithubIcon = ({
  size = 18,
  className = "",
}: {
  size?: number;
  className?: string;
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
);

const socialLinks = [
  {
    key: "instagram" as const,
    href: "https://instagram.com",
    label: "Instagram",
  },
  { key: "tiktok" as const, href: "https://tiktok.com", label: "Tiktok" },
  { key: "linkedin" as const, href: "https://linkedin.com", label: "Linkedin" },
  { key: "github" as const, href: "https://github.com", label: "Github" },
];

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("home");
  const [copied, setCopied] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isMounted, setIsMounted] = useState(false);
  const [language, setLanguage] = useState<"en" | "id">("en");

  const t = translations[language];

  useEffect(() => {
    setIsMounted(true);
  }, []);
  // <-- Fetch data GitHub secara otomatis
  useEffect(() => {
    const fetchGithubData = async () => {
      try {
        // GANTI 'fargifar' DENGAN USERNAME GITHUB ANDA
        const response = await fetch("https://api.github.com/users/Gifarm");
        if (response.ok) {
          const data = await response.json();
        }
      } catch (error) {
        console.error("Failed to fetch GitHub data", error);
      }
    };
    fetchGithubData();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      // <-- Ditambahkan "github" ke daftar section
      const sections = [
        "home",
        "about",
        "skills",
        "github",
        "portfolio",
        "contact",
      ];
      const scrollPos = window.scrollY + 100;

      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPos >= offsetTop && scrollPos < offsetTop + height) {
            setActiveTab(section);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: "home", icon: <Home size={18} />, label: t.home },
    { id: "about", icon: <User size={18} />, label: t.about },
    { id: "skills", icon: <Code2 size={18} />, label: t.skills },
    { id: "github", icon: <GithubIcon size={18} />, label: t.github },
    { id: "portfolio", icon: <Briefcase size={18} />, label: t.portfolio },
    { id: "contact", icon: <Mail size={18} />, label: t.contact },
  ];

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollSlider = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const { scrollLeft, clientWidth } = scrollContainerRef.current;
      const scrollToValue =
        direction === "left"
          ? scrollLeft - clientWidth
          : scrollLeft + clientWidth;
      scrollContainerRef.current.scrollTo({
        left: scrollToValue,
        behavior: "smooth",
      });
    }
  };

  const copyEmail = async () => {
    await navigator.clipboard.writeText("fargifar2007@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-[#020617] text-slate-200 font-sans selection:bg-indigo-500/30 selection:text-indigo-200 overflow-x-hidden">
      {/* Background Ornaments */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[10%] -left-[10%] w-[50%] h-[50%] rounded-full bg-indigo-900/20 blur-[140px]" />
        <div className="absolute top-[20%] -right-[5%] w-[40%] h-[40%] rounded-full bg-purple-900/10 blur-[140px]" />
        <div className="absolute bottom-[-10%] left-[10%] w-[45%] h-[45%] rounded-full bg-blue-900/15 blur-[140px]" />
      </div>
      {/* Top Navbar with Language Toggle */}
      <Navbar
        activeTab={activeTab}
        scrollTo={scrollTo}
        language={language}
        setLanguage={setLanguage}
      />{" "}
      {/* Hero Section */}
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center pt-20 px-6"
      >
        <div className="max-w-5xl w-full">
          <div className="text-center space-y-10">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md text-slate-300 text-xs font-bold tracking-widest uppercase"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              {t.openForOpportunities}
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-6xl md:text-[7rem] font-black tracking-tighter text-white leading-none"
            >
              DESIGN <br />
              <span className="bg-gradient-to-r from-indigo-400 via-white to-purple-400 bg-clip-text text-transparent italic">
                {t.designExcellence}
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed font-light"
            >
              {t.designDesc}
              <span className="text-white font-medium">
                {" "}
                {t.darkTheme}
              </span>{" "}
              {t.and} {t.cuttingEdge}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap items-center justify-center gap-5 pt-4"
            >
              <button
                onClick={() => scrollTo("portfolio")}
                className="group px-10 py-5 bg-white text-black rounded-full font-black text-sm uppercase tracking-widest flex items-center gap-2 hover:bg-slate-200 transition-all shadow-[0_0_30px_rgba(255,255,255,0.1)] hover:-translate-y-1"
              >
                {t.project}
                <ChevronRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </button>
              <button
                onClick={() => scrollTo("contact")}
                className="px-10 py-5 bg-transparent text-white border border-white/20 rounded-full font-black text-sm uppercase tracking-widest hover:bg-white/5 transition-all"
              >
                {t.getInTouch}
              </button>
            </motion.div>
          </div>
        </div>
      </section>
      {/* About Section */}
      <section id="about" className="py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative aspect-square"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500 to-purple-500 rounded-[3rem] blur-[60px] opacity-20" />
              <div className="relative h-full w-full rounded-[3rem] overflow-hidden border border-white/10 bg-slate-900 group">
                <img
                  src="/foto.jpeg"
                  alt="Professional Avatar"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                />
                <div className="absolute bottom-10 left-10 right-10 p-6 bg-black/60 backdrop-blur-xl border border-white/10 rounded-2xl">
                  <p className="text-white font-bold">{t.basedIn}</p>
                  <p className="text-slate-400 text-sm italic">
                    {t.designingSince}
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="space-y-4">
                <h2 className="text-indigo-400 font-black text-sm tracking-[0.3em] uppercase">
                  {t.theVision}
                </h2>
                <h3 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                  {t.elevatingBrands}
                </h3>
              </div>
              <p className="text-lg text-slate-400 leading-relaxed font-light">
                {t.aboutDesc}
              </p>
              <div className="grid grid-cols-2 gap-10 pt-4">
                <div className="space-y-1">
                  <h4 className="text-3xl font-black text-white italic">10+</h4>
                  <p className="text-xs text-slate-500 uppercase tracking-widest font-bold">
                    {t.projects}
                  </p>
                </div>
                <div className="space-y-1">
                  <h4 className="text-3xl font-black text-white italic">90%</h4>
                  <p className="text-xs text-slate-500 uppercase tracking-widest font-bold">
                    {t.successRate}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      <section id="skills" className="py-32 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Main Skills Grid - Asymmetric */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-px bg-white/10 mb-20">
            {/* Fullstack Development - Large */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="md:col-span-7 bg-[#020617] p-8 md:p-12 lg:p-16"
            >
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
                    {language === "id"
                      ? "Fullstack Development"
                      : "Fullstack Development"}
                  </h3>
                </div>
                <span className="text-slate-600 text-sm font-mono">
                  2019—Now
                </span>
              </div>
              <p className="text-slate-400 leading-relaxed mb-8 max-w-xl">
                {language === "id"
                  ? "Membangun aplikasi web end-to-end dari antarmuka yang responsif hingga arsitektur server yang scalable. Fokus pada React ecosystem dan modern backend."
                  : "Building end-to-end web applications from responsive interfaces to scalable server architecture. Focused on React ecosystem and modern backend."}
              </p>
              <div className="flex flex-wrap gap-3">
                {[
                  { name: "React", icon: "react" },
                  { name: "Next.js", icon: "nextjs" },
                  { name: "TypeScript", icon: "typescript" },
                  { name: "Node.js", icon: "nodejs" },
                  { name: "Laravel", icon: "laravel" },
                  { name: "PostgreSQL", icon: "postgresql" },
                  { name: "MySQL", icon: "mysql" },
                  { name: "Tailwind CSS", icon: "tailwind" },
                  { name: "Prisma", icon: "prisma" },
                  { name: "Git", icon: "git" },
                  { name: "Docker", icon: "docker" },
                  { name: "Redis", icon: "redis" },
                ].map((tech) => (
                  <div
                    key={tech.name}
                    className="flex items-center gap-2 px-3 py-2 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 transition-colors"
                  >
                    <TechIcon
                      name={tech.icon}
                      size={16}
                      className="text-slate-400"
                    />
                    <span className="text-xs text-slate-300">{tech.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* UI/UX Design */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="md:col-span-5 bg-[#020617] p-8 md:p-12"
            >
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
                    {language === "id" ? "UI/UX Design" : "UI/UX Design"}
                  </h3>
                </div>
                <span className="text-slate-600 text-sm font-mono">
                  2019—Now
                </span>
              </div>
              <p className="text-slate-400 leading-relaxed mb-8">
                {language === "id"
                  ? "Desain yang berpusat pada pengguna. Dari wireframe hingga high-fidelity prototype dengan fokus pada dark-themed aesthetics."
                  : "User-centered design. From wireframes to high-fidelity prototypes with focus on dark-themed aesthetics."}
              </p>
              <div className="flex flex-wrap gap-3">
                {[
                  { name: "Figma", icon: "figma" },
                  { name: "Prototyping", icon: "figma" },
                  { name: "Design System", icon: "figma" },
                  { name: "User Research", icon: "figma" },
                ].map((tech) => (
                  <div
                    key={tech.name}
                    className="flex items-center gap-2 px-3 py-2 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 transition-colors"
                  >
                    <TechIcon
                      name={tech.icon}
                      size={16}
                      className="text-slate-400"
                    />
                    <span className="text-xs text-slate-300">{tech.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      {/*  GITHUB ACTIVITY SECTION (UPDATED) 🌟 */}
      <section id="github" className="py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-indigo-400 font-black text-sm tracking-[0.3em] uppercase">
              {t.consistency}
            </h2>
            <h3 className="text-4xl md:text-5xl font-bold text-white">
              {t.devJourney}
            </h3>
            <p className="text-slate-400 max-w-2xl mx-auto font-light">
              {t.githubDesc}
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white/5 backdrop-blur-2xl rounded-[2.5rem] border border-white/10 p-6 md:p-10 relative overflow-hidden"
          >
            {/* Decorative glow */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/10 blur-[100px] rounded-full pointer-events-none" />

            {/* Stats Cards */}

            <div className="flex justify-center">
              {isMounted && (
                <GitHubCalendar
                  username="Gifarm"
                  year={new Date().getFullYear()} // <-- TAMBAHKAN BARIS INI
                  colorScheme="dark"
                  blockSize={14}
                  blockRadius={4}
                  blockMargin={5}
                  fontSize={14}
                  showWeekdayLabels={true}
                  theme={{
                    dark: [
                      "rgba(255, 255, 255, 0.06)",
                      "rgba(131, 173, 73, 0.4)",
                      "rgba(131, 173, 73, 0.6)",
                      "rgba(131, 173, 73, 0.8)",
                      "#83ad49",
                    ],
                  }}
                  labels={{
                    totalCount: "{{count}} contributions in the last year",
                    legend: {
                      less: "Less",
                      more: "More",
                    },
                  }}
                  style={{
                    marginBottom: "20px",
                  }}
                />
              )}
            </div>

            <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-medium">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                {t.autoUpdated}
              </div>
              <a
                href="https://github.com/Gifarm" // GANTI USERNAME DI SINI
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-indigo-400 hover:text-indigo-300 transition-colors group"
              >
                {t.viewProfile}
                <ArrowUpRight
                  size={12}
                  className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                />
              </a>
            </div>
          </motion.div>
        </div>
      </section>
      {/* Portfolio Section */}
      <section id="portfolio" className="py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-center mb-20 gap-8">
            <div className="space-y-4 text-center md:text-left">
              <h3 className="text-4xl md:text-5xl font-bold text-white">
                {t.portfolioTitle}
              </h3>
            </div>
          </div>

          <div
            ref={scrollContainerRef}
            className="flex gap-8 overflow-x-auto pb-10 scrollbar-hide snap-x snap-mandatory"
          >
            {projects.map((item) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="min-w-full md:min-w-[350px] snap-center group"
              >
                <Link href={`/project/${item.slug}`} className="block">
                  {/* Card Container */}
                  <div className="bg-white/5 border border-white/10 rounded-3xl overflow-hidden hover:bg-white/10 transition-all duration-500">
                    {/* Image Section */}
                    <div className="relative overflow-hidden aspect-[16/9]">
                      <img
                        src={item.img}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent opacity-60" />

                      {/* View Project Button */}
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="px-6 py-3 rounded-full bg-white text-black font-semibold text-sm flex items-center gap-2 shadow-lg transform scale-90 group-hover:scale-100 transition-transform">
                          Lihat Detail
                          <ArrowUpRight size={16} />
                        </div>
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className="p-8">
                      {/* Title & Category */}
                      <div className="mb-4">
                        <h4 className="text-2xl font-bold text-white mb-2 group-hover:text-indigo-400 transition-colors">
                          {item.title}
                        </h4>
                        {/* <p className="text-slate-400 text-sm">
                          {item.category}
                        </p> */}
                      </div>

                      {/* Description */}
                      <p className="text-slate-400 leading-relaxed mb-6 line-clamp-3">
                        {item.description}
                      </p>

                      {/* Tech Stack Badges */}
                      <div className="flex flex-wrap gap-2">
                        {item.stack.map((tech) => (
                          <div
                            key={tech}
                            className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
                          >
                            <TechIcon
                              name={tech}
                              size={14}
                              className="text-slate-400"
                            />
                            <span className="text-xs text-slate-300 font-medium capitalize">
                              {tech === "nextjs"
                                ? "Next.js"
                                : tech === "typescript"
                                  ? "TypeScript"
                                  : tech === "tailwind"
                                    ? "Tailwind"
                                    : tech === "postgresql"
                                      ? "PostgreSQL"
                                      : tech === "mysql"
                                        ? "MySQL"
                                        : tech === "laravel"
                                          ? "Laravel"
                                          : tech === "php"
                                            ? "PHP"
                                            : tech === "figma"
                                              ? "Figma"
                                              : tech === "git"
                                                ? "Git"
                                                : tech === "docker"
                                                  ? "Docker"
                                                  : tech === "prisma"
                                                    ? "Prisma"
                                                    : tech === "drizzle"
                                                      ? "Drizzle"
                                                      : tech === "redis"
                                                        ? "Redis"
                                                        : tech === "graphql"
                                                          ? "GraphQL"
                                                          : tech === "nodejs"
                                                            ? "Node.js"
                                                            : tech === "nestjs"
                                                              ? "NestJS"
                                                              : tech}
                            </span>
                          </div>
                        ))}
                      </div>

                      {/* Year Badge */}
                      <div className="mt-6 pt-6 border-t border-white/10 flex items-center justify-between">
                        <span className="text-xs text-slate-500 font-mono">
                          {item.year}
                        </span>
                        <span className="text-xs text-slate-500">
                          {item.role}
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* Footer */}
      <footer className="pt-24 pb-40 md:pb-32 px-6 border-t border-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-16">
            <div className="md:col-span-2 space-y-4">
              <p className="text-slate-400 font-light leading-relaxed max-w-sm">
                {t.footerDesc}
              </p>
              <div className="flex gap-3 pt-2">
                {socialLinks.map((social) => {
                  const Icon = SOCIAL_ICONS[social.key];
                  return (
                    <a
                      key={social.key}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className="w-10 h-10 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-slate-400 hover:text-white hover:border-white/30 transition-all"
                    >
                      <Icon size={16} />
                    </a>
                  );
                })}
              </div>
            </div>

            <div className="space-y-4">
              <p className="text-xs text-slate-500 uppercase tracking-widest font-bold">
                {t.navigate}
              </p>
              <div className="flex flex-col gap-3">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollTo(item.id)}
                    className="text-left text-slate-400 hover:text-indigo-400 transition-colors font-medium"
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <p className="text-xs text-slate-500 uppercase tracking-widest font-bold">
                Get in touch
              </p>
              <div className="flex flex-col gap-3 text-slate-400 font-medium">
                <a
                  href="mailto:fargifar2007@gmail.com"
                  className="hover:text-indigo-400 transition-colors"
                >
                  fargifar2007@gmail.com
                </a>
                <span>Banjar, West Java, ID</span>
                <button
                  onClick={() => scrollTo("home")}
                  className="inline-flex items-center gap-2 text-slate-500 hover:text-white transition-colors mt-2"
                >
                  <ArrowUp size={14} /> {t.backToTop}
                </button>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-center items-center gap-4">
            <p className="text-slate-600 text-sm font-medium tracking-wide text-center md:text-left">
              © 2026 DESIGNED BY M GIFAR. ALL RIGHTS RESERVED.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
