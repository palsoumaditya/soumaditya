"use client";
import Image from "next/image";
import { useEffect } from "react";

export default function About() {
  useEffect(() => {
    document.documentElement.classList.add("about-hide-scrollbar");
    document.body.classList.add("about-hide-scrollbar");
    return () => {
      document.documentElement.classList.remove("about-hide-scrollbar");
      document.body.classList.remove("about-hide-scrollbar");
    };
  }, []);
  return (
    <>
      <style>{`
        .about-no-scroll::-webkit-scrollbar { display: none; }
        .about-no-scroll { -ms-overflow-style: none; scrollbar-width: none; overflow: hidden !important; }
        html.about-hide-scrollbar, body.about-hide-scrollbar {
          scrollbar-width: thin;
          scrollbar-color: transparent transparent;
        }
        html.about-hide-scrollbar::-webkit-scrollbar, body.about-hide-scrollbar::-webkit-scrollbar {
          width: 0px;
          background: transparent;
        }
      `}</style>
      <section className="flex items-center justify-center w-full px-4 py-[2px] bg-white dark:bg-background">
        <div className="flex flex-row items-center justify-between w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 gap-8">
          {/* Left: Text Content */}
          <div className="flex-1 flex flex-col justify-center items-start text-center md:text-left">
            <span className="text-3xl md:text-4xl mb-2"></span>
            <span className="text-2xl md:text-3xl text-neutral-600 dark:text-neutral-400 mb-1 font-medium">Hi, I am</span>
            <h1 className="text-2xl md:text-4xl font-extrabold text-neutral-900 dark:text-white mb-2">Soumaditya Pal</h1>
            <span className="text-lg md:text-xl text-neutral-600 dark:text-neutral-400 mt-1">(that midnight coder)</span>
          </div>
          {/* Right: Profile Image */}
          <div className="flex-shrink-0 mt-6 md:mt-0">
            <div className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 rounded-full overflow-hidden bg-[#6C47FF] flex items-center justify-center">
              <Image
                src="/me/soumaditya.jpg"
                alt="Soumaditya Pal - Portfolio Profile"
                width={160}
                height={160}
                className="object-cover object-center w-full h-full rounded-full"
                priority
              />
            </div>
          </div>
        </div>
      </section>
      {/* Who Am I Section */}
      <section className="w-full flex justify-center px-4 bg-white dark:bg-background">
        <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-2">
          <h2 className="text-lg md:text-xl font-bold text-neutral-900 dark:text-white mb-2 flex items-center gap-2">
            <span>🚀</span> About me
          </h2>
          <div className="text-base md:text-lg text-neutral-900 dark:text-white space-y-0.5">
            <div>I’m a <span className="text-neutral-900 dark:text-white font-bold">21-year-old</span> night owl who loves building cool and useful things at 3:00 AM (because bugs fear the dark 🌙). Currently in my final year of <span className="text-neutral-900 dark:text-white font-bold">B.Tech in Computer Science & Engineering</span> at <span className="text-neutral-900 dark:text-white font-bold">NSHM Knowledge Campus, Durgapur</span> — and yes, balancing code and college like a pro.</div>
            <div>By day (and sometimes night), I’m a <span className="text-neutral-900 dark:text-white font-bold">Full Stack Developer Intern</span> at <span className="text-neutral-900 dark:text-white font-bold">Legal Care</span>, crafting scalable systems and shipping features that actually make sense.</div>
            <div>I don’t just build apps — I engineer experiences. Fluent in <span className="text-neutral-900 dark:text-white font-bold">React</span>, dreaming in <span className="text-neutral-900 dark:text-white font-bold">Next.js</span>, and taming <span className="text-neutral-900 dark:text-white font-bold">MongoDB</span>/<span className="text-neutral-900 dark:text-white font-bold">Postgres</span> like they owe me money.</div>
            <div>Obsessed with <span className="text-neutral-900 dark:text-white font-bold">AI</span> experiments, <span className="text-neutral-900 dark:text-white font-bold">Web3</span> rabbit holes, and <span className="text-neutral-900 dark:text-white font-bold">DevOps</span> magic (I’ll rant about <span className="text-neutral-900 dark:text-white font-bold">Docker</span> but still containerize your world).</div>
            <div>I write code that’s cleaner than your morning coffee, scale products without crying, and sprinkle just the right amount of memes to keep the commits flowing.</div>
            <div>When I’m not coding, you’ll find me breaking limits at <span className="text-neutral-900 dark:text-white font-bold">hackathons</span>, contributing to <span className="text-neutral-900 dark:text-white font-bold">tech communities</span>, and brainstorming the next big thing that can break the internet (but not in production 😎).</div>
          </div>
          <span className="text-base md:text-lg font-semibold text-yellow-600">⚡ If you’re a founder, CTO, or someone hunting for a builder who ships fast, breaks nothing, and vibes hard — you just found your guy.</span><br />
          <span className="text-base md:text-lg text-neutral-900 dark:text-white">Let’s build something wild together.</span>
        </div>
      </section>
    </>
  );
} 