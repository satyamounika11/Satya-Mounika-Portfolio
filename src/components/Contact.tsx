import React from 'react';
import { Mail, Phone, Github, Linkedin, ExternalLink } from 'lucide-react';

export default function Contact() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
            <div className="space-y-4">
              <a href="tel:9490371537" className="flex items-center gap-3 text-gray-300 hover:text-white">
                <Phone size={20} />
                +91 9490371537
              </a>
              <a href="mailto:satyamounika.mushini@gmail.com" className="flex items-center gap-3 text-gray-300 hover:text-white">
                <Mail size={20} />
                satyamounika.mushini@gmail.com
              </a>
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-6">Connect With Me</h2>
            <div className="flex gap-6">
              <a href="https://github.com/satyamounika11" className="text-gray-300 hover:text-white">
                <Github size={24} />
              </a>
              <a href="https://linkedin.com/in/satya-mounika" className="text-gray-300 hover:text-white">
                <Linkedin size={24} />
              </a>
              <a href="https://medium.com/@msmounica1192" className="text-gray-300 hover:text-white">
                <ExternalLink size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}