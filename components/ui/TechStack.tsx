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
      <div className="flex items-center justify-between mb-8">
        <div className="flex-1 border-t border-neutral-700 dark:border-neutral-700 mr-4" />
        <span className="text-xs tracking-widest text-neutral-400 uppercase">Tech Stack</span>
        <div className="flex-1 border-t border-neutral-700 dark:border-neutral-700 ml-4" />
      </div>
      {/* Heading */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl md:text-3xl font-bold text-white">Tools I Use</h2>
      </div>
      {/* Tech Badges Row */}
      <div className="w-full flex flex-wrap gap-3 items-center justify-start bg-transparent py-2">
        {techStack.map((tech, index) => (
          <a
            key={index}
            target="_blank"
            rel="noopener noreferrer"
            href={tech.url}
            className="flex items-center gap-2 px-3 py-1 rounded-full border border-neutral-700 bg-neutral-900 text-white text-sm font-medium transition hover:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-primary/50"
          >
            <Image
              src={tech.logo}
              alt={`${tech.name} logo`}
              width={20}
              height={20}
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