import React from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';

interface ThemeToggleProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({ darkMode, toggleDarkMode }) => {
  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={toggleDarkMode}
      className="fixed top-20 right-4 z-50 p-3 bg-white/10 dark:bg-gray-800/50 backdrop-blur-md rounded-full shadow-lg hover:shadow-xl transition-all"
      aria-label="Toggle theme"
    >
      <motion.div
        initial={false}
        animate={{ rotate: darkMode ? 180 : 0 }}
        transition={{ duration: 0.3 }}
      >
        {darkMode ? (
          <Sun className="text-yellow-500" size={24} />
        ) : (
          <Moon className="text-gray-700" size={24} />
        )}
      </motion.div>
    </motion.button>
  );
};

export default ThemeToggle;