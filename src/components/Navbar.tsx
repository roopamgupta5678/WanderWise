import React, { useState, useEffect } from 'react';
import { Menu, X, MapPin } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <MapPin className="text-blue-600 mr-2" size={24} />
            <span className="text-2xl font-bold text-blue-600">WanderWise</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <button onClick={() => scrollToSection('home')} className="nav-link">Home</button>
            <button onClick={() => scrollToSection('destinations')} className="nav-link">Destinations</button>
            <button onClick={() => scrollToSection('plan')} className="nav-link">Plan Trip</button>
            <button onClick={() => scrollToSection('ai-suggestions')} className="nav-link">AI Suggestions</button>
            <button onClick={() => scrollToSection('tips')} className="nav-link">Travel Tips</button>
            <button onClick={() => scrollToSection('contact')} className="nav-link">Contact</button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              className="text-gray-600 focus:outline-none"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-white absolute top-full left-0 w-full shadow-md py-4 px-4 space-y-4">
            <button onClick={() => scrollToSection('home')} className="block w-full text-left py-2 nav-link">Home</button>
            <button onClick={() => scrollToSection('destinations')} className="block w-full text-left py-2 nav-link">Destinations</button>
            <button onClick={() => scrollToSection('plan')} className="block w-full text-left py-2 nav-link">Plan Trip</button>
            <button onClick={() => scrollToSection('ai-suggestions')} className="block w-full text-left py-2 nav-link">AI Suggestions</button>
            <button onClick={() => scrollToSection('tips')} className="block w-full text-left py-2 nav-link">Travel Tips</button>
            <button onClick={() => scrollToSection('contact')} className="block w-full text-left py-2 nav-link">Contact</button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;