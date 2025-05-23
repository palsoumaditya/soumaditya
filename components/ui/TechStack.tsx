'use client'
import Image from 'next/image';
import React, { useState } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { useTheme } from '@/components/theme-provider';

interface Tech {
  name: string;
  url: string;
  color: string;
  logo: string;
}

interface TechStackProps {
  techStack: Tech[];
}

const TechStack: React.FC<TechStackProps> = ({ techStack }) => {
  const { theme } = useTheme();
  const [isHovered, setIsHovered] = useState(false);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const lightSize = 80; 

  const lightX = useTransform(x, (value) => value - lightSize / 2);
  const lightY = useTransform(y, (value) => value - lightSize / 2);

  const handleMouseMove = (event: React.MouseEvent) => {
    const rect = event.currentTarget.getBoundingClientRect();
    x.set(event.clientX - rect.left);
    y.set(event.clientY - rect.top);
  };

  return (
    <div className='flex flex-col justify-center items-center h-full'>
      {/* Remove both heading sections - delete these lines */}
      {/* <div className="w-full text-center mb-4 block lg:hidden">
        <h2 className="luckiest-guy-regular text-2xl md:text-3xl text-black dark:text-white mb-2">Tech Stack? More Like Snack Stack 🍟</h2>
        <div className="w-full h-1 bg-primary rounded-full"></div>
      </div>
      
      <div className="w-full text-center mb-4 hidden lg:block">
        <h2 className="luckiest-guy-regular text-2xl md:text-3xl text-black dark:text-white mb-2">Tech Stack? More Like Snack Stack 🍟</h2>
        <div className="w-full h-1 bg-primary rounded-full"></div>
      </div> */}
      
      <div
        className="relative overflow-hidden w-full rounded-lg shadow-lg bg-white dark:bg-black/50 border border-black dark:border-white flex-1"
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Image
          src="https://images.unsplash.com/photo-1695883701435-7bd88f796e05?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDQ4NHxDRHd1d1hKQWJFd3x8ZW58MHx8fHx8"
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover filter blur-3xl opacity-10 dark:opacity-20"
          width={96}
          height={96}
        />
        
        <div className="absolute inset-0 bg-white/80 dark:bg-black/50 rounded-lg border border-zinc-200 dark:border-zinc-800 backdrop-blur-xl"></div>
        
        {isHovered && (
          <motion.div
            className="absolute rounded-full pointer-events-none"
            style={{
              width: lightSize,
              height: lightSize,
              background: theme === 'dark' ? 'rgba(255, 255, 255, 0.2)' : 'rgba(0, 0, 0, 0.1)',
              filter: 'blur(30px)',
              x: lightX,
              y: lightY,
            }}
          ></motion.div>
        )}
        
        <div className="relative z-10 flex flex-col justify-between p-4">
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-3">
            {techStack.map((tech, index) => (
              <a 
                key={index} 
                target="_blank" 
                rel="noopener noreferrer" 
                href={tech.url}
                className="flex flex-col items-center justify-center p-2 rounded-lg hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
              >
                <div className="w-12 h-12 mb-2 relative flex items-center justify-center">
                  <Image
                    src={tech.logo}
                    alt={`${tech.name} logo`}
                    width={40}
                    height={40}
                    className={`object-contain ${tech.name === "Express.js" || tech.name === "Three.js" || tech.name === "Prisma" || tech.name === "GitHub" || tech.name === "AWS" ? "dark:invert" : ""}`}
                  />
                </div>
                <div className="text-xs text-center font-medium text-black dark:text-white">
                  {tech.name}
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechStack;