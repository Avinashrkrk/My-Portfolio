import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Heart, ArrowUp, Code, Coffee } from 'lucide-react';

const Footer: React.FC = () => {
  const socialLinks = [
    { icon: Github, href: "#", label: "GitHub", color: "hover:text-white" },
    { icon: Linkedin, href: "#", label: "LinkedIn", color: "hover:text-blue-400" },
    { icon: Mail, href: "#contact", label: "Email", color: "hover:text-green-400" }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-black border-t border-white/10 py-20 relative overflow-hidden" data-scroll-section>
      {/* Background */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            background: [
              "radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.05) 0%, transparent 50%)",
              "radial-gradient(circle at 80% 50%, rgba(139, 92, 246, 0.05) 0%, transparent 50%)",
              "radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.05) 0%, transparent 50%)",
            ]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-0"
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-3 gap-16 mb-16">
          {/* Brand */}
          <div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-4xl font-black mb-8 relative"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="w-16 h-16 relative mb-4"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl blur-md opacity-60" />
                <div className="absolute inset-2 bg-black rounded-xl flex items-center justify-center">
                  <span className="text-2xl font-black bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    AP
                  </span>
                </div>
              </motion.div>
              
              <motion.span
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{ duration: 3, repeat: Infinity }}
                className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
                style={{ backgroundSize: "200% 200%" }}
              >
                AVINASH PATHAK
              </motion.span>
            </motion.div>
            <p className="text-white/70 leading-relaxed text-lg">
              Software Engineer, AI Developer, and Tech Innovator passionate about 
              creating solutions that make a real impact in the digital world.
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-2xl font-black text-white mb-8">Quick Links</h3>
            <div className="space-y-4">
              {['About', 'Experience', 'Skills', 'Projects', 'Contact'].map((link) => (
                <motion.a
                  key={link}
                  whileHover={{ x: 10, color: "#60A5FA" }}
                  href={`#${link.toLowerCase()}`}
                  className="block text-white/70 hover:text-white transition-colors text-lg font-medium"
                >
                  {link}
                </motion.a>
              ))}
            </div>
          </div>
          
          {/* Connect */}
          <div>
            <h3 className="text-2xl font-black text-white mb-8">Let's Connect</h3>
            <div className="flex space-x-4 mb-8">
              {socialLinks.map(({ icon: Icon, href, label, color }) => (
                <motion.a
                  key={label}
                  whileHover={{ scale: 1.2, y: -5 }}
                  whileTap={{ scale: 0.9 }}
                  href={href}
                  className={`p-4 bg-white/10 rounded-2xl ${color} transition-colors border border-white/20 hover:border-white/40`}
                  aria-label={label}
                >
                  <Icon size={24} className="text-white" />
                </motion.a>
              ))}
            </div>
            
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToTop}
              className="flex items-center space-x-3 text-white/70 hover:text-white transition-colors font-medium text-lg"
            >
              <ArrowUp size={20} />
              <span>Back to Top</span>
            </motion.button>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/60 text-lg">
            © 2024 Avinash Pathak. All rights reserved.
          </p>
          
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-3 text-white/60 text-lg mt-4 md:mt-0"
          >
            <span>Crafted with</span>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              <Heart className="text-red-400" size={20} />
            </motion.div>
            <span>and</span>
            <motion.div
              animate={{ rotate: [0, 15, -15, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Coffee className="text-yellow-400" size={20} />
            </motion.div>
            <span>lots of coffee</span>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;