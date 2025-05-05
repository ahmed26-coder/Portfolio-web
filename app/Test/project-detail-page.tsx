"use client"
import Image from "next/image"
import Link from "next/link"
import { useState, useEffect, useMemo, useCallback } from "react";
import { useParams } from "next/navigation"
import {
  ArrowLeft,
  ArrowRight,
  Calendar,
  ExternalLink,
  Github,
  Clock,
  Users,
  ChevronLeft,
  ChevronRight,
} from "lucide-react"
import ProjectCard from "./project-card"

interface ProjectImage {
  src: string
  alt: string
}

interface ProjectDetail {
  id: string
  title: string
  role: string
  client?: string
  date: string
  duration: string
  description: string
  longDescription: string
  challenge: string
  solution: string
  outcome: string
  mainImage: string
  images: ProjectImage[]
  demoLink?: string
  sourceLink?: string
  technologies: string[]
  team?: string[]
  relatedProjects: RelatedProject[]
}

interface RelatedProject {
  id: string
  title: string
  description: string
  image: string
  role: string
  technologies: string[]
  demoLink?: string
  sourceLink?: string
}

const projectsData: ProjectDetail[] = [
  {
    id: "1",
    title: "A website for selling courses online",
    role: "Frontend Developer",
    client: "Personal Project",
    date: "January 2023",
    duration: "3 weeks",
    description: "Personal portfolio website built with React.js and Tailwind CSS to showcase projects and skills.",
    longDescription:
      "An online platform for selling and managing courses. Built using React.js and Tailwind CSS, the site allows users to explore various courses with an intuitive interface and responsive design.",
    challenge:
      "The challenge was to build a full-featured e-learning interface that was both visually appealing and user-friendly, allowing users to easily navigate courses and view content.",
    solution:
      "I structured the project with a clean UI using Tailwind CSS and React components. Features include category filtering, detailed course views, and a responsive layout that adapts to all devices.",
    outcome:
      "The site successfully showcases multiple courses and has attracted positive feedback for its design and performance. It's being used as a template for future e-learning platforms.",
    mainImage: "/project2.webp",
    images: [
      { src: "/project2.webp", alt: "Homepage" },
      { src: "/project2.webp", alt: "Course details" },
      { src: "/project2.webp", alt: "Course details" },
      { src: "/project2.webp", alt: "Course details" },
      { src: "/project2.webp", alt: "Course details" },
    ],
    demoLink: "https://sourses-online.vercel.app/",
    sourceLink: "https://github.com/ahmed26-coder/Sourses",
    technologies: ["React", "javaScript", "Tailwind CSS"],
    relatedProjects: [
      {
        id: "6",
        title: "Online Doctor",
        description: "Analytics dashboard for social media accounts with engagement metrics and content performance.",
        image: "/project6.webp",
        role: "Frontend Developer",
        demoLink: "https://health-point-one.vercel.app/",
        sourceLink: "https://github.com/ahmed26-coder/Health-Point",
        technologies: ["Java Script", "Next.js", "Tailwind CSS"],
      },
      {
        id: "3",
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
        id: "4",
        title: "Apartment Sale & Rent Website",
        description: "Real-time weather application with forecast data, location search, and interactive maps.",
        image: "/project9.webp",
        role: "Frontend Developer",
        demoLink: "https://meddical-three.vercel.app/",
        sourceLink: "https://github.com/ahmed26-coder/Meddical",
        technologies: ["Next.js", "Tailwind CSS", "TypeScript"],
      },
    ],
  },
  {
    id: "2",
    title: "Electronics and phone store",
    role: "Frontend Developer",
    client: "TechGadgets Inc.",
    date: "January 2023",
    duration: "3 months",
    description: "A clean and modern e-commerce store built with React Vite.js and Tailwind CSS.",
    longDescription:
      "A clean and modern e-commerce store built with React Vite.js and Tailwind CSS. The website showcases a product listing interface with category filtering, responsive design across all devices, and smooth interactions. This project demonstrates strong front-end skills with a focus on layout, accessibility, and user experience.",
    challenge:
      "The client needed a modern e-commerce platform that could showcase their extensive product catalog while providing an intuitive shopping experience. The main challenges included implementing a responsive design that works across all devices, creating an efficient filtering system for product categories, and ensuring fast load times despite the large number of product images.",
    solution:
      "I developed a React-based solution using Vite.js for optimal performance and Tailwind CSS for responsive styling. The application features a component-based architecture that allows for easy maintenance and scalability. I implemented a custom filtering system that updates the product display in real-time without page reloads, and optimized all images using modern formats and lazy loading techniques.",
    outcome:
      "The final product resulted in a 40% increase in mobile conversions and a 25% decrease in bounce rate compared to the client's previous website. The new filtering system has improved user engagement, with customers spending an average of 3 minutes longer on the site. The client has reported positive feedback from customers about the improved shopping experience and easier navigation.",
    mainImage: "/project1.webp",
    images: [
      { src: "/project1.webp", alt: "Homepage view" },
      { src: "/project1.webp", alt: "Product listing page" },
      { src: "/project1.webp", alt: "Product detail view" },
      { src: "/project1.webp", alt: "Shopping cart" },
      { src: "/project1.webp", alt: "Checkout process" },
    ],
    demoLink: "https://exclusive-seven-rho.vercel.app/",
    sourceLink: "https://github.com/ahmed26-coder/Exclusive",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    team: ["Frontend Developer", "UI/UX Designer", "Backend Developer"],
    relatedProjects: [
      {
        id: "1",
        title: "A website for selling courses online",
        description: "Personal portfolio website built with React.js and Tailwind CSS to showcase projects and skills.",
        image: "/project2.webp",
        role: "Frontend Developer",
        demoLink: "https://sourses-online.vercel.app/",
        sourceLink: "https://github.com/ahmed26-coder/Sourses",
        technologies: ["React", "javaScript", "Tailwind CSS"],
      },
      {
        id: "3",
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
        id: "4",
        title: "Apartment Sale & Rent Website",
        description: "Real-time weather application with forecast data, location search, and interactive maps.",
        image: "/project9.webp",
        role: "Frontend Developer",
        demoLink: "https://meddical-three.vercel.app/",
        sourceLink: "https://github.com/ahmed26-coder/Meddical",
        technologies: ["Next.js", "Tailwind CSS", "TypeScript"],
      },
    ],
  },
  {
    id: "3",
    title: "Task Management App",
    role: "Frontend Developer",
    client: "Personal Project",
    date: "February 2023",
    duration: "2 weeks",
    description: "A productivity application for managing tasks, projects, and deadlines with team collaboration features.",
    longDescription:
      "A web app for efficiently managing tasks and teams. Built with React and Tailwind CSS, this project includes features like task status tracking, deadlines, and real-time updates.",
    challenge:
      "Building a user interface that can handle complex task states and interactions while keeping everything responsive and easy to use.",
    solution:
      "Used React to build reusable components and Tailwind CSS for styling. I implemented task filtering, drag-and-drop features, and used a JSON structure for easy data handling.",
    outcome:
      "The app is now used internally by a small team for productivity, and it serves as a showcase for my ability to create interactive, dynamic UIs.",
    mainImage: "/project3.webp",
    images: [
      { src: "/project3.webp", alt: "Dashboard" },
      { src: "/project3.webp", alt: "Task details" },
      { src: "/project3.webp", alt: "Task details" },
      { src: "/project3.webp", alt: "Task details" },
      { src: "/project3.webp", alt: "Task details" },
    ],
    demoLink: "https://endeavor-one.vercel.app/",
    sourceLink: "https://github.com/ahmed26-coder/Endeavor",
    technologies: ["React", "Tailwind CSS", "javaScript"],
    relatedProjects: [
      {
        title: "Apartment Sale & Rent Website",
        id: "4",
        description: "Real-time weather application with forecast data, location search, and interactive maps.",
        image: "/project9.webp",
        role: "Frontend Developer",
        demoLink: "https://meddical-three.vercel.app/",
        sourceLink: "https://github.com/ahmed26-coder/Meddical",
        technologies: ["Next.js", "Tailwind CSS", "TypeScript"],
      },
      {
        title: "Online Doctor",
        id: "6",
        description: "Analytics dashboard for social media accounts with engagement metrics and content performance.",
        image: "/project6.webp",
        role: "Frontend Developer",
        demoLink: "https://health-point-one.vercel.app/",
        sourceLink: "https://github.com/ahmed26-coder/Health-Point",
        technologies: ["Java Script", "Next.js", "Tailwind CSS"],
      },
      {
        title: "NFC selling site",
        id: "7",
        description:
          "Mobile-friendly application for discovering recipes based on available ingredients and dietary preferences.",
        image: "/project7.webp",
        role: "Frontend Developer",
        demoLink: "https://nfc-marketplace-neon.vercel.app/",
        sourceLink: "https://github.com/ahmed26-coder/NFC-Marketplace",
        technologies: ["Next.js", "Java Script", "Tailwind CSS"],
      },
    ],
  },
  {
    id: "4",
    title: "Apartment Sale & Rent Website",
    role: "Frontend Developer",
    client: "Personal Project",
    date: "March 2023",
    duration: "2 weeks",
    description: "Personal portfolio website built with Next.js and Tailwind CSS to showcase projects and skills.",
    longDescription:
      "A personal portfolio website designed and developed to showcase my projects, skills, and experience. Built with Next.js and Tailwind CSS, the site features a clean, modern design with smooth animations and responsive layouts that work perfectly on all devices.",
    challenge:
      "I needed a professional platform to showcase my work and skills to potential clients and employers. The challenge was to create a site that was visually appealing while also being fast, accessible, and easy to update with new projects and information.",
    solution:
      "I chose Next.js for its excellent performance and SEO capabilities, combined with Tailwind CSS for rapid styling. The site features a component-based architecture that makes it easy to maintain and update. I implemented responsive design principles to ensure the site looks great on all devices, and added subtle animations to enhance the user experience without being distracting.",
    outcome:
      "The portfolio has successfully attracted client interest and positive feedback from the web development community. The site achieves perfect Lighthouse scores for performance, accessibility, and SEO, and has helped me secure new freelance opportunities.",
    mainImage: "/project9.webp",
    images: [
      { src: "/project9.webp", alt: "Homepage" },
      { src: "/project9.webp", alt: "Projects page" },
      { src: "/project9.webp", alt: "About me section" },
      { src: "/project9.webp", alt: "Contact form" },
    ],
    demoLink: "https://meddical-three.vercel.app/",
    sourceLink: "https://github.com/ahmed26-coder/Meddical",
    technologies: ["Next.js", "Tailwind CSS", "TypeScript"],
    relatedProjects: [
      {
        id: "3",
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
        id: "5",
        title: "Air travel website",
        description: "Online learning platform with course management, video lessons, quizzes, and progress tracking.",
        image: "/project5.webp",
        role: "Frontend Developer",
        demoLink: "https://triptopia.vercel.app/",
        sourceLink: "https://github.com/ahmed26-coder/Triptopia",
        technologies: ["Java Script", "Next.js", "Tailwind CSS"],
      },
      {
        id: "6",
        title: "Online Doctor",
        description: "Analytics dashboard for social media accounts with engagement metrics and content performance.",
        image: "/project6.webp",
        role: "Frontend Developer",
        demoLink: "https://health-point-one.vercel.app/",
        sourceLink: "https://github.com/ahmed26-coder/Health-Point",
        technologies: ["Java Script", "Next.js", "Tailwind CSS"],
      },
    ],
  },
  {
    id: "5",
    title: "Air travel website",
    role: "Frontend Developer",
    client: "Personal Project",
    date: "March 2023",
    duration: "2 weeks",
    description: "Travel booking website with destination highlights and flight schedules using modern UI components.",
    longDescription:
      "A sleek and modern site for air travel services, featuring booking options, travel destination highlights, and flight schedules. Built with Next.js for performance and SEO.",
    challenge:
      "Designing a travel website that gives users all essential information at a glance while keeping the experience fast and engaging.",
    solution:
      "Utilized Next.js routing and dynamic pages to create destination-based views and responsive components for a smooth user experience.",
    outcome:
      "Users praised the site for its elegant UI and ease of navigation. It now serves as a travel UI demo for future freelance clients.",
    mainImage: "/project5.webp",
    images: [
      { src: "/project5.webp", alt: "Homepage" },
      { src: "/project5.webp", alt: "Booking interface" },
      { src: "/project5.webp", alt: "Homepage" },
      { src: "/project5.webp", alt: "Booking interface" },
      { src: "/project5.webp", alt: "Homepage" },
    ],
    demoLink: "https://triptopia.vercel.app/",
    sourceLink: "https://github.com/ahmed26-coder/Triptopia",
    technologies: ["Java Script", "Next.js", "Tailwind CSS"],
    relatedProjects: [
      {
        id: "2",
        title: "Electronics and phone store",
        description:
          "A clean and modern e-commerce store built with React Vite.js and Tailwind CSS. The website showcases a product listing interface with category filtering, responsive design across all devices, and smooth interactions.",
        image: "/project1.webp",
        role: "Frontend Developer",
        demoLink: "https://exclusive-seven-rho.vercel.app/",
        sourceLink: "https://github.com/ahmed26-coder/Exclusive",
        technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
      },
      {
        id: "3",
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
        id: "6",
        title: "Online Doctor",
        description: "Analytics dashboard for social media accounts with engagement metrics and content performance.",
        image: "/project6.webp",
        role: "Frontend Developer",
        demoLink: "https://health-point-one.vercel.app/",
        sourceLink: "https://github.com/ahmed26-coder/Health-Point",
        technologies: ["Java Script", "Next.js", "Tailwind CSS"],
      },
    ],
  },
  {
    id: "6",
    title: "Online Doctor",
    role: "Frontend Developer",
    client: "Personal Project",
    date: "April 2023",
    duration: "1.5 weeks",
    description: "Analytics dashboard for social media accounts with engagement metrics and content performance.",
    longDescription:
      "A health-focused web app built for online doctor consultations and appointment management. The site features an intuitive interface for users to book appointments, read doctor profiles, and manage their medical sessions. Built using Next.js and Tailwind CSS for responsiveness and performance.",
    challenge:
      "Creating a clean and trustworthy UI for healthcare services, while ensuring the site handles multiple components like scheduling, profiles, and user interaction smoothly.",
    solution:
      "Used Next.js to manage routing and performance, while Tailwind CSS provided fast and scalable styling. I developed components for doctor listings, appointment booking, and mobile-first design to ensure accessibility across devices.",
    outcome:
      "The platform was well-received by test users for its ease of use and modern design. It stands as a strong portfolio example for building specialized web applications in the health domain.",
    mainImage: "/project6.webp",
    images: [
      { src: "/project6.webp", alt: "Homepage" },
      { src: "/project6.webp", alt: "Doctor listing" },
      { src: "/project6.webp", alt: "Appointment booking" },
    ],
    demoLink: "https://health-point-one.vercel.app/",
    sourceLink: "https://github.com/ahmed26-coder/Health-Point",
    technologies: ["Java Script", "Next.js", "Tailwind CSS"],
    relatedProjects: [
      {
        id: "3",
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
        id: "5",
        title: "Air travel website",
        description: "Online learning platform with course management, video lessons, quizzes, and progress tracking.",
        image: "/project5.webp",
        role: "Frontend Developer",
        demoLink: "https://triptopia.vercel.app/",
        sourceLink: "https://github.com/ahmed26-coder/Triptopia",
        technologies: ["Java Script", "Next.js", "Tailwind CSS"],
      },
      {
        id: "7",
        title: "NFC selling site",
        description:
          "Mobile-friendly application for discovering recipes based on available ingredients and dietary preferences.",
        image: "/project7.webp",
        role: "Frontend Developer",
        demoLink: "https://nfc-marketplace-neon.vercel.app/",
        sourceLink: "https://github.com/ahmed26-coder/NFC-Marketplace",
        technologies: ["Next.js", "Java Script", "Tailwind CSS"],
      },
    ],
  },
  {
    id: "7",
    title: "NFC selling site",
    role: "Frontend Developer",
    client: "ProductiveCo",
    date: "June 2023",
    duration: "4 months",
    description:
      "A productivity application for managing tasks, projects, and deadlines with team collaboration features.",
    longDescription:
      "A comprehensive task management application designed for teams to organize projects, track progress, and meet deadlines. The app features real-time updates, task assignments, priority levels, deadline notifications, and detailed reporting to help teams stay productive and organized.",
    challenge:
      "The client needed a custom task management solution that would integrate with their existing workflow and tools. They required features not available in off-the-shelf solutions, including custom reporting, specific permission levels, and integration with their proprietary systems.",
    solution:
      "I developed a full-stack application using React for the frontend and Node.js with MongoDB for the backend. The application implements a real-time notification system using WebSockets, a drag-and-drop interface for task management, and a comprehensive API for integration with other tools. The design focuses on usability with an intuitive interface that requires minimal training for new users.",
    outcome:
      "After implementation, the client reported a 30% increase in team productivity and a significant reduction in missed deadlines. The application is now used daily by over 50 team members and has become an essential part of their workflow. The client has requested additional features and modules to expand the system's capabilities.",
    mainImage: "/project7.webp",
    images: [
      { src: "/project7.webp", alt: "Dashboard view" },
      { src: "/project7.webp", alt: "Task board" },
      { src: "/project7.webp", alt: "Task detail modal" },
      { src: "/project7.webp", alt: "Calendar view" },
      { src: "/project7.webp", alt: "Reports and analytics" },
    ],
    demoLink: "https://nfc-marketplace-neon.vercel.app/",
    sourceLink: "https://github.com/ahmed26-coder/NFC-Marketplace",
    technologies: ["Next.js", "Java Script", "Tailwind CSS"],
    team: ["Frontend Developer", "UI/UX Designer", "Project Manager", "Backend Developer"],
    relatedProjects: [
      {
        id: "2",
        title: "Electronics and phone store",
        description:
          "A clean and modern e-commerce store built with React Vite.js and Tailwind CSS. The website showcases a product listing interface with category filtering, responsive design across all devices, and smooth interactions.",
        image: "/project1.webp",
        role: "Frontend Developer",
        demoLink: "https://exclusive-seven-rho.vercel.app/",
        sourceLink: "https://github.com/ahmed26-coder/Exclusive",
        technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
      },
      {
        id: "3",
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
        id: "6",
        title: "Online Doctor",
        description: "Analytics dashboard for social media accounts with engagement metrics and content performance.",
        image: "/project6.webp",
        role: "Frontend Developer",
        demoLink: "https://health-point-one.vercel.app/",
        sourceLink: "https://github.com/ahmed26-coder/Health-Point",
        technologies: ["Java Script", "Next.js", "Tailwind CSS"],
      },
    ],
  },
]

export default function ProjectDetailPage() {
  const params = useParams();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [project, setProject] = useState(null);

  const projectId = useMemo(() => params.id, [params.id]);

  useEffect(() => {
    if (!projectId) {
      console.error("No projectId found in URL params");
      setProject(null);
      return;
    }

    const matched = projectsData.find((p) => p.id === projectId);
    setProject(matched || null);
    setCurrentImageIndex(0);
  }, [projectId]);

  const nextImage = useCallback(() => {
    if (!project) return;
    setCurrentImageIndex((prev) =>
      prev === project.images.length - 1 ? 0 : prev + 1
    );
  }, [project]);

  const prevImage = useCallback(() => {
    if (!project) return;
    setCurrentImageIndex((prev) =>
      prev === 0 ? project.images.length - 1 : prev - 1
    );
  }, [project]);

  const currentIndex = useMemo(() => {
    return project ? projectsData.findIndex((p) => p.id === project.id) : -1;
  }, [project, projectsData]);

  const prevProject = useMemo(() => {
    return currentIndex > 0 ? projectsData[currentIndex - 1] : null;
  }, [currentIndex, projectsData]);

  const nextProject = useMemo(() => {
    return currentIndex < projectsData.length - 1
      ? projectsData[currentIndex + 1]
      : null;
  }, [currentIndex, projectsData]);

  if (!project) {
    return (
      <div className="flex h-[70vh] mx-auto items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Project not found</h2>
          <p className="mb-6 text-zinc-600 dark:text-zinc-400">
            The project you&#39;re looking for doesn&#39;t exist or has been removed.
          </p>
          <Link
            href="/Project"
            className="inline-block mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
          >
            Back to Projects
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      {/* Back button */}
      <div className="mb-6">
        <Link href="/Project" className="inline-flex items-center text-blue-600 hover:underline">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Projects
        </Link>
      </div>

      {/* Project Image */}
      <div className="mb-10">
        <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-gray-100">
          <Image
            src={project.mainImage || "/placeholder.svg"}
            alt={project.title}
            fill
            className="object-cover"
          />
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-10">
        {/* Main Content */}
        <div className="md:col-span-2 space-y-8">
          <div>
            <h1 className="text-3xl font-bold mb-2">{project.title}</h1>
            <p className="text-zinc-600 dark:text-zinc-400">{project.description}</p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">Project Overview</h2>
            <p className="text-zinc-700 dark:text-zinc-300">{project.longDescription}</p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">Key Features</h2>
            <ul className="list-disc pl-6 text-zinc-700 dark:text-zinc-300 space-y-1">
              <li>Responsive design for all device sizes</li>
              <li>User authentication and profile management</li>
              <li>Course creation and management dashboard</li>
              <li>Video streaming with progress tracking</li>
              <li>Interactive quizzes and assessments</li>
              <li>Payment integration with Stripe</li>
              <li>Dark/light mode support</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">Challenges & Solutions</h2>
            <p className="text-zinc-700 dark:text-zinc-300">{project.challenge}</p>
            <p className="text-zinc-700 dark:text-zinc-300 mt-2">{project.solution}</p>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6 text-[15px]">
  {/* Project Details */}
  <div className="bg-gradient-to-br from-zinc-100 to-zinc-50 dark:from-zinc-800 dark:to-zinc-900 border border-zinc-200 dark:border-zinc-700 rounded-2xl p-6 shadow-md">
    <h3 className="text-lg font-semibold text-zinc-800 dark:text-zinc-100 flex items-center gap-2 mb-4">
      <Calendar className="w-5 h-5 text-blue-500" />
      Project Details
    </h3>
    <div className="space-y-3 text-zinc-700 dark:text-zinc-300">
      <div className="flex items-center gap-3">
        <Calendar className="w-4 h-4 text-blue-500" />
        <span>{project.date}</span>
      </div>
      <div className="flex items-center gap-3">
        <Clock className="w-4 h-4 text-emerald-500" />
        <span>{project.duration}</span>
      </div>
      <div className="flex items-center gap-3">
        <Users className="w-4 h-4 text-purple-500" />
        <span>{project.role}</span>
      </div>
    </div>
  </div>

  {/* Technologies */}
  <div className="bg-gradient-to-br from-zinc-100 to-zinc-50 dark:from-zinc-800 dark:to-zinc-900 border border-zinc-200 dark:border-zinc-700 rounded-2xl p-6 shadow-md">
    <h3 className="text-lg font-semibold text-zinc-800 dark:text-zinc-100 flex items-center gap-2 mb-4">
      🚀 Technologies
    </h3>
    <div className="flex flex-wrap gap-2">
      {project.technologies?.map((tech) => (
        <span
          key={tech}
          className="px-3 py-1 bg-zinc-200/60 dark:bg-zinc-700/60 text-[13px] rounded-full border border-zinc-300 dark:border-zinc-600 text-zinc-800 dark:text-zinc-100 font-medium"
        >
          {tech}
        </span>
      ))}
    </div>
  </div>

  {/* Buttons */}
  {project.demoLink && (
    <Link
      href={project.demoLink}
      target="_blank"
      className="inline-flex items-center justify-center w-full px-4 py-2.5 bg-gradient-to-r from-black to-zinc-900 text-white rounded-xl hover:brightness-110 shadow transition font-medium"
    >
      <ExternalLink className="h-4 w-4 mr-2" />
      Live Demo
    </Link>
  )}
  {project.sourceLink && (
    <Link
      href={project.sourceLink}
      target="_blank"
      className="inline-flex items-center justify-center w-full px-4 py-2.5 bg-white dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-700 rounded-xl hover:bg-zinc-100 dark:hover:bg-zinc-800 shadow transition font-medium"
    >
      <Github className="h-4 w-4 mr-2" />
      Source Code
    </Link>
  )}
</div>

        {/* Project gallery */}
        { /* {project.images.length > 0 && (
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-6">Project Gallery</h2>
            <div className="relative">
              <div className="relative aspect-video w-full overflow-hidden rounded-xl">
                <Image
                  src={project.images[currentImageIndex].src || "/placeholder.svg"}
                  alt={project.images[currentImageIndex].alt}
                  width={800}
                  height={600}
                  className="h-full w-full object-cover"
                />
              </div>

              {/* Navigation buttons 
              {project.images.length > 1 && (
                <>
                  <button
                    className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/80 backdrop-blur-sm hover:bg-white/90 dark:bg-black/50 dark:hover:bg-black/60"
                    onClick={prevImage}
                  >
                    <ChevronLeft className="h-10 w-10" />
                    <span className="sr-only">Previous image</span>
                  </button>

                  <button
                    className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/80 backdrop-blur-sm hover:bg-white/90 dark:bg-black/50 dark:hover:bg-black/60"
                    onClick={nextImage}
                  >
                    <ChevronRight className="h-10 w-10" />
                    <span className="sr-only">Next image</span>
                  </button>

                  {/* Image counter 
                  <div className="absolute bottom-4 right-4 rounded-full bg-black/60 px-3 py-1 text-sm text-white backdrop-blur-sm">
                    {currentImageIndex + 1} / {project.images.length}
                  </div>
                </>
              )}
            </div>

            {/* Thumbnails 
            {project.images.length > 1 && (
              <div className="mt-4 grid grid-cols-5 gap-2">
                {project.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`relative aspect-video overflow-hidden rounded-md ${currentImageIndex === index
                      ? "ring-2 ring-emerald-500 ring-offset-2 dark:ring-offset-zinc-900"
                      : "opacity-70 hover:opacity-100"
                      }`}
                  >
                    <Image
                      src={image.src || "/placeholder.svg"}
                      alt={image.alt}
                      width={150}
                      height={100}
                      className="h-full w-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>
        )} */}

        {/* Related projects */}
      </div>
      {project.relatedProjects.length > 0 && (
        <div>
          <h2 className="text-2xl font-bold mb-8">Related Projects</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {project.relatedProjects.map((relatedProject) => (
              <ProjectCard
                id={""}
                key={relatedProject.id}
                title={relatedProject.title}
                description={relatedProject.description}
                image={relatedProject.image}
                role={relatedProject.role}
                technologies={relatedProject.technologies}
                demoLink={relatedProject.demoLink}
                sourceLink={relatedProject.sourceLink} />
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
