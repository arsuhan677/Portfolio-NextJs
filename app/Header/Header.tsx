"use client";

import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-[#020617]/70 border-b border-white/10 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="#home">
              <span className="text-2xl font-bold text-indigo-500">
                AR Suhan
              </span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 text-[18px]">
            {["home", "about", "skills", "projects", "contact"].map(
              (item) => (
                <Link
                  key={item}
                  href={`#${item}`}
                  className="text-gray-300 hover:text-white font-medium transition"
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </Link>
              )
            )}
          </div>

          {/* Desktop Button */}
          <div className="hidden md:flex">
            <Link
              href="#contact"
              className="text-white px-6 py-2 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 font-semibold hover:opacity-90 transition"
            >
              Hire Me
            </Link>
          </div>

          {/* Mobile Button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-300 hover:text-white focus:outline-none"
            >
              {mobileMenuOpen ? (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-16 left-0 w-full backdrop-blur-md bg-[#020617]/90 border-t border-white/10 shadow-lg z-50 transition-all duration-300 overflow-hidden ${
          mobileMenuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="px-4 pt-4 pb-6 space-y-2">
          {["home", "about", "skills", "projects", "contact"].map(
            (item) => (
              <Link
                key={item}
                href={`#${item}`}
                onClick={handleLinkClick}
                className="block px-3 py-2 rounded-md text-gray-300 hover:bg-white/10 hover:text-white transition"
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </Link>
            )
          )}

          <Link
            href="#contact"
            onClick={handleLinkClick}
            className="block px-3 py-2 rounded-md text-white bg-indigo-600 hover:bg-indigo-700 transition"
          >
            Hire Me
          </Link>
        </nav>
      </div>
    </header>
  );
}
