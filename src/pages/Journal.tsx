import { Split, Reveal } from '../motion';
import Footer from '../components/Footer';
import { posts } from '../data';

export default function Journal() {
  return (
    <>
      <section className="section page-top">
        <p className="eyebrow" style={{ marginBottom: 24 }}>Thoughts & notes</p>
        <h1 className="h-xl"><Split as="span" className="line" text="The" /><span className="line"><Split as="span" className="serif" text="journal" delay={0.1} /></span></h1>
        <div style={{ height: 80 }} />
        {posts.map((p) => (
          <Reveal key={p.t}>
            <a className="post" href="#" data-cursor onClick={(e) => e.preventDefault()}>
              <span className="eyebrow">{p.d}</span><h3>{p.t}</h3><span className="eyebrow">{p.c}</span>
            </a>
          </Reveal>
        ))}
      </section>
      <Footer />
    </>
  );
}
