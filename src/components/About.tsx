import React from 'react';
import { motion } from 'framer-motion';
import { Code, Brain, Zap, Users, Globe, Award, MapPin, Calendar, Coffee } from 'lucide-react';

const About: React.FC = () => {
  const features = [
    {
      icon: Code,
      title: 'Full-Stack Development',
      description: 'Building end-to-end solutions with modern technologies and best practices.'
    },
    {
      icon: Brain,
      title: 'AI & Machine Learning',
      description: 'Creating intelligent systems that learn and adapt to solve complex problems.'
    },
    {
      icon: Zap,
      title: 'Performance Optimization',
      description: 'Delivering lightning-fast applications with exceptional user experiences.'
    },
    {
      icon: Users,
      title: 'Team Leadership',
      description: 'Leading cross-functional teams to deliver high-impact projects on time.'
    },
    {
      icon: Globe,
      title: 'Global Perspective',
      description: 'Working with international teams and understanding diverse market needs.'
    },
    {
      icon: Award,
      title: 'Quality Focused',
      description: 'Committed to delivering excellence through rigorous testing and code reviews.'
    }
  ];

  const personalInfo = [
    { icon: MapPin, label: 'Location', value: 'Kolkata, West Bengal, India' },
    { icon: Calendar, label: 'Experience', value: '2025 Graduate' },
    { icon: Coffee, label: 'Passion', value: 'Building innovative digital solutions' }
  ];

  return (
    <div className="min-h-screen p-4 sm:p-6 lg:p-12 bg-black">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12 sm:mb-16 text-center"
        >
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4 sm:mb-6">About Me</h1>
          <p className="text-base sm:text-lg lg:text-xl text-zinc-400 max-w-4xl mx-auto leading-relaxed px-4">
            I'm a passionate software engineer with strong roots in full-stack development and artificial intelligence. Based in India, I specialize in building impactful digital products using modern web technologies and deep learning tools. I’m committed to creating meaningful user experiences through clean code, innovation, and constant learning.
          </p>
        </motion.div>

        {/* Hero Section with Images */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="grid lg:grid-cols-2 gap-8 lg:gap-16 mb-16 sm:mb-20"
        >
          {/* Left - Images */}
          <div className="relative order-2 lg:order-1">
            {/* Mobile Layout - Single Column */}
            <div className="block sm:hidden space-y-4">
              {/* Main Cover Image - Mobile */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 }}
                className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 p-1"
              >
                <div className="w-full h-64 rounded-xl overflow-hidden">
                  <img
                    src="/images/linkdinCoverImage (1).jpg"
                    alt="Avinash Pathak - Cover"
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl" />
              </motion.div>

              {/* Profile and Stats Row - Mobile */}
              <div className="grid grid-cols-2 gap-4">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.4 }}
                  className="relative overflow-hidden rounded-xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 p-1"
                >
                  <div className="w-full h-32 rounded-lg overflow-hidden">
                    <img
                      src="/images/profile-2.jpg"
                      alt="Avinash Pathak - Profile"
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 }}
                  className="bg-zinc-900 border border-zinc-800 rounded-xl p-4 flex flex-col justify-center"
                >
                  <div className="text-center">
                    <div className="text-xl font-black text-white mb-1">5+</div>
                    <div className="text-zinc-400 text-xs">Years Experience</div>
                  </div>
                  <div className="mt-3 pt-3 border-t border-zinc-800 text-center">
                    <div className="text-xl font-black text-white mb-1">50+</div>
                    <div className="text-zinc-400 text-xs">Projects Done</div>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Tablet and Desktop Layout */}
            <div className="hidden sm:block">
              <div className="grid grid-cols-2 gap-4 h-80 sm:h-96">
                {/* Main Cover Image - Desktop/Tablet */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3 }}
                  className="col-span-2 relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 p-1"
                >
                  <div className="w-full h-full rounded-xl overflow-hidden">
                    <img
                      src="/images/linkdinCoverImage (1).jpg"
                      alt="Avinash Pathak - Cover"
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl" />
                </motion.div>
                
                {/* Profile Image - Desktop/Tablet */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.4 }}
                  className="relative overflow-hidden rounded-xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 p-1"
                >
                  <div className="w-full h-full rounded-lg overflow-hidden">
                    <img
                      src="/images/profile-2.jpg"
                      alt="Avinash Pathak - Profile"
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                </motion.div>

                {/* Stats Card - Desktop/Tablet */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 }}
                  className="bg-zinc-900 border border-zinc-800 rounded-xl p-4 sm:p-6 flex flex-col justify-center"
                >
                  <div className="text-center">
                    <div className="text-2xl font-black text-white mb-2">5+</div>
                    <div className="text-zinc-400 text-sm">Years of Experience</div>
                  </div>
                  <div className="mt-4 pt-4 border-t border-zinc-800 text-center">
                    <div className="text-2xl font-black text-white mb-2">50+</div>
                    <div className="text-zinc-400 text-sm">Projects Completed</div>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Floating Elements */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-4 -right-4 w-16 sm:w-20 h-16 sm:h-20 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-xl"
            />
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-4 -left-4 w-12 sm:w-16 h-12 sm:h-16 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-xl"
            />
          </div>

          {/* Right - Personal Info */}
          <div className="space-y-6 sm:space-y-8 order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6">My Journey</h2>
              <div className="space-y-4 sm:space-y-6 text-zinc-400 leading-relaxed text-sm sm:text-base">
                <p>
                  My journey in software development began during my B.Tech in Computer Science at JIS University, where I quickly discovered my love for combining web technologies and machine learning to solve real-world problems.
                </p>
                <p>
                  From building real-time chat apps and eCommerce platforms to publishing a research paper on Mental Health AI Assistants, I’ve always aimed to bridge the gap between complexity and simplicity.
                </p>
                <p>
                  Throughout my academic and freelance journey, I’ve been recognized with multiple awards including the JIS Innovation Award, Best Student Project, and a Hackathon win.
                </p>
                <p>
                  When I’m not coding, I love exploring new tech trends, contributing to open-source, and helping others through blogs and tutorials.
                </p>
              </div>
            </motion.div>

            {/* Personal Info Cards */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="space-y-3 sm:space-y-4"
            >
              {personalInfo.map((info, index) => (
                <motion.div
                  key={info.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  className="flex items-center space-x-3 sm:space-x-4 p-3 sm:p-4 bg-zinc-900 border border-zinc-800 rounded-xl hover:border-zinc-700 transition-colors"
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-600/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <info.icon size={18} className="text-blue-400 sm:w-5 sm:h-5" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="text-white font-semibold text-sm sm:text-base">{info.label}</h3>
                    <p className="text-zinc-400 text-xs sm:text-sm truncate">{info.value}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mb-12 sm:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8 sm:mb-12 text-center">What I Bring to the Table</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 + index * 0.1 }}
                className="p-4 sm:p-6 bg-zinc-900 border border-zinc-800 rounded-xl hover:border-zinc-700 transition-all duration-200 group hover:transform hover:scale-105"
              >
                <feature.icon size={28} className="text-blue-400 mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-200 sm:w-8 sm:h-8" />
                <h3 className="text-white font-semibold mb-2 text-sm sm:text-base">{feature.title}</h3>
                <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="text-center bg-gradient-to-r from-zinc-900 to-zinc-800 border border-zinc-700 rounded-2xl p-6 sm:p-8"
        >
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">Let's Build Something Amazing Together</h3>
          <p className="text-zinc-400 mb-4 sm:mb-6 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            I'm always excited to work on innovative projects and collaborate with talented teams. 
            Whether you have a startup idea or need to scale an existing product, let's connect!
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <button className="px-4 sm:px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-xl transition-all duration-200 font-medium shadow-lg hover:shadow-xl transform hover:scale-105 text-sm sm:text-base">
              Get In Touch
            </button>
            <button className="px-4 sm:px-6 py-3 border border-zinc-700 hover:border-zinc-600 hover:bg-zinc-800 text-white rounded-xl transition-all duration-200 font-medium text-sm sm:text-base">
              View My Work
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;