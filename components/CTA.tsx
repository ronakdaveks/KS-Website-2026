
import React from 'react';

const CTA: React.FC = () => {
  return (
    <section id="contact" className="py-48 px-6 md:px-12 text-center bg-[#020a41] text-[#fef4f3]">
      <div className="max-w-5xl mx-auto">
        <div className="mb-12 inline-block px-6 py-2 rounded-full border border-[#e92c2e]/20 bg-[#e92c2e]/5 text-[10px] font-bold tracking-[0.4em] uppercase text-[#e92c2e]">
          Next Step
        </div>
        <h2 className="text-6xl md:text-[10rem] font-bold tracking-tighter mb-16 leading-[0.8] uppercase">
          Build <br/> 
          <span className="text-[#e92c2e]">Forward.</span>
        </h2>
        
        <div className="flex flex-col md:flex-row justify-center items-center gap-10 mt-20">
          <button className="group relative w-full md:w-auto px-16 py-8 rounded-full bg-[#e92c2e] text-white text-xs font-bold uppercase tracking-[0.3em] transition-all duration-500 hover:scale-105 hover:shadow-[0_0_40px_rgba(233,44,46,0.4)] overflow-hidden">
            <span className="relative z-10">Start Project</span>
            <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
          </button>
          
          <div className="flex flex-col items-center md:items-start">
            <span className="text-[10px] font-mono opacity-40 uppercase mb-2 tracking-widest">Inquiries</span>
            <a href="mailto:hello@kraftier.studio" className="text-xl font-medium tracking-tight border-b border-[#e92c2e] pb-1 hover:text-[#e92c2e] transition-all">
              hello@kraftier.studio
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
