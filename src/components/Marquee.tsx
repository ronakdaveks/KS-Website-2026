import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

/** Infinite marquee that speeds up and flips with scroll velocity. */
export default function Marquee({ items }: { items: string[] }) {
  const track = useRef<HTMLDivElement>(null);
  useLayoutEffect(() => {
    const el = track.current!;
    const loop = gsap.to(el, { xPercent: -50, duration: 28, ease: 'none', repeat: -1 });
    const st = ScrollTrigger.create({
      onUpdate: (s) => {
        const v = s.getVelocity() / 400;
        gsap.to(loop, { timeScale: (s.direction === 1 ? 1 : -1) * (1 + Math.min(Math.abs(v), 6)), duration: 0.2, overwrite: true });
        gsap.to(loop, { timeScale: s.direction === 1 ? 1 : -1, duration: 1.2, delay: 0.25, overwrite: false });
      },
    });
    return () => { loop.kill(); st.kill(); };
  }, []);
  const row = [...items, ...items];
  return (
    <div className="marquee">
      <div className="marquee-track" ref={track}>
        {row.map((t, i) => <span key={i}>{t} <em>✦</em></span>)}
      </div>
    </div>
  );
}
