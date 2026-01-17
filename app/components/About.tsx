"use client";
import Image from "next/image";

export default function AboutMeSection() {
  return (
    <section id="about" className="py-2 lg:py-20">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-300">
            About Me
          </h2>
          <p className="mt-4 text-gray-300 text-lg sm:text-xl">
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
              I'm <span className="text-cyan-400"> Aminur Rahman,</span> a full-stack developer pursuing my Bachelor's in Computer Science & Engineering. I specialize in creating scalable, user-centric applications with modern technologies.
            </p>
            <p className="text-gray-300 lg:text-lg text-sm leading-relaxed">
              With expertise in React, Next.js, Node.js, and modern databases, I build applications that solve real-world problems. My focus is on clean code, exceptional UX, and scalable architecture.
              I've worked on OTA platforms, HRMS systems, and e-commerce solutions. I'm driven by the challenge of creating intuitive interfaces and robust backend systems that make a difference.
            </p>
            {/* Call to Action Buttons */}
            <div className="flex gap-3 lg:gap-6 mt-4">
              <button className="w-max bg-blue-500 hover:bg-blue-400 text-white lg:px-4 px-3 py-3 rounded-lg shadow-lg cursor-pointer">
                Download Resume
              </button>
              <button className="w-max bg-gray-700 hover:bg-gray-600 text-white px-4 py-3 rounded-lg shadow-lg cursor-pointer">
                Contact Me
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
