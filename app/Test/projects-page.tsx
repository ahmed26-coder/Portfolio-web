import ProjectCard from "./project-card"
import FeaturedProjectCard from "./featured-project-card"
import React from "react"

export default function ProjectsPage() {
   const featuredProject =
  {
    title: "A website for selling courses online",
    id:"1",
    description: "Personal portfolio website built with React.js and Tailwind CSS to showcase projects and skills.",
    image: "/project2.webp",
    role: "Frontend Developer",
    demoLink: "https://sourses-online.vercel.app/",
    sourceLink: "https://github.com/ahmed26-coder/Sourses",
    technologies: ["React", "javaScript", "Tailwind CSS"],
  }

   const projects = [
    {
      title: "Electronics and phone store",
      id:"2",
      description:
        "A clean and modern e-commerce store built with React Vite.js and Tailwind CSS. The website showcases a product listing interface with category filtering, responsive design across all devices, and smooth interactions.",
      image: "/project1.webp",
      role: "Frontend Developer",
      demoLink: "https://shop-project-mu-ecru.vercel.app/",
      sourceLink: "https://github.com/ahmed26-coder/Shop-Project",
      technologies: ["Vite.js", "JavaScript", "Tailwind CSS"],
    },
    {
      title: "Task Management App",
      id:"3",
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
      id:"4",
      description: "Real-time weather application with forecast data, location search, and interactive maps.",
      image: "/project9.webp",
      role: "Frontend Developer",
      demoLink: "https://meddical-three.vercel.app/",
      sourceLink: "https://github.com/ahmed26-coder/Meddical",
      technologies: ["Next.js", "Tailwind CSS", "TypeScript"],
    },
    {
      title: "Air travel website",
      id:"5",
      description: "Online learning platform with course management, video lessons, quizzes, and progress tracking.",
      image: "/project5.webp",
      role: "Frontend Developer",
      demoLink: "https://triptopia.vercel.app/",
      sourceLink: "https://github.com/ahmed26-coder/Triptopia",
      technologies: ["Java Script", "Next.js", "Tailwind CSS"],
    },
    {
      title: "Online Doctor",
      id:"6",
      description: "Analytics dashboard for social media accounts with engagement metrics and content performance.",
      image: "/project6.webp",
      role: "Frontend Developer",
      demoLink: "https://health-point-one.vercel.app/",
      sourceLink: "https://github.com/ahmed26-coder/Health-Point",
      technologies: ["Java Script", "Next.js", "Tailwind CSS"],
    },
    {
      title: "NFC selling site",
      id:"7",
      description:
        "Mobile-friendly application for discovering recipes based on available ingredients and dietary preferences.",
      image: "/project7.webp",
      role: "Frontend Developer",
      demoLink: "https://nfc-marketplace-neon.vercel.app/",
      sourceLink: "https://github.com/ahmed26-coder/NFC-Marketplace",
      technologies: ["Next.js", "Java Script", "Tailwind CSS"],
    },
  ]

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 md:py-16">
      <div className="mb-8">
        <h1 className="text-4xl font-bold tracking-tight mb-4">Projects</h1>
        <p className="text-zinc-600 dark:text-zinc-400 max-w-3xl">
          A collection of my recent work, showcasing my skills in frontend development, UI/UX design, and web
          technologies.
        </p>
      </div>

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
