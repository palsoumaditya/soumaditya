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
              className={`object-contain ${
                tech.name === "Express.js" || 
                tech.name === "Three.js" || 
                tech.name === "Prisma" || 
                tech.name === "GitHub" || 
                tech.name === "AWS" ||
                tech.name === "Prometheus" ||
                tech.name === "Loki" ||
                tech.name === "Grafana" ||
                tech.name === "GCP" ||
                tech.name === "Terraform" ||
                tech.name === "Jenkins"
                  ? "dark:invert" 
                  : ""
              }`}
            />
            {tech.name}
          </a>
        ))}
      </div>
    </section>
  );
};

// Example usage with the new technologies added
export const sampleTechStack: Tech[] = [
  // Existing technologies (add your current ones here)
  
  // New additions
  {
    name: "Prometheus",
    url: "https://prometheus.io/",
    color: "#E6522C",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prometheus/prometheus-original.svg"
  },
  {
    name: "Loki",
    url: "https://grafana.com/oss/loki/",
    color: "#F46800",
    logo: "https://grafana.com/static/assets/img/logos/grafana-loki.svg"
  },
  {
    name: "Grafana",
    url: "https://grafana.com/",
    color: "#F46800",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/grafana/grafana-original.svg"
  },
  {
    name: "AWS",
    url: "https://aws.amazon.com/",
    color: "#FF9900",
    logo: "https://cdn.worldvectorlogo.com/logos/aws-2.svg"
  },
  {
    name: "GCP",
    url: "https://cloud.google.com/",
    color: "#4285F4",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg"
  },
  {
    name: "Terraform",
    url: "https://www.terraform.io/",
    color: "#7C3DC1",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original.svg"
  },
  {
    name: "Jenkins",
    url: "https://www.jenkins.io/",
    color: "#D33833",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg"
  }
];

export default TechStack;