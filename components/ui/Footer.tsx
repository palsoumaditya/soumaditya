"use client";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export default function Footer() {
  return (
    <footer id="contact" className="bg-gradient-to-b from-background to-neutral-50 dark:to-neutral-900 py-6 md:py-8 mt-12">
      <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Divider and Section Label - Same style as Tech Stack */}
        <div className="flex items-center justify-center md:justify-between mb-8">
          <div className="flex-1 border-t border-neutral-300 dark:border-neutral-700 mr-4" />
          <span className="text-xs tracking-widest text-neutral-900 dark:text-white uppercase">Contact Me</span>
          <div className="flex-1 border-t border-neutral-300 dark:border-neutral-700 ml-4" />
        </div>

        {/* Main Contact Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 mb-6 md:mb-8 justify-items-center sm:justify-items-start text-center md:text-left">
          {/* Contact Info */}
          <div className="space-y-2 md:space-y-3">
            <h3 className="text-sm md:text-base font-semibold text-neutral-900 dark:text-white mb-2 md:mb-3">Get in Touch</h3>
            <div className="space-y-1.5 md:space-y-2">
              <div className="flex items-center justify-center md:justify-start space-x-2">
                <FaEnvelope className="text-blue-600 dark:text-blue-400 text-sm" />
                <div>
                  <p className="text-xs text-neutral-600 dark:text-neutral-400">Email</p>
                  <a
                    href="mailto:soumaditya.pal23@gmail.com"
                    className="text-xs md:text-sm text-neutral-900 dark:text-white font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    soumaditya.pal23@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-center justify-center md:justify-start space-x-2">
                <FaMapMarkerAlt className="text-red-600 dark:text-red-400 text-sm" />
                <div>
                  <p className="text-xs text-neutral-600 dark:text-neutral-400">Location</p>
                  <p className="text-xs md:text-sm text-neutral-900 dark:text-white font-medium">Kolkata, India</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-2 md:space-y-3">
            <h3 className="text-sm md:text-base font-semibold text-neutral-900 dark:text-white mb-2 md:mb-3">Quick Links</h3>
            <div className="space-y-0.5 md:space-y-1">
              <a href="#about" className="block text-xs md:text-sm text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors">
                About
              </a>
              <a href="#experience" className="block text-xs md:text-sm text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors">
                Experience
              </a>
              <a href="#projects" className="block text-xs md:text-sm text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors">
                Projects
              </a>
              <a href="#tech-stack" className="block text-xs md:text-sm text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors">
                Tech Stack
              </a>
            </div>
          </div>

          {/* Social Connect */}
          <div className="space-y-2 md:space-y-3">
            <h3 className="text-sm md:text-base font-semibold text-neutral-900 dark:text-white mb-2 md:mb-3">Connect</h3>
            <div className="flex justify-center md:justify-start space-x-2.5 md:space-x-3">
              <a
                href="https://github.com/PalSoumaditya"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 md:w-10 md:h-10 bg-neutral-100 dark:bg-neutral-800 rounded-lg flex items-center justify-center text-neutral-700 dark:text-neutral-300 hover:bg-blue-100 dark:hover:bg-blue-900 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-200 hover:scale-105"
                aria-label="GitHub"
              >
                <FaGithub className="text-base md:text-lg" />
              </a>
              <a
                href="https://www.linkedin.com/in/soumaditya-pal-109029309/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 md:w-10 md:h-10 bg-neutral-100 dark:bg-neutral-800 rounded-lg flex items-center justify-center text-neutral-700 dark:text-neutral-300 hover:bg-blue-100 dark:hover:bg-blue-900 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-200 hover:scale-105"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="text-base md:text-lg" />
              </a>
              <a
                href="https://x.com/soumadityapal"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 md:w-10 md:h-10 bg-neutral-100 dark:bg-neutral-800 rounded-lg flex items-center justify-center text-neutral-700 dark:text-neutral-300 hover:bg-blue-100 dark:hover:bg-blue-900 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-200 hover:scale-105"
                aria-label="Twitter"
              >
                <FaTwitter className="text-base md:text-lg" />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-neutral-200 dark:border-neutral-700 mb-6" />

        {/* Bottom Section */}
        <div className="text-center">
          <p className="text-xs text-neutral-600 dark:text-neutral-400">
            Built with <span className="text-red-500 mx-1">♥</span> Soumaditya
          </p>
        </div>
      </div>
    </footer>
  );
}