import React from 'react';

const experiences = [
  {
    title: "Senior DevOps Engineer",
    company: "Cognizant",
    period: "2021 - Present",
    description: "Leading cloud infrastructure and CI/CD implementations",
    responsibilities: [
      "Architected and implemented CI/CD pipelines using Jenkins and GitLab",
      "Managed Kubernetes clusters and containerized applications",
      "Automated infrastructure deployment using Terraform and Ansible",
      "Led team of 5 DevOps engineers in implementing cloud-native solutions",
      "Reduced deployment time by 60% through automation and optimization"
    ]
  },
  {
    title: "DevOps Engineer",
    company: "Infosys",
    period: "2018 - 2021",
    description: "Cloud infrastructure and automation specialist",
    responsibilities: [
      "Implemented infrastructure as code using Terraform and CloudFormation",
      "Developed automation scripts for deployment and monitoring",
      "Managed AWS and Azure cloud environments",
      "Implemented monitoring solutions using ELK Stack and Prometheus",
      "Achieved 99.99% uptime for critical production services"
    ]
  }
];

export default function Experience() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">Professional Experience</h2>
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-gray-50 rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex flex-wrap justify-between items-start mb-6">
                <div>
                  <h3 className="text-2xl font-semibold text-gray-800">{exp.title}</h3>
                  <p className="text-blue-600 font-medium">{exp.company}</p>
                  <p className="text-gray-600 mt-2">{exp.description}</p>
                </div>
                <span className="text-gray-500 font-medium">{exp.period}</span>
              </div>
              <ul className="space-y-3">
                {exp.responsibilities.map((item, i) => (
                  <li key={i} className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}