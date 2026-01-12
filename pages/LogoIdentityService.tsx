import React, { useState, useEffect } from 'react';
import { motion, Variants, AnimatePresence } from 'framer-motion';

interface LogoIdentityServiceProps {
  onBack: () => void;
  onDiscoveryClick: () => void;
}

const LogoIdentityService: React.FC<LogoIdentityServiceProps> = ({ onBack, onDiscoveryClick }) => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    const initUnicorn = () => {
      const windowAny = window as any;
      if (!windowAny.UnicornStudio) {
        windowAny.UnicornStudio = { isInitialized: false };
        const i = document.createElement("script");
        i.src = "https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v2.0.1/dist/unicornStudio.umd.js";
        i.onload = () => {
          if (!windowAny.UnicornStudio.isInitialized) {
            if (windowAny.UnicornStudio.init) {
              windowAny.UnicornStudio.init();
              windowAny.UnicornStudio.isInitialized = true;
            }
          }
        };
        document.head.appendChild(i);
      } else if (windowAny.UnicornStudio.init) {
        windowAny.UnicornStudio.init();
      }
    };

    const cleanBranding = () => {
      const elements = document.querySelectorAll('a[href*="unicornstudio.io"], [class*="us-badge"], [id*="us-badge"]');
      elements.forEach(el => {
        if (el.parentElement && (el.parentElement.style.zIndex === '2147483647' || el.parentElement.className.includes('us-badge'))) {
          el.parentElement.style.display = 'none';
        }
        (el as HTMLElement).style.display = 'none';
        el.remove();
      });
    };

    initUnicorn();
    const interval = setInterval(cleanBranding, 500);
    return () => clearInterval(interval);
  }, []);

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

  const FAQS = [
    {
      q: "Is branding just about having a logo?",
      a: "No, branding encompasses much more than just a logo. While a logo is a key element of brand recognition, branding includes colors, typography, imagery, and messaging that together define your brand's personality, values, and market perception."
    },
    {
      q: "Is a professional logo necessary for my business?",
      a: "Absolutely. A professional logo is crucial for businesses of all sizes and industries. It helps establish a strong brand identity, distinguish your business from competitors, and build trust with your audience by making a lasting impression."
    },
    {
      q: "How long does it take to design a logo?",
      a: "The timeline for designing a logo varies based on project complexity, customization needs, and collaboration with your team. Generally, the process can range from a few weeks to a few months."
    },
    {
      q: "What colors should be included in my logo?",
      a: "Selecting colors involves considering your target audience, industry, brand personality, and the emotions you want to evoke. We guide you through this process using color psychology."
    },
    {
      q: "Can you develop a brand identity from scratch?",
      a: "Yes, we can. If your current brand identity no longer reflects your business goals, our team can help you redefine and revitalize your brand from the ground up."
    }
  ];

  const PILLARS = [
    { 
      title: "Impact", 
      text: "Make a strong first impression with a logo that captures attention and tells your brand's story at a glance."
    },
    { 
      title: "Connection", 
      text: "A great logo builds a sense of connection and trust, turning customers into loyal advocates for your brand."
    },
    { 
      title: "Credibility", 
      text: "A well-crafted logo communicates professionalism and reliability, elevating your brand’s authority."
    }
  ];

  return (
    <motion.div 
      variants={containerVariants}
      initial="initial"
      animate="animate"
      className="bg-[#f9f9f9]"
    >
      <section className="pt-[28rem] md:pt-[38rem] pb-32 px-6 md:px-16 relative overflow-hidden">
        <motion.button 
          onClick={onBack}
          className="text-[11px] uppercase tracking-[0.4em] font-bold text-black/40 hover:text-[#e92c2e] transition-colors mb-20 flex items-center gap-4 group"
        >
          <span className="group-hover:-translate-x-2 transition-transform">←</span> Back to studio
        </motion.button>

        <div className="max-w-6xl relative z-10">
          <motion.p variants={itemVariants} className="text-[#e92c2e] text-[12px] font-bold uppercase tracking-[0.5em] mb-8">Service Detail / 01</motion.p>
          <motion.h1 
            variants={itemVariants}
            className="text-6xl md:text-[9.5rem] font-thin tracking-tighter leading-[0.8] text-[#020a41] lowercase mb-12"
            style={{ fontWeight: 100 }}
          >
            Remarkable Logos <br /> 
            <span className="text-black/20">That Tell Your Story</span>
          </motion.h1>
          <motion.p 
            variants={itemVariants}
            className="text-xl md:text-3xl text-black/60 leading-snug max-w-3xl font-light"
          >
            Our logo design process digs deep into what makes your brand unique, creating visuals that speak directly to your customers.
          </motion.p>
        </div>

        <div className="absolute top-1/2 right-0 translate-x-1/4 -translate-y-1/2 text-[30vw] font-thin opacity-[0.02] pointer-events-none select-none" style={{ fontWeight: 100 }}>
          Identity
        </div>
      </section>

      <section className="px-6 md:px-16 py-40 bg-white relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center opacity-[0.015] pointer-events-none select-none">
          <h2 className="text-[40vw] font-thin tracking-tighter leading-none rotate-12" style={{ fontWeight: 100 }}>Narrative</h2>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="mb-24">
            <p className="text-[10px] uppercase tracking-[0.5em] font-bold text-black/20 mb-12">The Case Study</p>
            <h2 className="text-5xl md:text-8xl font-thin tracking-tighter text-[#020a41] lowercase leading-none" style={{ fontWeight: 100 }}>
              Client Stories, <br /> <span className="text-[#e92c2e]">Genuine Impact</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-7 relative group">
              <motion.div 
                initial={{ opacity: 0, scale: 1.05 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                className="aspect-[16/10] bg-[#f9f9f9] rounded-[3rem] overflow-hidden relative shadow-2xl"
              >
                <img 
                  src="https://images.unsplash.com/photo-1541746972996-4e0b0f43e02a?q=80&w=1600&auto=format&fit=crop" 
                  alt="Aether Project Space"
                  className="w-full h-full object-cover grayscale brightness-90 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                
                <div className="absolute bottom-10 left-10 text-white/80">
                  <p className="text-[9px] uppercase tracking-[0.4em] font-bold mb-1">Visual Direction</p>
                  <h3 className="text-4xl font-medium tracking-tighter lowercase">Aether Project.</h3>
                </div>
              </motion.div>
              <div className="absolute -inset-4 border border-black/[0.03] rounded-[4rem] -z-10 group-hover:scale-105 transition-transform duration-700"></div>
            </div>

            <div className="lg:col-span-5 relative">
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.2 }}
                className="relative z-10"
              >
                <div className="mb-12">
                   <span className="text-8xl font-serif text-[#e92c2e] opacity-20">“</span>
                   <p className="text-3xl md:text-4xl font-light tracking-tight leading-tight text-[#020a41] -mt-10 mb-12">
                    Kraftier didn't just give us a logo; they gave us a language. Our market authority doubled within months of the reveal.
                   </p>
                </div>

                <div className="flex flex-col gap-8">
                  <div className="h-px w-24 bg-black/10"></div>
                  <div>
                    <h4 className="text-[12px] uppercase tracking-[0.3em] font-bold text-black">Founder, Aether Project</h4>
                    <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-black/30 mt-1">Brand Transformation // Global Launch</p>
                  </div>
                </div>
              </motion.div>
              <div className="absolute -right-20 top-1/2 -translate-y-1/2 w-64 h-64 bg-[#e92c2e]/5 rounded-full blur-[100px] -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 md:px-16 py-40 grid grid-cols-1 md:grid-cols-3 gap-8">
        {PILLARS.map((box, i) => (
          <motion.div 
            key={i}
            variants={itemVariants}
            whileHover={{ y: -10 }}
            className="bg-white p-12 rounded-[2.5rem] border border-black/5 flex flex-col justify-between aspect-square group shadow-sm hover:shadow-xl transition-all duration-500"
          >
            <div className="w-14 h-14 rounded-2xl bg-[#f9f9f9] flex items-center justify-center mb-10 group-hover:bg-[#e92c2e]/5 transition-colors">
              <span className="text-[10px] font-mono text-[#e92c2e] tracking-[0.3em]">0{i+1}</span>
            </div>
            <div>
              <h3 className="text-4xl font-medium tracking-tighter text-[#020a41] mb-6">{box.title}.</h3>
              <p className="text-black/50 leading-relaxed font-light">{box.text}</p>
            </div>
          </motion.div>
        ))}
      </section>

      <section className="px-6 md:px-16 py-40 bg-[#020a41] text-white rounded-[4rem] md:rounded-[6rem] mx-4 md:mx-8 relative overflow-hidden">
        <div 
          data-us-project="yD8kI9uCMAAHeTjrXUeX" 
          className="absolute inset-0 z-0 opacity-40 pointer-events-none"
        />

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 relative z-10">
          <div>
            <p className="text-[10px] uppercase tracking-[0.5em] font-bold text-[#e92c2e] mb-12">The Philosophy</p>
            <h2 className="text-5xl md:text-8xl font-thin tracking-tighter leading-[0.9] mb-12" style={{ fontWeight: 100 }}>
              Your Brand's <br /> Visual Signature.
            </h2>
            <div className="w-24 h-px bg-white/20 mb-12"></div>
            <p className="text-lg md:text-xl text-white/60 font-light leading-relaxed">
              Logos define your business, making it memorable and trusted in a crowded digital landscape. We don't just piece together random elements; instead, our team meticulously plans and executes each project in-house.
            </p>
          </div>
          <div className="flex flex-col justify-end">
            <h4 className="text-[11px] uppercase tracking-widest font-bold text-white/40 mb-6">What sets us apart?</h4>
            <p className="text-white/80 text-2xl font-light leading-relaxed">
              The process begins with understanding your brand's core values and the audience you aim to reach. By gathering these insights, we develop a strategic plan to craft logos that resonate with your target market.
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 md:px-16 py-40">
        <div className="mb-24 flex flex-col md:flex-row justify-between items-end gap-8">
          <h2 className="text-5xl md:text-7xl font-thin tracking-tighter text-[#020a41] lowercase leading-none" style={{ fontWeight: 100 }}>
            Design Solutions <br /> For Every Stage
          </h2>
          <p className="max-w-md text-black/40 text-sm font-light uppercase tracking-[0.2em]">
            from established companies to emerging start-ups, we deliver services that meet your specific requirements.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-black/5 border border-black/5">
          {[
            { title: "Logo Design", desc: "Powerful visual symbols capturing the essence of the values you wish to communicate." },
            { title: "Logo Application", desc: "Guidance on optimal placement and usage across platforms to ensure brand integrity." },
            { title: "Colors & Typography", desc: "Expressing your brand's character and the feelings you wish to evoke in your audience." },
            { title: "Brand Book", desc: "A blueprint for your brand's identity, ensuring everyone adheres to established standards." },
            { title: "Brand Assets", desc: "Complete sets of imagery, icons, and patterns that best represent your visual identity." },
            { title: "Logo Redesigns", desc: "Refreshing your brand's image to keep it relevant without overhauling the entire identity." }
          ].map((item, i) => (
            <div key={i} className="bg-[#f9f9f9] p-12 hover:bg-white transition-colors group">
              <span className="block mb-10 text-[10px] font-mono text-black/30">STRATUM_0{i+1}</span>
              <h4 className="text-3xl font-medium tracking-tighter text-[#020a41] mb-6 group-hover:text-[#e92c2e] transition-colors">{item.title}</h4>
              <p className="text-black/50 font-light leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-6 md:px-16 py-40 bg-white rounded-t-[4rem]">
        <div className="max-w-4xl mx-auto">
          <p className="text-center text-[10px] uppercase tracking-[0.5em] font-bold text-black/20 mb-16">Get to Know Us Better</p>
          
          <div className="space-y-4">
            {FAQS.map((faq, idx) => (
              <div key={idx} className="border-b border-black/5 last:border-0">
                <button 
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full py-8 flex justify-between items-center group text-left"
                >
                  <span className="text-xl md:text-2xl font-medium tracking-tight text-[#020a41] group-hover:text-[#e92c2e] transition-colors">
                    {faq.q}
                  </span>
                  <span className={`text-2xl transition-transform duration-500 ${openFaq === idx ? 'rotate-45' : ''}`}>+</span>
                </button>
                <AnimatePresence>
                  {openFaq === idx && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <p className="pb-8 text-black/50 font-light leading-relaxed max-w-2xl">
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-40 px-6 md:px-16 text-center border-t border-black/5">
        <h2 className="text-5xl md:text-[9rem] font-thin tracking-tighter text-[#020a41] mb-16 lowercase leading-[0.8]" style={{ fontWeight: 100 }}>
          Ready to <br /> <span className="text-[#e92c2e]">Start Your Story?</span>
        </h2>
        <motion.button 
          onClick={onDiscoveryClick}
          whileHover={{ scale: 1.05 }}
          className="bg-[#020a41] text-white px-16 py-8 text-xs font-bold uppercase tracking-[0.4em] rounded-full"
        >
          Begin Identity Discovery
        </motion.button>
      </section>
    </motion.div>
  );
};

export default LogoIdentityService;