"use client";
import Image from "next/image";
import Link from "next/link";

export default function AboutMeSection() {
  return (
    <section id="about" className="py-2 lg:py-20">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-5xl font-bold text-gray-300">
            About <span className="text-cyan-400">
              Me
            </span>
          </h2>
          <p className="mt-4 text-gray-200 text-base sm:text-xl">
            I’m a passionate developer crafting modern
          </p>
        </div>

        {/* Content */}
        <div className="flex flex-col md:flex-row items-stretch gap-12">
          
          {/* Image */}
          <div className="w-full lg:mt-8 md:w-4/8 relative">
            <Image
              src="/images/suhan.png"
              alt="About Me"
              width={600} 
              height={600}
              className="rounded-2xl shadow-2xl object-cover w-full h-full"
            />
          </div>

          {/* Text */}
          <div className="w-full lg:mt-8 md:w-8/12 flex flex-col justify-center space-y-6">
            <h3 className="lg:text-3xl text-xl sm:text-4xl font-bold text-gray-300">
              Passionate Developer <br />
              <span className="lg:text-3xl text-xl bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Building Digital Solutions</span>
            </h3>
            <p className="text-gray-300 lg:text-lg text-sm leading-relaxed">
              I'm <span className="text-cyan-400 font-bold"> Aminur Rahman,</span> a full-stack developer pursuing my Bachelor's in Computer Science & Engineering. I specialize in creating scalable, user-centric applications with modern technologies.
            </p>
            <p className="text-gray-300 lg:text-lg text-sm leading-relaxed">
              I specialize in React, Next.js, Node.js, and modern databases, building web applications that solve real-world problems. With a focus on clean code, scalable architecture, and great UX, I’ve worked on OTA platforms, HRMS systems, and e-commerce solutions. I’m passionate about creating intuitive interfaces and robust backends that make a meaningful impact.

              scalable architecture, and great UX, I’ve worked on OTA platforms, HRMS systems, and e-commerce solutions. I’m passionate about creating intuitive interfaces and robust backends that make a meaningful impact.interfaces and robust backends that make a meaningful impact.
            </p>
            {/* Call to Action Buttons */}
            {/* <div className="flex w-full gap-3 lg:gap-6 mt-4"> */}
            <div className="mt-8 flex gap-3 lg:gap-4 xs:gap-4 xs:justify-between">
              <Link target="_blank" href="https://drive.google.com/file/d/1T7cZj9sDbO2jm-JfuDGFt558KTtjkEsJ/view?usp=sharing" className="w-max bg-blue-500 hover:bg-blue-400 text-white lg:px-4 px-10 py-3 rounded-lg shadow-lg cursor-pointer">
                Download Resume
              </Link>
              <Link href="#contact" className="w-max bg-gray-700 hover:bg-gray-600 text-white px-8 py-3 rounded-lg shadow-lg cursor-pointer">
                Contact Me
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
