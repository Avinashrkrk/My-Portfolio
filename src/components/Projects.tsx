import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Star } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'Vertual Personal Assistant',
      description: 'Personal Assistant with Language Model Based Conversation and Mental Health Analysis',
      image: 'https://images.unsplash.com/photo-1696272440000-0808a203c852?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      technologies: ['Artificial Intelligence', 'NLP', 'OpenAI', 'Sentiment Analysis', 'Mental Analysing', 'Lip Gan'],
      // github: '#',
      demo: 'https://iarjset.com/wp-content/uploads/2023/11/IARJSET-NCSTCS-9.pdf',
      featured: true
    },
    {
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution with AI recommendations, real-time inventory management, and seamless payment processing.',
      image: '/images/shopixo.png',
      technologies: ['React', 'Supabase', 'PostgreSQL', 'TypeScript'],
      github: 'https://github.com/Avinashrkrk/Shopixo',
      demo: 'https://shopixo-store.netlify.app/',
      featured: true
    },
    {
      title: 'Whispr',
      description: 'Whispr is a minimal and clean real-time chat application that allows users to send and receive messages instantly. Built with modern web technologies, Whispr focuses on simplicity and a smooth user experience.',
      image: '/images/whispr.png',
      technologies: ['React', 'Supabase', 'PostgreSQL', 'TypeScript'],
      github: 'https://github.com/Avinashrkrk/Shopixo',
      demo: 'https://whispr-kh7r.onrender.com/',
      featured: true
    },
    {
      title: 'A Chatbot using Gemini API',
      description: 'A Gemini Pro API Key based chat bot using streamlit framework in python',
      image: 'https://plus.unsplash.com/premium_photo-1681458713811-ccc94bbdc127?q=80&w=1957&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      technologies: ['Python', 'streamlit', 'google-generativeai'],
      github: 'https://github.com/Avinashrkrk/ChatBot-Using-Gemini-API-Key-Streamlit',
      demo: 'https://chatbot-using-gemini-api-key-app-avinash.streamlit.app/',
      featured: false
    },
    {
      title: 'Resume Cabin: AI-Powered Resume ATS Checker',
      description: "AboutATS Score Checker a ultimate tool for enhancing resume's compatibility with Applicant Tracking Systems (ATS). This application helps job seekers instantly evaluate their resumes against specific job descriptions to improve their chances in the competitive job market.",
      image: '/images/resume-cabin.png',
      technologies: ['Python', 'streamlit', 'ATS', 'Smart-ATS-System'],
      github: 'https://github.com/Avinashrkrk/ATS-Score-Checker-/',
      demo: 'https://github.com/Avinashrkrk/ATS-Score-Checker-/',
      featured: true
    },
    {
      title: 'Currency Converter ',
      description: "Fast and accurate currency conversion with real-time exchange rates",
      image: '/images/currency-convertor.png',
      technologies: ['React'],
      github: 'https://github.com/Avinashrkrk/Currency-Converter',
      demo: 'https://currency-converter-xcy7.onrender.com/',
      featured: false
    },
    {
      title: 'Bitcoin-Price-Prediction',
      description: "This project utilizes a Long Short-Term Memory (LSTM) neural network to predict Bitcoin prices based on historical data. The model processes time-series data to forecast future prices, providing insights into cryptocurrency trends.",
      image: '/images/bitcoin.png',
      technologies: ['Python', 'Pytorch', 'LSTM', 'Streamlit'],
      github: 'https://github.com/Avinashrkrk/Bitcoin-Price-Prediction',
      demo: 'https://github.com/Avinashrkrk/Bitcoin-Price-Prediction',
      featured: false
    },
    {
      title: 'Emotion-Detection',
      description: 'An effective machine learning project to detect emotions from text using only scikit-learn and neattext.',
      image: 'https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Python', 'scikit-learn', 'joblib', 'neattext'],
      github: 'https://github.com/Avinashrkrk/Emotion-Detection',
      demo: '#',
      featured: false
    },
    {
      title: 'Tutorium',
      description: 'A modern Learning Management System that lets students learn through conversation with AI-powered voice assistants. Built for the future of education.',
      image: '/images/tutorium.png',
      technologies: ['React', 'Socket.io', 'WebRTC', 'Node.js'],
      github: 'https://github.com/Avinashrkrk/Tutorium',
      demo: '#',
      featured: false
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
          <h1 className="text-5xl font-black text-white mb-6">Featured Projects</h1>
          <p className="text-xl text-zinc-400 max-w-3xl leading-relaxed">
            A showcase of my recent work, featuring innovative solutions that demonstrate 
            my expertise in full-stack development and artificial intelligence.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="group bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden hover:border-zinc-700 transition-colors"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                  <a
                    href={project.demo}
                    className="p-3 bg-white/20 backdrop-blur-sm rounded-lg hover:bg-white/30 transition-colors"
                  >
                    <ExternalLink size={20} className="text-white" />
                  </a>
                  <a
                    href={project.github}
                    className="p-3 bg-white/20 backdrop-blur-sm rounded-lg hover:bg-white/30 transition-colors"
                  >
                    <Github size={20} className="text-white" />
                  </a>
                </div>
                {project.featured && (
                  <div className="absolute top-4 left-4">
                    <span className="flex items-center space-x-1 px-3 py-1 bg-yellow-500/20 text-yellow-400 text-xs font-medium rounded-full">
                      <Star size={12} />
                      <span>Featured</span>
                    </span>
                  </div>
                )}
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
                <p className="text-zinc-400 mb-4 leading-relaxed text-sm">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-zinc-800 text-zinc-300 text-xs rounded-lg"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-4">
                  <a
                    href={project.demo}
                    className="flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors text-sm font-medium"
                  >
                    <ExternalLink size={16} />
                    <span>Live Demo</span>
                  </a>
                  <a
                    href={project.github}
                    className="flex items-center space-x-2 text-zinc-400 hover:text-zinc-300 transition-colors text-sm font-medium"
                  >
                    <Github size={16} />
                    <span>Source Code</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;