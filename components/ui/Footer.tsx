"use client";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer id="contact" className="bg-background py-12 mt-16">
      <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Divider and Section Label */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex-1 border-t border-neutral-700 dark:border-neutral-700 mr-4" />
          <span className="text-xs tracking-widest text-neutral-400 uppercase">Contact</span>
          <div className="flex-1 border-t border-neutral-700 dark:border-neutral-700 ml-4" />
        </div>
        {/* Contact & Connect Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 bg-neutral-900 rounded-xl p-4 md:p-6 mb-8 shadow-md">
          {/* Contact Info */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            <div className="text-gray-400 text-base font-medium mb-1">Email</div>
            <div className="text-white text-lg font-semibold mb-2">soumadityapal@outlook.com</div>
            <div className="text-gray-400 text-base font-medium mb-1">Location</div>
            <div className="text-white text-lg font-semibold">Kolkata, India</div>
          </div>
          {/* Social Links */}
          <div className="w-full md:w-1/2 text-center md:text-right flex flex-col items-center md:items-end">
            <div className="text-gray-400 text-base font-medium mb-2">Connect with me</div>
            <div className="flex flex-row gap-5 mt-2">
              <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors text-2xl">
                <FaGithub />
              </a>
              <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors text-2xl">
                <FaLinkedin />
              </a>
              <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors text-2xl">
                <FaTwitter />
              </a>
            </div>
          </div>
        </div>
        {/* Built with love */}
        <div className="pt-4 border-t border-neutral-800">
          <p className="text-center text-gray-500 text-base mt-4">
            Built with <span className="text-red-500">♥</span> by <span className="text-white font-semibold">Soumaditya</span>
          </p>
        </div>
      </div>
    </footer>
  );
}