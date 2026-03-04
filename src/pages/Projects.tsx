"use client";

import { Github, ExternalLink } from "lucide-react";
import { ScrollAnimation } from "@/components/ScrollAnimation";

type Project = {
  title: string;
  summary: string;
  image?: string;
  imageClass?: string;
  github: string;
  live?: string;
  stack: string[];
  bullets: string[];
};

const projects: Project[] = [
  {
    title: "AI Meeting Assistant Web Application",
    summary:
      "LLM-powered transcription + summaries + action items. Built a web-based application integrating OpenAI APIs for automated meeting transcription and structured action extraction.",
    image: "/projects_img/project-1.png",
    imageClass: "object-center",
    github: "https://github.com/",
    stack: ["Python", "REST", "OpenAI APIs", "SQL"],
    bullets: [
      "Developed backend request routing and data processing.",
      "Built secure REST endpoints.",
      "Integrated SQL database storage.",
      "Added functional testing and performance validation.",
    ],
  },
  {
    title: "Foster Arizona Website (EPICS Platform)",
    summary:
      "Full-stack community platform work completed during EPICS internship, focused on web features, backend API integration, and deployment in AWS environments.",
    image: "/projects_img/project-3.png",
    imageClass: "object-top",
    github: "https://github.com/",
    live: "https://fosterarizona.org/",
    stack: ["Python", "REST APIs", "SQL", "Docker", "AWS"],
    bullets: [
      "Built web application features integrating frontend components with backend REST APIs.",
      "Developed backend services using Python and SQL for community workflows.",
      "Worked through requirements and prototyping with stakeholders.",
      "Deployed containerized application components in AWS using Docker.",
    ],
  },
  {
    title: "Hospital Database Management System",
    summary:
      "Relational DB + CRUD + reporting system for healthcare workflow management.",
    image: "/projects_img/Hospital_dbms.png",
    imageClass: "object-center",
    github: "https://github.com/",
    live: "https://drive.google.com/file/d/1_HdiZeyIvcTt0aFIjDuNRT6tmk0WUjlp/view",
    stack: ["SQL", "PostgreSQL/MySQL", "Backend"],
    bullets: [
      "Designed normalized relational schema.",
      "Implemented CRUD operations.",
      "Built reporting queries with indexing optimization.",
    ],
  },
  {
    title: "Personal Portfolio Website (This Project)",
    summary:
      "Interactive frontend portfolio built and deployed for recruiter-friendly navigation, with focused sections for experience, projects, education, and contact.",
    image: "/projects_img/project-4.png",
    imageClass: "object-top",
    github: "https://github.com/guna29/portfolio",
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    bullets: [
      "Designed a clean multi-page structure optimized for quick recruiter scanning.",
      "Implemented responsive layouts, subtle animations, and reusable UI components.",
      "Integrated resume download, project showcases, and updated academic/professional content.",
      "Deployed and maintained as a live, production-style personal portfolio.",
    ],
  },
];

const Projects = () => {
  return (
    <div className="min-h-screen pt-24 pb-20 px-4 max-w-6xl mx-auto">
      <ScrollAnimation>
        <h2 className="text-3xl sm:text-4xl font-bold text-white">Projects</h2>
      </ScrollAnimation>

      <div className="mt-8 grid md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <ScrollAnimation key={project.title}>
            <article className="rounded-2xl border border-white/10 bg-black/45 backdrop-blur-sm overflow-hidden h-full">
              {project.image ? (
                <div className="w-full h-64 md:h-72 bg-black overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className={`w-full h-full object-cover ${project.imageClass ?? "object-center"}`}
                  />
                </div>
              ) : (
                <div className="w-full h-64 md:h-72 bg-gradient-to-br from-zinc-900 to-zinc-800 border-b border-white/10 flex items-center justify-center">
                  <p className="text-sm text-gray-400">Add project screenshot</p>
                </div>
              )}

              <div className="p-6">
                <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                <p className="text-gray-300 mt-3 leading-relaxed">{project.summary}</p>

                <ul className="mt-4 list-disc pl-5 text-gray-300 space-y-1">
                  {project.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 mt-4">
                  {project.stack.map((item) => (
                    <span
                      key={item}
                      className="px-2.5 py-1 rounded-md text-xs font-medium bg-white/5 border border-white/10 text-gray-300"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex items-center gap-5 text-sm">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
                  >
                    <Github className="w-4 h-4" aria-hidden="true" /> Code
                  </a>
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" aria-hidden="true" /> Live
                    </a>
                  )}
                </div>
              </div>
            </article>
          </ScrollAnimation>
        ))}
      </div>
    </div>
  );
};

export default Projects;
