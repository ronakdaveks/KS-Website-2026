
import React from 'react';
import { motion, Variants } from 'framer-motion';

interface WordpressWebsiteServiceProps {
  onBack: () => void;
  onDiscoveryClick: () => void;
}

const WordpressWebsiteService: React.FC<WordpressWebsiteServiceProps> = ({ onBack, onDiscoveryClick }) => {
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
      title: "Speed & Reliability", 
      text: "Kraftier Studio ensures your website runs fast and flawlessly on every device. With top-tier optimization, your visitors get a quick, hassle-free experience every time."
    },
    { 
      title: "Effortless Navigation", 
      text: "We design websites that are intuitive and easy to navigate, helping your customers find what they need quickly—leading to better engagement and conversions."
    },
    { 
      title: "Flexible Design", 
      text: "From advanced plugins to custom widgets, Kraftier Studio leverages the full power of WordPress to create scalable websites, tailored to your unique business needs."
    }
  ];

  const GRID_BOXES = [
    { title: "Optimized Performance", text: "Our websites are built for speed and seamless performance, ensuring fast load times and smooth interactions that enhance user experience." },
    { title: "SEO-Ready Structure", text: "We create websites with search engines in mind, using clean code and optimized structures to help your business rank higher and attract organic traffic." },
    { title: "Future-Proof Solutions", text: "We build with a focus on future trends and evolving technologies, ensuring your online presence remains relevant and competitive for years to come." },
    { title: "Advanced Security Features", text: "We implement cutting-edge security protocols to protect your website from threats, ensuring a safe and reliable experience for you and your visitors." },
    { title: "Creative Visual Design", text: "Bring your brand to life with captivating elements. From bold graphics to interactive animations, we create a visual experience that leaves a lasting impression." },
    { title: "Adaptive Layouts", text: "We design websites with responsive layouts that adapt smoothly to any screen size, ensuring your content looks perfect on mobile, tablet, and desktop." }
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
          <motion.p variants={itemVariants} className="text-[#e92c2e] text-[12px] font-bold uppercase tracking-[0.5em] mb-8">Digital Ecosystem / 04</motion.p>
          <motion.h1 
            variants={itemVariants}
            className="text-6xl md:text-[9.5rem] font-thin tracking-tighter leading-[0.8] text-[#020a41] lowercase mb-12"
            style={{ fontWeight: 100 }}
          >
            Wordpress Website <br /> 
            <span className="text-black/20">Helping You Grow</span>
          </motion.h1>
          <motion.p 
            variants={itemVariants}
            className="text-xl md:text-3xl text-black/60 leading-snug max-w-4xl font-light"
          >
            Your website should be more than attractive—it should be effective. Our WordPress services ensure a seamless blend of design, speed, and optimization.
          </motion.p>
        </div>
      </section>

      {/* 2. PHILOSOPHY SECTION */}
      <section className="px-6 md:px-16 py-40 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <motion.div variants={itemVariants}>
            <p className="text-[10px] uppercase tracking-[0.5em] font-bold text-[#e92c2e] mb-10">More about services</p>
            <h2 className="text-5xl md:text-7xl font-thin tracking-tighter leading-none mb-10 text-[#020a41]" style={{ fontWeight: 100 }}>
              Building Digital <br /> Experiences.
            </h2>
            <p className="text-2xl font-light leading-relaxed text-black/50 mb-12">
              Partner with Kraftier Studio for end-to-end web design and development services. Our in-house team ensures every website is tailored to your business, built for performance, and created to drive results—without outsourcing or compromise.
            </p>
            <div className="w-24 h-px bg-black/10"></div>
          </motion.div>
          <motion.div 
            variants={itemVariants}
            className="aspect-square bg-[#f9f9f9] rounded-[4rem] overflow-hidden relative group shadow-2xl"
          >
            <img 
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1600&auto=format&fit=crop" 
              className="w-full h-full object-cover grayscale brightness-90 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000" 
              alt="WordPress Development Craft"
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

      {/* 4. EXPERTISE GRID (3x2) */}
      <section className="px-6 md:px-16 py-40 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-24">
            <p className="text-[10px] uppercase tracking-[0.5em] font-bold text-[#e92c2e] mb-10">Scalable Solutions</p>
            <h2 className="text-5xl md:text-8xl font-thin tracking-tighter leading-[0.9] text-[#020a41] mb-10" style={{ fontWeight: 100 }}>
              Full-Stack <br /> Wordpress.
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
        <div className="max-w-4xl mx-auto">
          <p className="text-[10px] uppercase tracking-[0.5em] font-bold text-[#e92c2e] mb-12">More Than a Website, It's a Partnership</p>
          <h2 className="text-5xl md:text-[9rem] font-thin tracking-tighter text-[#020a41] mb-16 lowercase leading-[0.8]" style={{ fontWeight: 100 }}>
            Engineered for <br /> <span className="text-[#e92c2e]">Growth & Scale.</span>
          </h2>
          <motion.button 
            onClick={onDiscoveryClick}
            whileHover={{ scale: 1.05 }}
            className="bg-[#020a41] text-white px-16 py-8 text-xs font-bold uppercase tracking-[0.4em] rounded-full"
          >
            Start Project
          </motion.button>
        </div>
      </section>
    </motion.div>
  );
};

export default WordpressWebsiteService;
