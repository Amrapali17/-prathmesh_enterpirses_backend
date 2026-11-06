
import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  ArrowRight,
  Factory,
  Settings,
  Layers3,
  ShieldCheck,
  Clock3,
  Target,
  Building2,
  FlaskConical,
  Cog,
  HardHat,
  CheckCircle2,
  FileText,
  Phone
} from "lucide-react";

function Home() {
  const services = [
    {
      icon: Factory,
      title: "Industrial Fabrication",
      description:
        "Fabrication built around industrial project requirements, specifications and quality expectations."
    },
    {
      icon: Settings,
      title: "Custom Fabrication",
      description:
        "Project-focused work developed from your drawings and needs, from single items to repeat orders."
    },
    {
      icon: Layers3,
      title: "Engineering Support",
      description:
        "Practical coordination and execution support from first discussion to final delivery."
    }
  ];

  const industries = [
    { icon: FlaskConical, name: "Pharmaceuticals" },
    { icon: Factory, name: "Chemical Manufacturing" },
    { icon: Cog, name: "Industrial Manufacturing" },
    { icon: HardHat, name: "Engineering & Infrastructure" }
  ];

  const clients = [
    "CIPLA",
    "EMCURE",
    "CLEAN SCIENCE",
    "ETERNIS",
    "LUPIN",
    "SUN PHARMA",
    "CARGILL"
  ];

  const highlights = [
    { icon: Clock3, value: "18+ years", label: "In fabrication" },
    { icon: ShieldCheck, value: "Quality-first", label: "Dependable execution" },
    { icon: Target, value: "Made to order", label: "Built to your drawings" },
    { icon: Building2, value: "B2B", label: "Industrial clients" }
  ];

  const steps = [
    {
      title: "Understand the requirement",
      text: "We review the scope, drawings and specifications you share."
    },
    {
      title: "Plan the approach",
      text: "We agree the fabrication approach with you before work begins."
    },
    {
      title: "Execute with care",
      text: "We carry out the agreed work with attention to quality and coordination."
    }
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Archivo:wdth,wght@75..125,500..800&family=IBM+Plex+Sans:wght@400;500;600&display=swap');

        .pe-home {
          --steel-900: #0e2233;
          --steel-800: #16344a;
          --steel-600: #35566d;
          --steel-300: #aebfcb;
          --steel-100: #e6ebef;
          --paper: #f5f7f8;
          --white: #ffffff;
          --ink: #14232d;
          --muted: #566a77;
          --weld: #e8590c;
          --weld-dark: #c2410c;
          --weld-soft: #fff1e8;
          --head: 'Archivo', 'Arial Narrow', Arial, sans-serif;
          --body: 'IBM Plex Sans', Arial, Helvetica, sans-serif;

          background: var(--paper);
          color: var(--ink);
          font-family: var(--body);
          font-size: 16px;
          line-height: 1.65;
          overflow: hidden;
        }

        .pe-home *,
        .pe-home *::before,
        .pe-home *::after {
          box-sizing: border-box;
        }

        .pe-home h1,
        .pe-home h2,
        .pe-home h3 {
          font-family: var(--head);
          margin: 0;
        }

        .pe-home p {
          margin: 0;
        }

        .pe-container {
          width: min(1180px, calc(100% - 48px));
          margin: 0 auto;
        }

        .pe-home a:focus-visible {
          outline: 3px solid var(--weld);
          outline-offset: 3px;
        }

        /* GLOBAL ANIMATION */

        @keyframes pe-fade-up {
          from {
            opacity: 0;
            transform: translateY(28px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes pe-fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes pe-card-in {
          from {
            opacity: 0;
            transform: translateY(35px) scale(.97);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes pe-line-in {
          from { transform: scaleX(0); }
          to { transform: scaleX(1); }
        }

        @keyframes pe-logo-float {
          0%, 100% {
            transform: translateY(0) rotate(-3deg);
          }
          50% {
            transform: translateY(-13px) rotate(3deg);
          }
        }

        @keyframes pe-logo-glow {
          0%, 100% {
            box-shadow:
              0 0 0 rgba(232,89,12,0),
              0 15px 35px rgba(0,0,0,.2);
          }
          50% {
            box-shadow:
              0 0 35px rgba(232,89,12,.35),
              0 20px 45px rgba(0,0,0,.3);
          }
        }

        @keyframes pe-pulse {
          0%, 100% { opacity: .55; transform: scale(.95); }
          50% { opacity: 1; transform: scale(1.08); }
        }

        @keyframes pe-orbit {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes pe-watermark {
          0%, 100% {
            transform: translate(-50%, -50%) scale(1);
            filter: blur(22px);
            opacity: .075;
          }
          50% {
            transform: translate(-50%, -53%) scale(1.07);
            filter: blur(30px);
            opacity: .13;
          }
        }

        @keyframes pe-shine {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }

        /* BUTTONS */

        .pe-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          padding: 15px 24px;
          border-radius: 4px;
          text-decoration: none;
          font-weight: 600;
          font-size: 15px;
          transition: all .3s ease;
          position: relative;
          overflow: hidden;
        }

        .pe-btn::after {
          content: "";
          position: absolute;
          top: 0;
          left: -100%;
          width: 70%;
          height: 100%;
          background: linear-gradient(
            110deg,
            transparent,
            rgba(255,255,255,.25),
            transparent
          );
          transition: left .55s ease;
        }

        .pe-btn:hover::after {
          left: 130%;
        }

        .pe-btn-primary {
          background: var(--weld);
          color: #fff;
          border: 1px solid var(--weld);
          box-shadow: 0 7px 20px rgba(232, 89, 12, .16);
        }

        .pe-btn-primary:hover {
          background: var(--weld-dark);
          border-color: var(--weld-dark);
          transform: translateY(-4px);
          box-shadow: 0 14px 30px rgba(232, 89, 12, .3);
        }

        .pe-btn-ghost {
          color: #fff;
          border: 1px solid rgba(255,255,255,.4);
        }

        .pe-btn-ghost:hover {
          background: rgba(255,255,255,.1);
          border-color: #fff;
          transform: translateY(-3px);
        }

        .pe-link {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          color: var(--weld-dark);
          font-weight: 600;
          text-decoration: none;
          border-bottom: 2px solid currentColor;
          padding-bottom: 2px;
          transition: all .25s ease;
        }

        .pe-link:hover {
          color: var(--steel-900);
          gap: 14px;
        }

        /* HERO */

        .pe-hero {
          background:
            radial-gradient(
              ellipse at 85% 35%,
              rgba(232, 89, 12, .2) 0%,
              transparent 38%
            ),
            repeating-linear-gradient(
              90deg,
              rgba(255,255,255,.025) 0 1px,
              transparent 1px 64px
            ),
            linear-gradient(
              160deg,
              var(--steel-900) 0%,
              var(--steel-800) 100%
            );

          color: #fff;
          padding: 96px 0 0;
          position: relative;
          isolation: isolate;
        }

        .pe-hero::before {
          content: "";
          position: absolute;
          width: 450px;
          height: 450px;
          right: -140px;
          top: -180px;
          border: 1px solid rgba(255,255,255,.08);
          border-radius: 50%;
          box-shadow:
            0 0 0 35px rgba(255,255,255,.018),
            0 0 0 75px rgba(255,255,255,.012);
          animation: pe-orbit 45s linear infinite;
          pointer-events: none;
        }

        .pe-hero::after {
          content: "";
          position: absolute;
          left: 0;
          bottom: 0;
          height: 5px;
          width: 100%;
          background: linear-gradient(
            90deg,
            var(--weld) 0 220px,
            rgba(232,89,12,.15) 220px,
            transparent 70%
          );
          transform-origin: left;
          animation: pe-line-in 1.4s .3s ease both;
        }

        .pe-hero-grid {
          display: grid;
          grid-template-columns: 1.25fr .75fr;
          gap: 64px;
          align-items: center;
          padding-bottom: 96px;
          position: relative;
          z-index: 1;
        }

        .pe-hero-copy {
          animation: pe-fade-up .9s .15s ease both;
        }

        /* LOGO */

        .pe-logo-area {
          display: flex;
          align-items: center;
          gap: 15px;
          margin-bottom: 30px;
          animation: pe-fade-up .8s ease both;
        }

        .pe-logo-mark {
          width: 58px;
          height: 58px;
          flex-shrink: 0;
          display: grid;
          place-items: center;
          background: #0e2233;
          color: #fff;
          border-radius: 5px;
          border-bottom: 5px solid var(--weld);
          font-family: var(--head);
          font-size: 37px;
          font-weight: 800;
          line-height: 1;
          animation: pe-logo-float 5s ease-in-out infinite,
                     pe-logo-glow 4s ease-in-out infinite;
          position: relative;
        }

        .pe-logo-mark::before {
          content: "";
          position: absolute;
          inset: -7px;
          border: 1px solid rgba(232,89,12,.5);
          border-radius: 8px;
          animation: pe-pulse 3s ease-in-out infinite;
        }

        .pe-logo-name strong {
          display: block;
          font-family: var(--head);
          font-size: 16px;
          font-weight: 800;
          letter-spacing: 1.4px;
          line-height: 1.3;
        }

        .pe-logo-name span {
          display: block;
          color: var(--steel-300);
          font-size: 11px;
          letter-spacing: 2.5px;
          text-transform: uppercase;
          margin-top: 3px;
        }

        .pe-hero-tag {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 7px 14px;
          border: 1px solid rgba(255,255,255,.22);
          border-radius: 100px;
          color: #d5e0e6;
          font-size: 13px;
          letter-spacing: .3px;
          margin-bottom: 26px;
          background: rgba(255,255,255,.045);
          animation: pe-fade-up .8s .3s ease both;
        }

        .pe-hero-tag::before {
          content: "";
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: var(--weld);
          box-shadow: 0 0 12px rgba(232,89,12,.8);
          animation: pe-pulse 2s ease-in-out infinite;
        }

        .pe-hero h1 {
          font-size: clamp(40px, 5.6vw, 70px);
          font-weight: 800;
          line-height: 1.04;
          letter-spacing: -1.5px;
          font-stretch: 90%;
          animation: pe-fade-up .9s .4s ease both;
        }

        .pe-hero h1 span {
          display: block;
          color: var(--steel-300);
          font-weight: 600;
        }

        .pe-hero-text {
          max-width: 540px;
          color: #c6d4dd;
          margin: 24px 0 34px !important;
          font-size: 17px;
          animation: pe-fade-up .9s .55s ease both;
        }

        .pe-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 14px;
          animation: pe-fade-up .9s .65s ease both;
        }

        .pe-brief {
          background: var(--white);
          color: var(--ink);
          border-radius: 6px;
          padding: 30px;
          border-top: 5px solid var(--weld);
          box-shadow: 0 30px 60px rgba(0,0,0,.3);
          animation: pe-card-in 1s .5s ease both;
          position: relative;
          transition: transform .35s ease, box-shadow .35s ease;
        }

        .pe-brief:hover {
          transform: translateY(-8px);
          box-shadow: 0 40px 75px rgba(0,0,0,.35);
        }

        .pe-brief::after {
          content: "";
          position: absolute;
          width: 120px;
          height: 120px;
          right: -20px;
          top: -25px;
          border-radius: 50%;
          background: rgba(232,89,12,.07);
          filter: blur(35px);
          pointer-events: none;
        }

        .pe-brief h2 {
          font-size: 22px;
          font-weight: 700;
          margin-bottom: 6px;
          position: relative;
        }

        .pe-brief > p {
          color: var(--muted);
          font-size: 14px;
          margin-bottom: 20px;
        }

        .pe-brief ul {
          list-style: none;
          margin: 0 0 24px;
          padding: 0;
          display: grid;
          gap: 12px;
        }

        .pe-brief li {
          display: flex;
          gap: 10px;
          font-size: 15px;
        }

        .pe-brief li svg {
          color: var(--weld);
          flex-shrink: 0;
          margin-top: 3px;
        }

        .pe-brief .pe-btn {
          width: 100%;
        }

        /* TRUST BAR */

        .pe-trust {
          background: var(--white);
          border-bottom: 1px solid var(--steel-100);
          position: relative;
          z-index: 2;
        }

        .pe-trust-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
        }

        .pe-trust-item {
          display: flex;
          align-items: center;
          gap: 14px;
          padding: 28px 20px;
          border-right: 1px solid var(--steel-100);
          transition: background .3s ease, transform .3s ease;
          animation: pe-fade-up .8s ease both;
        }

        .pe-trust-item:nth-child(2) { animation-delay: .1s; }
        .pe-trust-item:nth-child(3) { animation-delay: .2s; }
        .pe-trust-item:nth-child(4) { animation-delay: .3s; }

        .pe-trust-item:hover {
          background: #fffaf6;
          transform: translateY(-5px);
        }

        .pe-trust-item:first-child {
          padding-left: 0;
        }

        .pe-trust-item:last-child {
          border-right: 0;
        }

        .pe-trust-icon {
          color: var(--weld);
          flex-shrink: 0;
          transition: transform .35s ease;
        }

        .pe-trust-item:hover .pe-trust-icon {
          transform: translateY(-5px) rotate(-8deg) scale(1.12);
        }

        .pe-trust-item strong {
          display: block;
          font-family: var(--head);
          font-size: 18px;
          color: var(--steel-900);
          line-height: 1.2;
        }

        .pe-trust-item span {
          font-size: 13px;
          color: var(--muted);
        }

        /* COMMON SECTIONS */

        .pe-section {
          padding: 96px 0;
        }

        .pe-head {
          max-width: 640px;
          margin-bottom: 48px;
        }

        .pe-head h2,
        .pe-about h2 {
          font-size: clamp(30px, 3.8vw, 44px);
          font-weight: 700;
          line-height: 1.12;
          letter-spacing: -.8px;
          color: var(--steel-900);
        }

        .pe-head p {
          color: var(--muted);
          margin-top: 14px;
        }

        .pe-head-row {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          gap: 30px;
        }

        /* ABOUT WITH FULL LOGO WATERMARK */

        .pe-about {
          position: relative;
          isolation: isolate;
          overflow: hidden;
          display: block;
          padding: 65px 0;
          min-height: 460px;
        }

        .pe-about-watermark {
          position: absolute;
          z-index: -1;
          top: 50%;
          left: 50%;
          width: min(75vw, 850px);
          height: min(75vw, 850px);
          display: grid;
          place-items: center;
          background: #0e2233;
          color: #ffffff;
          border-radius: 12px;
          border-bottom: 32px solid #e8590c;
          font-family: var(--head);
          font-size: min(65vw, 690px);
          font-weight: 800;
          line-height: 1;
          opacity: .10;
          filter: blur(22px);
          transform: translate(-50%, -50%);
          pointer-events: none;
          animation: pe-watermark 10s ease-in-out infinite;
        }

        .pe-about-text {
          position: relative;
          z-index: 1;
          max-width: 820px;
          margin: 0 auto;
          text-align: center;
          animation: pe-fade-up 1s .15s ease both;
        }

        .pe-about-text h2 {
          font-size: clamp(34px, 4.5vw, 52px);
          line-height: 1.12;
          color: var(--steel-900);
        }

        .pe-about-text p {
          max-width: 700px;
          margin: 22px auto 0;
          color: var(--muted);
        }

        .pe-checks {
          list-style: none;
          padding: 0;
          margin: 28px auto 32px;
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 16px;
          max-width: 700px;
          text-align: left;
        }

        .pe-checks li {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          font-weight: 500;
          transition: transform .25s ease;
        }

        .pe-checks li:hover {
          transform: translateX(5px);
        }

        .pe-checks svg {
          color: var(--weld);
          flex-shrink: 0;
          margin-top: 3px;
        }

        .pe-about-text .pe-link {
          justify-content: center;
        }

        /* SERVICES */

        .pe-services {
          background: var(--white);
        }

        .pe-service-list {
          border-top: 2px solid var(--steel-900);
        }

        .pe-service {
          display: grid;
          grid-template-columns: 64px 280px 1fr;
          gap: 28px;
          align-items: center;
          padding: 30px 0;
          border-bottom: 1px solid var(--steel-100);
          transition: padding .3s ease, background .3s ease;
          animation: pe-fade-up .8s ease both;
        }

        .pe-service:nth-child(2) { animation-delay: .12s; }
        .pe-service:nth-child(3) { animation-delay: .24s; }

        .pe-service:hover {
          padding-left: 14px;
          background: linear-gradient(
            90deg,
            rgba(255,241,232,.75),
            transparent 75%
          );
        }

        .pe-service-icon {
          width: 56px;
          height: 56px;
          display: grid;
          place-items: center;
          background: var(--weld-soft);
          color: var(--weld-dark);
          border-radius: 5px;
          transition: all .35s ease;
        }

        .pe-service:hover .pe-service-icon {
          background: var(--weld);
          color: #fff;
          transform: rotate(-7deg) scale(1.1);
          box-shadow: 0 8px 20px rgba(232,89,12,.22);
        }

        .pe-service h3 {
          font-size: 22px;
          font-weight: 700;
          color: var(--steel-900);
          transition: color .25s ease;
        }

        .pe-service:hover h3 {
          color: var(--weld-dark);
        }

        .pe-service p {
          color: var(--muted);
        }

        /* INDUSTRIES */

        .pe-industries {
          background:
            radial-gradient(
              circle at 90% 10%,
              rgba(232,89,12,.13),
              transparent 30%
            ),
            var(--steel-900);
          color: #fff;
          position: relative;
          overflow: hidden;
        }

        .pe-industries::after {
          content: "P";
          position: absolute;
          right: -25px;
          bottom: -180px;
          font-family: var(--head);
          font-size: 500px;
          font-weight: 800;
          line-height: 1;
          color: rgba(255,255,255,.025);
          pointer-events: none;
        }

        .pe-industries .pe-container {
          position: relative;
          z-index: 1;
        }

        .pe-industries .pe-head h2 {
          color: #fff;
        }

        .pe-industries .pe-head p {
          color: var(--steel-300);
        }

        .pe-ind-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 16px;
        }

        .pe-ind {
          background: rgba(255,255,255,.05);
          border: 1px solid rgba(255,255,255,.12);
          border-radius: 6px;
          padding: 26px;
          min-height: 170px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          transition: all .35s ease;
          animation: pe-card-in .8s ease both;
        }

        .pe-ind:nth-child(2) { animation-delay: .1s; }
        .pe-ind:nth-child(3) { animation-delay: .2s; }
        .pe-ind:nth-child(4) { animation-delay: .3s; }

        .pe-ind:hover {
          background: rgba(255,255,255,.1);
          border-color: var(--weld);
          transform: translateY(-9px);
          box-shadow: 0 15px 35px rgba(0,0,0,.2);
        }

        .pe-ind svg {
          color: #f18a50;
          transition: transform .35s ease;
        }

        .pe-ind:hover svg {
          transform: scale(1.2) rotate(-8deg);
        }

        .pe-ind span {
          font-family: var(--head);
          font-size: 19px;
          font-weight: 600;
          line-height: 1.25;
        }

        /* CLIENTS */

        .pe-clients {
          background: var(--paper);
        }

        .pe-client-grid {
          display: grid;
          grid-template-columns: repeat(6, 1fr);
          background: var(--white);
          border: 1px solid var(--steel-100);
          border-radius: 6px;
          overflow: hidden;
        }

        .pe-client {
          min-height: 96px;
          display: grid;
          place-items: center;
          padding: 14px;
          text-align: center;
          border-right: 1px solid var(--steel-100);
          font-family: var(--head);
          font-weight: 700;
          color: var(--steel-600);
          letter-spacing: .4px;
          transition: all .3s ease;
        }

        .pe-client:hover {
          background: #fff7f1;
          color: var(--weld-dark);
          transform: scale(1.04);
          box-shadow: inset 0 -3px var(--weld);
        }

        .pe-client:last-child {
          border-right: 0;
        }

        .pe-note {
          color: var(--muted);
          font-size: 13px;
          margin-top: 16px !important;
        }

        /* PROCESS */

        .pe-process {
          background: var(--white);
        }

        .pe-steps {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 32px;
          counter-reset: step;
        }

        .pe-step {
          border-top: 3px solid var(--steel-100);
          padding-top: 22px;
          position: relative;
          transition: border-color .3s ease, transform .3s ease;
        }

        .pe-step:hover {
          border-color: var(--weld);
          transform: translateY(-7px);
        }

        .pe-step::before {
          counter-increment: step;
          content: counter(step);
          position: absolute;
          top: -3px;
          left: 0;
          width: 56px;
          border-top: 3px solid var(--weld);
          padding-top: 18px;
          font-family: var(--head);
          font-weight: 800;
          font-size: 30px;
          color: var(--weld-dark);
          line-height: 1;
          transition: transform .3s ease;
        }

        .pe-step:hover::before {
          transform: translateY(-5px);
        }

        .pe-step h3 {
          font-size: 21px;
          font-weight: 700;
          color: var(--steel-900);
          margin: 44px 0 10px;
        }

        .pe-step p {
          color: var(--muted);
        }

        /* FINAL CTA */

        .pe-cta {
          position: relative;
          overflow: hidden;
          background:
            radial-gradient(
              ellipse at 90% 50%,
              rgba(232,89,12,.4) 0%,
              rgba(232,89,12,.16) 30%,
              transparent 62%
            ),
            linear-gradient(
              115deg,
              #0b202c 0%,
              #172d3a 55%,
              #3b2a25 100%
            );
          color: #fff;
          padding: 76px 0;
        }

        .pe-cta::before {
          content: "";
          position: absolute;
          width: 300px;
          height: 300px;
          right: -90px;
          top: -160px;
          border-radius: 50%;
          background: rgba(232,89,12,.2);
          filter: blur(75px);
          pointer-events: none;
          animation: pe-pulse 6s ease-in-out infinite;
        }

        .pe-cta-inner {
          position: relative;
          z-index: 1;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 36px;
        }

        .pe-cta h2 {
          font-size: clamp(28px, 3.6vw, 42px);
          font-weight: 700;
          line-height: 1.15;
          max-width: 640px;
        }

        .pe-cta p {
          margin-top: 12px;
          max-width: 560px;
          color: #c6d4dd;
        }

        .pe-cta-actions {
          display: grid;
          gap: 14px;
          min-width: 230px;
        }

        .pe-cta .pe-btn {
          background: var(--weld);
          border: 1px solid var(--weld);
          color: #fff;
        }

        .pe-cta .pe-btn:hover {
          background: var(--weld-dark);
          border-color: var(--weld-dark);
        }

        .pe-phone {
          color: #fff;
          text-decoration: none;
          font-weight: 600;
          text-align: center;
          display: flex;
          gap: 8px;
          align-items: center;
          justify-content: center;
          transition: color .25s ease, transform .25s ease;
        }

        .pe-phone:hover {
          color: #f3a77d;
          transform: translateY(-3px);
        }

        /* RESPONSIVE */

        @media (max-width: 960px) {
          .pe-hero-grid {
            grid-template-columns: 1fr;
            gap: 44px;
          }

          .pe-trust-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .pe-trust-item:nth-child(2) {
            border-right: 0;
          }

          .pe-trust-item:nth-child(3) {
            padding-left: 0;
          }

          .pe-trust-item:nth-child(-n+2) {
            border-bottom: 1px solid var(--steel-100);
          }

          .pe-service {
            grid-template-columns: 56px 1fr;
          }

          .pe-service p {
            grid-column: 2;
          }

          .pe-ind-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .pe-client-grid {
            grid-template-columns: repeat(3, 1fr);
          }

          .pe-client:nth-child(3) {
            border-right: 0;
          }

          .pe-client:nth-child(-n+3) {
            border-bottom: 1px solid var(--steel-100);
          }

          .pe-steps {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 640px) {
          .pe-container {
            width: calc(100% - 36px);
          }

          .pe-hero {
            padding-top: 64px;
          }

          .pe-hero-grid {
            padding-bottom: 64px;
          }

          .pe-section {
            padding: 68px 0;
          }

          .pe-logo-mark {
            width: 50px;
            height: 50px;
            font-size: 32px;
          }

          .pe-logo-name strong {
            font-size: 14px;
          }

          .pe-head-row,
          .pe-cta-inner {
            flex-direction: column;
            align-items: flex-start;
          }

          .pe-ind-grid {
            grid-template-columns: 1fr;
          }

          .pe-ind {
            min-height: 130px;
          }

          .pe-client-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .pe-client {
            border-bottom: 1px solid var(--steel-100);
            border-right: 1px solid var(--steel-100);
          }

          .pe-client:nth-child(even) {
            border-right: 0;
          }

          .pe-client:nth-last-child(-n+2) {
            border-bottom: 0;
          }

          .pe-actions .pe-btn,
          .pe-cta-actions {
            width: 100%;
          }

          .pe-about {
            min-height: 420px;
            padding: 40px 0;
          }

          .pe-about-watermark {
            width: 95vw;
            height: 95vw;
            font-size: 82vw;
            border-bottom-width: 18px;
            filter: blur(16px);
          }

          .pe-checks {
            grid-template-columns: 1fr;
          }

          .pe-service {
            gap: 16px;
          }

          .pe-industries::after {
            font-size: 300px;
            bottom: -100px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .pe-home *,
          .pe-home *::before,
          .pe-home *::after {
            animation: none !important;
            transition: none !important;
            scroll-behavior: auto !important;
          }
        }
      `}</style>

      <main className="pe-home">

        {/* HERO */}
        <section className="pe-hero">
          <div className="pe-container pe-hero-grid">

            <div className="pe-hero-copy">

              <div className="pe-logo-area">
                <div className="pe-logo-mark" aria-label="Prathamesh Enterprises logo">
                  P
                </div>

                <div className="pe-logo-name">
                  <strong>PRATHAMESH ENTERPRISES</strong>
                  <span>Industrial Fabrication</span>
                </div>
              </div>

              <div className="pe-hero-tag">
                Industrial fabrication and engineering
              </div>

              <h1>
                Built on 18 years of experience.
                <span>Driven by precision.</span>
              </h1>

              <p className="pe-hero-text">
                Prathamesh Enterprises delivers dependable industrial fabrication,
                shaped around your drawings, specifications and project needs.
              </p>

              <div className="pe-actions">
                <Link to="/enquiry" className="pe-btn pe-btn-primary">
                  Discuss your project <ArrowUpRight size={18} />
                </Link>

                <Link to="/services" className="pe-btn pe-btn-ghost">
                  Explore our services <ArrowRight size={18} />
                </Link>
              </div>
            </div>

            <aside
              className="pe-brief"
              aria-label="What to send with your enquiry"
            >
              <h2>Ready to get a quote?</h2>
              <p>Keep these handy when you send your enquiry:</p>

              <ul>
                <li><FileText size={18} /> Drawings or sketches</li>
                <li><FileText size={18} /> Material and specification details</li>
                <li><FileText size={18} /> Quantity and delivery timeline</li>
              </ul>

              <Link to="/enquiry" className="pe-btn pe-btn-primary">
                Send an enquiry <ArrowUpRight size={18} />
              </Link>
            </aside>
          </div>
        </section>

        {/* TRUST BAR */}
        <section className="pe-trust">
          <div className="pe-container pe-trust-grid">
            {highlights.map((item) => {
              const Icon = item.icon;

              return (
                <div className="pe-trust-item" key={item.value}>
                  <Icon className="pe-trust-icon" size={28} />

                  <div>
                    <strong>{item.value}</strong>
                    <span>{item.label}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* ABOUT */}
        <section className="pe-section">
          <div className="pe-container pe-about">

            <div className="pe-about-watermark" aria-hidden="true">
              P
            </div>

            <div className="pe-about-text">
              <h2>
                Experience that understands industrial requirements.
              </h2>

              <p>
                With 18 years in the fabrication industry, Prathamesh Enterprises
                works to your project requirements, specifications and quality
                expectations.
              </p>

              <ul className="pe-checks">
                <li><CheckCircle2 size={19} /> 18 years of industry experience</li>
                <li><CheckCircle2 size={19} /> Project-focused fabrication approach</li>
                <li><CheckCircle2 size={19} /> Experience across industrial sectors</li>
                <li><CheckCircle2 size={19} /> Focus on quality and dependable execution</li>
              </ul>

              <Link to="/about" className="pe-link">
                About our company <ArrowUpRight size={17} />
              </Link>
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section className="pe-section pe-services">
          <div className="pe-container">
            <div className="pe-head-row">
              <div className="pe-head">
                <h2>Fabrication solutions shaped around your needs.</h2>
                <p>
                  We work with you to understand your project requirements and
                  provide the right fabrication solution.
                </p>
              </div>

              <Link
                to="/services"
                className="pe-link"
                style={{ marginBottom: 48 }}
              >
                View all services <ArrowUpRight size={17} />
              </Link>
            </div>

            <div className="pe-service-list">
              {services.map((service) => {
                const Icon = service.icon;

                return (
                  <article className="pe-service" key={service.title}>
                    <div className="pe-service-icon">
                      <Icon size={26} />
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
            <div className="pe-head">
              <h2>Supporting industries where quality matters.</h2>
              <p>
                Our experience spans industrial environments, including
                pharmaceutical and manufacturing sectors.
              </p>
            </div>

            <div className="pe-ind-grid">
              {industries.map((item) => {
                const Icon = item.icon;

                return (
                  <div className="pe-ind" key={item.name}>
                    <Icon size={30} />
                    <span>{item.name}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CLIENT EXPERIENCE */}
        <section className="pe-section pe-clients">
          <div className="pe-container">
            <div className="pe-head">
              <h2>Experience across recognised companies.</h2>
              <p>
                These company names reflect business experience shared with us.
                They are text references, not endorsements or official partnerships.
              </p>
            </div>

            <div className="pe-client-grid">
              {clients.map((client) => (
                <div className="pe-client" key={client}>
                  {client}
                </div>
              ))}
            </div>

            <p className="pe-note">
              Company names are shown for experience reference only. No endorsement
              or affiliation is implied.
            </p>
          </div>
        </section>

        {/* PROCESS */}
        <section className="pe-section pe-process">
          <div className="pe-container">
            <div className="pe-head">
              <h2>A practical approach to every project.</h2>
              <p>
                Clear communication and a shared understanding of requirements
                set up every project for success.
              </p>
            </div>

            <div className="pe-steps">
              {steps.map((step) => (
                <div className="pe-step" key={step.title}>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="pe-cta">
          <div className="pe-container pe-cta-inner">
            <div>
              <h2>
                Have a fabrication requirement? Let's discuss your project.
              </h2>

              <p>
                Share your project details with Prathamesh Enterprises and we'll
                get in touch to understand your requirements.
              </p>
            </div>

            <div className="pe-cta-actions">
              <Link to="/enquiry" className="pe-btn">
                Send an enquiry <ArrowUpRight size={18} />
              </Link>

              <a href="tel:+919850987474" className="pe-phone">
                <Phone size={16} /> 9850987474
              </a>
            </div>
          </div>
        </section>

      </main>
    </>
  );
}

export default Home;
