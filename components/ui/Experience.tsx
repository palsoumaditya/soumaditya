import React from "react";
import Image from "next/image";

const Experience: React.FC = () => {
  return (
    <section className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Top Divider and Section Label */}
      <div className="flex items-center justify-between mb-2">
        <div className="flex-1 border-t border-neutral-300 dark:border-neutral-700 mr-4" />
        <span className="text-xs tracking-widest text-neutral-700 dark:text-neutral-200 uppercase">Experience</span>
        <div className="flex-1 border-t border-neutral-300 dark:border-neutral-700 ml-4" />
      </div>
      {/* Experience Cards */}
      <div className="space-y-6">
        {/* Fableframe Experience Card */}
        <div className="flex items-center bg-white dark:bg-neutral-900 rounded-xl p-4 md:p-6 shadow-md">
          <Image
            src="/me/fableframe_dark_bg.png"
            alt="Fableframe Logo"
            width={64}
            height={64}
            className="w-16 h-16 rounded-lg object-contain bg-white dark:bg-neutral-800 p-2 mr-4"
          />
          <div>
            <div className="flex items-center gap-2">
              <a href="https://fableframe.in/" target="_blank" rel="noopener noreferrer" className="text-xl font-semibold text-neutral-900 dark:text-white hover:underline">Fableframe</a>
            </div>
            <div className="text-neutral-900 dark:text-white text-base md:text-lg">
              Co-Founder and Full Stack Developer - Remote
            </div>
            <div className="text-neutral-500 dark:text-neutral-300 text-sm mt-1">
              Sep 2025 - Present
            </div>
          </div>
        </div>

        {/* Legal Care Experience Card */}
        <div className="flex items-center bg-white dark:bg-neutral-900 rounded-xl p-4 md:p-6 shadow-md">
          <Image
            src="/me/LEGALCARE.png"
            alt="Legal Care Logo"
            width={64}
            height={64}
            className="w-16 h-16 rounded-lg object-contain bg-white dark:bg-neutral-800 p-2 mr-4"
          />
          <div>
            <div className="flex items-center gap-2">
              <a href="https://www.legalcare.io/" target="_blank" rel="noopener noreferrer" className="text-xl font-semibold text-neutral-900 dark:text-white hover:underline">Legal Care</a>
            </div>
            <div className="text-neutral-900 dark:text-white text-base md:text-lg">
              Full Stack Developer Intern - Remote
            </div>
            <div className="text-neutral-500 dark:text-neutral-300 text-sm mt-1">
              Jun-2025 - Sep-2025
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience; 