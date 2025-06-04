import React from 'react';
import { MapPin, Star, Calendar, DollarSign, ThumbsUp } from 'lucide-react';

interface Destination {
  id: number;
  name: string;
  image: string;
  location: string;
  description: string;
  bestSeason: string;
  budget: string;
  rating: number;
  tags: string[];
}

interface DestinationCardProps {
  destination: Destination;
}

const DestinationCard = ({ destination }: DestinationCardProps) => {
  const getBudgetSymbol = (budget: string) => {
    switch (budget) {
      case 'low':
        return '$';
      case 'medium':
        return '$$';
      case 'high':
        return '$$$';
      default:
        return '$$';
    }
  };

  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg transform transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
      <div className="relative h-48 overflow-hidden">
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
        <h3 className="text-xl font-bold mb-2">{destination.name}</h3>
        <div className="flex items-center text-gray-600 mb-3">
          <MapPin className="w-4 h-4 mr-1" />
          <span className="text-sm">{destination.location}</span>
        </div>
        
        <p className="text-gray-600 mb-4 line-clamp-3">{destination.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {destination.tags.map((tag, index) => (
            <span key={index} className="bg-blue-100 text-blue-600 text-xs px-2 py-1 rounded-full">
              {tag}
            </span>
          ))}
        </div>
        
        <div className="flex justify-between text-sm text-gray-600">
          <div className="flex items-center">
            <Calendar className="w-4 h-4 mr-1" />
            <span>Best: {destination.bestSeason}</span>
          </div>
          <div className="flex items-center">
            <DollarSign className="w-4 h-4 mr-1" />
            <span>{getBudgetSymbol(destination.budget)}</span>
          </div>
        </div>
        
        <div className="mt-4 pt-4 border-t border-gray-100 flex justify-between items-center">
          <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition">
            View Details
          </button>
          <button className="flex items-center text-gray-500 hover:text-blue-600 transition">
            <ThumbsUp className="w-4 h-4 mr-1" />
            <span>Save</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default DestinationCard;