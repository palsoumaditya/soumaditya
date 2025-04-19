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

  return (
    <>
      <Navbar>
        {/* Desktop Navigation */}
        <NavBody>
          <NavbarLogo />
          <NavItems items={navItems} />
          <div className="relative z-20 flex items-center justify-end gap-2">
            <NavbarButton variant="secondary">Sign In</NavbarButton>
            <NavbarButton>Get Started</NavbarButton>
          </div>
        </NavBody>

        {/* Mobile Navigation */}
        <MobileNav>
          <MobileNavHeader>
            <NavbarLogo />
            <MobileNavToggle isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} />
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

      <main className="mt-16 flex min-h-screen flex-col items-center justify-center">
        <Hero />
        {/* Your other content here */}
      </main>
    </>
  );
}
