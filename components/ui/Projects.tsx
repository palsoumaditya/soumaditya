import React from "react";
import Image from "next/image";

const projects = [
  {
    title: "Involve",
    subtitle: "Involve is a revolutionary on-demand local services platform that connects users with skilled professionals in under 10 minutes",
    icon: "/me/Involve.png",
    link: "#",
  },
  {
    title: "Edu-Empower",
    subtitle: "Edu-Empower is a comprehensive platform designed to bridge the gap between students and educational funding resources",
    icon: "/me/Edu-Empower.png",
    link: "/projects/edu-empower",
  },
];

const Projects: React.FC = () => {
  return (
    <section className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Top Divider and Section Label */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex-1 border-t border-neutral-700 dark:border-neutral-700 mr-4" />
        <span className="text-xs tracking-widest text-neutral-400 uppercase">Projects</span>
        <div className="flex-1 border-t border-neutral-700 dark:border-neutral-700 ml-4" />
      </div>
      {/* Projects Cards */}
      <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
        {projects.map((project) => (
          <a
            key={project.title}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-row items-center bg-neutral-900 rounded-xl p-4 md:p-6 shadow-md w-full md:w-1/2 hover:scale-[1.03] transition-transform duration-200"
          >
            <div className="flex-shrink-0 w-16 h-16 flex items-center justify-center rounded-lg mr-4 overflow-hidden bg-transparent p-0">
              <Image src={project.icon} alt={project.title + ' icon'} width={48} height={48} className="object-contain rounded" />
            </div>
            <div>
              <div className="text-white text-xl font-bold mb-1">{project.title}</div>
              <div className="text-neutral-300 text-base">{project.subtitle}</div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Projects; 