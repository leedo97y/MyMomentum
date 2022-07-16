const datePart = document.querySelector("#date");
const clockPart = document.querySelector("#clock");

// date part
function date() {
  const today = new Date();

  const monthText = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12",
  ];
  const dayText = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const year = today.getFullYear();
  const month = monthText[today.getMonth()];
  const date = today.getDate();
  const day = dayText[today.getDay()];

  datePart.innerText = `${year} ${month}/${date} ${day}`;
}

// clock part
function clock() {
  const today = new Date();

  const hours = today.getHours();
  const minutes = today.getMinutes();
  const seconds = today.getSeconds();

  clockPart.innerText = `${hours}:${minutes}:${seconds}`;
}

date();
clock();
setInterval(clock, 1000);
