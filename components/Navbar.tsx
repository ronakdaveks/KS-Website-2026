import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';

interface NavbarProps {
  onNavigate?: (page: 'home' | 'logo-design' | 'packaging-design' | 'webflow-website' | 'wordpress-website' | 'seo' | 'marketing-collateral' | 'paid-ads' | 'linkedin-management' | 'content-creation') => void;
  onContactClick?: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onNavigate, onContactClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleLinkClick = (page: 'home' | 'logo-design' | 'packaging-design' | 'webflow-website' | 'wordpress-website' | 'seo' | 'marketing-collateral' | 'paid-ads' | 'linkedin-management' | 'content-creation') => {
    setIsMenuOpen(false);
    onNavigate?.(page);
  };

  const handleContactAction = () => {
    setIsMenuOpen(false);
    onContactClick?.();
  };

  const menuVariants: Variants = {
    closed: {
      clipPath: 'circle(0% at 95% 5%)',
      transition: {
        type: 'spring' as const,
        stiffness: 400,
        damping: 40,
        delay: 0.2
      }
    },
    opened: {
      clipPath: 'circle(150% at 95% 5%)',
      transition: {
        type: 'spring' as const,
        stiffness: 20,
        restDelta: 2
      }
    }
  };

  const navLinkVariants: Variants = {
    closed: { opacity: 0, y: 20 },
    opened: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.2 + (i * 0.05),
        duration: 0.8,
        ease: [0.19, 1, 0.22, 1] as const
      }
    })
  };

  const SERVICE_GROUPS = [
    {
      category: 'Design',
      items: [
        { label: 'Logo & Brand Identity', path: 'logo-design' },
        { label: 'Packaging Design', path: 'packaging-design' },
        { label: 'Marketing Collateral', path: 'marketing-collateral' }
      ]
    },
    {
      category: 'Digital',
      items: [
        { label: 'Webflow Websites', path: 'webflow-website' },
        { label: 'Wordpress Websites', path: 'wordpress-website' },
        { label: 'Search Engine Optimization', path: 'seo' }
      ]
    },
    {
      category: 'Marketing',
      items: [
        { label: 'Paid Advertising', path: 'paid-ads' },
        { label: 'Content Creation', path: 'content-creation' },
        { label: 'LinkedIn Management', path: 'linkedin-management' }
      ]
    }
  ];

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 w-full z-[120] transition-all duration-1000 ease-[cubic-bezier(0.19,1,0.22,1)] ${
          isScrolled && !isMenuOpen 
            ? 'bg-white/70 backdrop-blur-2xl saturate-[150%] border-b border-black/[0.04] shadow-[0_8px_32px_rgba(0,0,0,0.02)]' 
            : 'bg-transparent border-b border-transparent'
        }`}
      >
        <div className={`flex justify-between items-start px-6 md:px-16 transition-all duration-1000 ease-[cubic-bezier(0.19,1,0.22,1)] ${
          isScrolled && !isMenuOpen ? 'py-5' : 'py-20 md:py-24'
        }`}>
          <div className="flex items-start gap-24">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              onClick={() => handleLinkClick('home')}
              className="cursor-pointer group relative z-[130]"
            >
              <div 
                className={`flex flex-col leading-[0.78] tracking-tighter transition-all duration-1000 ease-[cubic-bezier(0.19,1,0.22,1)] font-thin ${
                  isScrolled && !isMenuOpen 
                    ? 'text-[28px] md:text-[32px]' 
                    : 'text-[72px] md:text-[110px]'
                } ${isMenuOpen ? 'text-white' : 'text-[#e92c2e]'}`}
                style={{ fontWeight: 100 }}
              >
                <span>Kraftier</span>
                <span>Studio</span>
              </div>
            </motion.div>

            <div className={`hidden md:flex gap-12 mt-10 text-[13px] tracking-[0.2em] font-bold transition-all duration-1000 ease-[cubic-bezier(0.19,1,0.22,1)] relative z-[130] ${
              isScrolled && !isMenuOpen ? 'opacity-100 translate-y-0 mt-3' : 'opacity-0 -translate-y-8 pointer-events-none'
            } ${isMenuOpen ? 'text-white/60' : 'text-black/40'}`}>
              <button onClick={() => handleLinkClick('home')} className="hover:text-black transition-colors uppercase">studio</button>
              <a href="#work" className="hover:text-black transition-colors uppercase">work</a>
            </div>
          </div>
          
          <div className="flex items-center gap-10 relative z-[130]">
            <button 
              onClick={handleContactAction} 
              className={`hidden md:block px-10 py-4 text-[11px] font-bold uppercase tracking-[0.3em] hover:scale-105 transition-all duration-1000 ease-[cubic-bezier(0.19,1,0.22,1)] ${
                isScrolled && !isMenuOpen ? 'mt-0' : 'mt-8'
              } ${isMenuOpen ? 'bg-white text-[#020a41]' : 'bg-black text-white'}`}
            >
              start project
            </button>

            <button 
              onClick={toggleMenu}
              className={`p-4 -mr-4 flex flex-col gap-[8.5px] group transition-all duration-1000 ease-[cubic-bezier(0.19,1,0.22,1)] ${
                isScrolled && !isMenuOpen ? 'mt-0' : 'mt-4'
              }`}
              aria-label="Toggle Menu"
            >
              <motion.div 
                animate={isMenuOpen ? { rotate: 45, y: 5 } : { rotate: 0, y: 0 }}
                className={`w-9 h-[1.5px] ${isMenuOpen ? 'bg-white' : 'bg-black'} transition-colors duration-300`}
              ></motion.div>
              <motion.div 
                animate={isMenuOpen ? { rotate: -45, y: -5 } : { rotate: 0, y: 0 }}
                className={`w-9 h-[1.5px] ${isMenuOpen ? 'bg-white' : 'bg-black'} transition-colors duration-300`}
              ></motion.div>
            </button>
          </div>
        </div>
      </nav>

      <AnimatePresence mode="wait">
        {isMenuOpen && (
          <motion.div 
            initial="closed"
            animate="opened"
            exit="closed"
            variants={menuVariants}
            className="fixed inset-0 z-[110] bg-[#020a41] text-[#f9f9f9] flex flex-col lg:flex-row p-10 md:p-24 overflow-y-auto"
          >
            {/* Left Column: Context (Desktop only) */}
            <div className="hidden lg:flex flex-col justify-end w-1/4 border-r border-white/10 pr-10 pb-10">
              <div className="space-y-8 mb-10">
                <p className="text-white/40 text-sm font-light leading-relaxed max-w-[240px]">
                  we believe in the power of reduction. stripping away the non-essential to reveal core truths.
                </p>
                <div className="text-[#e92c2e] text-sm font-medium tracking-wide">sayhello@kraftier.studio</div>
              </div>
              <div className="text-[10px] uppercase tracking-[0.4em] text-white/20 font-bold">kraftier studio — since 2016</div>
            </div>

            {/* Middle Column: General Navigation */}
            <div className="flex-1 flex flex-col justify-center items-start lg:pl-20 mt-28 lg:mt-0">
              <div className="flex flex-col items-start gap-4 mb-16">
                <p className="text-[10px] uppercase tracking-[0.5em] text-white/20 mb-4 font-bold">General</p>
                {['studio', 'work', 'contact'].map((item, i) => (
                  <motion.button
                    key={item}
                    custom={i}
                    variants={navLinkVariants}
                    onClick={item === 'contact' ? handleContactAction : () => handleLinkClick('home')}
                    className="text-6xl md:text-8xl font-thin tracking-tighter lowercase hover:text-[#e92c2e] transition-colors"
                    style={{ fontWeight: 100 }}
                  >
                    {item}
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Right Column: Specialized Navigation (Grouped like Studio page) */}
            <div className="w-full lg:w-1/3 flex flex-col justify-center mt-12 lg:mt-0 lg:border-l lg:border-white/10 lg:pl-16">
              <p className="text-[10px] uppercase tracking-[0.5em] text-white/20 mb-10 font-bold">Specialized Services</p>
              
              <div className="grid grid-cols-1 gap-12">
                {SERVICE_GROUPS.map((group, groupIdx) => (
                  <div key={group.category}>
                    <motion.h4 
                      custom={groupIdx + 4}
                      variants={navLinkVariants}
                      className="text-[10px] uppercase tracking-[0.4em] font-bold text-white/30 mb-6"
                    >
                      {group.category}
                    </motion.h4>
                    <div className="flex flex-col items-start gap-3">
                      {group.items.map((item, itemIdx) => (
                        <motion.button
                          key={item.path}
                          custom={groupIdx * 3 + itemIdx + 7}
                          variants={navLinkVariants}
                          onClick={() => handleLinkClick(item.path as any)}
                          className="text-xl md:text-2xl font-thin tracking-tighter lowercase hover:text-[#e92c2e] transition-colors text-left"
                          style={{ fontWeight: 100 }}
                        >
                          {item.label}
                        </motion.button>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Mobile Socials */}
              <div className="lg:hidden mt-20 pt-10 border-t border-white/10 flex flex-col gap-6">
                 <div className="text-[#e92c2e] text-sm font-medium tracking-wide">sayhello@kraftier.studio</div>
                 <div className="text-[10px] uppercase tracking-[0.4em] text-white/20 font-bold">since 2016</div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;