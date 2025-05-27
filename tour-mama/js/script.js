// Initialize AOS animation library
AOS.init({
  duration: 800,
  once: true
});

// Custom Cursor
const cursor = document.querySelector('.cursor');
const cursorFollower = document.querySelector('.cursor-follower');

document.addEventListener('mousemove', (e) => {
  cursor.style.left = e.clientX + 'px';
  cursor.style.top = e.clientY + 'px';
  
  // Add slight delay to follower for smooth effect
  setTimeout(() => {
    cursorFollower.style.left = e.clientX + 'px';
    cursorFollower.style.top = e.clientY + 'px';
  }, 100);
});

// Change cursor style on hover interactive elements
const interactiveElements = document.querySelectorAll('button, a, .service-card, .country-card, .story-card');

interactiveElements.forEach(el => {
  el.addEventListener('mouseenter', () => {
    cursor.style.transform = 'scale(2)';
    cursorFollower.style.transform = 'scale(0.5)';
  });
  
  el.addEventListener('mouseleave', () => {
    cursor.style.transform = 'scale(1)';
    cursorFollower.style.transform = 'scale(1)';
  });
});

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