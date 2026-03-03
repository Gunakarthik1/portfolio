import Projects from "@/pages/Projects";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
  description: "Selected software engineering projects with architecture, API, performance, scalability, and deployment details.",
  alternates: { canonical: "/projects" },
};

export default function ProjectsPage() {
  return <Projects />;
}
