import portfolio from "../data/portfolio";

export default function Projects() {
  return (
    <section id="projects" className="section scroll-reveal">
      <h2 className="section-title">Projets</h2>
      <p className="about-text styled">
        Mettre le curseur sur le projet pour voir l'info🌸.
      </p>
      <div className="projects-grid">
        {portfolio.projects.map((p, i) => (
          <div className="project-card" key={i}>
            <img src={p.img} alt={p.title} />
            <div className="project-overlay">
              <h3>{p.title}</h3>
              <p>{p.description}</p>
              <div className="tech-stack">
                {p.tech.map((t, idx) => (
                  <span key={idx} className="tech-tag">{t}</span>
                ))}
              </div>
              <div className="project-links">
                <a 
                  href={p.repo} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn btn-code"
                >
                  GitHub
                </a>
                <a 
                  href={p.demo || "#"} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn btn-demo"
                >
                  Démo
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
