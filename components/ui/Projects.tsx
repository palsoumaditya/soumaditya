"use client";
import React from "react";
import Image from "next/image";
import { Caveat } from "next/font/google";

const caveat = Caveat({ subsets: ["latin"], weight: ["400", "700"] });

const projects = [
  {
    title: "VideoSure",
    subtitle:
      "Human-in-the-loop platform translating natural language into deterministic FFmpeg transformations.",
    icon: "/me/VideoSure.png",
    link: "#",
  },
  {
    title: "Involve",
    subtitle: "Revolutionary on-demand local services platform connecting users with pros in under 10 mins.",
    icon: "/me/Involve.png",
    link: "#",
  },
  {
    title: "Edu-Empower",
    subtitle: "Comprehensive bridge platform connecting students with global educational funding resources.",
    icon: "/me/Edu-Empower.png",
    link: "/projects/edu-empower",
  },
];

const Projects: React.FC = () => {
  return (
    <section 
      id="projects" 
      className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 pb-32 md:pb-40 bg-background text-foreground transition-colors duration-300"
    >
      {/* Section Header - Matching your signature style */}
      <div className="flex flex-col items-center mb-16 relative">
        <h2 className={`${caveat.className} text-3xl md:text-5xl text-primary tracking-tight`}>
          Featured Works
        </h2>
        <svg width="140" height="12" viewBox="0 0 140 12" fill="none" className="text-primary/40 mt-1">
          <path d="M5 7C30 5 110 5 135 8" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeDasharray="1 2" />
        </svg>
      </div>

      <div className="relative">
        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project) => (
            <a
              key={project.title}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col bg-card border border-border/40 rounded-[2rem] p-6 shadow-sm hover:border-primary/30 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 z-10"
            >
              {/* Icon Container - Squircle style */}
              <div className="w-14 h-14 mb-5 flex items-center justify-center rounded-2xl bg-white shadow-inner border border-border/10 overflow-hidden p-2">
                <Image 
                   src={project.icon} 
                   alt={project.title} 
                   width={40} 
                   height={40} 
                   className="object-contain" 
                />
              </div>
              
              <h3 className="text-xl font-black tracking-tight mb-2 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                {project.subtitle}
              </p>
              
              {/* Subtle "View Project" link that appears on hover */}
              <div className="mt-auto pt-4 flex items-center text-xs font-bold uppercase tracking-widest text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                Explore Project <span>→</span>
              </div>
            </a>
          ))}
        </div>

        {/* --- HANDWRITTEN ANNOTATION: Bottom-Right pointing UP --- */}
        <div className={`absolute -bottom-24 right-2 md:right-0 ${caveat.className} text-emerald-500 rotate-[-1deg] max-w-[240px] z-30 flex flex-col items-end`}>
          <div className="mr-10">
            <svg width="60" height="45" viewBox="0 0 60 45" fill="none" className="stroke-emerald-500/60 stroke-[3]">
              {/* Curve pointing UP at the project grid */}
              <path d="M50,40 C50,20 20,10 12,18" strokeLinecap="round" />
              {/* Arrowhead (< style) */}
              <path d="M8,12 L12,18 L18,12" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          
          <p className="text-2xl md:text-3xl leading-tight font-bold text-right drop-shadow-md">
            Built for impact & <br/> user-centricity
          </p>
        </div>
      </div>
    </section>
  );
};

export default Projects;