import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function Cursor() {
  const el = useRef<HTMLDivElement>(null);
  const txt = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const x = gsap.quickTo(el.current, 'x', { duration: 0.35, ease: 'power3' });
    const y = gsap.quickTo(el.current, 'y', { duration: 0.35, ease: 'power3' });
    const move = (e: MouseEvent) => { x(e.clientX); y(e.clientY); };
    const over = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      const view = t.closest('[data-view]');
      const hot = t.closest('a,button,[data-cursor]');
      el.current!.classList.toggle('view', !!view);
      if (txt.current) txt.current.textContent = view ? 'View' : '';
      gsap.to(el.current, { scale: view ? 5 : hot ? 2.6 : 1, duration: 0.5, ease: 'expo.out' });
    };
    window.addEventListener('mousemove', move);
    window.addEventListener('mouseover', over);
    return () => { window.removeEventListener('mousemove', move); window.removeEventListener('mouseover', over); };
  }, []);
  return <div className="cursor" ref={el}><span ref={txt} /></div>;
}
