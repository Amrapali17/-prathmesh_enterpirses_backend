
import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  ArrowRight,
  Factory,
  Settings,
  ShieldCheck,
  Clock3,
  Building2,
  CheckCircle2,
  Phone,
  Mail,
  Target,
  Layers3,
  MoveUpRight
} from "lucide-react";

function Home() {
  const services = [
    {
      number: "01",
      icon: Factory,
      title: "Industrial Fabrication",
      description:
        "Fabrication solutions designed around industrial project requirements and specifications."
    },
    {
      number: "02",
      icon: Settings,
      title: "Custom Fabrication",
      description:
        "Project-focused fabrication work developed according to client needs and drawings."
    },
    {
      number: "03",
      icon: Layers3,
      title: "Engineering Support",
      description:
        "Practical coordination and execution support throughout fabrication requirements."
    }
  ];

  const industries = [
    "Pharmaceuticals",
    "Chemical Manufacturing",
    "Industrial Manufacturing",
    "Engineering & Infrastructure"
  ];

  const clients = [
    "CIPLA",
    "EMCURE",
    "CLEAN SCIENCE",
    "ETERNIS",
    "LUPIN",
    "SUN PHARMA"
  ];

  const highlights = [
    {
      icon: Clock3,
      value: "18+",
      label: "Years of Experience"
    },
    {
      icon: ShieldCheck,
      value: "Quality",
      label: "Focused Execution"
    },
    {
      icon: Target,
      value: "Custom",
      label: "Project Approach"
    },
    {
      icon: Building2,
      value: "B2B",
      label: "Industrial Focus"
    }
  ];

  return (
    <>
      <style>{`
        .pe-home {
          background: #f5f7f8;
          color: #14232d;
          overflow: hidden;
          font-family: Arial, Helvetica, sans-serif;
        }

        .pe-home * {
          box-sizing: border-box;
        }

        .pe-container {
          width: min(1200px, calc(100% - 48px));
          margin: 0 auto;
        }

        .pe-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          color: #1685aa;
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 2.5px;
          text-transform: uppercase;
        }

        .pe-eyebrow::before {
          content: "";
          width: 27px;
          height: 2px;
          background: #1685aa;
        }

        .pe-hero {
          min-height: 690px;
          background:
            radial-gradient(ellipse at 82% 40%, rgba(39, 112, 142, .27), transparent 42%),
            linear-gradient(115deg, #081923 0%, #102b3a 58%, #183b4d 100%);
          color: #fff;
          position: relative;
          display: flex;
          align-items: center;
          isolation: isolate;
        }

        .pe-hero::before {
          content: "";
          position: absolute;
          inset: 0;
          z-index: -1;
          opacity: .13;
          background-image:
            linear-gradient(rgba(255,255,255,.13) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,.13) 1px, transparent 1px);
          background-size: 58px 58px;
          mask-image: linear-gradient(to right, transparent, black);
        }

        .pe-hero::after {
          content: "";
          position: absolute;
          width: 480px;
          height: 480px;
          border: 1px solid rgba(117, 191, 218, .18);
          border-radius: 50%;
          right: 4%;
          top: 50%;
          transform: translateY(-50%);
          box-shadow:
            0 0 0 55px rgba(117, 191, 218, .035),
            0 0 0 110px rgba(117, 191, 218, .025);
          z-index: -1;
        }

        .pe-hero-content {
          max-width: 780px;
          padding: 100px 0 110px;
          position: relative;
          z-index: 1;
        }

        .pe-hero-label {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          border: 1px solid rgba(153, 207, 227, .3);
          background: rgba(255,255,255,.055);
          border-radius: 50px;
          padding: 10px 16px;
          color: #c2dce7;
          font-size: 11px;
          letter-spacing: 1.7px;
          text-transform: uppercase;
          margin-bottom: 30px;
        }

        .pe-hero-label span {
          width: 7px;
          height: 7px;
          background: #5bc1e5;
          border-radius: 50%;
          box-shadow: 0 0 12px #5bc1e5;
        }

        .pe-hero h1 {
          font-size: clamp(43px, 6.3vw, 78px);
          line-height: 1.04;
          letter-spacing: -3.5px;
          font-weight: 800;
          max-width: 850px;
          margin: 0;
        }

        .pe-hero h1 em {
          color: #6fc5e4;
          font-style: normal;
        }

        .pe-hero-description {
          max-width: 590px;
          color: #b9cbd4;
          font-size: 16px;
          line-height: 1.9;
          margin: 27px 0 34px;
        }

        .pe-hero-actions {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 15px;
        }

        .pe-btn-primary,
        .pe-btn-secondary {
          display: inline-flex;
          justify-content: center;
          align-items: center;
          gap: 13px;
          text-decoration: none;
          padding: 16px 22px;
          border-radius: 3px;
          font-size: 12px;
          font-weight: 800;
          letter-spacing: .7px;
          transition: .25s ease;
        }

        .pe-btn-primary {
          color: #08202d;
          background: #72c9e7;
          border: 1px solid #72c9e7;
        }

        .pe-btn-primary:hover {
          background: #fff;
          border-color: #fff;
          transform: translateY(-3px);
        }

        .pe-btn-secondary {
          color: #fff;
          border: 1px solid rgba(255,255,255,.35);
        }

        .pe-btn-secondary:hover {
          border-color: #72c9e7;
          color: #72c9e7;
          transform: translateY(-3px);
        }

        .pe-hero-note {
          margin-top: 58px;
          display: flex;
          align-items: center;
          gap: 14px;
          color: #9fb6c1;
          font-size: 12px;
          letter-spacing: .4px;
        }

        .pe-hero-note strong {
          color: #fff;
          font-size: 15px;
        }

        .pe-hero-note-line {
          width: 40px;
          height: 1px;
          background: #6fc5e4;
        }

        .pe-stats {
          background: #fff;
          border-bottom: 1px solid #e5ebee;
        }

        .pe-stats-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
        }

        .pe-stat {
          padding: 30px 22px;
          border-right: 1px solid #e7edef;
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .pe-stat:first-child {
          border-left: 1px solid #e7edef;
        }

        .pe-stat-icon {
          width: 43px;
          height: 43px;
          flex-shrink: 0;
          display: grid;
          place-items: center;
          color: #1685aa;
          background: #eaf5f9;
        }

        .pe-stat-value {
          font-size: 19px;
          font-weight: 800;
          color: #122c3b;
        }

        .pe-stat-label {
          font-size: 11px;
          color: #71818b;
          margin-top: 5px;
        }

        .pe-section {
          padding: 105px 0;
        }

        .pe-section-heading {
          max-width: 700px;
          margin-bottom: 48px;
        }

        .pe-section-heading h2 {
          color: #122c3b;
          font-size: clamp(32px, 4vw, 49px);
          letter-spacing: -1.8px;
          line-height: 1.15;
          margin: 18px 0;
        }

        .pe-section-heading p {
          color: #687b86;
          font-size: 14px;
          line-height: 1.9;
          max-width: 590px;
          margin: 0;
        }

        .pe-about-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          align-items: center;
          gap: 75px;
        }

        .pe-about-visual {
          min-height: 430px;
          background:
            linear-gradient(145deg, rgba(8,25,35,.2), rgba(8,25,35,.88)),
            repeating-linear-gradient(
              135deg,
              #274653 0px,
              #274653 20px,
              #1d3946 20px,
              #1d3946 40px
            );
          position: relative;
          overflow: hidden;
          display: flex;
          align-items: flex-end;
          padding: 35px;
        }

        .pe-about-visual::before {
          content: "";
          position: absolute;
          width: 280px;
          height: 280px;
          border: 1px solid rgba(255,255,255,.25);
          border-radius: 50%;
          top: 55px;
          left: 50%;
          transform: translateX(-50%);
          box-shadow: 0 0 0 35px rgba(255,255,255,.04),
                      0 0 0 70px rgba(255,255,255,.025);
        }

        .pe-about-visual-content {
          position: relative;
          z-index: 1;
          color: #fff;
        }

        .pe-about-visual-content strong {
          display: block;
          font-size: 66px;
          line-height: 1;
          letter-spacing: -3px;
        }

        .pe-about-visual-content span {
          display: block;
          margin-top: 12px;
          color: #b9d3df;
          font-size: 12px;
          letter-spacing: 2px;
          text-transform: uppercase;
        }

        .pe-about-copy h2 {
          color: #122c3b;
          font-size: clamp(33px, 4vw, 48px);
          line-height: 1.15;
          letter-spacing: -1.8px;
          margin: 18px 0;
        }

        .pe-about-copy > p {
          color: #6c7d87;
          font-size: 14px;
          line-height: 1.95;
        }

        .pe-check-list {
          display: grid;
          gap: 15px;
          margin: 28px 0 32px;
        }

        .pe-check-item {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          color: #304651;
          font-size: 13px;
          line-height: 1.6;
        }

        .pe-check-item svg {
          color: #1685aa;
          flex-shrink: 0;
          margin-top: 1px;
        }

        .pe-text-link {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          color: #147da1;
          text-decoration: none;
          font-size: 12px;
          font-weight: 800;
          letter-spacing: .7px;
          border-bottom: 1px solid #b5d9e5;
          padding-bottom: 9px;
        }

        .pe-services-section {
          background: #eaf0f3;
        }

        .pe-heading-row {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          gap: 30px;
        }

        .pe-heading-row .pe-section-heading {
          margin-bottom: 48px;
        }

        .pe-services-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 18px;
        }

        .pe-service-card {
          background: #fff;
          padding: 34px 30px;
          min-height: 280px;
          border: 1px solid #e2e9ec;
          transition: .3s ease;
          position: relative;
        }

        .pe-service-card:hover {
          transform: translateY(-7px);
          border-color: #80c6df;
          box-shadow: 0 20px 45px rgba(24, 59, 77, .08);
        }

        .pe-service-number {
          color: #a6b7bf;
          font-size: 11px;
          letter-spacing: 2px;
          font-weight: 800;
        }

        .pe-service-icon {
          width: 52px;
          height: 52px;
          display: grid;
          place-items: center;
          background: #eaf5f9;
          color: #1685aa;
          margin: 27px 0 23px;
        }

        .pe-service-card h3 {
          color: #173442;
          font-size: 19px;
          margin: 0 0 12px;
          letter-spacing: -.4px;
        }

        .pe-service-card p {
          color: #74848d;
          font-size: 12px;
          line-height: 1.85;
          margin: 0;
        }

        .pe-industries {
          background: #102b3a;
          color: #fff;
        }

        .pe-industries .pe-section-heading h2 {
          color: #fff;
        }

        .pe-industries .pe-section-heading p {
          color: #afc2cc;
        }

        .pe-industry-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          border-top: 1px solid rgba(255,255,255,.15);
          border-left: 1px solid rgba(255,255,255,.15);
        }

        .pe-industry-item {
          min-height: 155px;
          padding: 27px;
          border-right: 1px solid rgba(255,255,255,.15);
          border-bottom: 1px solid rgba(255,255,255,.15);
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          transition: .25s;
        }

        .pe-industry-item:hover {
          background: rgba(255,255,255,.06);
        }

        .pe-industry-item svg {
          color: #72c9e7;
        }

        .pe-industry-item span {
          color: #e3edf1;
          font-size: 13px;
          font-weight: 700;
          line-height: 1.5;
        }

        .pe-client-section {
          background: #fff;
          text-align: center;
        }

        .pe-client-section .pe-section-heading {
          margin-left: auto;
          margin-right: auto;
        }

        .pe-client-section .pe-section-heading p {
          margin: 0 auto;
        }

        .pe-client-grid {
          display: grid;
          grid-template-columns: repeat(6, 1fr);
          border: 1px solid #e5ecef;
        }

        .pe-client-name {
          min-height: 95px;
          display: grid;
          place-items: center;
          padding: 15px;
          border-right: 1px solid #e5ecef;
          color: #34505e;
          font-size: 13px;
          font-weight: 850;
          letter-spacing: .5px;
        }

        .pe-client-name:last-child {
          border-right: 0;
        }

        .pe-client-note {
          color: #87969e;
          font-size: 11px;
          line-height: 1.7;
          margin-top: 20px;
        }

        .pe-approach {
          background: #f5f7f8;
        }

        .pe-approach-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 35px;
        }

        .pe-approach-item {
          border-top: 2px solid #b8dce8;
          padding-top: 24px;
        }

        .pe-approach-item strong {
          color: #1685aa;
          font-size: 12px;
          letter-spacing: 2px;
        }

        .pe-approach-item h3 {
          color: #173442;
          font-size: 20px;
          margin: 17px 0 12px;
        }

        .pe-approach-item p {
          color: #74848d;
          font-size: 13px;
          line-height: 1.9;
          margin: 0;
        }

        .pe-cta {
          background:
            radial-gradient(ellipse at 90% 50%, rgba(69, 148, 177, .2), transparent 40%),
            #0b202c;
          padding: 75px 0;
          color: #fff;
        }

        .pe-cta-inner {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 35px;
        }

        .pe-cta h2 {
          font-size: clamp(30px, 4vw, 45px);
          letter-spacing: -1.5px;
          line-height: 1.2;
          max-width: 650px;
          margin: 15px 0;
        }

        .pe-cta p {
          color: #aebfc8;
          font-size: 13px;
          line-height: 1.8;
          margin: 0;
        }

        .pe-cta-actions {
          display: flex;
          flex-direction: column;
          gap: 14px;
          min-width: 190px;
        }

        .pe-cta-contact {
          color: #b7ccd5;
          font-size: 11px;
          text-align: center;
          text-decoration: none;
        }

        @media(max-width: 950px) {
          .pe-hero {
            min-height: 620px;
          }

          .pe-stats-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .pe-stat:nth-child(3) {
            border-left: 1px solid #e7edef;
          }

          .pe-about-grid {
            gap: 40px;
          }

          .pe-industry-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .pe-client-grid {
            grid-template-columns: repeat(3, 1fr);
          }

          .pe-client-name:nth-child(3) {
            border-right: 0;
          }

          .pe-client-name:nth-child(-n+3) {
            border-bottom: 1px solid #e5ecef;
          }
        }

        @media(max-width: 650px) {
          .pe-container {
            width: min(100% - 36px, 1200px);
          }

          .pe-hero {
            min-height: 650px;
          }

          .pe-hero::after {
            width: 280px;
            height: 280px;
            right: -110px;
            top: 25%;
          }

          .pe-hero-content {
            padding: 90px 0;
          }

          .pe-hero h1 {
            font-size: clamp(42px, 12vw, 60px);
            letter-spacing: -2.5px;
          }

          .pe-hero-description {
            font-size: 14px;
          }

          .pe-hero-note {
            margin-top: 42px;
          }

          .pe-stats-grid {
            grid-template-columns: 1fr 1fr;
          }

          .pe-stat {
            padding: 20px 12px;
            gap: 10px;
          }

          .pe-stat-icon {
            width: 36px;
            height: 36px;
          }

          .pe-stat-value {
            font-size: 16px;
          }

          .pe-stat-label {
            font-size: 10px;
          }

          .pe-section {
            padding: 75px 0;
          }

          .pe-about-grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }

          .pe-about-visual {
            min-height: 330px;
          }

          .pe-heading-row {
            display: block;
          }

          .pe-services-grid {
            grid-template-columns: 1fr;
          }

          .pe-service-card {
            min-height: auto;
          }

          .pe-industry-grid {
            grid-template-columns: 1fr 1fr;
          }

          .pe-industry-item {
            min-height: 135px;
            padding: 19px;
          }

          .pe-client-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .pe-client-name {
            min-height: 75px;
            border-bottom: 1px solid #e5ecef;
          }

          .pe-client-name:nth-child(3) {
            border-right: 1px solid #e5ecef;
          }

          .pe-client-name:nth-child(even) {
            border-right: 0;
          }

          .pe-approach-grid {
            grid-template-columns: 1fr;
            gap: 30px;
          }

          .pe-cta {
            padding: 65px 0;
          }

          .pe-cta-inner {
            flex-direction: column;
            align-items: flex-start;
          }

          .pe-cta-actions {
            width: 100%;
          }

          .pe-btn-primary,
          .pe-btn-secondary {
            width: 100%;
          }
        }
      `}</style>

      <main className="pe-home">

        {/* HERO */}

        <section className="pe-hero">
          <div className="pe-container">
            <div className="pe-hero-content">

              <div className="pe-hero-label">
                <span></span>
                Industrial Fabrication & Engineering
              </div>

              <h1>
                Built on experience.
                <br />
                Driven by <em>precision.</em>
              </h1>

              <p className="pe-hero-description">
                Prathamesh Enterprises brings 18 years of industry
                experience to industrial fabrication requirements.
                We focus on dependable execution, quality and
                solutions shaped around your project needs.
              </p>

              <div className="pe-hero-actions">
                <Link to="/enquiry" className="pe-btn-primary">
                  DISCUSS YOUR PROJECT
                  <ArrowUpRight size={17} />
                </Link>

                <Link to="/services" className="pe-btn-secondary">
                  EXPLORE OUR SERVICES
                  <ArrowRight size={16} />
                </Link>
              </div>

              <div className="pe-hero-note">
                <span className="pe-hero-note-line"></span>
                <strong>18+ Years</strong>
                <span>of industry experience</span>
              </div>

            </div>
          </div>
        </section>

        {/* EXPERIENCE HIGHLIGHTS */}

        <section className="pe-stats">
          <div className="pe-container">
            <div className="pe-stats-grid">
              {highlights.map((item, index) => {
                const Icon = item.icon;

                return (
                  <div className="pe-stat" key={index}>
                    <div className="pe-stat-icon">
                      <Icon size={21} />
                    </div>

                    <div>
                      <div className="pe-stat-value">
                        {item.value}
                      </div>
                      <div className="pe-stat-label">
                        {item.label}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ABOUT */}

        <section className="pe-section">
          <div className="pe-container">
            <div className="pe-about-grid">

              <div className="pe-about-visual">
                <div className="pe-about-visual-content">
                  <strong>18+</strong>
                  <span>Years of industry experience</span>
                </div>
              </div>

              <div className="pe-about-copy">
                <span className="pe-eyebrow">
                  About Prathamesh Enterprises
                </span>

                <h2>
                  Experience that understands industrial requirements.
                </h2>

                <p>
                  With 18 years of experience in the fabrication
                  industry, Prathamesh Enterprises works with an
                  understanding of industrial project expectations.
                  Our focus is on delivering work that aligns with
                  project requirements, specifications and quality
                  expectations.
                </p>

                <div className="pe-check-list">
                  <div className="pe-check-item">
                    <CheckCircle2 size={18} />
                    18 years of industry experience
                  </div>

                  <div className="pe-check-item">
                    <CheckCircle2 size={18} />
                    Project-focused fabrication approach
                  </div>

                  <div className="pe-check-item">
                    <CheckCircle2 size={18} />
                    Experience across industrial sectors
                  </div>

                  <div className="pe-check-item">
                    <CheckCircle2 size={18} />
                    Focus on quality and dependable execution
                  </div>
                </div>

                <Link to="/about" className="pe-text-link">
                  DISCOVER OUR COMPANY
                  <ArrowUpRight size={17} />
                </Link>
              </div>

            </div>
          </div>
        </section>

        {/* SERVICES */}

        <section className="pe-section pe-services-section">
          <div className="pe-container">

            <div className="pe-heading-row">
              <div className="pe-section-heading">
                <span className="pe-eyebrow">
                  What We Do
                </span>

                <h2>
                  Fabrication solutions shaped around your needs.
                </h2>

                <p>
                  We work with clients to understand their project
                  requirements and provide suitable fabrication
                  solutions.
                </p>
              </div>

              <Link to="/services" className="pe-text-link">
                VIEW ALL SERVICES
                <ArrowUpRight size={17} />
              </Link>
            </div>

            <div className="pe-services-grid">
              {services.map((service) => {
                const Icon = service.icon;

                return (
                  <article
                    className="pe-service-card"
                    key={service.number}
                  >
                    <span className="pe-service-number">
                      / {service.number}
                    </span>

                    <div className="pe-service-icon">
                      <Icon size={25} />
                    </div>

                    <h3>{service.title}</h3>

                    <p>{service.description}</p>
                  </article>
                );
              })}
            </div>

          </div>
        </section>

        {/* INDUSTRIES */}

        <section className="pe-section pe-industries">
          <div className="pe-container">

            <div className="pe-section-heading">
              <span className="pe-eyebrow">
                Industries
              </span>

              <h2>
                Supporting industries where quality matters.
              </h2>

              <p>
                Our experience includes working with businesses
                across industrial environments, including
                pharmaceutical and manufacturing sectors.
              </p>
            </div>

            <div className="pe-industry-grid">
              {industries.map((industry, index) => (
                <div className="pe-industry-item" key={industry}>
                  <Building2 size={24} />
                  <span>{industry}</span>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* COMPANY EXPERIENCE */}

        <section className="pe-section pe-client-section">
          <div className="pe-container">

            <div className="pe-section-heading">
              <span className="pe-eyebrow">
                Industry Experience
              </span>

              <h2>
                Experience across recognised companies.
              </h2>

              <p>
                The following company names reflect the business
                experience shared with us. They are presented as
                text references, not as endorsements or official
                partnerships.
              </p>
            </div>

            <div className="pe-client-grid">
              {clients.map((client) => (
                <div className="pe-client-name" key={client}>
                  {client}
                </div>
              ))}
            </div>

            <p className="pe-client-note">
              Company names are shown for experience reference only.
              No endorsement or affiliation is implied.
            </p>

          </div>
        </section>

        {/* APPROACH */}

        <section className="pe-section pe-approach">
          <div className="pe-container">

            <div className="pe-section-heading">
              <span className="pe-eyebrow">
                Our Approach
              </span>

              <h2>
                A practical approach to every project.
              </h2>

              <p>
                Clear communication and an understanding of
                requirements help establish the foundation
                for successful project execution.
              </p>
            </div>

            <div className="pe-approach-grid">

              <div className="pe-approach-item">
                <strong>01 / UNDERSTAND</strong>
                <h3>Understand the requirement</h3>
                <p>
                  We begin by understanding the project scope,
                  specifications and expectations shared by
                  the client.
                </p>
              </div>

              <div className="pe-approach-item">
                <strong>02 / PLAN</strong>
                <h3>Plan the approach</h3>
                <p>
                  We discuss the suitable fabrication approach
                  and align on the requirements before moving
                  forward.
                </p>
              </div>

              <div className="pe-approach-item">
                <strong>03 / EXECUTE</strong>
                <h3>Focus on execution</h3>
                <p>
                  We focus on carrying out the agreed work with
                  attention to quality, coordination and
                  project expectations.
                </p>
              </div>

            </div>

          </div>
        </section>

        {/* CTA */}

        <section className="pe-cta">
          <div className="pe-container">
            <div className="pe-cta-inner">

              <div>
                <span className="pe-eyebrow">
                  Start a Conversation
                </span>

                <h2>
                  Have a fabrication requirement?
                  Let's discuss your project.
                </h2>

                <p>
                  Share your project details with Prathamesh
                  Enterprises. We'll connect with you to
                  understand your requirements.
                </p>
              </div>

              <div className="pe-cta-actions">
                <Link to="/enquiry" className="pe-btn-primary">
                  SEND AN ENQUIRY
                  <MoveUpRight size={17} />
                </Link>

                <a
                  href="tel:+919850587474"
                  className="pe-cta-contact"
                >
                  <Phone
                    size={13}
                    style={{
                      display: "inline",
                      verticalAlign: "middle",
                      marginRight: 6
                    }}
                  />
                  +91 98505 87474
                </a>
              </div>

            </div>
          </div>
        </section>

      </main>
    </>
  );
}

export default Home;
