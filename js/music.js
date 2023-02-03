const musicPlay = document.querySelector("audio");
const musicName = document.querySelector("#music-name");

const musicArr = [
  "audio/Glimpsing Infinity - Asher Fulero.mp3",
  "audio/Swans In Flight - Asher Fulero.mp3",
  "audio/Your Love - Yung Logos.mp3",
  "audio/Snowfall Butterflies - Asher Fulero.mp3",
  "audio/Modern Attempt - TrackTribe.mp3",
  "audio/By the Fireplace - TrackTribe.mp3",
  "audio/The Thought of You - TrackTribe.mp3",
  "audio/In Memory of Jean Talon - Mini Vandals.mp3",
  "audio/Stairway - Patrick Patrikios.mp3",
];

const randomMusicSrc = musicArr[Math.floor(Math.random() * musicArr.length)];
const myAudio = new Audio();

musicPlay.attributes[1].value = randomMusicSrc;
myAudio.src = randomMusicSrc;
musicName.innerText = randomMusicSrc.slice(6, -4);
