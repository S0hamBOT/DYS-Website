import React from 'react';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="fixed w-full z-50 px-4 sm:px-6 lg:px-8 flex justify-center pt-4">
      <nav className="bg-gradient-to-r from-[#db7b0d]/90 to-black/90 backdrop-blur-sm rounded-full shadow-lg w-full max-w-5xl">
        <div className="px-4 sm:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <h1 className="text-white text-xl font-bold">Discover Yourself</h1>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <a href="#home" className="text-white hover:text-amber-200 px-3 py-2 rounded-md text-sm font-medium transition-colors">Home</a>
                <a href="#journey" className="text-white hover:text-amber-200 px-3 py-2 rounded-md text-sm font-medium transition-colors">Journey</a>
                <a href="#about" className="text-white hover:text-amber-200 px-3 py-2 rounded-md text-sm font-medium transition-colors">About</a>
                <a href="#contact" className="text-white hover:text-amber-200 px-3 py-2 rounded-md text-sm font-medium transition-colors">Contact</a>
                <button className="bg-amber-500 hover:bg-amber-600 text-white px-4 py-2 rounded-full text-sm font-medium transition-colors">Enroll Now</button>
              </div>
            </div>
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-amber-200 focus:outline-none"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden bg-black/90 backdrop-blur-sm rounded-2xl mt-2 overflow-hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a href="#home" className="text-white hover:text-amber-200 block px-3 py-2 rounded-md text-base font-medium">Home</a>
              <a href="#journey" className="text-white hover:text-amber-200 block px-3 py-2 rounded-md text-base font-medium">Journey</a>
              <a href="#about" className="text-white hover:text-amber-200 block px-3 py-2 rounded-md text-base font-medium">About</a>
              <a href="#contact" className="text-white hover:text-amber-200 block px-3 py-2 rounded-md text-base font-medium">Contact</a>
              <button className="w-full text-left bg-amber-500 hover:bg-amber-600 text-white px-3 py-2 rounded-md text-base font-medium mt-4">Enroll Now</button>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;