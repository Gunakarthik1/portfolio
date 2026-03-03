import Experience from "@/pages/Experience";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Experience",
  description: "Engineering experience snapshot and role focus for Gunakarthik Naidu Lanka.",
  alternates: { canonical: "/experience" },
};

export default function ExperiencePage() {
  return <Experience />;
}
