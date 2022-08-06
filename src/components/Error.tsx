import React from 'react';
import { motion } from 'framer-motion';

const Error = () => {
  return (
    <div className="error">
      <div className="error__inner">
        <motion.span
          animate={{ scale: [1, 1.05, 1], rotate: [-30, 0, 30, 0, -30, -30, 0, 30, 0, -30] }}
          transition={{ repeat: Infinity, duration: 2 }}>
          😣
        </motion.span>
        <h1>oops...</h1>
        <p>nothing find</p>
      </div>
    </div>
  );
};

export default Error;
