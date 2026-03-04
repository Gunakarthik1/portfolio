"use client";

import { motion } from "framer-motion";
import { ArrowRight, FileDown, Github, Linkedin, Mail, MapPin } from "lucide-react";
import Link from "next/link";
import { CONTACT_INFO } from "@/config/contact";

const highlights = [
  { label: "Focus", value: "Backend + Web Applications" },
  { label: "Cloud", value: "AWS + Docker + CI/CD" },
  { label: "Status", value: "Open to Entry-Level SWE Roles" },
];

const Home = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 pt-24 pb-16">
      <div className="w-full max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="rounded-2xl border border-white/10 bg-black/50 backdrop-blur-xl p-8 sm:p-10"
        >
          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-white">
            Gunakarthik Naidu Lanka
          </h1>

          <h2 className="text-xl sm:text-2xl font-semibold text-gray-200 mt-4">
            Software Engineer • Backend/Web Apps • AWS • APIs • Data & Systems Fundamentals
          </h2>

          <p className="text-base sm:text-lg text-gray-400 mt-6 max-w-4xl leading-relaxed">
            Computer Science graduate (GPA 4.0) with experience developing scalable web-based applications and backend services. Strong foundation across the full software development lifecycle (requirements &rarr; design &rarr; implementation &rarr; testing &rarr; deployment). Comfortable building REST APIs, integrating databases, and collaborating with business and technical stakeholders to deliver reliable solutions.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-3 text-sm text-gray-300">
            <span className="inline-flex items-center gap-1.5"><MapPin className="w-4 h-4" /> {CONTACT_INFO.location}</span>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/experience"
              className="inline-flex items-center gap-2 rounded-lg bg-white px-5 py-2.5 text-black font-medium hover:bg-gray-200 transition-colors"
            >
              View Experience
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
            <a
              href={CONTACT_INFO.resumePath}
              download="Gunakarthik_Naidu_Lanka_Resume.pdf"
              className="inline-flex items-center gap-2 rounded-lg border border-white/20 bg-white/5 px-5 py-2.5 text-white font-medium hover:bg-white/10 transition-colors"
            >
              Download Resume
              <FileDown className="w-4 h-4" aria-hidden="true" />
            </a>
          </div>

          <div className="mt-10 grid gap-3 sm:grid-cols-3">
            {highlights.map((item) => (
              <div key={item.label} className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
                <p className="text-xs uppercase tracking-wider text-gray-500">{item.label}</p>
                <p className="mt-2 text-sm sm:text-base font-medium text-gray-100">{item.value}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-4 text-sm">
            <a
              href={CONTACT_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
            >
              <Github className="w-4 h-4" aria-hidden="true" /> GitHub
            </a>
            <a
              href={CONTACT_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
            >
              <Linkedin className="w-4 h-4" aria-hidden="true" /> LinkedIn
            </a>
            <a
              href={`mailto:${CONTACT_INFO.email}`}
              className="inline-flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
            >
              <Mail className="w-4 h-4" aria-hidden="true" /> {CONTACT_INFO.email}
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
