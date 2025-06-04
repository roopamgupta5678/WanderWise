import React from 'react';
import { MapPin, Mail, Phone, Facebook, Twitter, Instagram, Youtube as YouTube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-4">
              <MapPin className="text-blue-400 mr-2" size={24} />
              <span className="text-2xl font-bold">WanderWise</span>
            </div>
            <p className="text-gray-400 mb-4">
              Your AI-powered travel companion for discovering the perfect destinations based on your preferences.
            </p>
            <div className="space-y-2">
              <div className="flex items-center">
                <MapPin className="text-gray-400 mr-2" size={16} />
                <span className="text-gray-400">123 Travel Avenue, New York, NY 10001</span>
              </div>
              <div className="flex items-center">
                <Phone className="text-gray-400 mr-2" size={16} />
                <span className="text-gray-400">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center">
                <Mail className="text-gray-400 mr-2" size={16} />
                <span className="text-gray-400">info@wanderwise.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4 border-b border-gray-700 pb-2">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-400 hover:text-blue-400 transition">Home</a></li>
              <li><a href="#destinations" className="text-gray-400 hover:text-blue-400 transition">Destinations</a></li>
              <li><a href="#plan" className="text-gray-400 hover:text-blue-400 transition">Plan Your Trip</a></li>
              <li><a href="#ai-suggestions" className="text-gray-400 hover:text-blue-400 transition">AI Travel Suggestions</a></li>
              <li><a href="#tips" className="text-gray-400 hover:text-blue-400 transition">Travel Tips</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-blue-400 transition">Contact Us</a></li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-lg font-bold mb-4 border-b border-gray-700 pb-2">Explore</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-blue-400 transition">Adventure Travel</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-400 transition">Beach Destinations</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-400 transition">City Breaks</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-400 transition">Cultural Experiences</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-400 transition">Luxury Retreats</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-400 transition">Family Vacations</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-bold mb-4 border-b border-gray-700 pb-2">Newsletter</h3>
            <p className="text-gray-400 mb-4">
              Subscribe to our newsletter and get exclusive deals and travel tips.
            </p>
            <form className="mb-4">
              <div className="flex mb-2">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="flex-grow px-4 py-2 bg-gray-800 text-white border border-gray-700 rounded-l focus:outline-none focus:border-blue-400"
                />
                <button
                  type="submit"
                  className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-r transition"
                >
                  Join
                </button>
              </div>
              <p className="text-xs text-gray-500">
                By subscribing, you agree to our privacy policy and allow us to send you emails.
              </p>
            </form>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-blue-400 transition"><Facebook size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition"><Twitter size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition"><Instagram size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition"><YouTube size={20} /></a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p>&copy; {new Date().getFullYear()} WanderWise. All rights reserved.</p>
            <div className="mt-4 md:mt-0 space-x-4">
              <a href="#" className="hover:text-blue-400 transition">Terms of Service</a>
              <a href="#" className="hover:text-blue-400 transition">Privacy Policy</a>
              <a href="#" className="hover:text-blue-400 transition">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;