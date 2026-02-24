import gsap from 'https://cdn.jsdelivr.net/npm/gsap@3.12.5/index.js';

const CONFIG = {
  selectors: {
    svg: '.logo-eye__svg',
    open: '.eye-open',
    closed: '.eye-closed',
  },
  blink: { dur: 0.13, hold: 0.09, ease: 'power3.inOut' },
  media: { hoverCapable: '(hover: hover) and (pointer: fine)' },
  enableDebug: false,
};

const svgs = Array.from(document.querySelectorAll(CONFIG.selectors.svg));
if (svgs.length === 0) {
  if (CONFIG.enableDebug) {
    console.warn('logo-eye: svg not found');
  }
}

const setupBlink = (svg) => {
  const open = svg.querySelector(CONFIG.selectors.open);
  const closed = svg.querySelector(CONFIG.selectors.closed);

  if (!open || !closed) {
    if (CONFIG.enableDebug) {
      console.warn('logo-eye: missing open/closed groups');
    }
    return;
  }

  gsap.set(open, { opacity: 1 });
  gsap.set(closed, { opacity: 0 });

  const blink = () => {
    const tl = gsap.timeline();
    tl.to(open, {
      opacity: 0,
      duration: CONFIG.blink.dur,
      ease: CONFIG.blink.ease,
    })
      .to(
        closed,
        {
          opacity: 1,
          duration: CONFIG.blink.dur,
          ease: CONFIG.blink.ease,
        },
        0
      )
      .to({}, { duration: CONFIG.blink.hold })
      .to(
        open,
        {
          opacity: 1,
          duration: CONFIG.blink.dur,
          ease: CONFIG.blink.ease,
        },
        '>'
      )
      .to(
        closed,
        {
          opacity: 0,
          duration: CONFIG.blink.dur,
          ease: CONFIG.blink.ease,
        },
        '<'
      );
  };

  const mql = window.matchMedia(CONFIG.media.hoverCapable);
  let hoverTimer = null;
  let isHovering = false;

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
    svg.addEventListener('mouseenter', onMouseEnter);
    svg.addEventListener('mouseleave', onMouseLeave);
  }

  if (!mql.matches) {
    if (hoverTimer) {
      window.clearTimeout(hoverTimer);
      hoverTimer = null;
    }
  }
};

svgs.forEach((svg) => setupBlink(svg));
