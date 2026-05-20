"use client";
import React from "react";
import Image from "next/image";
import { Caveat } from "next/font/google";

const caveat = Caveat({ subsets: ["latin"], weight: ["400", "700"] });

const experiences = [
  {
    company: "Emergence Mobility Technologies, Inc",
    role: "Software Engineer Intern",
    location: "Remote",
    period: "Mar 2026 - Present",
    image: "/me/emergencesoftware_logo.jpg",
    alt: "Emergence Mobility Technologies experience",
    details: [
      <>
        Developed{" "}
        <span className="text-foreground font-semibold">
          high-performance backend services
        </span>{" "}
        using Node.js and TypeScript, optimizing API response times through
        targeted architectural and code-level improvements.
      </>,
      <>
        Implemented{" "}
        <span className="text-foreground font-semibold">
          asynchronous job processing
        </span>{" "}
        and distributed task queues with BullMQ and Valkey to support higher
        concurrent user load.
      </>,
      <>
        Designed and built{" "}
        <span className="text-foreground font-semibold">
          Server-Sent Events (SSE) infrastructure
        </span>{" "}
        for real-time data streaming, eliminating polling overhead and
        improving client responsiveness.
      </>,
      <>
        Engineered{" "}
        <span className="text-foreground font-semibold">
          resilient background job pipelines
        </span>{" "}
        with retry logic, failure recovery, and state synchronization using
        BullMQ for reliable async workflows in production.
      </>,
      <>
        Optimized caching and connection management with{" "}
        <span className="text-foreground font-semibold">Valkey</span> and
        applied strong typing plus modular TypeScript architecture to improve
        maintainability.
      </>,
    ],
  },
  {
    company: "Legal Care",
    role: "Full Stack Developer Intern",
    location: "Remote",
    period: "Jun 2025 - Sep 2025",
    image: "/me/LEGALCARE.png",
    alt: "Legal Care experience",
    details: [
      <>
        Architected{" "}
        <span className="text-foreground font-semibold">
          high-performance UIs
        </span>{" "}
        with React.js, focusing on complex workflows.
      </>,
      <>
        Developed and optimized{" "}
        <span className="text-foreground font-semibold">
          Node.js/Express APIs
        </span>{" "}
        for platform utility.
      </>,
      <>
        Executed{" "}
        <span className="text-foreground font-semibold">
          performance tuning
        </span>{" "}
        and debugging to improve load times.
      </>,
      <>
        Enforced{" "}
        <span className="text-foreground font-semibold">
          clean code standards
        </span>{" "}
        through rigorous peer reviews.
      </>,
    ],
  },
];

const Experience: React.FC = () => {
  return (
    <section
      id="experience"
      className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-16 md:pb-24 bg-background text-foreground transition-colors duration-300"
    >
      <div className="flex flex-col items-center mb-16 relative">
        <h2
          className={`${caveat.className} text-3xl md:text-5xl text-primary tracking-tight`}
        >
          Professional Experience
        </h2>
        <svg
          width="160"
          height="12"
          viewBox="0 0 140 12"
          fill="none"
          className="text-primary/40 mt-1"
        >
          <path
            d="M5 7C30 5 110 5 135 8"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeDasharray="1 2"
          />
        </svg>
      </div>

      <div className="relative flex flex-col gap-8">
        {experiences.map((experience) => (
          <div
            key={experience.company}
            className="group relative flex flex-col md:flex-row items-start bg-card border border-border/40 rounded-3xl p-6 md:p-10 hover:border-primary/30 transition-all duration-300 shadow-xl"
          >
            <div className="relative w-16 h-16 md:w-20 md:h-20 flex-shrink-0 bg-white rounded-2xl overflow-hidden shadow-sm border border-border/10">
              <Image
                src={experience.image}
                alt={experience.alt}
                fill
                className="object-contain p-3"
              />
            </div>

            <div className="flex-1 md:ml-10 mt-6 md:mt-0">
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-3 mb-6">
                <div>
                  <h3 className="text-xl md:text-2xl font-black tracking-tight leading-tight">
                    {experience.company}
                  </h3>
                  <p className="text-primary font-bold text-sm md:text-base italic uppercase tracking-wider mt-2">
                    {experience.role}{" "}
                    <span className="text-muted-foreground font-normal normal-case ml-2">
                      - {experience.location}
                    </span>
                  </p>
                </div>
                <span
                  className={`text-base md:text-lg ${caveat.className} text-muted-foreground whitespace-nowrap`}
                >
                  {experience.period}
                </span>
              </div>

              <ul className="grid grid-cols-1 gap-4 text-sm md:text-base text-muted-foreground leading-relaxed">
                {experience.details.map((detail, index) => (
                  <li key={index} className="flex gap-3">
                    <span className="text-primary font-bold text-lg">
                      {String(index + 1).padStart(2, "0")}{" "}
                    </span>
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}

        <div
          className={`mt-2 ml-auto ${caveat.className} text-emerald-500 rotate-[-1deg] max-w-[260px] flex flex-col items-end`}
        >
          <div className="mr-10">
            <svg
              width="60"
              height="45"
              viewBox="0 0 60 45"
              fill="none"
              className="stroke-emerald-500/60 stroke-[3]"
            >
              <path d="M50,40 C50,20 20,10 12,18" strokeLinecap="round" />
              <path
                d="M8,12 L12,18 L18,12"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          <p className="text-2xl md:text-3xl leading-tight font-bold text-right drop-shadow-md">
            Shipping reliable products across frontend and backend
          </p>
        </div>
      </div>
    </section>
  );
};

export default Experience;
