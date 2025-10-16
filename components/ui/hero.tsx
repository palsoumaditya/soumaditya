"use client";
import Image from "next/image";

export default function Hero() {
  return (
    <section 
      id="home" 
      className="min-h-[calc(100vh-64px)] md:min-h-[calc(100vh-72px)] flex flex-col items-center justify-center w-full px-4 py-6 sm:py-8 bg-background"
    >
      {/* Profile Image at Top */}
      <div className="w-full flex justify-center mb-4">
        <div className="relative w-20 h-20 xs:w-24 xs:h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-36 lg:h-36 xl:w-40 xl:h-40">
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
      {/* Text Content */}
      <div className="w-full max-w-xs sm:max-w-md md:max-w-2xl flex flex-col items-center text-center px-2 sm:px-4">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-1 tracking-tight text-neutral-900 dark:text-white">
          Hey, I&apos;m <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/80">Soumaditya</span>
        </h1>
        <div className="text-sm sm:text-base md:text-lg text-neutral-900 dark:text-white font-medium mb-3">Full-stack Engineer</div>
        <p className="text-base sm:text-lg md:text-xl text-neutral-900 dark:text-white max-w-full sm:max-w-2xl mx-auto mb-4 sm:mb-5 leading-relaxed">
          <span className="font-bold text-neutral-900 dark:text-white"></span>Fluent in <span className="font-bold text-neutral-900 dark:text-white">React</span>, dreaming in <span className="font-bold text-neutral-900 dark:text-white">Next.js</span>, and wrangling <span className="font-bold text-neutral-900 dark:text-white">MongoDB/PostgreSQL</span> with minimal chaos. Currently working as a <span className="font-bold text-neutral-900 dark:text-white">Fullstack Developer Intern</span> at <span className="font-bold text-neutral-900 dark:text-white">Legal Care</span>. Into <span className="font-bold text-neutral-900 dark:text-white">AI</span>, <span className="font-bold text-neutral-900 dark:text-white">Web3</span>, and <span className="font-bold text-neutral-900 dark:text-white">DevOps</span> (yes, I rant about Docker). Clean code, good vibes, and better memes — let&apos;s build something wild.
        </p>
      </div>
      {/* Sticky Bottom Buttons for Mobile */}
      <div className="w-full flex flex-col gap-2 sm:flex-row sm:justify-center sm:items-center sm:gap-4 mt-0 mb-0 px-2">
        <a href="https://drive.google.com/file/d/1w-XV1nCAE1YiHqwZhNvO6Xwh0BYVAQCH/view?usp=drivesdk" download className="w-full sm:w-auto bg-white dark:bg-neutral-900 border border-neutral-300 dark:border-neutral-700 text-neutral-900 dark:text-white px-4 py-3 rounded-xl font-medium flex items-center justify-center gap-2 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition text-base sm:text-lg">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 16v-8m0 8l-3-3m3 3l3-3m-9 5.25V19a2.25 2.25 0 002.25 2.25h9A2.25 2.25 0 0021 19v-1.75M3 15.75V19a4.5 4.5 0 004.5 4.5h9a4.5 4.5 0 004.5-4.5v-3.25" />
          </svg>
          Resume
        </a>
        <a
          href="https://www.linkedin.com/in/soumaditya-pal-109029309/"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full sm:w-auto bg-white dark:bg-neutral-900 border border-neutral-300 dark:border-neutral-700 text-neutral-900 dark:text-white px-4 py-3 rounded-xl font-medium flex items-center justify-center gap-2 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition text-base sm:text-lg"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
            <rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" strokeWidth="1.5" />
            <path d="M7 17V10M7 7.5V7.51M12 17V13.5M12 13.5C12 12.1193 13.1193 11 14.5 11C15.8807 11 17 12.1193 17 13.5V17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <circle cx="7" cy="8" r="1" fill="currentColor" />
          </svg>
          Connect
        </a>
      </div>
    </section>
  );
}
