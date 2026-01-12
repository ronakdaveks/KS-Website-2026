import React, { useState } from 'react';
import { motion, Variants, AnimatePresence } from 'framer-motion';

interface LinkedInManagementServiceProps {
  onBack: () => void;
  onDiscoveryClick: () => void;
}

const LinkedInManagementService: React.FC<LinkedInManagementServiceProps> = ({ onBack, onDiscoveryClick }) => {
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

  const PILLARS_3 = [
    { 
      title: "Optimized Profiles", 
      text: "We enhance your LinkedIn profile to reflect your brand’s unique strengths. By refining your headline, summary, and experience, we ensure your profile showcases your expertise."
    },
    { 
      title: "Engaging Content", 
      text: "Our team creates compelling content that speaks directly to your audience. From posts to articles, we develop materials that spark conversations and build relationships."
    },
    { 
      title: "Audience Engagement", 
      text: "We focus on building organic engagement by fostering genuine connections with your target audience through thoughtful interaction and timely responses."
    }
  ];

  const CAPABILITIES_6 = [
    { title: "Customized Profile", text: "We craft profiles that highlight your expertise and build authority in your industry, ensuring you get noticed by the right decision-makers." },
    { title: "Content Curation", text: "We manage your presence, regularly posting content that reflects your brand, engages your audience, and sparks industry conversations." },
    { title: "Connection Outreach", text: "Build valuable connections through strategic outreach to influencers, prospects, and professionals who can grow your business." },
    { title: "Brand Positioning", text: "Enhance your presence with well-structured content that positions your brand effectively and keeps you top-of-mind." },
    { title: "LinkedIn Ads Management", text: "Leverage advanced targeting options. We manage your ad campaigns to drive traffic, high-quality leads, and conversions." },
    { title: "Engagement Tactics", text: "Build an engaged audience with thoughtful interaction. We help you foster meaningful relationships that enhance business credibility." }
  ];

  const CORE_VALUES = [
    { title: "01. Trust", text: "Building trust is at the core of our work. We focus on creating transparent relationships, ensuring you feel confident in every step." },
    { title: "02. Adaptability", text: "We stay agile and flexible, constantly adapting our strategies to meet your evolving business needs and platform shifts." },
    { title: "03. Passion", text: "We’re passionate about helping your brand succeed. Our team is dedicated to delivering excellence, driven by a love for what we do." }
  ];

  const FAQS = [
    {
      q: "How can LinkedIn help my business grow?",
      a: "LinkedIn is a powerful platform for businesses to connect with industry professionals, showcase expertise, and build brand authority. Through networking, content sharing, and targeted outreach, it enables high-quality lead generation and direct engagement with decision-makers."
    },
    {
      q: "How can you help optimize my LinkedIn profile?",
      a: "We refine your headline, summary, and experience sections to reflect your brand. Our team ensures the use of relevant keywords, professional visuals, and clear calls-to-action, making you more discoverable to your target audience and industry peers."
    },
    {
      q: "Why is LinkedIn important for professionals?",
      a: "It's the go-to platform to network, share knowledge, and build credibility. It serves as an online resume and portfolio, offering space for showcasing achievements and staying updated on industry trends essential for career growth."
    },
    {
      q: "How do LinkedIn Ads work?",
      a: "LinkedIn Ads use advanced targeting based on job title, industry, company size, and more. We design and manage campaigns that promote your brand directly to decision-makers, driving traffic and leads for your business."
    }
  ];

  return (
    <motion.div 
      variants={containerVariants}
      initial="initial"
      animate="animate"
      className="bg-[#f9f9f9]"
    >
      {/* 1. HERO */}
      <section className="pt-[28rem] md:pt-[38rem] pb-32 px-6 md:px-16 relative overflow-hidden">
        <motion.button 
          onClick={onBack}
          className="text-[11px] uppercase tracking-[0.4em] font-bold text-black/40 hover:text-[#e92c2e] transition-colors mb-20 flex items-center gap-4 group"
        >
          <span className="group-hover:-translate-x-2 transition-transform">←</span> Back to studio
        </motion.button>

        <div className="max-w-6xl relative z-10">
          <motion.p variants={itemVariants} className="text-[#e92c2e] text-[12px] font-bold uppercase tracking-[0.5em] mb-8">Professional Network / 08</motion.p>
          <motion.h1 
            variants={itemVariants}
            className="text-6xl md:text-[9.5rem] font-thin tracking-tighter leading-[0.8] text-[#020a41] lowercase mb-12"
            style={{ fontWeight: 100 }}
          >
            LinkedIn <br /> 
            <span className="text-black/20">Management</span>
          </motion.h1>
          <motion.p 
            variants={itemVariants}
            className="text-xl md:text-3xl text-black/60 leading-snug max-w-4xl font-light"
          >
            Leverage LinkedIn to drive professional relationships and transform them into tangible business results. From connections to real growth.
          </motion.p>
        </div>
      </section>

      {/* 2. PHILOSOPHY */}
      <section className="px-6 md:px-16 py-40 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <motion.div variants={itemVariants}>
            <p className="text-[10px] uppercase tracking-[0.5em] font-bold text-[#e92c2e] mb-10">Network Transformation</p>
            <h2 className="text-5xl md:text-7xl font-thin tracking-tighter leading-none mb-10 text-[#020a41]" style={{ fontWeight: 100 }}>
              Transform Connections <br /> into Opportunities.
            </h2>
            <p className="text-2xl font-light leading-relaxed text-black/50 mb-12">
              Maximize LinkedIn’s potential with tailored strategies that spark authentic engagement and position your brand at the forefront of your industry. Build credibility and turn valuable connections into lasting partnerships.
            </p>
            <div className="w-24 h-px bg-black/10"></div>
          </motion.div>
          <motion.div 
            variants={itemVariants}
            className="aspect-[4/5] bg-[#f9f9f9] rounded-[4rem] overflow-hidden relative group shadow-2xl"
          >
            <img 
              src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1600&auto=format&fit=crop" 
              className="w-full h-full object-cover grayscale brightness-90 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000" 
              alt="Professional Networking"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#020a41]/20 to-transparent"></div>
          </motion.div>
        </div>
      </section>

      {/* 3. PILLARS (3 BOXES) */}
      <section className="px-6 md:px-16 py-40 bg-[#f4f4f4]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-24">
             <h2 className="text-5xl md:text-8xl font-thin tracking-tighter leading-[0.9] text-[#020a41] mb-10" style={{ fontWeight: 100 }}>
              Redefining Your <br /> Presence.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {PILLARS_3.map((p, i) => (
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

      {/* 4. DETAIL MURAL */}
      <section className="px-6 md:px-16 py-40 bg-[#020a41] text-white rounded-[4rem] md:rounded-[6rem] mx-4 md:mx-8 relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <p className="text-[10px] uppercase tracking-[0.5em] font-bold text-[#e92c2e] mb-12">Innovation in Strategy</p>
          <h2 className="text-5xl md:text-8xl font-thin tracking-tighter leading-[0.9] mb-12 mx-auto max-w-4xl" style={{ fontWeight: 100 }}>
            Supercharge Your <br /> LinkedIn Presence.
          </h2>
          <p className="text-lg md:text-2xl text-white/60 font-light leading-relaxed max-w-3xl mx-auto">
            We approach LinkedIn with innovation and strategy. At Kraftier Studio, we tailor every aspect—from messaging to outreach—to create engagement that drives tangible business outcomes. Be more than a connection; be a catalyst for growth.
          </p>
        </div>
      </section>

      {/* 5. CAPABILITIES GRID (6 BOXES) */}
      <section className="px-6 md:px-16 py-40 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-24">
            <p className="text-[10px] uppercase tracking-[0.5em] font-bold text-[#e92c2e] mb-10">All-Inclusive Management</p>
            <h2 className="text-5xl md:text-8xl font-thin tracking-tighter leading-[0.9] text-[#020a41] mb-10" style={{ fontWeight: 100 }}>
              Covering <br /> Every Angle.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {CAPABILITIES_6.map((box, i) => (
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

      {/* 6. CORE VALUES */}
      <section className="px-6 md:px-16 py-40 bg-[#020a41] text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {CORE_VALUES.map((val, i) => (
              <div key={i} className="space-y-8">
                <h4 className="text-3xl font-thin tracking-tighter lowercase text-[#e92c2e]" style={{ fontWeight: 100 }}>{val.title}</h4>
                <p className="text-white/60 font-light leading-relaxed text-lg">
                  {val.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. FAQS */}
      <section className="px-6 md:px-16 py-40 bg-[#f4f4f4] rounded-t-[4rem]">
        <div className="max-w-4xl mx-auto">
          <p className="text-center text-[10px] uppercase tracking-[0.5em] font-bold text-black/20 mb-16">Intelligence in Outreach</p>
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
          <p className="text-[10px] uppercase tracking-[0.5em] font-bold text-[#e92c2e] mb-12">Empowering businesses through LinkedIn success</p>
          <h2 className="text-5xl md:text-[9rem] font-thin tracking-tighter text-[#020a41] mb-16 lowercase leading-[0.8]" style={{ fontWeight: 100 }}>
            Partner With <br /> <span className="text-[#e92c2e]">Us For Results.</span>
          </h2>
          <motion.button 
            onClick={onDiscoveryClick}
            whileHover={{ scale: 1.05 }}
            className="bg-[#020a41] text-white px-16 py-8 text-xs font-bold uppercase tracking-[0.4em] rounded-full"
          >
            Start Network Discovery
          </motion.button>
        </div>
      </section>
    </motion.div>
  );
};

export default LinkedInManagementService;
