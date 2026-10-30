import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, ArrowUpRight, Phone, MapPin } from "lucide-react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Industries", path: "/industries" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    const onKey = (e) => e.key === "Escape" && setMenuOpen(false);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("keydown", onKey);
    };
  }, []);

  const close = () => setMenuOpen(false);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Archivo:wdth,wght@75..125,500..800&family=IBM+Plex+Sans:wght@400;500;600&display=swap');

        .pe-navbar {
          --steel-900: #0e2233;
          --steel-600: #35566d;
          --steel-100: #e6ebef;
          --weld: #e8590c;
          --weld-dark: #c2410c;
          --head: 'Archivo', 'Arial Narrow', Arial, sans-serif;
          --body: 'IBM Plex Sans', Arial, Helvetica, sans-serif;
          width: 100%;
          position: sticky;
          top: 0;
          z-index: 1000;
          font-family: var(--body);
        }
        .pe-navbar *, .pe-navbar *::before, .pe-navbar *::after { box-sizing: border-box; }
        .pe-navbar a:focus-visible, .pe-navbar button:focus-visible {
          outline: 3px solid var(--weld);
          outline-offset: 3px;
        }

        /* utility strip */
        .pe-topbar {
          background: var(--steel-900);
          color: #c6d4dd;
          font-size: 13px;
        }
        .pe-topbar-inner {
          max-width: 1280px;
          margin: auto;
          padding: 8px 30px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 20px;
        }
        .pe-topbar span, .pe-topbar a {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          color: inherit;
          text-decoration: none;
        }
        .pe-topbar svg { color: var(--weld); }
        .pe-topbar a:hover { color: #fff; }

        /* main bar */
        .pe-main-bar {
          background: rgba(255,255,255,.97);
          border-bottom: 1px solid var(--steel-100);
          backdrop-filter: blur(14px);
          transition: box-shadow .25s ease;
        }
        .pe-navbar.scrolled .pe-main-bar { box-shadow: 0 8px 28px rgba(14,34,51,.1); }

        .pe-nav-inner {
          max-width: 1280px;
          min-height: 78px;
          margin: auto;
          padding: 0 30px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 30px;
        }

        .pe-brand {
          text-decoration: none;
          color: var(--steel-900);
          display: flex;
          align-items: center;
          gap: 12px;
        }
        .pe-brand-mark {
          width: 40px;
          height: 40px;
          border-radius: 4px;
          background: var(--steel-900);
          color: #fff;
          display: grid;
          place-items: center;
          font-family: var(--head);
          font-weight: 800;
          font-size: 22px;
          border-bottom: 4px solid var(--weld);
        }
        .pe-brand-text { display: flex; flex-direction: column; line-height: 1; }
        .pe-brand-text strong {
          font-family: var(--head);
          font-size: 21px;
          font-weight: 800;
          letter-spacing: -.3px;
        }
        .pe-brand-text span {
          margin-top: 5px;
          font-size: 11px;
          letter-spacing: 2.4px;
          color: var(--steel-600);
          font-weight: 600;
        }

        .pe-nav-links {
          display: flex;
          align-items: center;
          gap: 6px;
        }
        .pe-nav-links a.pe-link {
          position: relative;
          padding: 10px 14px;
          color: #3d4f5a;
          font-size: 15px;
          font-weight: 500;
          text-decoration: none;
          transition: color .2s ease;
        }
        .pe-nav-links a.pe-link::after {
          content: "";
          position: absolute;
          left: 14px;
          right: 14px;
          bottom: 4px;
          height: 2px;
          background: var(--weld);
          transform: scaleX(0);
          transform-origin: left;
          transition: transform .25s ease;
        }
        .pe-nav-links a.pe-link:hover { color: var(--steel-900); }
        .pe-nav-links a.pe-link:hover::after,
        .pe-nav-links a.pe-link.active::after { transform: scaleX(1); }
        .pe-nav-links a.pe-link.active { color: var(--steel-900); font-weight: 600; }

        .pe-nav-cta {
          margin-left: 14px;
          display: inline-flex;
          align-items: center;
          gap: 9px;
          padding: 13px 20px;
          border-radius: 4px;
          background: var(--weld);
          color: #fff;
          text-decoration: none;
          font-size: 15px;
          font-weight: 600;
          transition: background .2s ease, transform .2s ease;
        }
        .pe-nav-cta:hover { background: var(--weld-dark); transform: translateY(-2px); }

        .pe-menu-button {
          display: none;
          background: none;
          border: 0;
          padding: 6px;
          color: var(--steel-900);
          cursor: pointer;
        }

        @media (max-width: 900px) {
          .pe-topbar-inner { padding: 8px 20px; }
          .pe-topbar .pe-topbar-loc { display: none; }
          .pe-nav-inner { min-height: 68px; padding: 0 20px; }
          .pe-menu-button { display: block; }
          .pe-nav-links {
            display: none;
            position: absolute;
            top: 100%;
            left: 0;
            right: 0;
            padding: 18px 20px 24px;
            background: #fff;
            border-bottom: 1px solid var(--steel-100);
            box-shadow: 0 20px 30px rgba(14,34,51,.12);
            flex-direction: column;
            align-items: stretch;
            gap: 2px;
          }
          .pe-nav-links.open { display: flex; animation: pe-drop .25s ease both; }
          .pe-nav-links a.pe-link { padding: 14px 4px; border-bottom: 1px solid var(--steel-100); }
          .pe-nav-links a.pe-link::after { display: none; }
          .pe-nav-links a.pe-link.active { color: var(--weld-dark); }
          .pe-nav-cta { margin: 16px 0 0; justify-content: center; }
        }
        @keyframes pe-drop { from { opacity: 0; transform: translateY(-8px); } to { opacity: 1; transform: none; } }
        @media (prefers-reduced-motion: reduce) {
          .pe-navbar * { animation: none !important; transition: none !important; }
        }
      `}</style>

      <header className={`pe-navbar ${scrolled ? "scrolled" : ""}`}>
        <div className="pe-topbar">
          <div className="pe-topbar-inner">
            <span className="pe-topbar-loc">
              <MapPin size={14} /> Kurkumbh, Daund, Pune 413802
            </span>
            <a href="tel:+919850587474">
              <Phone size={14} /> +91 98505 87474
            </a>
          </div>
        </div>

        <div className="pe-main-bar">
          <nav className="pe-nav-inner" aria-label="Main navigation">
            <Link to="/" className="pe-brand" onClick={close}>
              <span className="pe-brand-mark" aria-hidden="true">P</span>
              <span className="pe-brand-text">
                <strong>PRATHAMESH</strong>
                <span>ENTERPRISES</span>
              </span>
            </Link>

            <div id="pe-nav-links" className={`pe-nav-links ${menuOpen ? "open" : ""}`}>
              {links.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  end={link.path === "/"}
                  className="pe-link"
                  onClick={close}
                >
                  {link.name}
                </NavLink>
              ))}

              <Link to="/enquiry" className="pe-nav-cta" onClick={close}>
                Get a Quote <ArrowUpRight size={17} />
              </Link>
            </div>

            <button
              className="pe-menu-button"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle navigation"
              aria-expanded={menuOpen}
              aria-controls="pe-nav-links"
            >
              {menuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </nav>
        </div>
      </header>
    </>
  );
}

export default Navbar;