import React from 'react';
import { motion } from 'framer-motion';
import { 
  Home, 
  User, 
  Briefcase, 
  Code, 
  FolderOpen, 
  Mail
} from 'lucide-react';

interface MobileFooterNavProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

const MobileFooterNav: React.FC<MobileFooterNavProps> = ({ 
  activeSection, 
  setActiveSection 
}) => {
  const navItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'about', label: 'About', icon: User },
    { id: 'experience', label: 'Work', icon: Briefcase },
    { id: 'skills', label: 'Skills', icon: Code },
    { id: 'projects', label: 'Projects', icon: FolderOpen },
    { id: 'contact', label: 'Contact', icon: Mail },
  ];

  return (
    <motion.nav
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      className="fixed bottom-0 left-0 right-0 bg-zinc-900/95 backdrop-blur-xl border-t border-zinc-800 z-40"
    >
      <div className="grid grid-cols-6 px-2 py-2">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveSection(item.id)}
            className={`flex flex-col items-center justify-center p-3 rounded-xl transition-all duration-200 relative ${
              activeSection === item.id
                ? 'text-blue-400 bg-blue-400/10'
                : 'text-zinc-400 hover:text-white hover:bg-zinc-800'
            }`}
          >
            <item.icon 
              size={20} 
              className={`mb-1 transition-transform duration-200 ${
                activeSection === item.id ? 'scale-110' : ''
              }`}
            />
            <span className="text-xs font-medium">{item.label}</span>
            {activeSection === item.id && (
              <motion.div
                layoutId="mobileActiveIndicator"
                className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-blue-400 rounded-full"
                initial={false}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
            )}
          </button>
        ))}
      </div>
    </motion.nav>
  );
};

export default MobileFooterNav;