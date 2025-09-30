import React from 'react';
import { motion } from 'framer-motion';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface FadeInComponentProps {
  children: React.ReactNode;
}

const FadeInComponent: React.FC<FadeInComponentProps> = ({ children }) => {
  const location = useLocation();

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <motion.div
      key={location.pathname}
      initial={{ opacity: 0, y: 20, filter: 'blur(5px)' }}
      animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      transition={{ duration: 0.3 }}
      onAnimationComplete={() => {
        document.documentElement.style.overflow = 'auto';
      }}
    >
      {children}
    </motion.div>
  );
};

export default FadeInComponent;
