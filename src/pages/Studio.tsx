import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { Split, Reveal, TLink, useApp } from '../motion';
import Marquee from '../components/Marquee';
import WorkCard from '../components/WorkCard';
import Footer from '../components/Footer';
import { projects, services } from '../data';

function Hero() {
  const orb = useRef<HTMLDivElement>(null);
  const { ready } = useApp();
  useLayoutEffect(() => {
    const t = gsap.to(orb.current, { yPercent: 40, scale: 1.25, ease: 'none', scrollTrigger: { trigger: orb.current, start: 'top 20%', end: '+=900', scrub: true } });
    const mm = (e: MouseEvent) => gsap.to(orb.current, { x: (e.clientX / innerWidth - 0.5) * 60, duration: 1.5, ease: 'power3' });
    window.addEventListener('mousemove', mm);
    return () => { t.scrollTrigger?.kill(); t.kill(); window.removeEventListener('mousemove', mm); };
  }, []);
  return (
    <section className="hero">
      <div className="orb" ref={orb} />
      <p className="eyebrow" style={{ marginBottom: 24, opacity: ready ? 1 : 0, transition: 'opacity 1s .6s' }}>Design & growth studio — Est. 2020</p>
      <h1 className="h-xl">
        <Split as="span" className="line" text="We craft" scroll={false} />
        <Split as="span" className="line" text="brands that" scroll={false} delay={0.1} />
        <span className="line"><Split as="span" className="serif" text="move." scroll={false} delay={0.2} /></span>
      </h1>
      <div className="hero-foot">
        <Reveal><p>Websites, identity, content and performance — one studio, built to make your brand impossible to scroll past.</p></Reveal>
        <div className="scroll-hint eyebrow"><b />Scroll</div>
      </div>
    </section>
  );
}

function HorizontalWork() {
  const sec = useRef<HTMLElement>(null);
  const track = useRef<HTMLDivElement>(null);
  const bar = useRef<HTMLElement>(null);
  useLayoutEffect(() => {
    const mm = gsap.matchMedia();
    mm.add('(min-width: 761px)', () => {
      const dist = () => track.current!.scrollWidth - window.innerWidth;
      const t = gsap.to(track.current, { x: () => -dist(), ease: 'none',
        scrollTrigger: { trigger: sec.current, pin: true, scrub: 1, end: () => '+=' + dist(), invalidateOnRefresh: true,
          onUpdate: (s) => { if (bar.current) bar.current.style.transform = `scaleX(${s.progress})`; } } });
      return () => { t.scrollTrigger?.kill(); t.kill(); };
    });
    return () => mm.revert();
  }, []);
  return (
    <section className="hwork" ref={sec}>
      <div className="hwork-head"><p className="eyebrow">Selected work</p></div>
      <div className="hwork-track" ref={track}>
        {projects.map((p, i) => <WorkCard key={p.slug} p={p} i={i} still />)}
        <TLink to="/work" className="card"><div className="h-lg">All<br /><span className="serif">work</span> →</div></TLink>
      </div>
      <div className="progress"><i ref={bar as any} /></div>
    </section>
  );
}

export default function Studio() {
  return (
    <>
      <Hero />
      <Marquee items={['Brand Identity', 'Web Design', 'Content', 'Paid Ads', 'SEO & AEO']} />
      <section className="section intro">
        <p className="eyebrow">The studio</p>
        <Split as="p" className="h-md" text="Kraftier is a small, senior team of designers, developers and growth marketers. We pair award-level craft with measurable results, so the work looks incredible and performs just as well." />
      </section>
      <HorizontalWork />
      <section className="section">
        <Reveal><p className="eyebrow" style={{ marginBottom: 40 }}>What we do</p></Reveal>
        <ul className="svc">
          {services.map((s) => (
            <li key={s.n}><TLink to="/contact"><span className="n">{s.n}</span><span className="t">{s.t}</span><span className="d">{s.d}</span></TLink></li>
          ))}
        </ul>
      </section>
      <section className="section">
        <Split as="h2" className="h-lg" text="Craft, strategy and a little obsession." />
        <div style={{ height: 'clamp(48px, 8vw, 120px)' }} />
        <Reveal>
          <div className="stats">
            <div><b>60+</b><span className="eyebrow">Projects shipped</span></div>
            <div><b>12</b><span className="eyebrow">Countries</span></div>
            <div><b>4.9x</b><span className="eyebrow">Avg. ROAS</span></div>
            <div><b>6</b><span className="eyebrow">Years running</span></div>
          </div>
        </Reveal>
      </section>
      <Footer />
    </>
  );
}
