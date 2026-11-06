
import { useState, useLayoutEffect } from "react";
import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  Factory,
  ShieldCheck,
  Target,
  Users,
  CheckCircle2,
  Camera
} from "lucide-react";

/* =========================================
   STAINLESS STEEL & METAL FABRICATION PHOTOS
========================================= */

const PHOTOS = {
  story: {
    src: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=1400&q=85",
    alt: "Industrial metal fabrication and welding work"
  },

  gallery: [
    {
      src: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=1200&q=85",
      alt: "Precision welding and industrial metal fabrication",
      caption: "Stainless Steel Welding"
    },
    {
      src: "https://static.wixstatic.com/media/ed9cd0_8cd5984b05d14d688bb592a4f0867f09~mv2.jpg/v1/fill/w_1000%2Ch_571%2Cal_c%2Cq_85%2Cusm_0.66_1.00_0.01/ed9cd0_8cd5984b05d14d688bb592a4f0867f09~mv2.jpg",
      alt: "Laser cutting stainless steel metal sheets",
      caption: "Precision Metal Cutting"
    },
    {
      src: "https://www.hugowitt-stahl.de/fileadmin/pxhugowitt/Bilder/Produkte/Edelstahl-%20und%20Aluminiumbauteile/3-12.jpg",
      alt: "Fabrication of stainless steel structural components",
      caption: "Custom Steel Fabrication"
    },
    {
      src: "https://www.magil.com/uploads/Sectors/Industrial/Industrial-Main-Image/_1200x630_crop_center-center_82_none/Indutrial-Main-Image.jpg?mtime=1580149081",
      alt: "Industrial stainless steel tanks and pipe assemblies",
      caption: "Industrial Stainless Steel Equipment"
    },
    {
      src: "https://www.simaometal.com/assets/custom-assets-2/home-workshop.webp",
      alt: "Metal assembly and welding in a fabrication workshop",
      caption: "Metal Assembly & Welding"
    },
    {
      src: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=1200&q=85",
      alt: "Industrial engineering and metal fabrication work",
      caption: "Industrial Metal Structures"
    }
  ]
};

/* =========================================
   PHOTO COMPONENT WITH FALLBACK
========================================= */

function Photo({ src, alt, className = "" }) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div
        className={`pe-ab-photo pe-ab-photo-empty ${className}`}
        role="img"
        aria-label={alt}
      >
        <Camera size={28} />
        <span>Workshop photo coming soon</span>
      </div>
    );
  }

  return (
    <img
      className={`pe-ab-photo ${className}`}
      src={src}
      alt={alt}
      loading="lazy"
      onError={() => setFailed(true)}
    />
  );
}

/* =========================================
   ABOUT PAGE
========================================= */

function About() {
  const values = [
    {
      icon: ShieldCheck,
      title: "Quality focus",
      description:
        "A commitment to quality-focused work and attention to project requirements."
    },
    {
      icon: Target,
      title: "Precision",
      description:
        "An approach centred on understanding specifications and project expectations."
    },
    {
      icon: Users,
      title: "Client understanding",
      description:
        "Professional working relationships built on communication and coordination."
    },
    {
      icon: Factory,
      title: "Industry experience",
      description:
        "18 years of experience in the industrial fabrication sector."
    }
  ];

  const milestones = [
    {
      number: "18+",
      title: "Years of experience",
      description: "Industry experience in fabrication."
    },
    {
      number: "B2B",
      title: "Industrial focus",
      description: "Working with business and industrial requirements."
    },
    {
      number: "Client-first",
      title: "Our approach",
      description: "Understanding project needs before execution."
    }
  ];

  const commitments = [
    "Understanding the project scope and specifications.",
    "Discussing requirements and suitable execution approaches.",
    "Maintaining communication throughout project coordination.",
    "Keeping quality and client expectations in focus."
  ];

  /* =========================================
     SCROLL REVEAL ANIMATIONS
  ========================================= */

  useLayoutEffect(() => {
    if (
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    if (!("IntersectionObserver" in window)) return;

    const targets = document.querySelectorAll(
      ".pe-ab-reveal-me, .pe-ab-value, .pe-ab-milestone, .pe-ab-gallery figure, .pe-ab-point, .pe-ab-cta-inner"
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("pe-in");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -40px 0px"
      }
    );

    targets.forEach((element) => {
      const index = Array.prototype.indexOf.call(
        element.parentElement.children,
        element
      );

      element.style.transitionDelay =
        `${Math.min(index, 4) * 90}ms`;

      element.classList.add("pe-reveal");
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Archivo:wdth,wght@75..125,500..800&family=IBM+Plex+Sans:wght@400;500;600&display=swap');

        /* =========================================
           BASE
        ========================================= */

        .pe-ab {
          --steel-900: #0e2233;
          --steel-800: #16344a;
          --steel-600: #35566d;
          --steel-300: #aebfcb;
          --steel-100: #e6ebef;

          --paper: #f5f7f8;
          --ink: #14232d;
          --muted: #566a77;

          --weld: #e8590c;
          --weld-dark: #c2410c;
          --weld-soft: #fff1e8;
          --weld-light: #fb923c;

          --head: 'Archivo', 'Arial Narrow', Arial, sans-serif;
          --body: 'IBM Plex Sans', Arial, Helvetica, sans-serif;

          background: var(--paper);
          color: var(--ink);
          font-family: var(--body);
          font-size: 16px;
          line-height: 1.65;
          overflow: hidden;
        }

        .pe-ab *,
        .pe-ab *::before,
        .pe-ab *::after {
          box-sizing: border-box;
        }

        .pe-ab h1,
        .pe-ab h2,
        .pe-ab h3 {
          font-family: var(--head);
          margin: 0;
        }

        .pe-ab p {
          margin: 0;
        }

        .pe-ab-container {
          width: min(1180px, calc(100% - 48px));
          margin: 0 auto;
        }

        .pe-ab a:focus-visible {
          outline: 3px solid var(--weld);
          outline-offset: 3px;
        }

        /* =========================================
           PHOTOS
        ========================================= */

        .pe-ab-photo {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 6px;
          background: var(--steel-800);
        }

        .pe-ab-photo-empty {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 10px;
          padding: 20px;
          text-align: center;
          color: var(--steel-300);
          font-size: 13px;
          background: repeating-linear-gradient(
            135deg,
            #2b4a5f 0 18px,
            #244257 18px 36px
          );
        }

        /* =========================================
           HERO
        ========================================= */

        .pe-ab-hero {
          background:
            repeating-linear-gradient(
              90deg,
              rgba(255,255,255,.025) 0 1px,
              transparent 1px 64px
            ),
            linear-gradient(
              160deg,
              var(--steel-900) 0%,
              var(--steel-800) 100%
            );

          color: #fff;
          padding: 100px 0 96px;
          position: relative;
          overflow: hidden;
        }

        .pe-ab-hero::before {
          content: "";
          position: absolute;
          width: 380px;
          height: 380px;
          right: -180px;
          top: -210px;
          border-radius: 50%;
          background: rgba(232,89,12,.10);
          filter: blur(5px);
        }

        .pe-ab-hero::after {
          content: "";
          position: absolute;
          left: 0;
          right: 0;
          bottom: 0;
          height: 6px;
          background: linear-gradient(
            90deg,
            var(--weld) 0%,
            #fb923c 28%,
            transparent 75%
          );
          transform-origin: left;
          animation: pe-ab-seam 1.2s .2s cubic-bezier(.2,.7,.2,1) both;
        }

        .pe-ab-crumbs {
          display: flex;
          gap: 10px;
          font-size: 14px;
          color: var(--steel-300);
          margin-bottom: 26px;
          position: relative;
          z-index: 1;
        }

        .pe-ab-crumbs a {
          color: #fff;
          text-decoration: none;
          transition: color .25s ease;
        }

        .pe-ab-crumbs a:hover {
          color: #fb923c;
        }

        .pe-ab-hero h1 {
          font-size: clamp(38px, 5.4vw, 66px);
          font-weight: 800;
          line-height: 1.06;
          letter-spacing: -1.4px;
          max-width: 760px;
          font-stretch: 90%;
          position: relative;
          z-index: 1;
        }

        .pe-ab-hero h1 span {
          display: block;
          color: var(--steel-300);
          font-weight: 600;
        }

        .pe-ab-hero p {
          max-width: 580px;
          color: #c6d4dd;
          font-size: 17px;
          margin-top: 24px;
          position: relative;
          z-index: 1;
        }

        .pe-ab-hero > .pe-ab-container > * {
          animation: pe-ab-rise .8s cubic-bezier(.2,.7,.2,1) both;
        }

        .pe-ab-hero > .pe-ab-container > :nth-child(2) {
          animation-delay: .12s;
        }

        .pe-ab-hero > .pe-ab-container > :nth-child(3) {
          animation-delay: .26s;
        }

        /* =========================================
           COMMON SECTIONS
        ========================================= */

        .pe-ab-section {
          padding: 96px 0;
        }

        .pe-ab-head h2,
        .pe-ab-story h2,
        .pe-ab-commit h2 {
          font-size: clamp(30px, 3.8vw, 44px);
          font-weight: 700;
          line-height: 1.12;
          letter-spacing: -.8px;
          color: var(--steel-900);
        }

        /* =========================================
           STORY
        ========================================= */

        .pe-ab-story {
          display: grid;
          grid-template-columns: .95fr 1.05fr;
          gap: 72px;
          align-items: center;
        }

        .pe-ab-story-photo {
          height: 480px;
          border-bottom: 6px solid var(--weld);
          border-radius: 6px;
          overflow: hidden;
          box-shadow: 0 15px 38px rgba(14,34,51,.10);
        }

        .pe-ab-story-photo img {
          transition: transform .8s cubic-bezier(.2,.7,.2,1);
        }

        .pe-ab-story-photo:hover img {
          transform: scale(1.045);
        }

        .pe-ab-story-copy p {
          color: var(--muted);
          margin-top: 18px;
        }

        .pe-ab-story-copy h2 + p {
          margin-top: 22px;
        }

        .pe-ab-note {
          margin-top: 28px;
          padding: 20px 24px;
          background: var(--weld-soft);
          border-left: 4px solid var(--weld);
          color: var(--steel-900);
          font-weight: 500;
          border-radius: 0 4px 4px 0;
          transition: transform .3s ease;
        }

        .pe-ab-note:hover {
          transform: translateX(5px);
        }

        /* =========================================
           MILESTONES
        ========================================= */

        .pe-ab-miles {
          background: var(--steel-900);
          padding: 60px 0;
          position: relative;
          overflow: hidden;
        }

        .pe-ab-miles::after {
          content: "";
          position: absolute;
          width: 320px;
          height: 320px;
          right: -180px;
          top: -210px;
          border: 1px solid rgba(255,255,255,.08);
          border-radius: 50%;
        }

        .pe-ab-miles-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
          position: relative;
          z-index: 1;
        }

        .pe-ab-milestone {
          padding: 8px 0 8px 24px;
          border-left: 3px solid var(--weld);
          transition: transform .35s ease;
        }

        .pe-ab-milestone:hover {
          transform: translateX(5px);
        }

        .pe-ab-milestone strong {
          display: block;
          font-family: var(--head);
          font-size: 40px;
          font-weight: 800;
          color: #fff;
          line-height: 1.1;
        }

        .pe-ab-milestone h3 {
          color: var(--steel-300);
          font-size: 16px;
          font-weight: 600;
          margin: 8px 0 4px;
        }

        .pe-ab-milestone p {
          color: #8fa6b4;
          font-size: 15px;
        }

        /* =========================================
           GALLERY
        ========================================= */

        .pe-ab-head {
          max-width: 640px;
          margin-bottom: 44px;
        }

        .pe-ab-head p {
          color: var(--muted);
          margin-top: 14px;
        }

        .pe-ab-gallery {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 22px;
        }

        .pe-ab-gallery figure {
          margin: 0;
          transition: transform .4s ease;
        }

        .pe-ab-gallery figure:hover {
          transform: translateY(-6px);
        }

        .pe-ab-gallery .pe-ab-frame {
          height: 290px;
          border-radius: 6px;
          overflow: hidden;
          background: #e6ebef;
          box-shadow: 0 12px 30px rgba(14,34,51,.08);
        }

        .pe-ab-gallery .pe-ab-photo {
          transition: transform .65s cubic-bezier(.2,.7,.2,1);
        }

        .pe-ab-gallery figure:hover .pe-ab-photo {
          transform: scale(1.05);
        }

        .pe-ab-gallery figcaption {
          margin-top: 12px;
          color: var(--steel-600);
          font-size: 14px;
          font-weight: 600;
        }

        /* =========================================
           VALUES
        ========================================= */

        .pe-ab-values {
          background: #fff;
        }

        .pe-ab-values-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 18px;
        }

        .pe-ab-value {
          border: 1px solid var(--steel-100);
          border-top: 4px solid var(--steel-900);
          border-radius: 4px;
          padding: 28px 24px;
          background: #fff;

          transition:
            opacity .7s ease,
            transform .7s cubic-bezier(.2,.7,.2,1),
            border-color .25s,
            box-shadow .3s ease;
        }

        .pe-ab-value:hover {
          border-top-color: var(--weld);
          transform: translateY(-6px);
          box-shadow: 0 12px 30px rgba(14,34,51,.08);
        }

        .pe-ab-value-icon {
          width: 50px;
          height: 50px;
          display: grid;
          place-items: center;
          background: var(--weld-soft);
          color: var(--weld-dark);
          border-radius: 4px;
          margin-bottom: 22px;
          transition: transform .3s ease;
        }

        .pe-ab-value:hover .pe-ab-value-icon {
          transform: scale(1.08) rotate(-4deg);
        }

        .pe-ab-value h3 {
          font-size: 20px;
          font-weight: 700;
          color: var(--steel-900);
          margin-bottom: 10px;
        }

        .pe-ab-value p {
          color: var(--muted);
          font-size: 15px;
        }

        /* =========================================
           COMMITMENT
        ========================================= */

        .pe-ab-commit-wrap {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 64px;
          align-items: center;
        }

        .pe-ab-commit p {
          color: var(--muted);
          margin-top: 20px;
        }

        .pe-ab-points {
          display: grid;
          gap: 0;
          border-top: 2px solid var(--steel-900);
        }

        .pe-ab-point {
          display: flex;
          gap: 14px;
          padding: 20px 0;
          border-bottom: 1px solid var(--steel-100);
          font-weight: 500;
          transition: padding-left .3s ease;
        }

        .pe-ab-point:hover {
          padding-left: 8px;
        }

        .pe-ab-point svg {
          color: var(--weld);
          flex-shrink: 0;
          margin-top: 3px;
        }

        /* =========================================
           ORANGE GRADIENT CTA
        ========================================= */

        .pe-ab-cta {
          position: relative;
          isolation: isolate;
          overflow: hidden;

          background: linear-gradient(
            115deg,
            #e8590c 0%,
            #f97316 38%,
            #fb923c 72%,
            #fdba74 100%
          );

          background-size: 200% 200%;
          color: #fff;
          padding: 72px 0;

          animation: pe-ab-orange-gradient 10s ease infinite;
        }

        .pe-ab-cta::before {
          content: "";
          position: absolute;
          width: 380px;
          height: 380px;
          right: -110px;
          top: -250px;
          border-radius: 50%;
          background: rgba(255,255,255,.16);
          filter: blur(3px);
          z-index: -1;
        }

        .pe-ab-cta::after {
          content: "";
          position: absolute;
          width: 280px;
          height: 280px;
          left: 35%;
          bottom: -230px;
          border-radius: 50%;
          background: rgba(255,255,255,.12);
          filter: blur(8px);
          z-index: -1;
        }

        .pe-ab-cta-inner {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 36px;
          position: relative;
          z-index: 1;
        }

        .pe-ab-cta h2 {
          font-size: clamp(28px, 3.6vw, 42px);
          font-weight: 700;
          line-height: 1.15;
          max-width: 640px;
          color: #fff;
        }

        .pe-ab-cta p {
          margin-top: 12px;
          color: #fff7ed;
        }

        .pe-ab-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          padding: 16px 26px;
          border-radius: 4px;

          background: var(--steel-900);
          color: #fff;
          text-decoration: none;
          font-weight: 600;
          white-space: nowrap;

          box-shadow: 0 8px 24px rgba(80,30,5,.16);

          transition:
            background .25s ease,
            color .25s ease,
            transform .25s ease,
            box-shadow .25s ease;
        }

        .pe-ab-btn:hover {
          background: #fff;
          color: var(--steel-900);
          transform: translateY(-4px);
          box-shadow: 0 14px 28px rgba(80,30,5,.20);
        }

        .pe-ab-btn svg {
          transition: transform .25s ease;
        }

        .pe-ab-btn:hover svg {
          transform: translate(3px, -3px);
        }

        /* =========================================
           ANIMATIONS
        ========================================= */

        @keyframes pe-ab-rise {
          from {
            opacity: 0;
            transform: translateY(26px);
          }

          to {
            opacity: 1;
            transform: none;
          }
        }

        @keyframes pe-ab-seam {
          from {
            transform: scaleX(0);
          }

          to {
            transform: scaleX(1);
          }
        }

        @keyframes pe-ab-orange-gradient {
          0%, 100% {
            background-position: 0% 50%;
          }

          50% {
            background-position: 100% 50%;
          }
        }

        .pe-reveal {
          opacity: 0;
          transform: translateY(28px);

          transition:
            opacity .7s ease,
            transform .7s cubic-bezier(.2,.7,.2,1);
        }

        .pe-reveal.pe-in {
          opacity: 1;
          transform: none;
        }

        /* =========================================
           TABLET
        ========================================= */

        @media (max-width: 960px) {
          .pe-ab-story,
          .pe-ab-commit-wrap {
            grid-template-columns: 1fr;
            gap: 40px;
          }

          .pe-ab-story-photo {
            height: 360px;
          }

          .pe-ab-values-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .pe-ab-gallery {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        /* =========================================
           MOBILE
        ========================================= */

        @media (max-width: 640px) {
          .pe-ab-container {
            width: calc(100% - 36px);
          }

          .pe-ab-hero {
            padding: 68px 0;
          }

          .pe-ab-section {
            padding: 68px 0;
          }

          .pe-ab-miles-grid,
          .pe-ab-values-grid,
          .pe-ab-gallery {
            grid-template-columns: 1fr;
          }

          .pe-ab-gallery .pe-ab-frame {
            height: 250px;
          }

          .pe-ab-story-photo {
            height: 280px;
          }

          .pe-ab-cta-inner {
            flex-direction: column;
            align-items: flex-start;
          }

          .pe-ab-btn {
            width: 100%;
          }
        }

        /* =========================================
           REDUCED MOTION ACCESSIBILITY
        ========================================= */

        @media (prefers-reduced-motion: reduce) {
          .pe-ab *,
          .pe-ab *::before,
          .pe-ab *::after {
            animation: none !important;
            transition: none !important;
          }

          .pe-reveal {
            opacity: 1;
            transform: none;
          }
        }
      `}</style>

      <main className="pe-ab">

        {/* HERO */}

        <section className="pe-ab-hero">
          <div className="pe-ab-container">

            <nav className="pe-ab-crumbs" aria-label="Breadcrumb">
              <Link to="/">Home</Link>
              <span>/</span>
              <span>About us</span>
            </nav>

            <h1>
              Built through experience.
              <span>Focused on quality.</span>
            </h1>

            <p>
              Prathamesh Enterprises is an industrial fabrication business
              with 18 years of experience, focused on understanding project
              requirements and delivering dependable work.
            </p>

          </div>
        </section>

        {/* STORY */}

        <section className="pe-ab-section">
          <div className="pe-ab-container pe-ab-story">

            <div className="pe-ab-story-photo pe-ab-reveal-me">
              <Photo
                src={PHOTOS.story.src}
                alt={PHOTOS.story.alt}
              />
            </div>

            <div className="pe-ab-story-copy pe-ab-reveal-me">

              <h2>
                18 years of experience in industrial fabrication.
              </h2>

              <p>
                Over the years, the business has built experience working with
                industrial project requirements and business clients.
              </p>

              <p>
                Industrial projects need careful attention to specifications,
                coordination and quality expectations. Our approach begins
                with understanding what the client needs and discussing a
                suitable way forward.
              </p>

              <p>
                We aim to build long-term professional relationships through
                clear communication, practical execution and a commitment to
                the requirements of each project.
              </p>

              <div className="pe-ab-note">
                Our experience is the foundation. Understanding your
                requirement is where every project begins.
              </div>

            </div>
          </div>
        </section>

        {/* MILESTONES */}

        <section className="pe-ab-miles">
          <div className="pe-ab-container pe-ab-miles-grid">

            {milestones.map((m) => (
              <div
                className="pe-ab-milestone"
                key={m.title}
              >
                <strong>{m.number}</strong>
                <h3>{m.title}</h3>
                <p>{m.description}</p>
              </div>
            ))}

          </div>
        </section>

        {/* GALLERY */}

        <section className="pe-ab-section">
          <div className="pe-ab-container">

            <div className="pe-ab-head pe-ab-reveal-me">
              <h2>Our work, up close.</h2>
              <p>
                A look at stainless steel fabrication, metalworking,
                welding and industrial fabrication.
              </p>
            </div>

            <div className="pe-ab-gallery">

              {PHOTOS.gallery.map((p) => (
                <figure key={p.src}>

                  <div className="pe-ab-frame">
                    <Photo
                      src={p.src}
                      alt={p.alt}
                    />
                  </div>

                  <figcaption>
                    {p.caption}
                  </figcaption>

                </figure>
              ))}

            </div>
          </div>
        </section>

        {/* VALUES */}

        <section className="pe-ab-section pe-ab-values">
          <div className="pe-ab-container">

            <div className="pe-ab-head pe-ab-reveal-me">
              <h2>The principles behind our work.</h2>

              <p>
                We focus on understanding client expectations, keeping
                quality in view and coordinating around project needs.
              </p>
            </div>

            <div className="pe-ab-values-grid">

              {values.map((v) => {
                const Icon = v.icon;

                return (
                  <article
                    className="pe-ab-value"
                    key={v.title}
                  >

                    <div className="pe-ab-value-icon">
                      <Icon size={24} />
                    </div>

                    <h3>{v.title}</h3>
                    <p>{v.description}</p>

                  </article>
                );
              })}

            </div>
          </div>
        </section>

        {/* COMMITMENT */}

        <section className="pe-ab-section pe-ab-commit">
          <div className="pe-ab-container pe-ab-commit-wrap">

            <div className="pe-ab-reveal-me">

              <h2>
                Understanding the work before delivering the work.
              </h2>

              <p>
                Every project begins with a conversation. Understanding
                your specifications, expectations and timelines is
                essential to setting a clear project scope.
              </p>

            </div>

            <div className="pe-ab-points">

              {commitments.map((text) => (
                <div
                  className="pe-ab-point"
                  key={text}
                >
                  <CheckCircle2 size={20} />
                  <span>{text}</span>
                </div>
              ))}

            </div>
          </div>
        </section>

        {/* CTA */}

        <section className="pe-ab-cta">
          <div className="pe-ab-container pe-ab-cta-inner">

            <div>
              <h2>
                Let's understand your next fabrication requirement.
              </h2>

              <p>
                Connect with Prathamesh Enterprises to discuss your project.
              </p>
            </div>

            <Link
              to="/enquiry"
              className="pe-ab-btn"
            >
              Discuss a project
              <ArrowUpRight size={18} />
            </Link>

          </div>
        </section>

      </main>
    </>
  );
}

export default About;
