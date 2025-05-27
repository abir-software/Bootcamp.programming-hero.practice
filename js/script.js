// Initialize AOS animation library
AOS.init({
  duration: 800,
  once: true
});

// Custom Cursor
const letters = [
  document.getElementById("a"),
  document.getElementById("b"),
  document.getElementById("i"),
  document.getElementById("r")
];

const positions = Array(letters.length).fill().map(() => ({ x: window.innerWidth / 2, y: window.innerHeight / 2 }));
const mouse = { x: window.innerWidth / 2, y: window.innerHeight / 2 };

document.addEventListener("mousemove", e => {
  mouse.x = e.clientX;
  mouse.y = e.clientY;
});

function animate() {
  // Lead cursor
  positions[0].x += (mouse.x - positions[0].x) * 0.2;
  positions[0].y += (mouse.y - positions[0].y) * 0.2;

  // Followers
  for (let i = 1; i < positions.length; i++) {
    positions[i].x += (positions[i - 1].x - positions[i].x) * 0.02;
    positions[i].y += (positions[i - 1].y - positions[i].y) * 0.02;
  }

  // Update styles
  letters.forEach((el, i) => {
    el.style.transform = `translate(${positions[i].x}px, ${positions[i].y}px)`;
  });

  requestAnimationFrame(animate);
}

animate();







// Floating Animation
document.addEventListener('DOMContentLoaded', () => {
  const floatingElements = document.querySelectorAll('.floating-element');
  
  floatingElements.forEach((el, index) => {
    // Randomize initial position and animation duration
    const randomX = Math.random() * 100 - 50;
    const randomY = Math.random() * 100 - 50;
    const duration = 15 + Math.random() * 10;
    
    el.style.transform = `translate(${randomX}px, ${randomY}px)`;
    el.style.animationDuration = `${duration}s`;
  });
});

