import React from 'react';
import { Facebook, Twitter, Instagram, Youtube, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black py-12 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-[#db7b0d]/10 to-transparent z-0"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Discover Yourself</h3>
            <p className="text-white/70 mb-6">
              A transformative journey of self-discovery guided by ancient wisdom and modern understanding.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white/70 hover:text-amber-400 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-white/70 hover:text-amber-400 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-white/70 hover:text-amber-400 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-white/70 hover:text-amber-400 transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-white/70 hover:text-amber-400 transition-colors">Home</a></li>
              <li><a href="#journey" className="text-white/70 hover:text-amber-400 transition-colors">Journey</a></li>
              <li><a href="#about" className="text-white/70 hover:text-amber-400 transition-colors">About</a></li>
              <li><a href="#contact" className="text-white/70 hover:text-amber-400 transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold text-white mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-white/70 hover:text-amber-400 transition-colors">Blog</a></li>
              <li><a href="#" className="text-white/70 hover:text-amber-400 transition-colors">Podcasts</a></li>
              <li><a href="#" className="text-white/70 hover:text-amber-400 transition-colors">Videos</a></li>
              <li><a href="#" className="text-white/70 hover:text-amber-400 transition-colors">Books</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold text-white mb-4">Subscribe</h3>
            <p className="text-white/70 mb-4">
              Join our newsletter for spiritual insights and course updates.
            </p>
            <form className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="px-4 py-2 bg-gray-900 border border-amber-500/20 rounded-l-md focus:outline-none focus:ring-2 focus:ring-amber-500/50 text-white flex-grow"
              />
              <button
                type="submit"
                className="bg-amber-500 hover:bg-amber-600 text-white px-4 py-2 rounded-r-md transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/50 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Discover Yourself. All rights reserved.
          </p>
          <p className="text-white/50 text-sm flex items-center">
            Made with <Heart size={14} className="text-amber-500 mx-1" /> by Spiritual Technology Team
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;