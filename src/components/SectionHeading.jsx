
function SectionHeading({
    eyebrow = "Prathamesh Enterprises",
    title,
    description,
    align = "left",
    light = false,
    className = ""
  }) {
    return (
      <>
        <style>{`
          .pe-section-heading {
            max-width: 760px;
            margin-bottom: 42px;
          }
  
          .pe-section-heading.center {
            text-align: center;
            margin-left: auto;
            margin-right: auto;
          }
  
          .pe-section-heading.center .pe-section-eyebrow {
            justify-content: center;
          }
  
          .pe-section-eyebrow {
            display: flex;
            align-items: center;
            gap: 11px;
            color: #1685aa;
            font-size: 10px;
            font-weight: 800;
            letter-spacing: 2px;
            text-transform: uppercase;
          }
  
          .pe-section-eyebrow::before {
            content: "";
            width: 25px;
            height: 2px;
            background: currentColor;
          }
  
          .pe-section-heading h2 {
            color: #142e3b;
            font-size: clamp(30px, 4vw, 46px);
            line-height: 1.17;
            letter-spacing: -1.7px;
            margin: 16px 0;
          }
  
          .pe-section-heading p {
            color: #71818a;
            font-size: 13px;
            line-height: 1.9;
            margin: 0;
          }
  
          .pe-section-heading.light .pe-section-eyebrow {
            color: #72c9e7;
          }
  
          .pe-section-heading.light h2 {
            color: #ffffff;
          }
  
          .pe-section-heading.light p {
            color: #b8cbd4;
          }
  
          @media(max-width: 600px) {
            .pe-section-heading {
              margin-bottom: 30px;
            }
  
            .pe-section-heading h2 {
              letter-spacing: -1px;
            }
          }
        `}</style>
  
        <div
          className={`
            pe-section-heading
            ${align === "center" ? "center" : ""}
            ${light ? "light" : ""}
            ${className}
          `}
        >
          {eyebrow && (
            <span className="pe-section-eyebrow">
              {eyebrow}
            </span>
          )}
  
          {title && <h2>{title}</h2>}
  
          {description && <p>{description}</p>}
        </div>
      </>
    );
  }
  
  export default SectionHeading;
  