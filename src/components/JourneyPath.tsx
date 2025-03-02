import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { CourseModule } from "../types";
import { courseModules } from "../data/courseData";
import * as LucideIcons from "lucide-react";

const JourneyPath: React.FC = () => {
  const [activeModule, setActiveModule] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState<boolean[]>(
    Array(courseModules.length).fill(false)
  );

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = parseInt(entry.target.getAttribute("data-id") || "0");
          if (entry.isIntersecting) {
            setIsVisible((prev) => {
              const newState = [...prev];
              newState[id] = true;
              return newState;
            });
            setActiveModule(id);
          }
        });
      },
      { threshold: 0.5 }
    );

    const modules = document.querySelectorAll(".module-card");
    modules.forEach((module) => observer.observe(module));

    return () => modules.forEach((module) => observer.unobserve(module));
  }, []);

  const scrollToModule = (index: number) => {
    const modules = document.querySelectorAll(".module-card");
    if (modules[index]) {
      modules[index].scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  const renderIcon = (iconName: string) => {
    const Icon = (LucideIcons as any)[
      iconName.charAt(0).toUpperCase() + iconName.slice(1)
    ];
    return Icon ? <Icon size={40} className="text-amber-400" /> : null;
  };

  return (
    <section
      id="journey"
      className="min-h-screen py-20 relative overflow-hidden 
                 bg-gradient-to-b from-black via-[#0a0f2c] to-[#db7b0d]"
    >
      {/* Glowing Path */}
      <div
        className="absolute left-1/2 top-0 bottom-0 w-[3px] 
                     bg-amber-400/50 backdrop-blur-md animate-glow-path 
                     transform -translate-x-1/2 z-10"
      ></div>

      {/* Floating Divine Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-amber-400 rounded-full opacity-50"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{
              opacity: [0.3, 1, 0.3],
              y: ["0%", "20%", "-20%", "0%"],
              x: ["0%", "10%", "-10%", "0%"],
            }}
            transition={{ duration: 6, repeat: Infinity, delay: i * 0.3 }}
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Your Spiritual Journey
          </h2>
          <p className="text-lg text-white/70 mt-4 max-w-2xl mx-auto">
            Follow the path of self-discovery through our comprehensive course
            modules.
          </p>
        </div>

        {/* Scrollable Buttons */}
        <div className="flex mb-10 overflow-x-auto py-4 scrollbar-hide">
          <div className="flex space-x-2 mx-auto">
            {courseModules.map((module, index) => (
              <button
                key={index}
                onClick={() => scrollToModule(index)}
                className={`px-4 py-2 rounded-full text-sm transition-all border 
                            border-amber-400/60 shadow-md backdrop-blur-lg 
                            ${
                              activeModule === index
                                ? "bg-amber-500 text-white"
                                : "bg-white/10 text-white/70 hover:bg-amber-400/30"
                            }`}
              >
                {module.title}
              </button>
            ))}
          </div>
        </div>

        {/* Course Journey Timeline */}
        <div ref={containerRef} className="space-y-24 py-10">
          {courseModules.map((module, index) => (
            <motion.div
              key={index}
              data-id={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isVisible[index] ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className={`module-card flex flex-col md:flex-row items-center gap-8 
                          ${
                            index % 2 === 0
                              ? "md:flex-row"
                              : "md:flex-row-reverse"
                          }`}
            >
              {/* Animated Icon */}
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={isVisible[index] ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="w-32 h-32 rounded-full bg-gradient-to-br from-amber-400/30 
                           to-amber-600/30 flex items-center justify-center border 
                           border-amber-500/40 shadow-lg shadow-amber-500/20"
              >
                {renderIcon(module.icon)}
              </motion.div>

              {/* Course Module Card */}
              <div
                className="w-full md:w-2/3 bg-white/10 backdrop-blur-xl 
                              p-8 rounded-xl border border-amber-400/50 shadow-xl 
                              transition-transform duration-300 hover:scale-105"
              >
                <h3 className="text-2xl font-bold text-white mb-2">
                  {module.title}
                </h3>
                <h4 className="text-xl text-amber-300 mb-4">
                  {module.subtitle}
                </h4>
                <p className="text-white/80">{module.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default JourneyPath;
