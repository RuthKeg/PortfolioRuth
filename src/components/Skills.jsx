import portfolio from "../data/portfolio";

export default function Skills() {
  return (
    <section id="skills" className="section scroll-reveal">
      <h2 className="section-title">Compétences</h2>
      <div className="skills-grid">
        {Object.entries(portfolio.skills).map(([category, skills]) => (
          <div className="card skill-card" key={category}>
            <h3 className="skill-category">{category.replace(/_/g, " ")}</h3>
            <div className="skill-tags">
              {skills.map((s, i) => (
                <span key={i} className="tag">{s}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
