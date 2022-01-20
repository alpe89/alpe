import { motion } from 'framer-motion';
import { FC } from 'react';

const textAnimation = {
  visible: {
    opacity: 1,
    transition: {
      when: 'beforeChildren',
      staggerChildren: 0.2,
    },
  },
  hidden: {
    opacity: 0,
    transition: {
      when: 'afterChildren',
    },
  },
};

const charAnimation = {
  visible: { opacity: 1, y: 0 },
  hidden: { opacity: 0, y: -100 },
};

export const Logo: FC = () => {
  const title = process.env.NEXT_PUBLIC_APP_TITLE;
  const loopKey = (id: string) => `${new Date().getTime()}-${id}`;

  return (
    <div className="flex justify-center items-center">
      <motion.h1
        initial="hidden"
        animate="visible"
        variants={textAnimation}
        className="text-gray-700 dark:text-slate-100"
      >
        {title.split('').map((char, index) => (
          <motion.span
            className="inline-block"
            key={loopKey(char + index)}
            variants={charAnimation}
          >
            {char}
          </motion.span>
        ))}
      </motion.h1>
    </div>
  );
};

Logo.displayName = 'Logo';
