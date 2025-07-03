import React from 'react';
import { motion } from 'framer-motion';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      skills: [
        'React',
        'TypeScript', 
        'Next.js',,
        'Tailwind CSS',
        'Framer Motion'
      ]
    },
    {
      title: 'Backend',
      skills: [
        'Node.js',
        'Python',
        'Express.js',
        'PostgreSQL',
        'MongoDB',
      ]
    },
    {
      title: 'AI/ML',
      skills: [
        'TensorFlow',
        'PyTorch',
        'OpenAI API',
        'Scikit-learn',
        'Pandas',
        'Computer Vision'
      ]
    },
    {
      title: 'DevOps & Cloud',
      skills: [
        'AWS',
        'Docker',
        'Kubernetes',
        'CI/CD',
        'Nginx'
      ]
    }
  ];

  return (
    <div className="min-h-screen p-6 sm:p-8 lg:p-12 bg-black">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <h1 className="text-4xl sm:text-5xl font-black text-white mb-6">Skills & Technologies</h1>
          <p className="text-lg sm:text-xl text-zinc-400 max-w-3xl leading-relaxed">
            A comprehensive overview of my technical expertise across different domains 
            of software development and emerging technologies.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: categoryIndex * 0.2 }}
              className="p-6 bg-zinc-900 border border-zinc-800 rounded-xl hover:border-zinc-700 transition-colors"
            >
              <h3 className="text-xl font-bold text-white mb-6">{category.title}</h3>
              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ 
                      delay: categoryIndex * 0.2 + skillIndex * 0.1 + 0.3
                    }}
                    className="px-3 py-2 bg-zinc-800 text-zinc-300 text-sm rounded-lg hover:bg-zinc-700 transition-colors"
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;