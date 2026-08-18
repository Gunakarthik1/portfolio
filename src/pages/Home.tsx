"use client";

import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, Mail, MapPin } from "lucide-react";
import Link from "next/link";
import { CONTACT_INFO } from "@/config/contact";

const highlights = [
  { label: "Focus", value: "Distributed Systems + Agentic AI" },
  { label: "Cloud", value: "AWS · Kubernetes · Docker · Terraform" },
  { label: "Status", value: "Open to SWE Roles · OPT / H-1B Ready" },
];

const Home = () => {
  const emailHref = `mailto:${CONTACT_INFO.email}?subject=Portfolio%20Inquiry%20-%20Software%20Engineer%20Opportunity&body=Hi%20Gunakarthik,%0D%0A%0D%0AI%20came%20across%20your%20portfolio%20and%20would%20like%20to%20connect%20regarding%20an%20opportunity.%0D%0A%0D%0AThanks.`;

  return (
    <div className="min-h-screen flex items-center justify-center px-4 pt-24 pb-16">
      <div className="w-full max-w-5xl mx-auto space-y-6">

        {/* Hero card */}
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
            Software Engineer · Distributed Systems · Agentic AI · High-Performance Backend
          </h2>

          <p className="text-base sm:text-lg text-gray-400 mt-6 max-w-4xl leading-relaxed">
            BS + MS CS @ Arizona State University (Accelerated, GPA 4.0). I specialize in distributed systems,
            autonomous agentic workflows, and high-performance backend microservices — built with Python, Java,
            and TypeScript. My philosophy is simple: Show &gt; Tell.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-3 text-sm text-gray-300">
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="w-4 h-4" /> {CONTACT_INFO.location}
            </span>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/experience"
              className="inline-flex items-center gap-2 rounded-lg bg-white px-5 py-2.5 text-black font-medium hover:bg-gray-200 transition-colors"
            >
              View Experience
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 rounded-lg border border-white/20 bg-white/5 px-5 py-2.5 text-white font-medium hover:bg-white/10 transition-colors"
            >
              See Projects
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
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
              href={emailHref}
              className="inline-flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
            >
              <Mail className="w-4 h-4" aria-hidden="true" /> {CONTACT_INFO.email}
            </a>
          </div>
        </motion.div>

        {/* About section merged in */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.12 }}
          className="rounded-2xl border border-white/10 bg-black/45 backdrop-blur-xl overflow-hidden"
        >
          <div className="grid lg:grid-cols-[260px,1fr]">
            {/* Profile photo */}
            <div className="hidden lg:block bg-white/[0.02] border-r border-white/10">
              <img
                src="/profile/profile.png"
                alt="Gunakarthik Naidu Lanka"
                className="w-full h-full object-cover object-top"
              />
            </div>

            {/* Bio */}
            <div className="p-7 sm:p-8">
              <h3 className="text-lg font-semibold text-white mb-4">About me</h3>

              <p className="text-gray-300 leading-relaxed text-sm">
                At Velocity Tech (Zinio TalentHub), I engineered high-concurrency microservices in FastAPI and
                Spring Boot for a hiring platform serving 5,000+ monthly active users, built an NLP parsing engine
                that cut manual overhead by 70%, and drove a 45% reduction in p99 database latency through advanced
                PostgreSQL indexing and schema refactoring.
              </p>

              <p className="text-gray-300 leading-relaxed mt-4 text-sm">
                During my Full Stack Internship with EPICS (Foster Arizona), I delivered a real-time data sync layer
                with WebSockets and Redis, built React + Python REST API features for a statewide resource directory,
                and resolved 20+ production-blocking bugs ahead of launch.
              </p>

              <p className="text-gray-300 leading-relaxed mt-4 text-sm">
                Outside of work, I build local-first AI tools — autonomous browser agents, inference engines, and
                vehicle evaluation platforms — with a focus on data sovereignty and zero-cloud architecture.
                I also served as a Teaching Assistant at ASU, mentoring students in DSA, OOP, and software engineering.
              </p>

              <div className="mt-6 grid sm:grid-cols-2 gap-3">
                <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
                  <p className="text-xs uppercase tracking-wider text-gray-500">Current Goal</p>
                  <p className="text-sm text-gray-200 mt-2">SWE Role — Distributed Systems, Backend, or AI Infra</p>
                </div>
                <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
                  <p className="text-xs uppercase tracking-wider text-gray-500">Core Stack</p>
                  <p className="text-sm text-gray-200 mt-2">Python · Java · TypeScript · AWS · Kubernetes · LLMs</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default Home;
