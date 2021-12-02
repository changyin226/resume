export default function initSr() {
  const defaultProps = {
    easing: "cubic-bezier(0.5, 0, 0, 1)",
    distance: "30px",
    duration: 1000,
    desktop: true,
    mobile: true,
  };

  /* Section Title */
  ScrollReveal().reveal(
    ".section-title",
    {
      delay: 300,
      distance: "0px",
      origin: "bottom",
      ...defaultProps
    },
  );

  /* Title Section */
  ScrollReveal().reveal(
    ".title-info",
    {
      delay: 500,
      origin: "left",
      ...defaultProps
    },
  );

  ScrollReveal().reveal(
    ".title-btn-wrapper",
    {
      delay: 1000,
      origin: "left",
      ...defaultProps
    },
  );

  /* About Section */
  ScrollReveal().reveal(
    ".about-wrapper-image",
    {
      delay: 600,
      origin: window.innerWidth > 767 ? "left" : "bottom",
      ...defaultProps
    },
  );

  ScrollReveal().reveal(
    ".about-wrapper-info",
    {
      delay: window.innerWidth > 767 ? 1000 : 800,
      origin: window.innerWidth > 767 ? "right" : "bottom",
      ...defaultProps
    },
  );

  /* Skills Section */
  ScrollReveal().reveal(
    ".skill-first",
    {
      delay: 600,
      origin: "bottom",
      ...defaultProps
    },
  );

  ScrollReveal().reveal(
    ".skill-second",
    {
      delay: window.innerWidth > 575 ? 1000 : 600,
      origin: "bottom",
      ...defaultProps
    },
  );

  ScrollReveal().reveal(
    ".skill-third",
    {
      delay: window.innerWidth > 575 ? 1400 : 600,
      origin: "bottom",
      ...defaultProps
    },
  );

  /* experiences Section */
  ScrollReveal().reveal(
    ".experience-first",
    {
      delay: window.innerWidth > 575 ? 600 : 600,

      origin: "right",
      ...defaultProps
    },
  );

  ScrollReveal().reveal(
    ".experience-second",
    {
      delay: window.innerWidth > 575 ? 700 : 600,

      origin: "right",
      ...defaultProps
    },
  );

  ScrollReveal().reveal(
    ".experience-third",
    {
      delay: window.innerWidth > 575 ? 800 : 600,

      origin: "right",
      ...defaultProps
    },
  );

  ScrollReveal().reveal(
    ".experience-fourth",
    {
      delay: window.innerWidth > 575 ? 900 : 600,

      origin: "right",
      ...defaultProps
    },
  );
  
  /* Projects Section */
  ScrollReveal().reveal(
    ".project-wrapper-text",
    {
      delay: 600,
      origin: window.innerWidth > 767 ? "left" : "bottom",
      ...defaultProps
    },
  );

  ScrollReveal().reveal(
    ".project-wrapper-image",
    {
      delay: window.innerWidth > 767 ? 1000 : 600,
      origin: window.innerWidth > 767 ? "right" : "bottom",
      ...defaultProps
    },
  );

  /* Contact Section */
  ScrollReveal().reveal(
    ".contact-wrapper",
    {
      delay: 800,
      origin: "bottom",
      ...defaultProps
    },
  );
}
