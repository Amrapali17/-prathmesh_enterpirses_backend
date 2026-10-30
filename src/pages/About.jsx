
import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  Factory,
  ShieldCheck,
  Target,
  Users,
  Award,
  Clock3,
  CheckCircle2
} from "lucide-react";

function About() {
  const values = [
    {
      icon: ShieldCheck,
      title: "Quality Focus",
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
      title: "Client Understanding",
      description:
        "Building professional working relationships through communication and coordination."
    },
    {
      icon: Factory,
      title: "Industry Experience",
      description:
        "18 years of experience in the industrial fabrication sector."
    }
  ];

  const milestones = [
    {
      number: "18+",
      title: "Years of Experience",
      description: "Industry experience in fabrication."
    },
    {
      number: "B2B",
      title: "Industrial Focus",
      description: "Working with business and industrial requirements."
    },
    {
      number: "01",
      title: "Client-First Approach",
      description: "Understanding project needs before execution."
    }
  ];

  return (
    <>
      <style>{`
        .pe-about-page {
          background: #f5f7f8;
          color: #142b37;
          font-family: Arial, Helvetica, sans-serif;
          overflow: hidden;
        }

        .pe-about-page * {
          box-sizing: border-box;
        }

        .pe-about-container {
          width: min(1200px, calc(100% - 48px));
          margin: auto;
        }

        .pe-about-hero {
          background:
            radial-gradient(circle at 85% 50%, rgba(71, 154, 184, .2), transparent 35%),
            #102b3a;
          padding: 110px 0 105px;
          color: #fff;
          position: relative;
        }

        .pe-about-hero::after {
          content: "";
          position: absolute;
          right: 7%;
          top: 50%;
          transform: translateY(-50%);
          width: 330px;
          height: 330px;
          border: 1px solid rgba(255,255,255,.12);
          border-radius: 50%;
          box-shadow:
            0 0 0 40px rgba(255,255,255,.025),
            0 0 0 80px rgba(255,255,255,.02);
        }

        .pe-about-hero-content {
          position: relative;
          z-index: 1;
          max-width: 780px;
        }

        .pe-about-eyebrow {
          color: #72c9e7;
          text-transform: uppercase;
          letter-spacing: 2.5px;
          font-size: 11px;
          font-weight: 800;
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .pe-about-eyebrow::before {
          content: "";
          width: 28px;
          height: 2px;
          background: #72c9e7;
        }

        .pe-about-hero h1 {
          font-size: clamp(42px, 6vw, 70px);
          line-height: 1.08;
          letter-spacing: -3px;
          margin: 24px 0;
        }

        .pe-about-hero h1 span {
          color: #72c9e7;
        }

        .pe-about-hero p {
          color: #b8cbd4;
          max-width: 620px;
          font-size: 15px;
          line-height: 1.9;
          margin: 0;
        }

        .pe-about-breadcrumb {
          margin-top: 35px;
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 11px;
          color: #a5bac4;
        }

        .pe-about-breadcrumb a {
          color: #72c9e7;
          text-decoration: none;
        }

        .pe-about-section {
          padding: 100px 0;
        }

        .pe-about-intro {
          display: grid;
          grid-template-columns: .9fr 1.1fr;
          gap: 75px;
          align-items: start;
        }

        .pe-about-section-label {
          color: #1685aa;
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 2px;
          text-transform: uppercase;
        }

        .pe-about-intro h2,
        .pe-about-values-heading h2,
        .pe-about-commitment h2 {
          color: #132f3e;
          font-size: clamp(32px, 4vw, 47px);
          line-height: 1.16;
          letter-spacing: -1.8px;
          margin: 20px 0;
        }

        .pe-about-intro-copy p {
          color: #6c7d87;
          font-size: 14px;
          line-height: 2;
          margin: 0 0 18px;
        }

        .pe-about-highlight {
          background: #e8f2f6;
          border-left: 3px solid #1685aa;
          padding: 20px 23px;
          color: #284a5b;
          font-size: 13px;
          line-height: 1.8;
          margin-top: 27px;
        }

        .pe-about-milestones {
          background: #102b3a;
          padding: 65px 0;
        }

        .pe-about-milestone-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 25px;
        }

        .pe-about-milestone {
          padding: 20px 25px;
          border-left: 1px solid rgba(255,255,255,.22);
        }

        .pe-about-milestone strong {
          display: block;
          color: #72c9e7;
          font-size: 38px;
          letter-spacing: -1px;
        }

        .pe-about-milestone h3 {
          color: #fff;
          font-size: 15px;
          margin: 12px 0 8px;
        }

        .pe-about-milestone p {
          color: #aebfc8;
          font-size: 12px;
          line-height: 1.8;
          margin: 0;
        }

        .pe-about-values {
          background: #fff;
        }

        .pe-about-values-heading {
          max-width: 650px;
          margin-bottom: 45px;
        }

        .pe-about-values-heading p {
          color: #71818a;
          font-size: 14px;
          line-height: 1.9;
        }

        .pe-about-values-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 17px;
        }

        .pe-about-value-card {
          border: 1px solid #e5ecef;
          padding: 30px 23px;
          min-height: 245px;
          transition: .25s;
        }

        .pe-about-value-card:hover {
          transform: translateY(-5px);
          border-color: #85c8df;
          box-shadow: 0 15px 35px rgba(20, 55, 70, .07);
        }

        .pe-about-value-icon {
          width: 48px;
          height: 48px;
          display: grid;
          place-items: center;
          background: #eaf5f9;
          color: #1685aa;
          margin-bottom: 24px;
        }

        .pe-about-value-card h3 {
          color: #173442;
          font-size: 17px;
          margin: 0 0 12px;
        }

        .pe-about-value-card p {
          color: #71818a;
          font-size: 12px;
          line-height: 1.9;
          margin: 0;
        }

        .pe-about-commitment {
          background: #eaf0f3;
        }

        .pe-about-commitment-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 65px;
          align-items: center;
        }

        .pe-about-commitment p {
          color: #6d7e87;
          font-size: 14px;
          line-height: 1.95;
        }

        .pe-about-points {
          display: grid;
          gap: 19px;
        }

        .pe-about-point {
          display: flex;
          align-items: flex-start;
          gap: 14px;
          padding-bottom: 18px;
          border-bottom: 1px solid #d7e1e6;
          color: #34505e;
          font-size: 13px;
          line-height: 1.7;
        }

        .pe-about-point svg {
          color: #1685aa;
          flex-shrink: 0;
        }

        .pe-about-cta {
          padding: 75px 0;
          background: #0b202c;
          color: #fff;
        }

        .pe-about-cta-inner {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 35px;
        }

        .pe-about-cta h2 {
          max-width: 670px;
          font-size: clamp(29px, 4vw, 42px);
          letter-spacing: -1.4px;
          line-height: 1.2;
          margin: 15px 0;
        }

        .pe-about-cta p {
          color: #b2c4cd;
          font-size: 13px;
          line-height: 1.8;
        }

        .pe-about-cta-button {
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

        .pe-about-cta-button:hover {
          background: #fff;
          transform: translateY(-3px);
        }

        @media(max-width: 900px) {
          .pe-about-values-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .pe-about-intro,
          .pe-about-commitment-grid {
            gap: 35px;
          }

          .pe-about-hero::after {
            right: -120px;
          }
        }

        @media(max-width: 600px) {
          .pe-about-container {
            width: calc(100% - 36px);
          }

          .pe-about-hero {
            padding: 85px 0;
          }

          .pe-about-hero h1 {
            letter-spacing: -2px;
          }

          .pe-about-section {
            padding: 75px 0;
          }

          .pe-about-intro,
          .pe-about-commitment-grid {
            grid-template-columns: 1fr;
            gap: 25px;
          }

          .pe-about-milestone-grid {
            grid-template-columns: 1fr;
            gap: 15px;
          }

          .pe-about-milestone {
            padding: 15px 20px;
          }

          .pe-about-values-grid {
            grid-template-columns: 1fr;
          }

          .pe-about-value-card {
            min-height: auto;
          }

          .pe-about-cta-inner {
            flex-direction: column;
            align-items: flex-start;
          }

          .pe-about-cta-button {
            width: 100%;
          }
        }
      `}</style>

      <main className="pe-about-page">

        <section className="pe-about-hero">
          <div className="pe-about-container">
            <div className="pe-about-hero-content">

              <span className="pe-about-eyebrow">
                About Our Company
              </span>

              <h1>
                Built through experience.
                <br />
                Focused on <span>quality.</span>
              </h1>

              <p>
                Get to know Prathamesh Enterprises — an industrial
                fabrication business with 18 years of experience,
                focused on understanding project requirements
                and delivering dependable work.
              </p>

              <div className="pe-about-breadcrumb">
                <Link to="/">Home</Link>
                <span>/</span>
                <span>About Us</span>
              </div>

            </div>
          </div>
        </section>

        <section className="pe-about-section">
          <div className="pe-about-container">
            <div className="pe-about-intro">

              <div>
                <span className="pe-about-section-label">
                  Our Story
                </span>

                <h2>
                  18 years of experience in industrial fabrication.
                </h2>
              </div>

              <div className="pe-about-intro-copy">
                <p>
                  Prathamesh Enterprises is an industrial fabrication
                  business with 18 years of experience. Over the
                  years, the business has developed experience in
                  working with industrial project requirements and
                  business clients.
                </p>

                <p>
                  We understand that industrial projects require
                  careful attention to specifications, coordination
                  and quality expectations. Our approach begins with
                  understanding what the client needs and discussing
                  a suitable way forward.
                </p>

                <p>
                  Our aim is to build long-term professional
                  relationships through clear communication,
                  practical execution and a commitment to the
                  requirements of each project.
                </p>

                <div className="pe-about-highlight">
                  Our experience is the foundation. Understanding
                  the client's requirement is where every project begins.
                </div>
              </div>

            </div>
          </div>
        </section>

        <section className="pe-about-milestones">
          <div className="pe-about-container">
            <div className="pe-about-milestone-grid">
              {milestones.map((item) => (
                <div className="pe-about-milestone" key={item.title}>
                  <strong>{item.number}</strong>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="pe-about-section pe-about-values">
          <div className="pe-about-container">

            <div className="pe-about-values-heading">
              <span className="pe-about-section-label">
                What Matters to Us
              </span>

              <h2>
                The principles behind our work.
              </h2>

              <p>
                Our working approach is guided by the importance
                of understanding client expectations, maintaining
                quality focus and coordinating around project needs.
              </p>
            </div>

            <div className="pe-about-values-grid">
              {values.map((value) => {
                const Icon = value.icon;

                return (
                  <article
                    className="pe-about-value-card"
                    key={value.title}
                  >
                    <div className="pe-about-value-icon">
                      <Icon size={23} />
                    </div>

                    <h3>{value.title}</h3>
                    <p>{value.description}</p>
                  </article>
                );
              })}
            </div>

          </div>
        </section>

        <section className="pe-about-section pe-about-commitment">
          <div className="pe-about-container">
            <div className="pe-about-commitment-grid">

              <div>
                <span className="pe-about-section-label">
                  Our Commitment
                </span>

                <h2>
                  Understanding the work before delivering the work.
                </h2>

                <p>
                  Every project begins with a conversation. We
                  believe that understanding the client's
                  specifications, expectations and timelines
                  is essential to establishing a clear project scope.
                </p>
              </div>

              <div className="pe-about-points">
                <div className="pe-about-point">
                  <CheckCircle2 size={20} />
                  Understanding the project scope and specifications.
                </div>

                <div className="pe-about-point">
                  <CheckCircle2 size={20} />
                  Discussing requirements and suitable execution approaches.
                </div>

                <div className="pe-about-point">
                  <CheckCircle2 size={20} />
                  Maintaining communication throughout project coordination.
                </div>

                <div className="pe-about-point">
                  <CheckCircle2 size={20} />
                  Keeping quality and client expectations in focus.
                </div>
              </div>

            </div>
          </div>
        </section>

        <section className="pe-about-cta">
          <div className="pe-about-container">
            <div className="pe-about-cta-inner">

              <div>
                <span className="pe-about-eyebrow">
                  Work With Us
                </span>

                <h2>
                  Let's understand your next fabrication requirement.
                </h2>

                <p>
                  Connect with Prathamesh Enterprises to discuss
                  your project.
                </p>
              </div>

              <Link
                to="/enquiry"
                className="pe-about-cta-button"
              >
                DISCUSS A PROJECT
                <ArrowUpRight size={17} />
              </Link>

            </div>
          </div>
        </section>

      </main>
    </>
  );
}

export default About;
