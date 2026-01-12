
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface ContactDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactDrawer: React.FC<ContactDrawerProps> = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[200]"
          />
          <motion.div 
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 h-full w-full md:w-[500px] bg-white z-[210] shadow-2xl p-10 md:p-16 flex flex-col"
          >
            <div className="flex justify-between items-center mb-20">
              <span className="text-[10px] uppercase tracking-[0.5em] font-bold text-black/20">Discovery Inquiry</span>
              <button onClick={onClose} className="p-2 hover:rotate-90 transition-transform">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              </button>
            </div>

            <h2 className="text-5xl font-[100] tracking-tighter text-[#020a41] lowercase mb-12">Tell us about <br /> <span className="text-[#e92c2e]">your vision.</span></h2>
            
            <form className="space-y-8 flex-1" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="text-[10px] uppercase tracking-widest font-bold text-black/40 block mb-4">Name</label>
                <input type="text" className="w-full bg-transparent border-b border-black/10 py-4 focus:border-[#e92c2e] outline-none transition-colors font-light text-xl" placeholder="Full name" />
              </div>
              <div>
                <label className="text-[10px] uppercase tracking-widest font-bold text-black/40 block mb-4">Email</label>
                <input type="email" className="w-full bg-transparent border-b border-black/10 py-4 focus:border-[#e92c2e] outline-none transition-colors font-light text-xl" placeholder="hello@company.com" />
              </div>
              <div>
                <label className="text-[10px] uppercase tracking-widest font-bold text-black/40 block mb-4">Project Details</label>
                <textarea rows={4} className="w-full bg-transparent border-b border-black/10 py-4 focus:border-[#e92c2e] outline-none transition-colors font-light text-xl resize-none" placeholder="What are we building?" />
              </div>

              <div className="pt-10">
                <button className="w-full bg-[#020a41] text-white py-6 text-xs font-bold uppercase tracking-[0.4em] rounded-full hover:scale-[1.02] transition-transform">
                  Submit Discovery
                </button>
              </div>
            </form>

            <div className="mt-auto pt-10 text-[10px] uppercase tracking-[0.3em] font-bold text-black/20 text-center">
              Response within 24 hours
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ContactDrawer;
