"use client";

import { Briefcase, GraduationCap, MapPin } from "lucide-react";
import { ScrollAnimation } from "@/components/ScrollAnimation";

type Experience = {
  title: string;
  company: string;
  location: string;
  period: string;
  type: "Internship" | "Teaching";
  description: string[];
  tech: string[];
};

const experiences: Experience[] = [
  {
    title: "Software Engineering Intern",
    company: "Velocity Tech (Zinio TalentHub)",
    location: "Remote",
    period: "Jan 2024 - Dec 2024",
    type: "Internship",
    description: [
      "Engineered high-concurrency backend microservices using FastAPI and Spring Boot, supporting a matching engine for 5,000+ monthly active users with 99.9% system uptime.",
      "Architected a high-fidelity NLP parsing engine that transformed unstructured data into searchable JSON, improving extraction accuracy by 30% and reducing manual overhead by 70%.",
      "Optimized PostgreSQL query performance through advanced indexing and schema refactoring, resulting in a 45% reduction in p99 data retrieval latency across high-cardinality tables.",
      "Streamlined the full SDLC by automating deployment pipelines via GitHub Actions, accelerating feature shipping cycles by 25% while maintaining rigorous QA standards.",
    ],
    tech: ["Python", "FastAPI", "Java", "Spring Boot", "PostgreSQL", "AWS", "Docker", "GitHub Actions", "CI/CD"],
  },
  {
    title: "Full Stack Intern",
    company: "EPICS (Foster Arizona Platform)",
    location: "Tempe, AZ",
    period: "Jan 2022 - May 2022",
    type: "Internship",
    description: [
      "Developed end-to-end features for a state-wide resource directory using React.js and Python REST APIs, facilitating real-time matching for critical community services.",
      "Engineered a real-time data sync layer using WebSockets and Redis, providing sub-second availability updates across a distributed network of state-level resource databases.",
      "Orchestrated containerized deployments via Docker and managed AWS cloud infrastructure, ensuring scalable, secure delivery for sensitive healthcare data.",
      "Established an automated unit-testing suite and led QA cycles, identifying and resolving 20+ production-blocking bugs prior to successful deployment.",
    ],
    tech: ["React.js", "Python", "REST APIs", "WebSockets", "Redis", "SQL", "Docker", "AWS"],
  },
  {
    title: "Teaching Assistant",
    company: "Arizona State University",
    location: "Tempe, AZ",
    period: "Jan 2023 - Dec 2024",
    type: "Teaching",
    description: [
      "Guided students in object-oriented programming, web application design, and software engineering fundamentals.",
      "Assisted in debugging, code reviews, and reinforcing clean coding standards and problem-solving.",
      "Supported labs and mentoring in courses including Principles of Programming with C++, Principles of Programming, Digital Design Fundamentals, Introduction to Programming Languages, Data Structures and Algorithms, and Introduction to Software Engineering.",
    ],
    tech: ["OOP", "DSA", "Debugging", "Code Review"],
  },
];

const Experience = () => {
  return (
    <div className="min-h-screen pt-24 pb-20 px-4 max-w-5xl mx-auto">
      <ScrollAnimation>
        <h2 className="text-3xl sm:text-4xl font-bold text-white">Experience</h2>
      </ScrollAnimation>

      <div className="mt-8 space-y-6">
        {experiences.map((exp) => (
          <ScrollAnimation key={exp.title + exp.company}>
            <section className="rounded-xl border border-white/10 bg-black/45 p-6 backdrop-blur-sm">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
                <div>
                  <h3 className="text-xl font-semibold text-white flex items-center gap-2">
                    {exp.type === "Teaching" ? <GraduationCap className="w-5 h-5" /> : <Briefcase className="w-5 h-5" />}
                    {exp.title}
                  </h3>
                  <p className="text-gray-300 mt-1">{exp.company}</p>
                  <p className="text-sm text-gray-500 mt-1 flex items-center gap-1.5">
                    <MapPin className="w-4 h-4" /> {exp.location}
                  </p>
                </div>
                <span className="text-sm text-gray-400">{exp.period}</span>
              </div>

              <ul className="mt-4 space-y-2 list-disc pl-5 text-gray-300">
                {exp.description.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>

              <div className="mt-4 flex flex-wrap gap-2">
                {exp.tech.map((item) => (
                  <span key={item} className="rounded-full border border-white/15 bg-white/[0.03] px-3 py-1 text-xs text-gray-300">
                    {item}
                  </span>
                ))}
              </div>
            </section>
          </ScrollAnimation>
        ))}
      </div>
    </div>
  );
};

export default Experience;
