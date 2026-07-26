"use client";

import React from "react";
import { motion } from "framer-motion";
import { Home, User, Code2, Briefcase, Mail } from "lucide-react";

// Custom GitHub Icon
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

// Translations
const translations = {
  en: {
    home: "Home",
    about: "About",
    skills: "Skills",
    github: "Activity",
    portfolio: "Work",
    contact: "Contact",
  },
  id: {
    home: "Beranda",
    about: "Tentang",
    skills: "Keahlian",
    github: "Aktivitas",
    portfolio: "Portofolio",
    contact: "Kontak",
  },
};

interface NavbarProps {
  activeTab: string;
  scrollTo: (id: string) => void;
  language: "en" | "id";
  setLanguage: (lang: "en" | "id") => void;
}

const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  scrollTo,
  language,
  setLanguage,
}) => {
  const t = translations[language];

  const navItems = [
    { id: "home", icon: <Home size={18} />, label: t.home },
    { id: "about", icon: <User size={18} />, label: t.about },
    { id: "skills", icon: <Code2 size={18} />, label: t.skills },
    { id: "github", icon: <GithubIcon size={18} />, label: t.github },
    { id: "portfolio", icon: <Briefcase size={18} />, label: t.portfolio },
    { id: "contact", icon: <Mail size={18} />, label: t.contact },
  ];

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 px-4 w-full max-w-fit">
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="bg-slate-900/40 backdrop-blur-2xl border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] rounded-3xl p-2 flex items-center gap-1"
      >
        {/* Navigation Items */}
        <div className="flex items-center gap-1">
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
        </div>

        {/* Divider */}
        <div className="w-px h-8 bg-white/10 mx-2" />

        {/* Language Toggle */}
        <div className="flex items-center bg-slate-800/50 rounded-full p-1">
          <button
            onClick={() => setLanguage("en")}
            className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
              language === "en"
                ? "bg-white text-slate-900 shadow-lg"
                : "text-slate-400 hover:text-white"
            }`}
          >
            EN
          </button>
          <button
            onClick={() => setLanguage("id")}
            className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
              language === "id"
                ? "bg-white text-slate-900 shadow-lg"
                : "text-slate-400 hover:text-white"
            }`}
          >
            ID
          </button>
        </div>
      </motion.div>
    </nav>
  );
};

export default Navbar;
