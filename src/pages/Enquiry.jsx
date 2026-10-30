
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  ClipboardList,
  FileText,
  MessageCircle,
  Phone,
  Mail,
  Building2,
  Clock3,
  MapPin,
  Send
} from "lucide-react";

function Enquiry() {
  const [activeForm, setActiveForm] = useState("enquiry");
  const [submitted, setSubmitted] = useState(false);

  const [enquiry, setEnquiry] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    requirement: "",
    message: ""
  });

  const [quotation, setQuotation] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    projectType: "",
    material: "",
    quantity: "",
    dimensions: "",
    location: "",
    timeline: "",
    specifications: ""
  });

  const whatsappNumber = "919850587474";

  const updateEnquiry = (e) => {
    setEnquiry({
      ...enquiry,
      [e.target.name]: e.target.value
    });
  };

  const updateQuotation = (e) => {
    setQuotation({
      ...quotation,
      [e.target.name]: e.target.value
    });
  };

  const sendToWhatsApp = (message) => {
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank", "noopener,noreferrer");
    setSubmitted(true);
  };

  const submitEnquiry = (e) => {
    e.preventDefault();

    const message = `
PRATHAMESH ENTERPRISES
NEW BUSINESS ENQUIRY

Name: ${enquiry.name}
Company: ${enquiry.company}
Email: ${enquiry.email}
Phone: ${enquiry.phone}
Requirement: ${enquiry.requirement}

Message:
${enquiry.message}

Sent through the website enquiry form.
    `;

    sendToWhatsApp(message);
  };

  const submitQuotation = (e) => {
    e.preventDefault();

    const message = `
PRATHAMESH ENTERPRISES
REQUEST FOR QUOTATION

CONTACT DETAILS

Name: ${quotation.name}
Company: ${quotation.company}
Email: ${quotation.email}
Phone: ${quotation.phone}

PROJECT DETAILS

Project Type: ${quotation.projectType}
Material Preference: ${quotation.material}
Quantity: ${quotation.quantity}
Dimensions: ${quotation.dimensions}
Delivery Location: ${quotation.location}
Expected Timeline: ${quotation.timeline}

PROJECT SPECIFICATIONS:

${quotation.specifications}

Please review these requirements and share the next steps for a quotation.

Sent through the website quotation form.
    `;

    sendToWhatsApp(message);
  };

  return (
    <>
      <style>{`
        .pe-enquiry-page {
          --orange: #ed762b;
          --orange-dark: #d75c19;
          --orange-light: #fff0e5;
          --navy: #102b3a;

          background: #f4f7f8;
          color: #142e3b;
          font-family: Arial, Helvetica, sans-serif;
          overflow: hidden;
        }

        .pe-enquiry-page * {
          box-sizing: border-box;
        }

        .pe-enquiry-container {
          width: min(1160px, calc(100% - 48px));
          margin: auto;
        }

        /* HERO */

        .pe-enquiry-hero {
          position: relative;
          overflow: hidden;
          background:
            radial-gradient(
              ellipse at 85% 40%,
              rgba(237, 118, 43, .32),
              transparent 38%
            ),
            linear-gradient(
              115deg,
              #101e29 0%,
              #192c39 60%,
              #352820 100%
            );
          color: white;
          padding: 88px 0 85px;
        }

        .pe-enquiry-hero::after {
          content: "";
          position: absolute;
          width: 350px;
          height: 350px;
          right: -130px;
          top: -180px;
          border-radius: 50%;
          background: rgba(237, 118, 43, .22);
          filter: blur(80px);
          pointer-events: none;
        }

        .pe-enquiry-hero > .pe-enquiry-container {
          position: relative;
          z-index: 1;
        }

        .pe-enquiry-eyebrow {
          display: flex;
          align-items: center;
          gap: 12px;
          color: var(--orange);
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 2.3px;
          text-transform: uppercase;
        }

        .pe-enquiry-eyebrow::before {
          content: "";
          width: 28px;
          height: 2px;
          background: var(--orange);
        }

        .pe-enquiry-hero h1 {
          max-width: 780px;
          font-size: clamp(40px, 6vw, 66px);
          line-height: 1.08;
          letter-spacing: -2.8px;
          margin: 24px 0;
        }

        .pe-enquiry-hero h1 span {
          color: var(--orange);
        }

        .pe-enquiry-hero p {
          max-width: 630px;
          color: #b8cbd4;
          font-size: 14px;
          line-height: 1.9;
          margin: 0;
        }

        .pe-enquiry-breadcrumb {
          display: flex;
          gap: 10px;
          margin-top: 30px;
          font-size: 11px;
          color: #a9bdc6;
        }

        .pe-enquiry-breadcrumb a {
          color: var(--orange);
          text-decoration: none;
        }

        /* MAIN SECTION */

        .pe-enquiry-main {
          padding: 85px 0 100px;
        }

        .pe-enquiry-layout {
          display: grid;
          grid-template-columns: 310px minmax(0, 1fr);
          gap: 45px;
          align-items: start;
        }

        /* SIDEBAR */

        .pe-enquiry-sidebar {
          background: #102b3a;
          color: white;
          padding: 32px 27px;
          position: sticky;
          top: 30px;
        }

        .pe-enquiry-sidebar h2 {
          font-size: 23px;
          line-height: 1.3;
          letter-spacing: -.6px;
          margin: 0 0 13px;
        }

        .pe-enquiry-sidebar > p {
          color: #b3c4cc;
          font-size: 12px;
          line-height: 1.8;
          margin: 0 0 30px;
        }

        .pe-enquiry-contact-item {
          display: flex;
          gap: 14px;
          align-items: flex-start;
          padding: 19px 0;
          border-top: 1px solid rgba(255,255,255,.12);
        }

        .pe-enquiry-contact-icon {
          width: 37px;
          height: 37px;
          flex-shrink: 0;
          display: grid;
          place-items: center;
          background: rgba(237,118,43,.16);
          color: var(--orange);
        }

        .pe-enquiry-contact-item span {
          display: block;
          color: #93aab5;
          font-size: 10px;
          margin-bottom: 7px;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .pe-enquiry-contact-item a,
        .pe-enquiry-contact-item strong {
          color: white;
          font-size: 12px;
          line-height: 1.6;
          text-decoration: none;
          overflow-wrap: anywhere;
        }

        .pe-enquiry-contact-item a:hover {
          color: var(--orange);
        }

        .pe-enquiry-sidebar-note {
          background: rgba(255,255,255,.06);
          border-left: 2px solid var(--orange);
          padding: 17px;
          margin-top: 25px;
          color: #b6c8d0;
          font-size: 11px;
          line-height: 1.8;
        }

        /* FORM AREA */

        .pe-enquiry-form-area {
          min-width: 0;
        }

        .pe-enquiry-form-heading {
          margin-bottom: 27px;
        }

        .pe-enquiry-label {
          color: var(--orange-dark);
          font-size: 10px;
          font-weight: 800;
          letter-spacing: 2px;
          text-transform: uppercase;
        }

        .pe-enquiry-form-heading h2 {
          color: #142e3b;
          font-size: clamp(27px, 4vw, 38px);
          letter-spacing: -1.3px;
          margin: 12px 0;
        }

        .pe-enquiry-form-heading p {
          color: #73838c;
          font-size: 13px;
          line-height: 1.8;
          margin: 0;
        }

        /* TABS */

        .pe-enquiry-tabs {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 10px;
          padding: 7px;
          background: #e7eef1;
          margin-bottom: 27px;
        }

        .pe-enquiry-tab {
          border: 1px solid transparent;
          background: transparent;
          padding: 17px 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          color: #607680;
          font-size: 12px;
          font-weight: 800;
          cursor: pointer;
          transition: .2s;
        }

        .pe-enquiry-tab.active {
          background: white;
          border-color: #f1c3a3;
          color: #143444;
          box-shadow: 0 3px 12px rgba(20, 55, 70, .05);
        }

        .pe-enquiry-tab.active svg {
          color: var(--orange-dark);
        }

        .pe-enquiry-tab:hover {
          color: var(--orange-dark);
        }

        /* FORM */

        .pe-enquiry-form {
          background: white;
          border: 1px solid #e2e9ec;
          padding: 35px;
        }

        .pe-enquiry-form-title {
          display: flex;
          align-items: center;
          gap: 12px;
          padding-bottom: 22px;
          border-bottom: 1px solid #e8edef;
          margin-bottom: 25px;
        }

        .pe-enquiry-form-title-icon {
          width: 43px;
          height: 43px;
          display: grid;
          place-items: center;
          background: var(--orange-light);
          color: var(--orange-dark);
        }

        .pe-enquiry-form-title h3 {
          color: #183746;
          font-size: 17px;
          margin: 0 0 5px;
        }

        .pe-enquiry-form-title p {
          color: #87959c;
          font-size: 11px;
          margin: 0;
        }

        .pe-enquiry-section-title {
          color: var(--orange-dark);
          font-size: 10px;
          font-weight: 800;
          letter-spacing: 1.6px;
          text-transform: uppercase;
          margin: 28px 0 17px;
        }

        .pe-enquiry-fields {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 19px;
        }

        .pe-enquiry-field {
          min-width: 0;
          display: flex;
          flex-direction: column;
          gap: 9px;
        }

        .pe-enquiry-field.full {
          grid-column: 1 / -1;
        }

        .pe-enquiry-field label {
          color: #344f5c;
          font-size: 11px;
          font-weight: 700;
        }

        .pe-enquiry-field label span {
          color: #d35a5a;
        }

        .pe-enquiry-field input,
        .pe-enquiry-field select,
        .pe-enquiry-field textarea {
          width: 100%;
          border: 1px solid #dce5e9;
          background: #fbfcfd;
          border-radius: 0;
          padding: 14px 13px;
          color: #183746;
          font-family: inherit;
          font-size: 12px;
          outline: none;
          transition: .2s;
        }

        .pe-enquiry-field input,
        .pe-enquiry-field select {
          min-height: 47px;
        }

        .pe-enquiry-field textarea {
          min-height: 125px;
          resize: vertical;
          line-height: 1.7;
        }

        .pe-enquiry-field input:focus,
        .pe-enquiry-field select:focus,
        .pe-enquiry-field textarea:focus {
          border-color: var(--orange);
          background: white;
          box-shadow: 0 0 0 3px rgba(237,118,43,.11);
        }

        .pe-enquiry-field input::placeholder,
        .pe-enquiry-field textarea::placeholder {
          color: #a5b1b7;
        }

        .pe-enquiry-hint {
          color: #8b999f;
          font-size: 10px;
          line-height: 1.6;
        }

        /* SUBMIT BUTTON */

        .pe-enquiry-submit {
          width: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 12px;
          padding: 17px 20px;
          margin-top: 27px;
          border: 0;
          background: var(--orange);
          color: white;
          font-size: 12px;
          font-weight: 800;
          letter-spacing: .5px;
          cursor: pointer;
          transition: .25s;
        }

        .pe-enquiry-submit:hover {
          background: var(--orange-dark);
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(215,92,25,.2);
        }

        .pe-enquiry-privacy {
          color: #87959c;
          font-size: 10px;
          line-height: 1.8;
          text-align: center;
          margin: 15px 0 0;
        }

        /* SUCCESS MESSAGE */

        .pe-enquiry-success {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          background: #eaf6ee;
          color: #24683d;
          border: 1px solid #cce9d5;
          padding: 15px;
          font-size: 12px;
          line-height: 1.7;
          margin-bottom: 20px;
        }

        .pe-enquiry-success svg {
          flex-shrink: 0;
          margin-top: 1px;
        }

        /* BOTTOM CTA - ORANGE GRADIENT */

        .pe-enquiry-bottom {
          position: relative;
          overflow: hidden;
          padding: 75px 0;
          background:
            radial-gradient(
              ellipse at 90% 50%,
              rgba(237,118,43,.4) 0%,
              rgba(237,118,43,.17) 30%,
              transparent 62%
            ),
            linear-gradient(
              115deg,
              #0b202c 0%,
              #172d3a 55%,
              #3b2a25 100%
            );
        }

        .pe-enquiry-bottom::before {
          content: "";
          position: absolute;
          width: 320px;
          height: 320px;
          right: -100px;
          top: -170px;
          border-radius: 50%;
          background: rgba(237,118,43,.23);
          filter: blur(75px);
          pointer-events: none;
        }

        .pe-enquiry-bottom-inner {
          position: relative;
          z-index: 1;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 30px;
        }

        .pe-enquiry-bottom h2 {
          color: white;
          font-size: clamp(25px, 4vw, 36px);
          letter-spacing: -1px;
          margin: 0 0 10px;
        }

        .pe-enquiry-bottom p {
          color: #b8c7ce;
          font-size: 12px;
          line-height: 1.8;
          margin: 0;
        }

        .pe-enquiry-bottom-link {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: var(--orange);
          color: white;
          text-decoration: none;
          padding: 16px 21px;
          font-size: 11px;
          font-weight: 800;
          white-space: nowrap;
          transition: .2s;
        }

        .pe-enquiry-bottom-link:hover {
          background: var(--orange-dark);
          transform: translateY(-2px);
        }

        /* RESPONSIVE */

        @media(max-width: 900px) {
          .pe-enquiry-layout {
            grid-template-columns: 260px minmax(0, 1fr);
            gap: 25px;
          }

          .pe-enquiry-form {
            padding: 25px;
          }
        }

        @media(max-width: 700px) {
          .pe-enquiry-container {
            width: calc(100% - 36px);
          }

          .pe-enquiry-hero {
            padding: 75px 0;
          }

          .pe-enquiry-hero h1 {
            letter-spacing: -1.8px;
          }

          .pe-enquiry-main {
            padding: 55px 0 70px;
          }

          .pe-enquiry-layout {
            grid-template-columns: 1fr;
          }

          .pe-enquiry-sidebar {
            position: static;
          }

          .pe-enquiry-bottom-inner {
            flex-direction: column;
            align-items: flex-start;
          }

          .pe-enquiry-bottom-link {
            width: 100%;
            justify-content: center;
          }
        }

        @media(max-width: 480px) {
          .pe-enquiry-fields {
            grid-template-columns: 1fr;
          }

          .pe-enquiry-field.full {
            grid-column: auto;
          }

          .pe-enquiry-form {
            padding: 20px 16px;
          }

          .pe-enquiry-tab {
            flex-direction: column;
            font-size: 10px;
            padding: 13px 6px;
          }
        }

        @media(prefers-reduced-motion: reduce) {
          .pe-enquiry-page *,
          .pe-enquiry-page *::before,
          .pe-enquiry-page *::after {
            transition: none !important;
          }
        }
      `}</style>

      <main className="pe-enquiry-page">

        {/* HERO */}

        <section className="pe-enquiry-hero">
          <div className="pe-enquiry-container">

            <span className="pe-enquiry-eyebrow">
              Let's Work Together
            </span>

            <h1>
              Tell us what you
              <br />
              <span>need. We'll take it forward.</span>
            </h1>

            <p>
              Have a fabrication requirement or an upcoming
              industrial project? Share your details with
              Prathamesh Enterprises and our team can discuss
              the next steps with you.
            </p>

            <div className="pe-enquiry-breadcrumb">
              <Link to="/">Home</Link>
              <span>/</span>
              <span>Enquiry & Quotation</span>
            </div>

          </div>
        </section>

        {/* FORM SECTION */}

        <section className="pe-enquiry-main">
          <div className="pe-enquiry-container">
            <div className="pe-enquiry-layout">

              {/* CONTACT SIDEBAR */}

              <aside className="pe-enquiry-sidebar">
                <h2>
                  Let's start a conversation.
                </h2>

                <p>
                  Connect with Prathamesh Enterprises
                  for business enquiries, project discussions
                  and quotation requests.
                </p>

                <div className="pe-enquiry-contact-item">
                  <div className="pe-enquiry-contact-icon">
                    <Phone size={17} />
                  </div>

                  <div>
                    <span>Call Us</span>
                    <a href="tel:+919850587474">
                      +91 98505 87474
                    </a>
                  </div>
                </div>

                <div className="pe-enquiry-contact-item">
                  <div className="pe-enquiry-contact-icon">
                    <Mail size={17} />
                  </div>

                  <div>
                    <span>Email Us</span>
                    <a href="mailto:Prathmeshshelar356@gmail.com">
                      Prathmeshshelar356@gmail.com
                    </a>
                  </div>
                </div>

                <div className="pe-enquiry-contact-item">
                  <div className="pe-enquiry-contact-icon">
                    <Clock3 size={17} />
                  </div>

                  <div>
                    <span>Experience</span>
                    <strong>18 Years in Business</strong>
                  </div>
                </div>

                <div className="pe-enquiry-contact-item">
                  <div className="pe-enquiry-contact-icon">
                    <MapPin size={17} />
                  </div>

                  <div>
                    <span>Location</span>
                    <strong>Contact us for our business address</strong>
                  </div>
                </div>

                <div className="pe-enquiry-sidebar-note">
                  Have technical drawings or project
                  specifications? You can discuss how to
                  share them with us after submitting
                  your initial enquiry.
                </div>
              </aside>

              {/* FORMS */}

              <div className="pe-enquiry-form-area">

                <div className="pe-enquiry-form-heading">
                  <span className="pe-enquiry-label">
                    Get In Touch
                  </span>

                  <h2>
                    How can we help you?
                  </h2>

                  <p>
                    Select the form that best matches your
                    requirement. Fields marked with * are required.
                  </p>
                </div>

                {/* FORM SELECTOR */}

                <div className="pe-enquiry-tabs">
                  <button
                    type="button"
                    className={`pe-enquiry-tab ${activeForm === "enquiry" ? "active" : ""}`}
                    onClick={() => {
                      setActiveForm("enquiry");
                      setSubmitted(false);
                    }}
                  >
                    <MessageCircle size={17} />
                    GENERAL ENQUIRY
                  </button>

                  <button
                    type="button"
                    className={`pe-enquiry-tab ${activeForm === "quotation" ? "active" : ""}`}
                    onClick={() => {
                      setActiveForm("quotation");
                      setSubmitted(false);
                    }}
                  >
                    <FileText size={17} />
                    REQUEST A QUOTATION
                  </button>
                </div>

                {submitted && (
                  <div className="pe-enquiry-success">
                    <CheckCircle2 size={19} />
                    <span>
                      Your WhatsApp message has been prepared.
                      Please send it in the WhatsApp window to
                      complete your submission.
                    </span>
                  </div>
                )}

                {/* GENERAL ENQUIRY FORM */}

                {activeForm === "enquiry" && (
                  <form
                    className="pe-enquiry-form"
                    onSubmit={submitEnquiry}
                  >
                    <div className="pe-enquiry-form-title">
                      <div className="pe-enquiry-form-title-icon">
                        <MessageCircle size={20} />
                      </div>

                      <div>
                        <h3>General Business Enquiry</h3>
                        <p>
                          Tell us a little about your requirement.
                        </p>
                      </div>
                    </div>

                    <div className="pe-enquiry-section-title">
                      Contact Information
                    </div>

                    <div className="pe-enquiry-fields">

                      <div className="pe-enquiry-field">
                        <label>
                          Full Name <span>*</span>
                        </label>
                        <input
                          type="text"
                          name="name"
                          placeholder="Enter your full name"
                          value={enquiry.name}
                          onChange={updateEnquiry}
                          required
                        />
                      </div>

                      <div className="pe-enquiry-field">
                        <label>Company Name</label>
                        <input
                          type="text"
                          name="company"
                          placeholder="Your company name"
                          value={enquiry.company}
                          onChange={updateEnquiry}
                        />
                      </div>

                      <div className="pe-enquiry-field">
                        <label>
                          Business Email <span>*</span>
                        </label>
                        <input
                          type="email"
                          name="email"
                          placeholder="name@company.com"
                          value={enquiry.email}
                          onChange={updateEnquiry}
                          required
                        />
                      </div>

                      <div className="pe-enquiry-field">
                        <label>
                          Phone Number <span>*</span>
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          placeholder="Enter contact number"
                          value={enquiry.phone}
                          onChange={updateEnquiry}
                          required
                        />
                      </div>

                    </div>

                    <div className="pe-enquiry-section-title">
                      Your Requirement
                    </div>

                    <div className="pe-enquiry-fields">

                      <div className="pe-enquiry-field full">
                        <label>
                          Type of Requirement <span>*</span>
                        </label>

                        <select
                          name="requirement"
                          value={enquiry.requirement}
                          onChange={updateEnquiry}
                          required
                        >
                          <option value="">
                            Select your requirement
                          </option>
                          <option value="Industrial fabrication">
                            Industrial fabrication
                          </option>
                          <option value="Custom fabrication">
                            Custom fabrication
                          </option>
                          <option value="New project discussion">
                            New project discussion
                          </option>
                          <option value="Vendor or business enquiry">
                            Vendor or business enquiry
                          </option>
                          <option value="Other">
                            Other
                          </option>
                        </select>
                      </div>

                      <div className="pe-enquiry-field full">
                        <label>
                          Message <span>*</span>
                        </label>

                        <textarea
                          name="message"
                          placeholder="Describe your requirement, project or business enquiry..."
                          value={enquiry.message}
                          onChange={updateEnquiry}
                          required
                        />
                      </div>

                    </div>

                    <button
                      type="submit"
                      className="pe-enquiry-submit"
                    >
                      SEND ENQUIRY ON WHATSAPP
                      <Send size={17} />
                    </button>

                    <p className="pe-enquiry-privacy">
                      Your details will be included in a WhatsApp
                      message addressed to Prathamesh Enterprises.
                    </p>
                  </form>
                )}

                {/* QUOTATION FORM */}

                {activeForm === "quotation" && (
                  <form
                    className="pe-enquiry-form"
                    onSubmit={submitQuotation}
                  >
                    <div className="pe-enquiry-form-title">
                      <div className="pe-enquiry-form-title-icon">
                        <ClipboardList size={20} />
                      </div>

                      <div>
                        <h3>Request a Quotation</h3>
                        <p>
                          Share your project details for quotation review.
                        </p>
                      </div>
                    </div>

                    <div className="pe-enquiry-section-title">
                      Client Information
                    </div>

                    <div className="pe-enquiry-fields">

                      <div className="pe-enquiry-field">
                        <label>
                          Full Name <span>*</span>
                        </label>
                        <input
                          type="text"
                          name="name"
                          placeholder="Your full name"
                          value={quotation.name}
                          onChange={updateQuotation}
                          required
                        />
                      </div>

                      <div className="pe-enquiry-field">
                        <label>
                          Company Name <span>*</span>
                        </label>
                        <input
                          type="text"
                          name="company"
                          placeholder="Company / organisation"
                          value={quotation.company}
                          onChange={updateQuotation}
                          required
                        />
                      </div>

                      <div className="pe-enquiry-field">
                        <label>
                          Business Email <span>*</span>
                        </label>
                        <input
                          type="email"
                          name="email"
                          placeholder="name@company.com"
                          value={quotation.email}
                          onChange={updateQuotation}
                          required
                        />
                      </div>

                      <div className="pe-enquiry-field">
                        <label>
                          Phone Number <span>*</span>
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          placeholder="Contact number"
                          value={quotation.phone}
                          onChange={updateQuotation}
                          required
                        />
                      </div>

                    </div>

                    <div className="pe-enquiry-section-title">
                      Project Requirements
                    </div>

                    <div className="pe-enquiry-fields">

                      <div className="pe-enquiry-field">
                        <label>
                          Project Type <span>*</span>
                        </label>

                        <select
                          name="projectType"
                          value={quotation.projectType}
                          onChange={updateQuotation}
                          required
                        >
                          <option value="">
                            Select project type
                          </option>
                          <option value="Industrial fabrication">
                            Industrial fabrication
                          </option>
                          <option value="Custom fabrication">
                            Custom fabrication
                          </option>
                          <option value="Fabrication components">
                            Fabrication components
                          </option>
                          <option value="Other / To be discussed">
                            Other / To be discussed
                          </option>
                        </select>
                      </div>

                      <div className="pe-enquiry-field">
                        <label>Material Preference</label>

                        <select
                          name="material"
                          value={quotation.material}
                          onChange={updateQuotation}
                        >
                          <option value="">
                            Select if known
                          </option>
                          <option value="Stainless steel">
                            Stainless steel
                          </option>
                          <option value="Mild steel">
                            Mild steel
                          </option>
                          <option value="Other material">
                            Other material
                          </option>
                          <option value="Need technical guidance">
                            Need technical guidance
                          </option>
                        </select>

                        <span className="pe-enquiry-hint">
                          Material options must be confirmed against
                          the company's actual capabilities.
                        </span>
                      </div>

                      <div className="pe-enquiry-field">
                        <label>Estimated Quantity</label>
                        <input
                          type="text"
                          name="quantity"
                          placeholder="e.g. 10 units / 500 kg"
                          value={quotation.quantity}
                          onChange={updateQuotation}
                        />
                      </div>

                      <div className="pe-enquiry-field">
                        <label>Dimensions / Size</label>
                        <input
                          type="text"
                          name="dimensions"
                          placeholder="Enter dimensions if available"
                          value={quotation.dimensions}
                          onChange={updateQuotation}
                        />
                      </div>

                      <div className="pe-enquiry-field">
                        <label>Delivery Location</label>
                        <input
                          type="text"
                          name="location"
                          placeholder="City / State / Site location"
                          value={quotation.location}
                          onChange={updateQuotation}
                        />
                      </div>

                      <div className="pe-enquiry-field">
                        <label>Expected Timeline</label>

                        <select
                          name="timeline"
                          value={quotation.timeline}
                          onChange={updateQuotation}
                        >
                          <option value="">
                            Select expected timeline
                          </option>
                          <option value="Urgent">
                            Urgent
                          </option>
                          <option value="Within 2 weeks">
                            Within 2 weeks
                          </option>
                          <option value="Within 1 month">
                            Within 1 month
                          </option>
                          <option value="Within 2–3 months">
                            Within 2–3 months
                          </option>
                          <option value="Flexible">
                            Flexible
                          </option>
                        </select>
                      </div>

                      <div className="pe-enquiry-field full">
                        <label>
                          Technical Specifications / Project Details
                          <span> *</span>
                        </label>

                        <textarea
                          name="specifications"
                          placeholder="Describe the work, technical specifications, drawing references, material grade, operating conditions or any other important details..."
                          value={quotation.specifications}
                          onChange={updateQuotation}
                          required
                        />

                        <span className="pe-enquiry-hint">
                          You can share technical drawings or reference
                          documents separately through WhatsApp or email.
                        </span>
                      </div>

                    </div>

                    <button
                      type="submit"
                      className="pe-enquiry-submit"
                    >
                      SEND QUOTATION REQUEST
                      <ArrowUpRight size={17} />
                    </button>

                    <p className="pe-enquiry-privacy">
                      Submitting a quotation request does not confirm
                      a final price. A quotation can be prepared after
                      reviewing the actual project specifications.
                    </p>
                  </form>
                )}

              </div>
            </div>
          </div>
        </section>

        {/* BOTTOM CTA */}

        <section className="pe-enquiry-bottom">
          <div className="pe-enquiry-container">
            <div className="pe-enquiry-bottom-inner">

              <div>
                <h2>Prefer speaking directly?</h2>
                <p>
                  Contact Prathamesh Enterprises for your
                  business or project-related discussions.
                </p>
              </div>

              <a
                href="https://wa.me/919850587474"
                target="_blank"
                rel="noreferrer"
                className="pe-enquiry-bottom-link"
              >
                CHAT ON WHATSAPP
                <ArrowUpRight size={16} />
              </a>

            </div>
          </div>
        </section>

      </main>
    </>
  );
}

export default Enquiry;
