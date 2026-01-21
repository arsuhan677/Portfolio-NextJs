"use client";

import Image from "next/image";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

export default function Projects() {
  const projects = [
    {
      title: "Doctor Appointment",
      description:
        "Full-Stack-Project Using NodeJs, ExpressJs, Mongodb, Nodemon with Next.js, Tailwind CSS, and ReactJs.",
      image:
        "/project/doc.png",
      live: "https://your-portfolio.com",
      github: "https://github.com/arsuhan677/Doctor-Appointment-with-NodeJs",
    },
    {
      title: "E-commerce App",
      description:
        "Full-stack e-commerce app using NextJs, PrismaORM, Prisma Studio PrismaORM, Prisma Studio",
      image:
        "/project/cap.png",
      live: "https://ecommerce-demo.com",
      github: "https://github.com/arsuhan677/Prisma-Full-Stack-Project-SA",
    },
    {
      title: "Todo Application",
      description:
        "A blog platform with Todo Application and CRUD operations using Rreact Js and JavaScript Update, Delete, Add...",
      image:
        "/project/todo.png",
      live: "https://admirable-mermaid-f670ab.netlify.app/",
      github: "https://admirable-mermaid-f670ab.netlify.app/",
    },
    {
      title: "React router Blog App",
      description:
        "A simple blog app built with React Router for smooth page navigation and dynamic routing. Using- React, React Router, TailwindCss,",
      image:
        "/project/logo.png",
      live: "https://react-recipes-explore-sa.vercel.app/",
      github: "https://github.com/arsuhan677/React-Recipes-Explore-SA",
    },
    {
      title: "Weather Buddy",
      description:
        "A weather app that shows real-time weather updates by searching any city. Using- ReactJs, TailwindCss, Public API....",

      image:
        "/project/waither.png",
      live: "https://react-weather-app-sa.vercel.app/",
      github: "https://github.com/arsuhan677/React-weather-app-SA",
    },
    {
      title: "Blog App",
      description:
          "A basic e-commerce app with product listing and cart functionality. Using- React, TailwindCss, React Router",

      image:
        "/project/shop.png",
      live: "https://shop-app-sa.vercel.app/ ",
      github: "https://github.com/arsuhan677/Shop-app-SA",
    },
  ];

  return (
    <section id="projects" className="py-2 lg:py-20">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-5xl font-bold text-gray-300">
            My <span className="text-cyan-400">Projects</span>
          </h2>
          <p className="mt-4 text-gray-400 text-lg sm:text-xl max-w-2xl mx-auto">
            Some of the projects I have built using modern web technologies.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-gray-800 rounded-2xl border hover:border-blue-300 overflow-hidden shadow-lg"
            >
              {/* Project Image */}
              <div className="relative w-full h-56 sm:h-64">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Project Info */}
              <div className="p-4 flex flex-col justify-between">
                <h3 className="text-xl font-semibold text-gray-300 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4">{project.description}</p>

                {/* Buttons */}
                <div className="flex justify-between mt-4">
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-400 text-white px-4 py-3 rounded-2xl transition mr-2"
                    >
                      Live <FaExternalLinkAlt />
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 bg-gray-700 hover:bg-gray-600 text-white px-4 py-3 rounded-2xl transition ml-2"
                    >
                      GitHub <FaGithub />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
