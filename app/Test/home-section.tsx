import ProjectCard from "./project-card"
import FeaturedProjectCard from "./featured-project-card"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import React from "react"

export default function HomeSection() {
  const featuredProject = {
    title: "Electronics and phone store",
    description:
      "A clean and modern e-commerce store built with React Vite.js and Tailwind CSS. The website showcases a product listing interface with category filtering, responsive design across all devices, and smooth interactions.",
    image: "/project1.webp",
    role: "Frontend Developer",
    demoLink: "https://shop-project-mu-ecru.vercel.app/",
    sourceLink: "https://github.com/ahmed26-coder/Shop-Project",
    technologies: ["React Vite.js", "JavaScript", "Tailwind CSS"],
  }

  const projects = [
    {
      title: "A website for selling courses online",
      description: "Personal portfolio website built with Next.js and Tailwind CSS to showcase projects and skills.",
      image: "/project2.webp",
      role: "Frontend Developer",
      demoLink: "https://sourses-online.vercel.app/",
      sourceLink: "https://github.com/ahmed26-coder/Sourses",
      technologies: ["React", "javaScript", "Tailwind CSS"],
    },
    {
      title: "Task Management App",
      description:
        "A productivity application for managing tasks, projects, and deadlines with team collaboration features.",
      image: "/project3.webp",
      role: "Frontend Developer",
      demoLink: "https://endeavor-one.vercel.app/",
      sourceLink: "https://github.com/ahmed26-coder/Endeavor",
      technologies: ["React", "Tailwind CSS", "javaScript"],
    },
    {
      title: "Apartment Sale & Rent Website",
      description: "Real-time weather application with forecast data, location search, and interactive maps.",
      image: "/project9.webp",
      role: "Frontend Developer",
      demoLink: "https://meddical-three.vercel.app/",
      sourceLink: "https://github.com/ahmed26-coder/Meddical",
      technologies: ["Next.js", "Tailwind CSS", "TypeScript"],
    },
  ]

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 md:py-16">
      <div className="mb-16">
        <FeaturedProjectCard {...featuredProject} />
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  )
}
