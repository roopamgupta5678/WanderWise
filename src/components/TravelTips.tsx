import React, { useState } from 'react';
import { Check, ChevronDown, ChevronUp } from 'lucide-react';
import { travelTips } from '../data/travelTipsData';

const TravelTips = () => {
  const [activeCategory, setActiveCategory] = useState('packing');
  const [openTip, setOpenTip] = useState<number | null>(null);

  const toggleTip = (id: number) => {
    setOpenTip(openTip === id ? null : id);
  };

  return (
    <section id="tips" className="py-20 px-4 bg-white">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Travel Tips & Advice</h2>
        <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
          Make the most of your journey with our expert travel tips and recommendations.
        </p>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {['packing', 'safety', 'budget', 'documentation'].map((category) => (
            <button
              key={category}
              className={`px-5 py-2 rounded-full font-medium transition-colors ${
                activeCategory === category
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
              onClick={() => setActiveCategory(category)}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        {/* Tips Accordion */}
        <div className="max-w-3xl mx-auto">
          {travelTips
            .filter((tip) => tip.category === activeCategory)
            .map((tip) => (
              <div
                key={tip.id}
                className="mb-4 border border-gray-200 rounded-lg overflow-hidden"
              >
                <button
                  className="w-full flex justify-between items-center p-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors"
                  onClick={() => toggleTip(tip.id)}
                >
                  <span className="font-medium">{tip.title}</span>
                  {openTip === tip.id ? (
                    <ChevronUp className="w-5 h-5 text-gray-500" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-500" />
                  )}
                </button>
                
                {openTip === tip.id && (
                  <div className="p-4 bg-white">
                    <p className="text-gray-600 mb-4">{tip.description}</p>
                    {tip.bullets && (
                      <ul className="space-y-2">
                        {tip.bullets.map((bullet, index) => (
                          <li key={index} className="flex items-start">
                            <Check className="w-5 h-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                )}
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default TravelTips;