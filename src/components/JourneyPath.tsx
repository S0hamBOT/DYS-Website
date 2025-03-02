import React, { useEffect, useRef, useState } from 'react';
import { CourseModule } from '../types';
import { courseModules } from '../data/courseData';
import * as LucideIcons from 'lucide-react';

const JourneyPath: React.FC = () => {
  const [activeModule, setActiveModule] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState<boolean[]>(Array(courseModules.length).fill(false));

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = parseInt(entry.target.getAttribute('data-id') || '0');
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
      { threshold: 0.6 }
    );

    const modules = document.querySelectorAll('.module-card');
    modules.forEach((module) => {
      observer.observe(module);
    });

    return () => {
      modules.forEach((module) => {
        observer.unobserve(module);
      });
    };
  }, []);

  const scrollToModule = (index: number) => {
    const modules = document.querySelectorAll('.module-card');
    if (modules[index]) {
      modules[index].scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  const renderIcon = (iconName: string) => {
    const Icon = (LucideIcons as any)[iconName.charAt(0).toUpperCase() + iconName.slice(1)];
    return Icon ? <Icon size={32} className="text-amber-400" /> : null;
  };

  return (
    <section id="journey" className="min-h-screen py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#3d2204] to-black z-0"></div>
      
      {/* Glowing river path */}
      <div className="absolute left-1/2 top-0 bottom-0 w-2 bg-gradient-to-b from-amber-500/20 via-amber-400/60 to-amber-500/20 transform -translate-x-1/2 z-10">
        <div className="absolute inset-0 animate-pulse-slow bg-gradient-to-b from-amber-500/0 via-amber-400 to-amber-500/0"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Your Spiritual Journey</h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Follow the path of self-discovery through our comprehensive course modules, each designed to illuminate a different aspect of your spiritual being.
          </p>
        </div>
        
        <div className="flex mb-10 overflow-x-auto py-4 scrollbar-hide">
          <div className="flex space-x-2 mx-auto">
            {courseModules.map((module, index) => (
              <button
                key={index}
                onClick={() => scrollToModule(index)}
                className={`px-4 py-2 rounded-full text-sm whitespace-nowrap transition-all ${
                  activeModule === index
                    ? 'bg-amber-500 text-white'
                    : 'bg-gray-800 text-white/70 hover:bg-gray-700'
                }`}
              >
                {module.title}
              </button>
            ))}
          </div>
        </div>
        
        <div ref={containerRef} className="space-y-24 py-10">
          {courseModules.map((module, index) => (
            <div
              key={index}
              data-id={index}
              className={`module-card flex flex-col md:flex-row items-center ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              } gap-8 transition-all duration-1000 ${
                isVisible[index] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
              }`}
            >
              <div className={`w-full md:w-1/3 flex justify-center`}>
                <div className="w-32 h-32 rounded-full bg-gradient-to-br from-amber-400/20 to-amber-600/20 flex items-center justify-center border border-amber-500/30 shadow-lg shadow-amber-500/20">
                  {renderIcon(module.icon)}
                </div>
              </div>
              <div className="w-full md:w-2/3 bg-black/40 backdrop-blur-sm p-8 rounded-lg border border-amber-500/10 shadow-xl">
                <h3 className="text-2xl font-bold text-white mb-2">{module.title}</h3>
                <h4 className="text-xl text-amber-300 mb-4">{module.subtitle}</h4>
                <p className="text-white/80">{module.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default JourneyPath;