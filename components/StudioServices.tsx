
import React from 'react';
import { motion } from 'framer-motion';

const SERVICES = [
  {
    category: 'Design',
    items: ['Logo & Brand Identity Design', 'Packaging Design', 'Marketing Collateral Design']
  },
  {
    category: 'Digital',
    items: ['Webflow Websites', 'Wordpress Websites', 'Search Engine Optimization']
  },
  {
    category: 'Marketing',
    items: ['Paid Ads', 'Content Creation', 'LinkedIn Management']
  }
];

interface StudioServicesProps {
  onServiceClick?: (service: string) => void;
}

const StudioServices: React.FC<StudioServicesProps> = ({ onServiceClick }) => {
  return (
    <section id="studio" className="py-40 px-6 md:px-12 bg-[#0a0a0a] text-white rounded-t-[3rem] md:rounded-t-[5rem]">
      <div className="max-w-[1380px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
          
          {/* Left Column: About */}
          <div className="lg:col-span-7">
            <p className="text-[10px] uppercase tracking-[0.4em] font-bold text-white/30 mb-12">The Studio</p>
            <h2 className="text-6xl md:text-[8rem] font-[100] tracking-tighter leading-[0.8] mb-16">
              intelligence <br />
              <span className="text-white/40">made visible.</span>
            </h2>
            <div className="w-1/2 h-[1px] bg-white/10 mb-16"></div>
            <p className="max-w-md text-lg text-white/60 leading-relaxed font-light">
              we believe in the power of reduction. stripping away the non-essential to reveal the core truth of a brand. our approach is rooted in typographic rigor and spatial awareness.
            </p>
          </div>

          {/* Right Column: Services */}
          <div className="lg:col-span-5 flex flex-col justify-end">
             <p className="text-[10px] uppercase tracking-[0.4em] font-bold text-white/30 mb-10">Services</p>
             <div className="space-y-12">
               {SERVICES.map((group) => (
                 <div key={group.category} className="group">
                   <h4 className="text-[11px] uppercase tracking-widest font-bold text-white/40 group-hover:text-white transition-colors mb-4">
                     {group.category}
                   </h4>
                   <div className="flex flex-col gap-2">
                     {group.items.map((item) => (
                       <button 
                        key={item} 
                        onClick={() => onServiceClick?.(item)}
                        className="text-left text-lg md:text-xl font-medium tracking-tight hover:text-[#e92c2e] transition-colors inline-block cursor-pointer"
                       >
                         {item}
                       </button>
                     ))}
                   </div>
                 </div>
               ))}
             </div>

             <div className="mt-20">
                <p className="text-[10px] uppercase tracking-[0.4em] font-bold text-white/30 mb-6">Partners</p>
                <div className="flex flex-wrap gap-6 text-[10px] font-bold tracking-widest opacity-40 uppercase">
                  <span>Linear</span>
                  <span>Vercel</span>
                  <span>Stripe</span>
                  <span>Acme</span>
                </div>
             </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default StudioServices;
