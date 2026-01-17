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
              src="data:image/jpeg;base64,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"
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
