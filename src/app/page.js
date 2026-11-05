import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Award,
  Boxes,
  Building2,
  FileText,
  HardDrive,
  Monitor,
  ShieldCheck,
  Wrench,
  Zap,
  GraduationCap,
  Mail,
  MessageCircle,
  Network,
  Phone,
  Server,
} from "lucide-react";
import Nav from "@/components/portfolio/Nav";
import Effects from "@/components/portfolio/Effects";
import TypedRole from "@/components/portfolio/TypedRole";
import {
  duties,
  education,
  experience,
  marqueeBottom,
  marqueeTop,
  profile,
  roles,
  skillGroups,
  skills,
  trainings,
} from "@/lib/profile";

const Icons = { Monitor, FileText, HardDrive, Network, Wrench, ShieldCheck, Boxes, Zap };

const lineUrl = `https://line.me/ti/p/~${profile.lineId}`;

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

function SectionHead({ label, children }) {
  return (
    <div className="section-head reveal">
      <span>{label}</span>
      <h2>{children}</h2>
    </div>
  );
}

export default function Home() {
  const fullName = `${profile.firstName} ${profile.lastName}`;

  return (
    <>
      <Effects />
      <Nav initials={profile.initials} email={profile.email} />

      <main id="main">
        {/* ============ HERO ============ */}
        <section className="hero container" id="home">
          <div className="hero-copy reveal">
            <div className="eyebrow">
              <span /> พร้อมร่วมงานตำแหน่ง IT SUPPORT &amp; NETWORK
            </div>
            <h1>
              ดูแลระบบไอที
              <br />
              ให้ทุกงาน
              <br />
              <em>เดินได้ไม่สะดุด.</em>
            </h1>
            <div className="role-line">
              <span className="role-prefix">ตำแหน่ง</span>
              <TypedRole words={roles} />
              <span className="sr-only">{profile.position}</span>
            </div>
            <p>
              สวัสดีครับ ผม <strong>{fullName}</strong> ทำงานด้าน{" "}
              <strong>IT Support &amp; Network System</strong> ดูแลตั้งแต่คอมพิวเตอร์ อุปกรณ์ต่อพ่วง
              ระบบเครือข่าย LAN / Wi-Fi, Switch Layer 2/3 ไปจนถึงการ Backup ข้อมูลบน NAS
              และเฝ้าระวังระบบผ่าน Zabbix
            </p>
            <div className="hero-actions">
              <a className="btn primary" href="#experience">
                ดูประสบการณ์ <ArrowRight size={18} />
              </a>
              <a className="btn ghost" href={`mailto:${profile.email}`}>
                ส่งอีเมลหาผม
              </a>
              <a className="btn ghost" href={`tel:${profile.phoneIntl}`}>
                โทร {profile.phone}
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
              <img src={profile.photo} alt={fullName} width={305} height={355} />
              <div className="portrait-label">
                <span>อาศัยอยู่ที่</span>
                <strong>{profile.location}</strong>
              </div>
            </div>
            <div className="float-card code-card">
              <Network size={26} />
              <div>
                <small>งานหลัก</small>
                <strong>IT Support · Network</strong>
              </div>
            </div>
            <div className="float-card qa-card">
              <Server size={26} />
              <div>
                <small>ระบบที่ดูแล</small>
                <strong>NAS · Zabbix · CCTV</strong>
              </div>
            </div>
            <div className="float-card exp-card">
              <strong>2</strong>
              <span>
                ปี
                <br />
                ประสบการณ์
              </span>
            </div>
          </div>
          <a className="scroll-hint" href="#about">
            <span>เลื่อนลงเพื่อดูเพิ่มเติม</span>
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
          <SectionHead label="01 / เกี่ยวกับผม">
            แก้ปัญหาให้ไว
            <br />
            <em>ดูแลระบบให้มั่นคง.</em>
          </SectionHead>
          <div className="about-grid">
            <div className="about-story">
              <p className="lead reveal">
                ผมเชื่อว่างานไอทีที่ดีคืองานที่ผู้ใช้ไม่ต้องกังวล — ระบบพร้อมใช้ ข้อมูลปลอดภัย
                และเมื่อมีปัญหาก็แก้ได้อย่างรวดเร็ว
              </p>
              <p className="reveal">
                มีประสบการณ์ทำงานด้าน IT Support ที่บริษัท C.E.M. Technology (Thailand) และ
                H.V. FILA Co.,Ltd. ดูแลผู้ใช้งานทั้งในสำนักงานและหน้างาน จัดหาสเปคอุปกรณ์
                วางแผน Maintenance ดูแลระบบเครือข่าย ระบบ CCTV และสำรองข้อมูลขององค์กร
              </p>
              <div className="facts reveal">
                <div>
                  <span>ชื่อ - นามสกุล</span>
                  <strong>{fullName}</strong>
                </div>
                <div>
                  <span>อายุ</span>
                  <strong>{profile.age}</strong>
                </div>
                <div>
                  <span>วันเกิด</span>
                  <strong>{profile.birthday}</strong>
                </div>
                <div>
                  <span>ตำแหน่ง</span>
                  <strong>{profile.position}</strong>
                </div>
                <div className="span-2">
                  <span>ที่อยู่</span>
                  <strong>{profile.address}</strong>
                </div>
                <div>
                  <span>โทรศัพท์</span>
                  <strong>
                    <a href={`tel:${profile.phoneIntl}`}>{profile.phone}</a>
                  </strong>
                </div>
                <div>
                  <span>LINE ID</span>
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
                <div className="stat reveal">
                  <strong>2</strong>
                  <span>บริษัทที่เคยร่วมงาน</span>
                </div>
                <div className="stat reveal">
                  <strong>{duties.length}+</strong>
                  <span>หน้าที่ความรับผิดชอบหลัก</span>
                </div>
                <div className="stat reveal">
                  <strong>3.27</strong>
                  <span>เกรดเฉลี่ยปริญญาตรี</span>
                </div>
              </div>
              <div className="about-cards">
                {skills.map((s) => {
                  const Icon = Icons[s.icon];
                  return (
                    <article key={s.title} className="reveal">
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
            <SectionHead label="02 / ทักษะ">
              เครื่องมือที่ใช้จริง
              <br />
              <em>ในงานทุกวัน.</em>
            </SectionHead>
            <div className="skill-groups">
              {skillGroups.map((g) => (
                <div key={g.title} className="skill-group reveal">
                  <h3>{g.title}</h3>
                  <div className="chips">
                    {g.chips.map((c) => (
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
          <SectionHead label="03 / ประสบการณ์">
            ประสบการณ์จาก
            <br />
            <em>หน้างานจริง.</em>
          </SectionHead>
          <div className="timeline">
            {experience.map((e) => (
              <article key={e.company} className="timeline-item reveal">
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
            <h3>หน้าที่ความรับผิดชอบ</h3>
            <ol>
              {duties.map((d, i) => (
                <li key={i}>
                  <b>{String(i + 1).padStart(2, "0")}</b>
                  <p>{d}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* ============ 04 EDUCATION ============ */}
        <section className="section skills-section" id="education">
          <div className="container">
            <SectionHead label="04 / การศึกษา">
              เส้นทาง
              <br />
              <em>การเรียนรู้.</em>
            </SectionHead>
            <div className="edu-grid">
              {education.map((e) => (
                <article key={e.period} className="edu-card reveal">
                  <div className="edu-top">
                    <span>{e.period}</span>
                    <GraduationCap size={24} />
                  </div>
                  <h3>{e.level}</h3>
                  <p>{e.school}</p>
                  <div className="edu-gpa">
                    <small>เกรดเฉลี่ย</small>
                    <strong>{e.gpa}</strong>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ============ 05 TRAINING ============ */}
        <section className="section container" id="training">
          <SectionHead label="05 / อบรม &amp; ใบรับรอง">
            ปลอดภัยไว้ก่อน
            <br />
            <em>ในทุกการทำงาน.</em>
          </SectionHead>
          <div className="train-grid">
            {trainings.map((t, i) => {
              const Icon = Icons[t.icon];
              return (
                <article key={t.title} className="train-card reveal">
                  <div className="train-ico">
                    <Icon size={24} />
                  </div>
                  <span className="train-num">
                    <Award size={14} /> CERTIFICATE {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3>{t.title}</h3>
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
              <span>06 / ติดต่อ</span>
              <h2>
                มาร่วมงาน
                <br />
                กันเถอะครับ.
              </h2>
            </div>
            <a className="contact-circle" href={`mailto:${profile.email}`}>
              ส่งอีเมล <ArrowUpRight size={26} />
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
            © 2026 {fullName} — {profile.position}
          </p>
          <a href="#home">กลับขึ้นด้านบน ↑</a>
        </div>
      </footer>
    </>
  );
}
