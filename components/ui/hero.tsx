"use client";
import Image from "next/image";

export default function Hero() {
  return (
    <section 
      id="home" 
      className="relative min-h-[80vh] flex items-center justify-center w-full px-4 sm:px-6 lg:px-8 py-4 sm:py-6 md:py-8 overflow-hidden bg-background"
    >
      {/* Floating Badge (always visible, top left) */}
      {/* Remove the badge and the '~ Building internet products' section */}
      <div className="max-w-4xl mx-auto w-full flex flex-col md:flex-row items-center justify-between gap-8 sm:gap-10 lg:gap-12">
        {/* Profile Image on Left */}
        <div className="w-full sm:w-2/5 md:w-1/3 flex justify-center md:justify-start animate-fadeIn">
          <div className="relative w-28 h-28 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 xl:w-56 xl:h-56">
            {/* Animated glow effect */}
            <div className="absolute inset-2 rounded-full bg-gradient-to-br from-primary/30 to-transparent blur-md animate-pulse"></div>
            {/* Border ring */}
            <div className="absolute inset-0 rounded-full border-2 border-primary/30"></div>
            {/* Image container with padding to prevent cropping */}
            <div className="absolute inset-1 rounded-full overflow-hidden border border-primary/20 bg-gradient-to-br from-gray-100 to-white dark:from-gray-800 dark:to-gray-900">
              <div className="w-full h-full relative rounded-full overflow-hidden">
                <Image
                  src="/me/soumaditya.jpg"
                  alt="Soumaditya Pal - Portfolio Profile"
                  fill
                  className="object-cover object-center"
                  priority
                  sizes="(max-width: 640px) 7rem, (max-width: 768px) 8rem, (max-width: 1024px) 10rem, (max-width: 1280px) 12rem, 14rem"
                />
              </div>
            </div>
          </div>
        </div>
        {/* Text Content on Right */}
        <div className="w-full md:w-3/5 text-center md:text-left mt-6 md:mt-0 animate-fadeIn flex flex-col items-center md:items-start">
          <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold mb-1 sm:mb-2 tracking-tight flex items-center gap-2 whitespace-nowrap">
            Hey, I&apos;m <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/80">Soumaditya</span>
          </h1>
          <div className="text-base sm:text-lg md:text-xl text-neutral-300 font-medium mb-4">Full-stack Engineer</div>
          <p className="text-lg text-neutral-300 max-w-3xl mx-auto md:mx-0 mb-4 sm:mb-5 leading-relaxed">
            Fullstack dev fluent in <span className="font-bold text-white">React</span>, dreaming in <span className="font-bold text-white">Next.js</span>, and wrangling <span className="font-bold text-white">MongoDB/PostgreSQL</span> with minimal chaos. Currently working as a <span className="font-bold text-white">Fullstack Developer Intern</span> at <span className="font-bold text-white">Legal Care</span>. Into <span className="font-bold text-white">AI</span>, <span className="font-bold text-white">Web3</span>, and <span className="font-bold text-white">DevOps</span> (yes, I rant about Docker). Clean code, good vibes, and better memes — let&apos;s build something wild.
          </p>
          {/* Remove this badge section */}
          <div className="flex flex-row gap-3 justify-center md:justify-start mt-2">
            <a href="/Soumaditya_Resume.pdf" download className="bg-neutral-900 border border-neutral-700 text-white px-5 py-2 rounded-xl font-medium flex items-center gap-2 hover:bg-neutral-800 transition">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 16v-8m0 8l-3-3m3 3l3-3m-9 5.25V19a2.25 2.25 0 002.25 2.25h9A2.25 2.25 0 0021 19v-1.75M3 15.75V19a4.5 4.5 0 004.5 4.5h9a4.5 4.5 0 004.5-4.5v-3.25" />
              </svg>
              Resume
            </a>
            <a
              href="https://www.linkedin.com/in/soumaditya-pal-109029309/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-neutral-900 border border-neutral-700 text-white px-5 py-2 rounded-xl font-medium flex items-center gap-2 hover:bg-neutral-800 transition"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
                <rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" strokeWidth="1.5" />
                <path d="M7 17V10M7 7.5V7.51M12 17V13.5M12 13.5C12 12.1193 13.1193 11 14.5 11C15.8807 11 17 12.1193 17 13.5V17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="7" cy="8" r="1" fill="currentColor" />
              </svg>
              Connect
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
