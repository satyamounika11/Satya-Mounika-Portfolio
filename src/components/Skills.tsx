import React from 'react';
import { Terminal, Server, Cloud, Code, Database, Shield, Book, Award } from 'lucide-react';

const skills = [
  {
    icon: Terminal,
    title: "DevOps & CI/CD",
    skills: ["Jenkins", "GitLab CI", "Docker", "Kubernetes", "Git"]
  },
  {
    icon: Cloud,
    title: "Cloud Platforms",
    skills: ["AWS", "Azure", "Cloud Architecture", "Microservices"]
  },
  {
    icon: Server,
    title: "Infrastructure",
    skills: ["Terraform", "Ansible", "Infrastructure as Code", "Linux"]
  },
  {
    icon: Code,
    title: "Development",
    skills: ["Python", "Shell Scripting", "Java", "Maven"]
  },
  {
    icon: Database,
    title: "Databases",
    skills: ["MySQL", "PostgreSQL", "MongoDB", "Redis"]
  },
  {
    icon: Shield,
    title: "Security",
    skills: ["SSL/TLS", "OAuth", "Security Best Practices"]
  }
];

export default function Skills() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">Technical Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <skill.icon className="w-12 h-12 mb-4 text-blue-500" />
              <h3 className="text-xl font-semibold mb-4 text-gray-800">{skill.title}</h3>
              <div className="flex flex-wrap gap-2">
                {skill.skills.map((item, i) => (
                  <span key={i} className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}