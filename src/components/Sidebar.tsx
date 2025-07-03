import React from 'react';
import { motion } from 'framer-motion';
import { 
  Home, 
  User, 
  Briefcase, 
  Code, 
  FolderOpen, 
  Mail, 
  Github, 
  Linkedin, 
  Download,
  ExternalLink,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

interface SidebarProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
  isCollapsed: boolean;
  setIsCollapsed: (collapsed: boolean) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ 
  activeSection, 
  setActiveSection, 
  isCollapsed,
  setIsCollapsed
}) => {
  const navItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'about', label: 'About', icon: User },
    { id: 'experience', label: 'Experience', icon: Briefcase },
    { id: 'skills', label: 'Skills', icon: Code },
    { id: 'projects', label: 'Projects', icon: FolderOpen },
    { id: 'contact', label: 'Contact', icon: Mail },
  ];

  const handleViewWork = () => {
    setActiveSection('projects');
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
    <motion.aside
      initial={false}
      animate={{ width: isCollapsed ? 80 : 320 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="fixed left-0 top-0 h-screen bg-zinc-900 border-r border-zinc-800 z-50 flex flex-col"
    >
      {/* Toggle Button */}
      <button
        onClick={() => setIsCollapsed(!isCollapsed)}
        className="absolute -right-3 top-8 w-6 h-6 bg-zinc-800 border border-zinc-700 rounded-full flex items-center justify-center hover:bg-zinc-700 transition-colors z-10"
      >
        {isCollapsed ? (
          <ChevronRight size={14} className="text-zinc-400" />
        ) : (
          <ChevronLeft size={14} className="text-zinc-400" />
        )}
      </button>

      {/* Header */}
      <div className="p-6 border-b border-zinc-800">
        <div className="flex items-center space-x-4">
          <div className="w-12 h-12 flex items-center justify-center bg-zinc-800 rounded-xl flex-shrink-0">
            <img src="/Ap.svg" alt="AP Logo" className="w-8 h-8" />
          </div>
          {!isCollapsed && (
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.2 }}
            >
              <h1 className="text-white font-bold text-lg">Avinash Pathak</h1>
              <p className="text-zinc-400 text-sm">Software Engineer</p>
            </motion.div>
          )}
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 overflow-y-auto">
        <ul className="space-y-2">
          {navItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => setActiveSection(item.id)}
                className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-200 text-left group ${
                  activeSection === item.id
                    ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg'
                    : 'text-zinc-400 hover:text-white hover:bg-zinc-800'
                }`}
                title={isCollapsed ? item.label : undefined}
              >
                <item.icon 
                  size={20} 
                  className={`transition-transform duration-200 flex-shrink-0 ${
                    activeSection === item.id ? 'scale-110' : 'group-hover:scale-105'
                  }`}
                />
                {!isCollapsed && (
                  <motion.span
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -10 }}
                    transition={{ duration: 0.2 }}
                    className="font-medium"
                  >
                    {item.label}
                  </motion.span>
                )}
                {activeSection === item.id && !isCollapsed && (
                  <motion.div
                    layoutId="activeIndicator"
                    className="ml-auto w-2 h-2 bg-white rounded-full"
                    initial={false}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      {/* Footer */}
      <div className="p-4 border-t border-zinc-800 space-y-4">
        {!isCollapsed && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.2 }}
            onClick={handleDownloadResume}
            className="w-full flex items-center justify-center space-x-2 px-4 py-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-xl transition-all duration-200 font-medium shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            <Download size={18} />
            <span>Download Resume</span>
          </motion.button>
        )}
        
        <div className={`grid gap-3 ${isCollapsed ? 'grid-cols-1' : 'grid-cols-3'}`}>
          <a
            href="https://github.com/Avinashrkrk"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center p-3 bg-zinc-800 hover:bg-zinc-700 rounded-xl transition-all duration-200 group"
            aria-label="GitHub"
            title="GitHub"
          >
            <Github size={18} className="text-zinc-400 group-hover:text-white transition-colors" />
          </a>
          <a
            href="https://www.linkedin.com/in/avinash-pathak-170717224/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center p-3 bg-zinc-800 hover:bg-zinc-700 rounded-xl transition-all duration-200 group"
            aria-label="LinkedIn"
            title="LinkedIn"
          >
            <Linkedin size={18} className="text-zinc-400 group-hover:text-blue-400 transition-colors" />
          </a>
          <a
            href="#"
            className="flex items-center justify-center p-3 bg-zinc-800 hover:bg-zinc-700 rounded-xl transition-all duration-200 group"
            aria-label="Portfolio"
            title="Portfolio"
          >
            <ExternalLink size={18} className="text-zinc-400 group-hover:text-white transition-colors" />
          </a>
        </div>
      </div>
    </motion.aside>
  );
};

export default Sidebar;