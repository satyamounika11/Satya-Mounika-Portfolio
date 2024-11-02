import React from 'react';
import { Mail, Github, Linkedin } from 'lucide-react';

export default function Hero() {
  return (
    <header className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
      <div className="container mx-auto px-6 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Satya Mounika Mushini
            </h1>
            <h2 className="text-2xl md:text-3xl mb-6">
              Senior DevOps Engineer
            </h2>
            <p className="text-xl opacity-90 mb-8">
              5.5+ years of experience in DevOps Engineering and Cloud Infrastructure
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="mailto:satyamounika.mushini@gmail.com" 
                className="flex items-center gap-2 bg-white text-blue-600 hover:bg-blue-50 px-6 py-3 rounded-lg font-semibold">
                <Mail size={20} />
                Contact Me
              </a>
              <a href="https://github.com/satyamounika11" 
                className="flex items-center gap-2 bg-gray-900 hover:bg-gray-800 px-6 py-3 rounded-lg">
                <Github size={20} />
                GitHub
              </a>
              <a href="https://linkedin.com/in/satya-mounika" 
                className="flex items-center gap-2 bg-blue-700 hover:bg-blue-800 px-6 py-3 rounded-lg">
                <Linkedin size={20} />
                LinkedIn
              </a>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <div className="absolute inset-0 bg-blue-500 rounded-full opacity-20 animate-pulse"></div>
              <img
                src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=800"
                alt="Satya Mounika Mushini"
                className="rounded-full w-full h-full object-cover border-4 border-white shadow-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}