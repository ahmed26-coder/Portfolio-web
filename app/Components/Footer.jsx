import { FaLinkedinIn } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  const socialLinks = [
    { href: "https://github.com/ahmed26-coder", title:"githup", icon: <FaGithub className="text-gray-400" /> },
    { href: "https://www.linkedin.com/in/ahmed-adham-479334331", title:"linked in", icon: <FaLinkedinIn className="text-blue-400" /> },
    { href: "https://wa.me/201016626452", title:"what app", icon: <IoLogoWhatsapp className="text-green-400" /> },
  ];

  return (
    <footer className="px-[5%] w-full sm:px-[10%] flex flex-col sm:flex-row justify-between py-[4%] sm:py-[1%] bg-gray-100 dark:bg-black text-left">
      <small className="dark:text-[#FFFFFF]/40 text-[#999999]">
        &copy;2024{" "}
        <span className="text-black dark:text-white text-base font-bold">
          Ahmed Adham · <span className="dark:text-[#FFFFFF]/40 text-[#999999]">Front-End Developer</span>
        </span>
      </small>

      <div className="flex flex-col sm:flex-row gap-2 sm:gap-10 mt-2 sm:mt-0">
        <small className="text-black dark:text-white text-base font-bold">
          <span className="dark:text-[#FFFFFF]/40 text-[#999999] font-normal">Designed & Developed by </span>
          Ahmed Adham
        </small>
        <div className="flex gap-4 text-2xl sm:mt-0 mt-3 sm:mx-0 mx-auto">
          {socialLinks.map((item, index) => (
            <a
              aria-label={item.title}
              key={index}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform duration-150 hover:scale-110"
            >
              {item.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
