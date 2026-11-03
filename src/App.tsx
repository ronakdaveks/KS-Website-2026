import { useEffect, useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SmoothScroll, Transitions } from './motion';
import Preloader from './components/Preloader';
import Cursor from './components/Cursor';
import Nav from './components/Nav';
import Studio from './pages/Studio';
import Work from './pages/Work';
import Journal from './pages/Journal';
import Contact from './pages/Contact';

export default function App() {
  const [ready, setReady] = useState(false);
  const loc = useLocation();
  useEffect(() => { const t = setTimeout(() => ScrollTrigger.refresh(), 100); return () => clearTimeout(t); }, [loc.pathname]);
  return (
    <Transitions ready={ready}>
      <SmoothScroll />
      <Cursor />
      <Nav />
      <main key={loc.pathname}>
        <Routes location={loc}>
          <Route path="/" element={<Studio />} />
          <Route path="/work" element={<Work />} />
          <Route path="/journal" element={<Journal />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Preloader onDone={() => setReady(true)} />
    </Transitions>
  );
}
