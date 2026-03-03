"use client";

import { Github, Linkedin, Mail } from "lucide-react";
import { CONTACT_INFO } from "@/config/contact";

const Footer = () => {
  return (
    <footer className="mt-20 border-t border-white/10 bg-black/40 backdrop-blur-xl">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-10">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
          <div>
            <p className="text-white font-medium">{CONTACT_INFO.name}</p>
            <p className="text-sm text-gray-400 mt-1">
              Software Engineer | Backend/Web Apps | AWS | APIs | Data & Systems Fundamentals
            </p>
          </div>

          <div className="flex items-center gap-4 text-sm">
            <a href={CONTACT_INFO.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors" aria-label="GitHub">
              <Github className="w-4 h-4" />
            </a>
            <a href={CONTACT_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors" aria-label="LinkedIn">
              <Linkedin className="w-4 h-4" />
            </a>
            <a href={`mailto:${CONTACT_INFO.email}`} className="text-gray-400 hover:text-white transition-colors" aria-label="Email">
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </div>

        <p className="text-xs text-gray-500 mt-8">© {new Date().getFullYear()} {CONTACT_INFO.name}</p>
      </div>
    </footer>
  );
};

export default Footer;
