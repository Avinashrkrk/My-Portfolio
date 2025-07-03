import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, ExternalLink } from 'lucide-react';

const Experience: React.FC = () => {
  const experiences = [
    {
      title: 'Freelance Web Developer',
      company: 'Freelance',
      location: 'Remote',
      period: " April'25- Present",
      type: 'Part-time',
      description: ' Delivered and maintained a full-stack e-commerce web app - SHOPIXO.',
      achievements: [
        'Delivered and maintained a full-stack e-commerce web app with product listing, cart, and online payment.',
        'Currently enhancing admin dashboard and order management for client.',
      ],
      technologies: ['React', 'Node.js', 'PostgreSQL', 'TypeScript', 'Supabase']
    },
    {
      title: 'Machine Learning Intern',
      company: 'Tech-A-Intern',
      location: 'Remote',
      period: "August'23 - September'23",
      type: 'Full-time',
      description: 'Built a machine learning model. ',
      achievements: [
        'Data Analytics and built a machine learning model to solve real life problems',
      ],
      technologies: ['Data Analysis', 'Machine Learning', 'Python', 'Supervised Learnning']
    },
    {
      title: 'Web Developer Intern',
      company: 'ARS Inventifs',
      location: 'Kolkata, West Bengal',
      period: "Febraury'23 - March'23",
      type: 'Full-time',
      description: 'Developed core platform features and APIs. Collaborated with product team to translate requirements into technical solutions.',
      achievements: [
        'Built RESTful APIs.',
        'Optimized database queries reducing load time by 50%',
        'Copywrite Content writin'
      ],
      technologies: ['PHP', 'Apache'  ]
    }
  ];

  return (
    <div className="min-h-screen p-12 bg-black">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <h1 className="text-5xl font-black text-white mb-6">Experience</h1>
          <p className="text-xl text-zinc-400 max-w-3xl leading-relaxed">
            My professional journey spans across innovative startups and established tech companies, 
            where I've led teams and delivered impactful solutions.
          </p>
        </motion.div>

        {/* Experience Cards */}
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="p-8 bg-zinc-900 border border-zinc-800 rounded-xl hover:border-zinc-700 transition-colors"
            >
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <h3 className="text-2xl font-bold text-white">{exp.title}</h3>
                    <span className="px-3 py-1 bg-blue-600/20 text-blue-400 text-xs font-medium rounded-full">
                      {exp.type}
                    </span>
                  </div>
                  <div className="flex items-center space-x-4 text-zinc-400 mb-4">
                    <span className="font-medium">{exp.company}</span>
                    <div className="flex items-center space-x-1">
                      <MapPin size={14} />
                      <span className="text-sm">{exp.location}</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-2 text-zinc-400">
                  <Calendar size={16} />
                  <span className="text-sm font-medium">{exp.period}</span>
                </div>
              </div>

              <p className="text-zinc-300 mb-6 leading-relaxed">{exp.description}</p>

              <div className="mb-6">
                <h4 className="text-white font-semibold mb-3">Key Achievements:</h4>
                <ul className="space-y-2">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="flex items-start space-x-3 text-zinc-400">
                      <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-sm">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-zinc-800 text-zinc-300 text-sm rounded-lg"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;