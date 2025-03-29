"use client";
import { useTheme } from "next-themes";
import Link from "next/link";
import Image from "next/image";
import { useState, useRef, useMemo } from "react";
import { Home, User, Briefcase, Mail, Sun, Menu } from "lucide-react";
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";

const menuItems = [
  { href: "/", title:"home", icon: Home, label: "Home" },
  { href: "/Project", title:"project", icon: Briefcase, label: "Projects" },
  { href: "/About", title:"about us", icon: User, label: "About" },
  { href: "/Contact", title:"contact us", icon: Mail, label: "Contact" },
];

const socialLinks = [
  { href: "https://web.facebook.com/profile.php?id=100089991578793", title:"facebook", icon: FaFacebook },
  { href: "https://www.linkedin.com/in/ahmed-adham-479334331/", title:"Linkedin", icon: FaLinkedin },
  { href: "https://github.com/ahmed26-coder",title:"github", icon: FaGithub },
];

function MenuItem({ icon: Icon, label, isExpanded, isActive, onClick }) {
  return (
    <div
      className={`flex items-center p-3 text-lg rounded-lg cursor-pointer transition-all duration-200 ${
        isActive ? "bg-gray-200 dark:bg-[#AEB1B7]/32 text-black dark:text-white font-semibold" : "text-[#666666] dark:text-[#FFFFFF]/50"
      }`}
      onClick={onClick}
    >
      <Icon className={`w-6 h-6 ${isActive ? "text-black dark:text-white" : "text-[#666666] dark:text-[#FFFFFF]/50"}`} />
      {isExpanded && <span className="ml-3">{label}</span>}
    </div>
  );
}

function SocialIcon({ icon: Icon, href, title }) {
  return (
    <a href={href}  aria-label={title} target="_blank" rel="noopener noreferrer" className="w-8 h-8 flex items-center justify-center rounded-full transition-all duration-300 hover:scale-110">
      <Icon className="w-6 h-6 text-[#666666] dark:text-[#666666]" />
    </a>
  );
}

export default function Sidebar() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [activeItem, setActiveItem] = useState("Home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  const handleMobileMenuClick = (label) => {
    setActiveItem(label);
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <div className="grid grid-cols-1 z-50">
        <div
          className={`hidden md:flex flex-col h-[100vh] top-0 bg-gray-100 dark:bg-black p-4 sm:sticky left-0 transition-all duration-300 ${isExpanded ? "w-56" : "w-20"}`}
          onMouseEnter={() => setIsExpanded(true)}
          onMouseLeave={() => setIsExpanded(false)}
        >
          <div className="flex flex-col items-center mb-6">
            <Image className="rounded-full" src="/me.jpg" alt="Profile" width={40} height={40} priority placeholder="blur" blurDataURL="/example-blur.jpg" />
            {isExpanded && (
              <>
                <div className="text-center mt-2">
                  <h2 className="text-2xl text-[#111111] dark:text-white font-semibold">Ahmad Adham</h2>
                  <p className="text-base text-[#666666]">Front-end Developer</p>
                  <p className="text-base text-[#666666]">Web Designer</p>
                </div>
                <div className="flex space-x-3 mt-3 justify-center">
                  {socialLinks.map((link, index) => (
                    <SocialIcon key={index} {...link} />
                  ))}
                </div>
              </>
            )}
          </div>

          <nav className="space-y-4 flex flex-col items-center mx-auto justify-center">
            {menuItems.map(({ href, icon, label, title }) => (
              <Link  aria-label={title} key={label} href={href}>
                <MenuItem icon={icon} label={label} isExpanded={isExpanded} isActive={activeItem === label} onClick={() => setActiveItem(label)} />
              </Link>
            ))}
          </nav>

          <div onClick={() => setTheme(theme === "light" ? "dark" : "light")} className="flex justify-center dark:text-[#FFFFFF]/40 my-10">
            <SocialIcon icon={Sun} />
          </div>
          {!isExpanded && (
            <div className="flex-col space-y-3 mt-5 mx-auto justify-center items-center">
              {socialLinks.map((link, index) => (
                <SocialIcon key={index} {...link} />
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="z-50 md:hidden fixed top-0 left-0 w-full bg-gray-100 dark:bg-black flex justify-between items-center p-4 shadow-lg">
        <div className="flex items-center space-x-3">
          <Image src="/me.jpg" alt="Profile" width={40} height={40} className="rounded-full" priority />
          <div>
            <h2 className="text-lg text-[#111111] dark:text-white font-semibold">Ahmad Adham</h2>
            <p className="text-sm text-[#666666]">Front-end Developer</p>
          </div>
        </div>
        <div className="flex gap-5 items-center">
          <div onClick={() => setTheme(theme === "light" ? "dark" : "light")} className="flex justify-center dark:text-[#FFFFFF]/40">
            <SocialIcon icon={Sun} />
          </div>
          <button  aria-label="Menu" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-gray-700 dark:text-white">
            <Menu size={30} />
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="z-50 md:hidden fixed top-18 left-0 w-full bg-gray-100 dark:bg-black p-4 shadow-lg transition-all duration-300">
          <nav className="flex flex-col gap-2">
            {menuItems.map(({ href, icon, label, title }) => (
                <Link aria-label={title} key={label} href={href} onClick={() => handleMobileMenuClick(label)}>
                  <MenuItem icon={icon} label={label} isExpanded={true} isActive={activeItem === label} onClick={() => setActiveItem(label)} />
                </Link>
            ))}
          </nav>
          <div className="flex justify-center space-x-3 mt-4">
            {socialLinks.map((link, index) => (
              <SocialIcon key={index} {...link} />
            ))}
          </div>
        </div>
      )}
    </>
  );
}