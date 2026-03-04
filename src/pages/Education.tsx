"use client";

import { ScrollAnimation } from "@/components/ScrollAnimation";

const Education = () => {
  return (
    <div className="min-h-screen pt-24 pb-20 px-4 max-w-5xl mx-auto">
      <ScrollAnimation>
        <h2 className="text-3xl sm:text-4xl font-bold text-white">Education</h2>
      </ScrollAnimation>

      <ScrollAnimation>
        <div className="mt-8 rounded-2xl border border-white/10 bg-black/45 p-6 backdrop-blur-sm flex items-center gap-4">
          <img
            src="/education/logo.png"
            alt="Arizona State University logo"
            className="w-16 h-16 rounded-lg border border-white/10 object-contain bg-white p-1"
          />
          <div>
            <h3 className="text-xl font-semibold text-white">Arizona State University</h3>
            <p className="text-sm text-gray-400">Tempe, AZ • Accelerated (4+1) degree Majoring in Computer Science with a minor in Business</p>
          </div>
        </div>
      </ScrollAnimation>

      <div className="mt-5 space-y-4">
        <ScrollAnimation>
          <section className="rounded-2xl border border-white/10 bg-black/45 p-6 backdrop-blur-sm">
            <p className="text-xs uppercase tracking-wider text-gray-500">Graduate Degree</p>
            <h3 className="text-2xl font-semibold text-white mt-2">M.S. Computer Science</h3>
            <p className="text-gray-300 mt-3">January 2025 - December 2025</p>
            <p className="text-gray-300 mt-3">GPA: 4.0</p>
            <p className="text-sm text-gray-500 mt-1">Completed as part of an accelerated master&apos;s track.</p>
            <ul className="mt-4 list-disc pl-5 text-gray-300 space-y-1">
              <li>Advanced depth in software engineering and backend system development.</li>
              <li>Strengthened system design, API architecture, and scalable application thinking.</li>
              <li>Applied graduate-level engineering rigor to production-style projects.</li>
            </ul>
            <p className="text-sm text-gray-400 mt-4">Key graduate coursework:</p>
            <ul className="mt-2 list-disc pl-5 text-sm text-gray-300 space-y-1">
              <li>Data processing at scale and large-system data pipelines.</li>
              <li>Software security and secure software development practices.</li>
              <li>Software project, process, and quality management.</li>
              <li>Data mining, semantic web mining, and knowledge representation.</li>
              <li>Statistical machine learning and data visualization.</li>
              <li>Special topics in blockchain engineering applications.</li>
            </ul>
          </section>
        </ScrollAnimation>

        <ScrollAnimation>
          <section className="rounded-2xl border border-white/10 bg-black/45 p-6 backdrop-blur-sm">
            <p className="text-xs uppercase tracking-wider text-gray-500">Undergraduate Degree</p>
            <h3 className="text-2xl font-semibold text-white mt-2">B.S. Computer Science</h3>
            <p className="text-gray-300 mt-3">August 2021 - December 2024</p>
            <p className="text-gray-300 mt-3">GPA: 4.0</p>
            <ul className="mt-4 list-disc pl-5 text-gray-300 space-y-1">
              <li>Built core foundations in algorithms, data structures, and software development lifecycle.</li>
              <li>Developed full-stack and backend projects using APIs, databases, and testing workflows.</li>
              <li>Prepared technical base for accelerated transition into master&apos;s-level study.</li>
            </ul>
            <p className="text-sm text-gray-400 mt-4">Key undergraduate coursework:</p>
            <ul className="mt-2 list-disc pl-5 text-sm text-gray-300 space-y-1">
              <li>Programming fundamentals, object-oriented programming, and programming language concepts.</li>
              <li>Computer organization, operating systems, and software engineering principles.</li>
              <li>Data structures and algorithms with strong problem-solving foundations.</li>
              <li>Database management, software quality assurance, and testing.</li>
              <li>Machine learning foundations, capstone design, and applied project work.</li>
              <li>Discrete mathematics, linear algebra, probability, and statistics for computing.</li>
            </ul>
          </section>
        </ScrollAnimation>

        <ScrollAnimation>
          <section className="rounded-2xl border border-white/10 bg-black/45 p-6 backdrop-blur-sm">
            <p className="text-xs uppercase tracking-wider text-gray-500">Minor</p>
            <h3 className="text-2xl font-semibold text-white mt-2">Business (During B.S.)</h3>
            <ul className="mt-4 list-disc pl-5 text-gray-300 space-y-1">
              <li>Developed business context for product decisions and stakeholder communication.</li>
              <li>Improved ability to align technical implementation with practical business outcomes.</li>
            </ul>
            <p className="text-sm text-gray-400 mt-4">Business/economics coursework:</p>
            <ul className="mt-2 list-disc pl-5 text-sm text-gray-300 space-y-1">
              <li>Accounting and financial analysis.</li>
              <li>Management strategy and marketing essentials.</li>
              <li>Personal finance fundamentals and economic principles.</li>
            </ul>
          </section>
        </ScrollAnimation>
      </div>
    </div>
  );
};

export default Education;
