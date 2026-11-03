import { Project, bg } from '../data';
import { TLink, useParallax } from '../motion';

export default function WorkCard({ p, i, still }: { p: Project; i: number; still?: boolean }) {
  const img = useParallax<HTMLDivElement>(30);
  return (
    <TLink to="/work" className="card">
      <div className="media" data-view>
        <span className="num">{String(i + 1).padStart(2, '0')}</span>
        <div ref={still ? undefined : img} style={bg(p)} />
      </div>
      <div className="meta"><span>{p.title}</span><span>{p.type} — {p.year}</span></div>
    </TLink>
  );
}
