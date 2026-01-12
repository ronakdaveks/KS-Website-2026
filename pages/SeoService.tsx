
import React, { useState } from 'react';
import { motion, Variants, AnimatePresence } from 'framer-motion';

interface SeoServiceProps {
  onBack: () => void;
  onDiscoveryClick: () => void;
}

const SeoService: React.FC<SeoServiceProps> = ({ onBack, onDiscoveryClick }) => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

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
      title: "Visibility", 
      text: "Improve your website’s ranking on search engines, making it easier for customers to find you."
    },
    { 
      title: "Engagement", 
      text: "Keep visitors on your site longer with optimized content that matches user intent and encourages interaction."
    },
    { 
      title: "Growth", 
      text: "SEO fuels your business growth by driving more qualified visitors to your site, leading to increased sales and opportunities."
    }
  ];

  const GRID_BOXES = [
    { title: "On-Page SEO", text: "Optimizing individual pages to improve your search rankings and attract the right audience by refining content, meta tags, and headings." },
    { title: "Off-Page SEO", text: "Boosting website authority through strategic placements and high-quality backlinks to enhance brand trustworthiness." },
    { title: "Technical SEO", text: "Tackling behind-the-scenes elements like site speed and mobile optimization to meet high search ranking standards." },
    { title: "Link Building", text: "Custom strategies including outreach and manual link placements to enhance domain authority and organic traffic." },
    { title: "Local SEO", text: "Optimizing Google Business Profiles and local citations to ensure your brand stands out in local searches." },
    { title: "Content Creation", text: "Creating optimized web pages and blog posts designed to resonate with your audience and align with search terms." }
  ];

  const FAQS = [
    {
      q: "Why is SEO Important?",
      a: "SEO is crucial for improving website visibility and driving organic traffic. By optimizing content and site structure, businesses make it easier for potential customers to find them online. SEO also enhances credibility, signaling to search engines that the site is a trusted source of information."
    },
    {
      q: "How do search engines rank websites?",
      a: "Search engines rank websites using several key factors, such as content quality, the number and relevance of backlinks, site structure, and user experience. Algorithms assess how relevant a site is to specific keywords and how frequently it's updated with fresh content."
    },
    {
      q: "Is SEO a one-time effort?",
      a: "SEO is not a one-time task but an ongoing process that requires consistent updates and adjustments. As search engine algorithms evolve, businesses need to continuously optimize their site and content to stay competitive."
    },
    {
      q: "What is the difference between organic and paid search results?",
      a: "Organic search results appear naturally in search engine rankings based on a site’s relevance and quality. Paid search results are ads businesses pay for to appear at the top of the search engine results page (SERP)."
    },
    {
      q: "Why use SEO, why not Google Ads?",
      a: "SEO improves a website’s visibility organically over time, providing long-term benefits. Google Ads offer immediate visibility through paid ads but require continuous investment to stay on top."
    }
  ];

  return (
    <motion.div 
      variants={containerVariants}
      initial="initial"
      animate="animate"
      className="bg-[#f9f9f9]"
    >
      {/* 1. HERO - Massive padding for navbar logo clearance */}
      <section className="pt-[28rem] md:pt-[38rem] pb-32 px-6 md:px-16 relative overflow-hidden">
        <motion.button 
          onClick={onBack}
          className="text-[11px] uppercase tracking-[0.4em] font-bold text-black/40 hover:text-[#e92c2e] transition-colors mb-20 flex items-center gap-4 group"
        >
          <span className="group-hover:-translate-x-2 transition-transform">←</span> Back to studio
        </motion.button>

        <div className="max-w-6xl relative z-10">
          <motion.p variants={itemVariants} className="text-[#e92c2e] text-[12px] font-bold uppercase tracking-[0.5em] mb-8">Search Performance / 05</motion.p>
          <motion.h1 
            variants={itemVariants}
            className="text-6xl md:text-[9.5rem] font-thin tracking-tighter leading-[0.8] text-[#020a41] lowercase mb-12"
            style={{ fontWeight: 100 }}
          >
            Rank Higher <br /> 
            <span className="text-black/20">Reach More</span>
          </motion.h1>
          <motion.p 
            variants={itemVariants}
            className="text-xl md:text-3xl text-black/60 leading-snug max-w-4xl font-light"
          >
            Effective SEO makes your brand easier to find. We optimize your site to improve search rankings and connect with more potential customers.
          </motion.p>
        </div>
      </section>

      {/* 2. PHILOSOPHY & STATS */}
      <section className="px-6 md:px-16 py-40 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <motion.div variants={itemVariants}>
            <p className="text-[10px] uppercase tracking-[0.5em] font-bold text-[#e92c2e] mb-10">More about services</p>
            <h2 className="text-5xl md:text-7xl font-thin tracking-tighter leading-none mb-10 text-[#020a41]" style={{ fontWeight: 100 }}>
              Optimize, Rank, <br /> and Thrive.
            </h2>
            <p className="text-2xl font-light leading-relaxed text-black/50 mb-12">
              Our SEO services are crafted to enhance your online presence, helping your business rank higher and reach more customers. We analyze your needs and deliver results-driven solutions.
            </p>
            
            <div className="flex flex-col gap-6 pt-8 border-t border-black/5">
              <p className="text-[10px] uppercase tracking-[0.4em] font-bold text-black/40">Market Authority</p>
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <h4 className="text-4xl font-medium tracking-tighter text-[#020a41]">200+</h4>
                  <p className="text-[10px] uppercase tracking-widest text-black/30 font-bold mt-1">Positive Reviews</p>
                </div>
                <div>
                  <h4 className="text-4xl font-medium tracking-tighter text-[#020a41]">4.8/5</h4>
                  <p className="text-[10px] uppercase tracking-widest text-black/30 font-bold mt-1">Clutch Rating</p>
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div 
            variants={itemVariants}
            className="aspect-square bg-[#f9f9f9] rounded-[4rem] overflow-hidden relative group shadow-2xl"
          >
            <img 
              src="https://images.unsplash.com/photo-1571721738205-e8273293c64a?q=80&w=1600&auto=format&fit=crop" 
              className="w-full h-full object-cover grayscale brightness-90 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000" 
              alt="SEO Strategy Implementation"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#020a41]/20 to-transparent"></div>
          </motion.div>
        </div>
      </section>

      {/* 3. BUILDING BLOCKS (3 Pillars) */}
      <section className="px-6 md:px-16 py-40 bg-[#f4f4f4]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-24">
            <p className="text-[10px] uppercase tracking-[0.5em] font-bold text-[#e92c2e] mb-10">SEO Foundations</p>
            <h2 className="text-4xl md:text-6xl font-thin tracking-tighter text-[#020a41] lowercase" style={{ fontWeight: 100 }}>Building Blocks of SEO Growth</h2>
          </div>
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
                <p className="text-black/50 font-light leading-relaxed">{p.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. STRATEGY GRID (3x2) */}
      <section className="px-6 md:px-16 py-40 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-24">
            <p className="text-[10px] uppercase tracking-[0.5em] font-bold text-[#e92c2e] mb-10">The Methodology</p>
            <h2 className="text-5xl md:text-8xl font-thin tracking-tighter leading-[0.9] text-[#020a41] mb-10" style={{ fontWeight: 100 }}>
              Data Driven <br /> Results.
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

      {/* 5. FAQS */}
      <section className="px-6 md:px-16 py-40 bg-[#f4f4f4] rounded-t-[4rem]">
        <div className="max-w-4xl mx-auto">
          <p className="text-center text-[10px] uppercase tracking-[0.5em] font-bold text-black/20 mb-16">Intelligence in Search</p>
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

      {/* FINAL CTA */}
      <section className="py-40 px-6 md:px-16 text-center border-t border-black/5">
        <div className="max-w-4xl mx-auto">
          <p className="text-[10px] uppercase tracking-[0.5em] font-bold text-[#e92c2e] mb-12">Partner with Us for SEO Growth</p>
          <h2 className="text-5xl md:text-[9rem] font-thin tracking-tighter text-[#020a41] mb-16 lowercase leading-[0.8]" style={{ fontWeight: 100 }}>
            Elevate Your <br /> <span className="text-[#e92c2e]">Search Performance.</span>
          </h2>
          <motion.button 
            onClick={onDiscoveryClick}
            whileHover={{ scale: 1.05 }}
            className="bg-[#020a41] text-white px-16 py-8 text-xs font-bold uppercase tracking-[0.4em] rounded-full"
          >
            Begin Growth Discovery
          </motion.button>
        </div>
      </section>
    </motion.div>
  );
};

export default SeoService;
