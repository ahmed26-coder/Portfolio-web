"use client";
import { useState, useRef, useEffect, useCallback, useMemo } from "react";
import { useTheme } from "next-themes";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Home, User, Briefcase, Mail, Sun, Menu } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io5";
import { FaXmark } from "react-icons/fa6";
import { usePathname } from "next/navigation";
import React from "react";

const MenuItem = React.memo(function MenuItem({ icon: Icon, label, isExpanded, isActive, onClick }) {
  return (
    <div
      className={`flex items-center p-3 text-lg rounded-lg cursor-pointer transition-all duration-200 ${
        isActive
          ? "bg-gray-200 dark:bg-[#AEB1B7]/32 text-black dark:text-white font-semibold"
          : "text-[#666666] dark:text-[#FFFFFF]/50"
      }`}
      onClick={onClick}
    >
      <Icon
        className={`w-6 h-6 ${
          isActive
            ? "text-black dark:text-white"
            : "text-[#666666] dark:text-[#FFFFFF]/50"
        }`}
      />
      {isExpanded && <span className="ml-3">{label}</span>}
    </div>
  );
});

const SocialIcon = React.memo(function SocialIcon({ icon: Icon, href, title }) {
  return (
    <a
      href={href}
      aria-label={title}
      target="_blank"
      rel="noopener noreferrer"
      className="w-8 h-8 flex items-center justify-center rounded-full transition-all duration-300 hover:scale-110"
    >
      <Icon className="w-6 h-6 text-[#666666] dark:text-[#666666]" />
    </a>
  );
});

export default function Sidebar() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isLargeScreen, setIsLargeScreen] = useState(false);
  const pathname = usePathname();

  const menuItems = useMemo(() => [
    { href: "/", title: "home", icon: Home, label: "Home" },
    { href: "/Project", title: "project", icon: Briefcase, label: "Projects" },
    { href: "/About", title: "about us", icon: User, label: "About" },
    { href: "/Contact", title: "contact us", icon: Mail, label: "Contact" }
  ], []);

  const socialLinks = useMemo(() => [
    {
      href: "https://wa.me/201016626452",
      title: "Whats app",
      icon: IoLogoWhatsapp
    },
    {
      href: "https://www.linkedin.com/in/ahmed-adham-479334331/",
      title: "Linkedin",
      icon: FaLinkedin
    },
    { href: "https://github.com/ahmed26-coder", title: "github", icon: FaGithub }
  ], []);

  const [activeItem, setActiveItem] = useState(() => {
    const current = menuItems.find((item) => item.href === pathname);
    return current?.label || "";
  });

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  const handleMenuItemClick = useCallback((label) => {
    setActiveItem(label);
    setIsMobileMenuOpen(false);
  }, []);

  const toggleTheme = useCallback(() => {
    setTheme(theme === "light" ? "dark" : "light");
  }, [theme]);

  const mobileMenuRef = useRef(null);

  // ✅ detect 4k+ screen
  useEffect(() => {
    const handleResize = () => {
      const is4K = window.innerWidth >= 1536;
      setIsLargeScreen(is4K);
      setIsExpanded(is4K);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (!isMobileMenuOpen) return;

    const controller = new AbortController();

    const handleClickOutside = (event) => {
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target)
      ) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside, {
      passive: true,
      signal: controller.signal
    });

    return () => {
      controller.abort();
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <div className="grid grid-cols-1 z-50">
        <div
          className={`hidden lg:flex flex-col h-[100vh] top-0 bg-gray-100 dark:bg-black p-4 sm:sticky left-0 transition-all duration-300 ${
            isExpanded ? "w-56" : "w-20"
          }`}
          onMouseEnter={!isLargeScreen ? () => setIsExpanded(true) : undefined}
          onMouseLeave={!isLargeScreen ? () => setIsExpanded(false) : undefined}
        >
          <div className="flex flex-col items-center mb-6">
            <Image
              className="rounded-full"
              src="/me.jpg"
              alt="Profile"
              width={40}
              height={40}
              priority
              placeholder="blur"
              blurDataURL="/example-blur.jpg"
            />
            {isExpanded && (
              <>
                <div className="text-center mt-2">
                  <h2 className="text-2xl text-[#111111] dark:text-white font-semibold">
                    Ahmad Adham
                  </h2>
                  <p className="text-base text-[#666666]">
                    Front-end Developer
                  </p>
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
              <Link aria-label={title} key={label} href={href}>
                <MenuItem
                  icon={icon}
                  label={label}
                  isExpanded={isExpanded}
                  isActive={activeItem === label}
                  onClick={() => setActiveItem(label)}
                />
              </Link>
            ))}
          </nav>

          <div onClick={toggleTheme} className="flex justify-center dark:text-[#FFFFFF]/40 my-10">
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

      {/* Mobile Header */}
      <div className="z-50 lg:hidden fixed top-0 left-0 w-full bg-gray-100 dark:bg-black flex justify-between items-center p-4 shadow-lg">
        <Link href="/">
          <div className="flex items-center space-x-3">
            <Image
              src="/me.jpg"
              alt="Profile"
              width={45}
              height={40}
              className="rounded-full"
              priority
            />
            <div>
              <h2 className="text-lg text-[#111111] dark:text-white font-semibold">
                Ahmad Adham
              </h2>
              <p className="text-sm text-[#666666]">Front-end Developer</p>
            </div>
          </div>
        </Link>
        <div className="flex gap-5 items-center">
          <div onClick={toggleTheme} className="flex justify-center dark:text-[#FFFFFF]/40">
            <SocialIcon icon={Sun} />
          </div>
          <button
            aria-label="Menu"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-gray-700 dark:text-white"
          >
            {isMobileMenuOpen ? (
              <span className="text-3xl">
                <FaXmark />
              </span>
            ) : (
              <Menu size={30} />
            )}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/40 z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.div
              ref={mobileMenuRef}
              initial={{ y: -80, opacity: 0, scale: 0.98 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: -80, opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.35, ease: "easeInOut" }}
              className="z-50 lg:hidden rounded-b-3xl fixed top-20 right-0 w-full bg-gray-100 dark:bg-black p-4 shadow-xl"
            >
              <nav className="flex flex-col gap-2">
                {menuItems.map(({ href, icon, label, title }) => (
                  <Link
                    aria-label={title}
                    key={label}
                    href={href}
                    data-aos="fade-right"
                    onClick={() => handleMenuItemClick(label)}
                  >
                    <MenuItem
                      icon={icon}
                      label={label}
                      isExpanded={true}
                      isActive={activeItem === label}
                      onClick={() => setActiveItem(label)}
                    />
                  </Link>
                ))}
              </nav>
              <div className="flex justify-center space-x-3 mt-4">
                {socialLinks.map((link, index) => (
                  <SocialIcon key={index} {...link} />
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
