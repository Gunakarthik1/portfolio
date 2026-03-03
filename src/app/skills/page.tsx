import Skills from "@/pages/Skills";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Skills",
  description: "Technical skills across backend, frontend, databases, cloud, and software architecture.",
  alternates: { canonical: "/skills" },
};

export default function SkillsPage() {
  return <Skills />;
}
