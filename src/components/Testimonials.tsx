import React, { useState, useEffect, useRef } from 'react';
import { Quote } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  quote: string;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Arjun Mehta",
    role: "Software Engineer",
    quote: "The Discover Yourself series completely transformed my approach to work-life balance. I've found a sense of purpose that was missing before.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80"
  },
  {
    id: 2,
    name: "Priya Sharma",
    role: "Medical Doctor",
    quote: "As a doctor, I deal with stress daily. This course gave me practical tools to maintain inner peace while serving others with compassion.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80"
  },
  {
    id: 3,
    name: "Rahul Kapoor",
    role: "University Student",
    quote: "I was struggling with direction in life until I took this course. The ancient wisdom presented in a modern context resonated deeply with me.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80"
  }
];

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isChanging, setIsChanging] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const autoRotateRef = useRef<NodeJS.Timeout | null>(null);

  // Auto-rotate testimonials
  useEffect(() => {
    const startAutoRotate = () => {
      autoRotateRef.current = setInterval(() => {
        setIsChanging(true);
        setTimeout(() => {
          setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
          setIsChanging(false);
        }, 500);
      }, 7000); // Change testimonial every 7 seconds
    };

    startAutoRotate();

    return () => {
      if (autoRotateRef.current) {
        clearInterval(autoRotateRef.current);
      }
    };
  }, []);

  // Scroll animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section 
      ref={sectionRef}
      id="testimonials" 
      className="py-20 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-[#3d2204] to-black z-0"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div 
          className={`text-center mb-16 transition-all duration-1000 transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Transformative Experiences</h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Hear from those who have embarked on this spiritual journey and experienced profound changes in their lives.
          </p>
        </div>
        
        <div 
          className={`relative transition-all duration-1000 delay-300 transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div 
            className="bg-black/40 backdrop-blur-sm p-8 md:p-12 rounded-lg border border-amber-500/10 shadow-xl max-w-4xl mx-auto transition-all duration-300 hover:shadow-2xl hover:scale-[1.02] hover:border-amber-500/30"
          >
            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
              <Quote size={48} className="text-amber-400 opacity-50" />
            </div>
            
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div 
                className={`w-32 h-32 rounded-full overflow-hidden border-4 border-amber-500/30 shadow-lg flex-shrink-0 transition-all duration-500 ${
                  isChanging ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
                }`}
              >
                <img 
                  src={testimonials[currentIndex].image} 
                  alt={testimonials[currentIndex].name} 
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
              </div>
              
              <div 
                className={`transition-all duration-500 ${
                  isChanging ? 'opacity-0 translate-x-10' : 'opacity-100 translate-x-0'
                }`}
              >
                <p className="text-white/90 text-lg italic mb-6">{testimonials[currentIndex].quote}</p>
                <div>
                  <h4 className="text-xl font-bold text-white">{testimonials[currentIndex].name}</h4>
                  <p className="text-amber-300">{testimonials[currentIndex].role}</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center mt-8">
            <div className="flex space-x-2 items-center">
              {testimonials.map((_, index) => (
                <div
                  key={index}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    currentIndex === index 
                      ? 'bg-amber-500 scale-125' 
                      : 'bg-gray-600'
                  }`}
                  aria-hidden="true"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;