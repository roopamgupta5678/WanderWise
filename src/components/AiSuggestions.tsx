import React, { useState } from 'react';
import { Compass, DollarSign, Globe, Sun, Heart } from 'lucide-react';
import { findDestinations } from '../utils/destinationMatcher';
import DestinationCard from './DestinationCard';

interface FormData {
  budget: string;
  continent: string;
  season: string;
  interest: string;
}

const initialFormData: FormData = {
  budget: 'medium',
  continent: 'any',
  season: 'summer',
  interest: 'adventure',
};

const AiSuggestions = () => {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [suggestions, setSuggestions] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [showResults, setShowResults] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call delay
    setTimeout(() => {
      const results = findDestinations(
        formData.budget,
        formData.continent,
        formData.season,
        formData.interest
      );
      
      setSuggestions(results);
      setShowResults(true);
      setIsLoading(false);
    }, 1500);
  };

  const resetForm = () => {
    setFormData(initialFormData);
    setSuggestions([]);
    setShowResults(false);
  };

  return (
    <section id="ai-suggestions" className="py-20 px-4 bg-gradient-to-br from-blue-50 to-teal-50">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Where Should I Go?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Let our AI help you discover your perfect destination. Tell us your preferences, 
            and we'll suggest places that match your travel style.
          </p>
        </div>

        {!showResults ? (
          <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
            <div className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Budget */}
                  <div>
                    <label className="flex items-center mb-2 text-gray-700">
                      <DollarSign className="w-5 h-5 text-blue-500 mr-2" />
                      Your Budget
                    </label>
                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="low">Budget Friendly</option>
                      <option value="medium">Moderate</option>
                      <option value="high">Luxury</option>
                    </select>
                  </div>

                  {/* Continent */}
                  <div>
                    <label className="flex items-center mb-2 text-gray-700">
                      <Globe className="w-5 h-5 text-blue-500 mr-2" />
                      Preferred Continent
                    </label>
                    <select
                      name="continent"
                      value={formData.continent}
                      onChange={handleChange}
                      className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="any">Any Continent</option>
                      <option value="asia">Asia</option>
                      <option value="europe">Europe</option>
                      <option value="north-america">North America</option>
                      <option value="south-america">South America</option>
                      <option value="africa">Africa</option>
                      <option value="oceania">Oceania</option>
                    </select>
                  </div>

                  {/* Season */}
                  <div>
                    <label className="flex items-center mb-2 text-gray-700">
                      <Sun className="w-5 h-5 text-blue-500 mr-2" />
                      Travel Season
                    </label>
                    <select
                      name="season"
                      value={formData.season}
                      onChange={handleChange}
                      className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="spring">Spring</option>
                      <option value="summer">Summer</option>
                      <option value="fall">Fall</option>
                      <option value="winter">Winter</option>
                    </select>
                  </div>

                  {/* Interest */}
                  <div>
                    <label className="flex items-center mb-2 text-gray-700">
                      <Heart className="w-5 h-5 text-blue-500 mr-2" />
                      Your Interest
                    </label>
                    <select
                      name="interest"
                      value={formData.interest}
                      onChange={handleChange}
                      className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="adventure">Adventure</option>
                      <option value="relaxation">Relaxation</option>
                      <option value="culture">Culture & History</option>
                      <option value="food">Food & Cuisine</option>
                      <option value="nature">Nature & Wildlife</option>
                      <option value="romantic">Romantic Getaway</option>
                    </select>
                  </div>
                </div>

                <div className="text-center pt-4">
                  <button
                    type="submit"
                    className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 flex items-center justify-center mx-auto"
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <span className="flex items-center">
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white\" xmlns="http://www.w3.org/2000/svg\" fill="none\" viewBox="0 0 24 24">
                          <circle className="opacity-25\" cx="12\" cy="12\" r="10\" stroke="currentColor\" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Finding destinations...
                      </span>
                    ) : (
                      <span className="flex items-center">
                        <Compass className="mr-2" size={20} />
                        Find My Destinations
                      </span>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        ) : (
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-center">
              Your Personalized Destination Matches
            </h3>
            
            {suggestions.length > 0 ? (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {suggestions.map((destination) => (
                    <DestinationCard key={destination.id} destination={destination} />
                  ))}
                </div>
                <div className="text-center mt-8">
                  <button
                    onClick={resetForm}
                    className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition-all duration-300"
                  >
                    Start a New Search
                  </button>
                </div>
              </>
            ) : (
              <div className="text-center p-8 bg-white rounded-lg shadow">
                <p className="text-gray-600 mb-4">
                  We couldn't find destinations matching all your criteria. Try adjusting your preferences.
                </p>
                <button
                  onClick={resetForm}
                  className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-full transition-all duration-300"
                >
                  Try Again
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default AiSuggestions;