
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Clock3,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Send,
  Building2,
  ShieldCheck,
  Factory,
} from "lucide-react";

function Contact() {
  const phone = "9850987474";
  const email = "prathmeshshshelar356@gmail.com";

  const [contact, setContact] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    message: "",
  });

  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [emailSent, setEmailSent] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const updateContact = (e) => {
    const { name, value } = e.target;

    setContact((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const submitContact = async (e) => {
    e.preventDefault();

    setSubmitting(true);
    setSubmitted(false);
    setEmailSent(false);
    setSubmitMessage("");

    try {
      const response = await fetch(
        "http://localhost:5000/api/inquiries",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            submission_type: "contact",
            full_name: contact.name,
            company_name: contact.company,
            email: contact.email,
            phone: contact.phone,
            service: "Contact form message",
            project_details: {
              message: contact.message,
            },
          }),
        }
      );

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(
          result.message || "Your message could not be sent. Please try again."
        );
      }

      setSubmitted(true);
      setEmailSent(result.emailSent === true);
      setSubmitMessage("Your message has been submitted successfully!");

      setContact({
        name: "",
        company: "",
        email: "",
        phone: "",
        message: "",
      });
    } catch (error) {
      console.error("Contact submission error:", error);
      setSubmitted(false);
      setSubmitMessage(
        error.message || "Unable to send your message. Please try again."
      );
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="pe-contact-page">
      <style>{`
        .pe-contact-page {
          width: 100%;
          overflow: hidden;
          color: #18212b;
          background: #ffffff;
          font-family: inherit;
        }

        .pe-contact-page * {
          box-sizing: border-box;
        }

        .pe-contact-container {
          width: min(1160px, 90%);
          margin: 0 auto;
        }

        .pe-contact-hero {
          position: relative;
          padding: 105px 0 100px;
          background: #172532;
          color: #ffffff;
          overflow: hidden;
        }

        .pe-contact-hero::after {
          content: "";
          position: absolute;
          width: 420px;
          height: 420px;
          right: -120px;
          top: -170px;
          border: 1px solid rgba(255,255,255,0.12);
          border-radius: 50%;
          box-shadow:
            0 0 0 45px rgba(255,255,255,0.025),
            0 0 0 90px rgba(255,255,255,0.02);
        }

        .pe-contact-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 9px;
          color: #f28b45;
          font-size: 12px;
          font-weight: 800;
          letter-spacing: 2px;
          text-transform: uppercase;
          margin-bottom: 20px;
        }

        .pe-contact-eyebrow::before {
          content: "";
          width: 25px;
          height: 2px;
          background: #f28b45;
        }

        .pe-contact-hero h1 {
          max-width: 760px;
          margin: 0 0 20px;
          font-size: clamp(40px, 6vw, 66px);
          line-height: 1.08;
          font-weight: 800;
          letter-spacing: -2px;
        }

        .pe-contact-hero h1 span {
          color: #f28b45;
        }

        .pe-contact-hero p {
          max-width: 620px;
          color: #c5ced5;
          font-size: 16px;
          line-height: 1.8;
          margin: 0;
        }

        .pe-contact-options {
          padding: 75px 0;
          background: #ffffff;
        }

        .pe-contact-section-heading {
          margin-bottom: 38px;
        }

        .pe-contact-section-heading h2 {
          color: #172532;
          font-size: clamp(29px, 4vw, 40px);
          line-height: 1.2;
          margin: 0 0 13px;
          letter-spacing: -1px;
        }

        .pe-contact-section-heading p {
          color: #697681;
          font-size: 15px;
          line-height: 1.8;
          max-width: 620px;
          margin: 0;
        }

        .pe-contact-options-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 18px;
        }

        .pe-contact-option {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          padding: 27px 23px;
          min-height: 210px;
          border: 1px solid #e7eaed;
          background: #ffffff;
          border-radius: 8px;
          text-decoration: none;
          color: inherit;
          transition: 0.25s ease;
        }

        .pe-contact-option:hover {
          transform: translateY(-5px);
          border-color: #f28b45;
          box-shadow: 0 12px 30px rgba(23,37,50,0.07);
        }

        .pe-contact-option-icon {
          width: 48px;
          height: 48px;
          display: grid;
          place-items: center;
          background: #fff1e7;
          color: #e8752d;
          border-radius: 7px;
          margin-bottom: 20px;
        }

        .pe-contact-option h3 {
          font-size: 17px;
          color: #172532;
          margin: 0 0 9px;
        }

        .pe-contact-option p {
          font-size: 13px;
          color: #687580;
          line-height: 1.6;
          margin: 0 0 13px;
          overflow-wrap: anywhere;
        }

        .pe-contact-option-action {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          color: #e8752d;
          font-size: 13px;
          font-weight: 700;
          margin-top: auto;
        }

        .pe-contact-form-section {
          padding: 85px 0;
          background: #f3f5f6;
        }

        .pe-contact-form-layout {
          display: grid;
          grid-template-columns: 0.85fr 1.15fr;
          gap: 55px;
          align-items: start;
        }

        .pe-contact-form-info {
          padding-top: 15px;
        }

        .pe-contact-form-info h2 {
          color: #172532;
          font-size: clamp(30px, 4vw, 43px);
          line-height: 1.18;
          letter-spacing: -1.2px;
          margin: 0 0 18px;
        }

        .pe-contact-form-info > p {
          color: #697681;
          font-size: 15px;
          line-height: 1.85;
          margin: 0 0 28px;
        }

        .pe-contact-form-note {
          display: flex;
          gap: 13px;
          align-items: flex-start;
          margin-top: 23px;
        }

        .pe-contact-form-note-icon {
          width: 40px;
          height: 40px;
          flex-shrink: 0;
          display: grid;
          place-items: center;
          color: #e8752d;
          background: #fff0e5;
          border-radius: 6px;
        }

        .pe-contact-form-note strong {
          display: block;
          color: #172532;
          font-size: 14px;
          margin-bottom: 5px;
        }

        .pe-contact-form-note span {
          display: block;
          color: #75808a;
          font-size: 13px;
          line-height: 1.6;
        }

        .pe-contact-form-card {
          background: #ffffff;
          padding: 38px;
          border: 1px solid #e5e9ec;
          border-radius: 9px;
          box-shadow: 0 12px 35px rgba(23,37,50,0.045);
        }

        .pe-contact-form-card h3 {
          font-size: 23px;
          color: #172532;
          margin: 0 0 8px;
        }

        .pe-contact-form-card > p {
          font-size: 13px;
          color: #78838d;
          margin: 0 0 27px;
          line-height: 1.6;
        }

        .pe-contact-form-fields {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 19px;
        }

        .pe-contact-form-group {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .pe-contact-form-group.full {
          grid-column: 1 / -1;
        }

        .pe-contact-form-group label {
          color: #273541;
          font-size: 13px;
          font-weight: 700;
        }

        .pe-contact-form-group input,
        .pe-contact-form-group textarea {
          width: 100%;
          padding: 13px 14px;
          border: 1px solid #dce1e5;
          border-radius: 5px;
          background: #ffffff;
          color: #172532;
          font-family: inherit;
          font-size: 14px;
          outline: none;
          transition: 0.2s ease;
        }

        .pe-contact-form-group input {
          height: 47px;
        }

        .pe-contact-form-group textarea {
          min-height: 125px;
          resize: vertical;
        }

        .pe-contact-form-group input:focus,
        .pe-contact-form-group textarea:focus {
          border-color: #e8752d;
          box-shadow: 0 0 0 3px rgba(232,117,45,0.1);
        }

        .pe-contact-form-group input::placeholder,
        .pe-contact-form-group textarea::placeholder {
          color: #a0a9b0;
        }

        .pe-contact-form-submit {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          min-height: 49px;
          padding: 0 25px;
          margin-top: 22px;
          border: none;
          border-radius: 5px;
          background: #e8752d;
          color: #ffffff;
          font-family: inherit;
          font-size: 13px;
          font-weight: 800;
          letter-spacing: 0.5px;
          cursor: pointer;
          transition: 0.2s ease;
        }

        .pe-contact-form-submit:hover {
          background: #cf6121;
          transform: translateY(-2px);
        }

        .pe-contact-form-submit:disabled {
          opacity: 0.65;
          cursor: not-allowed;
          transform: none;
        }

        .pe-contact-form-message {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          padding: 16px;
          margin-bottom: 22px;
          border: 1px solid;
          border-radius: 6px;
          font-size: 14px;
        }

        .pe-contact-form-message strong {
          display: block;
          margin-bottom: 5px;
        }

        .pe-contact-form-message p {
          margin: 0;
          line-height: 1.6;
          font-size: 13px;
        }

        .pe-contact-business {
          padding: 85px 0;
          background: #ffffff;
        }

        .pe-contact-business-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 45px;
          align-items: stretch;
        }

        .pe-contact-business-content h2 {
          color: #172532;
          font-size: clamp(29px, 4vw, 39px);
          margin: 0 0 17px;
          letter-spacing: -1px;
        }

        .pe-contact-business-content > p {
          color: #6d7983;
          font-size: 15px;
          line-height: 1.8;
          margin: 0 0 28px;
        }

        .pe-contact-business-item {
          display: flex;
          align-items: flex-start;
          gap: 15px;
          margin: 22px 0;
        }

        .pe-contact-business-item-icon {
          width: 43px;
          height: 43px;
          flex-shrink: 0;
          display: grid;
          place-items: center;
          background: #fff0e5;
          color: #e8752d;
          border-radius: 6px;
        }

        .pe-contact-business-item strong {
          display: block;
          color: #172532;
          font-size: 14px;
          margin-bottom: 6px;
        }

        .pe-contact-business-item span,
        .pe-contact-business-item a {
          color: #75808a;
          font-size: 14px;
          line-height: 1.7;
          text-decoration: none;
          overflow-wrap: anywhere;
        }

        .pe-contact-location-panel {
          min-height: 340px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          text-align: center;
          padding: 35px;
          color: #ffffff;
          background: #172532;
          border-radius: 8px;
        }

        .pe-contact-location-panel svg {
          color: #f28b45;
          margin-bottom: 20px;
        }

        .pe-contact-location-panel h3 {
          font-size: 25px;
          margin: 0 0 12px;
        }

        .pe-contact-location-panel p {
          max-width: 360px;
          color: #c5ced5;
          font-size: 14px;
          line-height: 1.8;
          margin: 0;
        }

        .pe-contact-cta {
          padding: 65px 0;
          background: #fff1e7;
        }

        .pe-contact-cta-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 25px;
        }

        .pe-contact-cta h2 {
          color: #172532;
          font-size: clamp(26px, 4vw, 37px);
          margin: 0 0 10px;
          letter-spacing: -1px;
        }

        .pe-contact-cta p {
          color: #697681;
          font-size: 14px;
          line-height: 1.7;
          margin: 0;
        }

        .pe-contact-cta-button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          flex-shrink: 0;
          padding: 15px 23px;
          background: #e8752d;
          color: #ffffff;
          border-radius: 5px;
          text-decoration: none;
          font-size: 13px;
          font-weight: 800;
          transition: 0.2s ease;
        }

        .pe-contact-cta-button:hover {
          background: #cf6121;
          transform: translateY(-2px);
        }

        @media (max-width: 900px) {
          .pe-contact-options-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .pe-contact-form-layout {
            grid-template-columns: 1fr;
            gap: 30px;
          }

          .pe-contact-business-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 600px) {
          .pe-contact-hero {
            padding: 75px 0;
          }

          .pe-contact-hero h1 {
            letter-spacing: -1px;
          }

          .pe-contact-options,
          .pe-contact-form-section,
          .pe-contact-business {
            padding: 60px 0;
          }

          .pe-contact-options-grid {
            grid-template-columns: 1fr;
          }

          .pe-contact-option {
            min-height: auto;
          }

          .pe-contact-form-card {
            padding: 24px 19px;
          }

          .pe-contact-form-fields {
            grid-template-columns: 1fr;
          }

          .pe-contact-form-group.full {
            grid-column: auto;
          }

          .pe-contact-cta-inner {
            align-items: flex-start;
            flex-direction: column;
          }

          .pe-contact-cta {
            padding: 50px 0;
          }
        }
      `}</style>

      {/* HERO */}
      <section className="pe-contact-hero">
        <div className="pe-contact-container">
          <div className="pe-contact-eyebrow">Contact Us</div>

          <h1>
            Let's Build Something <span>Strong.</span>
          </h1>

          <p>
            Have a fabrication requirement or an upcoming project?
            Connect with Prathamesh Enterprises to discuss your
            requirements and explore the right solution.
          </p>
        </div>
      </section>

      {/* CONTACT OPTIONS */}
      <section className="pe-contact-options">
        <div className="pe-contact-container">
          <div className="pe-contact-section-heading">
            <div className="pe-contact-eyebrow">Get In Touch</div>
            <h2>We're Here to Help</h2>
            <p>
              Reach out to us through your preferred channel.
              Our team will be happy to discuss your requirements.
            </p>
          </div>

          <div className="pe-contact-options-grid">
            <a
              href={`tel:+91${phone}`}
              className="pe-contact-option"
            >
              <div className="pe-contact-option-icon">
                <Phone size={22} />
              </div>
              <h3>Call Us</h3>
              <p>Speak directly with our team.</p>
              <span className="pe-contact-option-action">
                +91 {phone} <ArrowUpRight size={15} />
              </span>
            </a>

            <a
              href={`mailto:${email}`}
              className="pe-contact-option"
            >
              <div className="pe-contact-option-icon">
                <Mail size={22} />
              </div>
              <h3>Email Us</h3>
              <p>Send us your requirements or questions.</p>
              <span className="pe-contact-option-action">
                Send an Email <ArrowUpRight size={15} />
              </span>
            </a>

            <a
              href={`https://wa.me/91${phone}`}
              target="_blank"
              rel="noreferrer"
              className="pe-contact-option"
            >
              <div className="pe-contact-option-icon">
                <MessageCircle size={22} />
              </div>
              <h3>WhatsApp</h3>
              <p>Connect with us for a quick discussion.</p>
              <span className="pe-contact-option-action">
                Chat With Us <ArrowUpRight size={15} />
              </span>
            </a>

            <Link
              to="/enquiry"
              className="pe-contact-option"
            >
              <div className="pe-contact-option-icon">
                <FileTextIcon />
              </div>
              <h3>Request a Quote</h3>
              <p>Share your project details for a quotation.</p>
              <span className="pe-contact-option-action">
                Get a Quote <ArrowUpRight size={15} />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* CONTACT FORM */}
      <section className="pe-contact-form-section">
        <div className="pe-contact-container">
          <div className="pe-contact-form-layout">
            <div className="pe-contact-form-info">
              <div className="pe-contact-eyebrow">Send An Enquiry</div>

              <h2>Tell Us How We Can Help.</h2>

              <p>
                Have a question, need more information, or want to
                discuss a fabrication project? Fill in the form and
                our team will get back to you shortly.
              </p>

              <div className="pe-contact-form-note">
                <div className="pe-contact-form-note-icon">
                  <ShieldCheck size={21} />
                </div>
                <div>
                  <strong>Your Information Is Safe</strong>
                  <span>
                    Your details are used only to respond to your enquiry.
                  </span>
                </div>
              </div>

              <div className="pe-contact-form-note">
                <div className="pe-contact-form-note-icon">
                  <Clock3 size={21} />
                </div>
                <div>
                  <strong>Timely Response</strong>
                  <span>
                    Our team will review your message and get back to you.
                  </span>
                </div>
              </div>
            </div>

            <div className="pe-contact-form-card">
              <h3>Send Us a Message</h3>
              <p>
                Fill in the details below and we'll be in touch.
              </p>

              {submitMessage && (
                <div
                  className="pe-contact-form-message"
                  role="status"
                  aria-live="polite"
                  style={{
                    background: submitted ? "#eaf6ee" : "#fff0ed",
                    color: submitted ? "#24683d" : "#a12b20",
                    borderColor: submitted ? "#cce9d5" : "#f2c9c3",
                  }}
                >
                  {submitted ? (
                    <CheckCircle2 size={23} />
                  ) : (
                    <span>!</span>
                  )}

                  <div>
                    <strong>
                      {submitted
                        ? "Thank you for contacting Prathamesh Enterprises!"
                        : "Message not sent"}
                    </strong>

                    <p>
                      {submitted
                        ? emailSent
                          ? "Your message has been received successfully. Our team will review it and get back to you shortly."
                          : "Your message has been saved, but the email notification could not be sent. Please contact us directly."
                        : submitMessage}
                    </p>
                  </div>
                </div>
              )}

              <form onSubmit={submitContact}>
                <div className="pe-contact-form-fields">
                  <div className="pe-contact-form-group">
                    <label htmlFor="contact-name">Full Name *</label>
                    <input
                      id="contact-name"
                      type="text"
                      name="name"
                      placeholder="Enter your full name"
                      value={contact.name}
                      onChange={updateContact}
                      required
                    />
                  </div>

                  <div className="pe-contact-form-group">
                    <label htmlFor="contact-company">Company Name</label>
                    <input
                      id="contact-company"
                      type="text"
                      name="company"
                      placeholder="Enter company name"
                      value={contact.company}
                      onChange={updateContact}
                    />
                  </div>

                  <div className="pe-contact-form-group">
                    <label htmlFor="contact-email">Email Address *</label>
                    <input
                      id="contact-email"
                      type="email"
                      name="email"
                      placeholder="Enter your email"
                      value={contact.email}
                      onChange={updateContact}
                      required
                    />
                  </div>

                  <div className="pe-contact-form-group">
                    <label htmlFor="contact-phone">Phone Number *</label>
                    <input
                      id="contact-phone"
                      type="tel"
                      name="phone"
                      placeholder="Enter 10-digit phone number"
                      value={contact.phone}
                      onChange={(e) => {
                        const value = e.target.value
                          .replace(/\D/g, "")
                          .slice(0, 10);

                        setContact((prev) => ({
                          ...prev,
                          phone: value,
                        }));
                      }}
                      pattern="[0-9]{10}"
                      minLength={10}
                      maxLength={10}
                      title="Please enter exactly 10 digits"
                      required
                    />
                  </div>

                  <div className="pe-contact-form-group full">
                    <label htmlFor="contact-message">Your Message *</label>
                    <textarea
                      id="contact-message"
                      name="message"
                      placeholder="Tell us about your requirement..."
                      value={contact.message}
                      onChange={updateContact}
                      required
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="pe-contact-form-submit"
                  disabled={submitting}
                >
                  {submitting ? "SENDING MESSAGE..." : "SEND MESSAGE"}
                  {!submitting && <Send size={16} />}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* BUSINESS INFORMATION */}
      <section className="pe-contact-business">
        <div className="pe-contact-container">
          <div className="pe-contact-business-grid">
            <div className="pe-contact-business-content">
              <div className="pe-contact-eyebrow">Our Information</div>
              <h2>Connect With Prathamesh Enterprises</h2>

              <p>
                We work with businesses and industrial clients to
                understand their fabrication requirements and deliver
                practical solutions.
              </p>

              <div className="pe-contact-business-item">
                <div className="pe-contact-business-item-icon">
                  <Phone size={20} />
                </div>
                <div>
                  <strong>Phone</strong>
                  <a href={`tel:+91${phone}`}>+91 {phone}</a>
                </div>
              </div>

              <div className="pe-contact-business-item">
                <div className="pe-contact-business-item-icon">
                  <Mail size={20} />
                </div>
                <div>
                  <strong>Email</strong>
                  <a href={`mailto:${email}`}>{email}</a>
                </div>
              </div>

              <div className="pe-contact-business-item">
                <div className="pe-contact-business-item-icon">
                  <Building2 size={20} />
                </div>
                <div>
                  <strong>Business</strong>
                  <span>Prathamesh Enterprises</span>
                </div>
              </div>
            </div>

            <div className="pe-contact-location-panel">
              <Factory size={48} />
              <h3>Built on Experience.</h3>
              <p>
                With 18 years of experience in fabrication,
                Prathamesh Enterprises focuses on dependable
                workmanship and practical industrial solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="pe-contact-cta">
        <div className="pe-contact-container">
          <div className="pe-contact-cta-inner">
            <div>
              <h2>Have a Project in Mind?</h2>
              <p>
                Share your requirements with us and request a quotation
                for your next project.
              </p>
            </div>

            <Link
              to="/enquiry"
              className="pe-contact-cta-button"
            >
              Request a Quotation <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

function FileTextIcon() {
  return <Send size={21} />;
}

export default Contact;
