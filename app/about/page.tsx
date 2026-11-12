import Image from "next/image";
import React from "react";
import { Caveat, Inter } from "next/font/google";
import type { Metadata } from "next";

const caveat = Caveat({ subsets: ["latin"], weight: ["400", "700"] });
const inter = Inter({ subsets: ["latin"] }); 

export const metadata: Metadata = {
  title: "About Me",
  description: "Learn more about Soumaditya Pal, a Software Engineer specializing in backend development, distributed systems, and real-time applications.",
  alternates: {
    canonical: '/about',
  },
};

export default function About() {
  return (
    <section 
      id="about" 
      className={`${inter.className} w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 pb-32 md:pb-40 bg-background text-foreground transition-colors duration-300`}
    >
      {/* Section Header */}
      <div className="flex flex-col items-center mb-16 relative">
        <h2 className={`${caveat.className} text-3xl md:text-5xl text-primary tracking-tight`}>
          The Builder Story
        </h2>
        <svg width="140" height="12" viewBox="0 0 140 12" fill="none" className="text-primary/40 mt-1">
          <path d="M5 7C30 5 110 5 135 8" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeDasharray="1 2" />
        </svg>
      </div>

      <div className="relative">
        {/* Top Section: Circular Image and Side-by-Side Hero Header */}
        <div className="flex flex-col sm:flex-row items-center sm:items-center gap-8 sm:gap-10 md:gap-14">
          
          {/* Left: Round Profile Image */}
          <div className="relative group shrink-0">
            <div className="relative w-36 h-36 sm:w-44 sm:h-44 md:w-52 md:h-52 rounded-full overflow-hidden border-2 border-border bg-card shadow-xl z-10 transition-all duration-500 group-hover:border-primary/60">
              <Image
                src="/me/soumaditya.jpg"
                alt="Soumaditya Pal"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                priority
              />
            </div>
            {/* Subtle glow / circular accent behind image */}
            <div className="absolute -inset-1.5 rounded-full bg-gradient-to-tr from-primary/20 via-transparent to-primary/10 opacity-70 blur-sm group-hover:opacity-100 transition-opacity duration-500" />
          </div>

          {/* Right: Text Display Side by Side */}
          <div className="flex-1 text-center sm:text-left">
            <p className={`${caveat.className} text-xl sm:text-2xl text-primary mb-1`}>
              Software Engineer | Backend & Distributed Systems
            </p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight mb-3 text-foreground">
              Soumaditya Pal
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground font-medium leading-relaxed">
              Building reliable backend systems, distributed applications, and real-time experiences.
            </p>
          </div>
        </div>

        {/* Full-width Narrative & Journey Text Below */}
        <div className="mt-10 sm:mt-12 space-y-5 text-base md:text-lg leading-relaxed text-muted-foreground">
          <p>
            I am a Software Engineer specializing in <span className="text-foreground font-semibold">Backend Development, Distributed Systems, and Real-Time Applications</span>. I have professional experience building backend services with <span className="text-foreground font-semibold">Node.js and TypeScript</span>, most recently working as a Software Engineer Intern at <span className="text-foreground font-semibold">Emergence Mobility Technologies</span> and previously as a Full Stack Developer Intern at <span className="text-foreground font-semibold">Legal Care</span>.
          </p>
          <p>
            My engineering journey revolves around understanding how systems work behind the interface — from handling concurrent operations and asynchronous workloads to building applications that remain reliable under changing conditions.
          </p>
        </div>

        {/* Technical Deep Dive - Refined for Recruiters */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-10 bg-card/30 border border-border/40 p-8 md:p-12 rounded-[2.5rem] backdrop-blur-sm">
          <div className="space-y-4">
            <h3 className="text-foreground font-bold text-xl tracking-tight">Technical Philosophy</h3>
            <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
              I believe good software engineering goes beyond making things work. It is about building systems that remain <span className="text-foreground font-medium">reliable, scalable, and maintainable as complexity grows.</span>
            </p>
            <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
              My work spans <span className="text-foreground font-medium">Node.js, TypeScript, PostgreSQL, Redis, and Valkey</span>, with hands-on experience in background job processing using BullMQ, caching strategies, database connection pooling, and real-time communication using WebSockets and Server-Sent Events.
            </p>
            <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
              I focus on backend architecture, concurrency, state synchronization, and designing systems where performance and reliability are built into the foundation.
            </p>
          </div>
          
          <div className="space-y-4 md:border-l border-border/40 md:pl-10">
            <h3 className="text-foreground font-bold text-xl tracking-tight">Engineering Impact</h3>
            <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
              I enjoy solving problems that go beyond traditional CRUD applications.
            </p>
            <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
              From building <span className="text-foreground font-medium">FocusKaro</span>, a high-availability task monitoring system with heartbeat-based failure detection, to developing <span className="text-foreground font-medium">Lyner</span>, a distributed collaboration engine powered by CRDTs and event sourcing, I actively explore the engineering challenges behind distributed and real-time systems.
            </p>
            <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
              Whether it is handling concurrent operations, recovering failed background jobs, or synchronizing state across multiple clients, I aim to understand the problem at the system level before writing the solution.
            </p>
            <p className="text-primary font-bold text-sm md:text-base italic leading-relaxed pt-2">
              &quot;I don&apos;t just build features. I build the systems that make those features reliable.&quot;
            </p>
          </div>
        </div>

        {/* --- ANNOTATION: Bottom-Left with Hook Arrow --- */}
        <div className={`absolute -bottom-24 left-0 md:-left-8 ${caveat.className} text-indigo-500 -rotate-2 max-w-[280px] z-30 flex flex-col items-start`}>
           <div className="ml-10 mb-1">
            <svg width="60" height="40" viewBox="0 0 60 40" fill="none" className="stroke-indigo-500/60 stroke-[3]">
              <path d="M10,35 C10,15 40,5 45,12" strokeLinecap="round" />
              <path d="M42,5 L45,12 L38,15" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <p className="text-2xl md:text-3xl leading-tight font-bold text-left drop-shadow-md">
            Turning caffeine into <br/>scalable architectures
          </p>
        </div>
      </div>
    </section>
  );
}