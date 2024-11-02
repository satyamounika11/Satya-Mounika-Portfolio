import React from 'react';
import { Award } from 'lucide-react';

const certifications = [
  {
    name: "AWS Certified Solutions Architect",
    issuer: "Amazon Web Services",
    date: "2023"
  },
  {
    name: "Azure DevOps Engineer Expert",
    issuer: "Microsoft",
    date: "2022"
  },
  {
    name: "Certified Kubernetes Administrator",
    issuer: "Cloud Native Computing Foundation",
    date: "2022"
  },
  {
    name: "HashiCorp Certified Terraform Associate",
    issuer: "HashiCorp",
    date: "2021"
  }
];

export default function Certifications() {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-50 to-purple-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">Certifications</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {certifications.map((cert, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <Award className="w-12 h-12 text-blue-500 mb-4" />
              <h3 className="text-lg font-semibold text-gray-800 mb-2">{cert.name}</h3>
              <p className="text-gray-600">{cert.issuer}</p>
              <p className="text-blue-500 mt-2">{cert.date}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}