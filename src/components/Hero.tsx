import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, MapPin, Star, Download } from 'lucide-react';

interface HeroProps {
  setActiveSection?: (section: string) => void;
}

const Hero: React.FC<HeroProps> = ({ setActiveSection }) => {
  const handleViewWork = () => {
    if (setActiveSection) {
      setActiveSection('projects');
    }
  };

  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = '/Avinash_Pathak.pdf';
    link.download = 'Avinash_Pathak_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-6 sm:p-8 lg:p-12 bg-black">
      <div className="max-w-5xl w-full">
        {/* Main Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-8"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-tight">
            Software Engineer &{' '}
            <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              AI Developer
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-zinc-400 max-w-3xl leading-relaxed">
            I create exceptional digital experiences through innovative software solutions, 
            specializing in full-stack development and artificial intelligence. Based in India 
            with global reach.
          </p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex flex-col sm:flex-row gap-4 mb-12"
        >
          <button 
            onClick={handleViewWork}
            className="flex items-center justify-center space-x-2 px-6 sm:px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-xl transition-all duration-200 font-medium shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            <span>View My Work</span>
            <ArrowRight size={18} />
          </button>
          <button 
            onClick={handleDownloadResume}
            className="flex items-center justify-center space-x-2 px-6 sm:px-8 py-4 border border-zinc-700 hover:border-zinc-600 hover:bg-zinc-800 text-white rounded-xl transition-all duration-200 font-medium"
          >
            <Download size={18} />
            <span>Download Resume</span>
          </button>
        </motion.div>

        {/* Info Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }} 
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="grid sm:grid-cols-2 gap-6"
        >
          <div className="p-6 bg-zinc-900 border border-zinc-800 rounded-xl hover:border-zinc-700 transition-colors">
            <div className="flex items-center space-x-3 mb-4">
              <MapPin size={20} className="text-blue-400" />
              <h3 className="text-white font-semibold">Location</h3>
            </div>
            <p className="text-zinc-400">Kolkata, West Bengal, India</p>
            <p className="text-zinc-500 text-sm mt-1">Open to remote opportunities worldwide</p>
          </div>
          
          <div className="p-6 bg-zinc-900 border border-zinc-800 rounded-xl hover:border-zinc-700 transition-colors">
            <div className="flex items-center space-x-3 mb-4">
              <Star size={20} className="text-yellow-400" />
              <h3 className="text-white font-semibold">Expertise</h3>
            </div>
            <p className="text-zinc-400">Full-Stack Development</p>
            <p className="text-zinc-500 text-sm mt-1">NextJS, React, Node.js, Python, AI/ML, Cloud</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;