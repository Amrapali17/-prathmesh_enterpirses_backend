
import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  ArrowRight,
  Factory,
  Building2,
  Settings,
  Layers3,
  Image as ImageIcon,
  BriefcaseBusiness
} from "lucide-react";

function Projects() {
  const projects = [
    {
      number: "01",
      category: "Industrial Fabrication",
      title: "Industrial Fabrication Work",
      description:
        "Fabrication-related work based on industrial project requirements and agreed specifications.",
      icon: Factory
    },
    {
      number: "02",
      category: "Pharmaceutical Sector",
      title: "Pharmaceutical Industry Projects",
      description:
        "Project experience associated with pharmaceutical manufacturing environments.",
      icon: Building2
    },
    {
      number: "03",
      category: "Custom Requirements",
      title: "Custom Fabrication Projects",
      description:
        "Custom project requirements discussed according to client drawings and specifications.",
      icon: Settings
    },
    {
      number: "04",
      category: "Industrial Components",
      title: "Fabrication Components",
      description:
        "Fabrication component requirements considered according to project scope and application.",
      icon: Layers3
    }
  ];

  return (
    <>
      <style>{`
        .pe-projects-page {
          background: #f5f7f8;
          color: #142b37;
          font-family: Arial, Helvetica, sans-serif;
          overflow: hidden;
        }

        .pe-projects-page * {
          box-sizing: border-box;
        }

        .pe-projects-container {
          width: min(1200px, calc(100% - 48px));
          margin: auto;
        }

        .pe-projects-hero {
          background:
            radial-gradient(circle at 85% 45%, rgba(77, 158, 187, .2), transparent 35%),
            #102b3a;
          color: white;
          padding: 105px 0 100px;
          position: relative;
        }

        .pe-projects-hero::after {
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

        .pe-projects-hero-content {
          position: relative;
          z-index: 1;
          max-width: 760px;
        }

        .pe-projects-eyebrow {
          display: flex;
          align-items: center;
          gap: 12px;
          color: #72c9e7;
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 2.5px;
          text-transform: uppercase;
        }

        .pe-projects-eyebrow::before {
          content: "";
          width: 28px;
          height: 2px;
          background: #72c9e7;
        }

        .pe-projects-hero h1 {
          font-size: clamp(42px, 6vw, 70px);
          letter-spacing: -3px;
          line-height: 1.08;
          margin: 24px 0;
        }

        .pe-projects-hero h1 span {
          color: #72c9e7;
        }

        .pe-projects-hero p {
          color: #b8cbd4;
          max-width: 620px;
          font-size: 15px;
          line-height: 1.9;
          margin: 0;
        }

        .pe-projects-breadcrumb {
          display: flex;
          gap: 10px;
          margin-top: 35px;
          color: #a5bac4;
          font-size: 11px;
        }

        .pe-projects-breadcrumb a {
          color: #72c9e7;
          text-decoration: none;
        }

        .pe-projects-section {
          padding: 100px 0;
        }

        .pe-projects-heading {
          max-width: 700px;
          margin-bottom: 45px;
        }

        .pe-projects-section-label {
          color: #1685aa;
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 2px;
          text-transform: uppercase;
        }

        .pe-projects-heading h2 {
          color: #132f3e;
          font-size: clamp(32px, 4vw, 48px);
          letter-spacing: -1.8px;
          line-height: 1.16;
          margin: 18px 0;
        }

        .pe-projects-heading p {
          color: #71818a;
          font-size: 14px;
          line-height: 1.9;
          margin: 0;
        }

        .pe-projects-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 22px;
        }

        .pe-project-card {
          background: #fff;
          border: 1px solid #e3eaed;
          transition: .25s ease;
        }

        .pe-project-card:hover {
          transform: translateY(-5px);
          border-color: #80c6df;
          box-shadow: 0 18px 40px rgba(20, 55, 70, .07);
        }

        .pe-project-visual {
          min-height: 245px;
          background:
            radial-gradient(circle at 50% 45%, rgba(111, 197, 228, .16), transparent 36%),
            linear-gradient(135deg, #1d3e4e, #0c202b);
          position: relative;
          display: grid;
          place-items: center;
          overflow: hidden;
        }

        .pe-project-visual::before {
          content: "";
          position: absolute;
          inset: 0;
          opacity: .12;
          background-image:
            linear-gradient(rgba(255,255,255,.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,.3) 1px, transparent 1px);
          background-size: 35px 35px;
        }

        .pe-project-visual-icon {
          width: 85px;
          height: 85px;
          display: grid;
          place-items: center;
          color: #83d2ed;
          border: 1px solid rgba(131,210,237,.35);
          background: rgba(255,255,255,.04);
          position: relative;
          z-index: 1;
        }

        .pe-project-visual-number {
          position: absolute;
          bottom: 20px;
          left: 23px;
          color: rgba(255,255,255,.65);
          font-size: 11px;
          letter-spacing: 2px;
        }

        .pe-project-card-content {
          padding: 27px;
        }

        .pe-project-category {
          color: #1685aa;
          font-size: 10px;
          font-weight: 800;
          letter-spacing: 1.5px;
          text-transform: uppercase;
        }

        .pe-project-card h3 {
          color: #173442;
          font-size: 21px;
          letter-spacing: -.5px;
          margin: 13px 0;
        }

        .pe-project-card p {
          color: #71818a;
          font-size: 12px;
          line-height: 1.9;
          margin: 0;
        }

        .pe-projects-photo-note {
          margin-top: 35px;
          background: #e8f2f6;
          border-left: 3px solid #1685aa;
          padding: 20px 23px;
          color: #46616e;
          font-size: 12px;
          line-height: 1.8;
        }

        .pe-projects-gallery {
          background: #eaf0f3;
        }

        .pe-projects-gallery-inner {
          display: grid;
          grid-template-columns: 1fr 1fr;
          align-items: center;
          gap: 60px;
        }

        .pe-projects-gallery h2 {
          color: #132f3e;
          font-size: clamp(32px, 4vw, 45px);
          line-height: 1.2;
          letter-spacing: -1.7px;
          margin: 18px 0;
        }

        .pe-projects-gallery p {
          color: #71818a;
          font-size: 14px;
          line-height: 1.9;
        }

        .pe-projects-gallery-box {
          min-height: 310px;
          background: #102b3a;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          gap: 15px;
          text-align: center;
          padding: 30px;
          color: #fff;
        }

        .pe-projects-gallery-box svg {
          color: #72c9e7;
        }

        .pe-projects-gallery-box strong {
          font-size: 18px;
        }

        .pe-projects-gallery-box span {
          color: #aebfc8;
          font-size: 12px;
          line-height: 1.8;
          max-width: 280px;
        }

        .pe-projects-cta {
          padding: 75px 0;
          background: #0b202c;
          color: #fff;
        }

        .pe-projects-cta-inner {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 35px;
        }

        .pe-projects-cta h2 {
          max-width: 670px;
          font-size: clamp(29px, 4vw, 42px);
          line-height: 1.2;
          letter-spacing: -1.5px;
          margin: 15px 0;
        }

        .pe-projects-cta p {
          color: #b0c2cb;
          font-size: 13px;
          line-height: 1.8;
        }

        .pe-projects-button {
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

        .pe-projects-button:hover {
          background: #fff;
          transform: translateY(-3px);
        }

        @media(max-width: 850px) {
          .pe-projects-gallery-inner {
            gap: 30px;
          }
        }

        @media(max-width: 600px) {
          .pe-projects-container {
            width: calc(100% - 36px);
          }

          .pe-projects-hero {
            padding: 85px 0;
          }

          .pe-projects-hero h1 {
            letter-spacing: -2px;
          }

          .pe-projects-hero::after {
            right: -180px;
          }

          .pe-projects-section {
            padding: 75px 0;
          }

          .pe-projects-grid,
          .pe-projects-gallery-inner {
            grid-template-columns: 1fr;
          }

          .pe-project-visual {
            min-height: 210px;
          }

          .pe-projects-gallery-box {
            min-height: 250px;
          }

          .pe-projects-cta-inner {
            flex-direction: column;
            align-items: flex-start;
          }

          .pe-projects-button {
            width: 100%;
          }
        }
      `}</style>

      <main className="pe-projects-page">

        {/* HERO */}

        <section className="pe-projects-hero">
          <div className="pe-projects-container">
            <div className="pe-projects-hero-content">

              <span className="pe-projects-eyebrow">
                Our Work
              </span>

              <h1>
                Experience in action.
                <br />
                <span>Work that matters.</span>
              </h1>

              <p>
                Explore the types of industrial fabrication work
                and project requirements associated with
                Prathamesh Enterprises.
              </p>

              <div className="pe-projects-breadcrumb">
                <Link to="/">Home</Link>
                <span>/</span>
                <span>Projects</span>
              </div>

            </div>
          </div>
        </section>

        {/* PROJECT CATEGORIES */}

        <section className="pe-projects-section">
          <div className="pe-projects-container">

            <div className="pe-projects-heading">
              <span className="pe-projects-section-label">
                Project Experience
              </span>

              <h2>
                Industrial work shaped by project requirements.
              </h2>

              <p>
                Our experience spans fabrication-related
                requirements across industrial environments.
                The categories below are placeholders for
                presenting verified projects and photographs.
              </p>
            </div>

            <div className="pe-projects-grid">
              {projects.map((project) => {
                const Icon = project.icon;

                return (
                  <article
                    className="pe-project-card"
                    key={project.number}
                  >
                    <div className="pe-project-visual">
                      <div className="pe-project-visual-icon">
                        <Icon size={36} />
                      </div>

                      <span className="pe-project-visual-number">
                        PROJECT CATEGORY / {project.number}
                      </span>
                    </div>

                    <div className="pe-project-card-content">
                      <span className="pe-project-category">
                        {project.category}
                      </span>

                      <h3>{project.title}</h3>

                      <p>{project.description}</p>
                    </div>
                  </article>
                );
              })}
            </div>

            <div className="pe-projects-photo-note">
              These are illustrative project categories, not
              verified individual project case studies. We will
              replace them with actual project names, photographs
              and descriptions after receiving approved company
              project material.
            </div>

          </div>
        </section>

        {/* REAL PROJECT GALLERY */}

        <section className="pe-projects-section pe-projects-gallery">
          <div className="pe-projects-container">
            <div className="pe-projects-gallery-inner">

              <div>
                <span className="pe-projects-section-label">
                  Project Gallery
                </span>

                <h2>
                  Show the work. Build confidence.
                </h2>

                <p>
                  Real workshop photographs, completed fabrication
                  work, project installations and approved client
                  project images will make this portfolio more
                  informative and credible.
                </p>

                <p>
                  We can organise the gallery by project type,
                  industry and application once the actual images
                  are available.
                </p>

                <Link
                  to="/enquiry"
                  className="pe-projects-button"
                >
                  DISCUSS YOUR PROJECT
                  <ArrowUpRight size={17} />
                </Link>
              </div>

              <div className="pe-projects-gallery-box">
                <ImageIcon size={43} />

                <strong>Project Photography</strong>

                <span>
                  Actual company project images can be added
                  here to create a professional visual portfolio.
                </span>
              </div>

            </div>
          </div>
        </section>

        {/* CTA */}

        <section className="pe-projects-cta">
          <div className="pe-projects-container">
            <div className="pe-projects-cta-inner">

              <div>
                <span className="pe-projects-eyebrow">
                  Your Next Project
                </span>

                <h2>
                  Let's discuss what you need fabricated.
                </h2>

                <p>
                  Share your project requirements with
                  Prathamesh Enterprises.
                </p>
              </div>

              <Link
                to="/enquiry"
                className="pe-projects-button"
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

export default Projects;
