# MyMomentum

JS 챌린지 last 과제 - 나만의 페이지 만들기

<br>

더 다양한 기능을 넣고 싶었지만, 아이콘 넣고, 시간 표현 형식 다듬고, 상당히 할게 많아서 3일간 한 거 제외하고 앞으로도 추가적으로 보강할 생각이다..!

여기서 더 심플하고 실용적으로 만들고 싶다는 생각..!

<br>

---

<br>

# Login 기능

로그인 기능은 input에서 가져온 `value`를 `localStorage`에 저장했다가, 인삿말을 보여줄때 가져올 수 있게 만들었다.

기능 전체를 요약하자면 `localStorage`에 `value`가 저장되었는지 여부에 따라 `classList`에 `hidden`을 `add` 하거나 `remove` 함에 따라서 form을 없애고 인삿말을 보여주거나(저장 O), form을 보여주고 value를 입력할 수 있게 해주는 것이다.(저장 X)

```js
if (savedUserId === null) {
  // form을 보여주자
} else {
  // form 대신에 인삿말을 보여주자
}
```

`if else` 구문으로 저장된 아이디가 없는 경우 form을 보여주고, 저장된 아이디가 있다면 인삿말을 보여주게 했다.

그런데 그냥 저 부분에 코드를 작성하다보니 코드가 너무 길어져서 인삿말 부분도 따로 함수를 만들어 주었다.

```js
function greetingText() {
  const getUserId = localStorage.getItem("userId");
  greetings.innerText = `Hello ${getUserId}, Welcome!`;
  greetings.classList.remove("hidden");
}
```

`greetingText`는 처음부터 보이면 안되는 부분이기 때문에 처음에 html을 작성할 때 `class`에 `hidden`을 적어서 작성했다!

<br>

---

<br>
