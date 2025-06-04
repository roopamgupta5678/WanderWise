import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, User, Star } from 'lucide-react';
import { testimonials } from '../data/testimonialsData';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prev = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="py-20 px-4 bg-blue-50">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">What Travelers Say</h2>
        <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
          Read about the experiences of travelers who have used WanderWise to plan their unforgettable journeys.
        </p>

        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div 
                  key={testimonial.id} 
                  className="w-full flex-shrink-0 px-4"
                >
                  <div className="bg-white rounded-xl shadow-md p-8 md:p-10">
                    <div className="flex flex-col md:flex-row items-start md:items-center mb-6">
                      <div className="bg-blue-100 rounded-full p-3 mb-4 md:mb-0 md:mr-4">
                        <User className="w-12 h-12 text-blue-500" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold">{testimonial.name}</h3>
                        <p className="text-gray-600">{testimonial.destination}</p>
                        <div className="flex mt-2">
                          {[...Array(5)].map((_, i) => (
                            <Star 
                              key={i} 
                              className={`w-5 h-5 ${i < testimonial.rating ? 'text-yellow-500 fill-yellow-500' : 'text-gray-300'}`} 
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                    <blockquote className="text-gray-600 italic">"{testimonial.quote}"</blockquote>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button 
            onClick={prev}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 md:-translate-x-6 bg-white rounded-full p-2 shadow-md hover:shadow-lg transition-shadow"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6 text-blue-600" />
          </button>
          
          <button 
            onClick={next}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 md:translate-x-6 bg-white rounded-full p-2 shadow-md hover:shadow-lg transition-shadow"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6 text-blue-600" />
          </button>
        </div>

        <div className="flex justify-center mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 mx-1 rounded-full transition-colors ${
                currentIndex === index ? 'bg-blue-600' : 'bg-gray-300'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;