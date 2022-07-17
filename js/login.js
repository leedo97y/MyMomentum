const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const title = document.querySelector("title");

const greetings = document.querySelector("#greetings");

const USERID = "userId";

function onLoginSubmit(event) {
  event.preventDefault();

  const userId = loginInput.value;
  title.innerText = `${userId}'s page`;
  localStorage.setItem(USERID, userId);
  loginForm.classList.add("hidden");

  greetingText();
}

function greetingText() {
  const getUserId = localStorage.getItem(USERID);
  greetings.innerText = `Hello ${getUserId}, Welcome!`;
  // innerText를 지정해주고나면 clssList에서 hidden을 삭제해준다.(보이게)
  greetings.classList.remove("hidden");
}

const savedUserId = localStorage.getItem(USERID);

if (savedUserId === null) {
  // 저장된 userId가 없다면 로그인 form을 보이지 않게 만들어 준다.
  loginForm.classList.remove("hidden");
  // 그리고 입력한 아이디를 submit 해준다.
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  // 이 부분은 저장된 아이디가 있을떄 h1 부분에 innerText를 지정해주는 것이다.
  greetingText();
}
// 이렇게 하고 새로고침하면... 다시 form이 생성되기 때문에 애초에 login-form에 class="hidden"을 부여한다.

function loginFocus() {
  loginInput.placeholder = "";
}

function loginFocusOut() {
  loginInput.placeholder = "Enter your name!";
}

loginInput.addEventListener("focusin", loginFocus);
loginInput.addEventListener("focusout", loginFocusOut);
