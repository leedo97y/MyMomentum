const body = document.body;
const images = [
  "0.jpg",
  "2.jpg",
  "3.jpg",
  "4.jpg",
  "5.jpg",
  "6.jpg",
  "7.jpg",
  "8.jpg",
];

const randomBg = images[Math.floor(Math.random() * images.length)];

body.style.backgroundImage = `linear-gradient(
  rgba(0, 0, 0, 0.3),
  rgba(0, 0, 0, 0.3)
),url("img/${randomBg}")`;
