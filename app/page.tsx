"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  User,
  Code2,
  Briefcase,
  // Github,
  Mail,
  Home,
  ExternalLink,
  ChevronRight,
  Layers,
  Cpu,
  Globe,
  Palette,
  // Twitter,
  // Linkedin,
  ArrowRight,
  ArrowLeft,
} from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";

// Mock Data untuk Slider
const projects = [
  {
    id: 1,
    title: "Elite SaaS Dashboard",
    category: "Concept / UI UX",
    year: "2024",
    img: "https://images.unsplash.com/photo-1551288049-bbda4833effb?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Crypto Wallet App",
    category: "Mobile Development",
    year: "2023",
    img: "https://images.unsplash.com/photo-1621761126064-fdd15243160e?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "AI Marketing Tools",
    category: "Web Application",
    year: "2024",
    img: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: 4,
    title: "Luxury Brand E-commerce",
    category: "Visual Design",
    year: "2023",
    img: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: 5,
    title: "Global Logistics Portal",
    category: "System Architecture",
    year: "2024",
    img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1000&auto=format&fit=crop",
  },
];

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("home");
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Monitor scroll untuk status active navbar
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "skills", "portfolio", "contact"];
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
    { id: "home", icon: <Home size={18} />, label: "Home" },
    { id: "about", icon: <User size={18} />, label: "About" },
    { id: "skills", icon: <Code2 size={18} />, label: "Skills" },
    { id: "portfolio", icon: <Briefcase size={18} />, label: "Work" },
    { id: "contact", icon: <Mail size={18} />, label: "Contact" },
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

  return (
    <div className="min-h-screen bg-[#020617] text-slate-200 font-sans selection:bg-indigo-500/30 selection:text-indigo-200 overflow-x-hidden">
      {/* Background Ornaments - Deep Blur & Soft Gradients */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[10%] -left-[10%] w-[50%] h-[50%] rounded-full bg-indigo-900/20 blur-[140px]" />
        <div className="absolute top-[20%] -right-[5%] w-[40%] h-[40%] rounded-full bg-purple-900/10 blur-[140px]" />
        <div className="absolute bottom-[-10%] left-[10%] w-[45%] h-[45%] rounded-full bg-blue-900/15 blur-[140px]" />
        <div className="absolute inset-0 bg-[url('https://transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.03] invert" />
      </div>

      {/* Modern Floating Navbar Dark Version */}
      <nav className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 px-4 w-full max-w-fit">
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="bg-slate-900/40 backdrop-blur-2xl border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] rounded-3xl p-2 flex items-center gap-1"
        >
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className={`relative flex items-center gap-2 px-4 py-3 rounded-2xl transition-all duration-300 group ${
                activeTab === item.id
                  ? "text-white"
                  : "text-slate-500 hover:text-slate-300"
              }`}
            >
              {activeTab === item.id && (
                <motion.div
                  layoutId="activeNav"
                  className="absolute inset-0 bg-white/10 rounded-2xl -z-10 border border-white/5"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              <span className="relative z-10">{item.icon}</span>
              <span
                className={`relative z-10 text-xs font-bold uppercase tracking-widest transition-all duration-300 ${
                  activeTab === item.id
                    ? "w-auto opacity-100 ml-1"
                    : "w-0 opacity-0 overflow-hidden"
                }`}
              >
                {item.label}
              </span>
            </button>
          ))}
          <div className="w-[1px] h-6 bg-white/10 mx-2 hidden md:block" />
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 text-slate-500 hover:text-white transition-colors hidden md:block"
          >
            {/* <Github size={20} /> */}
          </a>
        </motion.div>
      </nav>

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
              Open for Global Opportunities
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-6xl md:text-[7rem] font-black tracking-tighter text-white leading-none"
            >
              DESIGN <br />
              <span className="bg-gradient-to-r from-indigo-400 via-white to-purple-400 bg-clip-text text-transparent italic">
                EXCELLENCE.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed font-light"
            >
              Expert digital designer crafting immersive experiences through
              <span className="text-white font-medium">
                {" "}
                dark-themed aesthetics
              </span>{" "}
              and cutting-edge frontend technologies.
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
                Selected Works
                <ChevronRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </button>
              <button
                onClick={() => scrollTo("contact")}
                className="px-10 py-5 bg-transparent text-white border border-white/20 rounded-full font-black text-sm uppercase tracking-widest hover:bg-white/5 transition-all"
              >
                Get In Touch
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section - PNG Photo Integration */}
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
                {/* PNG PHOTO PLACEHOLDER - Abang ganti src nya dengan foto PNG Abang */}
                <img
                  src="foto.jpeg"
                  alt="Professional Avatar"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                  onError={(e) => {
                    e.currentTarget.src =
                      "https://via.placeholder.com/600x600/020617/FFFFFF?text=Photo+PNG";
                  }}
                />

                <div className="absolute bottom-10 left-10 right-10 p-6 bg-black/60 backdrop-blur-xl border border-white/10 rounded-2xl">
                  <p className="text-white font-bold">Based in Banjar, ID</p>
                  <p className="text-slate-400 text-sm italic">
                    Designing since 2019
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
                  The Vision
                </h2>
                <h3 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                  Elevating brands with high-fidelity design.
                </h3>
              </div>
              <p className="text-lg text-slate-400 leading-relaxed font-light">
                Saya percaya bahwa desain gelap bukan hanya soal estetika, tapi
                tentang kenyamanan dan fokus. Dengan mengombinasikan teknis
                coding yang kuat dan kepekaan visual, saya menciptakan produk
                digital yang tidak hanya berjalan, tapi juga bercerita
              </p>
              <div className="grid grid-cols-2 gap-10 pt-4">
                <div className="space-y-1">
                  <h4 className="text-3xl font-black text-white italic">40+</h4>
                  <p className="text-xs text-slate-500 uppercase tracking-widest font-bold">
                    Global Projects
                  </p>
                </div>
                <div className="space-y-1">
                  <h4 className="text-3xl font-black text-white italic">
                    100%
                  </h4>
                  <p className="text-xs text-slate-500 uppercase tracking-widest font-bold">
                    Success Rate
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section id="skills" className="py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-24 space-y-4">
            <h2 className="text-indigo-400 font-black text-sm tracking-[0.3em] uppercase">
              Abilities
            </h2>
            <h3 className="text-4xl md:text-5xl font-bold text-white">
              Technical Arsenal
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "UI/UX Design",
                desc: "High-end visual systems with focus on dark mode interfaces.",
                icon: <Palette className="text-indigo-400" />,
              },
              {
                title: "Frontend Engine",
                desc: "Clean Next.js architecture with high-performance animations.",
                icon: <Layers className="text-purple-400" />,
              },
              {
                title: "Global Scaling",
                desc: "Ensuring your project performs at peak on any device.",
                icon: <Globe className="text-emerald-400" />,
              },
            ].map((skill, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-10 bg-white/5 backdrop-blur-2xl rounded-[2.5rem] border border-white/10 hover:border-white/20 transition-all group relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-white/5 blur-2xl rounded-full -mr-10 -mt-10 group-hover:bg-indigo-500/10 transition-colors" />
                <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-8 border border-white/10 group-hover:scale-110 transition-transform">
                  {skill.icon}
                </div>
                <h4 className="text-xl font-bold text-white mb-4 italic">
                  {skill.title}
                </h4>
                <p className="text-slate-400 font-light leading-relaxed">
                  {skill.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section - Horizontal Slider Integration */}
      <section id="portfolio" className="py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
            <div className="space-y-4">
              <h2 className="text-indigo-400 font-black text-sm tracking-[0.3em] uppercase">
                Showcase
              </h2>
              <h3 className="text-4xl md:text-5xl font-bold text-white">
                Selected Works
              </h3>
            </div>
            <div className="flex gap-4">
              <button
                onClick={() => scrollSlider("left")}
                className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all"
              >
                <ArrowLeft size={20} />
              </button>
              <button
                onClick={() => scrollSlider("right")}
                className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all"
              >
                <ArrowRight size={20} />
              </button>
            </div>
          </div>

          <div
            ref={scrollContainerRef}
            className="flex gap-8 overflow-x-auto pb-10 scrollbar-hide snap-x snap-mandatory"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {projects.map((item) => (
              <motion.div
                key={item.id}
                className="min-w-full md:min-w-[500px] snap-center group relative"
              >
                <div className="relative overflow-hidden rounded-[3rem] bg-slate-900 border border-white/10 aspect-[16/10] mb-8">
                  {/* PNG PROJECT IMAGE */}
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                    onError={(e) => {
                      e.currentTarget.src =
                        "https://via.placeholder.com/800x500/020617/FFFFFF?text=Project+PNG";
                    }}
                  />

                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-sm">
                    <div className="w-16 h-16 rounded-full bg-white text-black flex items-center justify-center scale-0 group-hover:scale-100 transition-transform duration-500 shadow-[0_0_40px_rgba(255,255,255,0.3)] cursor-pointer">
                      <ExternalLink size={24} />
                    </div>
                  </div>
                </div>
                <div className="flex justify-between items-start px-4">
                  <div className="space-y-1">
                    <h4 className="text-2xl font-bold text-white group-hover:text-indigo-400 transition-colors italic">
                      {item.title}
                    </h4>
                    <p className="text-slate-500 font-medium">
                      {item.category}
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <span className="text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-full border border-white/10 bg-white/5 text-slate-300">
                      {item.year}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-16 md:p-24 bg-white/5 backdrop-blur-3xl rounded-[4rem] text-center space-y-12 relative overflow-hidden border border-white/10 shadow-[0_40px_100px_rgba(0,0,0,0.8)]"
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[150%] h-[150%] bg-indigo-600/10 blur-[120px] rounded-full pointer-events-none" />

            <div className="space-y-4">
              <h3 className="text-5xl md:text-7xl font-black text-white relative z-10 tracking-tighter leading-none">
                READY TO <br />{" "}
                <span className="text-indigo-400 italic">ELEVATE?</span>
              </h3>
              <p className="text-slate-400 text-lg relative z-10 max-w-md mx-auto font-light">
                Jangan ragu untuk berdiskusi tentang proyek besar Anda
                selanjutnya.
              </p>
            </div>

            <div className="flex flex-col items-center gap-8 relative z-10">
              <a
                href="mailto:contact@designer.com"
                className="inline-flex items-center gap-4 px-12 py-6 bg-white text-black rounded-full font-black uppercase tracking-[0.2em] text-sm hover:bg-slate-200 transition-all shadow-[0_0_50px_rgba(255,255,255,0.15)] group"
              >
                <Mail
                  size={20}
                  className="group-hover:rotate-12 transition-transform"
                />
                Work with me
              </a>

              <div className="flex gap-10 items-center">
                {/* <a href="#" className="text-slate-500 hover:text-white transition-all" aria-label="Github"><Github size={24} /></a>
                <a href="#" className="text-slate-500 hover:text-white transition-all" aria-label="Linkedin"><Linkedin size={24} /></a>
                <a href="#" className="text-slate-500 hover:text-white transition-all" aria-label="Twitter"><Twitter size={24} /></a> */}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 px-6 border-t border-white/5">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-white rounded-2xl flex items-center justify-center text-black font-black italic text-xl">
              P
            </div>
            <span className="font-black text-white tracking-widest text-lg uppercase italic">
              PORTFOLIO.
            </span>
          </div>
          <p className="text-slate-600 text-sm font-medium tracking-wide">
            © 2024 DESIGNED BY ELITE DEV. ALL RIGHTS RESERVED.
          </p>
          <div className="flex gap-8 text-[10px] font-black uppercase tracking-widest text-slate-500">
            <a href="#" className="hover:text-indigo-400 transition-colors">
              Dribbble
            </a>
            <a href="#" className="hover:text-indigo-400 transition-colors">
              Behance
            </a>
            <a href="#" className="hover:text-indigo-400 transition-colors">
              Instagram
            </a>
          </div>
        </div>
        <div className="h-28" />
      </footer>
    </div>
  );
};

export default App;
