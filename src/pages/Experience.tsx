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
      "Developed web-based backend services supporting an AI-driven hiring platform.",
      "Designed and implemented RESTful APIs using Python (FastAPI) and Java for client-facing features.",
      "Collaborated with product stakeholders to translate business requirements into technical solutions.",
      "Designed PostgreSQL schemas and optimized queries to improve performance and reliability.",
      "Participated in SDLC: requirements, development, testing, deployment, and post-release support.",
      "Assisted in debugging production issues and shipping enhancements based on client feedback.",
    ],
    tech: ["Python", "FastAPI", "Java", "PostgreSQL", "AWS", "Docker", "CI/CD"],
  },
  {
    title: "Full Stack Intern",
    company: "EPICS (Foster Arizona Platform)",
    location: "Tempe, AZ",
    period: "Jan 2022 - May 2022",
    type: "Internship",
    description: [
      "Built web application features integrating frontend components with backend REST APIs.",
      "Developed backend services using Python and SQL databases to support community workflows.",
      "Worked with business stakeholders during analysis and prototyping phases.",
      "Deployed containerized applications using Docker in AWS environments.",
      "Contributed to functional testing and QA processes to ensure application reliability.",
    ],
    tech: ["Python", "REST", "SQL", "Docker", "AWS"],
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
