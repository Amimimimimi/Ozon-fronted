const circle = document.getElementById('progressCircle');
const circleWrap = document.getElementById('progressBox');
const valueE1 = document.getElementById('valueInput');
const animateE1 = document.getElementById('animateInput');
const hideE1 = document.getElementById('hideInput');

const radius = 64;
const circumference = 2 * Math.PI * radius;

circle.style.strokeDasharray = String(circumference);
circle.style.strokeDashoffset = String(circumference);

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

function setProgress(value) {
  const safeValue = clamp(Number(value) || 0, 0, 100);
  const offset = circumference * (1 - safeValue / 100);
  circle.style.strokeDashoffset = String(offset);
}

function updateValue() {
  const safeValue = clamp(Number(valueE1.value) || 0, 0, 100);
  valueE1.value = String(safeValue);
  setProgress(safeValue);
}

function updateAnimation() {
  circleWrap.classList.toggle('is-animated', animateE1.checked);
}

function updateVisibility() {
  circleWrap.classList.toggle('is-hidden', hideE1.checked);
}

valueE1.addEventListener('input', updateValue);
valueE1.addEventListener('change', updateValue);

animateE1.addEventListener('change', updateAnimation);
hideE1.addEventListener('change', updateVisibility);

updateValue();
updateAnimation();
updateVisibility();
