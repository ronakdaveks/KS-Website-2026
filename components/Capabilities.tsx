import React from 'react';

const Capabilities: React.FC = () => {
  return (
    <section id="capabilities" className="py-32 px-6 md:px-12 bg-[#1A1A1A] text-[#F8F7F4]">
      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div>
            <p className="text-[10px] uppercase tracking-[0.4em] font-bold text-white/30 mb-8">Philosophy</p>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter leading-[1.1] mb-8">
              Intelligence in <br/> every <span className="font-serif font-light opacity-80">detail.</span>
            </h2>
            <p className="text-lg md:text-xl text-white/60 leading-relaxed font-light mb-12">
              Our process is built on restraint. We don't over-design; we distill your message down to its purest form. By removing the unnecessary, we amplify the essential.
            </p>
            
            <div className="grid grid-cols-2 gap-8 pt-8 border-t border-white/10">
              <div>
                <h4 className="text-sm font-bold uppercase tracking-widest mb-4 opacity-40">Method</h4>
                <p className="text-sm text-white/60">Discovery-first architecture followed by aesthetic refinement.</p>
              </div>
              <div>
                <h4 className="text-sm font-bold uppercase tracking-widest mb-4 opacity-40">Outcome</h4>
                <p className="text-sm text-white/60">High-conversion assets that double as brand landmarks.</p>
              </div>
            </div>
          </div>

          <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
            <img 
              src="https://picsum.photos/800/1000?grayscale&random=99" 
              className="w-full h-full object-cover opacity-80"
              alt="Studio Interior"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <div className="absolute bottom-12 left-12">
              <p className="text-xs font-mono text-white/50 tracking-widest">KRAFTIER HQ / 40.7128° N, 74.0060° W</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Capabilities;