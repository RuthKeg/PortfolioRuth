// src/components/About.jsx

export default function About() {
  return (
    <section id="about" className="section about scroll-reveal">
      <h2 className="section-title about-title">À propos de moi</h2>

      <p className="about-text styled">
        Je suis <span className="highlight">Ruth Kegmo</span>, Étudiante en Technologie de l'informatique. J'ai acquis des bases solides en développement logiciel, gestion de données et de réseaux, ainsi qu'en support technique.
      </p>
      <p className="about-text styled">
        Mon objectif est de mettre ces acquis en pratique pour développer mon expertise terrain et contribuer efficacement en milieu professionnel.
      </p>

      <h3 className="facts-title">✨ Quelques faits sur moi</h3>
      <div className="facts-grid">
        <span className="fact-badge">🎨 Créative & imaginative</span>
        <span className="fact-badge">📂 Organisée et méthodique</span>
        <span className="fact-badge">Ma couleur preferee est rose 💕</span>
        <span className="fact-badge">🔍 Sens du détail</span>
        <span className="fact-badge defect">
          🌱 J’ai du mal à me mettre en avant
        </span>
      </div>
    </section>
  );
}
