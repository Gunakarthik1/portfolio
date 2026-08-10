"use client";

import { ExternalLink } from "lucide-react";
import { ScrollAnimation } from "@/components/ScrollAnimation";

const skillGroups = [
  {
    category: "Languages",
    items: ["Python", "Java (Spring Boot)", "TypeScript", "Node.js", "SQL (Postgres/MySQL)", "C++", "Go", "HTML/CSS"],
  },
  {
    category: "AI / Agentic",
    items: ["LangGraph", "RAG Pipelines", "Ollama", "Playwright", "GGUF Quantization", "Prompt Engineering", "Local LLM Inference"],
  },
  {
    category: "Infrastructure",
    items: ["AWS (EC2, S3, Lambda, Fargate)", "Docker", "Kubernetes", "Terraform (IaC)", "CI/CD", "GitHub Actions", "Linux"],
  },
  {
    category: "Web / Backend",
    items: ["React", "Next.js", "FastAPI", "REST APIs", "GraphQL", "WebSockets", "Redis", "RabbitMQ", "Drizzle ORM"],
  },
  {
    category: "Databases",
    items: ["PostgreSQL", "MySQL", "MongoDB", "Redis"],
  },
  {
    category: "Concepts",
    items: ["System Design", "Distributed Systems", "Microservices", "Performance Optimization", "Security Compliance", "SDLC", "Agile"],
  },
];

const Skills = () => {
  return (
    <div className="min-h-screen pt-24 pb-20 px-4 max-w-6xl mx-auto">
      <ScrollAnimation>
        <h2 className="text-3xl sm:text-4xl font-bold text-white">Skills</h2>
      </ScrollAnimation>

      <div className="mt-8 grid md:grid-cols-2 gap-6">
        {skillGroups.map((group) => (
          <ScrollAnimation key={group.category}>
            <section className="rounded-xl border border-white/10 bg-black/45 p-5 backdrop-blur-sm">
              <h3 className="text-lg font-semibold text-white">{group.category}</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="px-2.5 py-1 rounded-md text-sm border border-white/10 bg-white/[0.03] text-gray-300"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </section>
          </ScrollAnimation>
        ))}
      </div>

      {/* Certifications */}
      <ScrollAnimation>
        <h2 className="text-3xl sm:text-4xl font-bold text-white mt-20">Certifications</h2>
      </ScrollAnimation>

      <ScrollAnimation>
        <a
          href="https://catalog-education.oracle.com/ords/certview/sharebadge?id=D6E7676E2A49E0DC47E89DF8FB620DBC8DE1C3AAF8F18097DE768EF2809FBAC7"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 flex flex-col sm:flex-row items-start sm:items-center gap-6 rounded-2xl border border-white/10 bg-black/45 backdrop-blur-sm p-6 hover:border-orange-500/30 hover:bg-orange-950/10 transition-all group"
        >
          <img
            src="/oracle-agentic-ai-badge.png"
            alt="Oracle Agentic AI Certified Foundations Associate badge"
            className="w-28 h-28 object-contain shrink-0 drop-shadow-lg"
          />

          <div className="flex-1">
            <div className="flex items-center gap-2 text-orange-400 text-xs font-semibold uppercase tracking-widest mb-1.5">
              Oracle · Issued 2026 · Expires Aug 2028
            </div>
            <h3 className="text-xl font-semibold text-white group-hover:text-orange-300 transition-colors">
              Agentic AI Certified Foundations Associate
            </h3>
            <p className="text-gray-400 mt-2 text-sm leading-relaxed max-w-2xl">
              A practical, build-it-yourself introduction to AI agents — covering agent architecture from first principles, LangChain, the OpenAI Agents SDK, real MCP servers, and production deployment on OCI Enterprise AI Agents and Oracle AI Database.
            </p>
            <div className="flex flex-wrap gap-2 mt-4">
              {["LangChain", "OpenAI Agents SDK", "MCP", "OCI", "Oracle AI DB", "Agentic AI"].map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-1 rounded-md text-xs font-medium bg-orange-500/10 border border-orange-500/20 text-orange-300"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="mt-4 inline-flex items-center gap-1.5 text-sm text-orange-400 group-hover:text-orange-300 transition-colors">
              <ExternalLink className="w-3.5 h-3.5" />
              Verify credential
            </div>
          </div>
        </a>
      </ScrollAnimation>
    </div>
  );
};

export default Skills;
