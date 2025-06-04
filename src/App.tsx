import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PopularDestinations from './components/PopularDestinations';
import PlanYourTrip from './components/PlanYourTrip';
import TravelTips from './components/TravelTips';
import AiSuggestions from './components/AiSuggestions';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white text-gray-800 font-sans">
      <Navbar />
      <main>
        <Hero />
        <PopularDestinations />
        <PlanYourTrip />
        <AiSuggestions />
        <TravelTips />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;