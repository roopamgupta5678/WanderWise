import React, { useState, useEffect } from 'react';
import { MapPin, Star } from 'lucide-react';
import { destinations } from '../data/destinationsData';

const PopularDestinations = () => {
  const [visibleItems, setVisibleItems] = useState(3);
  const [animated, setAnimated] = useState<number[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          animateCards();
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('destinations');
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  const animateCards = () => {
    let index = 0;
    const interval = setInterval(() => {
      if (index >= destinations.length) {
        clearInterval(interval);
        return;
      }
      
      setAnimated(prev => [...prev, index]);
      index++;
    }, 200);
  };

  const showMore = () => {
    setVisibleItems(prev => Math.min(prev + 3, destinations.length));
  };

  return (
    <section id="destinations" className="py-20 px-4 bg-white">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Popular Destinations</h2>
        <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
          Explore our handpicked selection of the most breathtaking and sought-after 
          destinations around the globe.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.slice(0, visibleItems).map((destination, index) => (
            <div 
              key={destination.id}
              className={`bg-white rounded-lg overflow-hidden shadow-lg transform transition-all duration-500 hover:shadow-xl hover:-translate-y-1 ${
                animated.includes(index) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <div className="relative h-60 overflow-hidden">
                <img 
                  src={destination.image} 
                  alt={destination.name} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute top-4 right-4 bg-white bg-opacity-90 px-2 py-1 rounded-full flex items-center">
                  <Star className="text-yellow-500 mr-1" size={16} />
                  <span className="text-sm font-medium">{destination.rating}/5</span>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center mb-3">
                  <MapPin className="text-blue-600 mr-2" size={18} />
                  <h3 className="text-xl font-bold">{destination.name}</h3>
                </div>
                <p className="text-gray-600 mb-4">{destination.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-blue-600 font-bold">${destination.price} / night</span>
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {visibleItems < destinations.length && (
          <div className="text-center mt-12">
            <button 
              onClick={showMore}
              className="bg-transparent hover:bg-blue-600 text-blue-600 hover:text-white border border-blue-600 font-semibold py-2 px-6 rounded-md transition-colors duration-300"
            >
              Show More Destinations
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default PopularDestinations;