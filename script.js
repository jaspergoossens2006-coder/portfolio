const cursorDot = document.querySelector('.cursor-dot');
const cursorOutline = document.querySelector('.cursor-outline');

document.addEventListener('mousemove', (e) => {
  const x = e.clientX;
  const y = e.clientY;

  cursorDot.style.left = `${x}px`;
  cursorDot.style.top = `${y}px`;

  cursorOutline.style.left = `${x}px`;
  cursorOutline.style.top = `${y}px`;
});