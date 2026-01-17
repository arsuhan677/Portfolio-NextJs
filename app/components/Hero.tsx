"use client";

import Image from "next/image";
import { FaGithub, FaLinkedin, FaFacebook, FaTwitter } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-3 sm:px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        {/* RIGHT IMAGE (mobile first) */}
        <div className="order-1 lg:order-2 flex justify-center">
          <Image
            src="data:image/jpeg;base64,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" // তোমার image 그대로
            alt="Aminur Rahman"
            width={400}
            height={400}
            className="rounded-2xl shadow-2xl object-cover w-full max-w-sm sm:max-w-md transform transition duration-500 hover:scale-105"
          />
        </div>

        {/* LEFT CONTENT */}
        <div className="order-2 lg:order-1 text-center lg:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-bold leading-tight">
            <span className="text-cyan-400">Hello, I'm</span> <br />
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Aminur Rahman
            </span>
          </h1>

          <p className="mt-4 text-cyan-300 text-base sm:text-lg">
            Solving complex problems with clean code
          </p>

          <p className="mt-5 text-gray-300 max-w-xl mx-auto lg:mx-0">
            I specialize in building full-stack web applications with modern
            technologies. Passionate about creating elegant solutions that
            combine beautiful design with powerful functionality.
          </p>

          {/* BUTTONS */}
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <a
              href="#"
              className="w-full sm:w-auto text-center px-6 py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 font-semibold hover:opacity-90 transition"
            >
              ⬇ Download Resume
            </a>

            <a
              href="#projects"
              className="w-full sm:w-auto text-center px-6 py-3 rounded-lg border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black transition"
            >
              👁 View Projects
            </a>
          </div>

          {/* SOCIAL ICONS */}
          <div className="flex justify-center lg:justify-start gap-5 mt-8 text-xl text-gray-400">
            <FaGithub className="hover:text-white border rounded px-1 text-3xl cursor-pointer transition" />
            <FaLinkedin className="hover:text-white border rounded px-1 text-3xl cursor-pointer transition" />
            <FaFacebook className="hover:text-white border rounded px-1 text-3xl cursor-pointer transition" />
            <FaTwitter className="hover:text-white border rounded px-1 text-3xl cursor-pointer transition" />
          </div>
        </div>
      </div>
    </section>
  );
}
