'use client';
import React from "react";
import Image from "next/image";
import { ExternalLink, Github } from "lucide-react";
import { DataProject } from "./Constent";
const ProjectCard = React.memo(({ project }) => {
  if (!project) return null;

  return (
    <div className="group relative bg-white/80 dark:bg-gray-800/90 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl xl:flex xl:h-75 w-full">
      <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none">
        <svg
          className="w-full h-full text-black dark:text-white"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="elegant-grid"
              x="0"
              y="0"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <path d="M0 0h40v40H0z" fill="none" />
              <circle cx="20" cy="20" r="1" fill="currentColor" />
              <path
                d="M0 20h40M20 0v40"
                stroke="currentColor"
                strokeWidth="0.6"
                strokeDasharray="1,3"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#elegant-grid)" />
        </svg>
      </div>
      <div className="absolute inset-0 opacity-[0.04] dark:opacity-[0.06] pointer-events-none overflow-hidden">
        <svg
          className="w-full h-full text-black dark:text-white"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0,50 Q25,30 50,50 T100,50"
            stroke="currentColor"
            fill="none"
            strokeWidth="1"
          />
          <path
            d="M0,70 Q25,50 50,70 T100,70"
            stroke="currentColor"
            fill="none"
            strokeWidth="1"
          />
          <path
            d="M0,30 Q25,10 50,30 T100,30"
            stroke="currentColor"
            fill="none"
            strokeWidth="1"
          />
        </svg>
      </div>
      <div className="relative xl:h-75 h-full xl:w-3/5 w-full overflow-hidden">
        <Image
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
          width={500}
          height={300}
          src={project.img}
          alt={project.title}
          loading="lazy"
          priority={false}
        />
        <div className="absolute inset-0 dark:bg-black/20 group-hover:bg-black/40 transition-all duration-300" />
      </div>

      <div className="p-6 md:w-full flex flex-col justify-between relative z-10">
        <div>
          <h3 className=" text-xl md:text-2xl  font-bold text-gray-900 dark:text-gray-100 mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
            {project.title}
          </h3>
          <p className="text-[#999999] hidden sm:block">{project.dish}</p>
          <p className=" hidden sm:block text-gray-600 dark:text-gray-300 mb-4 lg:text-lg text-base font-medium">
            {project.description}
          </p>
        </div>
        <div className=" lg:flex gap-4 justify-between items-center">
          <div className=" flex justify-between sm:gap-8 items-center">
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-base sm:text-lg font-medium text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors duration-300"
            >
              <ExternalLink size={25} />
              Live Demo
            </a>
            <a
              href={project.git}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-base sm:text-lg font-medium text-gray-700 dark:text-gray-300 hover:text-black transition-colors duration-300"
            >
              <Github size={25} />
              Source Code
            </a>
          </div>
          <div className="flex justify-between sm:gap-8 items-center mt-4">
            <p className=" bg-[#999999]/30 text-black dark:text-white font-medium py-[1px] px-4 rounded-full">
              {project.technique}
            </p>
            <p className=" bg-[#999999]/30 text-black dark:text-white font-medium py-[1px] px-4 rounded-full">
              {project.language}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
});

function App() {
  return (
    <div className="w-full my-10 mx-auto space-y-10 relative">
      {DataProject.map((project) => (
        <ProjectCard key={project.title} project={project} />
      ))}
    </div>
  );
}

export default App;
