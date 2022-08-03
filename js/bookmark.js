// bookmark 나타내기, 숨기기
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

// bookmark 내용 채우기, 삭제하기
const bookmarkForm = document.querySelector("#bookmark-form");
const bookmarkName = document.querySelector("#bookmark-form input:first-child");
const bookmarkUrl = document.querySelector("#bookmark-form input:last-child");
const bookmarkList = document.querySelector("#bookmark-list");

let bookmarks = [];

function saveBookmarks() {
  localStorage.setItem("bookmark", JSON.stringify(bookmarks));
}

function handleBookmarkSubmit(event) {
  event.preventDefault();

  const name = bookmarkName.value;
  const url = bookmarkUrl.value;
  bookmarkName.value = "";
  bookmarkUrl.value = "";

  const bookmarkObj = {
    text: name,
    url: url,
    id: Date.now(),
  };

  bookmarks.push(bookmarkObj);
  handleBookmarkText(bookmarkObj);
  saveBookmarks();
}

function handleBookmarkText(bookmark) {
  const li = document.createElement("li");
  li.id = bookmark.id;
  const aTag = document.createElement("a");
  aTag.href = bookmark.url;
  const span = document.createElement("span");
  span.innerText = bookmark.text;
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "X";
  deleteButton.addEventListener("click", handleDeleteBookmark);

  aTag.appendChild(span);
  li.appendChild(aTag);
  li.appendChild(deleteButton);
  bookmarkList.appendChild(li);
}

function handleDeleteBookmark(event) {
  const liParent = event.target.parentElement;
  liParent.remove();

  bookmarks.filter((bookmark) => {
    bookmark.id !== parseInt(liParent.id);
  });

  saveBookmarks();
}

bookmarkForm.addEventListener("submit", handleBookmarkSubmit);

const savedBookmark = localStorage.getItem("bookmark");
if (savedBookmark !== null) {
  const parsedBookmark = JSON.parse(savedBookmark);
  bookmarks = parsedBookmark;
  parsedBookmark.forEach(handleBookmarkText);
}

// 추가랑 삭제는 되는데 왜 열리질 않지..?
