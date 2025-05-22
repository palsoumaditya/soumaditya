"use client";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  MobileNavHeader,
  MobileNavMenu,
  MobileNavToggle,
  NavbarLogo,
  NavbarButton
} from "@/components/ui/resizable-navbar";
import Hero from "@/components/ui/hero";
import { AnimatedSpan, Terminal, TypingAnimation } from "@/components/ui/About";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import TechStack from "@/components/ui/TechStack";
import { useState } from "react";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    {
      name: "Home",
      link: "#home",
    },
    {
      name: "About",
      link: "#about",
    },
    {
      name: "Projects",
      link: "#projects",
    },
    {
      name: "Contact",
      link: "#contact",
    },
  ];

  // Tech stack data with logos
  const techStackData = [
    { name: "HTML", url: "https://developer.mozilla.org/en-US/docs/Web/HTML", color: "#E34F26", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
    { name: "CSS", url: "https://developer.mozilla.org/en-US/docs/Web/CSS", color: "#1572B6", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
    { name: "JavaScript", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript", color: "#F7DF1E", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { name: "React", url: "https://reactjs.org", color: "#61DAFB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "TypeScript", url: "https://www.typescriptlang.org", color: "#3178C6", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
    { name: "Next.js", url: "https://nextjs.org", color: "#000000", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
    { name: "Tailwind CSS", url: "https://tailwindcss.com", color: "#06B6D4", logo: "https://cdn.worldvectorlogo.com/logos/tailwind-css-2.svg" },
    { name: "Framer Motion", url: "https://www.framer.com/motion", color: "#0055FF", logo: "https://www.vectorlogo.zone/logos/framer/framer-icon.svg" },
    { name: "Redux", url: "https://redux.js.org", color: "#764ABC", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" },
    { name: "Node.js", url: "https://nodejs.org", color: "#339933", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
    { name: "Express.js", url: "https://expressjs.com", color: "#000000", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
    { name: "MongoDB", url: "https://www.mongodb.com", color: "#47A248", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
    { name: "PostgreSQL", url: "https://www.postgresql.org", color: "#336791", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
    { name: "Prisma", url: "https://www.prisma.io", color: "#2D3748", logo: "https://cdn.worldvectorlogo.com/logos/prisma-2.svg" },
    { name: "C++", url: "https://isocpp.org", color: "#00599C", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
    { name: "REST API", url: "https://restfulapi.net", color: "#FF6C37", logo: "https://www.svgrepo.com/show/375531/api.svg" },
    { name: "GitHub", url: "https://github.com", color: "#181717", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
    { name: "Docker", url: "https://www.docker.com", color: "#2496ED", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
    { name: "Three.js", url: "https://threejs.org", color: "#000000", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/threejs/threejs-original.svg" },
    { name: "AWS", url: "https://aws.amazon.com", color: "#FF9900", logo: "https://cdn.worldvectorlogo.com/logos/aws-2.svg" },
  ];

  return (
    <>
      <Navbar>
        {/* Desktop Navigation */}
        <NavBody>
          <NavbarLogo />
          <NavItems items={navItems} />
          <div className="relative z-20 flex items-center justify-end gap-2">
            <ThemeToggle />
          </div>
        </NavBody>

        {/* Mobile Navigation */}
        <MobileNav>
          <MobileNavHeader>
            <NavbarLogo />
            <div className="flex items-center gap-2">
              <ThemeToggle />
              <MobileNavToggle isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} />
            </div>
          </MobileNavHeader>
          <MobileNavMenu isOpen={isOpen}>
            {navItems.map((item, index) => (
              <a
                key={`mobile-nav-${index}`}
                href={item.link}
                className="w-full rounded-md px-3 py-2 text-sm hover:bg-neutral-100 dark:hover:bg-neutral-900"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <div className="mt-4 flex w-full flex-col gap-2">
              <NavbarButton variant="secondary" className="w-full">
                Sign In
              </NavbarButton>
              <NavbarButton className="w-full">Get Started</NavbarButton>
            </div>
          </MobileNavMenu>
        </MobileNav>
      </Navbar>

      <main className="mt-4 sm:mt-6 md:mt-8 flex min-h-screen flex-col items-center justify-center gap-0">
        <Hero />
        
        {/* About and TechStack side by side */}
        <div className="container mx-auto w-full mt-10 sm:mt-14 md:mt-16 lg:mt-16 px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-18">
            {/* About Section with its heading */}
            <div className="flex flex-col">
              {/* About Section Heading */}
              <div className="w-full text-center mb-6">
                <h2 className="luckiest-guy-regular text-2xl md:text-3xl text-black dark:text-white mb-2">Ctrl + Me: A Short Story</h2>
                <div className="w-full h-1 bg-primary rounded-full"></div>
              </div>
              
              <section id="about" className="h-full flex flex-col">
                <Terminal className="h-full border-black dark:border-white flex-1">
                  <AnimatedSpan delay={100}>$ 💻 Tech-Obsessed Builder – I don&apos;t just code, I craft experiences that blend function with flair</AnimatedSpan>
                  <TypingAnimation delay={800}>🔥 Side Project Machine – Always cooking up something new  — from AI portals to simulation platforms.</TypingAnimation>
                  <AnimatedSpan delay={2000}>$ 🎓 Founder of CodeNEST – Leading the tech charge on campus, empowering devs to build and grow.</AnimatedSpan>
                  <TypingAnimation delay={2800}>🌐 Outreach Lead @ OSSDC – Bridging student devs with the open-source world, one collab at a time.</TypingAnimation>
                  <AnimatedSpan delay={5000}>$ 🧠 Shipping Edu-Empower – An AI-powered scholarship portal making education more accessible &amp; fair.</AnimatedSpan>
                  <TypingAnimation delay={5800}>🪄 Sim-Fluence in Progress – Building agent-based AI simulations to predict content virality.</TypingAnimation>
                  <TypingAnimation delay={7600}>🧩 Learning Addict – Currently mastering Three.js + pushing limits with AI/LLMs in social simulations.</TypingAnimation>
                  <AnimatedSpan delay={9400}>$ 🚀 Community-First Mindset – Tech is cool, but impact matters. Always mentoring, hosting, and helping devs rise.</AnimatedSpan>
                  <TypingAnimation delay={11200}>🧪 Experimenter at Heart – If it&apos;s new, bold, or untested — I&apos;m probably already hacking on it.</TypingAnimation>
                </Terminal>
              </section>
            </div>
            
            {/* Tech Stack Section with its heading */}
            <div className="flex flex-col">
              {/* Tech Stack Heading */}
              <div className="w-full text-center mb-6">
                <h2 className="luckiest-guy-regular text-2xl md:text-3xl text-black dark:text-white mb-2">Tech Stack? More Like Snack Stack 🍟</h2>
                <div className="w-full h-1 bg-primary rounded-full"></div>
              </div>
              
              <section id="tech-stack" className="h-full flex flex-col">
                <TechStack techStack={techStackData} />
              </section>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
