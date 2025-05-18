"use client";
import Image from "next/image";
import { InteractiveHoverButton } from "@/components/ui/Button";

export default function Hero() {
  return (
    <section 
      id="home" 
      className="min-h-[80vh] flex items-center justify-center w-full px-4 sm:px-6 lg:px-8 py-4 sm:py-6 md:py-8 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto w-full flex flex-col-reverse md:flex-row items-center justify-between gap-8 sm:gap-10 lg:gap-12">
        {/* Text Content */}
        <div className="w-full md:w-3/5 text-center md:text-left mt-6 md:mt-0 animate-fadeIn">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-3 sm:mb-4 tracking-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/80">
              Soumaditya Pal
            </span>
          </h1>
          
          <p className="text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto md:mx-0 mb-4 sm:mb-5 leading-relaxed">
            I&apos;m a fullstack developer who speaks fluent React.js, dreams in Next.js, and has a love-hate relationship with MongoDB and PostgreSQL (mostly love, unless something breaks at 3AM). I build frontends that make users go &quot;wow&quot; and backends that don&apos;t crash... usually. When I&apos;m not wrangling components or debugging existential errors, you&apos;ll find me diving into AI, poking around Web3, or pretending to be a DevOps wizard while yelling at Docker.I&apos;m on the hunt for an internship or placement where I can turn caffeine into code and chaos into clean deployments. Got a startup idea that sounds borderline insane? Perfect. Want to collaborate on something weird and wonderful? Even better. If you&apos;re a founder, CTO, recruiter, or just someone who thinks code should be fun — let&apos;s talk. I promise I bring good code and great memes.
          </p>
          
          <div className="flex flex-row flex-wrap gap-2 sm:gap-3 justify-center md:justify-start mb-4">
            <InteractiveHoverButton 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="text-xs sm:text-sm py-1.5 px-2.5 sm:py-2 sm:px-3 md:py-2.5 md:px-4"
            >
              Contact Me
            </InteractiveHoverButton>
            <InteractiveHoverButton 
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="text-xs sm:text-sm py-1.5 px-2.5 sm:py-2 sm:px-3 md:py-2.5 md:px-4"
            >
              View Projects
            </InteractiveHoverButton>
          </div>
        </div>
        
        {/* Profile Image */}
        <div className="w-full sm:w-3/4 md:w-2/5 flex justify-center md:justify-end animate-fadeIn">
          <div className="relative w-36 h-36 sm:w-44 sm:h-44 md:w-52 md:h-52 lg:w-64 lg:h-64 xl:w-72 xl:h-72">
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
                  sizes="(max-width: 640px) 9rem, (max-width: 768px) 11rem, (max-width: 1024px) 13rem, (max-width: 1280px) 16rem, 18rem"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
