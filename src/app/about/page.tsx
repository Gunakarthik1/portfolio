import About from "@/pages/About";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "Background, engineering principles, and role focus of Gunakarthik Naidu Lanka.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return <About />;
}
