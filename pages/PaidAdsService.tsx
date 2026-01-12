import React, { useState } from 'react';
import { motion, Variants, AnimatePresence } from 'framer-motion';

interface PaidAdsServiceProps {
  onBack: () => void;
  onDiscoveryClick: () => void;
}

const PaidAdsService: React.FC<PaidAdsServiceProps> = ({ onBack, onDiscoveryClick }) => {
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
      title: "Dedicated Ad Specialists", 
      text: "Collaborate directly with experienced paid ad specialists. We handle every aspect of your campaign in-house, ensuring expert attention to detail with no outsourcing involved."
    },
    { 
      title: "Flexible Partnership", 
      text: "We believe in earning your business, not binding it. With our flexible, no-contract approach, we deliver results-driven campaigns month after month for over 300 satisfied clients."
    },
    { 
      title: "Full Transparency", 
      text: "Our commitment to transparency means you'll always know how your campaigns are performing with clear, detailed reports and visibility throughout our partnership."
    }
  ];

  const CAPABILITIES_6 = [
    { title: "Google Search Ads", text: "Highly targeted campaigns that place your brand in front of customers actively searching. We drive traffic through strategic keyword selection and compelling copy." },
    { title: "Google Shopping Ads", text: "Boost product visibility with campaigns that showcase best features and target customers searching for what you offer, ensuring you stand out in the market." },
    { title: "Google Display Ads", text: "Expand reach across the Google Display Network with visually captivating ads focused on strategic placements to reach the right people on the right platforms." },
    { title: "Ads Optimisation", text: "Our team continuously fine-tunes your campaigns for peak performance, identifying expansion opportunities to dominate the search engine results pages." },
    { title: "Ad Landing Pages", text: "Maximize conversions with expertly designed pages optimized to guide visitors from ad click to action, backed by years of cross-industry experience." },
    { title: "Remarketing Campaigns", text: "Turn visitors into customers by re-engaging users who previously visited your site, keeping your brand front of mind to complete their purchase journey." }
  ];

  const INFO_BLOCKS = [
    {
      q: "Not sure where to advertise?",
      a: "We help you choose the right platforms based on your audience and goals. Whether it’s Google, Facebook, or Instagram, we tailor your strategy to where your customers are most active."
    },
    {
      q: "Wondering how soon you'll see results?",
      a: "Paid ads can produce results within days of launching. However, the best outcomes come from ongoing optimization and data-driven improvements handled continuously by our team."
    },
    {
      q: "Need to reach a wider audience?",
      a: "With precise targeting and platform-specific strategies, we ensure your ads are seen by the right people, driving more traffic and engagement to your business effectively."
    }
  ];

  const FAQS = [
    {
      q: "How long does it take to see results from paid ads?",
      a: "Paid ads can generate results quickly, often within days of launching. However, the best outcomes typically come with continuous optimization. You may see significant improvements over weeks or months as we refine and adjust the strategy for peak performance."
    },
    {
      q: "How do you target the right audience with paid ads?",
      a: "We use detailed targeting strategies including demographics, location, interests, and online behaviors. We also analyze keyword data, competitor insights, and user intent to make sure your ads appear in front of those most likely to engage."
    },
    {
      q: "How do you measure the success of a paid ad campaign?",
      a: "We measure success through key performance indicators (KPIs) such as click-through rates (CTR), conversion rates, cost-per-click (CPC), return on ad spend (ROAS). Regular reporting allows us to track progress and identify growth opportunities."
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
          <motion.p variants={itemVariants} className="text-[#e92c2e] text-[12px] font-bold uppercase tracking-[0.5em] mb-8">Growth Engine / 07</motion.p>
          <motion.h1 
            variants={itemVariants}
            className="text-6xl md:text-[9.5rem] font-thin tracking-tighter leading-[0.8] text-[#020a41] lowercase mb-12"
            style={{ fontWeight: 100 }}
          >
            Maximize <br /> 
            <span className="text-black/20">Your Ad Reach</span>
          </motion.h1>
          <motion.p 
            variants={itemVariants}
            className="text-xl md:text-3xl text-black/60 leading-snug max-w-4xl font-light"
          >
            Accelerate your brand’s growth with expertly crafted paid ad campaigns. Kraftier Studio’s strategic approach ensures your ads connect with the right audience.
          </motion.p>
        </div>
      </section>

      {/* 2. PHILOSOPHY */}
      <section className="px-6 md:px-16 py-40 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <motion.div variants={itemVariants}>
            <p className="text-[10px] uppercase tracking-[0.5em] font-bold text-[#e92c2e] mb-10">Performance First</p>
            <h2 className="text-5xl md:text-7xl font-thin tracking-tighter leading-none mb-10 text-[#020a41]" style={{ fontWeight: 100 }}>
              Dynamic Solutions <br /> for Ad Growth.
            </h2>
            <p className="text-2xl font-light leading-relaxed text-black/50 mb-12">
              Our team delivers dynamic pay-per-click campaigns that drive real growth. With a focus on strategic planning and expert execution, we ensure your ads reach the right audience, providing measurable results and maximizing your marketing efforts.
            </p>
            <div className="w-24 h-px bg-black/10"></div>
          </motion.div>
          <motion.div 
            variants={itemVariants}
            className="aspect-square bg-[#f9f9f9] rounded-[4rem] overflow-hidden relative group shadow-2xl"
          >
            <img 
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1600&auto=format&fit=crop" 
              className="w-full h-full object-cover grayscale brightness-90 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000" 
              alt="Data Analytics and Performance"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#020a41]/20 to-transparent"></div>
          </motion.div>
        </div>
      </section>

      {/* 3. PILLARS (3 BOXES) */}
      <section className="px-6 md:px-16 py-40 bg-[#f4f4f4]">
        <div className="max-w-7xl mx-auto">
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
          <p className="text-[10px] uppercase tracking-[0.5em] font-bold text-[#e92c2e] mb-12">Performance Pillar</p>
          <h2 className="text-5xl md:text-8xl font-thin tracking-tighter leading-[0.9] mb-12 mx-auto max-w-4xl" style={{ fontWeight: 100 }}>
            Strategic Paid Ads <br /> For Lasting Growth.
          </h2>
          <p className="text-lg md:text-2xl text-white/60 font-light leading-relaxed max-w-3xl mx-auto">
            Get the most out of your ad spend with campaigns designed to meet your specific business goals. From targeting to optimization, our expert team ensures that every campaign maximizes visibility and conversions.
          </p>
        </div>
      </section>

      {/* 5. INFO GRID */}
      <section className="px-6 md:px-16 py-40 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16">
          {INFO_BLOCKS.map((block, i) => (
            <div key={i} className="space-y-8">
              <h4 className="text-2xl font-medium tracking-tight text-[#020a41]">{block.q}</h4>
              <p className="text-black/50 font-light leading-relaxed text-lg">
                {block.a}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 6. CAPABILITIES GRID (6 BOXES) */}
      <section className="px-6 md:px-16 py-40 bg-[#f9f9f9]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-24">
            <p className="text-[10px] uppercase tracking-[0.5em] font-bold text-[#e92c2e] mb-10">All-Inclusive Services</p>
            <h2 className="text-5xl md:text-8xl font-thin tracking-tighter leading-[0.9] text-[#020a41] mb-10" style={{ fontWeight: 100 }}>
              Boosting <br /> Conversions.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {CAPABILITIES_6.map((box, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -5 }}
                className="p-12 border border-black/5 rounded-[3rem] bg-white group hover:border-[#e92c2e]/20 hover:shadow-xl transition-all duration-500"
              >
                <h4 className="text-2xl font-medium tracking-tight text-[#020a41] mb-6 group-hover:text-[#e92c2e] transition-colors">{box.title}</h4>
                <p className="text-black/40 font-light leading-relaxed">{box.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. FAQS */}
      <section className="px-6 md:px-16 py-40 bg-[#f4f4f4] rounded-t-[4rem]">
        <div className="max-w-4xl mx-auto">
          <p className="text-center text-[10px] uppercase tracking-[0.5em] font-bold text-black/20 mb-16">Intelligence in Advertising</p>
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
          <p className="text-[10px] uppercase tracking-[0.5em] font-bold text-[#e92c2e] mb-12">Performance-driven strategies for high-growth brands</p>
          <h2 className="text-5xl md:text-[9rem] font-thin tracking-tighter text-[#020a41] mb-16 lowercase leading-[0.8]" style={{ fontWeight: 100 }}>
            Achieve <br /> <span className="text-[#e92c2e]">Remarkable Results.</span>
          </h2>
          <motion.button 
            onClick={onDiscoveryClick}
            whileHover={{ scale: 1.05 }}
            className="bg-[#020a41] text-white px-16 py-8 text-xs font-bold uppercase tracking-[0.4em] rounded-full"
          >
            Start Campaign Discovery
          </motion.button>
        </div>
      </section>
    </motion.div>
  );
};

export default PaidAdsService;