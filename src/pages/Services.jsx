
import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  ArrowRight,
  Factory,
  Settings,
  Ruler,
  Wrench,
  Layers3,
  ClipboardCheck,
  CheckCircle2,
  MessageSquare
} from "lucide-react";

function Services() {
  const services = [
    {
      number: "01",
      icon: Factory,
      title: "Industrial Fabrication",
      description:
        "Fabrication work for industrial environments, planned around project specifications, application requirements and client expectations.",
      points: [
        "Requirement-based fabrication",
        "Industrial project support",
        "Specification-oriented execution"
      ]
    },
    {
      number: "02",
      icon: Settings,
      title: "Custom Fabrication",
      description:
        "Custom fabrication requirements discussed and approached according to the client's drawings, dimensions and intended application.",
      points: [
        "Custom project requirements",
        "Drawing-based discussions",
        "Application-specific planning"
      ]
    },
    {
      number: "03",
      icon: Ruler,
      title: "Fabrication as per Drawings",
      description:
        "Project discussions based on technical drawings, measurements and specifications supplied by the client.",
      points: [
        "Drawing and specification review",
        "Dimension-related coordination",
        "Project scope discussions"
      ]
    },
    {
      number: "04",
      icon: Wrench,
      title: "Industrial Project Work",
      description:
        "Fabrication-related work considered according to the nature, scope and requirements of industrial projects.",
      points: [
        "Project requirement assessment",
        "Work scope coordination",
        "Execution planning"
      ]
    },
    {
      number: "05",
      icon: Layers3,
      title: "Fabrication Components",
      description:
        "Discussions for fabrication components and assemblies based on the technical requirements of a project.",
      points: [
        "Component requirements",
        "Material and specification discussions",
        "Custom project coordination"
      ]
    },
    {
      number: "06",
      icon: ClipboardCheck,
      title: "Project Coordination",
      description:
        "Clear communication and coordination to understand project expectations and align the work scope.",
      points: [
        "Requirement clarification",
        "Scope and timeline discussions",
        "Client coordination"
      ]
    }
  ];

  const steps = [
    {
      number: "01",
      title: "Share Your Requirement",
      description:
        "Tell us about your project, application and fabrication requirement."
    },
    {
      number: "02",
      title: "Discuss the Specifications",
      description:
        "Share relevant drawings, dimensions, materials and technical details."
    },
    {
      number: "03",
      title: "Review the Scope",
      description:
        "Discuss feasibility, scope, timelines and quotation requirements."
    },
    {
      number: "04",
      title: "Move Forward",
      description:
        "Proceed with the mutually agreed project scope and execution plan."
    }
  ];

  return (
    <>
      <style>{`
        .pe-services-page {
          background: #f5f7f8;
          color: #142b37;
          font-family: Arial, Helvetica, sans-serif;
          overflow: hidden;
        }

        .pe-services-page * {
          box-sizing: border-box;
        }

        .pe-services-container {
          width: min(1200px, calc(100% - 48px));
          margin: auto;
        }

        .pe-services-hero {
          background:
            radial-gradient(circle at 85% 40%, rgba(76, 163, 193, .19), transparent 35%),
            #102b3a;
          color: white;
          padding: 105px 0 100px;
          position: relative;
        }

        .pe-services-hero::after {
          content: "";
          position: absolute;
          right: 8%;
          top: 50%;
          transform: translateY(-50%);
          width: 340px;
          height: 340px;
          border: 1px solid rgba(255,255,255,.12);
          border-radius: 50%;
          box-shadow: 0 0 0 45px rgba(255,255,255,.025),
                      0 0 0 90px rgba(255,255,255,.018);
        }

        .pe-services-hero-content {
          max-width: 760px;
          position: relative;
          z-index: 1;
        }

        .pe-services-eyebrow {
          color: #72c9e7;
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 2.5px;
          text-transform: uppercase;
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .pe-services-eyebrow::before {
          content: "";
          width: 28px;
          height: 2px;
          background: #72c9e7;
        }

        .pe-services-hero h1 {
          font-size: clamp(42px, 6vw, 70px);
          letter-spacing: -3px;
          line-height: 1.08;
          margin: 24px 0;
        }

        .pe-services-hero h1 span {
          color: #72c9e7;
        }

        .pe-services-hero p {
          color: #b8cbd4;
          max-width: 620px;
          font-size: 15px;
          line-height: 1.9;
          margin: 0;
        }

        .pe-services-breadcrumb {
          margin-top: 35px;
          display: flex;
          gap: 10px;
          font-size: 11px;
          color: #a5bac4;
        }

        .pe-services-breadcrumb a {
          color: #72c9e7;
          text-decoration: none;
        }

        .pe-services-section {
          padding: 100px 0;
        }

        .pe-services-heading {
          max-width: 690px;
          margin-bottom: 48px;
        }

        .pe-services-section-label {
          color: #1685aa;
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 2px;
          text-transform: uppercase;
        }

        .pe-services-heading h2 {
          font-size: clamp(32px, 4vw, 48px);
          letter-spacing: -1.8px;
          line-height: 1.16;
          color: #132f3e;
          margin: 18px 0;
        }

        .pe-services-heading p {
          color: #71818a;
          font-size: 14px;
          line-height: 1.9;
          margin: 0;
        }

        .pe-services-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 18px;
        }

        .pe-service-card {
          background: #fff;
          border: 1px solid #e4ebee;
          padding: 32px 27px;
          min-height: 340px;
          display: flex;
          flex-direction: column;
          transition: .25s ease;
        }

        .pe-service-card:hover {
          transform: translateY(-6px);
          border-color: #82c9e2;
          box-shadow: 0 18px 38px rgba(20, 55, 70, .07);
        }

        .pe-service-card-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .pe-service-card-number {
          color: #9aabb3;
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 2px;
        }

        .pe-service-card-icon {
          width: 50px;
          height: 50px;
          display: grid;
          place-items: center;
          background: #eaf5f9;
          color: #1685aa;
        }

        .pe-service-card h3 {
          color: #173442;
          font-size: 19px;
          line-height: 1.35;
          margin: 25px 0 12px;
        }

        .pe-service-card > p {
          color: #71818a;
          font-size: 12px;
          line-height: 1.9;
          margin: 0;
        }

        .pe-service-card ul {
          display: grid;
          gap: 10px;
          list-style: none;
          padding: 20px 0 0;
          margin: auto 0 0;
        }

        .pe-service-card li {
          display: flex;
          align-items: flex-start;
          gap: 9px;
          color: #4d626e;
          font-size: 11px;
          line-height: 1.6;
        }

        .pe-service-card li svg {
          color: #1685aa;
          flex-shrink: 0;
        }

        .pe-services-note {
          margin-top: 35px;
          padding: 20px 23px;
          border-left: 3px solid #1685aa;
          background: #e8f2f6;
          color: #46616e;
          font-size: 12px;
          line-height: 1.8;
        }

        .pe-services-process {
          background: #102b3a;
          color: #fff;
        }

        .pe-services-process .pe-services-heading h2 {
          color: #fff;
        }

        .pe-services-process .pe-services-heading p {
          color: #afc2cc;
        }

        .pe-services-process .pe-services-section-label {
          color: #72c9e7;
        }

        .pe-services-steps {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          border-top: 1px solid rgba(255,255,255,.2);
          border-left: 1px solid rgba(255,255,255,.2);
        }

        .pe-services-step {
          padding: 28px 23px;
          min-height: 220px;
          border-right: 1px solid rgba(255,255,255,.2);
          border-bottom: 1px solid rgba(255,255,255,.2);
        }

        .pe-services-step strong {
          color: #72c9e7;
          font-size: 13px;
          letter-spacing: 2px;
        }

        .pe-services-step h3 {
          font-size: 17px;
          margin: 25px 0 12px;
          color: #fff;
        }

        .pe-services-step p {
          color: #b0c2cb;
          font-size: 12px;
          line-height: 1.9;
          margin: 0;
        }

        .pe-services-requirements {
          background: #eaf0f3;
        }

        .pe-services-requirements-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 65px;
          align-items: center;
        }

        .pe-services-requirements h2 {
          color: #132f3e;
          font-size: clamp(32px, 4vw, 46px);
          letter-spacing: -1.7px;
          line-height: 1.18;
          margin: 18px 0;
        }

        .pe-services-requirements p {
          color: #71818a;
          font-size: 14px;
          line-height: 1.9;
        }

        .pe-services-requirement-list {
          background: #fff;
          padding: 30px;
          display: grid;
          gap: 20px;
        }

        .pe-services-requirement-item {
          display: flex;
          gap: 13px;
          align-items: flex-start;
          color: #36515e;
          font-size: 13px;
          line-height: 1.7;
        }

        .pe-services-requirement-item svg {
          color: #1685aa;
          flex-shrink: 0;
        }

        .pe-services-cta {
          padding: 75px 0;
          background: #0b202c;
          color: #fff;
        }

        .pe-services-cta-inner {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 30px;
        }

        .pe-services-cta h2 {
          max-width: 680px;
          font-size: clamp(29px, 4vw, 42px);
          line-height: 1.2;
          letter-spacing: -1.5px;
          margin: 15px 0;
        }

        .pe-services-cta p {
          color: #b0c2cb;
          font-size: 13px;
          line-height: 1.8;
        }

        .pe-services-button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          padding: 17px 23px;
          background: #72c9e7;
          color: #092330;
          font-size: 12px;
          font-weight: 800;
          text-decoration: none;
          white-space: nowrap;
          transition: .25s;
        }

        .pe-services-button:hover {
          background: #fff;
          transform: translateY(-3px);
        }

        @media(max-width: 950px) {
          .pe-services-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .pe-services-steps {
            grid-template-columns: repeat(2, 1fr);
          }

          .pe-services-requirements-grid {
            gap: 35px;
          }
        }

        @media(max-width: 600px) {
          .pe-services-container {
            width: calc(100% - 36px);
          }

          .pe-services-hero {
            padding: 85px 0;
          }

          .pe-services-hero h1 {
            letter-spacing: -2px;
          }

          .pe-services-hero::after {
            right: -180px;
          }

          .pe-services-section {
            padding: 75px 0;
          }

          .pe-services-grid,
          .pe-services-steps,
          .pe-services-requirements-grid {
            grid-template-columns: 1fr;
          }

          .pe-service-card {
            min-height: 310px;
          }

          .pe-services-step {
            min-height: auto;
          }

          .pe-services-cta-inner {
            flex-direction: column;
            align-items: flex-start;
          }

          .pe-services-button {
            width: 100%;
          }
        }
      `}</style>

      <main className="pe-services-page">

        {/* HERO */}

        <section className="pe-services-hero">
          <div className="pe-services-container">
            <div className="pe-services-hero-content">

              <span className="pe-services-eyebrow">
                Our Services
              </span>

              <h1>
                Industrial solutions.
                <br />
                <span>Built around your needs.</span>
              </h1>

              <p>
                Explore fabrication-related services and project
                support from Prathamesh Enterprises. With 18 years
                of experience, we begin by understanding your
                specifications and project requirements.
              </p>

              <div className="pe-services-breadcrumb">
                <Link to="/">Home</Link>
                <span>/</span>
                <span>Services</span>
              </div>

            </div>
          </div>
        </section>

        {/* SERVICES GRID */}

        <section className="pe-services-section">
          <div className="pe-services-container">

            <div className="pe-services-heading">
              <span className="pe-services-section-label">
                What We Offer
              </span>

              <h2>
                Fabrication services for industrial requirements.
              </h2>

              <p>
                Every project is different. Our service discussions
                are based on the nature of the requirement, technical
                specifications and agreed scope of work.
              </p>
            </div>

            <div className="pe-services-grid">
              {services.map((service) => {
                const Icon = service.icon;

                return (
                  <article
                    className="pe-service-card"
                    key={service.number}
                  >
                    <div className="pe-service-card-top">
                      <span className="pe-service-card-number">
                        / {service.number}
                      </span>

                      <div className="pe-service-card-icon">
                        <Icon size={24} />
                      </div>
                    </div>

                    <h3>{service.title}</h3>

                    <p>{service.description}</p>

                    <ul>
                      {service.points.map((point) => (
                        <li key={point}>
                          <CheckCircle2 size={14} />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </article>
                );
              })}
            </div>

            <div className="pe-services-note">
              Service categories shown here are an initial website
              structure. Specific materials, products, machinery,
              fabrication processes and capabilities should be
              confirmed with the business before publication.
            </div>

          </div>
        </section>

        {/* PROCESS */}

        <section className="pe-services-section pe-services-process">
          <div className="pe-services-container">

            <div className="pe-services-heading">
              <span className="pe-services-section-label">
                How We Work
              </span>

              <h2>
                From your requirement to a clear project scope.
              </h2>

              <p>
                A straightforward process helps both sides
                understand expectations before work begins.
              </p>
            </div>

            <div className="pe-services-steps">
              {steps.map((step) => (
                <div className="pe-services-step" key={step.number}>
                  <strong>/ {step.number}</strong>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* REQUIREMENTS */}

        <section className="pe-services-section pe-services-requirements">
          <div className="pe-services-container">
            <div className="pe-services-requirements-grid">

              <div>
                <span className="pe-services-section-label">
                  Project Enquiry
                </span>

                <h2>
                  Have drawings or technical specifications?
                </h2>

                <p>
                  Sharing the relevant project information helps
                  us understand your requirement and discuss
                  the appropriate next steps.
                </p>

                <Link
                  to="/enquiry"
                  className="pe-services-button"
                >
                  SHARE YOUR REQUIREMENT
                  <ArrowUpRight size={17} />
                </Link>
              </div>

              <div className="pe-services-requirement-list">

                <div className="pe-services-requirement-item">
                  <CheckCircle2 size={19} />
                  Project description and intended application
                </div>

                <div className="pe-services-requirement-item">
                  <CheckCircle2 size={19} />
                  Technical drawings, if available
                </div>

                <div className="pe-services-requirement-item">
                  <CheckCircle2 size={19} />
                  Dimensions and specifications
                </div>

                <div className="pe-services-requirement-item">
                  <CheckCircle2 size={19} />
                  Material and quantity details, if known
                </div>

                <div className="pe-services-requirement-item">
                  <CheckCircle2 size={19} />
                  Expected project timeline
                </div>

              </div>

            </div>
          </div>
        </section>

        {/* CTA */}

        <section className="pe-services-cta">
          <div className="pe-services-container">
            <div className="pe-services-cta-inner">

              <div>
                <span className="pe-services-eyebrow">
                  Let's Discuss
                </span>

                <h2>
                  Tell us what your project requires.
                </h2>

                <p>
                  Connect with Prathamesh Enterprises to discuss
                  your industrial fabrication requirement.
                </p>
              </div>

              <Link
                to="/enquiry"
                className="pe-services-button"
              >
                REQUEST A QUOTE
                <ArrowRight size={17} />
              </Link>

            </div>
          </div>
        </section>

      </main>
    </>
  );
}

export default Services;
