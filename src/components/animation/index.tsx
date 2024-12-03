import React from 'react';
import { motion } from 'framer-motion';


interface AnimateProps {
  children: React.ReactNode;
  animationType?: 
    | 'fadeIn'
    | 'slideInFromBottom'
    | 'slideInFromRight'
    | 'slideInFromLeft'
    | 'zoomIn'
    | 'bounceIn'
    | 'flipIn';
  delay?: number;
  distance?: number;
  scale?: number;
}

interface FadeInProps {
    children: React.ReactNode; // Type for the children prop
    delay?: number; // Optional delay prop with a default value of 0
    distance?: number; // Optional delay prop with a default value of 0
  }

export const FadeIn: React.FC<FadeInProps> = ({ children, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.5, delay }}
  >
    {children}
  </motion.div>
);

export const SlideInFromBottom: React.FC<FadeInProps>  = ({ children, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
  >
    {children}
  </motion.div>
);

export const SlideInFromRight: React.FC<FadeInProps> = ({ children, delay = 0, distance = 50 }) => (
    <motion.div
      initial={{ opacity: 0, x: distance }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay, type: 'spring', stiffness: 100 }}
    >
      {children}
    </motion.div>
  );




export const Animate: React.FC<AnimateProps> = ({
  children,
  animationType,
  delay = 0,
  distance = 0,
  scale = 1,
}) => {
  switch (animationType) {
    case 'fadeIn':
      return (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay, duration: 0.5 }}
        >
          {children}
        </motion.div>
      );
    case 'slideInFromBottom':
      return (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay, duration: 0.5 }}
        >
          {children}
        </motion.div>
      );
    case 'slideInFromRight':
      return (
        <motion.div
          initial={{ x: distance, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay, duration: 0.5 }}
        >
          {children}
        </motion.div>
      );
    case 'slideInFromLeft':
      return (
        <motion.div
          initial={{ x: -distance, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay, duration: 0.5 }}
        >
          {children}
        </motion.div>
      );
    case 'zoomIn':
      return (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay, duration: 0.5 }}
        >
          {children}
        </motion.div>
      );
    case 'bounceIn':
      return (
        <motion.div
          initial={{ scale: 0, y: -100 }}
          animate={{ scale: 1, y: 0 }}
          transition={{ delay, duration: 0.5, bounce: 0.5 }}
        >
          {children}
        </motion.div>
      );
    case 'flipIn':
      return (
        <motion.div
          initial={{ rotateY: 90, opacity: 0 }}
          animate={{ rotateY: 0, opacity: 1 }}
          transition={{ delay, duration: 0.5 }}
        >
          {children}
        </motion.div>
      );
    default:
      return children;
  }
};