export type Project = { slug: string; title: string; type: string; year: string; tags: string[]; a: string; b: string };
export const projects: Project[] = [
  { slug: 'monospace', title: 'Monospace', type: 'Brand & Web', year: '2026', tags: ['Branding', 'Web'], a: '#e92c2e', b: '#1a0507' },
  { slug: 'objet-noir', title: 'Objet Noir', type: 'E-commerce', year: '2026', tags: ['Web'], a: '#2b2b33', b: '#9a9aa8' },
  { slug: 'vogue-edit', title: 'Vogue Edit', type: 'Content & Social', year: '2025', tags: ['Content'], a: '#f4d9c6', b: '#c0502d' },
  { slug: 'lunar-labs', title: 'Lunar Labs', type: 'SaaS Website', year: '2025', tags: ['Web', 'SEO'], a: '#020a41', b: '#4a5bff' },
  { slug: 'aether-project', title: 'Aether Project', type: 'Identity System', year: '2025', tags: ['Branding'], a: '#0f3d3a', b: '#e6ff7a' },
  { slug: 'northbound', title: 'Northbound', type: 'Paid Growth', year: '2024', tags: ['Ads', 'SEO'], a: '#ffb400', b: '#1d1100' },
];
export const services = [
  { n: '01', t: 'Brand & Identity', d: 'Strategy, logos and visual systems built to last.' },
  { n: '02', t: 'Web Design & Dev', d: 'Webflow, WordPress and custom builds with motion.' },
  { n: '03', t: 'Content Creation', d: 'Social, video and editorial that earns attention.' },
  { n: '04', t: 'Paid Ads', d: 'Performance campaigns tuned to revenue.' },
  { n: '05', t: 'SEO & AEO', d: 'Be found on search and inside AI answers.' },
];
export const posts = [
  { d: 'Oct 2026', t: 'Why motion is now a brand asset', c: 'Design' },
  { d: 'Sep 2026', t: 'AEO: getting cited by AI search', c: 'Growth' },
  { d: 'Aug 2026', t: 'Building a Webflow site that scores 100', c: 'Dev' },
  { d: 'Jul 2026', t: 'Identity systems that scale past the logo', c: 'Brand' },
  { d: 'Jun 2026', t: 'Paid ads without the burn', c: 'Growth' },
];
export const bg = (p: { a: string; b: string }) => ({
  background: `radial-gradient(120% 90% at 20% 15%, ${p.b} 0%, transparent 60%), linear-gradient(160deg, ${p.a}, #050505)`,
});
