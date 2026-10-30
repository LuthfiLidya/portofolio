const experiences = [
  ["Project Monitoring Intern", "PT. Aneka Dharma Persada · May–Jul 2025", "Monitored productivity and material efficiency on a Rp 64.4 billion road and bridge project. Analysed four pier lift levels and prepared Bar Bending Schedules from structural drawings.", "p03-01.webp", "p03-02.webp"],
  ["Technical Instructor", "SMK N 2 Yogyakarta · Jul–Sep 2025", "Taught civil engineering fundamentals to 100+ vocational students across a 272-hour practical block. Delivered AutoCAD, Revit, and technical drawing training and developed learning modules.", "p04-01.webp", "p04-02.webp"],
  ["Technical & Procurement Team Member", "National Bridge Competition (KJI) · 2023–2024", "Coordinated technical preparation, structural fabrication, budgeting, and procurement. Managed around Rp 120 million in bridge competition funds with zero budget overruns.", "p05-02.webp", "p05-03.webp"],
  ["Secretary General", "UKM Rekayasa Teknologi UNY · Jul 2023–Dec 2025", "Managed administration and documentation for 39 funding proposals. Coordinated recruitment for around 1,000 applicants and onboarding of 439 members across five divisions.", "p06-02.webp", "p06-03.webp"],
];
const others = [
  ["Master of Ceremony", "Upgrading UKM Rekayasa Teknologi", "p07-02.webp"], ["Public Relations", "General Stadium", "p07-03.webp"], ["Judge Liaison Officer", "UNITY", "p07-04.webp"],
  ["Administration Team", "Design and Construction Recruitment", "p07-05.webp"], ["Public Relations", "Musyawarah Anggota", "p07-06.webp"], ["Team Mentor", "Design and Construction Recruitment", "p07-01.webp"],
];
const projects = [
  ["Mbeling Bridge Redesign", "p08-01.webp"], ["Steel School Building", "p08-02.webp"], ["Concrete Shophouse", "p08-03.webp"],
  ["Cost Estimate", "p09-01.webp"], ["Geotechnical Analysis", "p09-02.webp"], ["Revit Modeling", "p09-03.webp"],
  ["Indekos Modeling 2D", "p10-01.webp"], ["Road Geometry Design", "p10-02.webp"], ["Interior Design", "p10-03.webp"],
];
const contacts = [
  ["WhatsApp", "0851 5907 6440", "https://wa.me/6285159076440"], ["LinkedIn", "linkedin.com/in/Luthfilidya", "https://linkedin.com/in/Luthfilidya"],
  ["Email", "lidyalutfi@gmail.com", "mailto:lidyalutfi@gmail.com"], ["Instagram", "@luth.fiii87", "https://www.instagram.com/luth.fiii87"],
];
const asset = (file: string, alt: string) => <img src={`/img/pdf-assets/${file}`} alt={alt} loading="lazy" />;

export default function PortfolioPages() {
  return <>
    <section className="content-section" id="experience" aria-labelledby="experience-title"><div className="section-inner">
      <p className="eyebrow">01 / THE JOURNEY</p><h2 id="experience-title">EXPERIENCE</h2>
      <div className="experience-list">{experiences.map(([title, meta, description, first, second], i) => <article className="experience-card scroll-reveal" key={title}>
        <div><span className="item-index">0{i + 1}</span><h3>{title}</h3><p className="item-meta">{meta}</p><p>{description}</p></div>
        <div className="experience-photos"><div>{asset(first, `${title} photo 1`)}</div><div>{asset(second, `${title} photo 2`)}</div></div>
      </article>)}</div>
      <h3 className="subheading">OTHER EXPERIENCE</h3><div className="other-grid">{others.map(([title, detail, file]) => <article className="other-card scroll-reveal" key={detail + title}>{asset(file, `${title}: ${detail}`)}<h4>{title}</h4><p>{detail}</p></article>)}</div>
    </div></section>
    <section className="content-section projects-section" id="project" aria-labelledby="project-title"><div className="section-inner">
      <p className="eyebrow">02 / SELECTED WORK</p><h2 id="project-title">PROJECT PORTFOLIO</h2>
      <div className="project-grid">{projects.map(([title, file], i) => <article className="project-card scroll-reveal" key={title}>{asset(file, `${title} preview`)}<div><span>{String(i + 1).padStart(2, "0")}</span><h3>{title}</h3></div></article>)}</div>
      <p className="project-note">Full report for each project available on request.</p>
    </div></section>
    <section className="content-section" id="certificate" aria-labelledby="certificate-title"><div className="section-inner">
      <p className="eyebrow">03 / CREDENTIALS</p><h2 id="certificate-title">CERTIFICATES</h2>
      <div className="certificate-grid">{Array.from({ length: 20 }, (_, i) => { const file = `p11-${String(i + 1).padStart(2, "0")}.webp`; return <a className="certificate-card scroll-reveal" key={file} href={`/img/pdf-assets/${file}`} target="_blank" rel="noopener noreferrer" aria-label={`Open certificate ${i + 1}`}>{asset(file, `Certificate ${i + 1}`)}</a>; })}</div>
    </div></section>
    <section className="contact-section" id="contact" aria-labelledby="contact-title"><div className="section-inner contact-inner"><div><p className="eyebrow">04 / GET IN TOUCH</p><h2 id="contact-title">CONTACT<br />ME</h2><p>Thank you for taking the time to view my work. I am ready to learn quickly and contribute to your team.</p></div><div className="contact-links">{contacts.map(([label, value, href]) => <a href={href} key={label} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noopener noreferrer" : undefined}><span>{label}</span><strong>{value}</strong><span aria-hidden="true">↗</span></a>)}</div></div></section>
  </>;
}
