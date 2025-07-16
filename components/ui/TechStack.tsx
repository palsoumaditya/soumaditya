'use client'
import Image from 'next/image';
import React from 'react';

interface Tech {
  name: string;
  url: string;
  color: string;
  logo: string;
}

interface TechStackProps {
  techStack: Tech[];
}

const TechStack: React.FC<TechStackProps> = ({ techStack }) => {

  return (
    <section className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Top Divider and Section Label */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex-1 border-t border-neutral-300 dark:border-neutral-700 mr-4" />
        <span className="text-xs tracking-widest text-neutral-900 dark:text-white uppercase">Tech Stack</span>
        <div className="flex-1 border-t border-neutral-300 dark:border-neutral-700 ml-4" />
      </div>
      
      {/* Tech Badges Row */}
      <div className="w-full flex flex-wrap gap-2 sm:gap-3 md:gap-4 items-center justify-center sm:justify-start bg-transparent py-1 sm:py-2">
        {techStack.map((tech, index) => (
          <a
            key={index}
            target="_blank"
            rel="noopener noreferrer"
            href={tech.url}
            className="flex items-center gap-2 sm:gap-3 px-2 sm:px-3 py-0.5 sm:py-1 rounded-full border border-neutral-300 dark:border-neutral-700 bg-neutral-100 dark:bg-neutral-900 text-neutral-900 dark:text-white text-xs sm:text-sm font-medium transition hover:bg-neutral-200 dark:hover:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-primary/50"
          >
            <Image
              src={tech.logo}
              alt={`${tech.name} logo`}
              width={18}
              height={18}
              className={`object-contain ${tech.name === "Express.js" || tech.name === "Three.js" || tech.name === "Prisma" || tech.name === "GitHub" || tech.name === "AWS" ? "dark:invert" : ""}`}
            />
            {tech.name}
          </a>
        ))}
      </div>
    </section>
  );
};

export default TechStack;