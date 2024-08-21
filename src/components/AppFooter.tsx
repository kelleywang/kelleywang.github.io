import "./AppFooter.css";
export default function AppFooter() {
  return (
    <footer className="container">
      <section className="links">
        <a href="#">about</a>
        <a href="#">contact</a>
        <a href="#">directions</a>
      </section>
      <section className="social-media-icons">
        <a href="#" className="button">
          Facebook
        </a>
        <a href="#" className="button">
          Twitter
        </a>
      </section>
    </footer>
  );
}
