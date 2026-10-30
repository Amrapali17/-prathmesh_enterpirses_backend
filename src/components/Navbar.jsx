
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, ArrowUpRight } from "lucide-react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Industries", path: "/industries" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <>
      <style>{`
        .pe-navbar {
          width: 100%;
          position: sticky;
          top: 0;
          z-index: 1000;
          background: rgba(255,255,255,0.96);
          border-bottom: 1px solid #e8edf0;
          backdrop-filter: blur(16px);
        }

        .pe-nav-inner {
          max-width: 1280px;
          min-height: 86px;
          margin: auto;
          padding: 0 30px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 30px;
        }

        .pe-brand {
          text-decoration: none;
          color: #101820;
          display: flex;
          flex-direction: column;
          line-height: 1;
        }

        .pe-brand strong {
          font-size: 23px;
          font-weight: 850;
          letter-spacing: -1px;
        }

        .pe-brand span {
          margin-top: 7px;
          font-size: 9px;
          letter-spacing: 3px;
          color: #52758a;
          font-weight: 700;
        }

        .pe-nav-links {
          display: flex;
          align-items: center;
          gap: 30px;
        }

        .pe-nav-links a {
          color: #44515a;
          font-size: 13px;
          font-weight: 600;
          text-decoration: none;
          transition: color .2s ease;
        }

        .pe-nav-links a:hover,
        .pe-nav-links a.active {
          color: #16749a;
        }

        .pe-nav-cta {
          display: flex;
          align-items: center;
          gap: 9px;
          padding: 14px 20px;
          border-radius: 4px;
          background: #102b3a;
          color: white !important;
          text-decoration: none;
          font-size: 13px;
          font-weight: 700;
          transition: .25s ease;
        }

        .pe-nav-cta:hover {
          background: #16749a;
          transform: translateY(-2px);
        }

        .pe-menu-button {
          display: none;
          background: none;
          border: 0;
          color: #102b3a;
          cursor: pointer;
        }

        @media(max-width: 850px) {
          .pe-nav-inner {
            min-height: 74px;
            padding: 0 20px;
          }

          .pe-menu-button {
            display: block;
          }

          .pe-nav-links {
            display: none;
            position: absolute;
            top: 74px;
            left: 0;
            right: 0;
            padding: 25px 22px;
            background: white;
            border-bottom: 1px solid #e8edf0;
            flex-direction: column;
            align-items: stretch;
            gap: 23px;
          }

          .pe-nav-links.open {
            display: flex;
          }

          .pe-nav-cta {
            justify-content: center;
          }
        }
      `}</style>

      <header className="pe-navbar">
        <nav className="pe-nav-inner">
          <Link
            to="/"
            className="pe-brand"
            onClick={() => setMenuOpen(false)}
          >
            <strong>PRATHAMESH</strong>
            <span>ENTERPRISES</span>
          </Link>

          <div className={`pe-nav-links ${menuOpen ? "open" : ""}`}>
            {links.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                onClick={() => setMenuOpen(false)}
              >
                {link.name}
              </NavLink>
            ))}

            <Link
              to="/enquiry"
              className="pe-nav-cta"
              onClick={() => setMenuOpen(false)}
            >
              Get a Quote <ArrowUpRight size={16} />
            </Link>
          </div>

          <button
            className="pe-menu-button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation"
          >
            {menuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </nav>
      </header>
    </>
  );
}

export default Navbar;
