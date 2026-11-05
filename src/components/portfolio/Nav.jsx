"use client";

import { useEffect, useState } from "react";
import { Menu, Moon, Sun, X } from "lucide-react";

const sections = ["about", "skills", "experience", "education", "training", "contact"];

export default function Nav({ initials, email, t, lang, onToggleLang }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [light, setLight] = useState(false);

  useEffect(() => {
    try {
      if (localStorage.getItem("pf-theme") === "light") setLight(true);
    } catch {}
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("light", light);
    try {
      localStorage.setItem("pf-theme", light ? "light" : "dark");
    } catch {}
  }, [light]);

  return (
    <header className={`nav-wrap${scrolled ? " scrolled" : ""}`}>
      <nav className="nav container" aria-label="Main">
        <a className="brand" href="#home">
          {initials}
          <span>.</span>
        </a>
        <div className={`nav-links${open ? " open" : ""}`}>
          {sections.map((id) => (
            <a key={id} href={`#${id}`} onClick={() => setOpen(false)}>
              {t[id]}
            </a>
          ))}
        </div>
        <div className="nav-actions">
          <button type="button" className="lang-btn" aria-label={t.lang} title={t.lang} onClick={onToggleLang}>
            <span className={lang === "th" ? "on" : ""}>TH</span>
            <i>/</i>
            <span className={lang === "en" ? "on" : ""}>EN</span>
          </button>
          <button type="button" className="icon-btn" aria-label={t.theme} onClick={() => setLight((v) => !v)}>
            {light ? <Moon size={18} /> : <Sun size={18} />}
          </button>
          <a className="mini-cta" href={`mailto:${email}`}>
            {t.hire}
          </a>
          <button
            type="button"
            className="icon-btn menu-btn"
            aria-label={t.menu}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>
    </header>
  );
}
