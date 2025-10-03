import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";
import portfolio from "../data/portfolio";

export default function Contact() {
  return (
    <section id="contact" className="section scroll-reveal contact-section">
      <h2 className="section-title">Me Contacter</h2>
      <div className="contact-grid">
        {/* FORMULAIRE */}
        <form
          className="contact-form"
          onSubmit={(e) => {
            e.preventDefault();
            alert("Merci pour votre message !");
          }}
        >
          <div className="form-group">
            <input type="text" required />
            <label>Votre nom</label>
          </div>
          <div className="form-group">
            <input type="email" required />
            <label>Votre email</label>
          </div>
          <div className="form-group">
            <textarea rows="5" required></textarea>
            <label>Votre message</label>
          </div>
          <button type="submit" className="btn-gradient w-full">
            Envoyer
          </button>
        </form>

        {/* INFOS */}
        <div className="contact-info">
          <p className="contact-text">
            Vous souhaitez collaborer ou avez une question ?  
            N’hésitez pas à me contacter via ce formulaire ou mes réseaux.
          </p>
          <ul className="contact-links">
            <li>
              <FaEnvelope />{" "}
              <a href={`mailto:${portfolio.meta.email}`}>
                {portfolio.meta.email}
              </a>
            </li>
            <li>
              <FaLinkedin />{" "}
              <a href={portfolio.meta.linkedin} target="_blank" rel="noreferrer">
                LinkedIn
              </a>
            </li>
            <li>
              <FaGithub />{" "}
              <a href={portfolio.meta.github} target="_blank" rel="noreferrer">
                GitHub
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
