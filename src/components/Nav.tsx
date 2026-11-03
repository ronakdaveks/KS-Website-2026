import { useRef, useState } from 'react';
import gsap from 'gsap';
import { TLink } from '../motion';

const links: [string, string][] = [['/', 'Studio'], ['/work', 'Work'], ['/journal', 'Journal'], ['/contact', 'Contact']];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const ov = useRef<HTMLDivElement>(null);
  const toggle = (next: boolean) => {
    setOpen(next);
    gsap.to(ov.current, { clipPath: next ? 'inset(0 0 0% 0)' : 'inset(0 0 100% 0)', duration: 0.9, ease: 'expo.inOut' });
    if (next) gsap.fromTo(ov.current!.querySelectorAll('a'), { y: 120, opacity: 0 }, { y: 0, opacity: 1, stagger: 0.07, duration: 1, ease: 'expo.out', delay: 0.3 });
  };
  return (
    <>
      <header className="nav">
        <TLink to="/" className="logo">Kraftier<i>.</i></TLink>
        <nav className="nav-links">{links.map(([to, l]) => <TLink key={to} to={to}>{l}</TLink>)}</nav>
        <button className="menu-btn" onClick={() => toggle(!open)}>{open ? 'Close' : 'Menu'}</button>
      </header>
      <div className="overlay" ref={ov}>
        {links.map(([to, l]) => <TLink key={to} to={to} onClick={() => toggle(false)}>{l}</TLink>)}
      </div>
    </>
  );
}
