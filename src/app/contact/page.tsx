import Contact from "@/pages/Contact";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Gunakarthik Naidu Lanka for Software Engineer opportunities.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return <Contact />;
}
