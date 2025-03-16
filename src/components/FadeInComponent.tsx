import React from 'react';
import { motion } from 'framer-motion';
import { useEffect } from 'react';

interface FadeInComponentProps {
  children: React.ReactNode;
}

const FadeInComponent: React.FC<FadeInComponentProps> = ({children}) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, filter: 'blur(5px)' }} 
      animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      transition={{ duration: 0.3 }}    
    >
      {children}
    </motion.div>
  );
};

export default FadeInComponent;
