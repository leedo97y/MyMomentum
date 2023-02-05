const body = document.body;

const today = new Date();
const hours = today.getHours();

const sunnyImages = ["sunny1.png", "sunny2.jpg", "sunny3.jpg", "sunny4.png"];
const sunsetImages = ["sunset1.jpg", "sunset2.jpg", "sunset3.jpg"];
const nightImages = ["night1.png", "night2.jpg"];

if (hours < 5 || hours >= 19) {
  const randomBg3 = nightImages[Math.floor(Math.random() * nightImages.length)];
  body.style.backgroundImage = `linear-gradient(
      rgba(0, 0, 0, 0.15),
      rgba(0, 0, 0, 0.15)
    ),url("img/${randomBg3}")`;
  body.style.backgroundSize = "cover";
} else if (hours < 19 && hours >= 15) {
  const randomBg2 =
    sunsetImages[Math.floor(Math.random() * sunsetImages.length)];
  body.style.backgroundImage = `linear-gradient(
      rgba(0, 0, 0, 0.15),
      rgba(0, 0, 0, 0.15)
    ),url("img/${randomBg2}")`;
  body.style.backgroundSize = "cover";
} else if (hours < 15 && hours >= 5) {
  const randomBg1 = sunnyImages[Math.floor(Math.random() * sunnyImages.length)];
  body.style.backgroundImage = `linear-gradient(
      rgba(0, 0, 0, 0.15),
      rgba(0, 0, 0, 0.15)
    ),url("img/${randomBg1}")`;
  body.style.backgroundSize = "cover";
}
