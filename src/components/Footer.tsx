import { TLink, Reveal } from '../motion';

export default function Footer() {
  return (
    <footer className="footer">
      <Reveal><p className="eyebrow">Have a project in mind?</p></Reveal>
      <TLink to="/contact" className="big">Let’s build<br /><span className="serif">something</span> bold.</TLink>
      <div className="footer-cols">
        <span>© 2026 Kraftier Studio</span>
        <span>hello@kraftierstudio.com</span>
        <span>Instagram · LinkedIn · Behance</span>
      </div>
    </footer>
  );
}
