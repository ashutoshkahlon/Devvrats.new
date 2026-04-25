setTimeout(() => {
    const loader = document.getElementById("loader");
    const content = document.getElementById("main-content");
    loader.classList.add("fade-out");
    setTimeout(() => {
      loader.style.display = "none";
      content.classList.add("show");
    }, 1000);
  }, 3000);
  document.addEventListener("DOMContentLoaded", () => {
  const cmain = document.getElementById("cmain");

  document.addEventListener("mousemove", (e) => {
    const { clientX, clientY } = e;

    // Slight motion effect on logo
    const offsetX = (clientX - window.innerWidth / 2) * 0.01;
    const offsetY = (clientY - window.innerHeight / 2) * 0.01;
    cmain.style.transform = `translate(${offsetX}px, ${offsetY}px)`;

    // Move custom cursor
    const cursor = document.querySelector(".cursor-tracker");
    if (cursor) {
      cursor.style.left = `${clientX}px`;
      cursor.style.top = `${clientY}px`;
    }
  });
});

const para = document.getElementById("zoomPara");
const text = para.textContent;
para.textContent = ''; // Clear original text

for (let char of text) {
  const span = document.createElement('span');
  span.textContent = char;
  span.classList.add('zoom-letter');
  if (char === ' ') {
    span.style.width = '0.6em'; // Keep space visible
  }
  para.appendChild(span);
}
