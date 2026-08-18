"use client";

import { Github, ExternalLink, FileCode, GitPullRequest, Star } from "lucide-react";
import { ScrollAnimation } from "@/components/ScrollAnimation";

type Project = {
  title: string;
  summary: string;
  image?: string;
  imageClass?: string;
  github?: string;
  live?: string;
  codeLink?: string;
  stack: string[];
  bullets: string[];
};

const projects: Project[] = [
  {
    title: "GPU Cluster Telemetry & Automated Node Doctor",
    summary:
      "Production-grade distributed telemetry daemon and health orchestrator for AI/HPC Linux compute nodes. Collects GPU and host metrics, streams to a FastAPI gateway, runs Pandas sliding-window analytics, exposes Prometheus metrics, and autonomously executes remediation actions when thresholds are breached.",
    image: "/projects_img/gpu-telemetry.png",
    imageClass: "object-top",
    github: "https://github.com/Gunakarthik1/gpu-cluster-telemetry",
    live: "https://gunakarthik1.github.io/gpu-cluster-telemetry/frontend/",
    stack: ["Python", "FastAPI", "Pandas", "Prometheus", "Grafana", "SQLAlchemy", "Docker", "pynvml", "psutil", "pytest"],
    bullets: [
      "Built a low-level GPU telemetry daemon using pynvml and psutil to sample VRAM, thermals, power draw, CPU, RAM, disk, and TCP socket states every 5 seconds; implemented a realistic H100 simulation fallback for non-NVIDIA environments.",
      "Designed a FastAPI ingestion gateway with Pydantic v2 validation, SQLAlchemy + SQLite persistence, and Prometheus gauges/counters exposed at /metrics — scraped by a provisioned Prometheus + Grafana stack via Docker Compose.",
      "Implemented a Pandas sliding-window analytics engine (per-node ring buffer, 1000-row deque) detecting thermal breaches (>80°C), VRAM saturation (>95%), and TCP TIME_WAIT spikes (>100) — dispatching ISOLATE_NODE and FLUSH_TEMP_CACHE remediation handlers automatically.",
      "Wrote 60 pytest tests covering unit, integration, and mocked HTTP scenarios with zero external dependencies — using StaticPool in-memory SQLite for full isolation.",
    ],
  },
  {
    title: "HireAgent — Autonomous Browser Agent",
    summary:
      "Self-correcting agentic system that automates multi-step job application workflows using a local LLM, achieving 98% task completion with zero cloud inference cost.",
    github: "https://github.com/Gunakarthik1/hireagent",
    stack: ["TypeScript", "Playwright", "PostgreSQL", "Ollama", "LangGraph"],
    bullets: [
      "Architected a self-correcting 6-stage agentic state machine with a resilient error-recovery layer and exponential backoff, achieving 98% task completion rate.",
      "Implemented DOM distillation to strip 90% of non-essential HTML, enabling local-first 7B LLM inference to navigate complex UIs with 95% accuracy at zero operational cost.",
      "Designed PostgreSQL-backed session persistence so the agent resumes interrupted workflows without data loss.",
    ],
  },
  {
    title: "Vin Sight — AI Vehicle Valuation Platform",
    summary:
      "Vehicle valuation engine combining NHTSA recall data, brand-specific depreciation models, and local Ollama LLM (DeepSeek-R1/Gemma 3) for hold/sell recommendations. TTL cache eliminates repeat API calls. Confidence-weighted valuation bands ±12%/±18%.",
    image: "/projects_img/vinsight.png",
    imageClass: "object-top",
    github: "https://github.com/Gunakarthik1/vin-sight",
    live: "https://vin-sight.onrender.com",
    stack: ["Node.js", "TypeScript", "Express", "Ollama", "NHTSA API", "React", "Chart.js"],
    bullets: [
      "Built VIN-based asset evaluation engine pulling real NHTSA safety and recall data with brand-specific depreciation models for accurate regional pricing.",
      "Integrated local Ollama LLM (DeepSeek-R1/Gemma 3) for hold/sell recommendations with confidence-weighted valuation bands of ±12%/±18%.",
      "Implemented TTL cache layer eliminating repeat API calls and reducing latency for returning users.",
      "Delivered 12-month price projection insights alongside instant valuation results.",
    ],
  },
  {
    title: "Foster Arizona Website (EPICS Platform)",
    summary:
      "Full-stack community platform work completed during EPICS internship, focused on web features, backend API integration, and deployment in AWS environments.",
    image: "/projects_img/project-3.png",
    imageClass: "object-top",
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
    codeLink: "https://drive.google.com/file/d/1_HdiZeyIvcTt0aFIjDuNRT6tmk0WUjlp/view",
    stack: ["SQL", "PostgreSQL/MySQL", "Backend"],
    bullets: [
      "Designed normalized relational schema.",
      "Implemented CRUD operations.",
      "Built reporting queries with indexing optimization.",
    ],
  },
  {
    title: "Enterprise Hybrid-RAG & Semantic Cache Gateway",
    summary:
      "Production RAG API combining BM25 sparse retrieval and FAISS dense search with Reciprocal Rank Fusion reranking. Semantic cache layer (cosine similarity threshold 0.96) eliminates redundant LLM calls. Streams responses via SSE.",
    image: "/projects_img/hybrid-rag.png",
    imageClass: "object-top",
    github: "https://github.com/Gunakarthik1/hybrid-rag-gateway",
    live: "https://gunakarthik1.github.io/hybrid-rag-gateway/frontend/",
    stack: ["Python", "FastAPI", "FAISS", "BM25", "Pydantic", "Docker", "pytest", "SSE"],
    bullets: [
      "Combined BM25 sparse retrieval and FAISS dense search with Reciprocal Rank Fusion reranking for high-quality document retrieval.",
      "Implemented semantic cache layer with cosine similarity threshold 0.96 to eliminate redundant LLM calls and cut latency.",
      "Streamed responses to clients via Server-Sent Events (SSE) for real-time output delivery.",
    ],
  },
  {
    title: "High-Throughput Distributed LLM Inference Engine",
    summary:
      "LLM serving engine with PagedAttention KV-cache simulation, priority-queue continuous batching scheduler, and real-time WebSocket dashboard. Tracks p50/p95/p99 TTFT percentiles with Prometheus metrics.",
    image: "/projects_img/llm-inference.png",
    imageClass: "object-top",
    github: "https://github.com/Gunakarthik1/llm-inference-engine",
    live: "https://gunakarthik1.github.io/llm-inference-engine/frontend/",
    stack: ["Python", "FastAPI", "WebSocket", "Prometheus", "asyncio", "Docker", "pytest"],
    bullets: [
      "Implemented PagedAttention KV-cache simulation and priority-queue continuous batching scheduler for high-throughput serving.",
      "Built real-time WebSocket dashboard surfacing p50/p95/p99 TTFT percentile metrics live.",
      "Exposed Prometheus metrics endpoint for observability integration with existing monitoring stacks.",
    ],
  },
  {
    title: "Distributed Lakehouse ETL & Data Quality Pipeline",
    summary:
      "Medallion architecture ETL (Bronze/Silver/Gold) with 6 configurable data quality rules, quarantine layer, lineage tracking, and Parquet-backed aggregations. React-style dashboard shows pipeline health in real time.",
    image: "/projects_img/lakehouse-etl.png",
    imageClass: "object-top",
    github: "https://github.com/Gunakarthik1/lakehouse-etl-pipeline",
    live: "https://gunakarthik1.github.io/lakehouse-etl-pipeline/frontend/",
    stack: ["Python", "FastAPI", "Pandas", "Parquet", "SQLite", "Docker", "pytest"],
    bullets: [
      "Designed Bronze/Silver/Gold medallion architecture with 6 configurable data quality rules and a quarantine layer for failed records.",
      "Implemented full lineage tracking so every record's transformation history is auditable end-to-end.",
      "Stored aggregations in Parquet with a real-time dashboard exposing pipeline health metrics.",
    ],
  },
  {
    title: "Enterprise AI Gateway & Data Privacy Firewall",
    summary:
      "7-stage AI proxy pipeline: rate limiting (token bucket), budget enforcement, prompt injection detection, PII masking (SSN/email/phone/credit card with Luhn validation), upstream LLM call, PII unmasking, and structured audit logging.",
    image: "/projects_img/ai-privacy.png",
    imageClass: "object-top",
    github: "https://github.com/Gunakarthik1/ai-privacy-gateway",
    live: "https://gunakarthik1.github.io/ai-privacy-gateway/frontend/",
    stack: ["Python", "FastAPI", "SQLite", "Pydantic", "Docker", "pytest", "Regex"],
    bullets: [
      "Built a 7-stage proxy pipeline covering rate limiting, budget enforcement, prompt injection detection, PII masking, LLM call, unmasking, and audit logging.",
      "Implemented PII masking for SSN, email, phone, and credit cards with Luhn checksum validation before any data leaves the perimeter.",
      "Persisted structured audit logs to SQLite for compliance and forensic traceability of every request.",
    ],
  },
  {
    title: "LLM-as-a-Judge Benchmark & Agent Evaluation Harness",
    summary:
      "Evaluation framework that scores LLM outputs across faithfulness, relevance, coherence, and completeness using rubric-based LLM-as-a-Judge scoring. Includes adversarial test generation and HTML/JSON reporting.",
    image: "/projects_img/llm-eval.png",
    imageClass: "object-top",
    github: "https://github.com/Gunakarthik1/llm-eval-harness",
    live: "https://gunakarthik1.github.io/llm-eval-harness/frontend/",
    stack: ["Python", "FastAPI", "Pydantic", "asyncio", "Docker", "pytest"],
    bullets: [
      "Scored LLM outputs across faithfulness, relevance, coherence, and completeness with rubric-based LLM-as-a-Judge grading.",
      "Generated adversarial test cases automatically to stress-test model robustness.",
      "Produced structured HTML and JSON reports for easy diff-ing across model versions.",
    ],
  },
  {
    title: "NeighborhoodPulse — Multi-Agent Neighborhood Risk Platform",
    summary:
      "Concurrent multi-agent platform that gathers FEMA flood data, zoning codes, and climate risk in parallel, then synthesizes a structured risk report with inline citations, weighted risk scores (0–100), and actionable recommendations.",
    image: "/projects_img/neighborhood-pulse.png",
    imageClass: "object-top",
    github: "https://github.com/Gunakarthik1/neighborhood-pulse",
    live: "https://gunakarthik1.github.io/neighborhood-pulse/frontend/",
    stack: ["Python", "FastAPI", "asyncio", "Pydantic", "SQLite", "Docker", "pytest"],
    bullets: [
      "Ran FEMA flood data, zoning code, and climate risk agents concurrently with asyncio for sub-second parallel data gathering.",
      "Synthesized a structured risk report with inline citations and weighted risk scores on a 0–100 scale.",
      "Delivered actionable recommendations ranked by risk severity for each neighborhood query.",
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
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
                    >
                      <Github className="w-4 h-4" aria-hidden="true" /> Code
                    </a>
                  )}
                  {project.codeLink && (
                    <a
                      href={project.codeLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
                    >
                      <FileCode className="w-4 h-4" aria-hidden="true" /> Code
                    </a>
                  )}
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

      {/* Open Source Contributions */}
      <ScrollAnimation>
        <h2 className="text-3xl sm:text-4xl font-bold text-white mt-20">Open Source</h2>
        <p className="text-gray-400 mt-2 text-sm">Real-world contributions to production codebases used by thousands of developers.</p>
      </ScrollAnimation>

      <ScrollAnimation>
        <article className="mt-6 rounded-2xl border border-emerald-500/20 bg-emerald-950/10 backdrop-blur-sm overflow-hidden">
          {/* Top accent bar */}
          <div className="h-1 w-full bg-gradient-to-r from-emerald-500 via-teal-400 to-emerald-600" />

          <div className="p-6 sm:p-8">
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
              <div className="flex-1">
                <div className="flex items-center gap-2 text-emerald-400 text-xs font-semibold uppercase tracking-widest mb-2">
                  <GitPullRequest className="w-3.5 h-3.5" />
                  Merged Pull Request
                </div>
                <h3 className="text-xl font-semibold text-white">
                  Open Source Contribution —{" "}
                  <a
                    href="https://github.com/scikit-learn/scikit-learn/pull/34685"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-emerald-400 hover:text-emerald-300 transition-colors underline underline-offset-4"
                  >
                    scikit-learn
                  </a>
                </h3>
                <p className="text-gray-400 text-sm mt-1 flex items-center gap-1.5">
                  Python Machine Learning Library
                  <span className="text-gray-600">·</span>
                  <Star className="w-3.5 h-3.5 text-yellow-400" aria-hidden="true" />
                  <span>60k+ GitHub Stars</span>
                </p>
              </div>

              <a
                href="https://github.com/scikit-learn/scikit-learn/pull/34685"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium border border-emerald-500/30 text-emerald-400 hover:bg-emerald-500/10 hover:border-emerald-400/50 transition-all self-start whitespace-nowrap"
              >
                <GitPullRequest className="w-4 h-4" />
                View PR #34685
              </a>
            </div>

            <p className="text-gray-300 mt-5 leading-relaxed">
              Contributed a new feature to scikit-learn&apos;s <code className="text-emerald-400 bg-white/5 px-1.5 py-0.5 rounded text-sm font-mono">RFECV</code> class
              by implementing the <code className="text-emerald-400 bg-white/5 px-1.5 py-0.5 rounded text-sm font-mono">elimination_order_</code> attribute,
              which exposes the per-step order in which features are eliminated during recursive feature elimination —
              previously discarded information users couldn&apos;t access.
            </p>

            <ul className="mt-4 space-y-2 text-gray-300">
              <li className="flex gap-2.5">
                <span className="text-emerald-500 mt-0.5 shrink-0">▸</span>
                Set up a full local development environment using a Docker dev container with micromamba; debugged a BLAS/aarch64 incompatibility on Apple Silicon and built scikit-learn from source.
              </li>
              <li className="flex gap-2.5">
                <span className="text-emerald-500 mt-0.5 shrink-0">▸</span>
                <span>Implemented the fix in <code className="text-emerald-400 bg-white/5 px-1.5 py-0.5 rounded text-sm font-mono break-all">sklearn/feature_selection/_rfe.py</code> following scikit-learn&apos;s contribution guidelines, including changelog entry and docstring conventions.</span>
              </li>
              <li className="flex gap-2.5">
                <span className="text-emerald-500 mt-0.5 shrink-0">▸</span>
                Wrote a unit test suite — <span className="text-white font-medium">60 tests passing, 0 regressions</span>.
              </li>
            </ul>

            <div className="flex flex-wrap gap-2 mt-6">
              {["Python", "scikit-learn", "pytest", "Docker", "micromamba", "Git"].map((item) => (
                <span
                  key={item}
                  className="px-2.5 py-1 rounded-md text-xs font-medium bg-emerald-500/10 border border-emerald-500/20 text-emerald-300"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </article>
      </ScrollAnimation>
    </div>
  );
};

export default Projects;
