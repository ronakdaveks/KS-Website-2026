
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-[#0a0a0a] text-white px-6 md:px-12 py-20">
      <div className="max-w-[1380px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-16 md:gap-8">
          
          <div className="max-w-2xl">
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter leading-none mb-8">
              have a project <br /> in mind?
            </h2>
            <a href="mailto:sayhello@kraftierstudio.com" className="text-xl md:text-2xl font-medium text-white/40 hover:text-white transition-colors flex items-center gap-2 group">
              sayhello@kraftierstudio.com
              <span className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">↗</span>
            </a>
          </div>

          <div className="flex flex-col items-end gap-12">
            <div className="flex gap-6">
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all">ig</a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all">in</a>
            </div>
            <div className="text-[10px] font-mono text-white/20 uppercase tracking-[0.2em]">
              © 2025 Kraftier Studio
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
