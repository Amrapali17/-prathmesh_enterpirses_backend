
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

function Button({
  children,
  to,
  href,
  onClick,
  variant = "primary",
  size = "medium",
  icon = true,
  type = "button",
  className = "",
  disabled = false,
  target,
  ...props
}) {
  const classes = [
    "pe-button",
    `pe-button-${variant}`,
    `pe-button-${size}`,
    className
  ].filter(Boolean).join(" ");

  const content = (
    <>
      <span>{children}</span>
      {icon && <ArrowUpRight size={17} />}
    </>
  );

  return (
    <>
      <style>{`
        .pe-button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          border: 1px solid transparent;
          font-size: 11px;
          font-weight: 800;
          letter-spacing: .6px;
          text-decoration: none;
          cursor: pointer;
          transition: .25s ease;
          font-family: inherit;
        }

        .pe-button:hover:not(:disabled) {
          transform: translateY(-3px);
        }

        .pe-button:disabled {
          opacity: .55;
          cursor: not-allowed;
          transform: none;
        }

        .pe-button-primary {
          background: #102b3a;
          color: #ffffff;
          border-color: #102b3a;
        }

        .pe-button-primary:hover:not(:disabled) {
          background: #1685aa;
          border-color: #1685aa;
        }

        .pe-button-secondary {
          background: #72c9e7;
          color: #092330;
          border-color: #72c9e7;
        }

        .pe-button-secondary:hover:not(:disabled) {
          background: #ffffff;
          border-color: #ffffff;
        }

        .pe-button-outline {
          background: transparent;
          color: #102b3a;
          border-color: #102b3a;
        }

        .pe-button-outline:hover:not(:disabled) {
          background: #102b3a;
          color: #ffffff;
        }

        .pe-button-light {
          background: #ffffff;
          color: #102b3a;
          border-color: #ffffff;
        }

        .pe-button-light:hover:not(:disabled) {
          background: #72c9e7;
          border-color: #72c9e7;
        }

        .pe-button-small {
          padding: 12px 16px;
        }

        .pe-button-medium {
          padding: 16px 21px;
        }

        .pe-button-large {
          padding: 19px 26px;
          font-size: 12px;
        }

        .pe-button-full {
          width: 100%;
        }

        @media(max-width: 480px) {
          .pe-button-mobile-full {
            width: 100%;
          }
        }
      `}</style>

      {to ? (
        <Link
          to={to}
          className={classes}
          aria-disabled={disabled}
          {...props}
        >
          {content}
        </Link>
      ) : href ? (
        <a
          href={href}
          className={classes}
          target={target}
          rel={target === "_blank" ? "noreferrer" : undefined}
          aria-disabled={disabled}
          {...props}
        >
          {content}
        </a>
      ) : (
        <button
          type={type}
          className={classes}
          onClick={onClick}
          disabled={disabled}
          {...props}
        >
          {content}
        </button>
      )}
    </>
  );
}

export default Button;
