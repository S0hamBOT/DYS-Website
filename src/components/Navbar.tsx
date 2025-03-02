import React from "react";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const title = "Fishers Of Men - Discover Yourself";

  return (
    <div className="fixed w-full z-50 px-4 sm:px-6 lg:px-8 flex justify-center pt-4">
      <nav className="bg-black backdrop-blur-sm rounded-full shadow-lg shadow-[#F59E0B]/30 w-full max-w-5xl">
        <div className="px-4 sm:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <h1 className="text-white text-xl font-bold font-mono">
                {title.split("").map((char, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05, duration: 0.1 }}
                  >
                    {char}
                  </motion.span>
                ))}
              </h1>
            </div>

            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <a
                  href="#home"
                  className="text-white hover:text-[#F59E0B] px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  Home
                </a>
                <a
                  href="#journey"
                  className="text-white hover:text-[#F59E0B] px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  Journey
                </a>
                <a
                  href="#about"
                  className="text-white hover:text-[#F59E0B] px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  About
                </a>
                <a
                  href="#contact"
                  className="text-white hover:text-[#F59E0B] px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  Contact
                </a>
                <button className="bg-[#F59E0B] hover:bg-amber-600 text-black px-4 py-2 rounded-full text-sm font-medium transition-colors">
                  Enroll Now
                </button>
              </div>
            </div>

            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-[#F59E0B] focus:outline-none"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden bg-black/90 backdrop-blur-sm rounded-2xl mt-2 overflow-hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a
                href="#home"
                className="text-white hover:text-[#F59E0B] block px-3 py-2 rounded-md text-base font-medium"
              >
                Home
              </a>
              <a
                href="#journey"
                className="text-white hover:text-[#F59E0B] block px-3 py-2 rounded-md text-base font-medium"
              >
                Journey
              </a>
              <a
                href="#about"
                className="text-white hover:text-[#F59E0B] block px-3 py-2 rounded-md text-base font-medium"
              >
                About
              </a>
              <a
                href="#contact"
                className="text-white hover:text-[#F59E0B] block px-3 py-2 rounded-md text-base font-medium"
              >
                Contact
              </a>
              <button className="w-full text-left bg-[#F59E0B] hover:bg-amber-600 text-black px-3 py-2 rounded-md text-base font-medium mt-4">
                Enroll Now
              </button>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
