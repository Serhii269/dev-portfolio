const img = document.querySelector(".right-side-hero img");

img.addEventListener("mousemove", (e) => {
  const rect = img.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;
  const cx = rect.width / 2;
  const cy = rect.height / 2;

  const dx = x - cx;
  const dy = y - cy;

  const tiltX = (dy / cy) * 15;
  const tiltY = -(dx / cx) * 15;

  img.style.transform = `rotateX(${tiltX}deg) rotateY(${tiltY}deg)`;
});

img.addEventListener("mouseleave", () => {
  img.style.transform = `rotateX(0deg) rotateY(0deg)`;
});
