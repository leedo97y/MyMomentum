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
  const month = monthText[today.getMonth()].padStart(2, "0");
  const date = JSON.stringify(today.getDate()).padStart(2, "0");
  const day = dayText[today.getDay()];

  datePart.innerText = `${year} ${month}/${date} ${day}`;
}

// clock part
function clock() {
  const today = new Date();

  const hours = JSON.stringify(today.getHours()).padStart(2, "0");
  const minutes = JSON.stringify(today.getMinutes()).padStart(2, "0");
  const seconds = JSON.stringify(today.getSeconds()).padStart(2, "0");

  clockPart.innerText = `${hours}:${minutes}:${seconds}`;
}

date();
clock();
setInterval(clock, 1000);
