
import { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  ArrowRight,
  Factory,
  Settings,
  Ruler,
  Wrench,
  Layers3,
  ClipboardCheck,
  CheckCircle2,
  MoveUpRight,
  Plus
} from "lucide-react";

/* CLIENT'S ACTUAL FABRICATION IMAGES */

const HERO_IMAGE = "/products/Image.jpg";

function Services() {
  const services = [
    {
      number: "01",
      icon: Factory,
      title: "Industrial Fabrication",
      description:
        "Fabrication work for industrial environments, planned around project specifications, application requirements and client expectations.",
      points: [
        "Requirement-based fabrication",
        "Industrial project support",
        "Specification-oriented execution"
      ],
      image: "/products/image1.jpeg"
    },
    {
      number: "02",
      icon: Settings,
      title: "Custom Fabrication",
      description:
        "Custom fabrication requirements discussed according to client drawings, dimensions and the intended application.",
      points: [
        "Custom project requirements",
        "Drawing-based discussions",
        "Application-specific planning"
      ],
      image: "/products/image3.jpeg"
    },
    {
      number: "03",
      icon: Ruler,
      title: "Fabrication as per Drawings",
      description:
        "Project discussions based on technical drawings, measurements and specifications supplied by the client.",
      points: [
        "Drawing and specification review",
        "Dimension-related coordination",
        "Project scope discussions"
      ],
      image: "/products/image4.jpeg"
    },
    {
      number: "04",
      icon: Wrench,
      title: "Industrial Project Work",
      description:
        "Fabrication-related work considered according to the nature, scope and requirements of industrial projects.",
      points: [
        "Project requirement assessment",
        "Work scope coordination",
        "Execution planning"
      ],
      image: "/products/image5.jpeg"
    },
    {
      number: "05",
      icon: Layers3,
      title: "Fabrication Components",
      description:
        "Discussions for fabrication components and assemblies based on the technical requirements of a project.",
      points: [
        "Component requirements",
        "Material and specification discussions",
        "Custom project coordination"
      ],
      image: "/products/image7.jpeg"
    },
    {
      number: "06",
      icon: ClipboardCheck,
      title: "Project Coordination",
      description:
        "Clear communication and coordination to understand project expectations and align the work scope.",
      points: [
        "Requirement clarification",
        "Scope and timeline discussions",
        "Client coordination"
      ],
      image: "/products/image1.jpeg"
    }
  ];

  const steps = [
    {
      number: "01",
      title: "Understand",
      description:
        "We begin by understanding your project, application and fabrication requirements."
    },
    {
      number: "02",
      title: "Review",
      description:
        "Drawings, dimensions, materials and technical details are discussed."
    },
    {
      number: "03",
      title: "Plan",
      description:
        "The scope, feasibility, timelines and quotation requirements are reviewed."
    },
    {
      number: "04",
      title: "Proceed",
      description:
        "The project moves forward according to the mutually agreed scope."
    }
  ];

  useEffect(() => {
    const elements = document.querySelectorAll("[data-reveal]");

    if (
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      elements.forEach((element) =>
        element.classList.add("pe-s-visible")
      );
      return;
    }

    if (!("IntersectionObserver" in window)) {
      elements.forEach((element) =>
        element.classList.add("pe-s-visible")
      );
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("pe-s-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -35px 0px"
      }
    );

    elements.forEach((element, index) => {
      element.style.transitionDelay = `${(index % 4) * 100}ms`;
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style>{`
        .pe-services-page {
          --pe-orange: #f47721;
          --pe-orange-light: #ffad65;
          --pe-navy: #102a38;
          --pe-ink: #172f3b;
          --pe-muted: #71818a;
          --pe-paper: #f4f6f6;
          background: var(--pe-paper);
          color: var(--pe-ink);
          font-family: Arial, Helvetica, sans-serif;
          overflow: hidden;
        }

        .pe-services-page * {
          box-sizing: border-box;
        }

        .pe-s-container {
          width: min(1220px, calc(100% - 48px));
          margin: 0 auto;
        }

        .pe-s-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 11px;
          color: var(--pe-orange);
          font-size: 10px;
          font-weight: 800;
          letter-spacing: 2.4px;
          text-transform: uppercase;
        }

        .pe-s-eyebrow::before {
          content: "";
          width: 25px;
          height: 2px;
          background: var(--pe-orange);
        }

        .pe-s-reveal {
          opacity: 0;
          transform: translateY(30px);
          transition:
            opacity .75s ease,
            transform .75s cubic-bezier(.2,.7,.2,1);
        }

        .pe-s-reveal.pe-s-visible {
          opacity: 1;
          transform: translateY(0);
        }

        /* HERO */

        .pe-s-hero {
          position: relative;
          min-height: 650px;
          display: flex;
          align-items: center;
          background: var(--pe-navy);
          color: white;
          isolation: isolate;
        }

        .pe-s-hero::before {
          content: "";
          position: absolute;
          inset: 0;
          z-index: -2;
          background:
            linear-gradient(
              90deg,
              #102a38 0%,
              rgba(16,42,56,.97) 40%,
              rgba(16,42,56,.38) 100%
            ),
            url("${HERO_IMAGE}")
            center 48% / cover no-repeat;
          animation: pe-s-hero-zoom 18s ease-in-out infinite alternate;
        }

        .pe-s-hero::after {
          content: "";
          position: absolute;
          inset: 0;
          z-index: -1;
          opacity: .15;
          background-image: radial-gradient(
            rgba(255,255,255,.4) .7px,
            transparent .7px
          );
          background-size: 24px 24px;
          pointer-events: none;
        }

        .pe-s-hero-content {
          width: 100%;
          padding: 105px 0 95px;
          position: relative;
          z-index: 1;
        }

        .pe-s-hero-copy {
          max-width: 760px;
        }

        .pe-s-hero .pe-s-eyebrow {
          color: #ffad65;
        }

        .pe-s-hero .pe-s-eyebrow::before {
          background: #ffad65;
        }

        .pe-s-hero h1 {
          max-width: 760px;
          margin: 25px 0 22px;
          font-size: clamp(48px, 7vw, 88px);
          line-height: .99;
          letter-spacing: -4.5px;
          font-weight: 800;
          animation: pe-s-title-in 1s ease both;
        }

        .pe-s-hero h1 span {
          display: block;
          color: var(--pe-orange-light);
        }

        .pe-s-hero-description {
          max-width: 540px;
          color: #c1d0d6;
          font-size: 14px;
          line-height: 2;
          margin: 0;
          animation: pe-s-fade-up 1s .2s both;
        }

        .pe-s-hero-actions {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 25px;
          margin-top: 34px;
          animation: pe-s-fade-up 1s .35s both;
        }

        .pe-s-primary-button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 13px;
          padding: 16px 22px;
          color: #fff;
          background: linear-gradient(
            115deg,
            #f47721 0%,
            #fb923c 52%,
            #ffb36f 100%
          );
          background-size: 200% 200%;
          box-shadow: 0 10px 30px rgba(244,119,33,.2);
          text-decoration: none;
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 1px;
          transition: transform .3s ease, box-shadow .3s ease;
          animation: pe-s-gradient 7s ease infinite;
        }

        .pe-s-primary-button:hover {
          transform: translateY(-4px);
          box-shadow: 0 15px 35px rgba(244,119,33,.35);
        }

        .pe-s-text-link {
          display: inline-flex;
          align-items: center;
          gap: 9px;
          color: white;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: .8px;
          text-decoration: none;
          transition: color .25s ease;
        }

        .pe-s-text-link:hover {
          color: var(--pe-orange-light);
        }

        .pe-s-hero-bottom {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 20px;
          margin-top: 85px;
          padding-top: 20px;
          border-top: 1px solid rgba(255,255,255,.2);
          color: #a9bdc7;
          font-size: 10px;
          letter-spacing: 1.6px;
          text-transform: uppercase;
        }

        .pe-s-hero-bottom span:last-child {
          display: flex;
          align-items: center;
          gap: 9px;
        }

        .pe-s-orange-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          display: inline-block;
          background: var(--pe-orange);
          box-shadow: 0 0 13px rgba(244,119,33,.8);
        }

        /* INTRO STRIP */

        .pe-s-intro-strip {
          background: #fff;
          border-bottom: 1px solid #e5e9e9;
        }

        .pe-s-intro-inner {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          align-items: stretch;
        }

        .pe-s-intro-item {
          padding: 29px 30px;
          border-right: 1px solid #e8eded;
          display: flex;
          align-items: center;
          gap: 15px;
        }

        .pe-s-intro-item:first-child {
          padding-left: 0;
        }

        .pe-s-intro-item:last-child {
          border-right: 0;
        }

        .pe-s-intro-icon {
          width: 42px;
          height: 42px;
          flex-shrink: 0;
          display: grid;
          place-items: center;
          color: var(--pe-orange);
          background: #fff1e7;
        }

        .pe-s-intro-item strong {
          display: block;
          color: #203a46;
          font-size: 12px;
          margin-bottom: 5px;
        }

        .pe-s-intro-item span {
          display: block;
          color: #87949a;
          font-size: 10px;
          line-height: 1.6;
        }

        /* SECTION HEADINGS */

        .pe-s-section {
          padding: 110px 0;
        }

        .pe-s-section-heading {
          display: flex;
          justify-content: space-between;
          align-items: end;
          gap: 35px;
          margin-bottom: 48px;
        }

        .pe-s-section-heading h2 {
          max-width: 650px;
          color: var(--pe-ink);
          font-size: clamp(34px, 4.5vw, 55px);
          line-height: 1.08;
          letter-spacing: -2.5px;
          margin: 17px 0 0;
        }

        .pe-s-section-heading h2 span {
          color: var(--pe-orange);
        }

        .pe-s-section-heading > p {
          max-width: 350px;
          margin: 0 0 5px;
          color: var(--pe-muted);
          font-size: 12px;
          line-height: 1.9;
        }

        /* SERVICE CARDS */

        .pe-s-services-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 22px;
        }

        .pe-s-service-card {
          position: relative;
          min-height: 430px;
          display: grid;
          grid-template-columns: 42% 58%;
          background: #fff;
          border: 1px solid #e5e9e9;
          overflow: hidden;
          transition:
            transform .4s ease,
            box-shadow .4s ease,
            border-color .4s ease;
        }

        .pe-s-service-card:hover {
          transform: translateY(-7px);
          border-color: rgba(244,119,33,.45);
          box-shadow: 0 22px 50px rgba(21,48,59,.09);
        }

        .pe-s-service-image {
          min-height: 100%;
          position: relative;
          overflow: hidden;
          background: #d9e0e2;
        }

        .pe-s-service-image::after {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(
            0deg,
            rgba(8,27,37,.35),
            transparent 65%
          );
          pointer-events: none;
        }

        .pe-s-service-image img {
          width: 100%;
          height: 100%;
          min-height: 430px;
          object-fit: cover;
          display: block;
          transition: transform .8s cubic-bezier(.2,.7,.2,1);
        }

        .pe-s-service-card:hover .pe-s-service-image img {
          transform: scale(1.08);
        }

        .pe-s-service-image-number {
          position: absolute;
          left: 18px;
          bottom: 18px;
          z-index: 1;
          color: white;
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 2px;
        }

        .pe-s-service-content {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          padding: 29px 25px;
        }

        .pe-s-service-icon {
          width: 43px;
          height: 43px;
          display: grid;
          place-items: center;
          color: var(--pe-orange);
          background: #fff1e7;
          transition:
            background .3s ease,
            color .3s ease,
            transform .3s ease;
        }

        .pe-s-service-card:hover .pe-s-service-icon {
          color: white;
          background: var(--pe-orange);
          transform: rotate(-5deg);
        }

        .pe-s-service-content h3 {
          margin: 23px 0 12px;
          color: #1b3541;
          font-size: 20px;
          line-height: 1.3;
          letter-spacing: -.5px;
        }

        .pe-s-service-content > p {
          margin: 0;
          color: #74838a;
          font-size: 11px;
          line-height: 1.9;
        }

        .pe-s-service-content ul {
          list-style: none;
          display: grid;
          gap: 10px;
          padding: 20px 0 0;
          margin: auto 0 0;
        }

        .pe-s-service-content li {
          display: flex;
          align-items: flex-start;
          gap: 8px;
          color: #4c626c;
          font-size: 10px;
          line-height: 1.6;
        }

        .pe-s-service-content li svg {
          flex-shrink: 0;
          color: var(--pe-orange);
        }

        .pe-s-service-index {
          position: absolute;
          top: 15px;
          right: 15px;
          z-index: 2;
          color: #fff;
          background: var(--pe-orange);
          padding: 7px 9px;
          font-size: 9px;
          font-weight: 800;
          letter-spacing: 1px;
        }

        .pe-s-service-footnote {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          margin-top: 28px;
          padding: 19px 22px;
          background: #fff;
          border-left: 3px solid var(--pe-orange);
          color: #697a82;
          font-size: 11px;
          line-height: 1.8;
        }

        .pe-s-service-footnote svg {
          flex-shrink: 0;
          color: var(--pe-orange);
          margin-top: 1px;
        }

        /* PROCESS SECTION */

        .pe-s-process {
          position: relative;
          background: #102a38;
          color: white;
          overflow: hidden;
        }

        .pe-s-process::before {
          content: "PROCESS";
          position: absolute;
          right: -20px;
          bottom: -75px;
          color: rgba(255,255,255,.025);
          font-size: clamp(100px, 18vw, 240px);
          line-height: 1;
          font-weight: 900;
          letter-spacing: -12px;
          pointer-events: none;
        }

        .pe-s-process .pe-s-section-heading h2 {
          color: white;
        }

        .pe-s-process .pe-s-section-heading > p {
          color: #a9bdc7;
        }

        .pe-s-process-grid {
          position: relative;
          z-index: 1;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          border-top: 1px solid rgba(255,255,255,.2);
          border-bottom: 1px solid rgba(255,255,255,.2);
        }

        .pe-s-process-step {
          position: relative;
          min-height: 235px;
          padding: 30px 25px 30px 0;
          border-right: 1px solid rgba(255,255,255,.16);
        }

        .pe-s-process-step:not(:first-child) {
          padding-left: 25px;
        }

        .pe-s-process-step:last-child {
          border-right: 0;
        }

        .pe-s-process-number {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          color: var(--pe-orange-light);
          font-size: 12px;
          font-weight: 800;
          letter-spacing: 2px;
        }

        .pe-s-process-number::after {
          content: "";
          width: 35px;
          height: 1px;
          background: var(--pe-orange);
        }

        .pe-s-process-step h3 {
          margin: 36px 0 12px;
          color: white;
          font-size: 20px;
          letter-spacing: -.5px;
        }

        .pe-s-process-step p {
          max-width: 230px;
          margin: 0;
          color: #a9bdc7;
          font-size: 11px;
          line-height: 1.9;
        }

        .pe-s-process-step > svg {
          position: absolute;
          top: 31px;
          right: 23px;
          color: rgba(255,255,255,.25);
          transition: color .3s ease, transform .3s ease;
        }

        .pe-s-process-step:hover > svg {
          color: var(--pe-orange-light);
          transform: translate(4px, -4px);
        }

        /* REQUIREMENTS */

        .pe-s-requirements {
          background: #e9edef;
        }

        .pe-s-requirements-layout {
          display: grid;
          grid-template-columns: 1fr 1fr;
          align-items: center;
          gap: 75px;
        }

        .pe-s-requirements-copy h2 {
          max-width: 530px;
          margin: 19px 0;
          color: var(--pe-ink);
          font-size: clamp(34px, 4.5vw, 53px);
          line-height: 1.08;
          letter-spacing: -2.4px;
        }

        .pe-s-requirements-copy h2 span {
          color: var(--pe-orange);
        }

        .pe-s-requirements-copy > p {
          max-width: 470px;
          color: #71818a;
          font-size: 12px;
          line-height: 2;
          margin-bottom: 25px;
        }

        .pe-s-requirement-list {
          background: white;
          padding: 34px;
          box-shadow: 0 15px 45px rgba(20,45,55,.05);
        }

        .pe-s-requirement-list h3 {
          margin: 0 0 23px;
          color: #203a46;
          font-size: 16px;
        }

        .pe-s-requirement-item {
          display: flex;
          align-items: flex-start;
          gap: 13px;
          padding: 15px 0;
          border-bottom: 1px solid #edf0f0;
          color: #536871;
          font-size: 11px;
          line-height: 1.7;
        }

        .pe-s-requirement-item:last-child {
          border-bottom: 0;
        }

        .pe-s-requirement-item svg {
          flex-shrink: 0;
          color: var(--pe-orange);
        }

        /* CTA */

        .pe-s-cta {
          position: relative;
          padding: 85px 0;
          color: white;
          background:
            radial-gradient(
              circle at 90% 20%,
              rgba(244,119,33,.15),
              transparent 28%
            ),
            #0b202c;
          overflow: hidden;
        }

        .pe-s-cta::after {
          content: "";
          position: absolute;
          width: 360px;
          height: 360px;
          right: -120px;
          bottom: -240px;
          border: 1px solid rgba(244,119,33,.35);
          border-radius: 50%;
          box-shadow:
            0 0 0 35px rgba(244,119,33,.04),
            0 0 0 70px rgba(244,119,33,.03);
          pointer-events: none;
        }

        .pe-s-cta-inner {
          position: relative;
          z-index: 1;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 35px;
        }

        .pe-s-cta h2 {
          max-width: 670px;
          margin: 17px 0 12px;
          color: white;
          font-size: clamp(32px, 4.5vw, 52px);
          line-height: 1.08;
          letter-spacing: -2px;
        }

        .pe-s-cta p {
          max-width: 550px;
          margin: 0;
          color: #b1c1c8;
          font-size: 12px;
          line-height: 1.9;
        }

        .pe-s-cta-button {
          flex-shrink: 0;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 13px;
          padding: 18px 25px;
          color: white;
          background: linear-gradient(
            115deg,
            #f47721 0%,
            #fb923c 52%,
            #ffb36f 100%
          );
          background-size: 200% 200%;
          box-shadow: 0 10px 30px rgba(244,119,33,.2);
          text-decoration: none;
          font-size: 10px;
          font-weight: 800;
          letter-spacing: 1px;
          transition: transform .3s ease, box-shadow .3s ease;
          animation: pe-s-gradient 7s ease infinite;
        }

        .pe-s-cta-button:hover {
          transform: translateY(-4px);
          box-shadow: 0 15px 35px rgba(244,119,33,.35);
        }

        /* ANIMATIONS */

        @keyframes pe-s-hero-zoom {
          from { transform: scale(1); }
          to { transform: scale(1.06); }
        }

        @keyframes pe-s-title-in {
          from {
            opacity: 0;
            transform: translateY(25px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes pe-s-fade-up {
          from {
            opacity: 0;
            transform: translateY(18px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes pe-s-gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }

        /* RESPONSIVE */

        @media(max-width: 1000px) {
          .pe-s-service-card {
            grid-template-columns: 38% 62%;
          }

          .pe-s-service-content {
            padding: 25px 20px;
          }

          .pe-s-requirements-layout {
            gap: 40px;
          }

          .pe-s-process-step {
            padding-right: 15px;
          }

          .pe-s-process-step:not(:first-child) {
            padding-left: 15px;
          }
        }

        @media(max-width: 760px) {
          .pe-s-hero {
            min-height: auto;
          }

          .pe-s-hero::before {
            background:
              linear-gradient(
                90deg,
                rgba(16,42,56,.97),
                rgba(16,42,56,.72)
              ),
              url("${HERO_IMAGE}")
              center / cover no-repeat;
          }

          .pe-s-hero-content {
            padding: 95px 0 55px;
          }

          .pe-s-hero h1 {
            letter-spacing: -2.5px;
          }

          .pe-s-hero-bottom {
            margin-top: 60px;
          }

          .pe-s-intro-inner {
            grid-template-columns: 1fr;
          }

          .pe-s-intro-item,
          .pe-s-intro-item:first-child {
            padding: 19px 0;
            border-right: 0;
            border-bottom: 1px solid #e8eded;
          }

          .pe-s-intro-item:last-child {
            border-bottom: 0;
          }

          .pe-s-section {
            padding: 78px 0;
          }

          .pe-s-section-heading {
            display: block;
            margin-bottom: 35px;
          }

          .pe-s-section-heading > p {
            margin-top: 18px;
          }

          .pe-s-services-grid {
            grid-template-columns: 1fr;
          }

          .pe-s-service-card {
            min-height: 340px;
          }

          .pe-s-service-image img {
            min-height: 340px;
          }

          .pe-s-process-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .pe-s-process-step {
            min-height: 205px;
            padding: 25px 15px 25px 0;
            border-bottom: 1px solid rgba(255,255,255,.16);
          }

          .pe-s-process-step:not(:first-child) {
            padding-left: 15px;
          }

          .pe-s-process-step:nth-child(2) {
            border-right: 0;
          }

          .pe-s-process-step:nth-child(3),
          .pe-s-process-step:nth-child(4) {
            border-bottom: 0;
          }

          .pe-s-requirements-layout {
            grid-template-columns: 1fr;
            gap: 30px;
          }

          .pe-s-cta-inner {
            align-items: flex-start;
            flex-direction: column;
          }

          .pe-s-cta-button {
            width: 100%;
          }
        }

        @media(max-width: 480px) {
          .pe-s-container {
            width: calc(100% - 36px);
          }

          .pe-s-hero-content {
            padding: 80px 0 45px;
          }

          .pe-s-hero h1 {
            font-size: 46px;
          }

          .pe-s-hero-description {
            font-size: 12px;
          }

          .pe-s-hero-actions {
            align-items: flex-start;
            flex-direction: column;
            gap: 19px;
          }

          .pe-s-hero-bottom {
            align-items: flex-start;
            flex-direction: column;
            gap: 12px;
            font-size: 9px;
          }

          .pe-s-service-card {
            grid-template-columns: 1fr;
          }

          .pe-s-service-image {
            height: 205px;
            min-height: 205px;
          }

          .pe-s-service-image img {
            height: 205px;
            min-height: 205px;
          }

          .pe-s-service-content {
            min-height: 300px;
            padding: 25px;
          }

          .pe-s-process-grid {
            grid-template-columns: 1fr;
          }

          .pe-s-process-step,
          .pe-s-process-step:not(:first-child) {
            min-height: auto;
            padding: 25px 5px 28px 0;
            border-right: 0;
            border-bottom: 1px solid rgba(255,255,255,.16);
          }

          .pe-s-process-step:last-child {
            border-bottom: 0;
          }

          .pe-s-process-step h3 {
            margin-top: 22px;
          }

          .pe-s-requirement-list {
            padding: 25px 20px;
          }

          .pe-s-cta {
            padding: 70px 0;
          }
        }

        @media(prefers-reduced-motion: reduce) {
          .pe-services-page *,
          .pe-services-page *::before,
          .pe-services-page *::after {
            scroll-behavior: auto !important;
            animation-duration: .01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: .01ms !important;
          }

          .pe-s-reveal {
            opacity: 1;
            transform: none;
          }
        }
      `}</style>

      <main className="pe-services-page">

        {/* HERO */}

        <section className="pe-s-hero">
          <div className="pe-s-container">
            <div className="pe-s-hero-content">
              <div className="pe-s-hero-copy">
                <span className="pe-s-eyebrow">
                  What We Do
                </span>

                <h1>
                  Built for industry.
                  <span>Made for your needs.</span>
                </h1>

                <p className="pe-s-hero-description">
                  Explore fabrication-related services and industrial
                  project support from Prathamesh Enterprises. With
                  18 years of experience, we start by understanding
                  your requirements and the details that matter.
                </p>

                <div className="pe-s-hero-actions">
                  <Link to="/enquiry" className="pe-s-primary-button">
                    DISCUSS YOUR PROJECT
                    <ArrowUpRight size={17} />
                  </Link>

                  <a href="#pe-service-list" className="pe-s-text-link">
                    EXPLORE OUR SERVICES
                    <ArrowRight size={15} />
                  </a>
                </div>
              </div>

              <div className="pe-s-hero-bottom">
                <span>Prathamesh Enterprises</span>
                <span>
                  <i className="pe-s-orange-dot" />
                  Industrial fabrication services
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* INTRO STRIP */}

        <section className="pe-s-intro-strip">
          <div className="pe-s-container">
            <div className="pe-s-intro-inner">

              <div className="pe-s-intro-item" data-reveal>
                <div className="pe-s-intro-icon">
                  <Factory size={21} />
                </div>
                <div>
                  <strong>Industrial Focus</strong>
                  <span>Fabrication-related project requirements</span>
                </div>
              </div>

              <div className="pe-s-intro-item" data-reveal>
                <div className="pe-s-intro-icon">
                  <Ruler size={21} />
                </div>
                <div>
                  <strong>Specification Based</strong>
                  <span>Discussions around drawings and dimensions</span>
                </div>
              </div>

              <div className="pe-s-intro-item" data-reveal>
                <div className="pe-s-intro-icon">
                  <ClipboardCheck size={21} />
                </div>
                <div>
                  <strong>Clear Coordination</strong>
                  <span>Project scope and requirement discussions</span>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* SERVICES */}

        <section className="pe-s-section" id="pe-service-list">
          <div className="pe-s-container">

            <div className="pe-s-section-heading pe-s-reveal" data-reveal>
              <div>
                <span className="pe-s-eyebrow">Our Capabilities</span>
                <h2>
                  The right approach for
                  <span> every requirement.</span>
                </h2>
              </div>

              <p>
                Every project has its own specifications. Explore
                the service categories and connect with us to discuss
                the requirements of your project.
              </p>
            </div>

            <div className="pe-s-services-grid">
              {services.map((service) => {
                const Icon = service.icon;

                return (
                  <article
                    className="pe-s-service-card pe-s-reveal"
                    data-reveal
                    key={service.number}
                  >
                    <div className="pe-s-service-image">
                      <img
                        src={service.image}
                        alt={`${service.title} industrial fabrication`}
                        loading="lazy"
                      />
                      <span className="pe-s-service-image-number">
                        PE / {service.number}
                      </span>
                    </div>

                    <div className="pe-s-service-content">
                      <span className="pe-s-service-index">
                        {service.number}
                      </span>

                      <div className="pe-s-service-icon">
                        <Icon size={21} />
                      </div>

                      <h3>{service.title}</h3>

                      <p>{service.description}</p>

                      <ul>
                        {service.points.map((point) => (
                          <li key={point}>
                            <CheckCircle2 size={14} />
                            {point}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </article>
                );
              })}
            </div>

            <div className="pe-s-service-footnote" data-reveal>
              <Plus size={17} />
              <span>
                Specific materials, products, machinery, fabrication
                processes and capabilities should be confirmed with
                the business before a project is accepted.
              </span>
            </div>

          </div>
        </section>

        {/* PROCESS */}

        <section className="pe-s-section pe-s-process">
          <div className="pe-s-container">

            <div className="pe-s-section-heading" data-reveal>
              <div>
                <span className="pe-s-eyebrow">Our Work Approach</span>
                <h2>
                  A clear process.
                  <span> From start to scope.</span>
                </h2>
              </div>

              <p>
                Good project coordination begins with understanding
                the requirement. Here's how an enquiry moves forward.
              </p>
            </div>

            <div className="pe-s-process-grid">
              {steps.map((step) => (
                <div
                  className="pe-s-process-step pe-s-reveal"
                  data-reveal
                  key={step.number}
                >
                  <span className="pe-s-process-number">
                    {step.number}
                  </span>

                  <MoveUpRight size={19} />

                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* PROJECT REQUIREMENTS */}

        <section className="pe-s-section pe-s-requirements">
          <div className="pe-s-container">
            <div className="pe-s-requirements-layout">

              <div className="pe-s-requirements-copy" data-reveal>
                <span className="pe-s-eyebrow">Start a Conversation</span>

                <h2>
                  Have a project in mind?
                  <span> Let's understand it.</span>
                </h2>

                <p>
                  Share the available project information with us.
                  Drawings, dimensions and technical specifications
                  can help make the initial discussion more useful.
                </p>

                <Link to="/enquiry" className="pe-s-primary-button">
                  SHARE YOUR REQUIREMENT
                  <ArrowUpRight size={17} />
                </Link>
              </div>

              <div className="pe-s-requirement-list" data-reveal>
                <h3>Information you can share</h3>

                <div className="pe-s-requirement-item">
                  <CheckCircle2 size={18} />
                  Project description and intended application
                </div>

                <div className="pe-s-requirement-item">
                  <CheckCircle2 size={18} />
                  Technical drawings, if available
                </div>

                <div className="pe-s-requirement-item">
                  <CheckCircle2 size={18} />
                  Dimensions and specifications
                </div>

                <div className="pe-s-requirement-item">
                  <CheckCircle2 size={18} />
                  Material and quantity details, if known
                </div>

                <div className="pe-s-requirement-item">
                  <CheckCircle2 size={18} />
                  Expected project timeline
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* FINAL CTA */}

        <section className="pe-s-cta">
          <div className="pe-s-container">
            <div className="pe-s-cta-inner" data-reveal>

              <div>
                <span className="pe-s-eyebrow">Let's Build Something</span>

                <h2>
                  Your next project starts with a conversation.
                </h2>

                <p>
                  Connect with Prathamesh Enterprises to discuss
                  your industrial fabrication requirements.
                </p>
              </div>

              <Link to="/enquiry" className="pe-s-cta-button">
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

export default Services;
