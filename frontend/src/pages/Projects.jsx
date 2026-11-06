
import {
    ArrowRight,
    ArrowUpRight,
    Factory,
    Building2,
    Settings,
    Layers3,
    Ruler,
    ShieldCheck,
    BriefcaseBusiness,
  } from "lucide-react";
  import { Link } from "react-router-dom";
  
  const projectTypes = [
    {
      number: "01",
      icon: <Factory />,
      title: "Industrial Fabrication",
      description:
        "Fabrication solutions designed around industrial requirements, dimensions and functional needs.",
      tag: "Industrial Applications",
    },
    {
      number: "02",
      icon: <Building2 />,
      title: "Commercial Fabrication",
      description:
        "Custom stainless-steel fabrication for commercial spaces and business requirements.",
      tag: "Commercial Projects",
    },
    {
      number: "03",
      icon: <Layers3 />,
      title: "Custom Stainless Steel Work",
      description:
        "Made-to-requirement fabrication based on project specifications, drawings and dimensions.",
      tag: "Custom Requirements",
    },
    {
      number: "04",
      icon: <Settings />,
      title: "Structural & Component Work",
      description:
        "Practical fabrication work with attention to measurements, fitment and application.",
      tag: "Fabrication Work",
    },
  ];
  
  const capabilities = [
    "Understanding project requirements",
    "Working with dimensions and specifications",
    "Custom fabrication planning",
    "Focus on practical application",
  ];
  
  export default function Projects() {
    return (
      <>
        <style>{`
          .projects-page {
            --pe-dark: #101b23;
            --pe-dark-card: #1b2b35;
            --pe-steel: #aeb9c0;
            --pe-orange: #f28a35;
            --pe-muted: #aab5bc;
            background: #111d25;
            color: #f5f7f8;
            overflow: hidden;
            font-family: inherit;
          }
  
          .projects-page * {
            box-sizing: border-box;
          }
  
          .projects-page a {
            text-decoration: none;
          }
  
          .projects-hero {
            background:
              radial-gradient(circle at 80% 45%, rgba(91,116,130,.18), transparent 35%),
              linear-gradient(120deg, #101b23, #1a2a34);
            padding: 95px 7%;
            min-height: 570px;
            display: flex;
            align-items: center;
          }
  
          .projects-hero-grid {
            width: 100%;
            max-width: 1400px;
            margin: auto;
            display: grid;
            grid-template-columns: 1.05fr .95fr;
            align-items: center;
            gap: 65px;
          }
  
          .projects-eyebrow {
            display: flex;
            align-items: center;
            gap: 12px;
            color: var(--pe-orange);
            font-size: 12px;
            font-weight: 700;
            letter-spacing: 2.5px;
            text-transform: uppercase;
          }
  
          .eyebrow-line {
            width: 34px;
            height: 2px;
            background: var(--pe-orange);
          }
  
          .projects-hero h1 {
            font-size: clamp(38px, 5vw, 65px);
            line-height: 1.12;
            letter-spacing: -2px;
            margin: 26px 0 22px;
            font-weight: 750;
            max-width: 700px;
          }
  
          .projects-hero h1 span,
          .projects-section-heading h2 span,
          .approach-content h2 span {
            color: var(--pe-orange);
          }
  
          .projects-hero-content > p {
            max-width: 530px;
            color: #b7c1c7;
            font-size: 16px;
            line-height: 1.85;
          }
  
          .projects-hero-actions {
            display: flex;
            align-items: center;
            gap: 28px;
            flex-wrap: wrap;
            margin-top: 35px;
          }
  
          .projects-primary-btn,
          .requirements-button {
            background: linear-gradient(110deg, #f28a35, #e66d24);
            color: #111b22;
            padding: 15px 22px;
            border-radius: 4px;
            display: inline-flex;
            align-items: center;
            gap: 12px;
            font-size: 14px;
            font-weight: 750;
            transition: .25s ease;
          }
  
          .projects-primary-btn:hover,
          .requirements-button:hover {
            transform: translateY(-3px);
            box-shadow: 0 10px 25px rgba(242,138,53,.2);
          }
  
          .projects-text-link {
            color: #e9edef;
            display: inline-flex;
            align-items: center;
            gap: 9px;
            font-size: 14px;
            font-weight: 600;
          }
  
          .projects-text-link:hover {
            color: var(--pe-orange);
          }
  
          /* CSS-ONLY STAINLESS STEEL VISUAL */
  
          .steel-visual {
            height: 370px;
            position: relative;
            overflow: hidden;
            border: 1px solid rgba(255,255,255,.15);
            background:
              repeating-linear-gradient(
                0deg,
                rgba(255,255,255,.025) 0px,
                rgba(255,255,255,.025) 1px,
                transparent 1px,
                transparent 4px
              ),
              linear-gradient(135deg, #65737b, #d0d5d7 35%, #78858d 65%, #303e47);
            box-shadow: 20px 25px 55px rgba(0,0,0,.3);
          }
  
          .steel-grid {
            position: absolute;
            inset: 0;
            opacity: .15;
            background-image:
              linear-gradient(rgba(255,255,255,.4) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,.4) 1px, transparent 1px);
            background-size: 35px 35px;
          }
  
          .steel-plate {
            position: absolute;
            border: 1px solid rgba(255,255,255,.6);
            background: linear-gradient(135deg, #e2e6e8, #85939a 45%, #dce1e3);
            box-shadow: 12px 18px 30px rgba(0,0,0,.3);
          }
  
          .steel-plate-one {
            width: 65%;
            height: 135px;
            top: 55px;
            left: 12%;
            transform: skewY(-12deg) rotate(-4deg);
          }
  
          .steel-plate-two {
            width: 55%;
            height: 95px;
            bottom: 70px;
            right: 9%;
            transform: skewY(10deg) rotate(4deg);
            background: linear-gradient(120deg, #78878f, #e0e4e5, #89969c);
          }
  
          .steel-cylinder {
            position: absolute;
            width: 190px;
            height: 190px;
            border-radius: 50%;
            right: 24%;
            top: 83px;
            background: linear-gradient(90deg, #4e5b62, #e5e9eb 25%, #89969d 55%, #edf0f1 78%, #65727a);
            box-shadow: 15px 20px 35px rgba(0,0,0,.35);
          }
  
          .steel-cylinder-inner {
            position: absolute;
            width: 65%;
            height: 65%;
            border-radius: 50%;
            top: 17.5%;
            left: 17.5%;
            background: radial-gradient(circle at 35% 35%, #273740, #101b22 70%);
            border: 8px solid #b9c2c6;
            box-shadow: inset 0 0 15px #000;
          }
  
          .steel-visual-label {
            position: absolute;
            bottom: 20px;
            left: 22px;
            display: flex;
            flex-direction: column;
            color: #18252c;
            letter-spacing: 2px;
            font-size: 10px;
            font-weight: 700;
          }
  
          .steel-visual-label strong {
            font-size: 19px;
            letter-spacing: 3px;
            margin-top: 4px;
          }
  
          .steel-visual-number {
            position: absolute;
            top: 20px;
            right: 22px;
            color: #17242b;
            font-size: 12px;
            font-weight: 800;
            letter-spacing: 2px;
          }
  
          /* EXPERIENCE STRIP */
  
          .projects-stats {
            background: #1c2c36;
            border-top: 1px solid rgba(255,255,255,.08);
            border-bottom: 1px solid rgba(255,255,255,.08);
            padding: 28px 7%;
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 20px;
          }
  
          .projects-stat {
            padding: 8px 15px;
            border-right: 1px solid rgba(255,255,255,.12);
            display: flex;
            align-items: center;
            gap: 14px;
          }
  
          .projects-stat:last-child {
            border: none;
          }
  
          .projects-stat strong {
            font-size: 28px;
            color: var(--pe-orange);
          }
  
          .projects-stat span {
            color: #d0d8dc;
            font-size: 12px;
            line-height: 1.5;
          }
  
          /* PROJECT TYPES */
  
          .project-types-section {
            padding: 95px 7%;
            background: #e7ecee;
            color: #17242c;
          }
  
          .projects-section-heading {
            max-width: 1400px;
            margin: 0 auto 42px;
            display: flex;
            align-items: end;
            justify-content: space-between;
            gap: 35px;
          }
  
          .projects-section-heading h2 {
            font-size: clamp(32px, 4vw, 48px);
            line-height: 1.15;
            margin: 18px 0 0;
            letter-spacing: -1.5px;
          }
  
          .projects-section-heading h2 span {
            color: #dc762b;
          }
  
          .projects-section-heading > p {
            max-width: 390px;
            color: #59666d;
            font-size: 14px;
            line-height: 1.8;
            margin: 0 0 5px;
          }
  
          .project-types-grid {
            max-width: 1400px;
            margin: auto;
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 16px;
          }
  
          .project-type-card {
            min-height: 290px;
            padding: 25px 22px 20px;
            background: #1b2b35;
            color: #f4f6f7;
            display: flex;
            flex-direction: column;
            border: 1px solid rgba(255,255,255,.08);
            border-top: 3px solid #e98232;
            transition: transform .25s ease, background .25s ease;
          }
  
          .project-type-card:hover {
            transform: translateY(-6px);
            background: #243944;
          }
  
          .project-card-top {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-bottom: 30px;
          }
  
          .project-number {
            color: #f28a35;
            font-size: 13px;
            font-weight: 800;
            letter-spacing: 1px;
          }
  
          .project-card-icon {
            width: 45px;
            height: 45px;
            display: grid;
            place-items: center;
            background: rgba(242,138,53,.12);
            color: #f28a35;
            border: 1px solid rgba(242,138,53,.25);
          }
  
          .project-card-icon svg {
            width: 22px;
            height: 22px;
          }
  
          .project-type-card h3 {
            font-size: 19px;
            line-height: 1.3;
            margin: 0 0 12px;
          }
  
          .project-type-card > p {
            color: #aebbc2;
            font-size: 13px;
            line-height: 1.75;
            margin: 0 0 25px;
          }
  
          .project-card-bottom {
            display: flex;
            align-items: center;
            justify-content: space-between;
            border-top: 1px solid rgba(255,255,255,.12);
            padding-top: 15px;
            margin-top: auto;
            color: #f28a35;
            font-size: 11px;
            font-weight: 700;
            letter-spacing: .5px;
          }
  
          /* APPROACH SECTION */
  
          .projects-approach {
            padding: 95px 7%;
            background: #111d25;
            display: grid;
            grid-template-columns: .85fr 1.15fr;
            align-items: center;
            gap: 75px;
          }
  
          .approach-visual {
            min-height: 390px;
            padding: 20px;
            background: linear-gradient(135deg, #6b7a82, #c0c9cd 50%, #4c5c65);
            display: flex;
            align-items: center;
            justify-content: center;
          }
  
          .approach-visual-inner {
            border: 1px solid rgba(255,255,255,.55);
            width: 100%;
            height: 350px;
            padding: 28px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            background:
              repeating-linear-gradient(
                0deg,
                rgba(255,255,255,.04) 0px,
                rgba(255,255,255,.04) 1px,
                transparent 1px,
                transparent 4px
              );
            color: #17252d;
          }
  
          .approach-small-label,
          .approach-bottom-label {
            font-size: 11px;
            font-weight: 800;
            letter-spacing: 2px;
          }
  
          .approach-big-text {
            font-size: clamp(48px, 6vw, 78px);
            font-weight: 900;
            line-height: .95;
            letter-spacing: -4px;
            text-shadow: 2px 3px 5px rgba(255,255,255,.35);
          }
  
          .approach-content h2 {
            font-size: clamp(30px, 4vw, 44px);
            line-height: 1.2;
            margin: 18px 0;
            letter-spacing: -1px;
          }
  
          .approach-content h2 span {
            color: #f28a35;
          }
  
          .approach-content > p {
            color: #aebbc2;
            font-size: 14px;
            line-height: 1.9;
            max-width: 570px;
          }
  
          .approach-list {
            margin-top: 28px;
            border-top: 1px solid rgba(255,255,255,.13);
          }
  
          .approach-list-item {
            display: grid;
            grid-template-columns: 40px 1fr 20px;
            align-items: center;
            gap: 12px;
            padding: 15px 0;
            border-bottom: 1px solid rgba(255,255,255,.13);
          }
  
          .approach-list-item > span {
            color: #f28a35;
            font-size: 12px;
            font-weight: 800;
          }
  
          .approach-list-item p {
            color: #e0e5e8;
            margin: 0;
            font-size: 13px;
          }
  
          .approach-list-item svg {
            color: #f28a35;
          }
  
          /* REQUIREMENTS */
  
          .projects-requirements {
            padding: 75px 7%;
            background: #1b2b35;
            border-top: 1px solid rgba(255,255,255,.1);
            border-bottom: 1px solid rgba(255,255,255,.1);
          }
  
          .requirements-heading {
            text-align: center;
            max-width: 680px;
            margin: 0 auto 40px;
          }
  
          .requirements-heading .projects-eyebrow {
            justify-content: center;
          }
  
          .requirements-heading h2 {
            font-size: clamp(30px, 4vw, 43px);
            margin: 18px 0 12px;
          }
  
          .requirements-heading p {
            color: #aebbc2;
            font-size: 14px;
            line-height: 1.8;
          }
  
          .requirements-details {
            max-width: 1050px;
            margin: 0 auto 35px;
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 15px;
          }
  
          .requirements-details > div {
            padding: 22px;
            background: #243944;
            border: 1px solid rgba(255,255,255,.09);
            display: flex;
            flex-direction: column;
            gap: 10px;
          }
  
          .requirements-details svg {
            color: #f28a35;
            width: 25px;
            height: 25px;
          }
  
          .requirements-details strong {
            font-size: 15px;
          }
  
          .requirements-details span {
            color: #aebbc2;
            font-size: 12px;
            line-height: 1.6;
          }
  
          .requirements-button {
            display: flex;
            width: fit-content;
            margin: auto;
          }
  
          /* FINAL CTA */
  
          .projects-final-cta {
            padding: 45px 7%;
            background: linear-gradient(105deg, #e98232, #f5a04d);
            color: #17232a;
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 25px;
          }
  
          .projects-final-cta span {
            font-size: 10px;
            letter-spacing: 2px;
            font-weight: 800;
          }
  
          .projects-final-cta h2 {
            font-size: clamp(25px, 3vw, 36px);
            margin: 9px 0 0;
          }
  
          .projects-final-cta a {
            background: #17252d;
            color: white;
            padding: 15px 22px;
            display: inline-flex;
            align-items: center;
            gap: 12px;
            font-size: 13px;
            font-weight: 700;
            white-space: nowrap;
            transition: .25s ease;
          }
  
          .projects-final-cta a:hover {
            background: #293e49;
            transform: translateY(-3px);
          }
  
          /* RESPONSIVE */
  
          @media (max-width: 1000px) {
            .project-types-grid {
              grid-template-columns: repeat(2, 1fr);
            }
  
            .projects-stats {
              grid-template-columns: repeat(2, 1fr);
            }
  
            .projects-stat:nth-child(2) {
              border-right: none;
            }
  
            .projects-approach {
              gap: 40px;
            }
          }
  
          @media (max-width: 700px) {
            .projects-hero {
              padding: 65px 6%;
            }
  
            .projects-hero-grid {
              grid-template-columns: 1fr;
              gap: 40px;
            }
  
            .projects-hero h1 {
              font-size: 42px;
            }
  
            .steel-visual {
              height: 290px;
            }
  
            .steel-cylinder {
              width: 145px;
              height: 145px;
              top: 65px;
            }
  
            .projects-stats {
              padding: 22px 5%;
              gap: 10px;
            }
  
            .projects-stat {
              padding: 10px 5px;
              border-right: none;
            }
  
            .projects-stat strong {
              font-size: 23px;
            }
  
            .projects-stat span {
              font-size: 11px;
            }
  
            .project-types-section,
            .projects-approach,
            .projects-requirements {
              padding: 65px 6%;
            }
  
            .projects-section-heading {
              flex-direction: column;
              align-items: flex-start;
            }
  
            .project-types-grid {
              grid-template-columns: 1fr;
            }
  
            .project-type-card {
              min-height: 250px;
            }
  
            .projects-approach {
              grid-template-columns: 1fr;
              gap: 35px;
            }
  
            .approach-visual {
              min-height: 300px;
            }
  
            .approach-visual-inner {
              height: 260px;
            }
  
            .requirements-details {
              grid-template-columns: 1fr;
            }
  
            .projects-final-cta {
              padding: 35px 6%;
              flex-direction: column;
              align-items: flex-start;
            }
          }
  
          @media (max-width: 400px) {
            .projects-hero h1 {
              font-size: 35px;
            }
  
            .projects-hero-actions {
              align-items: flex-start;
              flex-direction: column;
            }
  
            .projects-stats {
              grid-template-columns: 1fr 1fr;
            }
          }
        `}</style>
  
        <main className="projects-page">
  
          <section className="projects-hero">
            <div className="projects-hero-grid">
  
              <div className="projects-hero-content">
                <span className="projects-eyebrow">
                  <span className="eyebrow-line" />
                  OUR PROJECTS & CAPABILITIES
                </span>
  
                <h1>
                  Stainless steel fabrication.
                  <span> Built around your requirements.</span>
                </h1>
  
                <p>
                  From custom fabrication requirements to industrial
                  applications, we focus on practical solutions shaped
                  around your project needs.
                </p>
  
                <div className="projects-hero-actions">
                  <Link to="/enquiry" className="projects-primary-btn">
                    Discuss Your Project <ArrowUpRight size={18} />
                  </Link>
  
                  <a href="#project-types" className="projects-text-link">
                    Explore Our Work <ArrowRight size={17} />
                  </a>
                </div>
              </div>
  
              <div className="steel-visual">
                <div className="steel-grid" />
                <div className="steel-plate steel-plate-one" />
                <div className="steel-plate steel-plate-two" />
                <div className="steel-cylinder">
                  <div className="steel-cylinder-inner" />
                </div>
  
                <div className="steel-visual-label">
                  <span>STAINLESS STEEL</span>
                  <strong>FABRICATION</strong>
                </div>
  
                <div className="steel-visual-number">PE / 01</div>
              </div>
  
            </div>
          </section>
  
          <section className="projects-stats">
            <div className="projects-stat">
              <strong>18+</strong>
              <span>Years of Experience</span>
            </div>
  
            <div className="projects-stat">
              <strong>01</strong>
              <span>Requirement-Focused Approach</span>
            </div>
  
            <div className="projects-stat">
              <strong>SS</strong>
              <span>Stainless Steel Fabrication</span>
            </div>
  
            <div className="projects-stat">
              <strong>PE</strong>
              <span>Prathamesh Enterprises</span>
            </div>
          </section>
  
          <section className="project-types-section" id="project-types">
            <div className="projects-section-heading">
              <div>
                <span className="projects-eyebrow">WHAT WE WORK ON</span>
  
                <h2>
                  Fabrication for
                  <span> different requirements.</span>
                </h2>
              </div>
  
              <p>
                Every project has different requirements. Our approach starts
                with understanding the application, specifications and expected
                outcome.
              </p>
            </div>
  
            <div className="project-types-grid">
              {projectTypes.map((project) => (
                <article className="project-type-card" key={project.number}>
                  <div className="project-card-top">
                    <span className="project-number">{project.number}</span>
                    <span className="project-card-icon">{project.icon}</span>
                  </div>
  
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
  
                  <div className="project-card-bottom">
                    <span>{project.tag}</span>
                    <ArrowUpRight size={18} />
                  </div>
                </article>
              ))}
            </div>
          </section>
  
          <section className="projects-approach">
            <div className="approach-visual">
              <div className="approach-visual-inner">
                <span className="approach-small-label">OUR APPROACH</span>
  
                <div className="approach-big-text">
                  BUILT
                  <br />
                  TO FIT.
                </div>
  
                <div className="approach-bottom-label">
                  REQUIREMENT-BASED FABRICATION
                </div>
              </div>
            </div>
  
            <div className="approach-content">
              <span className="projects-eyebrow">
                HOW WE APPROACH PROJECTS
              </span>
  
              <h2>
                The right work starts with
                <span> understanding the requirement.</span>
              </h2>
  
              <p>
                We believe fabrication should be planned around the actual
                purpose of the project. Understanding the requirement and
                specifications helps establish the right direction for the work.
              </p>
  
              <div className="approach-list">
                {capabilities.map((item, index) => (
                  <div className="approach-list-item" key={item}>
                    <span>0{index + 1}</span>
                    <p>{item}</p>
                    <ArrowUpRight size={17} />
                  </div>
                ))}
              </div>
            </div>
          </section>
  
          <section className="projects-requirements">
            <div className="requirements-heading">
              <span className="projects-eyebrow">PROJECT REQUIREMENTS</span>
  
              <h2>Have a fabrication requirement?</h2>
  
              <p>
                Share your project details, drawings or specifications.
                Let's understand what you need.
              </p>
            </div>
  
            <div className="requirements-details">
              <div>
                <Ruler />
                <strong>Dimensions</strong>
                <span>Share measurements and drawings.</span>
              </div>
  
              <div>
                <BriefcaseBusiness />
                <strong>Application</strong>
                <span>Explain where the fabrication will be used.</span>
              </div>
  
              <div>
                <ShieldCheck />
                <strong>Specifications</strong>
                <span>Discuss your material and project requirements.</span>
              </div>
            </div>
  
            <Link to="/enquiry" className="requirements-button">
              Send Your Enquiry <ArrowUpRight size={18} />
            </Link>
          </section>
  
          <section className="projects-final-cta">
            <div>
              <span>PRATHAMESH ENTERPRISES</span>
              <h2>Let's discuss your next project.</h2>
            </div>
  
            <Link to="/enquiry">
              Get in Touch <ArrowRight size={19} />
            </Link>
          </section>
  
        </main>
      </>
    );
  }
  