"use client";

import { useEffect, useMemo, useState } from "react";
import { Caveat } from "next/font/google";

import Hero from "@/components/ui/hero";
import Experience from "@/components/ui/Experience";
import Projects from "@/components/ui/Projects";
import TechStack from "@/components/ui/TechStack";
import Footer from "@/components/ui/Footer";

const caveat = Caveat({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function Home() {
  const [showIntro, setShowIntro] = useState(true);
  const [currentLanguage, setCurrentLanguage] = useState(0);

  const greetings = useMemo(
    () => [
      "নমস্কার",
      "नमस्ते",
      "வணக்கம்",
      "નમસ્તે",
      "నమస్కారం",
      "ನಮಸ್ಕಾರ",
      "നമസ്കാരം",
      "नमस्कार",
      "ਸਤ ਸ੍ਰੀ ਅকাল",
    ],
    []
  );

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    const run = (index: number) => {
      if (index < greetings.length) {
        setCurrentLanguage(index);
        // Fastened to 180ms for a snappier transition
        timeoutId = setTimeout(() => run(index + 1), 180);
      } else {
        // Reduced wait time to show content faster
        timeoutId = setTimeout(() => {
          setShowIntro(false);
        }, 300);
      }
    };

    run(0);

    return () => clearTimeout(timeoutId);
  }, [greetings]);

  // 🔥 INTRO LOADER
  if (showIntro) {
    return (
      <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-background">
        <div
          key={currentLanguage}
          className={`${caveat.className} text-6xl md:text-8xl font-bold text-primary animate-in fade-in zoom-in duration-200`}
        >
          {greetings[currentLanguage]}
        </div>

        <svg
          width="180"
          height="20"
          viewBox="0 0 140 12"
          fill="none"
          className="text-emerald-500 mt-6 opacity-70"
        >
          <path
            d="M5 7C30 5 110 5 135 8"
            stroke="currentColor"
            strokeWidth="4"
            strokeLinecap="round"
            strokeDasharray="1 2"
            className="animate-pulse"
          />
        </svg>

        <p
          className={`${caveat.className} mt-8 text-xl md:text-2xl text-emerald-500 opacity-60`}
        >
          Engineering thoughtful digital experiences
        </p>
      </div>
    );
  }

  // 🔥 NORMAL PAGE CONTENT
  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-start pt-8 overflow-x-hidden">
        <Hero />

        <div className="container mx-auto w-full max-w-4xl px-4 mt-20">
          <div className="flex flex-col gap-32">
            <Experience />
            <Projects />
            {/* Remember to pass your actual tech stack array here */}
            <TechStack techStack={[]} /> 
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}