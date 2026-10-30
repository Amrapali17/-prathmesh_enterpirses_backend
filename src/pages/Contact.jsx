
import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  ArrowRight,
  Phone,
  Mail,
  MessageCircle,
  MapPin,
  Clock3,
  Building2,
  Send,
} from "lucide-react";

function Contact() {
  const phone = "9850587474";
  const email = "Prathmeshshelar356@gmail.com";

  return (
    <>
      <style>{`
        .pe-contact-page {
          --orange: #ed762b;
          --orange-dark: #d75c19;
          --navy: #101e29;
          --navy-light: #192c39;

          background: #f1f3f4;
          color: #142e3b;
          font-family: Arial, Helvetica, sans-serif;
          overflow: hidden;
        }

        .pe-contact-page * {
          box-sizing: border-box;
        }

        .pe-contact-container {
          width: min(1160px, calc(100% - 48px));
          margin: auto;
        }

        /* HERO */

        .pe-contact-hero {
          position: relative;
          padding: 100px 0 95px;
          background:
            radial-gradient(circle at 85% 40%, rgba(237,118,43,.16), transparent 35%),
            linear-gradient(120deg, #101e29, #192c39);
          color: white;
        }

        .pe-contact-hero-content {
          position: relative;
          z-index: 1;
          max-width: 760px;
        }

        .pe-contact-eyebrow {
          display: flex;
          align-items: center;
          gap: 12px;
          color: var(--orange);
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 2.3px;
          text-transform: uppercase;
        }

        .pe-contact-eyebrow::before {
          content: "";
          width: 28px;
          height: 2px;
          background: var(--orange);
        }

        .pe-contact-hero h1 {
          font-size: clamp(42px, 6vw, 68px);
          line-height: 1.08;
          letter-spacing: -2.8px;
          margin: 24px 0;
        }

        .pe-contact-hero h1 span {
          color: var(--orange);
        }

        .pe-contact-hero p {
          color: #b8c5cd;
          font-size: 14px;
          line-height: 1.9;
          max-width: 610px;
          margin: 0;
        }

        .pe-contact-breadcrumb {
          display: flex;
          gap: 10px;
          margin-top: 30px;
          color: #a9bdc6;
          font-size: 11px;
        }

        .pe-contact-breadcrumb a {
          color: var(--orange);
          text-decoration: none;
        }

        /* CONTACT OPTIONS */

        .pe-contact-main {
          padding: 85px 0;
        }

        .pe-contact-intro {
          max-width: 720px;
          margin-bottom: 45px;
        }

        .pe-contact-label {
          color: var(--orange-dark);
          font-size: 10px;
          font-weight: 800;
          letter-spacing: 2px;
          text-transform: uppercase;
        }

        .pe-contact-intro h2 {
          font-size: clamp(30px, 4vw, 44px);
          line-height: 1.18;
          letter-spacing: -1.5px;
          margin: 16px 0;
          color: #153342;
        }

        .pe-contact-intro p {
          color: #71818a;
          font-size: 13px;
          line-height: 1.9;
          margin: 0;
        }

        .pe-contact-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 20px;
        }

        .pe-contact-card {
          padding: 29px;
          background: #fff;
          border: 1px solid #e0e5e8;
          border-top: 3px solid transparent;
          transition: .25s ease;
        }

        .pe-contact-card:hover {
          transform: translateY(-4px);
          border-top-color: var(--orange);
          border-color: #e6b18e;
          box-shadow: 0 15px 35px rgba(20,55,70,.08);
        }

        .pe-contact-card-icon {
          width: 47px;
          height: 47px;
          display: grid;
          place-items: center;
          background: #fff0e5;
          color: var(--orange-dark);
          margin-bottom: 22px;
        }

        .pe-contact-card h3 {
          font-size: 19px;
          color: #173746;
          margin: 0 0 10px;
        }

        .pe-contact-card p {
          color: #7a8990;
          font-size: 12px;
          line-height: 1.8;
          margin: 0 0 17px;
        }

        .pe-contact-card a {
          display: inline-flex;
          align-items: center;
          gap: 9px;
          color: var(--orange-dark);
          font-size: 12px;
          font-weight: 800;
          text-decoration: none;
          overflow-wrap: anywhere;
        }

        .pe-contact-card a:hover {
          color: #142e3b;
        }

        /* BUSINESS INFORMATION */

        .pe-contact-info {
          padding: 85px 0;
          background: #e5eaed;
          border-top: 1px solid #dce2e5;
        }

        .pe-contact-info-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: center;
        }

        .pe-contact-info h2 {
          color: #153342;
          font-size: clamp(30px, 4vw, 44px);
          line-height: 1.2;
          letter-spacing: -1.5px;
          margin: 16px 0;
        }

        .pe-contact-info p {
          color: #71818a;
          font-size: 13px;
          line-height: 1.9;
        }

        .pe-contact-detail {
          display: flex;
          align-items: flex-start;
          gap: 15px;
          padding: 18px 0;
          border-bottom: 1px solid #d1dade;
        }

        .pe-contact-detail-icon {
          color: var(--orange-dark);
          margin-top: 2px;
        }

        .pe-contact-detail span {
          display: block;
          color: #83929a;
          font-size: 10px;
          letter-spacing: 1px;
          text-transform: uppercase;
          margin-bottom: 7px;
        }

        .pe-contact-detail strong,
        .pe-contact-detail a {
          color: #173746;
          font-size: 13px;
          line-height: 1.7;
          text-decoration: none;
          overflow-wrap: anywhere;
        }

        .pe-contact-detail a:hover {
          color: var(--orange-dark);
        }

        /* LOCATION PANEL */

        .pe-contact-map {
          min-height: 320px;
          background:
            radial-gradient(circle at 50% 50%, rgba(237,118,43,.18), transparent 40%),
            linear-gradient(135deg, #101e29, #1d3543);
          border: 1px solid rgba(255,255,255,.08);
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          text-align: center;
          padding: 30px;
          color: white;
        }

        .pe-contact-map svg {
          color: var(--orange);
          margin-bottom: 18px;
        }

        .pe-contact-map h3 {
          font-size: 21px;
          margin: 0 0 12px;
        }

        .pe-contact-map p {
          max-width: 290px;
          color: #afc1ca;
          font-size: 12px;
          line-height: 1.8;
        }

        .pe-contact-map-note {
          font-size: 10px;
          color: var(--orange);
          margin-top: 10px;
        }

        /* FINAL CTA - ORANGE GRADIENT */

        .pe-contact-cta {
          position: relative;
          overflow: hidden;
          padding: 80px 0;
          background:
            radial-gradient(
              ellipse at 90% 50%,
              rgba(237, 118, 43, 0.38) 0%,
              rgba(237, 118, 43, 0.16) 28%,
              transparent 60%
            ),
            linear-gradient(
              115deg,
              #0b202c 0%,
              #172d3a 55%,
              #3b2a25 100%
            );
          color: white;
        }

        .pe-contact-cta::before {
          content: "";
          position: absolute;
          width: 320px;
          height: 320px;
          right: -100px;
          top: -170px;
          border-radius: 50%;
          background: rgba(237, 118, 43, 0.22);
          filter: blur(75px);
          pointer-events: none;
        }

        .pe-contact-cta-inner {
          position: relative;
          z-index: 1;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 35px;
        }

        .pe-contact-cta h2 {
          font-size: clamp(30px, 4vw, 43px);
          line-height: 1.2;
          letter-spacing: -1.5px;
          margin: 15px 0;
          max-width: 660px;
        }

        .pe-contact-cta p {
          color: #b2c3cb;
          font-size: 13px;
          line-height: 1.8;
        }

        .pe-contact-button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          padding: 17px 22px;
          background: var(--orange);
          color: #fff;
          font-size: 11px;
          font-weight: 800;
          text-decoration: none;
          white-space: nowrap;
          transition: .25s;
        }

        .pe-contact-button:hover {
          background: var(--orange-dark);
          transform: translateY(-3px);
        }

        /* RESPONSIVE */

        @media(max-width: 750px) {
          .pe-contact-container {
            width: calc(100% - 36px);
          }

          .pe-contact-hero {
            padding: 75px 0;
          }

          .pe-contact-main,
          .pe-contact-info {
            padding: 65px 0;
          }

          .pe-contact-info-grid {
            grid-template-columns: 1fr;
            gap: 35px;
          }

          .pe-contact-cta-inner {
            flex-direction: column;
            align-items: flex-start;
          }

          .pe-contact-button {
            width: 100%;
          }
        }

        @media(max-width: 520px) {
          .pe-contact-grid {
            grid-template-columns: 1fr;
          }

          .pe-contact-card {
            padding: 24px;
          }

          .pe-contact-hero h1 {
            letter-spacing: -1.8px;
          }
        }

        @media(prefers-reduced-motion: reduce) {
          .pe-contact-page *,
          .pe-contact-page *::before,
          .pe-contact-page *::after {
            transition: none !important;
          }
        }
      `}</style>

      <main className="pe-contact-page">

        {/* HERO */}

        <section className="pe-contact-hero">
          <div className="pe-contact-container">
            <div className="pe-contact-hero-content">

              <span className="pe-contact-eyebrow">
                Contact Prathamesh Enterprises
              </span>

              <h1>
                Let's build
                <br />
                <span>something together.</span>
              </h1>

              <p>
                Connect with our team to discuss industrial
                fabrication requirements, project enquiries
                and business opportunities.
              </p>

              <div className="pe-contact-breadcrumb">
                <Link to="/">Home</Link>
                <span>/</span>
                <span>Contact</span>
              </div>

            </div>
          </div>
        </section>

        {/* CONTACT OPTIONS */}

        <section className="pe-contact-main">
          <div className="pe-contact-container">

            <div className="pe-contact-intro">
              <span className="pe-contact-label">
                Get In Touch
              </span>

              <h2>
                Connect with the right people.
              </h2>

              <p>
                Whether you are planning a new project, looking
                for a fabrication vendor or need more information,
                we welcome your enquiry.
              </p>
            </div>

            <div className="pe-contact-grid">

              <article className="pe-contact-card">
                <div className="pe-contact-card-icon">
                  <Phone size={21} />
                </div>

                <h3>Call Our Team</h3>

                <p>
                  Speak directly with us about your project
                  or business requirement.
                </p>

                <a href="tel:+919850587474">
                  +91 98505 87474
                  <ArrowUpRight size={15} />
                </a>
              </article>

              <article className="pe-contact-card">
                <div className="pe-contact-card-icon">
                  <Mail size={21} />
                </div>

                <h3>Send an Email</h3>

                <p>
                  Share your enquiry, technical requirements
                  or project information by email.
                </p>

                <a href={`mailto:${email}`}>
                  {email}
                  <ArrowUpRight size={15} />
                </a>
              </article>

              <article className="pe-contact-card">
                <div className="pe-contact-card-icon">
                  <MessageCircle size={21} />
                </div>

                <h3>WhatsApp Us</h3>

                <p>
                  Start a conversation and discuss the
                  next steps for your requirement.
                </p>

                <a
                  href={`https://wa.me/91${phone}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Start WhatsApp Chat
                  <ArrowUpRight size={15} />
                </a>
              </article>

              <article className="pe-contact-card">
                <div className="pe-contact-card-icon">
                  <Send size={21} />
                </div>

                <h3>Request a Quotation</h3>

                <p>
                  Share your project details and request
                  a quotation from our team.
                </p>

                <Link to="/enquiry">
                  Request a Quote
                  <ArrowUpRight size={15} />
                </Link>
              </article>

            </div>
          </div>
        </section>

        {/* BUSINESS INFORMATION */}

        <section className="pe-contact-info">
          <div className="pe-contact-container">
            <div className="pe-contact-info-grid">

              <div>
                <span className="pe-contact-label">
                  Business Information
                </span>

                <h2>
                  18 years of experience.
                  One point of contact.
                </h2>

                <p>
                  Prathamesh Enterprises welcomes enquiries
                  from businesses, manufacturers, project
                  teams and procurement professionals.
                </p>

                <div className="pe-contact-detail">
                  <Phone className="pe-contact-detail-icon" size={19} />
                  <div>
                    <span>Phone</span>
                    <a href="tel:+919850587474">
                      +91 98505 87474
                    </a>
                  </div>
                </div>

                <div className="pe-contact-detail">
                  <Mail className="pe-contact-detail-icon" size={19} />
                  <div>
                    <span>Email</span>
                    <a href={`mailto:${email}`}>
                      {email}
                    </a>
                  </div>
                </div>

                <div className="pe-contact-detail">
                  <Clock3 className="pe-contact-detail-icon" size={19} />
                  <div>
                    <span>Business Experience</span>
                    <strong>18 Years</strong>
                  </div>
                </div>

                <div className="pe-contact-detail">
                  <Building2 className="pe-contact-detail-icon" size={19} />
                  <div>
                    <span>Business Name</span>
                    <strong>Prathamesh Enterprises</strong>
                  </div>
                </div>
              </div>

              <div className="pe-contact-map">
                <MapPin size={39} />

                <h3>Visit Our Business</h3>

                <p>
                  Our business address and workshop
                  location will be displayed here once
                  the official address is confirmed.
                </p>

                <span className="pe-contact-map-note">
                  Official location details to be added
                </span>
              </div>

            </div>
          </div>
        </section>

        {/* FINAL CTA */}

        <section className="pe-contact-cta">
          <div className="pe-contact-container">
            <div className="pe-contact-cta-inner">

              <div>
                <span className="pe-contact-eyebrow">
                  Start a Project
                </span>

                <h2>
                  Have a fabrication requirement?
                  Let's discuss it.
                </h2>

                <p>
                  Send your requirements and request a
                  quotation from Prathamesh Enterprises.
                </p>
              </div>

              <Link
                to="/enquiry"
                className="pe-contact-button"
              >
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

export default Contact;
