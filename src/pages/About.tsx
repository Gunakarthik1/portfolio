"use client";

import { ScrollAnimation } from "@/components/ScrollAnimation";

const About = () => {
  return (
    <div className="min-h-screen pt-24 pb-20 px-4 max-w-6xl mx-auto">
      <ScrollAnimation>
        <h2 className="text-3xl sm:text-4xl font-bold text-white">About</h2>
      </ScrollAnimation>

      <div className="mt-8 grid lg:grid-cols-[320px,1fr] gap-6">
        <ScrollAnimation>
          <div className="rounded-2xl border border-white/10 bg-black/45 backdrop-blur-sm overflow-hidden">
            <div className="aspect-[4/5] bg-white/[0.03]">
              <img
                src="/profile/profile.jpg"
                alt="Gunakarthik Naidu Lanka"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </ScrollAnimation>

        <ScrollAnimation>
          <div className="rounded-2xl border border-white/10 bg-black/45 p-7 sm:p-8 backdrop-blur-sm">
            <p className="text-gray-300 leading-relaxed">
              I&apos;m Gunakarthik Naidu Lanka — an MSCS 2025 graduate (GPA 4.0) with 4+ years of software development practice. I specialize in architecting distributed systems, autonomous agentic workflows, and high-performance backend microservices. My engineering philosophy is simple: Show &gt; Tell.
            </p>

            <p className="text-gray-300 leading-relaxed mt-4">
              At Velocity Tech (Zinio TalentHub), I engineered high-concurrency microservices in FastAPI and Spring Boot for a hiring platform serving 5,000+ monthly active users, built an NLP parsing engine that cut manual overhead by 70%, and drove a 45% reduction in p99 database latency through advanced PostgreSQL indexing and schema refactoring.
            </p>

            <p className="text-gray-300 leading-relaxed mt-4">
              During my Full Stack Internship with EPICS (Foster Arizona), I delivered a real-time data sync layer with WebSockets and Redis, built React + Python REST API features for a statewide resource directory, and resolved 20+ production-blocking bugs ahead of launch.
            </p>

            <p className="text-gray-300 leading-relaxed mt-4">
              Outside of work, I build local-first AI tools — autonomous browser agents, GGUF-quantized inference engines, and VIN evaluation platforms — with a focus on data sovereignty and zero-cloud architecture. I also served as a Teaching Assistant at ASU, mentoring students in DSA, OOP, and software engineering fundamentals.
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
        </ScrollAnimation>
      </div>
    </div>
  );
};

export default About;
