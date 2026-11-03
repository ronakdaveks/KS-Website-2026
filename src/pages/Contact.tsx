import { useState } from 'react';
import { Split, Reveal } from '../motion';

export default function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <section className="section page-top" style={{ minHeight: '100svh' }}>
      <p className="eyebrow" style={{ marginBottom: 24 }}>Get in touch</p>
      <h1 className="h-xl"><Split as="span" className="line" text="Let’s talk" /><span className="line"><Split as="span" className="serif" text="projects." delay={0.1} /></span></h1>
      <div style={{ height: 72 }} />
      <Reveal>
        {sent ? <p className="h-md">Thank you — we’ll reply within two working days.</p> : (
          <form className="form" onSubmit={(e) => { e.preventDefault(); setSent(true); }}>
            <div className="field"><label htmlFor="n">Your name</label><input id="n" required /></div>
            <div className="field"><label htmlFor="e">Email</label><input id="e" type="email" required /></div>
            <div className="field"><label htmlFor="m">Tell us about the project</label><textarea id="m" rows={3} required /></div>
            <div><button className="btn" type="submit"><span>Send inquiry →</span></button></div>
          </form>
        )}
      </Reveal>
      <p className="eyebrow" style={{ marginTop: 96 }}>hello@kraftierstudio.com</p>
    </section>
  );
}
