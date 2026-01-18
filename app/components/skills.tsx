"use client";

import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaDocker, FaNodeJs } from "react-icons/fa";
import { SiNextdotjs, SiPrisma, SiRedux, SiSupabase, SiMongodb } from "react-icons/si";

export default function Skills() {
  const skills = [
    { name: "HTML", icon: <FaHtml5 className="text-orange-500 w-8 h-8" /> },
    { name: "CSS", icon: <FaCss3Alt className="text-blue-500 w-8 h-8" /> },
    { name: "JavaScript", icon: <FaJs className="text-yellow-400 w-8 h-8" /> },
    { name: "React Js", icon: <FaReact className="w-8 h-8 text-cyan-400" /> },
    { name: "Next.js", icon: <SiNextdotjs className="w-8 h-8 text-white" /> },
    { name: "Prisma ORM", icon: <SiPrisma className="w-8 h-8 text-blue-400" /> },
    { name: "Redux", icon: <SiRedux className="w-8 h-8 text-purple-500" /> },
    { name: "Supabase", icon: <SiSupabase className="w-8 h-8 text-blue-500" /> },
    { name: "MongoDB", icon: <SiMongodb className="w-8 h-8 text-green-500" /> },
    { name: "Docker", icon: <FaDocker className="w-8 h-8 text-blue-600" /> },
    { name: "Node.js", icon: <FaNodeJs className="w-8 h-8 text-green-600" /> },
    { name: "MongoDB", icon: <SiMongodb className="w-8 h-8 text-green-500" /> },
    { name: "Docker", icon: <FaDocker className="w-8 h-8 text-blue-600" /> },
    { name: "Node.js", icon: <FaNodeJs className="w-8 h-8 text-green-600" /> },
  ];

  return (
    <section id="skills" className="py-20">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-5xl font-extrabold text-gray-300">
            My Skills
          </h2>
          <p className="mt-4 text-gray-400 text-lg sm:text-xl max-w-2xl mx-auto">
            I work with modern web technologies to build responsive and interactive applications.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-6">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="flex flex-col items-center justify-center p-6 bg-gray-800 rounded-2xl shadow-lg hover:scale-105 hover:from-blue-500 hover:to-cyan-500 transition-all duration-300 cursor-pointer"
            >
              <div className="p-4 bg-gray-700 rounded-full flex items-center justify-center mb-3">
                {skill.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-300 text-center">
                {skill.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
