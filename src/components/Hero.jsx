import profile from "../assets/profile.jpg";

function Hero() {
  return (
    <section className="hero" id="hero">
      {/* Texte gauche */}
      <div className="hero-content">
        <h1 className="hero-name">
          <span className="gradient-text">Ruth Kegmo</span>
        </h1>
        <h2 className="hero-job">
          <span className="typing">Developpeuse de solutions numeriques</span>
        </h2>
        <p className="hero-desc">
          « Construire avec logique, imaginer avec créativité 💡»  
        </p>

        {/* Boutons */}
        <div className="hero-buttons">
          <a href="/Ruth_Kegmo_CV.pdf" download className="btn">
            📥 Télécharger mon CV
          </a>
          <a href="https://bold.pro/my/ruth-kegmo" className="btn secondary">
            🌐 Voir mon CV digital
          </a>
        </div>

        {/* Réseaux pros */}
        <div className="hero-socials">
          <a href="https://github.com/RuthKeg/" target="_blank" rel="noreferrer">
            <i className="fab fa-github"></i>
          </a>
          <a href="https://www.linkedin.com/in/ruth-kegmo-b750932b7/" target="_blank" rel="noreferrer">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="mailto:ruth@example.com">
            <i className="fas fa-envelope"></i>
          </a>
        </div>
      </div>

      {/* Photo droite */}
      <div className="hero-photo">
        <div className="crystal-frame">
            <img src={profile} alt="Ruth Kegmo" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
