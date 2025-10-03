import React, { useEffect, useRef, useState } from "react";

/**
 * Props:
 *  - sections: array of section ids (["hero","about","skills",..."])
 *  - darkMode, setDarkMode  (optionnel)
 */
export default function Navbar({ sections = [], darkMode, setDarkMode }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState(sections[0] || "hero");
  const [scrolled, setScrolled] = useState(false);

  const firstLinkRef = useRef(null);
  const toggleRef = useRef(null);
  const mobileRef = useRef(null);

  // Smooth scroll to section
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      setMenuOpen(false);
    }
  };

  // IntersectionObserver -> highlight active section
  useEffect(() => {
    if (!sections || sections.length === 0) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      {
        root: null,
        rootMargin: "-35% 0px -50% 0px", // adapté pour "section visible"
        threshold: 0,
      }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [sections]);

  // Shrink navbar on scroll
  useEffect(() => {
    let raf = null;
    const onScroll = () => {
      if (raf) cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        setScrolled(window.scrollY > 40);
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  // Focus management for mobile menu
  useEffect(() => {
    if (menuOpen) {
      // give focus to first link for accessibility
      setTimeout(() => firstLinkRef.current?.focus(), 120);
      document.body.style.overflow = "hidden"; // lock scroll behind menu
    } else {
      toggleRef.current?.focus();
      document.body.style.overflow = "";
    }
  }, [menuOpen]);

  // Close on Escape
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape" && menuOpen) setMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  return (
    <header className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}>
      <div className="nav-left" onClick={() => scrollTo("hero")} style={{cursor:"pointer"}}>
        <span className="nav-logo">Ruth Kegmo</span>
      </div>

      {/* Desktop links */}
      <nav className="nav-links-desktop" aria-label="Main navigation">
        {sections.map((sec, i) => (
          <button
            key={sec}
            onClick={() => scrollTo(sec)}
            className={`nav-link ${active === sec ? "active" : ""}`}
            aria-current={active === sec ? "page" : undefined}
            ref={i === 0 ? firstLinkRef : null}
          >
            {sec.charAt(0).toUpperCase() + sec.slice(1)}
          </button>
        ))}

        {/* CTA in nav */}
        <button className="nav-cta" onClick={() => scrollTo("projects")}>
          Voir mes projets
        </button>

        {/* Dark toggle */}
        {typeof setDarkMode === "function" && (
          <button
            className="nav-toggle-theme"
            onClick={() => setDarkMode((v) => !v)}
            aria-pressed={!!darkMode}
            title="Basculer thème"
          >
            {darkMode ? "☀️" : "🌙"}
          </button>
        )}
      </nav>

      {/* Mobile toggle */}
      <div className="nav-mobile-toggle">
        <button
          ref={toggleRef}
          aria-expanded={menuOpen}
          aria-controls="mobile-nav"
          onClick={() => setMenuOpen((v) => !v)}
          className="menu-toggle-btn"
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile drawer */}
      <aside
        id="mobile-nav"
        ref={mobileRef}
        className={`nav-mobile-drawer ${menuOpen ? "open" : ""}`}
        role="dialog"
        aria-modal="true"
      >
        <div className="nav-mobile-inner">
          <div className="mobile-links">
            {sections.map((sec, i) => (
              <button
                key={sec}
                onClick={() => scrollTo(sec)}
                className={`mobile-link ${active === sec ? "active" : ""}`}
                ref={i === 0 ? firstLinkRef : null}
              >
                {sec.charAt(0).toUpperCase() + sec.slice(1)}
              </button>
            ))}
          </div>

          <div className="mobile-controls">
            <button className="nav-cta" onClick={() => scrollTo("projects")}>Voir mes projets</button>
            {typeof setDarkMode === "function" && (
              <button onClick={() => setDarkMode((v) => !v)} className="nav-toggle-theme">
                {darkMode ? "☀️ Mode clair" : "🌙 Mode sombre"}
              </button>
            )}
          </div>
        </div>
      </aside>
    </header>
  );
}
