
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
  CheckCircle2
} from "lucide-react";

function Industries() {
  const industries = [
    {
      number: "01",
      icon: Pill,
      title: "Pharmaceutical Industry",
      description:
        "Understanding fabrication requirements in pharmaceutical manufacturing environments, where project specifications and quality expectations are important.",
      tags: ["Manufacturing", "Industrial Projects"]
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
    "Project specifications and drawings",
    "Application and operating environment",
    "Material and dimension requirements",
    "Quality expectations and scope",
    "Project schedule and coordination"
  ];

  return (
    <>
      <style>{`
        .pe-industries-page {
          background: #f5f7f8;
          color: #142b37;
          font-family: Arial, Helvetica, sans-serif;
          overflow: hidden;
        }

        .pe-industries-page * {
          box-sizing: border-box;
        }

        .pe-industries-container {
          width: min(1200px, calc(100% - 48px));
          margin: auto;
        }

        .pe-industries-hero {
          background:
            radial-gradient(circle at 85% 45%, rgba(77, 158, 187, .2), transparent 35%),
            #102b3a;
          color: white;
          padding: 105px 0 100px;
          position: relative;
        }

        .pe-industries-hero::after {
          content: "";
          position: absolute;
          width: 340px;
          height: 340px;
          right: 7%;
          top: 50%;
          transform: translateY(-50%);
          border: 1px solid rgba(255,255,255,.12);
          border-radius: 50%;
          box-shadow: 0 0 0 45px rgba(255,255,255,.025),
                      0 0 0 90px rgba(255,255,255,.018);
        }

        .pe-industries-hero-content {
          position: relative;
          z-index: 1;
          max-width: 760px;
        }

        .pe-industries-eyebrow {
          display: flex;
          align-items: center;
          gap: 12px;
          color: #72c9e7;
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 2.5px;
          text-transform: uppercase;
        }

        .pe-industries-eyebrow::before {
          content: "";
          width: 28px;
          height: 2px;
          background: #72c9e7;
        }

        .pe-industries-hero h1 {
          font-size: clamp(42px, 6vw, 70px);
          letter-spacing: -3px;
          line-height: 1.08;
          margin: 24px 0;
        }

        .pe-industries-hero h1 span {
          color: #72c9e7;
        }

        .pe-industries-hero p {
          color: #b8cbd4;
          max-width: 620px;
          font-size: 15px;
          line-height: 1.9;
          margin: 0;
        }

        .pe-industries-breadcrumb {
          display: flex;
          gap: 10px;
          margin-top: 35px;
          color: #a5bac4;
          font-size: 11px;
        }

        .pe-industries-breadcrumb a {
          color: #72c9e7;
          text-decoration: none;
        }

        .pe-industries-section {
          padding: 100px 0;
        }

        .pe-industries-heading {
          max-width: 700px;
          margin-bottom: 48px;
        }

        .pe-industries-section-label {
          color: #1685aa;
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 2px;
          text-transform: uppercase;
        }

        .pe-industries-heading h2 {
          color: #132f3e;
          font-size: clamp(32px, 4vw, 48px);
          letter-spacing: -1.8px;
          line-height: 1.16;
          margin: 18px 0;
        }

        .pe-industries-heading p {
          color: #71818a;
          font-size: 14px;
          line-height: 1.9;
          margin: 0;
        }

        .pe-industries-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 18px;
        }

        .pe-industry-card {
          background: #fff;
          padding: 32px 28px;
          border: 1px solid #e3eaed;
          min-height: 300px;
          display: flex;
          flex-direction: column;
          transition: .25s;
        }

        .pe-industry-card:hover {
          transform: translateY(-6px);
          border-color: #80c6df;
          box-shadow: 0 18px 40px rgba(20, 55, 70, .07);
        }

        .pe-industry-card-top {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .pe-industry-card-number {
          color: #9aabb3;
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 2px;
        }

        .pe-industry-card-icon {
          width: 50px;
          height: 50px;
          display: grid;
          place-items: center;
          color: #1685aa;
          background: #eaf5f9;
        }

        .pe-industry-card h3 {
          color: #173442;
          font-size: 19px;
          line-height: 1.4;
          margin: 25px 0 12px;
        }

        .pe-industry-card p {
          color: #71818a;
          font-size: 12px;
          line-height: 1.9;
          margin: 0;
        }

        .pe-industry-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-top: auto;
          padding-top: 23px;
        }

        .pe-industry-tags span {
          padding: 7px 9px;
          background: #eef4f6;
          color: #526b78;
          font-size: 10px;
          font-weight: 700;
        }

        .pe-industries-focus {
          background: #102b3a;
          color: #fff;
        }

        .pe-industries-focus-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 70px;
          align-items: center;
        }

        .pe-industries-focus .pe-industries-section-label {
          color: #72c9e7;
        }

        .pe-industries-focus h2 {
          color: #fff;
          font-size: clamp(32px, 4vw, 46px);
          line-height: 1.18;
          letter-spacing: -1.8px;
          margin: 18px 0;
        }

        .pe-industries-focus p {
          color: #b1c3cc;
          font-size: 13px;
          line-height: 1.95;
        }

        .pe-industries-focus-list {
          display: grid;
          gap: 0;
          border-top: 1px solid rgba(255,255,255,.17);
        }

        .pe-industries-focus-item {
          padding: 19px 0;
          border-bottom: 1px solid rgba(255,255,255,.17);
          display: flex;
          align-items: center;
          gap: 14px;
          color: #dce8ed;
          font-size: 13px;
        }

        .pe-industries-focus-item svg {
          color: #72c9e7;
          flex-shrink: 0;
        }

        .pe-industries-note {
          background: #e8f2f6;
          border-left: 3px solid #1685aa;
          padding: 20px 23px;
          margin-top: 35px;
          color: #46616e;
          font-size: 12px;
          line-height: 1.8;
        }

        .pe-industries-cta {
          padding: 75px 0;
          background: #0b202c;
          color: #fff;
        }

        .pe-industries-cta-inner {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 35px;
        }

        .pe-industries-cta h2 {
          max-width: 670px;
          font-size: clamp(29px, 4vw, 42px);
          line-height: 1.2;
          letter-spacing: -1.5px;
          margin: 15px 0;
        }

        .pe-industries-cta p {
          color: #b0c2cb;
          font-size: 13px;
          line-height: 1.8;
        }

        .pe-industries-button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          padding: 17px 22px;
          background: #72c9e7;
          color: #092330;
          text-decoration: none;
          font-size: 12px;
          font-weight: 800;
          white-space: nowrap;
          transition: .25s;
        }

        .pe-industries-button:hover {
          background: #fff;
          transform: translateY(-3px);
        }

        @media(max-width: 950px) {
          .pe-industries-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .pe-industries-focus-grid {
            gap: 35px;
          }
        }

        @media(max-width: 600px) {
          .pe-industries-container {
            width: calc(100% - 36px);
          }

          .pe-industries-hero {
            padding: 85px 0;
          }

          .pe-industries-hero h1 {
            letter-spacing: -2px;
          }

          .pe-industries-hero::after {
            right: -180px;
          }

          .pe-industries-section {
            padding: 75px 0;
          }

          .pe-industries-grid,
          .pe-industries-focus-grid {
            grid-template-columns: 1fr;
          }

          .pe-industry-card {
            min-height: 280px;
          }

          .pe-industries-cta-inner {
            flex-direction: column;
            align-items: flex-start;
          }

          .pe-industries-button {
            width: 100%;
          }
        }
      `}</style>

      <main className="pe-industries-page">

        {/* HERO */}

        <section className="pe-industries-hero">
          <div className="pe-industries-container">
            <div className="pe-industries-hero-content">

              <span className="pe-industries-eyebrow">
                Industries We Work With
              </span>

              <h1>
                Industry understanding.
                <br />
                <span>Fabrication experience.</span>
              </h1>

              <p>
                With 18 years of experience, Prathamesh Enterprises
                has worked in industrial environments and understands
                the importance of project requirements, specifications
                and dependable coordination.
              </p>

              <div className="pe-industries-breadcrumb">
                <Link to="/">Home</Link>
                <span>/</span>
                <span>Industries</span>
              </div>

            </div>
          </div>
        </section>

        {/* INDUSTRY CARDS */}

        <section className="pe-industries-section">
          <div className="pe-industries-container">

            <div className="pe-industries-heading">
              <span className="pe-industries-section-label">
                Industry Sectors
              </span>

              <h2>
                Understanding the environments our clients operate in.
              </h2>

              <p>
                Our experience includes industrial and manufacturing
                environments. The following sectors describe the
                industries relevant to our business experience.
              </p>
            </div>

            <div className="pe-industries-grid">
              {industries.map((industry) => {
                const Icon = industry.icon;

                return (
                  <article
                    className="pe-industry-card"
                    key={industry.number}
                  >
                    <div className="pe-industry-card-top">
                      <span className="pe-industry-card-number">
                        / {industry.number}
                      </span>

                      <div className="pe-industry-card-icon">
                        <Icon size={24} />
                      </div>
                    </div>

                    <h3>{industry.title}</h3>
                    <p>{industry.description}</p>

                    <div className="pe-industry-tags">
                      {industry.tags.map((tag) => (
                        <span key={tag}>{tag}</span>
                      ))}
                    </div>
                  </article>
                );
              })}
            </div>

            <div className="pe-industries-note">
              These are industry categories for website presentation.
              Confirm the specific sectors and project experience
              with the business before publishing them as completed
              work or specialist capabilities.
            </div>

          </div>
        </section>

        {/* INDUSTRIAL REQUIREMENTS */}

        <section className="pe-industries-section pe-industries-focus">
          <div className="pe-industries-container">
            <div className="pe-industries-focus-grid">

              <div>
                <span className="pe-industries-section-label">
                  Understanding Requirements
                </span>

                <h2>
                  Every industry has its own project expectations.
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

              <div className="pe-industries-focus-list">
                {considerations.map((item) => (
                  <div
                    className="pe-industries-focus-item"
                    key={item}
                  >
                    <CheckCircle2 size={19} />
                    {item}
                  </div>
                ))}
              </div>

            </div>
          </div>
        </section>

        {/* CTA */}

        <section className="pe-industries-cta">
          <div className="pe-industries-container">
            <div className="pe-industries-cta-inner">

              <div>
                <span className="pe-industries-eyebrow">
                  Have a Project?
                </span>

                <h2>
                  Let's discuss your industrial requirement.
                </h2>

                <p>
                  Share your project details with our team to
                  start a conversation.
                </p>
              </div>

              <Link
                to="/enquiry"
                className="pe-industries-button"
              >
                SEND AN ENQUIRY
                <ArrowUpRight size={17} />
              </Link>

            </div>
          </div>
        </section>

      </main>
    </>
  );
}

export default Industries;
