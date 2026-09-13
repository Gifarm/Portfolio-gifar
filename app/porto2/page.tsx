"use client";

import Navbar from "@/components/navbar";
import React, { useState, useEffect, useRef } from "react";
import { Home, User, Code2, Mail } from "lucide-react";

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
    designingSince: "Designing since 2024",
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
    designExcellence: "KEUNGGULAN.",
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
    designingSince: "Mendesain sejak 2024",
    usuallyWithin: "Biasanya dalam 24 jam",
  },
};

export default function Porto() {
  const [activeTab, setActiveTab] = useState<string>("home");
  const [copied, setCopied] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isMounted, setIsMounted] = useState(false);
  const [language, setLanguage] = useState<"en" | "id">("en");
  const t = translations[language];

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
    // { id: "github", icon: <GithubIcon size={18} />, label: t.github },
    // { id: "portfolio", icon: <Briefcase size={18} />, label: t.portfolio },
    { id: "contact", icon: <Mail size={18} />, label: t.contact },
  ];

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div>
      <Navbar
        asiveTab={activeTab}
        scrollTo={scrollTo}
        language={language}
        setLanguage={setLanguage}
      />{" "}
    </div>
  );
}
