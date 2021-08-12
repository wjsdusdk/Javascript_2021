/*

1-1. 대화창 (prompt, alert, confirm)

*/

console.log("----- 1-1. 대화창 (prompt, alert, confirm) -----");

/* prompt("몇 명이 참가하나요?"); // 사용자 입력을 받음    // 문자열
alert(7); // 경고창
confirm("맞나요?"); // '확인' or '취소'창

console.log(typeof prompt("몇 명이 참가하나요?")); // string
console.log(typeof Number(prompt("몇 명이 참가하나요?"))); // number */

/*

1-2. HTML 태그 선택하기 (querySelector, querySelectorAll)

*/

console.log("----- 1-2. HTML 태그 선택하기 (querySelector, querySelectorAll) -----");

const $button = document.querySelector("button"); // 태그
const $$button = document.querySelectorAll("button"); // 2개 이상
const $btn1 = document.querySelector("#btn1"); // id
const $btn2 = document.querySelector("#btn2"); // id
const $btn3 = document.querySelector("#btn3"); // id
const $chat1 = document.querySelector("#chat1"); // id
const $chat2 = document.querySelector("#chat2"); // id
const $chat3 = document.querySelector("#chat3"); // id
const $$btn = document.querySelectorAll(".btn"); // class
const $order = document.querySelector("#order");
const $word = document.querySelector("#word");

console.log($button); // <button id="btn1" class="btn">버튼1</button>  // 여러 버튼 중 첫번째 버튼
console.log($$button); // NodeList(3) [button#btn1.btn, button#btn2, button#btn3.btn]  // 유사배열
/* function() {
  console.log(arguments)
}; // 유사배열 */
console.log($btn2); // <button id="btn2">버튼2</button>
console.log($$btn); // NodeList(2) [button#btn1.btn, button#btn3.btn]

/*

1-3. 이벤트 리스너 달기 (콜백함수)

*/

console.log("----- 1-3. 이벤트 리스너 달기 (콜백함수) -----");

document.querySelector("#chat1").addEventListener("input", function () {
  console.log("글자 입력");
});

$chat2.addEventListener("input", (event) => {
  console.log(event.target.value);
});

const onClick = function () {
  console.log("버튼 클릭");
};
document.querySelector("#btn1").addEventListener("click", onClick);

// removeListener : 이벤트 제거

$btn3.addEventListener("click", () => {
  $word.textContent = $chat3.value;
  $chat3.value = ""; // 값 지우기
  $chat3.focus(); // 입력창에 커서
});

// textContent : 문자열
console.log(typeof $order.textContent); // string
console.log(typeof Number($order.textContent)); // number

// 태그의 내부 값을 가져올 때 속성
// input.value
// button.textContent
// select.value
// div.textContent
// textarea.value
// span.textContent
