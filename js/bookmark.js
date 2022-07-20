const bookmarkButton = document.querySelector("#bookmark-button");
const bookmarkBody = document.querySelector("#bookmark-body");
const cancelButton = document.querySelector("#cancel-button");

const hidden = "hidden";

function showBookmark() {
  bookmarkBody.classList.remove(hidden);
  bookmarkButton.classList.add(hidden);
}

function hideBookmark() {
  bookmarkBody.classList.add(hidden);
  bookmarkButton.classList.remove(hidden);
}

bookmarkButton.addEventListener("click", showBookmark);
cancelButton.addEventListener("click", hideBookmark);

const bookmarkForm = document.querySelector("#bookmark-form");
const bookmarkName = document.querySelector("#bookmark-form input:first-child");
const bookmarkUrl = document.querySelector("#bookmark-form input:last-child");

function handleBookmarkSubmit(event) {
  event.preventDefault();

  const name = bookmarkName.value;
  const url = bookmarkUrl.value;
}

bookmarkForm.addEventListener("submit", handleBookmarkSubmit);
