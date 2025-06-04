import React from 'react';
import { Calendar, Map, CreditCard, Plane, Hotel, Camera, Compass } from 'lucide-react';

const planningSteps = [
  {
    id: 1,
    title: 'Choose Your Destination',
    description: 'Select from our curated list or use our AI tool to find the perfect match for your preferences.',
    icon: <Compass className="w-8 h-8 text-blue-500" />,
  },
  {
    id: 2,
    title: 'Set Your Dates',
    description: 'Check the best times to visit and plan your trip during optimal seasons.',
    icon: <Calendar className="w-8 h-8 text-blue-500" />,
  },
  {
    id: 3,
    title: 'Book Your Flights',
    description: 'Find the best deals on flights with our partner airlines and travel agencies.',
    icon: <Plane className="w-8 h-8 text-blue-500" />,
  },
  {
    id: 4,
    title: 'Reserve Accommodations',
    description: 'Choose from a wide range of hotels, resorts, and vacation rentals.',
    icon: <Hotel className="w-8 h-8 text-blue-500" />,
  },
  {
    id: 5,
    title: 'Plan Activities',
    description: 'Discover and book tours, attractions, and unique experiences for your trip.',
    icon: <Camera className="w-8 h-8 text-blue-500" />,
  },
  {
    id: 6,
    title: 'Prepare Your Budget',
    description: 'Estimate costs and plan your expenses for a worry-free vacation.',
    icon: <CreditCard className="w-8 h-8 text-blue-500" />,
  },
];

const PlanYourTrip = () => {
  return (
    <section id="plan\" className="py-20 px-4 bg-blue-50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Plan Your Perfect Trip</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Follow our simple steps to create your dream vacation. From choosing destinations 
            to booking activities, we'll guide you through the entire process.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {planningSteps.map((step) => (
            <div 
              key={step.id} 
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mb-4 mx-auto">
                {step.icon}
              </div>
              <h3 className="text-xl font-bold text-center mb-3">{step.title}</h3>
              <p className="text-gray-600 text-center">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105">
            Start Planning Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default PlanYourTrip;