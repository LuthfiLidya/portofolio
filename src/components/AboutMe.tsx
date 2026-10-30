const software = [
  { name: "AutoCAD", image: "autocad.png", className: "" },
  { name: "SketchUp", image: "sketchup.png", className: "" },
  { name: "SAP2000", image: "", className: "wide sap" },
  { name: "Revit", image: "revit.png", className: "" },
  { name: "Civil 3D", image: "civil3d.png", className: "" },
  { name: "Microsoft Office", image: "office.png", className: "wide office" },
  { name: "Enscape", image: "enscape.png", className: "enscape" },
  { name: "Google Earth Pro", image: "google-earth-pro.png", className: "" },
  { name: "Canva", image: "canva.png", className: "" },
  { name: "Google Workspace", image: "google-workspace.png", className: "" },
];

export default function AboutMe() {
  return (
    <section className="about" id="about" aria-labelledby="about-title">
      <div className="about-grain" aria-hidden="true" />
      <div className="about-layout">
        <div className="about-identity">
          <h2 id="about-title" className="about-title about-reveal">ABOUT ME</h2>
          <div className="about-stars about-reveal" aria-hidden="true"><span>✦</span><span>✦</span><span>✦</span></div>
          <img className="about-photo" src="/img/lupio-about-me.png" alt="Portrait of Luthfi Lidya Ningrum" width="765" height="1270" loading="eager" />
        </div>

        <p className="about-summary about-reveal">
          Recent graduate in Civil Engineering and Planning from Universitas Negeri Yogyakarta, graduating Cum Laude (GPA: 3.72/4.00). Experienced in infrastructure project monitoring, productivity analysis, cost estimation, and material procurement through industrial practice and national-level bridge competitions. Brings technical expertise, analytical problem-solving, and leadership experience to support effective construction project execution.
        </p>

        <div className="about-education about-reveal">
          <div className="about-dashes" aria-hidden="true" />
          <h3>EDUCATION</h3>
          <p>Universitas Negeri Yogyakarta (UNY)<br />
            <em>Bachelor of Education in Civil Engineering and Planning</em><br />
            <em>Yogyakarta, Indonesia | Aug 2022 – Aug 2026</em><br />
            GPA: 3.72/4.00 (Cum Laude)<br />
            Student Achievement Award in Reasoning, May 2025<br />
            Language Certification: ProTEFL UNY
          </p>
        </div>

        <div className="about-skills about-reveal">
          <h3>SOFTWARE SKILLS</h3>
          <ul className="about-logo-grid" aria-label="Software skills">
            {software.map(({ name, image, className }) => (
              <li className={`about-logo ${className}`} key={name} title={name}>
                {name === "SAP2000" ? <span className="sap-wordmark" aria-label="SAP2000"><strong>SAP</strong>2000</span> : <img src={`/img/software/${image}`} alt={name} loading="lazy" />}
                {name === "Microsoft Office" && <span>Office</span>}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
