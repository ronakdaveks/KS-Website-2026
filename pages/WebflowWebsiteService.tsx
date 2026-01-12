import React from 'react';
import { motion, Variants } from 'framer-motion';

interface WebflowWebsiteServiceProps {
  onBack: () => void;
  onDiscoveryClick: () => void;
}

const WebflowWebsiteService: React.FC<WebflowWebsiteServiceProps> = ({ onBack, onDiscoveryClick }) => {
  const containerVariants: Variants = {
    initial: { opacity: 0 },
    animate: { 
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  };

  const itemVariants: Variants = {
    initial: { y: 30, opacity: 0 },
    animate: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.8, ease: [0.19, 1, 0.22, 1] as const }
    }
  };

  const PILLARS = [
    { 
      title: "Visual Design Freedom", 
      text: "Unlike WordPress, our platform offers complete visual control. Every element is customized for unique, immersive designs."
    },
    { 
      title: "Faster Site Performance", 
      text: "With fewer bulky plugins, your website will load significantly faster, improving user experience and SEO rankings."
    },
    { 
      title: "Simplified Workflow", 
      text: "Managing your website becomes effortless with an intuitive interface.\nNo more complex systems—streamlined for rapid growth."
    }
  ];

  const GRID_BOXES = [
    { title: "Seamless Content Updates", text: "Effortlessly manage your content with intuitive tools, allowing real-time updates without technical hurdles." },
    { title: "Interactive Experiences", text: "Engage your audience with dynamic elements, animations, and real-time interactivity that bring your site to life." },
    { title: "Conversion-Driven Designs", text: "Our approach focuses on user behavior, guiding visitors through a seamless journey from landing to conversion." },
    { title: "Adaptive to Any Device", text: "Every website is designed to look flawless on any device—whether desktop, tablet, or mobile screens." },
    { title: "Visual Storytelling", text: "We help you tell your story through engaging visuals and interactive elements that captivate and convert users." },
    { title: "Built-In SEO Tools", text: "Take control of your site’s visibility with integrated SEO tools, making it easier to climb search rankings." },
    { title: "Secure Hosting", text: "Enterprise-grade hosting ensures your website stays online with 99.9% uptime and world-class security protocols." },
    { title: "E-commerce Ready", text: "Scalable online stores with custom checkout flows and seamless payment integrations for modern retail." },
    { title: "Global Scalability", text: "Distributed CDN ensures your website loads instantly for users across the globe, regardless of location." }
  ];

  return (
    <motion.div 
      variants={containerVariants}
      initial="initial"
      animate="animate"
      className="bg-[#f9f9f9]"
    >
      {/* 1. HERO - Massive padding to clear the Kraftier Studio logo */}
      <section className="pt-[28rem] md:pt-[38rem] pb-32 px-6 md:px-16 relative overflow-hidden">
        <motion.button 
          onClick={onBack}
          className="text-[11px] uppercase tracking-[0.4em] font-bold text-black/40 hover:text-[#e92c2e] transition-colors mb-20 flex items-center gap-4 group"
        >
          <span className="group-hover:-translate-x-2 transition-transform">←</span> Back to studio
        </motion.button>

        <div className="max-w-6xl relative z-10">
          <motion.p variants={itemVariants} className="text-[#e92c2e] text-[12px] font-bold uppercase tracking-[0.5em] mb-8">Digital Architecture / 03</motion.p>
          <motion.h1 
            variants={itemVariants}
            className="text-6xl md:text-[9.5rem] font-thin tracking-tighter leading-[0.8] text-[#020a41] lowercase mb-12"
            style={{ fontWeight: 100 }}
          >
            Webflow Website <br /> 
            <span className="text-black/20">Upgrade Your Presence</span>
          </motion.h1>
          <motion.p 
            variants={itemVariants}
            className="text-xl md:text-3xl text-black/60 leading-snug max-w-4xl font-light"
          >
            Take your online presence to the next level with a platform that offers unmatched creative freedom, faster load times, and seamless updates.
          </motion.p>
        </div>
      </section>

      {/* 2. CORE SECTION: YOUR NEXT DIGITAL MOVE */}
      <section className="px-6 md:px-16 py-40 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <motion.div variants={itemVariants}>
            <p className="text-[10px] uppercase tracking-[0.5em] font-bold text-[#e92c2e] mb-10">More about services</p>
            <h2 className="text-5xl md:text-7xl font-thin tracking-tighter leading-none mb-10 text-[#020a41]" style={{ fontWeight: 100 }}>
              Your Next <br /> Digital Move.
            </h2>
            <p className="text-2xl font-light leading-relaxed text-black/50 mb-12">
              At Kraftier Studio, we go beyond standard designs. Our approach is about tailoring every element to enhance not just the look of your website, but how it engages and connects with your audience through Webflow.
            </p>
            <div className="w-24 h-px bg-black/10"></div>
          </motion.div>
          <motion.div 
            variants={itemVariants}
            className="aspect-square bg-[#f9f9f9] rounded-[4rem] overflow-hidden relative group shadow-2xl"
          >
            <img 
              src="https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=1600&auto=format&fit=crop" 
              className="w-full h-full object-cover grayscale brightness-90 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000" 
              alt="Digital Experience Architecture"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#020a41]/20 to-transparent"></div>
          </motion.div>
        </div>
      </section>

      {/* 3. PILLARS SECTION */}
      <section className="px-6 md:px-16 py-40 bg-[#f4f4f4]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {PILLARS.map((p, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -10 }}
                className="bg-white p-12 rounded-[3rem] shadow-sm hover:shadow-xl transition-all duration-500"
              >
                <div className="w-12 h-12 rounded-full bg-[#e92c2e]/5 flex items-center justify-center mb-10">
                   <span className="text-[10px] font-mono font-bold text-[#e92c2e]">0{i+1}</span>
                </div>
                <h3 className="text-3xl font-medium tracking-tight text-[#020a41] mb-6">{p.title}</h3>
                <p className="text-black/50 font-light leading-relaxed whitespace-pre-line">{p.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. EXPERTISE GRID (3x3) */}
      <section className="px-6 md:px-16 py-40 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-24">
            <p className="text-[10px] uppercase tracking-[0.5em] font-bold text-[#e92c2e] mb-10">Digital Ecosystem</p>
            <h2 className="text-5xl md:text-8xl font-thin tracking-tighter leading-[0.9] text-[#020a41] mb-10" style={{ fontWeight: 100 }}>
              Full-Stack <br /> Development.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {GRID_BOXES.map((box, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -5 }}
                className="p-12 border border-black/5 rounded-[3rem] bg-[#f9f9f9] group hover:bg-white hover:border-[#e92c2e]/20 hover:shadow-xl transition-all duration-500"
              >
                <h4 className="text-2xl font-medium tracking-tight text-[#020a41] mb-6 group-hover:text-[#e92c2e] transition-colors">{box.title}</h4>
                <p className="text-black/40 font-light leading-relaxed">{box.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-40 px-6 md:px-16 text-center border-t border-black/5">
        <h2 className="text-5xl md:text-[9rem] font-thin tracking-tighter text-[#020a41] mb-16 lowercase leading-[0.8]" style={{ fontWeight: 100 }}>
          Launch Your <br /> <span className="text-[#e92c2e]">Digital Landmark.</span>
        </h2>
        <motion.button 
          onClick={onDiscoveryClick}
          whileHover={{ scale: 1.05 }}
          className="bg-[#020a41] text-white px-16 py-8 text-xs font-bold uppercase tracking-[0.4em] rounded-full"
        >
          Begin Discovery Process
        </motion.button>
      </section>
    </motion.div>
  );
};

export default WebflowWebsiteService;