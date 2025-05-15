"use client";
import Image from "next/image";

export default function Hero() {
  return (
    <section 
      id="home" 
      className="min-h-screen flex items-start pt-20 justify-center w-full px-4 sm:px-6 lg:px-8 pb-8 md:pb-12 lg:pb-16 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto w-full flex flex-col-reverse lg:flex-row items-center justify-between gap-2 sm:gap-3 lg:gap-4">
        {/* Text Content */}
        <div className="w-full lg:w-3/5 text-center lg:text-left mt-8 lg:mt-0 animate-fadeIn">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4 tracking-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/80">
              Soumaditya Pal
            </span>
          </h1>
          
          <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-lg mx-auto lg:mx-0 mb-6 sm:mb-8">
          I’m a Frontend Dev obsessed with React, Next.js, AI, and Web3!
On the hunt for an internship or placement! If you’re a Founder, CTO, Recruiter, or know someone who can help – let’s make magic happen! Want to know more about me? Scroll down the page!


          </p>
          
          <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
            <a
              href="#contact"
              className="px-5 py-2.5 sm:px-6 sm:py-3 bg-primary text-white font-medium rounded-md hover:bg-primary/90 transition-all duration-300 shadow-md hover:shadow-lg hover:translate-y-px focus:ring-2 focus:ring-primary/50 focus:outline-none"
              aria-label="Contact Soumaditya Pal"
            >
              Contact Me
            </a>
            <a
              href="#projects"
              className="px-5 py-2.5 sm:px-6 sm:py-3 bg-transparent border-2 border-primary text-primary font-medium rounded-md hover:bg-primary/10 transition-all duration-300 focus:ring-2 focus:ring-primary/30 focus:outline-none"
              aria-label="View Soumaditya's Projects"
            >
              View Projects
            </a>
          </div>
        </div>
        
        {/* Profile Image */}
        <div className="w-full lg:w-2/5 flex justify-center lg:justify-end animate-fadeIn">
          <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-80 lg:h-80">
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
                  sizes="(max-width: 640px) 192px, (max-width: 768px) 224px, (max-width: 1024px) 256px, 320px"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
