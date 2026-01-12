
import React from 'react';
import { motion } from 'framer-motion';

const PROJECTS = [
  {
    id: 1,
    title: 'monospace',
    category: 'branding / interior',
    img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1380&h=1080&auto=format&fit=crop'
  },
  {
    id: 2,
    title: 'objet noir',
    category: 'art direction',
    img: 'https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?q=80&w=1380&h=1080&auto=format&fit=crop'
  },
  {
    id: 3,
    title: 'vogue edit',
    category: 'editorial',
    img: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=1380&h=1080&auto=format&fit=crop'
  },
  {
    id: 4,
    title: 'lunar labs',
    category: 'web experience',
    img: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1380&h=1080&auto=format&fit=crop'
  },
  {
    id: 5,
    title: 'aether project',
    category: 'branding systems',
    img: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1380&h=1080&auto=format&fit=crop'
  }
];

const SelectedWorks: React.FC = () => {
  return (
    <section 
      id="work" 
      className="relative bg-white pt-40 pb-40 overflow-hidden"
    >
      {/* Header matching the 01-05 pagination aesthetic */}
      <div className="px-6 md:px-16 mb-16 flex justify-between items-baseline">
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-[11px] uppercase tracking-[0.5em] font-bold text-black/20"
        >
          SELECTED PROJECTS
        </motion.p>
        <div className="text-[11px] font-mono text-black/20 tracking-[0.3em]">
          01 &mdash; 05
        </div>
      </div>

      <div className="relative">
        <div className="flex overflow-x-auto overflow-y-hidden snap-x snap-mandatory gap-8 md:gap-16 px-6 md:px-16 no-scrollbar pb-10">
          {PROJECTS.map((project, idx) => (
            <div 
              key={project.id}
              className="flex-none w-[85vw] md:w-[45vw] lg:w-[35vw] snap-start"
            >
              <motion.div 
                className="group flex flex-col"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: idx * 0.1 }}
                viewport={{ once: true }}
              >
                {/* Image Container - 3:4 Portrait */}
                <div className="aspect-[3/4] overflow-hidden bg-[#f9f9f9] mb-10 cursor-pointer relative shadow-sm hover:shadow-2xl transition-all duration-700">
                  <motion.img 
                    src={project.img} 
                    alt={project.title}
                    className="w-full h-full object-cover grayscale brightness-95 transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:grayscale-0 group-hover:scale-105 group-hover:brightness-100"
                  />
                </div>

                {/* Captions Underneath */}
                <div className="flex flex-col gap-1.5">
                  <h3 className="text-3xl font-medium tracking-tight text-[#020a41] lowercase group-hover:text-[#e92c2e] transition-colors cursor-pointer">
                    {project.title}
                  </h3>
                  <p className="text-[13px] text-black/30 lowercase font-medium tracking-wide">
                    {project.category}
                  </p>
                </div>
              </motion.div>
            </div>
          ))}
          <div className="flex-none w-[10vw]"></div>
        </div>
      </div>
    </section>
  );
};

export default SelectedWorks;
