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

  // Tech stack data
  const techStackData = [
    { name: "React", url: "https://reactjs.org", color: "#61DAFB" },
    { name: "TypeScript", url: "https://www.typescriptlang.org", color: "#3178C6" },
    { name: "Next.js", url: "https://nextjs.org", color: "#000000" },
    { name: "Tailwind CSS", url: "https://tailwindcss.com", color: "#06B6D4" },
    { name: "Framer Motion", url: "https://www.framer.com/motion", color: "#0055FF" },
    { name: "Node.js", url: "https://nodejs.org", color: "#339933" },
    { name: "MongoDB", url: "https://www.mongodb.com", color: "#47A248" },
    { name: "Python", url: "https://www.python.org", color: "#3776AB" },
    { name: "TensorFlow", url: "https://www.tensorflow.org", color: "#FF6F00" },
    { name: "AWS", url: "https://aws.amazon.com", color: "#FF9900" },
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
            <NavbarButton variant="secondary">Sign In</NavbarButton>
            <NavbarButton>Get Started</NavbarButton>
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
          <MobileNavMenu isOpen={isOpen} onClose={() => setIsOpen(false)}>
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

      <main className="mt-16 flex min-h-screen flex-col items-center justify-center gap-0">
        <Hero />
        
        {/* About and TechStack side by side */}
        <div className="container mx-auto w-full -mt-24 sm:-mt-16 md:-mt-12 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10">
            {/* About Section */}
            <section id="about">
              <Terminal className="h-full border-black dark:border-white">
                <AnimatedSpan delay={100}>$ 💻 Tech-Obsessed Builder – I don't just code, I craft experiences that blend function with flair</AnimatedSpan>
                <TypingAnimation delay={800}>🔥 Side Project Machine – Always cooking up something new — from AI portals to simulation platforms.</TypingAnimation>
                <AnimatedSpan delay={2000}>$ 🎓 Founder of CodeNEST – Leading the tech charge on campus, empowering devs to build and grow.</AnimatedSpan>
                <TypingAnimation delay={2800}>🌐 Outreach Lead @ OSSDC – Bridging student devs with the open-source world, one collab at a time.</TypingAnimation>
                <AnimatedSpan delay={5000}>$ 🧠 Shipping Edu-Empower – An AI-powered scholarship portal making education more accessible & fair.</AnimatedSpan>
                <TypingAnimation delay={5800}>🪄 Sim-Fluence in Progress – Building agent-based AI simulations to predict content virality.</TypingAnimation>
                <TypingAnimation delay={7600}>🧩 Learning Addict – Currently mastering Three.js + pushing limits with AI/LLMs in social simulations.</TypingAnimation>
                <AnimatedSpan delay={9400}>$ 🚀 Community-First Mindset – Tech is cool, but impact matters. Always mentoring, hosting, and helping devs rise.</AnimatedSpan>
                <TypingAnimation delay={11200}>🧪 Experimenter at Heart – If it's new, bold, or untested — I'm probably already hacking on it.</TypingAnimation>
              </Terminal>
            </section>
            
            {/* Tech Stack Section */}
            <section id="tech-stack" className="h-full">
              <TechStack techStack={techStackData} />
            </section>
          </div>
        </div>
      </main>
    </>
  );
}
