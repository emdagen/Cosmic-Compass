import React from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';

function CircularProgress({ progress, size }) {
  const checkmarkPathLength = useTransform(progress, [0, 95, 100], [0, 0, 1]);

  return (
    <motion.svg
      xmlns='http://www.w3.org/2000/svg'
      width={size}
      height={size}
      viewBox='0 0 258 258'
    >
      <motion.path
        transform='translate(60 85)'
        d='M3 50L45 92L134 3'
        fill='transparent'
        stroke='#7BB86F'
        strokeWidth={8}
        style={{ pathLength: checkmarkPathLength }}
      />
    </motion.svg>
  );
}

const Checkmark = ({ size }) => {
  let progress = useMotionValue();
  return (
    <div>
      <motion.div
        initial={{ x: 0 }}
        animate={{ x: 100 }}
        style={{ x: progress }}
        transition={{ duration: 0.9 }}
      />
      <CircularProgress progress={progress} size={size} />
    </div>
  );
};

export default Checkmark;
