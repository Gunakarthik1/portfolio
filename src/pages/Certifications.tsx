"use client";

import { ExternalLink, Award, BadgeCheck } from "lucide-react";
import { ScrollAnimation } from "@/components/ScrollAnimation";

type Certification = {
  title: string;
  issuer: string;
  issued: string;
  expires?: string;
  credentialId?: string;
  url: string;
  badge?: string;
  description: string;
  issuerLogo?: string;
};

const certifications: Certification[] = [
  {
    title: "Agentic AI Certified Foundations Associate",
    issuer: "Oracle",
    issued: "Aug 2024",
    expires: "Aug 2028",
    url: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=D6E7676E2A49E0DC47E89DF8FB620DBC8DE1C3AAF8F18097DE768EF2809FBAC7",
    description:
      "Built and deployed agentic AI systems using LangChain, OpenAI Agents SDK, and real MCP servers on Oracle Cloud Infrastructure (OCI). Covered multi-agent orchestration, tool use, memory management, and enterprise AI deployment patterns.",
  },
  {
    title: "AI Open Source Capstone Certificate",
    issuer: "CodePath",
    issued: "Aug 2026",
    credentialId: "421975",
    url: "https://certificates.codepath.org/a304d57c-ff29-48a7-8d48-8263739e3a7e.pdf",
    description:
      "Certificate of Achievement — Honors — awarded by CodePath (CEO: Michael Ellison) in recognition of outstanding performance during the successful completion of the AI Open Source Capstone Course. Summer 2026 cohort.",
  },
];

const Certifications = () => {
  return (
    <div className="min-h-screen pt-24 pb-20 px-4 max-w-4xl mx-auto">
      <ScrollAnimation>
        <h2 className="text-3xl sm:text-4xl font-bold text-white">Certifications</h2>
        <p className="text-gray-400 mt-2 text-sm">Verified credentials and completed programs.</p>
      </ScrollAnimation>

      <div className="mt-10 flex flex-col gap-6">
        {certifications.map((cert) => (
          <ScrollAnimation key={cert.title}>
            <article className="rounded-2xl border border-white/10 bg-black/45 backdrop-blur-sm p-6 sm:p-8">
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-start gap-4">
                  <div className="mt-1 flex-shrink-0 w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                    <Award className="w-5 h-5 text-gray-300" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white leading-snug">{cert.title}</h3>
                    <p className="text-sm text-gray-400 mt-1">
                      {cert.issuer}
                      <span className="text-gray-600 mx-2">·</span>
                      Issued {cert.issued}
                      {cert.expires && (
                        <>
                          <span className="text-gray-600 mx-2">·</span>
                          Expires {cert.expires}
                        </>
                      )}
                    </p>
                    {cert.credentialId && (
                      <p className="text-xs text-gray-500 mt-1">
                        Certificate ID: {cert.credentialId}
                      </p>
                    )}
                  </div>
                </div>

                <a
                  href={cert.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-shrink-0 inline-flex items-center gap-1.5 text-sm text-gray-300 hover:text-white transition-colors border border-white/10 rounded-lg px-3 py-1.5 hover:bg-white/5"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  View
                </a>
              </div>

              <p className="mt-4 text-gray-300 text-sm leading-relaxed pl-14">{cert.description}</p>

              <div className="mt-4 pl-14">
                <span className="inline-flex items-center gap-1.5 text-xs text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 rounded-full px-3 py-1">
                  <BadgeCheck className="w-3.5 h-3.5" />
                  Verified
                </span>
              </div>
            </article>
          </ScrollAnimation>
        ))}

        {/* Placeholder for future certs */}
        <ScrollAnimation>
          <div className="rounded-2xl border border-dashed border-white/10 bg-transparent p-6 sm:p-8 text-center">
            <p className="text-gray-600 text-sm">More certifications coming soon.</p>
          </div>
        </ScrollAnimation>
      </div>
    </div>
  );
};

export default Certifications;
