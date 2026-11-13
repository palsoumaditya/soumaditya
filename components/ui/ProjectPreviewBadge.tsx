"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, ExternalLink } from "lucide-react";

interface ProjectPreviewBadgeProps {
  name: string;
  badgeLabel?: string;
  accentColor: "indigo" | "emerald";
  title: string;
  tagline: string;
  imageSrc: string;
  liveUrl?: string;
  githubUrl?: string;
}

export function ProjectPreviewBadge({
  name,
  badgeLabel,
  accentColor,
  title,
  tagline,
  imageSrc,
  liveUrl,
  githubUrl,
}: ProjectPreviewBadgeProps) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLSpanElement>(null);
  const closeTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    // 150ms buffer so moving the mouse into the popover card doesn't immediately close it
    closeTimeoutRef.current = setTimeout(() => {
      setIsOpen(false);
    }, 150);
  };

  useEffect(() => {
    return () => {
      if (closeTimeoutRef.current) {
        clearTimeout(closeTimeoutRef.current);
      }
    };
  }, []);

  const isEmerald = accentColor === "emerald";
  const textColor = isEmerald
    ? "text-emerald-600 dark:text-emerald-400 hover:text-emerald-500"
    : "text-indigo-600 dark:text-indigo-400 hover:text-indigo-500";
  const iconBorderColor = isEmerald
    ? "border-emerald-500/50 text-emerald-600 dark:text-emerald-400 bg-emerald-500/10"
    : "border-indigo-500/50 text-indigo-600 dark:text-indigo-400 bg-indigo-500/10";
  const indicatorBg = isEmerald ? "bg-emerald-500" : "bg-indigo-500";

  return (
    <span
      ref={containerRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative inline-block align-baseline"
    >
      {/* Interactive trigger on hover / click */}
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className={`inline-flex items-center gap-1 font-semibold underline-offset-4 hover:underline transition-colors cursor-pointer select-none ${textColor}`}
        aria-expanded={isOpen}
      >
        <span>{name}</span>
        {/* Little interactive toggle badge resembling the screenshot's icon box */}
        <span
          className={`inline-flex items-center justify-center w-3.5 h-3.5 text-[9px] font-bold rounded-[3px] border leading-none transition-transform duration-200 ${iconBorderColor} ${
            isOpen ? "rotate-45" : ""
          }`}
        >
          +
        </span>
      </button>

      {/* Popover Card */}
      <AnimatePresence>
        {isOpen && (
          <motion.span
            initial={{ opacity: 0, y: 8, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 6, scale: 0.96 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="absolute left-1/2 -translate-x-1/2 top-full mt-2.5 z-50 block w-72 sm:w-80 rounded-xl bg-card border border-border/80 shadow-2xl p-3.5 text-foreground backdrop-blur-md"
          >
            {/* Header chip row */}
            <span className="flex items-center justify-between gap-2 pb-2.5">
              <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-md bg-muted text-[11px] font-medium text-muted-foreground border border-border/60">
                <span className={`w-1.5 h-1.5 rounded-full ${indicatorBg}`} />
                <span>{badgeLabel || title}</span>
              </span>

              <span className="flex items-center gap-2">
                {liveUrl && (
                  <Link
                    href={liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[11px] font-medium text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <span>Visit</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </Link>
                )}
                {githubUrl && (
                  <Link
                    href={githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[11px] font-medium text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <ExternalLink className="w-3 h-3" />
                  </Link>
                )}
              </span>
            </span>

            {/* Preview Image */}
            <span className="relative block w-full h-40 rounded-lg overflow-hidden border border-border/60 bg-muted/40 mb-2.5 shadow-inner">
              <Image
                src={imageSrc}
                alt={title}
                fill
                className="object-cover object-top hover:scale-105 transition-transform duration-500"
              />
            </span>

            {/* Description Caption */}
            <span className="block text-[12px] leading-relaxed text-muted-foreground font-normal">
              {tagline}
            </span>
          </motion.span>
        )}
      </AnimatePresence>
    </span>
  );
}

