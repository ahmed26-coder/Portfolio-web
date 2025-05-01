"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ExternalLink, Github, ArrowRight } from "lucide-react"
import React from "react"

interface ProjectCardProps {
  title: string
  description: string
  image: string
  role: string
  demoLink?: string
  sourceLink?: string
  technologies: string[]
}

export default function ProjectCard({
  title,
  description,
  image,
  role,
  demoLink,
  sourceLink,
  technologies = [],
}: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -5 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="h-full"
    >
      <section className="overflow-hidden border border-zinc-200  dark:hover:border-blue-500 dark:hover:shadow-blue-500 bg-white h-full transition-all duration-300 hover:shadow-lg dark:border-zinc-800 dark:bg-zinc-900">
        <div className="relative overflow-hidden">
          <div className="aspect-video w-full overflow-hidden">
            <Image
              src={image || "/placeholder.svg"}
              alt={title}
              width={600}
              height={340}
              className={`h-full w-full object-cover transition-all duration-500 ${isHovered ? "scale-110" : "scale-100"}`}
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity duration-300 hover:opacity-100 flex items-end p-4">
            <div className="flex gap-3">
              {demoLink && (
                <button>
                  <Link href={demoLink} target="_blank" rel="noopener noreferrer" className="flex bg-white py-0.5 px-2 rounded-full text-black items-center gap-1">
                    <ExternalLink className="h-4 w-4" />
                    Live Demo
                  </Link>
                </button>
              )}
              {sourceLink && (
                <button>
                  <Link href={sourceLink} target="_blank" rel="noopener noreferrer" className="flex bg-white py-0.5 px-2 rounded-full text-black items-center gap-1">
                    <Github className="h-4 w-4" />
                    Source Code
                  </Link>
                </button>
              )}
            </div>
          </div>
        </div>
        <div className="p-4 pb-2">
          <div className="text-sm font-medium text-emerald-600 dark:text-emerald-400">{role}</div>
          <div className="text-xl font-bold tracking-tight">{title}</div>
        </div>
        <div className="p-4 pt-2">
          <div className="line-clamp-3 text-zinc-600 dark:text-zinc-400">{description}</div>
        </div>
        <div className="flex flex-col items-start gap-4 p-4 pt-0">
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech) => (
              <article
                key={tech}
                className="bg-zinc-100 py-0.5 rounded-full px-2 text-zinc-800 dark:bg-zinc-800 dark:text-zinc-200"
              >
                {tech}
              </article>
            ))}
          </div>
          <button className="ml-auto group flex items-center gap-1">
            View Details
            <ArrowRight className="ml-1 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      </section>
    </motion.div>
  )
}
