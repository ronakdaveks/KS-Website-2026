
import React from 'react';
import { motion, Variants } from 'framer-motion';

const Hero: React.FC = () => {
  const containerVariants = {
    animate: {
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.6
      }
    }
  };

  const lineVariants: Variants = {
    initial: { y: "100%", opacity: 0 },
    animate: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 1.2, ease: [0.19, 1, 0.22, 1] as const }
    }
  };

  return (
    <section className="relative h-screen w-full flex flex-col justify-end items-end px-6 md:px-16 pb-20 md:pb-32 overflow-hidden">
      {/* Background Subtle Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#fcfcfc] to-[#f2f2f2] -z-10"></div>
      
      {/* Main Typography Block - Bottom Right */}
      <motion.div 
        className="text-right flex flex-col items-end"
        variants={containerVariants}
        initial="initial"
        animate="animate"
      >
        <div className="overflow-hidden">
          <motion.h1 
            variants={lineVariants}
            className="text-[12vw] md:text-[10vw] font-[100] leading-[0.9] tracking-tighter text-[#b1b1b1] lowercase select-none pb-[1.5vw]"
          >
            Digital
          </motion.h1>
        </div>
        <div className="overflow-hidden -mt-[1.5vw]">
          <motion.h1 
            variants={lineVariants}
            className="text-[12vw] md:text-[10vw] font-[100] leading-[0.9] tracking-tighter text-[#b1b1b1] lowercase select-none"
          >
            Forward
          </motion.h1>
        </div>
        <div className="overflow-hidden -mt-[0.5vw]">
          <motion.h1 
            variants={lineVariants}
            className="text-[12vw] md:text-[10vw] font-[100] leading-[0.9] tracking-tighter text-[#b1b1b1] lowercase select-none"
          >
            Creative.
          </motion.h1>
        </div>
        
        {/* "Since 2016" Marker */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8, duration: 1 }}
          className="mt-6 text-[#b1b1b1]/60 text-[14px] font-light tracking-tight"
        >
          Since 2016
        </motion.div>
      </motion.div>

      {/* Background Decor (Minimal) */}
      <div className="absolute left-16 bottom-32 hidden md:block">
        <div className="w-[1px] h-32 bg-black/5"></div>
      </div>
    </section>
  );
};

export default Hero;
