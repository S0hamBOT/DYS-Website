import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black to-[#1a0d02] z-0"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Begin Your Journey</h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Have questions about the course? Reach out to us and take the first step towards self-discovery.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-black/40 backdrop-blur-sm p-8 rounded-lg border border-amber-500/10 shadow-xl">
            <h3 className="text-2xl font-bold text-white mb-6">Get in Touch</h3>
            
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-white/70 mb-1">Your Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 bg-gray-900/50 border border-amber-500/20 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500/50 text-white"
                  placeholder="Enter your name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-white/70 mb-1">Email Address</label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 bg-gray-900/50 border border-amber-500/20 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500/50 text-white"
                  placeholder="Enter your email"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-white/70 mb-1">Your Message</label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-3 bg-gray-900/50 border border-amber-500/20 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500/50 text-white"
                  placeholder="How can we help you?"
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-medium py-3 px-4 rounded-md transition-colors flex items-center justify-center gap-2"
              >
                <Send size={18} />
                Send Message
              </button>
            </form>
          </div>
          
          <div>
            <div className="bg-black/40 backdrop-blur-sm p-8 rounded-lg border border-amber-500/10 shadow-xl mb-8">
              <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <Mail className="text-amber-400 mr-4 mt-1" size={20} />
                  <div>
                    <p className="text-white font-medium">Email</p>
                    <p className="text-white/70">info@discoveryourself.org</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone className="text-amber-400 mr-4 mt-1" size={20} />
                  <div>
                    <p className="text-white font-medium">Phone</p>
                    <p className="text-white/70">+91 98765 43210</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <MapPin className="text-amber-400 mr-4 mt-1" size={20} />
                  <div>
                    <p className="text-white font-medium">Location</p>
                    <p className="text-white/70">Spiritual Center, New Delhi, India</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-black/40 backdrop-blur-sm p-8 rounded-lg border border-amber-500/10 shadow-xl">
              <h3 className="text-2xl font-bold text-white mb-6">Upcoming Courses</h3>
              
              <div className="space-y-4">
                <div className="border-l-4 border-amber-500 pl-4">
                  <p className="text-white font-medium">DYS Introductory Session</p>
                  <p className="text-amber-300">June 15, 2025 • Online</p>
                </div>
                
                <div className="border-l-4 border-amber-500 pl-4">
                  <p className="text-white font-medium">DYS 1-4 Intensive</p>
                  <p className="text-amber-300">July 10-14, 2025 • New Delhi</p>
                </div>
                
                <div className="border-l-4 border-amber-500 pl-4">
                  <p className="text-white font-medium">DYS Advanced Retreat</p>
                  <p className="text-amber-300">August 5-12, 2025 • Rishikesh</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;