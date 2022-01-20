import { motion } from 'framer-motion';
import { FC, memo } from 'react';

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

export const Logo: FC = memo(() => {
  const title = process.env.NEXT_PUBLIC_APP_TITLE;
  const loopKey = (id: string) => `${new Date().getTime()}-${id}`;

  return (
    <div className="flex justify-center items-center">
      <motion.h1
        initial="hidden"
        animate="visible"
        variants={textAnimation}
        className="self-center text-5xl font-extrabold mt-0 pt-0"
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
});

Logo.displayName = 'Logo';
