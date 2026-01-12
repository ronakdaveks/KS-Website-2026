import React, { useState } from 'react';
import { motion, Variants, AnimatePresence } from 'framer-motion';

interface MarketingCollateralServiceProps {
  onBack: () => void;
  onDiscoveryClick: () => void;
}

const MarketingCollateralService: React.FC<MarketingCollateralServiceProps> = ({ onBack, onDiscoveryClick }) => {
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
      title: "Visuals", 
      text: "Craft marketing collateral that tells your brand story. We ensure every design aligns with your business goals and connects emotionally with your audience."
    },
    { 
      title: "Messaging", 
      text: "Your brand's voice matters. We create materials that maintain consistency in tone and style across all platforms, building trust and recognition."
    },
    { 
      title: "Branding", 
      text: "We ensure your marketing materials reflect a unified brand identity, from color palettes to typography, reinforcing your brand message."
    }
  ];

  const GRID_BOXES = [
    { title: "Tailored Solutions", text: "Every brand is unique, and so are our solutions. We develop customized marketing collateral tailored to your specific business needs, ensuring that your materials resonate." },
    { title: "Innovative Designs", text: "Our design team crafts visually striking materials that capture attention and communicate your story. Merging aesthetics with functionality to drive engagement." },
    { title: "Targeted Campaigns", text: "We create collateral tailored to specific campaigns, ensuring relevance and effectiveness. Optimized to drive conversions and connect with your audience." },
    { title: "User-Centric Design", text: "We prioritize your audience's needs. Our designs are crafted with user experience in mind, ensuring all materials are not only visually appealing but also intuitive." },
    { title: "Brand Evolution", text: "Brands must evolve to stay relevant. We help you refresh and update your collateral to reflect current trends while maintaining your core identity." },
    { title: "Adaptable Designs", text: "In a fast-paced market, flexibility is key. We design adaptable collateral that can be easily modified for different campaigns or audiences." }
  ];

  const FAQS = [
    {
      q: "How does marketing collateral improve customer engagement?",
      a: "Marketing collateral enhances customer engagement by visually communicating your brand’s message in a clear and compelling way. It helps to capture attention, build trust, and convey important information, guiding potential customers through the decision-making process."
    },
    {
      q: "Why is consistent branding important for marketing collateral?",
      a: "Consistent branding in marketing collateral enhances recognition and builds trust with your audience. It reinforces your brand identity, making it more memorable and professional. This uniformity streamlines the creation of materials, ensuring they align with your messaging."
    },
    {
      q: "How does high-quality collateral impact my business ROI?",
      a: "Premium collateral serves as a long-term investment in your brand equity. By presenting a professional and cohesive image, you reduce friction in the sales cycle, justify premium pricing, and increase conversion rates. Well-designed materials often have a 'pass-along' value that extends your reach organically."
    },
    {
      q: "Can Kraftier handle both print and digital collateral requirements?",
      a: "Yes, our team is equipped to bridge the gap between tactile print media and high-performance digital assets. We ensure your brand looks as impactful on a 4K display as it does on heavy-stock embossed paper, managing the technical nuances of color profiles and resolution for both worlds."
    },
    {
      q: "How often should marketing materials be updated to stay relevant?",
      a: "While core brand identity should remain stable, collateral should evolve with market trends and business growth. We recommend a design audit every 12-18 months to ensure your materials reflect current offerings and resonate with contemporary audience expectations."
    },
    {
      q: "What formats and assets are provided upon project completion?",
      a: "We provide a comprehensive digital asset package including print-ready PDFs with bleed/crop marks, web-optimized versions for social media and email, and high-resolution source files where applicable. We ensure you have everything needed for immediate implementation across all channels."
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
          <motion.p variants={itemVariants} className="text-[#e92c2e] text-[12px] font-bold uppercase tracking-[0.5em] mb-8">Brand Touchpoints / 06</motion.p>
          <motion.h1 
            variants={itemVariants}
            className="text-6xl md:text-[9.5rem] font-thin tracking-tighter leading-[0.8] text-[#020a41] lowercase mb-12"
            style={{ fontWeight: 100 }}
          >
            Marketing & <br /> 
            <span className="text-black/20">Brand Collateral</span>
          </motion.h1>
          <motion.p 
            variants={itemVariants}
            className="text-xl md:text-3xl text-black/60 leading-snug max-w-4xl font-light"
          >
            Kraftier Studio specialises in creating marketing and brand collateral that grabs attention and drives results. We ensure every piece reinforces your message.
          </motion.p>
        </div>
      </section>

      {/* 2. PHILOSOPHY */}
      <section className="px-6 md:px-16 py-40 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <motion.div variants={itemVariants}>
            <p className="text-[10px] uppercase tracking-[0.5em] font-bold text-[#e92c2e] mb-10">Brand Storytelling</p>
            <h2 className="text-5xl md:text-7xl font-thin tracking-tighter leading-none mb-10 text-[#020a41]" style={{ fontWeight: 100 }}>
              Your Brand Story <br /> in Every Design.
            </h2>
            <p className="text-2xl font-light leading-relaxed text-black/50 mb-12">
              From brochures to business cards, Kraftier Studio delivers cohesive marketing materials that showcase your brand’s personality and professionalism. Every detail aligns with your message.
            </p>
            <div className="w-24 h-px bg-black/10"></div>
          </motion.div>
          <motion.div 
            variants={itemVariants}
            className="aspect-[4/5] bg-[#f9f9f9] rounded-[4rem] overflow-hidden relative group shadow-2xl"
          >
            <img 
              src="https://images.unsplash.com/photo-1586717791821-3f44a563eb4c?q=80&w=1600&auto=format&fit=crop" 
              className="w-full h-full object-cover grayscale brightness-90 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000" 
              alt="Brand Collateral Design"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#020a41]/20 to-transparent"></div>
          </motion.div>
        </div>
      </section>

      {/* 3. PILLARS */}
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
                <p className="text-black/50 font-light leading-relaxed">{p.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. DETAIL MURAL */}
      <section className="px-6 md:px-16 py-40 bg-[#020a41] text-white rounded-[4rem] md:rounded-[6rem] mx-4 md:mx-8 relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <p className="text-[10px] uppercase tracking-[0.5em] font-bold text-[#e92c2e] mb-12">The Impact</p>
          <h2 className="text-5xl md:text-8xl font-thin tracking-tighter leading-[0.9] mb-12 max-w-4xl" style={{ fontWeight: 100 }}>
            Materials That <br /> Resonate & Inspire.
          </h2>
          <p className="text-lg md:text-xl text-white/60 font-light leading-relaxed max-w-2xl">
            We craft marketing materials that go beyond aesthetics, ensuring they connect with your audience on a deeper level. Every piece we create is designed to resonate and inspire action.
          </p>
        </div>
      </section>

      {/* 5. STRATEGY GRID */}
      <section className="px-6 md:px-16 py-40 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-24">
            <p className="text-[10px] uppercase tracking-[0.5em] font-bold text-[#e92c2e] mb-10">Collateral Ecosystem</p>
            <h2 className="text-5xl md:text-8xl font-thin tracking-tighter leading-[0.9] text-[#020a41] mb-10" style={{ fontWeight: 100 }}>
              Powerful <br /> Communication.
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

      {/* 6. FAQS */}
      <section className="px-6 md:px-16 py-40 bg-[#f4f4f4] rounded-t-[4rem]">
        <div className="max-w-4xl mx-auto">
          <p className="text-center text-[10px] uppercase tracking-[0.5em] font-bold text-black/20 mb-16">Intelligence in Design</p>
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
          <p className="text-[10px] uppercase tracking-[0.5em] font-bold text-[#e92c2e] mb-12">Design that stays with your audience</p>
          <h2 className="text-5xl md:text-[9rem] font-thin tracking-tighter text-[#020a41] mb-16 lowercase leading-[0.8]" style={{ fontWeight: 100 }}>
            Impact in <br /> <span className="text-[#e92c2e]">Every Touchpoint.</span>
          </h2>
          <motion.button 
            onClick={onDiscoveryClick}
            whileHover={{ scale: 1.05 }}
            className="bg-[#020a41] text-white px-16 py-8 text-xs font-bold uppercase tracking-[0.4em] rounded-full"
          >
            Begin Discovery
          </motion.button>
        </div>
      </section>
    </motion.div>
  );
};

export default MarketingCollateralService;