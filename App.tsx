import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar.tsx';
import Hero from './components/Hero.tsx';
import SelectedWorks from './components/SelectedWorks.tsx';
import StudioServices from './components/StudioServices.tsx';
import Footer from './components/Footer.tsx';
import LogoIdentityService from './pages/LogoIdentityService.tsx';
import PackagingDesignService from './pages/PackagingDesignService.tsx';
import WebflowWebsiteService from './pages/WebflowWebsiteService.tsx';
import WordpressWebsiteService from './pages/WordpressWebsiteService.tsx';
import SeoService from './pages/SeoService.tsx';
import MarketingCollateralService from './pages/MarketingCollateralService.tsx';
import PaidAdsService from './pages/PaidAdsService.tsx';
import LinkedInManagementService from './pages/LinkedInManagementService.tsx';
import ContentCreationService from './pages/ContentCreationService.tsx';
import ContactDrawer from './components/ContactDrawer.tsx';

type PageState = 'home' | 'logo-design' | 'packaging-design' | 'webflow-website' | 'wordpress-website' | 'seo' | 'marketing-collateral' | 'paid-ads' | 'linkedin-management' | 'content-creation';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<PageState>('home');
  const [isContactOpen, setIsContactOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const navigateTo = (page: PageState) => {
    setCurrentPage(page);
  };

  const toggleContact = () => setIsContactOpen(!isContactOpen);

  return (
    <div className="relative antialiased bg-[#f9f9f9]">
      <Navbar 
        onNavigate={navigateTo} 
        onContactClick={toggleContact} 
      />
      
      <main className="relative z-10">
        {currentPage === 'home' && (
          <>
            <Hero />
            <SelectedWorks />
            <StudioServices onServiceClick={(service) => {
              const s = service.toLowerCase();
              if (s.includes('logo')) navigateTo('logo-design');
              else if (s.includes('packaging')) navigateTo('packaging-design');
              else if (s.includes('webflow')) navigateTo('webflow-website');
              else if (s.includes('wordpress')) navigateTo('wordpress-website');
              else if (s.includes('search engine optimization') || s.includes('seo')) navigateTo('seo');
              else if (s.includes('collateral')) navigateTo('marketing-collateral');
              else if (s.includes('paid ads')) navigateTo('paid-ads');
              else if (s.includes('linkedin')) navigateTo('linkedin-management');
              else if (s.includes('content creation')) navigateTo('content-creation');
              else toggleContact();
            }} />
          </>
        )}

        {currentPage === 'logo-design' && (
          <LogoIdentityService 
            onBack={() => navigateTo('home')} 
            onDiscoveryClick={toggleContact} 
          />
        )}

        {currentPage === 'packaging-design' && (
          <PackagingDesignService 
            onBack={() => navigateTo('home')} 
            onDiscoveryClick={toggleContact} 
          />
        )}

        {currentPage === 'webflow-website' && (
          <WebflowWebsiteService 
            onBack={() => navigateTo('home')} 
            onDiscoveryClick={toggleContact} 
          />
        )}

        {currentPage === 'wordpress-website' && (
          <WordpressWebsiteService 
            onBack={() => navigateTo('home')} 
            onDiscoveryClick={toggleContact} 
          />
        )}

        {currentPage === 'seo' && (
          <SeoService 
            onBack={() => navigateTo('home')} 
            onDiscoveryClick={toggleContact} 
          />
        )}

        {currentPage === 'marketing-collateral' && (
          <MarketingCollateralService 
            onBack={() => navigateTo('home')} 
            onDiscoveryClick={toggleContact} 
          />
        )}

        {currentPage === 'paid-ads' && (
          <PaidAdsService 
            onBack={() => navigateTo('home')} 
            onDiscoveryClick={toggleContact} 
          />
        )}

        {currentPage === 'linkedin-management' && (
          <LinkedInManagementService 
            onBack={() => navigateTo('home')} 
            onDiscoveryClick={toggleContact} 
          />
        )}

        {currentPage === 'content-creation' && (
          <ContentCreationService 
            onBack={() => navigateTo('home')} 
            onDiscoveryClick={toggleContact} 
          />
        )}
      </main>

      <Footer />
      <ContactDrawer isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
    </div>
  );
};

export default App;
