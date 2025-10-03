import portfolio from "../data/portfolio";

export default function Experience() {
  return (
    <section id="experience" className="section scroll-reveal">
      <h2 className="section-title">Expérience</h2>
      <div className="timeline">
        {portfolio.experience.map((exp, i) => (
          <div
            key={i}
            className={`timeline-item ${i % 2 === 0 ? "left" : "right"}`}
          >
            <div className="timeline-point" />
            <div className="timeline-content">
              <h3>{exp.role}</h3>
              <span>{exp.entreprise} — {exp.lieu}</span>
              <span className="timeline-period">{exp.periode}</span>
              <ul className="timeline-missions">
                {exp.missions.map((m, j) => (
                  <li key={j}>{m}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
