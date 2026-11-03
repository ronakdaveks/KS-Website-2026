import { useState } from 'react';
import gsap from 'gsap';
import { Split, Reveal } from '../motion';
import WorkCard from '../components/WorkCard';
import Footer from '../components/Footer';
import { projects } from '../data';

const cats = ['All', 'Branding', 'Web', 'Content', 'Ads', 'SEO'];

export default function Work() {
  const [f, setF] = useState('All');
  const list = projects.filter((p) => f === 'All' || p.tags.includes(f));
  const pick = (c: string) => {
    gsap.to('.grid', { opacity: 0, y: 20, duration: 0.3, onComplete: () => { setF(c); gsap.to('.grid', { opacity: 1, y: 0, duration: 0.8, ease: 'expo.out' }); } });
  };
  return (
    <>
      <section className="section page-top">
        <p className="eyebrow" style={{ marginBottom: 24 }}>Portfolio</p>
        <h1 className="h-xl"><Split as="span" className="line" text="Selected" /><span className="line"><Split as="span" className="serif" text="work" delay={0.1} /></span></h1>
        <div style={{ height: 64 }} />
        <Reveal><div className="filters">{cats.map((c) => <button key={c} className={`chip ${f === c ? 'on' : ''}`} onClick={() => pick(c)}>{c}</button>)}</div></Reveal>
        <div className="grid">{list.map((p, i) => <WorkCard key={p.slug} p={p} i={i} />)}</div>
      </section>
      <Footer />
    </>
  );
}
