"use client";

import { useRef } from "react";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";

gsap.registerPlugin(useGSAP);

export default function LupioPortfolio() {
  const root = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const intro = root.current?.querySelector(".intro");
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      if (intro) gsap.set(intro, { display: "none" });
      return;
    }

    gsap.set(".hero-letter", { yPercent: 110 });
    gsap.set(".hero-person", { y: 130, scale: 0.93, autoAlpha: 0 });
    gsap.set(".hero-reveal", { y: 34, autoAlpha: 0 });

    const opening = gsap.timeline({ defaults: { ease: "power3.out" } });
    opening
      .fromTo(".intro-title", { yPercent: 105 }, { yPercent: 0, duration: 0.75 })
      .to(".intro-progress", { scaleX: 1, duration: 0.9, ease: "power2.inOut" }, "-=0.4")
      .to(".intro", { yPercent: -101, duration: 0.8, ease: "power4.inOut" }, "+=0.12")
      .set(".intro", { display: "none" })
      .to(".hero-letter", { yPercent: 0, stagger: 0.055, duration: 0.9, ease: "power4.out" }, "-=0.45")
      .to(".hero-person", { y: 0, scale: 1, autoAlpha: 1, duration: 1.05, ease: "back.out(1.35)" }, "-=0.52")
      .to(".hero-reveal", { y: 0, autoAlpha: 1, stagger: 0.11, duration: 0.72 }, "-=0.45");

    const onPointerMove = (event: PointerEvent) => {
      if (window.innerWidth < 801) return;
      const x = (event.clientX / window.innerWidth - 0.5) * 22;
      const y = (event.clientY / window.innerHeight - 0.5) * 12;
      gsap.to(".hero-person", { x, y, duration: 1.1, ease: "power2.out", overwrite: "auto" });
      gsap.to(".hero-title", { x: -x * 0.32, y: -y * 0.3, duration: 1.3, ease: "power2.out", overwrite: "auto" });
    };
    window.addEventListener("pointermove", onPointerMove);
    return () => window.removeEventListener("pointermove", onPointerMove);
  }, { scope: root });

  return (
    <div className="site" ref={root}>
      <div className="intro" aria-hidden="true">
        <div className="intro-top"><span>LLN — 2026</span><span>LOADING PORTFOLIO</span></div>
        <div className="intro-title-mask"><span className="intro-title">PORTFOLIO</span></div>
        <div className="intro-bottom"><span>ENTERING THE WORLD OF LUPIO</span><div className="intro-rule"><span className="intro-progress" /></div><span>01 / 01</span></div>
      </div>

      <main>
        <section className="hero" id="home" aria-labelledby="hero-title">
          <div className="hero-grain" aria-hidden="true" />
          <div className="hero-title-mask"><h1 className="hero-title" id="hero-title" aria-label="Portfolio">{"PORTFOLIO".split("").map((letter, index) => <span className="hero-letter-mask" key={`${letter}-${index}`}><span className="hero-letter">{letter}</span></span>)}</h1></div>
          <div className="hero-person-wrap"><img className="hero-person" src="/img/lupio-transparant.png" alt="Luthfi Lidya Ningrum" fetchPriority="high" /></div>
          <div className="hero-side-left"><div className="hero-year hero-reveal">2026</div></div>
          <div className="hero-side-right"><p className="hero-name hero-reveal">LUTHFI<br />LIDYA<br />NINGRUM</p><div className="dash-line hero-reveal" /></div>
          <div className="hero-bottom-left hero-reveal">FRESH GRADUATE<br />CIVIL ENGINEERING<br />AND PLANNING EDUCATION</div>
          <div className="hero-bottom-right hero-reveal"><span>BUILT WITH PURPOSE</span><ArrowUpRight size={19} /></div>
          <div className="hero-scroll hero-reveal" aria-hidden="true">THE STORY STARTS HERE <ArrowDown size={15} /></div>
        </section>
      </main>
    </div>
  );
}
