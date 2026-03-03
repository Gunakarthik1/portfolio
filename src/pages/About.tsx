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
              I am Gunakarthik Naidu Lanka, a Computer Science graduate (GPA 4.0) with hands-on experience building scalable web-based applications and backend services. My work is centered on API-driven systems, data-backed application design, and reliable software delivery.
            </p>

            <p className="text-gray-300 leading-relaxed mt-4">
              During my Software Engineering Internship at Velocity Tech (Zinio TalentHub), I worked on backend services for an AI-driven hiring platform, implemented REST APIs using Python (FastAPI) and Java, and improved PostgreSQL schema and query performance while supporting full SDLC execution.
            </p>

            <p className="text-gray-300 leading-relaxed mt-4">
              In my Full Stack Internship with EPICS (Foster Arizona Platform), I delivered web features across frontend and backend layers, built backend services with Python and SQL, and helped deploy containerized components on AWS using Docker.
            </p>

            <p className="text-gray-300 leading-relaxed mt-4">
              As a Teaching Assistant at Arizona State University, I supported students in object-oriented programming, web application design, debugging, and code reviews, which strengthened my communication and engineering fundamentals.
            </p>

            <div className="mt-6 grid sm:grid-cols-2 gap-3">
              <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
                <p className="text-xs uppercase tracking-wider text-gray-500">Current Goal</p>
                <p className="text-sm text-gray-200 mt-2">Entry-level Software Engineer role (Backend or Web)</p>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
                <p className="text-xs uppercase tracking-wider text-gray-500">Preferred Stack</p>
                <p className="text-sm text-gray-200 mt-2">AWS, Docker, CI/CD, REST APIs, SQL Databases</p>
              </div>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </div>
  );
};

export default About;
