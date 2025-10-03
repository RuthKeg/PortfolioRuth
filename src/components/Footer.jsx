import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import portfolio from "../data/portfolio";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-glow"></div>
      <p className="footer-text">
        © {new Date().getFullYear()} {portfolio.meta.name}. Tous droits réservés.
      </p>
      <div className="footer-links">
        <a href={portfolio.meta.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
          <FaGithub />
        </a>
        <a href={portfolio.meta.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <FaLinkedin />
        </a>
        <a href={`mailto:${portfolio.meta.email}`} aria-label="Email">
          <FaEnvelope />
        </a>
      </div>
    </footer>
  );
}
