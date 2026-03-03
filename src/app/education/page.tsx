import Education from "@/pages/Education";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Education",
  description: "Education profile of Gunakarthik Naidu Lanka.",
  alternates: { canonical: "/education" },
};

export default function EducationPage() {
  return <Education />;
}
