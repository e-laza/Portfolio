const CONFIG = {
  breakpoints: { desktopMinWidth: 1024 },
  grid: { minAcceptableEyeSize: 140, resizeDebounceMs: 150 },
  presets: [
    { minWidth: 1680, cols: 5, rows: 4 },
    { minWidth: 1280, cols: 4, rows: 3 },
    { minWidth: 1024, cols: 3, rows: 3 },
  ],
  selectors: { eyesContainer: '.eyes-background' },
  enableDebug: false,
};

const container = document.querySelector(CONFIG.selectors.eyesContainer);
if (!container) {
  if (CONFIG.enableDebug) {
    console.warn('eyes-grid: container not found');
  }
} else {
  const template = `
<svg class="bg-eye" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 321 321" preserveAspectRatio="xMidYMid meet" aria-hidden="true">
  <defs>
    <clipPath id="iris-clip__UID__">
      <path class="iris-move-area" d="M269.909,182.328c-3.083,3.315-7.392,7.451-12.9,11.897-4.928,3.976-10.799,8.212-17.612,12.348-12.458,7.571-30.197,16.083-51.775,20.259-7.412,1.432-15.275,2.363-23.541,2.554l-6.45.01c-8.413-.13-16.434-1.032-23.973-2.464-21.578-4.096-39.337-12.528-51.815-20.039-6.833-4.106-12.723-8.312-17.661-12.278-5.517-4.426-9.847-8.532-12.949-11.847.226-.21.452-.431.687-.661,5.988-5.798,14.117-13.66,24.229-21.591,14.421-11.306,32.628-22.284,54.707-28.002,9.1-2.363,18.81-3.755,29.108-3.765h.815c10.161,0,19.742,1.342,28.745,3.635h.01c22.089,5.628,40.862,16.515,55.333,27.772l.01.01c10.161,7.891,18.329,15.733,24.346,21.501.236.22.461.441.687.661Z"/>
    </clipPath>
  </defs>
  <g class="eye">
    <path class="eye-outline" d="M314.678,129.345c-5.63-2.94-12.58-.75-15.51,4.88l-14.82,28.42c-6.04-5.66-14.12-13.02-24.07-20.56l12.94-26.67c2.78-5.71.39-12.59-5.32-15.37-5.72-2.77-12.59-.39-15.37,5.33l-11.49,23.67c-7.35-4.41-15.35-8.56-23.98-12.1l7.49-23.61c1.92-6.06-1.43-12.52-7.49-14.44-6.05-1.92-12.52,1.43-14.44,7.48l-7.42,23.41c-7.36-1.82-15.08-3.12-23.13-3.75l-.11-26.18c-.03-6.33-5.17-11.44-11.5-11.44h-.05c-6.35.02-11.48,5.19-11.45,11.55l.11,26.1c-7.19.57-14.12,1.68-20.76,3.22l-6.62-22.76c-1.77-6.1-8.15-9.61-14.25-7.84-6.1,1.78-9.61,8.16-7.83,14.26l6.74,23.22c-9.57,3.78-18.4,8.33-26.43,13.19l-11.58-23.62c-2.8-5.7-9.69-8.06-15.39-5.26-5.7,2.79-8.06,9.68-5.26,15.39l13.04,26.62c-9.92,7.58-17.97,14.97-23.99,20.65l-14.92-28.36c-2.96-5.62-9.91-7.78-15.53-4.82-5.63,2.95-7.78,9.91-4.83,15.53l21.69,41.22.53.95c8.79,15.08,59.61,63.79,133.66,64.89h.05c.2.01.39.01.59.01.38.01.77.01,1.15.02.26.01.52.01.78.01h.96c.47,0,.94,0,1.41-.02.59,0,1.19-.01,1.78-.03h.05c73.94-1.4,124.54-50.2,133.37-65.37.06-.09.64-1.17.64-1.17l21.44-41.14c2.94-5.63.75-12.58-4.88-15.51ZM258.818,194.435c-5.02,3.97-11,8.2-17.94,12.33-12.69,7.56-30.76,16.06-52.74,20.23-7.55,1.43-15.56,2.36-23.98,2.55h-.15c-.62.02-1.23.03-1.86.02-.55.02-1.09.02-1.64.02-.88,0-1.77-.01-2.66-.03h-.26c-8.57-.13-16.74-1.03-24.42-2.46-21.98-4.09-40.07-12.51-52.78-20.01-6.96-4.1-12.96-8.3-17.99-12.26-5.62-4.42-10.03-8.52-13.19-11.83.23-.21.46-.43.7-.66,6.1-5.79,14.38-13.64,24.68-21.56,14.69-11.29,33.51-22.7,56-28.41,9.27-2.36,19.16-3.75,29.65-3.76h.83c10.35,0,20.11,1.34,29.28,3.63h.01c22.5,5.62,41.35,16.94,56.09,28.18l.01.01c10.35,7.88,18.67,15.71,24.8,21.47.24.22.47.44.7.66-3.14,3.31-7.53,7.44-13.14,11.88Z"/>
    <path class="eye-white" d="M271.922,182.602c-3.14,3.31-7.53,7.44-13.14,11.88-5.02,3.97-11,8.2-17.94,12.33-12.69,7.56-30.76,16.06-52.74,20.23-7.55,1.43-15.56,2.36-23.98,2.55l-6.57.01c-8.57-.13-16.74-1.03-24.42-2.46-21.98-4.09-40.07-12.51-52.78-20.01-6.96-4.1-12.96-8.3-17.99-12.26-5.62-4.42-10.03-8.52-13.19-11.83.23-.21.46-.43.7-.66,6.1-5.79,14.38-13.64,24.68-21.56,14.69-11.29,33.51-22.7,56-28.41,9.27-2.36,19.16-3.75,29.65-3.76h.83c10.35,0,20.11,1.34,29.28,3.63h.01c22.5,5.62,41.35,16.94,56.09,28.18l.01.01c10.35,7.88,18.67,15.71,24.8,21.47.24.22.47.44.7.66Z"/>
    <g class="iris-wrap" clip-path="url(#iris-clip__UID__)">
      <g class="iris">
        <ellipse class="iris-red" cx="159.791" cy="179.122" rx="50.625" ry="50.126"/>
        <ellipse class="iris-blue" cx="159.791" cy="179.122" rx="26.127" ry="25.869"/>
        <ellipse class="highlight" cx="167.342" cy="171.646" rx="7.551" ry="7.476"/>
      </g>
    </g>
  </g>
</svg>
  `;

  let eyes = [];
  let mouseX = 0;
  let mouseY = 0;
  let hasMouse = false;

  const parseVar = (value) => Number.parseFloat(String(value).replace('px', '')) || 0;

  const getPreset = (width) => CONFIG.presets.find((preset) => width >= preset.minWidth) || null;

  const clearGrid = () => {
    container.innerHTML = '';
    eyes = [];
  };

  const buildGrid = () => {
    clearGrid();

    if (window.innerWidth < CONFIG.breakpoints.desktopMinWidth) {
      return;
    }

    const styles = getComputedStyle(document.documentElement);
    const pagePad = parseVar(styles.getPropertyValue('--page-pad'));
    const gap = parseVar(styles.getPropertyValue('--grid-gap'));

    const preset = getPreset(window.innerWidth);
    if (!preset) {
      return;
    }

    const aw = Math.max(0, window.innerWidth - pagePad * 2);
    const ah = Math.max(0, window.innerHeight - pagePad * 2);
    const eyeSize = Math.min(
      (aw - (preset.cols - 1) * gap) / preset.cols,
      (ah - (preset.rows - 1) * gap) / preset.rows
    );

    if (eyeSize < CONFIG.grid.minAcceptableEyeSize) {
      return;
    }

    const gridWidth = eyeSize * preset.cols + gap * (preset.cols - 1);
    const gridHeight = eyeSize * preset.rows + gap * (preset.rows - 1);
    const startX = (window.innerWidth - gridWidth) / 2;
    const startY = (window.innerHeight - gridHeight) / 2;

    let index = 0;
    for (let row = 0; row < preset.rows; row += 1) {
      for (let col = 0; col < preset.cols; col += 1) {
        const uid = `i${index}`;
        const wrapper = document.createElement('div');
        wrapper.innerHTML = template.replace(/__UID__/g, uid).trim();
        const svg = wrapper.firstElementChild;
        if (!svg) continue;

        const x = startX + col * (eyeSize + gap);
        const y = startY + row * (eyeSize + gap);

        svg.style.position = 'absolute';
        svg.style.left = `${x}px`;
        svg.style.top = `${y}px`;
        svg.style.width = `${eyeSize}px`;
        svg.style.height = `${eyeSize}px`;
        svg.style.pointerEvents = 'none';

        const irisEl = svg.querySelector('.iris');
        container.appendChild(svg);

        eyes.push({
          x,
          y,
          size: eyeSize,
          cx: x + eyeSize / 2,
          cy: y + eyeSize / 2,
          row,
          col,
          el: svg,
          irisEl,
        });

        index += 1;
      }
    }
  };

  buildGrid();

  window.addEventListener('mousemove', (event) => {
    mouseX = event.clientX;
    mouseY = event.clientY;
    hasMouse = true;
  });

  // TODO: GSAP integration – iris follows mouse

  let resizeTimer = null;
  window.addEventListener('resize', () => {
    window.clearTimeout(resizeTimer);
    resizeTimer = window.setTimeout(buildGrid, CONFIG.grid.resizeDebounceMs);
  });
}
