import portfolio from "../data/portfolio";

export default function About() {
  return (
    <section id="about" className="section about scroll-reveal">
      {/* Faits personnels */}
      <h3 className="facts-title"> Quelques faits sur moi</h3>
      <div className="facts-grid">
        <span className="fact-badge">🎨 Créative & imaginative</span>
        <span className="fact-badge">📂 Organisée et méthodique</span>
        <span className="fact-badge">💕 Ma couleur préférée est le rose</span>
        <span className="fact-badge">🔍 Sens du détail</span>
        <span className="fact-badge">🎒J'apprends tres vite</span>
        <span className="fact-badge">💻 Aime les codes maintenables</span>
        <span className="fact-badge">👩🏽‍🎓Etudiante en technique de l'informatique</span>
        <span className="fact-badge defect">🌱 J’ai du mal à me mettre en avant</span>
      </div>

            {/* Compétences */}
      <h3 className="facts-title" style={{ marginTop: "3rem" }}>
        💡 Mes compétences
      </h3>
      <div className="skills-grid">
        {Object.entries(portfolio.skills).map(([category, skills]) => (
          <div className="skill-row" key={category}>
            <h3 className="skill-category">{category.replace(/_/g, " ")}</h3>
            <div className="skill-list">
              {skills.map((s, i) => (
                <span key={i}>{s}</span>
              ))}
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}
