import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface CursorTrailProps {
  mousePosition: { x: number; y: number };
}

const CursorTrail: React.FC<CursorTrailProps> = ({ mousePosition }) => {
  const [trail, setTrail] = useState<Array<{ x: number; y: number; id: number }>>([]);

  useEffect(() => {
    const newTrail = {
      x: mousePosition.x,
      y: mousePosition.y,
      id: Date.now()
    };
    
    setTrail(prev => [...prev.slice(-20), newTrail]);
  }, [mousePosition]);

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      {trail.map((point, index) => (
        <motion.div
          key={point.id}
          initial={{ opacity: 0.8, scale: 1 }}
          animate={{ opacity: 0, scale: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
          style={{
            left: point.x - 4,
            top: point.y - 4,
            filter: 'blur(0.5px)'
          }}
        />
      ))}
      
      <motion.div
        className="absolute w-6 h-6 border-2 border-blue-500/50 rounded-full pointer-events-none"
        animate={{
          x: mousePosition.x - 12,
          y: mousePosition.y - 12,
        }}
        transition={{ type: "spring", stiffness: 500, damping: 28 }}
      />
    </div>
  );
};

export default CursorTrail;