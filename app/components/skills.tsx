"use client";

import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaDocker,
  FaNodeJs,
  
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiPrisma,
  SiRedux,
  SiSupabase,
  SiMongodb,
  SiTailwindcss,
  SiBootstrap,
  SiPostman,
  SiGit,
} from "react-icons/si";

export default function Skills() {
  const skills = [
    { id: 1, name: "HTML", icon: <FaHtml5 className="text-orange-500 w-8 h-8" /> },
    { id: 2, name: "CSS", icon: <FaCss3Alt className="text-blue-500 w-8 h-8" /> },
    { id: 3, name: "JavaScript", icon: <FaJs className="text-yellow-400 w-8 h-8" /> },
    { id: 3, name: "TailwindCss", icon: <SiTailwindcss className="text-cyan-400 w-8 h-8" /> },
    { id: 3, name: "TailwindCss", icon: <SiBootstrap className="text-blue-600 w-8 h-8" /> },
    { id: 4, name: "React Js", icon: <FaReact className="w-8 h-8 text-cyan-400" /> },
    { id: 5, name: "Next.js", icon: <SiNextdotjs className="w-8 h-8 text-white" /> },
    { id: 6, name: "Prisma ORM", icon: <SiPrisma className="w-8 h-8 text-blue-400" /> },
    { id: 11, name: "Node.js", icon: <FaNodeJs className="w-8 h-8 text-green-600" /> },
    { id: 9, name: "MongoDB", icon: <SiMongodb className="w-8 h-8 text-green-500" /> },
    { id: 9, name: "Postman", icon: <SiPostman className="w-8 h-8 text-orange-500" /> },
    { id: 7, name: "Redux", icon: <SiRedux className="w-8 h-8 text-purple-500" /> },
    { id: 8, name: "Supabase", icon: <SiSupabase className="w-8 h-8 text-blue-500" /> },
    { id: 8, name: "Git", icon: <SiGit className="w-8 h-8 text-orange-600" /> },
    { id: 10, name: "Docker", icon: <FaDocker className="w-8 h-8 text-blue-600" /> },
  ];

  return (
    <section id="skills" className="py-20">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-5xl font-bold text-gray-300">
            My <span className="text-cyan-400">Skills</span>
          </h2>
          <p className="mt-4 text-gray-400 text-lg sm:text-xl max-w-2xl mx-auto">
            I work with modern web technologies to build responsive and interactive applications.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-6">
          {skills.map((skill) => (
            <div
              key={skill.id}
              className="flex flex-col items-center justify-center p-6 bg-gray-800 rounded-2xl shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer"
            >
              <div className="p-4 bg-gray-700 rounded-full mb-3">
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
