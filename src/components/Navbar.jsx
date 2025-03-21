import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { HiMenu } from "react-icons/hi";
import logo from "../assets/HL_logo.svg";

const Navbar = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const menuItems = [
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Education", href: "#education" },
    { name: "Projects", href: "#projects" },
    { name: "Technologies", href: "#technologies" },
    { name: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav className="mb-20 flex items-center justify-between py-6">
        <div className="flex flex-shrink-0 items-center">
          <img className="mx-2 w-16" src={logo} alt="logo" />
        </div>
        <div className="m-8 flex items-center justify-center gap-4 text-2xl">
          <a
            href="https://www.linkedin.com/in/harsh-ladani/"
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer transition-all duration-200 hover:scale-110 hover:text-purple-100"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/HL-official"
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer transition-all duration-200 hover:scale-110 hover:text-purple-100"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.instagram.com/harsh_ladani/"
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer transition-all duration-200 hover:scale-110 hover:text-purple-100"
          >
            <FaInstagram />
          </a>
          <a
            href="https://x.com/ladani_harsh"
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer transition-all duration-200 hover:scale-110 hover:text-purple-100"
          >
            <FaSquareXTwitter />
          </a>
        </div>
      </nav>

      <div
        className={`fixed right-8 top-1/2 z-50 -translate-y-1/2 transform ${scrolled ? "opacity-100" : "opacity-0"} transition-all duration-300`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <motion.div
          className="flex items-center"
          initial={false}
          animate={{
            width: isHovered ? "auto" : "40px",
          }}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
        >
          <AnimatePresence>
            {isHovered && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.2 }}
                className="mr-4 space-y-1 rounded-lg bg-neutral-900/80 p-2 shadow-lg backdrop-blur-sm ring-1 ring-white/10"
              >
                {menuItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="group block whitespace-nowrap px-3 py-1.5 text-sm tracking-tight text-neutral-400 transition-all duration-200 hover:pl-4 hover:text-purple-100"
                    onClick={() => setIsHovered(false)}
                  >
                    {item.name}
                  </a>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
          <div className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-neutral-900/80 text-neutral-400 shadow-lg backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:text-purple-100 ring-1 ring-white/10">
            <HiMenu size={20} />
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default Navbar;
