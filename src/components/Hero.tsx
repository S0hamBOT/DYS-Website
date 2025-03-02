import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function LandingPage() {
  const [gradient, setGradient] = useState("from-black via-[#1E3A8A] to-black");

  useEffect(() => {
    const gradients = [
      "from-black via-[#1E3A8A] to-black",
      "from-black via-[#243F96] to-black",
      "from-black via-[#2D4AA0] to-black",
      "from-black via-[#1E3A8A] to-black",
    ];

    let index = 0;
    const interval = setInterval(() => {
      index = (index + 1) % gradients.length;
      setGradient(gradients[index]);
    }, 4000); // Change gradient every 4 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center bg-[#1E3A8A] text-white">
      {/* Background Gradient */}
      <motion.div
        className={`absolute inset-0 bg-gradient-to-b ${gradient}`}
        animate={{ opacity: [0.9, 1, 0.9] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      ></motion.div>

      {/* Hero Section */}
      <div className="text-center px-6 z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
        >
          <span className="px-4 py-2 text-sm font-semibold text-white border border-[#1E3A8A] bg-transparent rounded-full uppercase">
            Discover Yourself
          </span>
        </motion.div>

        <motion.h1
          className="mt-6 text-5xl md:text-6xl font-extrabold leading-snug"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.3 }}
        >
          A Journey Within with <br />
          <span className="text-[#F59E0B]">HG Radheshyam Das</span>
        </motion.h1>

        <motion.p
          className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.5 }}
        >
          A series from DYS 0 to DYS 8, guiding you towards self-discovery and
          inner peace.
        </motion.p>

        {/* Call to Action Button */}
        <motion.div
          className="mt-8"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <button
            className="px-8 py-3 text-lg font-medium border border-[#F59E0B] text-black bg-[#F59E0B] rounded-full 
            hover:bg-amber-500 hover:text-black transition duration-300 hover:shadow-lg hover:shadow-[#F59E0B]"
          >
            Explore the Journey
          </button>
        </motion.div>
      </div>
    </div>
  );
}
