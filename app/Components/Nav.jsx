"use client";
import { useTheme } from "next-themes";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { Home, User, Briefcase, Edit, Mail, Sun, Menu } from "lucide-react";
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";

export default function Sidebar() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [activeItem, setActiveItem] = useState("Home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const sidebarRef = useRef(null);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    function handleClickOutside(event) {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setIsExpanded(false);
      }
    }

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <>
      <div className=" grid grid-cols-1 z-50">
      <div
        ref={sidebarRef}
        className={`hidden md:flex flex-col h-full bg-gray-100 dark:bg-black p-4 sticky left-0 transition-all duration-300 ${
          isExpanded ? "w-56" : "w-20"
        }`}
        onClick={() => setIsExpanded(true)}
      >
        <div className="flex flex-col items-center mb-6">
          <Image className=" rounded-full"  src="/me.jpg"  alt="Example Image"  width={40}  height={40}  priority={false}  placeholder="blur"  blurDataURL="/example-blur.jpg" />
          {isExpanded && (
            <>
              <div className="text-center mt-2">
                <h2 className="text-2xl text-[#111111] dark:text-white font-semibold">Ahmad Adham</h2>
                <p className="text-base text-[#666666]">Front-end Developer</p>
                <p className="text-base text-[#666666]">Web Designer</p>
              </div>

              <div className="flex space-x-3 mt-3 justify-center">
                <SocialIcon href="https://web.facebook.com/profile.php?id=100089991578793&mibextid=ZbWKwL&_rdc=1&_rdr#" icon={FaFacebook} />
                <SocialIcon href="https://www.linkedin.com/in/ahmed-adham-479334331/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" icon={FaLinkedin} />
                <SocialIcon href="https://github.com/ahmed26-coder" icon={FaGithub} />
              </div>
            </>
          )}
        </div>

        <nav className=" space-y-4 flex flex-col items-center mx-auto justify-center">
          <Link href="/"><MenuItem icon={Home} label="Home" isExpanded={isExpanded} activeItem={activeItem} setActiveItem={setActiveItem} /></Link>
          <Link href="/Project"><MenuItem icon={Briefcase} label="Projects" isExpanded={isExpanded} activeItem={activeItem} setActiveItem={setActiveItem} /></Link>
          <Link href="/About"><MenuItem icon={User} label="About" isExpanded={isExpanded} activeItem={activeItem} setActiveItem={setActiveItem} /></Link>
          <Link href="/Blog"><MenuItem icon={Edit} label="Blog" isExpanded={isExpanded} activeItem={activeItem} setActiveItem={setActiveItem} /></Link>
          <Link href="/Contact"><MenuItem icon={Mail} label="Contact" isExpanded={isExpanded} activeItem={activeItem} setActiveItem={setActiveItem} /></Link>
        </nav>

        {!isExpanded && (
          <div className="flex-col space-y-3 mt-5 mx-auto justify-center items-center">
            <SocialIcon href="https://web.facebook.com/profile.php?id=100089991578793&mibextid=ZbWKwL&_rdc=1&_rdr#" icon={FaFacebook} />
            <SocialIcon href="https://www.linkedin.com/in/ahmed-adham-479334331/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" icon={FaLinkedin} />
            <SocialIcon href="https://github.com/ahmed26-coder" icon={FaGithub} />
          </div>
        )}

        <div onClick={() => setTheme(theme === "light" ? "dark" : "light")} className="flex justify-center dark:text-[#FFFFFF]/40 mt-15">
          <SocialIcon icon={Sun} />
        </div>
      </div>
      </div>
      <div className=" z-50 md:hidden fixed top-0 left-0 w-full bg-gray-100 dark:bg-black flex justify-between items-center p-4 shadow-lg">
        <div className="flex items-center space-x-3">
          <img src="/me.jpg" alt="Profile" className="w-10 h-10 rounded-full" />
          <div>
            <h2 className="text-lg text-[#111111] dark:text-white font-semibold">Ahmad Adham</h2>
            <p className="text-sm text-[#666666]">Front-end Developer</p>
          </div>
        </div>
        <div className=" flex gap-5 items-center">
          <div onClick={() => setTheme(theme === "light" ? "dark" : "light")} className="flex justify-center dark:text-[#FFFFFF]/40">
            <SocialIcon icon={Sun} />
          </div>
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-gray-700 dark:text-white">
            <Menu size={30} />
          </button>
        </div>
      </div>
      {isMobileMenuOpen && (
        <div className="z-50  md:hidden fixed top-18 left-0 w-full bg-gray-100 dark:bg-black p-4 shadow-lg transition-all duration-300">
          <nav className=" flex flex-col gap-2">
            <Link href="/"><MenuItem icon={Home} label="Home" isExpanded={true} activeItem={activeItem} setActiveItem={setActiveItem} /></Link>
            <Link href="/Project"><MenuItem icon={Briefcase} label="Projects" isExpanded={true} activeItem={activeItem} setActiveItem={setActiveItem} /></Link>
            <Link href="/About"><MenuItem icon={User} label="About" isExpanded={true} activeItem={activeItem} setActiveItem={setActiveItem} /></Link>
            <Link href="/Blog"><MenuItem icon={Edit} label="Blog" isExpanded={true} activeItem={activeItem} setActiveItem={setActiveItem} /></Link>
            <Link href="/Contact"><MenuItem icon={Mail} label="Contact" isExpanded={true} activeItem={activeItem} setActiveItem={setActiveItem} /></Link>
          </nav>

          <div className="flex justify-center space-x-3 mt-4">
            <SocialIcon href="https://web.facebook.com/profile.php?id=100089991578793&mibextid=ZbWKwL&_rdc=1&_rdr#" icon={FaFacebook} />
            <SocialIcon href="https://www.linkedin.com/in/ahmed-adham-479334331/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" icon={FaLinkedin} />
            <SocialIcon href="https://github.com/ahmed26-coder" icon={FaGithub} />
          </div>
        </div>
      )}
    </>
  );
}

function MenuItem({ icon: Icon, label, isExpanded, activeItem, setActiveItem }) {
  const isActive = activeItem === label;
  return (
    <div
      onClick={() => setActiveItem(label)}
      className={`flex items-center space-x-2 p-2 rounded-lg cursor-pointer border-2 transition-all duration-200 
        ${isActive ? " z-50 bg-[#AEB1B7]/10 border-[#AEB1B7]/16 text-black dark:text-white" : "border-gray-100 dark:border-black text-[#999999] hover:bg-[#AEB1B7]/15"}`}
    >
      <Icon size={23} />
      {isExpanded && <span className="text-base">{label}</span>}
    </div>
  );
}

function SocialIcon({ icon: Icon, href }) {
  return (
    <div className=" z-50 w-8 h-8 text-[#999999] flex items-center justify-center rounded-full cursor-pointer transition-all duration-300 ease-in-out hover:scale-110">
       <a href={href} target="_blank" rel="noopener noreferrer">
        <Icon size={25} />
      </a>
    </div>
  );
}