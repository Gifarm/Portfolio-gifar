/* eslint-disable react-hooks/set-state-in-effect */
/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  ArrowLeft,
  ArrowUpRight,
  Clock,
  Code2,
  ExternalLink,
  Layers,
  User,
  ChevronRight,
  CheckCircle2,
} from "lucide-react";
import { TechIcon } from "@/components/tech-icon"; // Pastikan path ini sesuai dengan proyek Anda

// Data Proyek (Dalam aplikasi nyata, ini bisa diambil dari CMS atau database berdasarkan params.slug)
const projectData = {
  title: "Aura Stage & Rigging",
  category: "Company Profile & Web System",
  year: "2026",
  client: "Aura Production",
  role: "Lead Fullstack Developer & UI/UX Designer",
  duration: "3 Months",
  description:
    "Pengembangan website company profile dan sistem manajemen inventaris yang komprehensif untuk perusahaan yang bergerak di bidang sound system, rigging stage, dan lighting profesional. Fokus utama adalah menciptakan pengalaman digital yang mencerminkan kualitas premium, keandalan, dan estetika visual yang kuat.",
  challenge:
    "Tantangan utama adalah menampilkan katalog peralatan yang kompleks (sound, lighting, rigging) dengan cara yang visual, interaktif, dan mudah dinavigasi, sambil memastikan performa website tetap optimal dan loading cepat di berbagai perangkat.",
  solution:
    "Kami mengimplementasikan arsitektur Next.js yang dipadukan dengan animasi Framer Motion yang halus. Katalog dilengkapi dengan filter dinamis dan visualisasi high-fidelity. Backend dibangun menggunakan Laravel dan PostgreSQL untuk menangani manajemen inventaris peralatan stage yang skalabel dan aman.",
  techStack: [
    "nextjs",
    "laravel",
    "postgresql",
    "tailwind",
    "figma",
    "typescript",
  ],
  highlights: [
    "Desain UI/UX Dark Mode yang elegan dan mencerminkan industri event profesional.",
    "Sistem manajemen inventaris real-time untuk peralatan sound dan lighting.",
    "Optimasi SEO dan performa loading di bawah 2 detik.",
    "Responsif penuh untuk mobile, tablet, dan desktop.",
  ],
};

const ProjectDetailPage = () => {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <div className="min-h-screen bg-[#020617] text-slate-200 font-sans selection:bg-indigo-500/30 selection:text-indigo-200 overflow-x-hidden">
      {/* Background Ornaments (Konsisten dengan halaman utama) */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[10%] -left-[10%] w-[50%] h-[50%] rounded-full bg-indigo-900/20 blur-[140px]" />
        <div className="absolute top-[20%] -right-[5%] w-[40%] h-[40%] rounded-full bg-purple-900/10 blur-[140px]" />
        <div className="absolute bottom-[-10%] left-[10%] w-[45%] h-[45%] rounded-full bg-blue-900/15 blur-[140px]" />
      </div>

      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-emerald-500 origin-left z-50"
        style={{ scaleX: scrollYProgress }}
      />

      {/* Floating Back Button */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="fixed top-8 left-8 z-50"
      >
        <Link
          href="/#portfolio"
          className="group flex items-center gap-3 px-5 py-3 rounded-full bg-slate-900/60 backdrop-blur-xl border border-white/10 text-slate-300 hover:text-white hover:border-white/30 transition-all shadow-lg"
        >
          <ArrowLeft
            size={18}
            className="group-hover:-translate-x-1 transition-transform"
          />
        </Link>
      </motion.div>

      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex flex-col justify-end pb-20 px-6 pt-32">
        <div className="max-w-6xl mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8"
          >
            <div className="flex flex-wrap items-center gap-4 text-xs font-bold uppercase tracking-widest text-indigo-400">
              <span className="px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20">
                {projectData.category}
              </span>
              <span className="text-slate-500">{projectData.year}</span>
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white tracking-tighter leading-[0.9]">
              {projectData.title.split(" ").map((word, i) => (
                <span key={i} className="block">
                  {i === 1 ? (
                    <span className="bg-gradient-to-r from-indigo-400 via-white to-purple-400 bg-clip-text text-transparent italic">
                      {word}
                    </span>
                  ) : (
                    word
                  )}
                </span>
              ))}
            </h1>

            <p className="text-lg md:text-xl text-slate-400 max-w-2xl leading-relaxed font-light">
              {projectData.description}
            </p>
          </motion.div>

          {/* Hero Image / Video Placeholder */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mt-16 relative group"
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-[3rem] blur-2xl opacity-50 group-hover:opacity-70 transition-opacity duration-700" />
            <div className="relative rounded-[2.5rem] overflow-hidden border border-white/10 bg-slate-900 aspect-[16/9] md:aspect-[21/9]">
              {/* GANTI src DI BAWAH INI DENGAN GAMBAR PROYEK ANDA YANG SEBENARNYA */}
              <img
                src="https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?q=80&w=2070&auto=format&fit=crop"
                alt="Project Hero"
                className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-1000 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Project Meta & Overview */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-12 gap-12 lg:gap-20">
            {/* Sidebar Meta */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="md:col-span-4 space-y-10"
            >
              <div>
                <h3 className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-6">
                  Project Details
                </h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <User className="text-indigo-400 mt-1 shrink-0" size={18} />
                    <div>
                      <p className="text-xs text-slate-500 uppercase tracking-widest font-bold mb-1">
                        Client
                      </p>
                      <p className="text-white font-medium">
                        {projectData.client}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Layers
                      className="text-purple-400 mt-1 shrink-0"
                      size={18}
                    />
                    <div>
                      <p className="text-xs text-slate-500 uppercase tracking-widest font-bold mb-1">
                        Role
                      </p>
                      <p className="text-white font-medium">
                        {projectData.role}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Clock
                      className="text-emerald-400 mt-1 shrink-0"
                      size={18}
                    />
                    <div>
                      <p className="text-xs text-slate-500 uppercase tracking-widest font-bold mb-1">
                        Duration
                      </p>
                      <p className="text-white font-medium">
                        {projectData.duration}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-6">
                  Tech Stack
                </h3>
                <div className="flex flex-wrap gap-3">
                  {projectData.techStack.map((tech) => (
                    <div
                      key={tech}
                      className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 hover:border-white/20 transition-colors"
                    >
                      <TechIcon name={tech} size={16} />
                      <span className="text-xs font-bold uppercase tracking-wider text-slate-300">
                        {tech}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <a
                href="#"
                className="flex items-center justify-center gap-2 w-full py-4 rounded-2xl bg-white text-black font-black text-sm uppercase tracking-widest hover:bg-slate-200 transition-all group"
              >
                Visit Live Site
                <ExternalLink
                  size={16}
                  className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                />
              </a>
            </motion.div>

            {/* Main Content */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="md:col-span-8 space-y-16"
            >
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold text-white">
                  The Challenge
                </h2>
                <p className="text-lg text-slate-400 leading-relaxed font-light">
                  {projectData.challenge}
                </p>
              </div>

              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold text-white">
                  The Solution
                </h2>
                <p className="text-lg text-slate-400 leading-relaxed font-light">
                  {projectData.solution}
                </p>
              </div>

              <div className="p-8 md:p-10 rounded-[2.5rem] bg-white/5 border border-white/10 backdrop-blur-xl">
                <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                  <CheckCircle2 className="text-emerald-400" size={24} />
                  Key Highlights & Results
                </h3>
                <ul className="grid md:grid-cols-2 gap-4">
                  {projectData.highlights.map((highlight, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-slate-300 font-light"
                    >
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-indigo-400 shrink-0" />
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Visual Showcase */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Visual Showcase
            </h2>
            <p className="text-slate-400 max-w-xl mx-auto font-light">
              Eksplorasi detail antarmuka dan implementasi desain pada berbagai
              halaman.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Large Featured Image */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="md:col-span-2 group relative rounded-[2.5rem] overflow-hidden border border-white/10 bg-slate-900 aspect-[16/9]"
            >
              {/* GANTI DENGAN GAMBAR DASHBOARD / HALAMAN UTAMA WEBSITE */}
              <img
                src="https://images.unsplash.com/photo-1514525253440-b393452e8d26?q=80&w=2070&auto=format&fit=crop"
                alt="Showcase 1"
                className="w-full h-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#020617]/80 to-transparent" />
              <div className="absolute bottom-8 left-8">
                <p className="text-xs font-bold uppercase tracking-widest text-indigo-400 mb-2">
                  Dashboard
                </p>
                <p className="text-xl font-bold text-white">
                  Sistem Manajemen Inventaris
                </p>
              </div>
            </motion.div>

            {/* Smaller Images */}
            {[
              {
                src: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=2070&auto=format&fit=crop",
                label: "Mobile View",
                title: "Responsif & Interaktif",
              },
              {
                src: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=2012&auto=format&fit=crop",
                label: "UI Components",
                title: "Katalog Lighting & Sound",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative rounded-[2.5rem] overflow-hidden border border-white/10 bg-slate-900 aspect-[4/3]"
              >
                {/* GANTI DENGAN GAMBAR DETAIL LAINNYA */}
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-full h-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#020617]/80 to-transparent" />
                <div className="absolute bottom-8 left-8">
                  <p className="text-xs font-bold uppercase tracking-widest text-purple-400 mb-2">
                    {item.label}
                  </p>
                  <p className="text-xl font-bold text-white">{item.title}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Next Project Navigation */}
      <section className="py-24 px-6 border-t border-white/5">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row items-center justify-between gap-8 p-10 rounded-[3rem] bg-white/5 border border-white/10 hover:border-white/20 transition-all group cursor-pointer"
          >
            <div className="text-center md:text-left">
              <p className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">
                Next Project
              </p>
              <h3 className="text-3xl md:text-4xl font-bold text-white group-hover:text-indigo-400 transition-colors italic">
                E-Commerce Platform
              </h3>
              <p className="text-slate-400 mt-2 font-light">
                Web Development / UI Design
              </p>
            </div>
            <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-indigo-500 group-hover:scale-110 transition-all duration-300">
              <ArrowUpRight
                size={24}
                className="text-white group-hover:rotate-45 transition-transform duration-300"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-32 px-6">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-none">
            PUNYA IDE PROYEK <br />
            <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent italic">
              SERUPA?
            </span>
          </h2>
          <p className="text-slate-400 text-lg max-w-lg mx-auto font-light">
            Mari diskusikan bagaimana kita bisa mewujudkan visi digital Anda
            dengan teknologi terbaik.
          </p>
          <Link
            href="/#contact"
            className="inline-flex items-center gap-3 px-10 py-5 bg-white text-black rounded-full font-black text-sm uppercase tracking-widest hover:bg-slate-200 transition-all shadow-[0_0_30px_rgba(255,255,255,0.1)] hover:-translate-y-1"
          >
            Mulai Diskusi
            <ChevronRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ProjectDetailPage;
