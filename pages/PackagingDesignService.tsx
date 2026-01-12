import React, { useState } from 'react';
import { motion, Variants, AnimatePresence } from 'framer-motion';

interface PackagingDesignServiceProps {
  onBack: () => void;
  onDiscoveryClick: () => void;
}

const PackagingDesignService: React.FC<PackagingDesignServiceProps> = ({ onBack, onDiscoveryClick }) => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const FAQS = [
    {
      q: "Why is packaging design so important?",
      a: "Packaging design is the first impression customers have of your product. It influences purchasing decisions, builds brand recognition, and communicates key benefits, making it a crucial part of your marketing strategy."
    },
    {
      q: "Can packaging affect brand perception?",
      a: "Absolutely. High-quality, thoughtfully designed packaging reflects the quality of the product inside and the values of your brand. It helps you build a strong, positive impression in the minds of your customers."
    },
    {
      q: "How does packaging design impact brand storytelling?",
      a: "Packaging is a powerful tool for storytelling. It allows you to communicate your brand’s story, values, and personality directly to consumers, creating a deeper emotional connection with your audience."
    }
  ];

  const PILLARS = [
    { 
      title: "Visibility", 
      text: "With our expertise in packaging design, we create eye-catching packaging that draws attention on crowded shelves, giving your product a competitive edge and encouraging consumers to choose your brand." 
    },
    { 
      title: "Consistency", 
      text: "We ensure your packaging design aligns with your brand’s identity, creating a cohesive look that reinforces your brand's message across all touchpoints, from the shelf to the consumer's hands." 
    },
    { 
      title: "Distinction", 
      text: "We prioritize shelf dominance and visual psychology. Our designs don't just sit on a rack; they command it, using contrast and form to seize the consumer’s attention and highlight your product's unique qualities." 
    }
  ];

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="bg-[#f9f9f9]">
      {/* 1. HERO - Massive padding for navbar logo clearance */}
      <section className="pt-[28rem] md:pt-[38rem] pb-32 px-6 md:px-16 relative overflow-hidden">
        <button onClick={onBack} className="text-[11px] uppercase tracking-[0.4em] font-bold text-black/40 mb-20 flex items-center gap-4 group">
          <span className="group-hover:-translate-x-2 transition-transform">←</span> Back to studio
        </button>
        <div className="max-w-6xl relative z-10">
          <p className="text-[#e92c2e] text-[12px] font-bold uppercase tracking-[0.5em] mb-8">Service Detail / 02</p>
          <h1 className="text-6xl md:text-[9.5rem] font-thin tracking-tighter leading-[0.8] text-[#020a41] lowercase mb-12" style={{ fontWeight: 100 }}>
            Wrap Your Brand <br /> 
            <span className="text-black/20">In Wonder</span>
          </h1>
          <p className="text-xl md:text-3xl text-black/60 leading-snug max-w-3xl font-light">
            Our packaging designs turn products into unforgettable experiences. With a perfect blend of visual appeal and strategic messaging, we ensure your product captivates customers and leaves a lasting impression.
          </p>
        </div>

        <div className="absolute top-1/2 right-0 translate-x-1/4 -translate-y-1/2 text-[30vw] font-thin opacity-[0.02] pointer-events-none select-none" style={{ fontWeight: 100 }}>
          Tactile
        </div>
      </section>

      {/* 2. NARRATIVE MURAL */}
      <section className="px-6 md:px-16 py-40 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-7">
            <h2 className="text-5xl md:text-8xl font-thin tracking-tighter text-[#020a41] lowercase leading-none mb-16" style={{ fontWeight: 100 }}>
              Designs That <br /> <span className="text-[#e92c2e]">Make an Impact</span>
            </h2>
            <div className="aspect-[16/9] bg-[#f9f9f9] rounded-[3rem] overflow-hidden shadow-2xl group cursor-crosshair">
              <img 
                src="https://images.unsplash.com/photo-1589118949245-7d38baf380d6?q=80&w=1600&auto=format&fit=crop" 
                alt="Product Packaging Design"
                className="w-full h-full object-cover grayscale brightness-90 transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-105" 
              />
            </div>
          </div>
          <div className="lg:col-span-5">
            <div className="mb-12">
              <span className="text-8xl font-serif text-[#e92c2e] opacity-20">“</span>
              <p className="text-3xl md:text-4xl font-light tracking-tight leading-tight text-[#020a41] -mt-10 mb-12">
                At Kraftier Studio, we craft packaging that draws in customers and highlights your product’s strengths. Our designs ensure your brand is memorable.
              </p>
            </div>
            <div className="h-px w-24 bg-black/10 mb-8"></div>
            <h4 className="text-[12px] uppercase tracking-[0.3em] font-bold text-black mb-1">Partners In Success Stories</h4>
            <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-black/30">Building Success Through Partnership</p>
          </div>
        </div>
      </section>

      {/* 3. PILLARS */}
      <section className="px-6 md:px-16 py-40 grid grid-cols-1 md:grid-cols-3 gap-8">
        {PILLARS.map((box, i) => (
          <div key={i} className="bg-white p-12 rounded-[2.5rem] border border-black/5 flex flex-col justify-between aspect-square group shadow-sm hover:shadow-xl transition-all duration-500">
             <div className="w-14 h-14 rounded-2xl bg-[#f9f9f9] flex items-center justify-center mb-10 group-hover:bg-[#e92c2e]/5 transition-colors">
               <span className="text-[10px] font-mono text-[#e92c2e] tracking-[0.3em]">0{i+1}</span>
             </div>
            <div>
              <h3 className="text-4xl font-medium tracking-tighter text-[#020a41] mb-6">{box.title}.</h3>
              <p className="text-black/50 leading-relaxed font-light">{box.text}</p>
            </div>
          </div>
        ))}
      </section>

      {/* 4. PHILOSOPHY */}
      <section className="px-6 md:px-16 py-40 bg-[#020a41] text-white rounded-[4rem] md:rounded-[6rem] mx-4 md:mx-8 relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <p className="text-[10px] uppercase tracking-[0.5em] font-bold text-[#e92c2e] mb-12">The Method</p>
          <h2 className="text-5xl md:text-8xl font-thin tracking-tighter leading-[0.9] mb-12 max-w-4xl" style={{ fontWeight: 100 }}>
            Designed To Capture Attention And Reflect Your Brand.
          </h2>
          <p className="text-lg md:text-xl text-white/60 font-light leading-relaxed max-w-2xl mb-12">
            Our approach ensures your packaging stands out, stays true to your brand, and meets high-market standards. We focus on creating designs that attract, communicate, and resonate with today’s discerning consumers.
          </p>
          <div className="w-24 h-px bg-white/20"></div>
        </div>
      </section>

      {/* 5. FAQS */}
      <section className="px-6 md:px-16 py-40 bg-white rounded-t-[4rem]">
        <div className="max-w-4xl mx-auto">
          <p className="text-center text-[10px] uppercase tracking-[0.5em] font-bold text-black/20 mb-16">Get to Know Our Process</p>
          <div className="space-y-4">
            {FAQS.map((faq, idx) => (
              <div key={idx} className="border-b border-black/5 last:border-0">
                <button onClick={() => setOpenFaq(openFaq === idx ? null : idx)} className="w-full py-8 flex justify-between items-center group text-left">
                  <span className="text-xl md:text-2xl font-medium tracking-tight text-[#020a41] group-hover:text-[#e92c2e] transition-colors">{faq.q}</span>
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
                      <p className="pb-8 text-black/50 font-light leading-relaxed max-w-2xl">{faq.a}</p>
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
        <h2 className="text-5xl md:text-[9rem] font-thin tracking-tighter text-[#020a41] mb-16 lowercase leading-[0.8]" style={{ fontWeight: 100 }}>
          From Shelf to <br /> <span className="text-[#e92c2e]">Shopping Cart.</span>
        </h2>
        <motion.button 
          onClick={onDiscoveryClick} 
          whileHover={{ scale: 1.05 }} 
          className="bg-[#020a41] text-white px-16 py-8 text-xs font-bold uppercase tracking-[0.4em] rounded-full shadow-lg hover:shadow-2xl transition-all"
        >
          Begin Packaging Discovery
        </motion.button>
      </section>
    </motion.div>
  );
};

export default PackagingDesignService;