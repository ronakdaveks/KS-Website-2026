
import React from 'react';
import { motion } from 'framer-motion';

const SERVICE_ITEMS = [
  {
    number: '01',
    title: 'Brand Strategy',
    desc: 'Defining the intellectual foundation of your brand through rigorous positioning and narrative design.'
  },
  {
    number: '02',
    title: 'Visual Identity',
    desc: 'Crafting sophisticated visual systems that resonate with high-value audiences and command presence.'
  },
  {
    number: '03',
    title: 'Digital Experience',
    desc: 'Motion-driven interfaces that blend functional excellence with aesthetic delight.'
  }
];

const Services: React.FC = () => {
  return (
    <section id="services" className="relative py-40 px-6 md:px-12 bg-[#fef4f3] z-10">
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-20">
        
        <div className="lg:col-span-4 lg:sticky lg:top-40 h-fit">
          <p className="text-[10px] uppercase tracking-[0.4em] font-bold text-[#e92c2e] mb-6">Expertise</p>
          <h2 className="text-6xl font-[100] tracking-tighter leading-none text-[#020a41] mb-8">
            The Studio <br/>Engine.
          </h2>
          <div className="h-1 w-16 bg-[#e92c2e]"></div>
        </div>

        <div className="lg:col-span-8 flex flex-col gap-4">
          {SERVICE_ITEMS.map((item, idx) => (
            <motion.div 
              key={idx} 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.8 }}
              className="group border-b border-[#020a41]/5 py-16 flex flex-col md:flex-row gap-12 items-start last:border-0 hover:bg-white/40 transition-all duration-700 px-8 -mx-8 rounded-[2rem]"
            >
              <span className="text-sm font-mono font-bold text-[#e92c2e] mt-2">{item.number}</span>
              <div className="flex-1">
                <h3 className="text-4xl md:text-6xl font-[100] tracking-tighter text-[#020a41] group-hover:translate-x-4 transition-transform duration-700 ease-[cubic-bezier(0.23,1,0.32,1)]">{item.title}</h3>
                <p className="mt-6 text-[#020a41]/60 max-w-lg text-lg leading-relaxed font-[300]">
                  {item.desc}
                </p>
              </div>
              <motion.div 
                whileHover={{ rotate: 45, backgroundColor: '#e92c2e', color: '#fff' }}
                className="w-12 h-12 rounded-full border border-[#020a41]/10 flex items-center justify-center transition-all duration-500"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
