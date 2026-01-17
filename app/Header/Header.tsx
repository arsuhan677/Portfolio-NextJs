"use client";

import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 shadow-lg bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Left Links */}

          <div className="flex-shrink-0">
            <Link href="#home">
              <div className="text-2xl font-bold text-indigo-600">LOGO</div>
            </Link>
          </div>
          
          <div className="hidden md:flex space-x-8 text-[18px]">
            <Link
              href="#home"
              className="text-gray-500 hover:text-gray-800 font-medium"
            >
              Home
            </Link>
            <Link
              href="#about"
              className="text-gray-500 hover:text-gray-800 font-medium"
            >
              About
            </Link>
            <Link
              href="#skills"
              className="text-gray-500 hover:text-gray-800 font-medium"
            >
              Skills
            </Link>
            <Link
              href="#projects"
              className="text-gray-500 hover:text-gray-800 font-medium"
            >
              Projects
            </Link>
            <Link
              href="#contact"
              className="text-gray-500 hover:text-gray-800 font-medium"
            >
              Contact
            </Link>
          </div>

          {/* Right Buttons */}
          <div className="hidden md:flex space-x-4">
            <Link
              href="#contact"
              className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition"
            >
              Hire me
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-900 hover:text-indigo-600 focus:outline-none"
            >
              {mobileMenuOpen ? (
                // X icon
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                // Hamburger icon
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
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
        className={`fixed top-16 left-0 w-full bg-white border-t border-gray-200 shadow-lg z-50 transition-all duration-300 overflow-hidden ${
          mobileMenuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="px-4 pt-4 pb-6 space-y-2">
          <Link
            href="#home"
            onClick={handleLinkClick}
            className="block px-3 py-2 rounded-md text-gray-900 hover:bg-indigo-50 hover:text-indigo-600 transition"
          >
            Home
          </Link>
          <Link
            href="#about"
            onClick={handleLinkClick}
            className="block px-3 py-2 rounded-md text-gray-900 hover:bg-indigo-50 hover:text-indigo-600 transition"
          >
            About
          </Link>
          <Link
            href="#skills"
            onClick={handleLinkClick}
            className="block px-3 py-2 rounded-md text-gray-900 hover:bg-indigo-50 hover:text-indigo-600 transition"
          >
            Skills
          </Link>
          <Link
            href="#project"
            onClick={handleLinkClick}
            className="block px-3 py-2 rounded-md text-gray-900 hover:bg-indigo-50 hover:text-indigo-600 transition"
          >
            Projects
          </Link>
          <Link
            href="#contact"
            onClick={handleLinkClick}
            className="block px-3 py-2 rounded-md text-gray-900 hover:bg-indigo-50 hover:text-indigo-600 transition"
          >
            Contact
          </Link>
          <Link
            href="#contact"
            onClick={handleLinkClick}
            className="block px-3 py-2 rounded-md text-white bg-indigo-600 hover:bg-indigo-700 transition"
          >
            Hire me
          </Link>
        </nav>
      </div>
    </header>
  );
}
