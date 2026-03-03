"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Braces, Menu, X } from "lucide-react";

const navLinks = [
  { path: "/", label: "Home" },
  { path: "/experience", label: "Experience" },
  { path: "/projects", label: "Projects" },
  { path: "/skills", label: "Skills" },
  { path: "/education", label: "Education" },
  { path: "/about", label: "About" },
  { path: "/contact", label: "Contact" },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 w-full z-50 border-b border-white/10 bg-black/55 backdrop-blur-xl">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Braces className="w-5 h-5 text-gray-200" aria-hidden="true" />
            <span className="text-sm sm:text-base font-semibold tracking-wide text-white">
              Gunakarthik Lanka
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                className={`nav-link ${pathname === link.path ? "bg-white/10 text-white" : ""}`}
                aria-current={pathname === link.path ? "page" : undefined}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <button
            className="md:hidden p-2 text-gray-300 hover:text-white"
            onClick={() => setIsMenuOpen((prev) => !prev)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden border-t border-white/10 bg-black/95">
          <div className="px-4 py-3 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                className={`block px-3 py-2 rounded-lg text-sm ${pathname === link.path ? "bg-white/10 text-white" : "text-gray-300 hover:text-white"}`}
                onClick={() => setIsMenuOpen(false)}
                aria-current={pathname === link.path ? "page" : undefined}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
