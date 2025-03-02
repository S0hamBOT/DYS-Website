import React from 'react';
import { BookOpen, Award, Users } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black to-[#3d2204] z-0"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">About The Course</h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Learn from HG Radheshyam Das, an IIT monk who combines ancient wisdom with modern understanding.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <div className="bg-black/40 backdrop-blur-sm p-8 rounded-lg border border-amber-500/10 shadow-xl">
              <h3 className="text-2xl font-bold text-white mb-6">Meet Your Guide</h3>
              <p className="text-white/80 mb-6">
                HG Radheshyam Das is a monk with a unique background, combining his education from the prestigious Indian Institute of Technology with deep spiritual wisdom from ancient Vedic traditions.
              </p>
              <p className="text-white/80 mb-6">
                With over 15 years of experience guiding seekers on their spiritual journey, he has developed a practical approach to spirituality that resonates with modern professionals, students, and anyone seeking deeper meaning in life.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <BookOpen size={20} className="text-amber-400 mr-3" />
                  <span className="text-white">IIT Graduate & Vedic Scholar</span>
                </div>
                <div className="flex items-center">
                  <Users size={20} className="text-amber-400 mr-3" />
                  <span className="text-white">Guided 10,000+ Students</span>
                </div>
                <div className="flex items-center">
                  <Award size={20} className="text-amber-400 mr-3" />
                  <span className="text-white">International Speaker</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="order-1 md:order-2">
            <div className="relative">
              <div className="aspect-w-4 aspect-h-5 rounded-lg overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1609710228159-0fa9bd7c0827?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                  alt="Spiritual Teacher" 
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-gradient-to-br from-amber-400 to-amber-600 p-4 rounded-lg shadow-xl">
                <p className="text-white font-bold">15+ Years Experience</p>
              </div>
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-black/40 backdrop-blur-sm rounded-full flex items-center justify-center border border-amber-500/30">
                <div className="text-center">
                  <p className="text-amber-400 font-bold text-xl">DYS</p>
                  <p className="text-white text-xs">Course Series</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;