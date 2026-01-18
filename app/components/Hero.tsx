"use client";

import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaFacebook, FaTwitter } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="py-10">
      <div className="container mx-auto px-3 sm:px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* RIGHT */}
        <div className="order-1 lg:order-2 flex justify-center">
          <Image
            src="/images/logo.png"
            alt="logo"
            width={400}
            height={400}
            className="
    rounded-2xl
    object-cover
    w-full
    max-w-[680px] sm:max-w-[320px] md:max-w-[380px] lg:max-w-[820px]
    h-auto
  "
          />
        </div>

        {/* LEFT CONTENT */}
        <div className="order-2 lg:order-1 text-center lg:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-bold leading-tight">
            <span className="text-cyan-400 text-2xl lg:text-4xl">Hello, I'm</span> <br />
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Aminur Rahman
            </span>
          </h1>

          <p className="mt-4 text-cyan-300 text-base sm:text-2xl">
            Front End Developoer
          </p>

          <p className="mt-5 text-gray-300 max-w-xl mx-auto lg:mx-0">
            I specialize in building full-stack web applications with modern
            technologies. Passionate about creating elegant solutions that
            combine beautiful design with powerful functionality.
          </p>

          {/* BUTTONS */}
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Link
              href="https://drive.google.com/file/d/1pZUD8rx7Dedg_3Xcw1FY4L6HBZ3peZJv/view"
              className="w-full sm:w-auto text-center px-6 py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 font-semibold hover:opacity-90 transition"
            >
              ⬇ Download Resume
            </Link>

            <Link
              href="#projects"
              className="w-full sm:w-auto text-center px-6 py-3 rounded-lg border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black transition"
            >
              👁 View Projects
            </Link>
          </div>

          {/* SOCIAL ICONS */}
          <div className="flex justify-center lg:justify-start gap-5 mt-8 text-xl text-gray-400">
            <Link href="https://github.com/arsuhan677?tab=repositories">
              <FaGithub className="hover:text-white border rounded px-1 text-3xl cursor-pointer transition" />
            </Link>
            <Link href="https://www.linkedin.com/in/aminur-rahman-200366328/">
              <FaLinkedin className="hover:text-white border rounded px-1 text-3xl cursor-pointer transition" />
            </Link>
            <Link href="https://www.facebook.com/profile.php?id=100082093456990">
              <FaFacebook className="hover:text-white border rounded px-1 text-3xl cursor-pointer transition" />
            </Link>
            <FaTwitter className="hover:text-white border rounded px-1 text-3xl cursor-pointer transition" />
          </div>
        </div>
      </div>
    </section>
  );
}
