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

function handleBookmarkSubmit(event) {
  event.preventDefault();

  const li = document.createElement("li");
  const aTag = document.createElement("a");
  const span = document.createElement("span");
  const deleteButton = document.createElement("button");

  aTag.appendChild(span);
  li.appendChild(aTag);
  li.appendChild(deleteButton);
  bookmarkList.appendChild(li);

  const name = bookmarkName.value;
  const url = bookmarkUrl.value;

  aTag.href = url;
  span.innerText = name;
}
// 오류는 없는데 작동이 안됨, localStorage에 넣어야 하나? 그럼 구현 어떻게 해야하지
// 원인이 뭘까
bookmarkForm.addEventListener("submit", handleBookmarkSubmit);
