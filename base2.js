/*

HTML

*/

console.log("----- HTML -----");

const $button = document.querySelector("button"); // 태그
const $$button = document.querySelectorAll("button"); // 2개 이상
const $order = document.querySelector("#order"); // id
const $$btn = document.querySelectorAll(".btn"); // class

console.log($button); // <button class="btn">버튼1</button>  // 여러 버튼 중 첫번째 버튼
console.log($$button); // NodeList(3) [button, button, button]  // 유사배열
/* function() {
  console.log(arguments)
}; // 유사배열 */
console.log($order); // <button id="btn">버튼2</button>
console.log($$btn); // NodeList(2) [button.btn, button.btn]
