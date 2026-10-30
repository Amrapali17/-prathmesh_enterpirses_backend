
import { Link } from "react-router-dom";
import {
  Phone,
  Mail,
  MapPin,
  MoveUpRight,
} from "lucide-react";

function Footer() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Archivo:wdth,wght@75..125,500..800&family=IBM+Plex+Sans:wght@400;500;600;700&display=swap');

        .pe-footer {
          --weld: #ed762b;
          --navy: #101e29;
          --navy-light: #192c39;
          --text: #f5f6f7;
          --muted: #aab9c3;
          background: var(--navy);
          color: var(--text);
          font-family: 'IBM Plex Sans', Arial, sans-serif;
          border-top: 4px solid var(--weld);
          position: relative;
          overflow: hidden;
        }

        .pe-footer *,
        .pe-footer *::before,
        .pe-footer *::after {
          box-sizing: border-box;
        }

        .pe-footer a:focus-visible {
          outline: 2px solid var(--weld);
          outline-offset: 4px;
        }

        .pe-footer-inner {
          max-width: 1380px;
          margin: auto;
          padding: 0 6%;
          position: relative;
          z-index: 1;
        }

        /* MAIN GRID */

        .pe-footer-grid {
          display: grid;
          grid-template-columns: 1.45fr .8fr .9fr 1.25fr;
          gap: 45px;
          padding: 58px 0 52px;
        }

        /* BRAND */

        .pe-footer-brand {
          display: flex;
          align-items: center;
          gap: 13px;
        }

        .pe-footer-mark {
          width: 46px;
          height: 46px;
          background: #f5f6f7;
          color: var(--navy);
          display: grid;
          place-items: center;
          font-family: 'Archivo', Arial, sans-serif;
          font-size: 25px;
          font-weight: 800;
          border-bottom: 4px solid var(--weld);
        }

        .pe-footer-name {
          font-family: 'Archivo', Arial, sans-serif;
          font-size: 23px;
          font-weight: 800;
          line-height: 1;
          letter-spacing: -.4px;
        }

        .pe-footer-tag {
          display: block;
          margin-top: 6px;
          font-size: 10px;
          letter-spacing: 3px;
          color: var(--weld);
          font-weight: 700;
        }

        .pe-footer-about {
          color: var(--muted);
          font-size: 13px;
          line-height: 1.9;
          max-width: 310px;
          margin: 23px 0 0;
        }

        .pe-footer-brand-caption {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          color: #d5dfe4;
          font-size: 10px;
          font-weight: 600;
          letter-spacing: 1.5px;
          margin-top: 22px;
        }

        .pe-footer-brand-caption span {
          width: 20px;
          height: 2px;
          background: var(--weld);
        }

        /* LINKS */

        .pe-footer h4 {
          font-family: 'Archivo', Arial, sans-serif;
          font-size: 16px;
          font-weight: 750;
          margin: 5px 0 25px;
          color: #fff;
          position: relative;
          padding-bottom: 13px;
        }

        .pe-footer h4::after {
          content: "";
          position: absolute;
          left: 0;
          bottom: 0;
          width: 30px;
          height: 2px;
          background: var(--weld);
        }

        .pe-footer-links {
          display: flex;
          flex-direction: column;
          gap: 15px;
        }

        .pe-footer-links a {
          color: var(--muted);
          text-decoration: none;
          font-size: 13px;
          width: fit-content;
          transition: .2s ease;
        }

        .pe-footer-links a:hover {
          color: var(--weld);
          transform: translateX(4px);
        }

        /* CONTACT */

        .pe-footer-contact {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .pe-footer-contact a {
          display: flex;
          align-items: flex-start;
          gap: 13px;
          color: var(--muted);
          text-decoration: none;
          font-size: 13px;
          line-height: 1.7;
          overflow-wrap: anywhere;
          transition: color .2s ease;
        }

        .pe-footer-contact a:hover {
          color: #fff;
        }

        .pe-footer-contact-icon {
          width: 34px;
          height: 34px;
          flex-shrink: 0;
          display: grid;
          place-items: center;
          background: rgba(237,118,43,.1);
          border: 1px solid rgba(237,118,43,.22);
          color: var(--weld);
        }

        .pe-footer-contact-icon svg {
          width: 16px;
          height: 16px;
        }

        .pe-footer-contact small {
          display: block;
          margin-top: 3px;
          color: #8197a5;
          font-size: 11px;
        }

        .pe-footer-contact small svg {
          display: inline;
          vertical-align: middle;
        }

        /* BOTTOM */

        .pe-footer-bottom {
          min-height: 68px;
          border-top: 1px solid rgba(255,255,255,.12);
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 15px;
          color: #8fa3af;
          font-size: 11px;
          letter-spacing: .2px;
        }

        .pe-footer-bottom strong {
          color: #d5dfe4;
          font-weight: 600;
        }

        .pe-footer-bottom-right {
          display: flex;
          align-items: center;
          gap: 9px;
        }

        .pe-footer-bottom-dot {
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: var(--weld);
        }

        /* BACKGROUND DETAIL */

        .pe-footer-decoration {
          position: absolute;
          right: -100px;
          bottom: 10px;
          font-family: 'Archivo', Arial, sans-serif;
          font-size: 230px;
          font-weight: 800;
          color: rgba(255,255,255,.018);
          line-height: 1;
          pointer-events: none;
          user-select: none;
        }

        /* RESPONSIVE */

        @media (max-width: 1050px) {
          .pe-footer-grid {
            grid-template-columns: 1.2fr 1fr 1fr;
            gap: 38px;
          }

          .pe-footer-brand-column {
            grid-column: 1 / -1;
          }

          .pe-footer-about {
            max-width: 520px;
          }
        }

        @media (max-width: 700px) {
          .pe-footer-inner {
            padding: 0 22px;
          }

          .pe-footer-grid {
            grid-template-columns: 1fr 1fr;
            gap: 38px 25px;
            padding: 42px 0;
          }

          .pe-footer-brand-column {
            grid-column: 1 / -1;
          }

          .pe-footer-contact-column {
            grid-column: 1 / -1;
          }

          .pe-footer-bottom {
            padding: 20px 0;
            flex-direction: column;
            align-items: flex-start;
            justify-content: center;
          }

          .pe-footer-decoration {
            font-size: 150px;
          }
        }

        @media (max-width: 390px) {
          .pe-footer-grid {
            grid-template-columns: 1fr;
          }

          .pe-footer-brand-column,
          .pe-footer-contact-column {
            grid-column: auto;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .pe-footer * {
            transition: none !important;
          }
        }
      `}</style>

      <footer className="pe-footer">
        <div className="pe-footer-decoration" aria-hidden="true">
          PE
        </div>

        <div className="pe-footer-inner">

          {/* FOOTER CONTENT */}
          <div className="pe-footer-grid">

            {/* BRAND */}
            <div className="pe-footer-brand-column">
              <div className="pe-footer-brand">
                <span className="pe-footer-mark" aria-hidden="true">
                  P
                </span>

                <div>
                  <div className="pe-footer-name">PRATHAMESH</div>
                  <span className="pe-footer-tag">ENTERPRISES</span>
                </div>
              </div>

              <p className="pe-footer-about">
                Industrial fabrication solutions built around quality,
                precision and dependable execution. Bringing 18 years of
                industry experience to every project.
              </p>

              <div className="pe-footer-brand-caption">
                <span />
                INDUSTRIAL FABRICATION
              </div>
            </div>

            {/* QUICK LINKS */}
            <div>
              <h4>Quick Links</h4>

              <div className="pe-footer-links">
                <Link to="/">Home</Link>
                <Link to="/about">About Us</Link>
                <Link to="/services">Our Services</Link>
                <Link to="/industries">Industries</Link>
                <Link to="/projects">Projects</Link>
              </div>
            </div>

            {/* EXPLORE */}
            <div>
              <h4>Explore</h4>

              <div className="pe-footer-links">
                <Link to="/enquiry">Request a Quote</Link>
                <Link to="/contact">Contact Us</Link>
                <Link to="/about">Our Experience</Link>
                <Link to="/services">Fabrication Solutions</Link>
              </div>
            </div>

            {/* CONTACT */}
            <div className="pe-footer-contact-column">
              <h4>Contact Information</h4>

              <div className="pe-footer-contact">

                <a href="tel:+919850587474">
                  <span className="pe-footer-contact-icon">
                    <Phone />
                  </span>
                  <span>+91 98505 87474</span>
                </a>

                <a href="mailto:Prathmeshshelar356@gmail.com">
                  <span className="pe-footer-contact-icon">
                    <Mail />
                  </span>
                  <span>Prathmeshshelar356@gmail.com</span>
                </a>

                <a
                  href="https://www.google.com/maps/search/?api=1&query=Kurkumbh+Daund+Pune+413802"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="pe-footer-contact-icon">
                    <MapPin />
                  </span>

                  <span>
                    Kurkumbh, Daund,
                    <br />
                    Pune 413802
                    <small>
                      View on Google Maps <MoveUpRight size={11} />
                    </small>
                  </span>
                </a>

              </div>
            </div>

          </div>

          {/* COPYRIGHT */}
          <div className="pe-footer-bottom">
            <span>
              © {new Date().getFullYear()}{" "}
              <strong>Prathamesh Enterprises.</strong> All rights reserved.
            </span>

            <span className="pe-footer-bottom-right">
              <span className="pe-footer-bottom-dot" />
              Industrial Fabrication & Engineering
            </span>
          </div>

        </div>
      </footer>
    </>
  );
}

export default Footer;
