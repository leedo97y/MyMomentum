const searchForm = document.querySelector("#search-form");
const searchInput = document.querySelector("#search-form input");
const searchButton = document.querySelector("#search-form button");

function handleSearchButton(event) {
  event.preventDefault();
  // 1. get input value
  // 2. search for it
  let searchValue = searchInput.value;

  location.href = "https://www.google.co.kr/search?q=" + searchValue;
}

searchForm.addEventListener("submit", handleSearchButton);
