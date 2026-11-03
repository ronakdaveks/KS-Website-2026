import { createContext, useContext, useEffect, useLayoutEffect, useRef, ReactNode } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';

gsap.registerPlugin(ScrollTrigger);

export const lenisRef: { current: Lenis | null } = { current: null };

export function SmoothScroll() {
  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const lenis = new Lenis({ lerp: reduce ? 1 : 0.085, wheelMultiplier: 0.9 });
    lenisRef.current = lenis;
    lenis.on('scroll', ScrollTrigger.update);
    const tick = (t: number) => lenis.raf(t * 1000);
    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);
    return () => { gsap.ticker.remove(tick); lenis.destroy(); lenisRef.current = null; };
  }, []);
  return null;
}

type Ctx = { ready: boolean; go: (to: string) => void };
export const AppCtx = createContext<Ctx>({ ready: false, go: () => {} });
export const useApp = () => useContext(AppCtx);

/** Page transition: red curtain wipes up, route changes, curtain exits. */
export function Transitions({ ready, children }: { ready: boolean; children: ReactNode }) {
  const nav = useNavigate();
  const loc = useLocation();
  const curtain = useRef<HTMLDivElement>(null);
  const label = useRef<HTMLSpanElement>(null);
  const busy = useRef(false);
  const names: Record<string, string> = { '/': 'Studio', '/work': 'Work', '/journal': 'Journal', '/contact': 'Contact' };

  const go = (to: string) => {
    if (busy.current || to === loc.pathname) return;
    busy.current = true;
    if (label.current) label.current.textContent = names[to] ?? '';
    gsap.timeline()
      .set(curtain.current, { y: '100%', borderRadius: '50% 50% 0 0' })
      .to(curtain.current, { y: 0, borderRadius: '0%', duration: 0.8, ease: 'expo.inOut' })
      .add(() => { nav(to); lenisRef.current?.scrollTo(0, { immediate: true }); window.scrollTo(0, 0); })
      .to(curtain.current, { y: '-100%', borderRadius: '0 0 50% 50%', duration: 0.8, ease: 'expo.inOut', delay: 0.25 })
      .add(() => { busy.current = false; ScrollTrigger.refresh(); });
  };
  return (
    <AppCtx.Provider value={{ ready, go }}>
      {children}
      <div className="curtain" ref={curtain}><span ref={label} /></div>
    </AppCtx.Provider>
  );
}

export function TLink({ to, children, className, onClick }: { to: string; children: ReactNode; className?: string; onClick?: () => void }) {
  const { go } = useApp();
  const loc = useLocation();
  return (
    <a href={to} data-cursor className={`${className ?? ''} ${loc.pathname === to ? 'active' : ''}`}
       onClick={(e) => { e.preventDefault(); onClick?.(); go(to); }}>
      {children}
    </a>
  );
}

/** Masked word-by-word text reveal. */
export function Split({ text, as: Tag = 'div', className, scroll = true, delay = 0, stagger = 0.045 }:
  { text: string; as?: any; className?: string; scroll?: boolean; delay?: number; stagger?: number }) {
  const ref = useRef<HTMLElement>(null);
  const { ready } = useApp();
  useLayoutEffect(() => {
    const el = ref.current!;
    const words = el.querySelectorAll('.word > span');
    gsap.set(words, { yPercent: 115, rotate: 4 });
    if (!ready) return;
    const tween = gsap.to(words, {
      yPercent: 0, rotate: 0, duration: 1.2, ease: 'expo.out', stagger, delay,
      scrollTrigger: scroll ? { trigger: el, start: 'top 88%', once: true } : undefined,
    });
    return () => { tween.scrollTrigger?.kill(); tween.kill(); };
  }, [ready, text]);
  return (
    <Tag ref={ref} className={className} aria-label={text}>
      {text.split(' ').map((w, i) => (
        <span key={i} aria-hidden className="word"><span>{w}&nbsp;</span></span>
      ))}
    </Tag>
  );
}

/** Fade/slide up on scroll. */
export function Reveal({ children, className, delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const { ready } = useApp();
  useLayoutEffect(() => {
    const el = ref.current!;
    gsap.set(el, { y: 50, opacity: 0 });
    if (!ready) return;
    const t = gsap.to(el, { y: 0, opacity: 1, duration: 1.2, delay, ease: 'expo.out', scrollTrigger: { trigger: el, start: 'top 98%', once: true } });
    return () => { t.scrollTrigger?.kill(); t.kill(); };
  }, [ready]);
  return <div ref={ref} className={className}>{children}</div>;
}

/** Parallax: element drifts by `amount` px across its scroll range. */
export function useParallax<T extends HTMLElement>(amount = 80) {
  const ref = useRef<T>(null);
  useLayoutEffect(() => {
    if (!ref.current) return;
    const t = gsap.fromTo(ref.current, { y: -amount }, { y: amount, ease: 'none',
      scrollTrigger: { trigger: ref.current!.parentElement, start: 'top bottom', end: 'bottom top', scrub: true } });
    return () => { t.scrollTrigger?.kill(); t.kill(); };
  }, []);
  return ref;
}
