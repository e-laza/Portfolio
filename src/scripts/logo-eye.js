import { gsap } from "gsap";

const CONFIG = {
  selectors: {
    svg: ".logo-eye__svg",
    open: ".eye-open",
    closed: ".eye-closed"
  },
  blink: { dur: 0.13, hold: 0.09, ease: "power3.inOut" },
  media: { hoverCapable: "(hover: hover) and (pointer: fine)" },
  enableDebug: false
};

const svg = document.querySelector(CONFIG.selectors.svg);
if (!svg) {
  if (CONFIG.enableDebug) {
    console.warn("logo-eye: svg not found");
  }
} else {
  const open = svg.querySelector(CONFIG.selectors.open);
  const closed = svg.querySelector(CONFIG.selectors.closed);

  if (!open || !closed) {
    if (CONFIG.enableDebug) {
      console.warn("logo-eye: missing open/closed groups");
    }
  } else {
    gsap.set(open, { opacity: 1 });
    gsap.set(closed, { opacity: 0 });

    const blink = () => {
      const tl = gsap.timeline();
      tl.to(open, {
        opacity: 0,
        duration: CONFIG.blink.dur,
        ease: CONFIG.blink.ease
      })
        .to(
          closed,
          {
            opacity: 1,
            duration: CONFIG.blink.dur,
            ease: CONFIG.blink.ease
          },
          0
        )
        .to({}, { duration: CONFIG.blink.hold })
        .to(
          open,
          {
            opacity: 1,
            duration: CONFIG.blink.dur,
            ease: CONFIG.blink.ease
          },
          ">"
        )
        .to(
          closed,
          {
            opacity: 0,
            duration: CONFIG.blink.dur,
            ease: CONFIG.blink.ease
          },
          "<"
        );
    };

    requestAnimationFrame(() => blink());

    const mql = window.matchMedia(CONFIG.media.hoverCapable);
    const homeAutoBlinkMql = window.matchMedia("(max-width: 1023px)");
    let hoverTimer = null;
    let isHovering = false;
    let homeBlinkTimer = null;

    const scheduleHoverBlink = () => {
      if (!isHovering) return;
      blink();
      hoverTimer = window.setTimeout(scheduleHoverBlink, 4000);
    };

    const onMouseEnter = () => {
      if (isHovering) return;
      isHovering = true;
      scheduleHoverBlink();
    };

    const onMouseLeave = () => {
      isHovering = false;
      if (hoverTimer) {
        window.clearTimeout(hoverTimer);
        hoverTimer = null;
      }
    };

    if (mql.matches) {
      svg.addEventListener("mouseenter", onMouseEnter);
      svg.addEventListener("mouseleave", onMouseLeave);
    }

    if (document.body.classList.contains("home") && homeAutoBlinkMql.matches) {
      homeBlinkTimer = window.setInterval(() => blink(), 4000);
    }
  }
}
