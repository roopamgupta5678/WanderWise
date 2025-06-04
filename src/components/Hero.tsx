import React, { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  const scrollToDestinations = () => {
    const element = document.getElementById('destinations');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="home" 
      className="relative h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: "url('https://images.pexels.com/photos/2325446/pexels-photo-2325446.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750')" }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      
      <div className={`relative z-10 text-center px-4 max-w-4xl transition-all duration-1000 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}>
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Discover Your Next Adventure</h1>
        <p className="text-xl md:text-2xl text-white mb-8 italic">
          "Let AI take you places you've never imagined."
        </p>
        <button 
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105"
          onClick={() => {
            const element = document.getElementById('ai-suggestions');
            if (element) element.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          Find My Destination
        </button>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button onClick={scrollToDestinations} className="text-white focus:outline-none">
          <ChevronDown size={32} />
        </button>
      </div>
    </section>
  );
};

export default Hero;