import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function Preloader({ onDone }: { onDone: () => void }) {
  const root = useRef<HTMLDivElement>(null);
  const num = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const o = { v: 0 };
    const tl = gsap.timeline({ onComplete: onDone });
    tl.to(o, { v: 100, duration: 2, ease: 'power2.inOut', onUpdate: () => { if (num.current) num.current.textContent = String(Math.round(o.v)).padStart(2, '0'); } })
      .to(root.current, { clipPath: 'inset(0 0 100% 0)', duration: 1, ease: 'expo.inOut' }, '+=0.15')
      .set(root.current, { display: 'none' });
    return () => { tl.kill(); };
  }, []);
  return (
    <div className="preloader" ref={root} style={{ clipPath: 'inset(0 0 0% 0)' }}>
      <div className="count" ref={num}>00</div>
      <div className="tag eyebrow">Kraftier Studio<br />Design · Brand · Growth</div>
    </div>
  );
}
