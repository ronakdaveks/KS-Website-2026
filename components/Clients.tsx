
import React from 'react';

const LOGOS = [
  'VANGUARD', 'AETHER', 'LUMOS', 'ORBIT', 'KINETIC', 'PRISM'
];

const Clients: React.FC = () => {
  return (
    <section className="py-24 border-b border-black/5">
      <div className="px-6 md:px-12 max-w-[1440px] mx-auto">
        <p className="text-center text-[10px] uppercase tracking-[0.5em] font-bold text-black/20 mb-16">Trusted by Ambitious Founders</p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-12 md:gap-24">
          {LOGOS.map((logo) => (
            <div key={logo} className="flex items-center justify-center grayscale opacity-20 hover:opacity-100 hover:grayscale-0 transition-all duration-700 cursor-default">
              <span className="text-xl md:text-2xl font-bold tracking-tighter opacity-80">{logo}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
