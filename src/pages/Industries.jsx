
import { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  ArrowRight,
  Pill,
  FlaskConical,
  Factory,
  Building2,
  Microscope,
  Cog,
  CheckCircle2,
  ShieldCheck,
  Layers3,
  MoveUpRight,
  Ruler,
  Settings2,
  Workflow
} from "lucide-react";

function Industries() {
  const industries = [
    {
      number: "01",
      icon: Pill,
      title: "Pharmaceutical Industry",
      description:
        "Understanding fabrication requirements in pharmaceutical manufacturing environments, where project specifications and quality expectations are important.",
      tags: ["Pharmaceutical Manufacturing", "Industrial Projects"]
    },
    {
      number: "02",
      icon: FlaskConical,
      title: "Chemical Industry",
      description:
        "Supporting discussions around fabrication requirements for chemical and process-oriented industrial environments.",
      tags: ["Chemical Manufacturing", "Process Industry"]
    },
    {
      number: "03",
      icon: Factory,
      title: "Industrial Manufacturing",
      description:
        "Fabrication-related project requirements for manufacturing facilities and industrial operations.",
      tags: ["Industrial Facilities", "Manufacturing"]
    },
    {
      number: "04",
      icon: Cog,
      title: "Engineering & Infrastructure",
      description:
        "Project-based fabrication discussions aligned with engineering requirements, drawings and agreed technical specifications.",
      tags: ["Engineering", "Infrastructure"]
    },
    {
      number: "05",
      icon: Microscope,
      title: "Specialised Industrial Environments",
      description:
        "Understanding specific operational requirements and discussing suitable fabrication approaches for specialised facilities.",
      tags: ["Technical Requirements", "Custom Projects"]
    },
    {
      number: "06",
      icon: Building2,
      title: "Corporate & Industrial Facilities",
      description:
        "Working with businesses to understand facility-related fabrication needs and project expectations.",
      tags: ["Corporate Projects", "Industrial Facilities"]
    }
  ];

  const considerations = [
    "Project specifications and technical drawings",
    "Application and operating environment",
    "Material grades and dimension requirements",
    "Quality expectations and project scope",
    "Project schedule and coordination"
  ];

  useEffect(() => {
    const elements = document.querySelectorAll("[data-industry-reveal]");

    if (!("IntersectionObserver" in window)) {
      elements.forEach((element) =>
        element.classList.add("pe-i-visible")
      );
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("pe-i-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08 }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style>{`
        .pe-industries-page {
          --orange: #ed762b;
          --orange-dark: #d75c19;
          --navy: #102a38;
          --navy-dark: #0b202c;
          --ink: #172f3b;
          --muted: #71818a;
          --paper: #f5f7f7;
          --line: #e3e9e9;
          background: var(--paper);
          color: var(--ink);
          font-family: Arial, Helvetica, sans-serif;
          overflow: hidden;
        }

        .pe-industries-page *,
        .pe-industries-page *::before,
        .pe-industries-page *::after {
          box-sizing: border-box;
        }

        .pe-i-container {
          width: min(1220px, calc(100% - 48px));
          margin: 0 auto;
        }

        .pe-i-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 11px;
          color: var(--orange);
          font-size: 10px;
          font-weight: 800;
          letter-spacing: 2.2px;
          text-transform: uppercase;
        }

        .pe-i-eyebrow::before {
          content: "";
          width: 25px;
          height: 2px;
          background: var(--orange);
        }

        .pe-i-reveal {
          opacity: 0;
          transform: translateY(18px);
          transition: opacity .6s ease, transform .6s ease;
        }

        .pe-i-reveal.pe-i-visible {
          opacity: 1;
          transform: translateY(0);
        }

        /* HERO */

        .pe-i-hero {
          position: relative;
          isolation: isolate;
          overflow: hidden;
          min-height: 570px;
          display: flex;
          align-items: center;
          color: white;
          background: var(--navy);
        }

        .pe-i-hero::before {
          content: "";
          position: absolute;
          z-index: -1;
          inset: 0;
          background:
            radial-gradient(
              ellipse at 82% 42%,
              rgba(237,118,43,.13),
              transparent 35%
            ),
            linear-gradient(
              115deg,
              #102a38 0%,
              #102a38 55%,
              #173746 100%
            );
        }

        .pe-i-hero::after {
          content: "";
          position: absolute;
          z-index: -1;
          inset: 0;
          opacity: .15;
          background-image:
            linear-gradient(rgba(255,255,255,.12) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,.12) 1px, transparent 1px);
          background-size: 65px 65px;
          mask-image: linear-gradient(90deg, transparent, black);
        }

        .pe-i-hero-content {
          width: 100%;
          padding: 105px 0 65px;
        }

        .pe-i-hero-layout {
          display: grid;
          grid-template-columns: 1.35fr .65fr;
          align-items: center;
          gap: 65px;
        }

        .pe-i-hero-copy {
          max-width: 760px;
        }

        .pe-i-hero .pe-i-eyebrow {
          color: #ffb477;
        }

        .pe-i-hero .pe-i-eyebrow::before {
          background: #ffb477;
        }

        .pe-i-hero h1 {
          margin: 25px 0 22px;
          color: white;
          font-size: clamp(48px, 6.2vw, 76px);
          line-height: 1.04;
          letter-spacing: -3.5px;
          font-weight: 800;
        }

        .pe-i-hero h1 span {
          display: block;
          color: #ffad65;
        }

        .pe-i-hero-description {
          max-width: 590px;
          margin: 0;
          color: #c0cdd2;
          font-size: 14px;
          line-height: 2;
        }

        .pe-i-hero-actions {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 25px;
          margin-top: 34px;
        }

        .pe-i-primary-button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 13px;
          padding: 16px 22px;
          color: white;
          background: var(--orange);
          text-decoration: none;
          font-size: 10px;
          font-weight: 800;
          letter-spacing: 1px;
          transition: background .25s ease, transform .25s ease;
        }

        .pe-i-primary-button:hover {
          background: var(--orange-dark);
          transform: translateY(-3px);
        }

        .pe-i-text-link {
          display: inline-flex;
          align-items: center;
          gap: 9px;
          color: white;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 1px;
          text-decoration: none;
          transition: color .25s ease;
        }

        .pe-i-text-link:hover {
          color: #ffad65;
        }

        /* HERO SIDE PANEL */

        .pe-i-hero-panel {
          position: relative;
          padding: 30px;
          border: 1px solid rgba(255,255,255,.15);
          background: rgba(255,255,255,.045);
          backdrop-filter: blur(8px);
        }

        .pe-i-panel-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-bottom: 20px;
          border-bottom: 1px solid rgba(255,255,255,.15);
        }

        .pe-i-panel-label {
          color: #a9bdc7;
          font-size: 9px;
          font-weight: 800;
          letter-spacing: 1.8px;
          text-transform: uppercase;
        }

        .pe-i-panel-icon {
          width: 38px;
          height: 38px;
          display: grid;
          place-items: center;
          color: #ffad65;
          background: rgba(237,118,43,.13);
        }

        .pe-i-panel-number {
          margin: 25px 0 8px;
          color: white;
          font-size: 65px;
          line-height: 1;
          font-weight: 800;
          letter-spacing: -4px;
        }

        .pe-i-panel-number span {
          color: #ffad65;
        }

        .pe-i-panel-description {
          margin: 0;
          color: #b6c5cb;
          font-size: 11px;
          line-height: 1.8;
        }

        .pe-i-panel-bottom {
          display: flex;
          align-items: center;
          gap: 9px;
          margin-top: 27px;
          padding-top: 18px;
          border-top: 1px solid rgba(255,255,255,.15);
          color: #d7e0e4;
          font-size: 9px;
          letter-spacing: 1px;
          text-transform: uppercase;
        }

        .pe-i-status-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: var(--orange);
        }

        .pe-i-hero-bottom {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 20px;
          margin-top: 75px;
          padding-top: 20px;
          border-top: 1px solid rgba(255,255,255,.17);
          color: #a9bdc7;
          font-size: 9px;
          letter-spacing: 1.5px;
          text-transform: uppercase;
        }

        /* INTRO STRIP */

        .pe-i-intro {
          background: white;
          border-bottom: 1px solid var(--line);
        }

        .pe-i-intro-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
        }

        .pe-i-intro-item {
          display: flex;
          align-items: center;
          gap: 16px;
          padding: 28px;
          border-right: 1px solid var(--line);
        }

        .pe-i-intro-item:first-child {
          padding-left: 0;
        }

        .pe-i-intro-item:last-child {
          border-right: 0;
        }

        .pe-i-intro-icon {
          width: 45px;
          height: 45px;
          flex-shrink: 0;
          display: grid;
          place-items: center;
          color: var(--orange);
          background: #fff1e7;
        }

        .pe-i-intro-item strong {
          display: block;
          margin-bottom: 5px;
          color: var(--ink);
          font-size: 12px;
        }

        .pe-i-intro-item span {
          display: block;
          color: var(--muted);
          font-size: 10px;
          line-height: 1.6;
        }

        /* INDUSTRIES */

        .pe-i-section {
          padding: 105px 0;
        }

        .pe-i-heading {
          display: flex;
          justify-content: space-between;
          align-items: end;
          gap: 35px;
          margin-bottom: 45px;
        }

        .pe-i-heading h2 {
          max-width: 680px;
          margin: 17px 0 0;
          color: var(--ink);
          font-size: clamp(34px, 4.5vw, 53px);
          line-height: 1.1;
          letter-spacing: -2.4px;
        }

        .pe-i-heading h2 span {
          color: var(--orange);
        }

        .pe-i-heading > p {
          max-width: 355px;
          margin: 0 0 5px;
          color: var(--muted);
          font-size: 12px;
          line-height: 1.9;
        }

        .pe-i-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 18px;
        }

        .pe-i-card {
          position: relative;
          min-width: 0;
          min-height: 285px;
          display: flex;
          flex-direction: column;
          padding: 28px;
          background: white;
          border: 1px solid var(--line);
          transition: border-color .3s ease, transform .3s ease, box-shadow .3s ease;
        }

        .pe-i-card:hover {
          transform: translateY(-5px);
          border-color: rgba(237,118,43,.55);
          box-shadow: 0 18px 40px rgba(16,42,56,.07);
        }

        .pe-i-card-top {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 27px;
        }

        .pe-i-card-icon {
          width: 52px;
          height: 52px;
          display: grid;
          place-items: center;
          color: var(--orange);
          background: #fff1e7;
          transition: background .3s ease, color .3s ease;
        }

        .pe-i-card:hover .pe-i-card-icon {
          color: white;
          background: var(--orange);
        }

        .pe-i-card-number {
          color: #aab5ba;
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 1.5px;
        }

        .pe-i-card h3 {
          margin: 0 0 12px;
          color: #1b3541;
          font-size: 18px;
          line-height: 1.35;
          letter-spacing: -.4px;
        }

        .pe-i-card > p {
          margin: 0;
          color: #74838a;
          font-size: 11px;
          line-height: 1.9;
        }

        .pe-i-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 7px;
          margin-top: auto;
          padding-top: 23px;
        }

        .pe-i-tags span {
          padding: 7px 9px;
          color: #596e77;
          background: #f0f3f4;
          font-size: 9px;
          font-weight: 700;
        }

        .pe-i-card-arrow {
          position: absolute;
          right: 27px;
          bottom: 27px;
          color: var(--orange);
          opacity: 0;
          transform: translate(-5px, 5px);
          transition: opacity .25s ease, transform .25s ease;
        }

        .pe-i-card:hover .pe-i-card-arrow {
          opacity: 1;
          transform: translate(0, 0);
        }

        .pe-i-note {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          margin-top: 28px;
          padding: 19px 22px;
          background: white;
          border-left: 3px solid var(--orange);
          color: #697a82;
          font-size: 11px;
          line-height: 1.8;
        }

        .pe-i-note svg {
          flex-shrink: 0;
          color: var(--orange);
        }

        /* REQUIREMENTS SECTION */

        .pe-i-focus {
          position: relative;
          overflow: hidden;
          color: white;
          background: var(--navy);
        }

        .pe-i-focus::after {
          content: "";
          position: absolute;
          width: 500px;
          height: 500px;
          right: -220px;
          top: -230px;
          border: 1px solid rgba(255,255,255,.07);
          border-radius: 50%;
          box-shadow:
            0 0 0 45px rgba(255,255,255,.025),
            0 0 0 90px rgba(255,255,255,.02);
          pointer-events: none;
        }

        .pe-i-focus-grid {
          position: relative;
          z-index: 1;
          display: grid;
          grid-template-columns: 1fr 1fr;
          align-items: center;
          gap: 85px;
        }

        .pe-i-focus-copy h2 {
          max-width: 550px;
          margin: 19px 0;
          color: white;
          font-size: clamp(34px, 4.5vw, 52px);
          line-height: 1.1;
          letter-spacing: -2.3px;
        }

        .pe-i-focus-copy h2 span {
          color: #ffad65;
        }

        .pe-i-focus-copy > p {
          max-width: 480px;
          color: #b1c1c8;
          font-size: 12px;
          line-height: 2;
        }

        .pe-i-focus-list {
          border-top: 1px solid rgba(255,255,255,.18);
        }

        .pe-i-focus-item {
          display: flex;
          align-items: center;
          gap: 15px;
          padding: 20px 0;
          border-bottom: 1px solid rgba(255,255,255,.18);
          color: #dce8ed;
          font-size: 12px;
        }

        .pe-i-focus-item > svg:first-child {
          flex-shrink: 0;
          color: #ffad65;
        }

        .pe-i-focus-item > svg:last-child {
          margin-left: auto;
          color: #ffad65;
          opacity: .5;
        }

        /* EXPERIENCE */

        .pe-i-experience {
          padding: 75px 0;
          background: #e9edef;
        }

        .pe-i-experience-inner {
          display: grid;
          grid-template-columns: .8fr 1.2fr;
          align-items: center;
          gap: 55px;
        }

        .pe-i-experience-number {
          color: var(--orange);
          font-size: clamp(85px, 11vw, 130px);
          font-weight: 800;
          line-height: .9;
          letter-spacing: -8px;
        }

        .pe-i-experience-number span {
          font-size: 38px;
          letter-spacing: -2px;
        }

        .pe-i-experience-copy h2 {
          margin: 15px 0 13px;
          color: var(--ink);
          font-size: clamp(27px, 3.5vw, 39px);
          line-height: 1.15;
          letter-spacing: -1.5px;
        }

        .pe-i-experience-copy p {
          max-width: 570px;
          margin: 0;
          color: var(--muted);
          font-size: 12px;
          line-height: 1.9;
        }

        /* CTA */

        .pe-i-cta {
          position: relative;
          padding: 85px 0;
          overflow: hidden;
          color: white;
          background:
            radial-gradient(
              circle at 90% 20%,
              rgba(237,118,43,.13),
              transparent 28%
            ),
            var(--navy-dark);
        }

        .pe-i-cta-inner {
          position: relative;
          z-index: 1;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 35px;
        }

        .pe-i-cta h2 {
          max-width: 680px;
          margin: 17px 0 12px;
          color: white;
          font-size: clamp(32px, 4.5vw, 50px);
          line-height: 1.1;
          letter-spacing: -2px;
        }

        .pe-i-cta p {
          max-width: 550px;
          margin: 0;
          color: #b1c1c8;
          font-size: 12px;
          line-height: 1.9;
        }

        .pe-i-cta-button {
          flex-shrink: 0;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 13px;
          padding: 18px 25px;
          color: white;
          background: var(--orange);
          text-decoration: none;
          font-size: 10px;
          font-weight: 800;
          letter-spacing: 1px;
          transition: background .25s ease, transform .25s ease;
        }

        .pe-i-cta-button:hover {
          background: var(--orange-dark);
          transform: translateY(-3px);
        }

        /* RESPONSIVE */

        @media(max-width: 1000px) {
          .pe-i-hero-layout {
            grid-template-columns: 1fr .65fr;
            gap: 35px;
          }

          .pe-i-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .pe-i-focus-grid {
            gap: 45px;
          }
        }

        @media(max-width: 760px) {
          .pe-i-hero {
            min-height: auto;
          }

          .pe-i-hero-content {
            padding: 85px 0 50px;
          }

          .pe-i-hero-layout {
            grid-template-columns: 1fr;
            gap: 40px;
          }

          .pe-i-hero h1 {
            letter-spacing: -2.5px;
          }

          .pe-i-hero-panel {
            max-width: 420px;
          }

          .pe-i-hero-bottom {
            margin-top: 50px;
          }

          .pe-i-intro-grid {
            grid-template-columns: 1fr;
          }

          .pe-i-intro-item,
          .pe-i-intro-item:first-child {
            padding: 19px 0;
            border-right: 0;
            border-bottom: 1px solid var(--line);
          }

          .pe-i-intro-item:last-child {
            border-bottom: 0;
          }

          .pe-i-section {
            padding: 78px 0;
          }

          .pe-i-heading {
            display: block;
            margin-bottom: 35px;
          }

          .pe-i-heading > p {
            margin-top: 18px;
          }

          .pe-i-focus-grid {
            grid-template-columns: 1fr;
            gap: 35px;
          }

          .pe-i-experience-inner {
            grid-template-columns: 1fr;
            gap: 25px;
          }

          .pe-i-cta-inner {
            align-items: flex-start;
            flex-direction: column;
          }

          .pe-i-cta-button {
            width: 100%;
          }
        }

        @media(max-width: 520px) {
          .pe-i-container {
            width: calc(100% - 36px);
          }

          .pe-i-hero-content {
            padding: 75px 0 40px;
          }

          .pe-i-hero h1 {
            font-size: 44px;
          }

          .pe-i-hero-description {
            font-size: 12px;
          }

          .pe-i-hero-actions {
            align-items: flex-start;
            flex-direction: column;
            gap: 19px;
          }

          .pe-i-hero-bottom {
            align-items: flex-start;
            flex-direction: column;
            gap: 12px;
            font-size: 8px;
          }

          .pe-i-grid {
            grid-template-columns: 1fr;
          }

          .pe-i-card {
            min-height: 260px;
          }

          .pe-i-focus-copy h2 {
            font-size: 37px;
          }

          .pe-i-experience {
            padding: 60px 0;
          }

          .pe-i-experience-number {
            font-size: 95px;
          }

          .pe-i-cta {
            padding: 70px 0;
          }
        }

        @media(prefers-reduced-motion: reduce) {
          .pe-industries-page *,
          .pe-industries-page *::before,
          .pe-industries-page *::after {
            animation-duration: .01ms !important;
            transition-duration: .01ms !important;
            scroll-behavior: auto !important;
          }

          .pe-i-reveal {
            opacity: 1;
            transform: none;
          }
        }
      `}</style>

      <main className="pe-industries-page">

        {/* HERO */}

        <section className="pe-i-hero">
          <div className="pe-i-container">
            <div className="pe-i-hero-content">

              <div className="pe-i-hero-layout">
                <div className="pe-i-hero-copy">
                  <span className="pe-i-eyebrow">
                    Industries We Work With
                  </span>

                  <h1>
                    Industry knowledge.
                    <span>Fabrication focus.</span>
                  </h1>

                  <p className="pe-i-hero-description">
                    Prathamesh Enterprises brings 18 years of
                    fabrication experience to industrial project
                    discussions. We understand that every industry
                    has its own environment, specifications and
                    expectations.
                  </p>

                  <div className="pe-i-hero-actions">
                    <Link to="/enquiry" className="pe-i-primary-button">
                      DISCUSS YOUR REQUIREMENT
                      <ArrowUpRight size={17} />
                    </Link>

                    <a href="#industry-sectors" className="pe-i-text-link">
                      EXPLORE INDUSTRIES
                      <ArrowRight size={15} />
                    </a>
                  </div>
                </div>

                <div className="pe-i-hero-panel">
                  <div className="pe-i-panel-top">
                    <span className="pe-i-panel-label">
                      Our experience
                    </span>
                    <div className="pe-i-panel-icon">
                      <Factory size={20} />
                    </div>
                  </div>

                  <div className="pe-i-panel-number">
                    18<span>+</span>
                  </div>

                  <p className="pe-i-panel-description">
                    Years of fabrication experience and understanding
                    of industrial project requirements.
                  </p>

                  <div className="pe-i-panel-bottom">
                    <i className="pe-i-status-dot" />
                    Prathamesh Enterprises
                  </div>
                </div>
              </div>

              <div className="pe-i-hero-bottom">
                <span>Industrial fabrication</span>
                <span>Engineering · Manufacturing · Projects</span>
              </div>

            </div>
          </div>
        </section>

        {/* INTRO STRIP */}

        <section className="pe-i-intro">
          <div className="pe-i-container">
            <div className="pe-i-intro-grid">

              <div className="pe-i-intro-item" data-industry-reveal>
                <div className="pe-i-intro-icon">
                  <Factory size={21} />
                </div>
                <div>
                  <strong>Industrial Environments</strong>
                  <span>Understanding operational requirements</span>
                </div>
              </div>

              <div className="pe-i-intro-item" data-industry-reveal>
                <div className="pe-i-intro-icon">
                  <Layers3 size={21} />
                </div>
                <div>
                  <strong>Project-Based Approach</strong>
                  <span>Requirements and scope discussions</span>
                </div>
              </div>

              <div className="pe-i-intro-item" data-industry-reveal>
                <div className="pe-i-intro-icon">
                  <ShieldCheck size={21} />
                </div>
                <div>
                  <strong>Specification Awareness</strong>
                  <span>Attention to project details</span>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* INDUSTRY SECTORS */}

        <section className="pe-i-section" id="industry-sectors">
          <div className="pe-i-container">

            <div className="pe-i-heading" data-industry-reveal>
              <div>
                <span className="pe-i-eyebrow">Industry Sectors</span>
                <h2>
                  Different industries.
                  <span> Different requirements.</span>
                </h2>
              </div>

              <p>
                Explore the industrial sectors relevant to our
                business profile. Each project is considered
                according to its specific requirements and scope.
              </p>
            </div>

            <div className="pe-i-grid">
              {industries.map((industry) => {
                const Icon = industry.icon;

                return (
                  <article
                    className="pe-i-card pe-i-reveal"
                    data-industry-reveal
                    key={industry.number}
                  >
                    <div className="pe-i-card-top">
                      <div className="pe-i-card-icon">
                        <Icon size={23} />
                      </div>

                      <span className="pe-i-card-number">
                        SECTOR / {industry.number}
                      </span>
                    </div>

                    <h3>{industry.title}</h3>

                    <p>{industry.description}</p>

                    <div className="pe-i-tags">
                      {industry.tags.map((tag) => (
                        <span key={tag}>{tag}</span>
                      ))}
                    </div>

                    <ArrowUpRight
                      className="pe-i-card-arrow"
                      size={19}
                    />
                  </article>
                );
              })}
            </div>

            <div className="pe-i-note" data-industry-reveal>
              <CheckCircle2 size={17} />
              <span>
                These categories describe industries relevant to
                the business profile. Confirm specific client
                sectors, completed projects and specialist
                capabilities before publishing them as verified
                experience.
              </span>
            </div>

          </div>
        </section>

        {/* PROJECT REQUIREMENTS */}

        <section className="pe-i-section pe-i-focus">
          <div className="pe-i-container">
            <div className="pe-i-focus-grid">

              <div className="pe-i-focus-copy" data-industry-reveal>
                <span className="pe-i-eyebrow">
                  Understanding Your Industry
                </span>

                <h2>
                  Every project deserves
                  <span> the right attention.</span>
                </h2>

                <p>
                  Industrial fabrication requirements can vary
                  depending on the application, operating
                  environment and technical specifications.
                  Understanding these details is an important
                  part of discussing any project.
                </p>

                <p>
                  We encourage clients to share their drawings,
                  specifications and project scope so that the
                  requirement can be understood clearly.
                </p>
              </div>

              <div className="pe-i-focus-list" data-industry-reveal>
                {considerations.map((item) => (
                  <div className="pe-i-focus-item" key={item}>
                    <CheckCircle2 size={19} />
                    <span>{item}</span>
                    <MoveUpRight size={15} />
                  </div>
                ))}
              </div>

            </div>
          </div>
        </section>

        {/* EXPERIENCE */}

        <section className="pe-i-experience">
          <div className="pe-i-container">
            <div className="pe-i-experience-inner">

              <div
                className="pe-i-experience-number pe-i-reveal"
                data-industry-reveal
              >
                18<span>+</span>
              </div>

              <div
                className="pe-i-experience-copy pe-i-reveal"
                data-industry-reveal
              >
                <span className="pe-i-eyebrow">
                  Experience That Matters
                </span>

                <h2>
                  18 years of fabrication experience.
                </h2>

                <p>
                  Experience brings an understanding of industrial
                  project expectations, technical discussions and
                  the importance of clear coordination. At
                  Prathamesh Enterprises, every enquiry begins
                  with understanding the actual requirement.
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* CTA */}

        <section className="pe-i-cta">
          <div className="pe-i-container">
            <div
              className="pe-i-cta-inner"
              data-industry-reveal
            >
              <div>
                <span className="pe-i-eyebrow">
                  Have a Project?
                </span>

                <h2>
                  Let's discuss your industrial requirement.
                </h2>

                <p>
                  Share your project details with Prathamesh
                  Enterprises and start a conversation about
                  your fabrication requirements.
                </p>
              </div>

              <Link to="/enquiry" className="pe-i-cta-button">
                SEND AN ENQUIRY
                <ArrowRight size={17} />
              </Link>
            </div>
          </div>
        </section>

      </main>
    </>
  );
}

export default Industries;
