"use client";

import { useEffect, useState } from "react";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Award,
  Boxes,
  Building2,
  FileText,
  GraduationCap,
  HardDrive,
  Mail,
  MessageCircle,
  Monitor,
  Network,
  Phone,
  Server,
  ShieldCheck,
  Wrench,
  Zap,
} from "lucide-react";
import Nav from "./Nav";
import Effects from "./Effects";
import TypedRole from "./TypedRole";
import {
  content,
  gpas,
  marqueeBottom,
  marqueeTop,
  profile,
  roles,
  skillChips,
  skillIcons,
  trainingIcons,
} from "@/lib/profile";

const Icons = { Monitor, FileText, HardDrive, Network, Wrench, ShieldCheck, Boxes, Zap };
const lineUrl = `https://line.me/ti/p/~${profile.lineId}`;
const pad = (n) => String(n).padStart(2, "0");

function Marquee({ items, mark, alt }) {
  const list = [...items, ...items];
  return (
    <div className={`marquee-row${alt ? " alt" : ""}`}>
      <div className="marquee-track">
        {list.map((t, i) => (
          <span key={i} className="mq-item">
            <span>{t}</span>
            <b>{mark}</b>
          </span>
        ))}
      </div>
    </div>
  );
}

function SectionHead({ label, title, em }) {
  return (
    <div className="section-head reveal">
      <span>{label}</span>
      <h2>
        {title}
        <br />
        <em>{em}</em>
      </h2>
    </div>
  );
}

// หมายเหตุ: ใช้ index เป็น key เพื่อให้ DOM เดิมคงอยู่เมื่อสลับภาษา (คลาส .visible ของ reveal จะไม่หาย)
export default function Portfolio() {
  const [lang, setLang] = useState("th");

  useEffect(() => {
    try {
      const saved = localStorage.getItem("pf-lang");
      if (saved === "en" || saved === "th") setLang(saved);
    } catch {}
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
    document.body.classList.toggle("lang-en", lang === "en");
    try {
      localStorage.setItem("pf-lang", lang);
    } catch {}
  }, [lang]);

  const t = content[lang];
  const toggleLang = () => setLang((l) => (l === "th" ? "en" : "th"));

  return (
    <>
      <Effects />
      <Nav initials={profile.initials} email={profile.email} t={t.nav} lang={lang} onToggleLang={toggleLang} />

      <main id="main">
        {/* ============ HERO ============ */}
        <section className="hero container" id="home">
          <div className="hero-copy reveal">
            <div className="eyebrow">
              <span /> {t.hero.eyebrow}
            </div>
            <h1>
              {t.hero.title[0]}
              <br />
              {t.hero.title[1]}
              <br />
              <em>{t.hero.titleEm}</em>
            </h1>
            <div className="role-line">
              <span className="role-prefix">{t.hero.rolePrefix}</span>
              <TypedRole words={roles} />
              <span className="sr-only">{profile.position}</span>
            </div>
            <p>
              {t.hero.introPre}
              <strong>{t.fullName}</strong>
              {t.hero.introMid}
              <strong>IT Support &amp; Network System</strong>
              {t.hero.introPost}
            </p>
            <div className="hero-actions">
              <a className="btn primary" href="#experience">
                {t.hero.ctaExp} <ArrowRight size={18} />
              </a>
              <a className="btn ghost" href={`mailto:${profile.email}`}>
                {t.hero.ctaMail}
              </a>
              <a className="btn ghost" href={`tel:${profile.phoneIntl}`}>
                {t.hero.ctaCall} {profile.phone}
              </a>
            </div>
            <div className="socials">
              <a aria-label="Email" href={`mailto:${profile.email}`}>
                <Mail size={19} />
              </a>
              <a aria-label="Phone" href={`tel:${profile.phoneIntl}`}>
                <Phone size={19} />
              </a>
              <a aria-label="LINE" href={lineUrl} target="_blank" rel="noopener noreferrer">
                <MessageCircle size={19} />
              </a>
            </div>
          </div>

          <div className="hero-visual reveal">
            <div className="orbit orbit-one" />
            <div className="orbit orbit-two" />
            <div className="portrait-card">
              <div className="status-dot" />
              <img src={profile.photo} alt={t.fullName} width={305} height={355} />
              <div className="portrait-label">
                <span>{t.hero.basedIn}</span>
                <strong>{t.location}</strong>
              </div>
            </div>
            <div className="float-card code-card">
              <Network size={26} />
              <div>
                <small>{t.hero.mainWork}</small>
                <strong>IT Support · Network</strong>
              </div>
            </div>
            <div className="float-card qa-card">
              <Server size={26} />
              <div>
                <small>{t.hero.systems}</small>
                <strong>NAS · Zabbix · CCTV</strong>
              </div>
            </div>
            <div className="float-card exp-card">
              <strong>2</strong>
              <span>
                {t.hero.years[0]}
                <br />
                {t.hero.years[1]}
              </span>
            </div>
          </div>
          <a className="scroll-hint" href="#about">
            <span>{t.hero.scroll}</span>
            <ArrowDown size={14} />
          </a>
        </section>

        {/* ============ MARQUEE ============ */}
        <section className="marquee" aria-hidden="true">
          <Marquee items={marqueeTop} mark="✦" />
          <Marquee items={marqueeBottom} mark="✓" alt />
        </section>

        {/* ============ 01 ABOUT ============ */}
        <section className="section container" id="about">
          <SectionHead label={t.about.label} title={t.about.title} em={t.about.titleEm} />
          <div className="about-grid">
            <div className="about-story">
              <p className="lead reveal">{t.about.lead}</p>
              <p className="reveal">{t.about.story}</p>
              <div className="facts reveal">
                <div>
                  <span>{t.about.facts.name}</span>
                  <strong>{t.fullName}</strong>
                </div>
                <div>
                  <span>{t.about.facts.age}</span>
                  <strong>{t.age}</strong>
                </div>
                <div>
                  <span>{t.about.facts.birthday}</span>
                  <strong>{t.birthday}</strong>
                </div>
                <div>
                  <span>{t.about.facts.position}</span>
                  <strong>{profile.position}</strong>
                </div>
                <div className="span-2">
                  <span>{t.about.facts.address}</span>
                  <strong>{t.address}</strong>
                </div>
                <div>
                  <span>{t.about.facts.phone}</span>
                  <strong>
                    <a href={`tel:${profile.phoneIntl}`}>{profile.phone}</a>
                  </strong>
                </div>
                <div>
                  <span>{t.about.facts.line}</span>
                  <strong>
                    <a href={lineUrl} target="_blank" rel="noopener noreferrer">
                      {profile.lineId}
                    </a>
                  </strong>
                </div>
              </div>
            </div>
            <div className="about-side">
              <div className="stats">
                {["2", `${t.duties.length}+`, gpas[0]].map((v, i) => (
                  <div key={i} className="stat reveal">
                    <strong>{v}</strong>
                    <span>{t.about.stats[i]}</span>
                  </div>
                ))}
              </div>
              <div className="about-cards">
                {t.skills.map((s, i) => {
                  const Icon = Icons[skillIcons[i]];
                  return (
                    <article key={i} className="reveal">
                      <Icon size={30} />
                      <div>
                        <h3>{s.title}</h3>
                        <p>{s.desc}</p>
                      </div>
                    </article>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* ============ 02 SKILLS ============ */}
        <section className="section skills-section" id="skills">
          <div className="container">
            <SectionHead label={t.skillsSection.label} title={t.skillsSection.title} em={t.skillsSection.titleEm} />
            <div className="skill-groups">
              {skillChips.map((chips, i) => (
                <div key={i} className="skill-group reveal">
                  <h3>{t.skillsSection.groups[i]}</h3>
                  <div className="chips">
                    {chips.map((c) => (
                      <span key={c}>{c}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============ 03 EXPERIENCE ============ */}
        <section className="section container" id="experience">
          <SectionHead label={t.expSection.label} title={t.expSection.title} em={t.expSection.titleEm} />
          <div className="timeline">
            {t.experience.map((e, i) => (
              <article key={i} className="timeline-item reveal">
                <div className="time">{e.period}</div>
                <div className="company-logo">
                  <Building2 size={34} />
                </div>
                <div className="timeline-copy">
                  <span>{e.tag} · IT SUPPORT &amp; NETWORK</span>
                  <h3>{e.company}</h3>
                </div>
              </article>
            ))}
          </div>
          <div className="duties reveal">
            <h3>{t.expSection.duties}</h3>
            <ol>
              {t.duties.map((d, i) => (
                <li key={i}>
                  <b>{pad(i + 1)}</b>
                  <p>{d}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* ============ 04 EDUCATION ============ */}
        <section className="section skills-section" id="education">
          <div className="container">
            <SectionHead label={t.eduSection.label} title={t.eduSection.title} em={t.eduSection.titleEm} />
            <div className="edu-grid">
              {t.education.map((e, i) => (
                <article key={i} className="edu-card reveal">
                  <div className="edu-top">
                    <span>{e.period}</span>
                    <GraduationCap size={24} />
                  </div>
                  <h3>{e.level}</h3>
                  <p>{e.school}</p>
                  <div className="edu-gpa">
                    <small>{t.eduSection.gpa}</small>
                    <strong>{gpas[i]}</strong>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ============ 05 TRAINING ============ */}
        <section className="section container" id="training">
          <SectionHead label={t.trainSection.label} title={t.trainSection.title} em={t.trainSection.titleEm} />
          <div className="train-grid">
            {t.trainings.map((title, i) => {
              const Icon = Icons[trainingIcons[i]];
              return (
                <article key={i} className="train-card reveal">
                  <div className="train-ico">
                    <Icon size={24} />
                  </div>
                  <span className="train-num">
                    <Award size={14} /> CERTIFICATE {pad(i + 1)}
                  </span>
                  <h3>{title}</h3>
                </article>
              );
            })}
          </div>
        </section>
      </main>

      {/* ============ CONTACT ============ */}
      <section className="contact-section" id="contact">
        <div className="container">
          <div className="contact-inner">
            <div>
              <span>{t.contact.label}</span>
              <h2>
                {t.contact.title[0]}
                <br />
                {t.contact.title[1]}
              </h2>
            </div>
            <a className="contact-circle" href={`mailto:${profile.email}`}>
              {t.contact.circle} <ArrowUpRight size={26} />
            </a>
          </div>
          <div className="contact-details">
            <a href={`mailto:${profile.email}`}>
              <Mail size={16} /> {profile.email}
            </a>
            <a href={`tel:${profile.phoneIntl}`}>
              <Phone size={16} /> {profile.phone}
            </a>
            <a href={lineUrl} target="_blank" rel="noopener noreferrer">
              <MessageCircle size={16} /> LINE: {profile.lineId}
            </a>
          </div>
        </div>
      </section>

      <footer>
        <div className="container footer-inner">
          <p>
            © 2026 {t.fullName} — {profile.position}
          </p>
          <a href="#home">{t.footerTop}</a>
        </div>
      </footer>
    </>
  );
}
