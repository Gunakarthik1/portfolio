"use client";

import { Github, Linkedin, Mail, MapPin } from "lucide-react";
import { ScrollAnimation } from "@/components/ScrollAnimation";
import { CONTACT_INFO } from "@/config/contact";

const Contact = () => {
  return (
    <div className="min-h-screen pt-24 pb-20 px-4 max-w-5xl mx-auto">
      <ScrollAnimation>
        <h2 className="text-3xl sm:text-4xl font-bold text-white">Contact</h2>
      </ScrollAnimation>

      <ScrollAnimation>
        <p className="text-gray-400 mt-4 max-w-3xl">
          Open to entry-level Software Engineer roles (Backend or Web), API development, and data-driven application teams in AWS + Docker + CI/CD environments.
        </p>
      </ScrollAnimation>

      <div className="mt-8 grid gap-4 md:grid-cols-2">
        <ScrollAnimation>
          <a href={`mailto:${CONTACT_INFO.email}`} className="contact-card">
            <Mail className="w-5 h-5 text-gray-300" />
            <span>{CONTACT_INFO.email}</span>
          </a>
        </ScrollAnimation>

        <ScrollAnimation>
          <div className="contact-card">
            <MapPin className="w-5 h-5 text-gray-300" />
            <span>{CONTACT_INFO.location}</span>
          </div>
        </ScrollAnimation>

        <ScrollAnimation>
          <a href={CONTACT_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="contact-card">
            <Linkedin className="w-5 h-5 text-gray-300" />
            <span>LinkedIn</span>
          </a>
        </ScrollAnimation>

        <ScrollAnimation>
          <a href={CONTACT_INFO.github} target="_blank" rel="noopener noreferrer" className="contact-card">
            <Github className="w-5 h-5 text-gray-300" />
            <span>GitHub</span>
          </a>
        </ScrollAnimation>
      </div>
    </div>
  );
};

export default Contact;
