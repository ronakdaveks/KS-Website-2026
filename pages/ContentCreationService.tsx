import React, { useState } from 'react';
import { motion, Variants, AnimatePresence } from 'framer-motion';

interface ContentCreationServiceProps {
  onBack: () => void;
  onDiscoveryClick: () => void;
}

const ContentCreationService: React.FC<ContentCreationServiceProps> = ({ onBack, onDiscoveryClick }) => {
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

  const PROCESS_STEPS = [
    { 
      title: "Conceptualization", 
      text: "Great content starts with a great idea. We brainstorm and develop creative concepts that align with your brand's vision, ensuring we capture the right story from the very first spark."
    },
    { 
      title: "Shoot and Editing", 
      text: "From capturing high-quality visuals to expert editing, we handle the entire production process. We ensure every shot and edit reflects your brand and engages your audience emotionally."
    },
    { 
      title: "Schedule and Posting", 
      text: "Timing is everything. We strategically schedule and post your content to ensure maximum reach, targeting the right audience at the right time on the platforms that matter most."
    }
  ];

  const WHY_KRAFTIER = [
    { label: "Attention to Detail", desc: "We focus on the small details that make a big difference, ensuring your content is polished and perfectly aligned." },
    { label: "Personalized Approach", desc: "We tailor our services to meet your specific needs, working closely to create a content strategy that hits goals." },
    { label: "Experience & Expertise", desc: "Our team leverages the latest trends and techniques in content marketing to deliver impactful, modern results." },
    { label: "Proven Results", desc: "With a track record of success, our strategies are designed to deliver measurable outcomes and organic growth." }
  ];

  const FAQS = [
    {
      q: "What is content creation, and why is it important?",
      a: "Content creation involves producing and distributing relevant information to attract, engage, and retain your audience. It helps build brand awareness, establish authority, and drive organic traffic to your website."
    },
    {
      q: "How do you ensure the content aligns with my brand?",
      a: "We start by understanding your brand’s voice, values, and target audience. Our team then tailors the content to ensure it reflects your brand’s personality across all channels and platforms."
    },
    {
      q: "How often should I create new content?",
      a: "The frequency depends on your goals. For most businesses, weekly blog articles and a steady social media presence are ideal for consistent engagement and SEO benefits."
    },
    {
      q: "What types of content do you create?",
      a: "We offer a range of services including blog posts, website copy, social media content, email newsletters, case studies, and visual storytelling assets."
    },
    {
      q: "How do you measure the success of content?",
      a: "We track KPIs such as engagement rates, website traffic, conversion rates, and search engine rankings. Regular analytics reports help us refine our strategies."
    },
    {
      q: "Can you help with content distribution as well?",
      a: "Yes, we don’t just create content—we can also help distribute it across your website, social media, and newsletters to ensure it reaches your target audience."
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
          <motion.p variants={itemVariants} className="text-[#e92c2e] text-[12px] font-bold uppercase tracking-[0.5em] mb-8">Creative Solutions / 09</motion.p>
          <motion.h1 
            variants={itemVariants}
            className="text-6xl md:text-[9.5rem] font-thin tracking-tighter leading-[0.8] text-[#020a41] lowercase mb-12"
            style={{ fontWeight: 100 }}
          >
            Visual Stories <br /> 
            <span className="text-black/20">That Inspire</span>
          </motion.h1>
          <motion.p 
            variants={itemVariants}
            className="text-xl md:text-3xl text-black/60 leading-snug max-w-4xl font-light"
          >
            Transform your brand with captivating video and image content. We create visually stunning stories that connect emotionally with your audience, driving deeper engagement.
          </motion.p>
        </div>
      </section>

      {/* 2. PHILOSOPHY */}
      <section className="px-6 md:px-16 py-40 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <motion.div variants={itemVariants}>
            <p className="text-[10px] uppercase tracking-[0.5em] font-bold text-[#e92c2e] mb-10">Strategic Narrative</p>
            <h2 className="text-5xl md:text-7xl font-thin tracking-tighter leading-none mb-10 text-[#020a41]" style={{ fontWeight: 100 }}>
              Crafting Content <br /> That Engages.
            </h2>
            <p className="text-2xl font-light leading-relaxed text-black/50 mb-12">
              Effective content is more than just words; it’s about delivering value. Our team creates informative, strategic content that drives conversations, builds trust, and turns readers into loyal customers.
            </p>
            <div className="w-24 h-px bg-black/10"></div>
          </motion.div>
          <motion.div 
            variants={itemVariants}
            className="aspect-[4/5] bg-[#f9f9f9] rounded-[4rem] overflow-hidden relative group shadow-2xl"
          >
            <img 
              src="https://images.unsplash.com/photo-1493612276216-ee3925520721?q=80&w=1600&auto=format&fit=crop" 
              className="w-full h-full object-cover grayscale brightness-90 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000" 
              alt="Creative Content Production"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#020a41]/20 to-transparent"></div>
          </motion.div>
        </div>
      </section>

      {/* 3. PROCESS (3 BOXES) */}
      <section className="px-6 md:px-16 py-40 bg-[#f4f4f4]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-24">
             <p className="text-[10px] uppercase tracking-[0.5em] font-bold text-[#e92c2e] mb-10">Our Lifecycle</p>
             <h2 className="text-5xl md:text-8xl font-thin tracking-tighter leading-[0.9] text-[#020a41] mb-10" style={{ fontWeight: 100 }}>
              Creation Process <br /> Start to Finish.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {PROCESS_STEPS.map((step, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -10 }}
                className="bg-white p-12 rounded-[3rem] shadow-sm hover:shadow-xl transition-all duration-500"
              >
                <div className="w-12 h-12 rounded-full bg-[#e92c2e]/5 flex items-center justify-center mb-10">
                   <span className="text-[10px] font-mono font-bold text-[#e92c2e]">0{i+1}</span>
                </div>
                <h3 className="text-3xl font-medium tracking-tight text-[#020a41] mb-6">{step.title}</h3>
                <p className="text-black/50 font-light leading-relaxed">{step.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. GROWTH MURAL */}
      <section className="px-6 md:px-16 py-40 bg-[#020a41] text-white rounded-[4rem] md:rounded-[6rem] mx-4 md:mx-8 relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <p className="text-[10px] uppercase tracking-[0.5em] font-bold text-[#e92c2e] mb-12">The Impact</p>
          <h2 className="text-5xl md:text-8xl font-thin tracking-tighter leading-[0.9] mb-12 mx-auto max-w-4xl" style={{ fontWeight: 100 }}>
            Grow Your Reach, <br /> Build Lasting Connections.
          </h2>
          <p className="text-lg md:text-2xl text-white/60 font-light leading-relaxed max-w-3xl mx-auto">
            At Kraftier Studio, we craft content that amplifies your brand’s reach and fuels growth. From storytelling that resonates to targeted messaging, we ensure your brand is seen, heard, and remembered.
          </p>
        </div>
      </section>

      {/* 5. UNIQUE VALUE (WHICH MAKES US UNIQUE) */}
      <section className="px-6 md:px-16 py-40 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-24">
            <p className="text-[10px] uppercase tracking-[0.5em] font-bold text-[#e92c2e] mb-10">Differentiation</p>
            <h2 className="text-5xl md:text-8xl font-thin tracking-tighter leading-[0.9] text-[#020a41] mb-10" style={{ fontWeight: 100 }}>
              What Makes <br /> Us Unique.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
             <div className="p-16 bg-[#f9f9f9] rounded-[4rem] border border-black/5 group hover:border-[#e92c2e]/20 transition-all duration-500">
                <h3 className="text-2xl font-bold uppercase tracking-widest text-[#020a41] mb-12">Why Kraftier Studio?</h3>
                <div className="space-y-10">
                  {WHY_KRAFTIER.map((item, idx) => (
                    <div key={idx} className="group/item">
                       <h4 className="text-lg font-bold text-[#020a41] mb-2 group-hover/item:text-[#e92c2e] transition-colors">{idx + 1}. {item.label}</h4>
                       <p className="text-black/40 font-light">{item.desc}</p>
                    </div>
                  ))}
                </div>
             </div>
             
             <div className="p-16 bg-[#020a41] text-white rounded-[4rem] border border-white/5 flex flex-col justify-center">
                <h3 className="text-2xl font-bold uppercase tracking-widest text-[#e92c2e] mb-10">Why Content Creation Matters</h3>
                <p className="text-2xl md:text-3xl font-light leading-relaxed text-white/60">
                  Content is the backbone of a strong digital presence. It helps you connect with your audience, establish credibility, and drive long-term growth by delivering consistent value.
                </p>
                <div className="mt-12 h-px w-20 bg-white/20"></div>
             </div>
          </div>
        </div>
      </section>

      {/* 6. FAQS */}
      <section className="px-6 md:px-16 py-40 bg-[#f4f4f4] rounded-t-[4rem]">
        <div className="max-w-4xl mx-auto">
          <p className="text-center text-[10px] uppercase tracking-[0.5em] font-bold text-black/20 mb-16">Intelligence in Content</p>
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
          <p className="text-[10px] uppercase tracking-[0.5em] font-bold text-[#e92c2e] mb-12">Start Your Content Journey With Us</p>
          <h2 className="text-5xl md:text-[9rem] font-thin tracking-tighter text-[#020a41] mb-16 lowercase leading-[0.8]" style={{ fontWeight: 100 }}>
            Partner For <br /> <span className="text-[#e92c2e]">Content That Connects.</span>
          </h2>
          <motion.button 
            onClick={onDiscoveryClick}
            whileHover={{ scale: 1.05 }}
            className="bg-[#020a41] text-white px-16 py-8 text-xs font-bold uppercase tracking-[0.4em] rounded-full"
          >
            Start Content Discovery
          </motion.button>
        </div>
      </section>
    </motion.div>
  );
};

export default ContentCreationService;
