"use client"
import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ExternalLink, Github, ArrowUpRight } from "lucide-react"

interface FeaturedProjectCardProps {
  title: string
  id: string
  description: string
  image: string
  role: string
  demoLink?: string
  sourceLink?: string
  technologies: string[]
}

export default function FeaturedProjectCard({
  title,
  description,
  id,
  image,
  role,
  demoLink,
  sourceLink,
  technologies = [],
}: FeaturedProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <div className="group dark:hover:shadow-blue-500 dark:hover:border-blue-500 relative grid gap-8 xl:grid-cols-2 overflow-hidden rounded-xl border border-zinc-200 bg-white p-1 shadow-sm transition-all duration-300 hover:shadow-lg dark:border-zinc-800 dark:bg-zinc-900">
        <div className="relative overflow-hidden rounded-lg">
          <div className="aspect-video w-full overflow-hidden">
            <Image
              src={image || "/placeholder.svg"}
              alt={title}
              width={600}
              height={340}
              className={`h-full w-full object-cover transition-all duration-500 ${isHovered ? "scale-110" : "scale-100"}`}
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        </div>

        <div className="flex flex-col justify-between p-6">
          <div className="space-y-4">
            <div className="space-y-2">
              <div className="inline-block rounded-full bg-emerald-100 px-3 py-1 text-sm font-medium text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-400">
                {role}
              </div>
              <h3 className="text-2xl font-bold tracking-tight">{title}</h3>
              <p className="text-zinc-600 dark:text-zinc-400">{description}</p>
            </div>

            <div className="flex flex-wrap gap-2">
              {technologies.map((tech) => (
                <article
                  key={tech}
                  className="bg-zinc-100 text-zinc-800 py-0.5 px-3 hover:bg-blue-500 rounded-full dark:bg-zinc-800 dark:text-zinc-200"
                >
                  {tech}
                </article>
              ))}
            </div>
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            {demoLink && (
              <button>
                <Link href={demoLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1">
                  <ExternalLink className="h-4 w-4" />
                  Live Demo
                </Link>
              </button>
            )}
            {sourceLink && (
              <button>
                <Link href={sourceLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1">
                  <Github className="h-4 w-4" />
                  Source Code
                </Link>
              </button>
            )}
            <button className="ml-auto group" >
              <Link
                href={`/Project/${id}`}
                className="flex items-center gap-1"
              >
                View Project
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </Link>
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
