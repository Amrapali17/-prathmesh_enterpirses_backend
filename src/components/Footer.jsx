
import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  Phone,
  Mail,
  MapPin,
  Factory
} from "lucide-react";

function Footer() {
  return (
    <>
      <style>{`
        .pe-footer {
          background: #0b1c27;
          color: #fff;
          padding: 75px 30px 25px;
        }

        .pe-footer-inner {
          max-width: 1280px;
          margin: auto;
        }

        .pe-footer-grid {
          display: grid;
          grid-template-columns: 1.5fr 1fr 1fr 1.2fr;
          gap: 55px;
          padding-bottom: 55px;
        }

        .pe-footer-brand {
          font-size: 25px;
          font-weight: 850;
          letter-spacing: -1px;
        }

        .pe-footer-tag {
          display: block;
          color: #7da6b9;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 3px;
          margin-top: 7px;
        }

        .pe-footer-about {
          color: #a7b7c1;
          font-size: 13px;
          line-height: 1.9;
          max-width: 320px;
          margin-top: 22px;
        }

        .pe-footer h4 {
          font-size: 14px;
          margin: 5px 0 24px;
          color: white;
        }

        .pe-footer-links {
          display: flex;
          flex-direction: column;
          gap: 15px;
        }

        .pe-footer-links a {
          color: #a7b7c1;
          text-decoration: none;
          font-size: 13px;
          transition: .2s;
        }

        .pe-footer-links a:hover {
          color: #6bc4e5;
          transform: translateX(3px);
        }

        .pe-footer-contact {
          display: flex;
          flex-direction: column;
          gap: 18px;
        }

        .pe-footer-contact a,
        .pe-footer-contact div {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          color: #a7b7c1;
          text-decoration: none;
          font-size: 13px;
          line-height: 1.7;
          overflow-wrap: anywhere;
        }

        .pe-footer-contact svg {
          color: #6bc4e5;
          flex-shrink: 0;
          margin-top: 2px;
        }

        .pe-footer-bottom {
          border-top: 1px solid #263944;
          padding-top: 23px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 15px;
          color: #8296a2;
          font-size: 11px;
        }

        .pe-footer-bottom a {
          color: #9db2be;
          text-decoration: none;
        }

        @media(max-width: 900px) {
          .pe-footer-grid {
            grid-template-columns: 1fr 1fr;
            gap: 40px;
          }
        }

        @media(max-width: 550px) {
          .pe-footer {
            padding: 55px 22px 22px;
          }

          .pe-footer-grid {
            grid-template-columns: 1fr;
            gap: 35px;
          }

          .pe-footer-bottom {
            flex-direction: column;
            align-items: flex-start;
          }
        }
      `}</style>

      <footer className="pe-footer">
        <div className="pe-footer-inner">

          <div className="pe-footer-grid">

            <div>
              <div className="pe-footer-brand">
                PRATHAMESH
              </div>
              <span className="pe-footer-tag">
                ENTERPRISES
              </span>

              <p className="pe-footer-about">
                Industrial fabrication solutions built around
                quality, precision and dependable execution.
                Bringing 18 years of industry experience to
                every project.
              </p>
            </div>

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

            <div>
              <h4>Explore</h4>
              <div className="pe-footer-links">
                <Link to="/enquiry">Request a Quote</Link>
                <Link to="/contact">Contact Us</Link>
                <Link to="/about">Our Experience</Link>
                <Link to="/services">Fabrication Solutions</Link>
              </div>
            </div>

            <div>
              <h4>Contact Information</h4>
              <div className="pe-footer-contact">
                <a href="tel:+919850587474">
                  <Phone size={17} />
                  +91 98505 87474
                </a>

                <a href="mailto:Prathmeshshelar356@gmail.com">
                  <Mail size={17} />
                  Prathmeshshelar356@gmail.com
                </a>

                <div>
                  <MapPin size={17} />
                  Contact us for our business location
                </div>
              </div>
            </div>

          </div>

          <div className="pe-footer-bottom">
            <span>
              © {new Date().getFullYear()} Prathamesh Enterprises.
              All rights reserved.
            </span>

            <span>
              Industrial Fabrication & Engineering
            </span>
          </div>

        </div>
      </footer>
    </>
  );
}

export default Footer;
