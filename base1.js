/* 

1-1. 데이터 타입 - 문자열 ('', \"\", ``, escape)

*/

console.log("----- 1. 데이터 타입 - 문자열 ('', \"\", ``, escape) -----");

// '', "", `` 모두 문자열을 표현

// ``만 줄바꿈까지 인식
console.log(`안녕하세요?
줄바꿈했어요`);
/* 안녕하세요?
줄바꿈했어요 */

// \n : '', ""로 줄바꿈을 표현하기 위해 사용
console.log("안녕하세요?\n줄바꿈했어요");
/* 안녕하세요?
줄바꿈했어요 */

console.log("" == ""); // true
console.log("" == "   "); // false
console.log("   " == "   "); // true

console.log('"'); // "
console.log("'"); // '
console.log(`'`); // '
// console.log(''');  // err
// console.log(""");  // err
// console.log(```);  // err

console.log('"정말" 그랬니?'); // "정말" 그랬니?
// console.log(""정말" 그랬니?");  // err

console.log("how're you?"); // how're you?
// console.log('how're you?');  // err
console.log("how're you?"); // how're you?
console.log("how\re you?"); // howe you?
console.log("how\\re you?"); // how\re you?

/*

1-2. 데이터 타입 - 숫자 (NaN, parseInt, parseFloat, Number, 거듭제곱, Infinity)

*/

console.log("----- 1-2. 데이터 타입 - 숫자 (NaN, parseInt, parseFloat, Number, 거듭제곱, Infinity) -----");

// 전역함수 : 전체의 영역에서 사용 가능한 함수
// ex) setTimeout, setInterval, clearTimeout, clearInterval, parseInt, parseFloat

// 10진법
console.log(5e4); // 50000
console.log(5e-4); // 0.0005
console.log(typeof 5e4); // number

// NaN : Not a Number
console.log("바나나" - "사과"); // NaN
console.log(typeof NaN); // number

console.log(typeof 123); // number
console.log(typeof "123"); // string

// 문자열에 숫자를 더할 때 숫자가 문자열로 변환
console.log(123 + 5); // 128
console.log("123" + 5); // 1235
console.log(typeof ("123" + 5)); // string

// parseInt : 문자를 정수로 형 변환
console.log(typeof parseInt("123")); // number
console.log(parseInt("3.14")); // 3
console.log(parseInt("3월")); // 3

// parseFloat : 문자를 소수로 형 변환
console.log(typeof parseFloat("123")); // number
console.log(parseFloat("3.14")); // 3.14
console.log(parseFloat("3월")); // 3

// Number : 문자를 숫자로 형 변환
console.log(typeof Number("123")); // number
console.log(Number("3.14")); // 3.14
console.log(Number("3월")); // NaN

// str.substr(시작 인덱스, 추출 갯수)
console.log("123456".substr(0, 2)); // 12

// str.substring(시작 인덱스번호, 끝 인덱스번호)
console.log("123456".substring(0, 2)); // 12

// prompt() : 팝업 메세지창
// console.log(prompt());
// console.log(parseInt(prompt()));
// console.log(typeof parseInt(prompt())); // number

// ** : 거듭제곱
console.log(2 ** 3); // 8

// Infinity : 무한
console.log(2 / 0); // Infinity
console.log(-2 / 0); // -Infinity
console.log(typeof Infinity); // number
console.log(Infinity - 100); // Infinity
console.log(Infinity - Infinity); // NaN
console.log(0 / 0); // NaN

// 문자열에서 숫자를 빼거나 곱하거나 나눌 때 문자열이 숫자로 형 변환
// 문자열에 기본적으로 Number 적용 (parseInt나 parseFloat가 아님)
console.log("3" - 0); // 3
console.log(typeof ("3" - 0)); // number
console.log("3월" - 0); // NaN
console.log("문자열" - 0); // NaN
console.log(Number("3월")); // NaN
console.log(Number("3월") - 0); // NaN
console.log(NaN - 0); // NaN
console.log(parseInt("3월")); // 3
console.log(parseInt("3월") - 0); // 3
console.log(parseInt("문자열")); // NaN

console.log(1 + undefined); // NaN

// Number.toFixed() : 반올림
const pi = 3.14159265358979;
const str = pi.toFixed(2);
console.log(str); // 3.14
console.log(typeof str); // string

// Math : 수학적인 상수와 함수를 위핸 속성과 메서드를 가진 자바스크립트에 내장되어있는 내장 객체 (함수 객체 X)
console.log("abs: ", Math.abs(-12)); // 12   // 절대값
console.log("min: ", Math.min(2, 8)); // 2   // 작은값
console.log("max: ", Math.max(2, 8)); // 8   // 큰값
console.log("ceil: ", Math.ceil(3.14)); // 4   // 올림 (기본적으로 정수 단위로 올림)
console.log("floor: ", Math.floor(3.94)); // 3   // 내림
console.log("round: ", Math.round(3.14)); // 3   // 반올림
console.log("round: ", Math.round(3.54)); // 4   // 반올림
console.log("random: ", Math.random()); // 정수가 0인 랜덤 숫자
console.log("random: ", Math.floor(Math.random() * 10)); // 0~9 범위의 랜덤 숫자

/*

1-3. 데이터 타입 - 불 값 (boolean, 값들의 비교)

*/

console.log("----- 1-3. 데이터 타입 - 불 값 (boolean, 값들의 비교) -----");

// NaN과의 비교는 NaN !== NaN 빼고 모두 false
console.log(NaN == NaN); // false
console.log(NaN !== NaN); // true

// true는 1, false는 0라고 생각하면 됨
console.log(true > false); // true
console.log("0" < true); // true

// 문자열은 사전순으로 생각하면 됨
console.log("a" < "b"); // true
console.log("a" < "ab"); // true
console.log("ab" < "ad"); // true
console.log("a".charCodeAt()); // 97
console.log("b".charCodeAt()); // 98
console.log("&".charCodeAt()); // 38

// 문자열이 숫자로 형 변환
console.log("3" < 5); // true
console.log("abc" < 5); // false  // "abc"는 NaN이므로 NaN과의 비교는 NaN !== NaN 빼고 모두 false

// ==와 ===의 차이

// == : 형 변환 O
console.log("1" == 1); // true
console.log(1 == true); // true
console.log("1" != 1); // false

// === : 형 변환 X
console.log("1" === 1); // false
console.log(1 === true); // false
console.log("1" !== 1); // true

/*

1-4. 데이터 타입 - undefined와 null

*/

console.log("----- 1-4. 데이터 타입 - undefined와 null -----");

// undefined : 기본값, 빈값, 의도하지 않은 비어있는 값
console.log(typeof undefined); // undefined
console.log(!!undefined); // false
console.log(undefined == false); // false
console.log(undefined == 0); // false
console.log(undefined == ""); // false

// null : 의도적인 빈 값
console.log(typeof null); // object  // 유명한 버그  // 원래는 null이 나와야함
console.log(null == undefined); // true
console.log(null === undefined); // false
console.log(!!null); // false

/*

1-5. 데이터 타입 확인 (typeof)

*/

console.log("----- 1-5. 데이터 타입 확인 (typeof) -----");

console.log(typeof "Hello world!"); // string
console.log(typeof "문자열"); // string
console.log(
  typeof `문자열

`
); // string
console.log(typeof ""); // string
console.log(typeof ``); // string
console.log(typeof `      `); // string
console.log(typeof 123); // number
console.log(typeof true); // boolean
console.log(typeof undefined); // undefined
console.log(typeof null); // object
console.log(typeof {}); // object
console.log(typeof []); // object

/*

1-6. 데이터 조회

*/

console.log("----- 1-6. 데이터 조회 -----");

// String.indexOf() : 몇 번째 문자인지
console.log("Hello world!".indexOf("world")); // 6
console.log("Hello world!".indexOf("Heropy")); // -1   // 일치하는 값이 없음
console.log("Hello world!".indexOf("HEROPY") !== -1); // false

// String.length : 문자 수
console.log("01 23".length); // 5   // 공백도 문자로 인식

// String.slice() : 문자 자르기, 0부터 시작, 0부터 시작하고 직전까지 추출
console.log("Hello world!".slice(0, 3)); // Hel
console.log("Hello world!".slice(6, 11)); // world

// String.replace() : 문자 바꾸기
console.log("Hello world!".replace("world", "HEROPY")); // Hello HEROPY!
console.log("Hello world!".replace(" world!", "")); // Hello

// String.match() : 배열형식으로 추출
// 이메일에서 아이디 추출
const email = "thesecon@gmail.com";
const id = email.match(/.+(?=@)/); // /.+(?=@)/ : 정규표현식

console.log(id); // ["thesecon", index: 0, input: "thesecon@gmail.com", groups: undefined]
console.log(id[0]); // thesecon

// String.trim() : 맨 앞과 맨 뒤의 공백 제거
console.log("   Hello   world!   ".trim()); // Hello   world!

/*

1-6. 팝업창 (prompt, alert, confirm)

*/

console.log("----- 1-6. 팝업창 (prompt, alert, confirm) -----");

/* prompt("몇 명이 참가하나요?"); // 사용자 입력을 받음
alert(7); // 경고창
confirm("맞나요?"); // '확인' or '취소'창

console.log(typeof prompt("몇 명이 참가하나요?")); // string
console.log(typeof Number(prompt("몇 명이 참가하나요?"))); // number */

/*

2-1. 산술 연산자

*/

console.log("----- 2-1. 산술 연산자 -----");

console.log(1 + 2); // 3
console.log(5 - 7); // -2
console.log(3 * 4); // 12
console.log(10 / 2); // 5
console.log(7 % 5); // 2   // 나머지

var calculation1 = "안녕? 내 이름은 ";
var calculation2 = "토순이고, 나이는 ";
var calculation3 = 7;
console.log(calculation1 + calculation2 + calculation3 + "살 이야"); // 안녕? 내 이름은 토순이고, 나이는 7살 이야

var a = 1;
a = a + 1;
console.log(a); // 2

var a = 1;
a += 1;
console.log(a); // 2

var a = 1;
a++;
console.log(a); // 2

var a = 1;
++a;
console.log(a); // 2

var a = 1;
console.log(a++); // 1

var a = 1;
console.log(++a); // 2

let arithmetic1 = 2;
let arithmetic2 = 2;
let arithmetic3 = 2;
var arithmetic4 = 2;
var arithmetic5 = 2;

arithmetic1 += 1; // arithmetic1 = arithmetic1 + 1 과 같은 의미
arithmetic2 -= 1; // arithmetic2 = arithmetic2 - 1 과 같은 의미
arithmetic3 *= 1; // arithmetic3 = arithmetic3 * 1 과 같은 의미
arithmetic4 /= 1; // arithmetic4 = arithmetic4 / 1 과 같은 의미
arithmetic5 %= 1; // arithmetic5 = arithmetic5 % 1 과 같은 의미

console.log(arithmetic1); // 3
console.log(arithmetic2); // 1
console.log(arithmetic3); // 2
console.log(arithmetic4); // 2
console.log(arithmetic5); // 0

/*

2-2. 비교 연산자

*/

console.log("----- 2-2. 비교 연산자 -----");

console.log(1 === "1"); // false
console.log(1 == "1"); // true   // 형 변환이 일어남

// ==는 형 변환이 일어나기 때문에 === 사용을 권장

console.log(1 === 1); // true
console.log(1 !== 1); // false
console.log(1 === 3); // false
console.log(1 !== 3); // true

console.log(1 < 1); // false
console.log(1 < 3); // true
console.log(1 >= 1); // true

console.log(1 == "1"); // true
console.log(1 != "1"); // false
console.log(1 === "1"); // false // 엄격하게 비교
console.log(1 !== "1"); // true // 엄격하게 비교

var compare;
if (1 === "1") {
  compare = "참";
} else {
  compare = "거짓";
}
console.log(compare); // 거짓

function isEqual(x, y) {
  return x === y;
}
console.log(isEqual(1, 1)); // true
console.log(isEqual(2, "2")); // false

/*

2-3. 논리 연산자

*/

console.log("----- 2-3. 논리 연산자 -----");

// && : 그리고
// || : 또는

// 10은 5보다 크고, 6은 8보다 작다
console.log(10 > 5 && 6 < 8); // true

// 10은 5보다 크거나, 6은 8보다 작다
console.log(10 < 5 || 6 > 8); // false

/*

2-4. 부정 연산자

*/

console.log("----- 2-4. 부정 연산자 -----");

// ! : 반대

console.log(!true); // false
console.log(!false); // true

console.log(100 > 200); // false
console.log(!(100 > 200)); // true
console.log(!!(100 > 200)); // false

// Boolean : 불 값으로 형 변환
console.log(Boolean("a")); // true

// !! : 불 값으로 형 변환
console.log(!!"a"); // true
console.log(!!" "); // true

// false인 7가지 암기 (나머지는 모두 true)
// 그렇지만 false가 나온다고 false를 뺀 다른 6가지 값들이 false와 같진 않음
console.log(!!false); // false
console.log(!!""); // false
console.log(!!0); // false
console.log(!!NaN); // false
console.log(!!undefined); // false
console.log(!!null); // false
console.log(!!document.all); // false

console.log(!(2 < 0)); // true
console.log(!2 < 0); // false

/*

3-1. 변수 선언하기

*/

console.log("----- 3-1. 변수 선언하기 -----");

// 초기화 : 변수를 선언함과 동시에 값을 대입하는 행위
// 변수 선언은 항상 결과값이 undefined
let variable = 5 + 5;
console.log(variable); // 10

// console.log는 undefined
console.log(console.log(variable)); // 10 // undefined

/*

3-2. 변수 이름짓기

*/

console.log("----- 3-2. 변수 이름짓기 -----");

// 변수명으로 첫 글자는 숫자 불가
// let 2variable = 77; // err

// 뛰어쓰기 불가
// let varia ble = 77; // err

/*

3-3. 변수 (let)

*/

console.log("----- 3-3. 변수 (let) -----");

// 변수 값 수정하기
let variable2 = "수정해라";
console.log(variable2); // 수정해라

variable2 = "수정했다";
console.log(variable2); // 수정했다

// 할당 연산자 (재할당)
let assign1 = 2;
let assign2 = 2;
let assign3 = 2;

assign1 += 1; // assign1 = assign1 + 1 과 같은 의미
assign2 -= 1; // assign2 = assign2 - 1 과 같은 의미
assign3 *= 1; // assign3 = assign3 * 1 과 같은 의미

console.log(assign1); // 3
console.log(assign2); // 1
console.log(assign3); // 2

// 같은 변수명으로 다시 선언 불가
/* let variable1 = 7;
console.log(variable5);

let variable1 = 77;
console.log(variable5); */

// 예약어나 다름없는 이름을 변수명으로 사용 불가
/* let undefined = "undefined";
console.log(undefined); */

/*

3-4. 상수 (const)

*/

console.log("----- 3-4. 상수 (const) -----");

// 초기화 필수
// const variable3 // err
const variable3 = "const";
console.log(variable3);

// 변수 값 수정 불가
const variable4 = "변경해라";
console.log(variable4);

// 재할당 불가
/* const assign = 2;
assign += 1;
console.log(assign); // err */

/* variable4 = "변경했다"
console.log(variable4); */

// 같은 변수명으로 다시 선언 불가
/* const variable5 = 7;
console.log(variable5);

const variable5 = 77;
console.log(variable5); */

// 예약어나 다름없는 이름을 변수명으로 사용 불가
/* const undefined = "undefined";
console.log(undefined); */

/*

3-5. 변수 (var)

*/

console.log("----- 3-5. 변수 (var) -----");

// 변수 값 수정하기
var variable5 = "수정해라";
console.log(variable2); // 수정해라

variable5 = "수정했다";
console.log(variable2); // 수정했다

// 할당 연산자 (재할당)
var assign4 = 2;
var assign5 = 2;

assign4 /= 1; // assign4 = assign4 / 1 과 같은 의미
assign5 %= 1; // assign5 = assign5 % 1 과 같은 의미

console.log(assign4); // 2
console.log(assign5); // 0

// 같은 변수명으로 다시 선언 가능
var variable5 = 7;
console.log(variable5); // 7

var variable5 = 77;
console.log(variable5); // 77

var variable5 = 777;
console.log(variable5); // 777

// 예약어나 다름없는 이름을 변수명으로 사용 가능
var undefined = "undefined";
console.log(undefined); // undefined

var Infinity = 0;
console.log(Infinity); // Infinity

var let = "const";
console.log(let); // const

/*

4-1. 조건문 (if, else, else if)

*/

console.log("----- 4-1. 조건문 (if, else, else if) -----");

// if (조건식) {동작문}
// 10 > number > 1 이런 문법 사용 불가

// else
// if (조건식) {조건식이 참일 경우 동작문} else {조건식이 거짓일 경우 동작문}

// else if
// if (조건식) {동작문} else if (조건식) {동작문} else {동작문}

var if_ = 100;
if (if_ > 18) {
  console.log("성인");
} else if (if_ > 13) {
  console.log("청소년");
} else if (if_ > 7) {
  console.log("어린이");
} else {
  console.log("유아");
} // 성인

// 참으로 취급하는 값
// true, {}, [], 1, 2, 'false', -12, '3.14' ...

if (true) {
  console.log(123);
} // 123

if ("false") {
  console.log(123);
} // 123

// 거짓으로 취급하는 값
// false, '', null, undefined, 0, -0, NaN

if (false) {
  console.log(123);
} // 아무것도 출력되지 않음

/*

4-2. 조건문 (switch)

*/

console.log("----- 4-2. 조건문 (switch) -----");

// switch
// switch (조건식) {case 비교조건식: 동작문}

let condition = "switch";

// switch () 조건식의 값이 case의 비교 조건식 값과 일치(===)하면 실행
switch (condition) {
  case "switch":
    console.log("switch");
    console.log("동작문");
}

// 조건이 일치하는 줄 이하는 무조건 실행
switch (condition) {
  case "switch0":
    console.log("switch1");
  case "switch":
    console.log("switch2");
  case "switch2":
    console.log("switch3");
}

// break : 조건이 일치하면 종료
switch (condition) {
  case "switch0":
    console.log("동작문1");
    break;
  case "switch":
    console.log("동작문2");
    break;
  case "switch2":
    console.log("동작문3");
    break;
}

// default : 아무것도 일치하지 않을 경우
switch (condition) {
  case "switch0":
    console.log("switch1");
    break;
  case "switch1":
    console.log("switch2");
    break;
  case "switch2":
    console.log("switch3");
    break;
  default:
    console.log("아무것도 일치하지 않음");
}

// 변수가 특정 값으로 딱 떨어지는 조건으로 분기 처리를 한다면 if문 보다 switch문이 적합

/*

4-3. 조건부 연산자 (삼항 연산자)

*/

console.log("----- 4-3. 조건부 연산자 (삼항 연산자) -----");

// 조건식 ? 참일 때 실행되는 식 : 거짓일 때 실행되는 식
// 조건문이 아니라 조건식이기 때문에 결과값이 나옴

7 > 0 ? console.log("참") : console.log("거짓"); // 참

let condition2 = 7 < 0 ? "참" : "거짓";
console.log(condition2); // 거짓

// 1 < 2가 true면 "참", false면 "거짓"
if (1 < 2) {
  console.log("참");
} else {
  console.log("거짓");
} // 참

console.log(1 < 2 ? "참" : "거짓"); // 참

/*

4-4. 중첩 조건부 연산자 (중첩 삼항 연산자)

*/

console.log("----- 4-4. 중첩 조건부 연산자 (중첩 삼항 연산자) -----");

let true_ = true;
let false_ = false;

let reiteration = true_ ? (false_ ? "둘 다 참" : "true_만 참") : "true_이 거짓";
console.log(reiteration);

let reiteration2 = false_ ? "false_만 참" : true_ ? "true_만 참" : "둘 다 거짓";
console.log(reiteration2);

/*

5-1. 반복문 (while)

*/

console.log("----- 2-16. 반복문 (while) -----");

// while (조건식) {동작문}

// 무한반복 (무한반복 금지)
/* while (true) {
    console.log("while");
} */

let repeat = 0;
while (repeat < 10) {
  console.log("while");
  repeat++;
}

/*

5-2. 반복문 (for)

*/

console.log("----- 5-2. 반복문 (for) -----");

// for (시작; 조건식; 종료식) {동작문}

for (let i = 0; i < 10; i++) {
  console.log("for");
}

var for_ = 0;
for (; for_ < 10; for_++) {
  console.log(for_);
} // 0~9

// 시작, 조건식, 종료식 생략 가능 (조건식 생략시 true -> 무한반복 - 무한반복 금지)
/* for (;;) {} */

for (let i = 0; i < 10; i = i + 2) {
  console.log(i + 1);
}

var for2 = ["극한직업", "어벤저스", "오펀", "강시", "나 홀로 집에", "내부자들"];
for (var i = 0; i < for2.length; i++) {
  console.log(for2[i]); // 극한직업~내부자들
}
console.log(for2[for2.length - 1]); // 내부자들

/*

5-3. break와 continue

*/

console.log("----- 5-3. break와 continue -----");

// break : 멈추기
let break_ = 0;
while (true) {
  if (break_ === 5) break;
  break_++;
}
console.log(break_);

// continue : 건너뛰기
let continue_ = 0;
while (continue_ < 10) {
  continue_++;
  if (continue_ % 2 === 0) {
    continue;
  }
  console.log(continue_);
}

/*

5-4. 중첩 반복문

*/

console.log("----- 5-4. 중첩 반복문 -----");

for (let i = 0; i < 5; i++) {
  for (let j = 0; j < 5; j++) {
    console.log(i, j);
  }
}

for (let i = 0; i < 5; i++) {
  if (i % 2 === 0) continue;
  for (let j = 0; j < 5; j++) {
    if (j % 2 === 0) continue;
    for (let k = 0; k < 5; k++) {
      if (k % 2 === 0) continue;
      console.log(i, j, k);
    }
  }
}

/*

5-5. 별찍기 숙제

*/

console.log("----- 5-5. 별찍기 숙제 -----");

for (let i = 0; i < 5; i++) {
  console.log("*".repeat(i + 1));
}

for (let i = 5; i > 0; i--) {
  console.log("#".repeat(i));
}

for (let i = 0; i < 5; i++) {
  console.log("*".repeat(5 - i));
}

for (let i = 0; i < 10; i++) {
  if (i % 2 === 0) continue;
  console.log("#".repeat(i));
}

for (let i = 0; i < 10; i++) {
  if (i % 2 === 0) continue;
  console.log("*".repeat(10 - i));
}

for (let i = 0; i < 5; i++) {
  console.log(" ".repeat(i) + "#".repeat(5 - i));
}

for (let i = 0; i < 5; i++) {
  console.log(" ".repeat(4 - i) + "*".repeat(i + 1));
}

for (let i = 0; i < 5; i++) {
  console.log(" ".repeat(i) + "#".repeat(5 - i));
}

for (let i = 0; i < 10; i++) {
  if (i % 2 === 0) continue;
  console.log(" ".repeat((9 - i) / 2) + "*".repeat(i));
}

/* for (let i = 0; i < 10; i++) {
    if (i % 2 === 0) continue;
    console.log(" ".repeat(Math.abs((6 - i) / 2)) + "#".repeat(Math.abs(2*i-i)));
} */

/* for (let i = 1; i < 6; i++) {
    console.log(" ".repeat(Math.abs((6 - i) / 2)) + "#".repeat(Math.abs(2*i-5)));
} */

/*

6-1. 배열 기본

*/

console.log("----- 6-1. 배열 -----");

const array = ["apple", "orange", "pear", "strawberry"];
console.log(array[0]); // apple

// 배열 요소로 배열 가능
const arrayOfArray = [
  [1, 2, 3],
  [4, 5],
];
console.log(arrayOfArray[0]); // (3) [1, 2, 3]

// 배열 요소로 변수 가능
const array0 = 10;
const array1 = 20;
const variableArray = [array0, array1, 30];
console.log(variableArray[0]); // 10

// 배열 요소로 여러개의 중복되는 값 가능
const duplicated = ["가", "가", "가", "가"];

// 배열 요소가 없어도 가능
const empty = [];

// 배열 요소로 빈 값도 가능
const emptyValue = [null, undefined, false, "", NaN];
console.log(emptyValue.length); // 5
console.log(emptyValue[emptyValue.length - 1]); // NaN

/*

6-2. 배열 메서드 수정

*/

console.log("----- 6-2. 배열 메서드 수정 -----");

// const는 값을 바꾸지(재할당) 못하지만 객체 내부의 속성이나 배열 요소는 수정 가능

// 배열 요소 추가
const array2 = ["b", "d"];

array2[2] = "d";
console.log(array2); // (3) ["b", "d", "d"]

// Array.push() : 배열의 맨 뒤에 요소 추가 (원본 데이터 수정됨)
array2[array2.length] = "e";
console.log(array2); // (4) ["b", "d", "d", "e"]

array2.push("f");
console.log(array2); // (5) ["b", "d", "d", "e", "f"]

// Array.unshift() : 배열의 맨 앞에 요소 추가 (원본 데이터 수정됨)
array2.unshift("a");
console.log(array2); // (6) ["a", "b", "d", "d", "e", "f"]

const array3 = ["ㄱ", "ㄴ"];
/* array3 = ["ㄷ", "ㄹ"]; // 불가능 */
array3[0] = "ㅁ"; // 가능
console.log(array3); // (2) ["ㅁ", "ㄴ"]

// 배열 요소 수정
array2[2] = "c";
console.log(array2); // (6) ["a", "b", "c", "d", "e", "f"]

// 배열 마지막 요소 제거
array2.pop();
console.log(array2); // (5) ["a", "b", "c", "d", "e"]

// 배열 첫번째 요소 제거
array2.shift();
console.log(array2); // (4) ["b", "c", "d", "e"]

// Array.splice(index, 갯수, (추가할 데이터)) : 배열의 요소 제거 & 추가 (원본 데이터 수정됨)
const array4 = ["ㄱ", "ㄴ", "ㄷ", "ㄹ", "ㅁ", "ㅂ", "ㅅ", "ㅇ"];

array4.splice(1, 1);
console.log(array4); // (7) ["ㄱ", "ㄷ", "ㄹ", "ㅁ", "ㅂ", "ㅅ", "ㅇ"]

array4.splice(2, 2);
console.log(array4); // (5) ["ㄱ", "ㄷ", "ㅂ", "ㅅ", "ㅇ"]

array4.splice(3);
console.log(array4); // (3) ["ㄱ", "ㄷ", "ㅂ"]

array4.splice(0, 2, "a", "b", "c");
console.log(array4); // (4) ["a", "b", "c", "ㅂ"]

array4.splice(3, 0, "c", "c");
console.log(array4); // (6) ["a", "b", "c", "c", "c", "ㅂ"]

// Array.reverse() : 배열의 순서를 거꾸로 바꿈 (원본 데이터 수정됨)
console.log(array4.reverse()); // (6) ["ㅂ", "c", "c", "c", "b", "a"]

// Array1.concat(Array2) : 배열 데이터를 병합해 새로운 배열 데이터를 반환 (원본 데이터 손상 X)
const array11 = [1, 2, 3, 4];
const array12 = ["Apple", "Banana", "Cherry"];

console.log(array11.concat(array12)); // (7) [1, 2, 3, 4, "Apple", "Banana", "Cherry"]
console.log(array11); // (4) [1, 2, 3, 4]
console.log(array12); // (3) ["Apple", "Banana", "Cherry"]

/*

6-3. 배열 메서드 조회

*/

console.log("----- 6-3. 배열 메서드 조회 -----");

// Array.length : 배열의 요소 갯수
console.log([1, 2].length); // 2
console.log([].length); // 0

// Array.includes() : 배열에 요소 포함 여부
console.log(array4.includes("c")); // true
console.log(array4.includes("d")); // false

// Array.indexOf : 배열의 앞에서부터 찾기
console.log(array4.indexOf("c")); // 2

// Array.lastIndexOf : 배열의 뒤에서부터 찾기
console.log(array4.lastIndexOf("c")); // 4
console.log(array4.lastIndexOf("d")); // -1  // 배열에 요소가 없음

/*

6-4. 배열 반복

*/

console.log("----- 6-4. 배열 반복 -----");

let array5 = 0;

while (array5 < array4.length) {
  console.log(array4[array5]);
  array5++;
}

let array6 = "안녕하십니까";
let array7 = 0;

while (array7 < array6.length) {
  console.log(array6[array7]);
  array7++;
}

for (let i = 0; i < array6.length; i++) {
  console.log(array6[i]);
}

/*

6-5. 배열 콜백함수

*/

console.log("----- 6-5. 배열 콜백함수 -----");

// Array.forEach(콜백함수) : 배열 데이터의 요소 갯수만큼 콜백함수를 반복적으로 실행 (반환 X)

const array13 = ["Apple", "Banana", "Cherry"];

array13.forEach(function (element, index, array) {
  console.log(element, index, array);
}); // 매개변수의 이름은 마음대로 정하기

// Apple 0 (3) ["Apple", "Banana", "Cherry"]
// Banana 1 (3) ["Apple", "Banana", "Cherry"]
// Cherry 2 (3) ["Apple", "Banana", "Cherry"]

// Array.map(콜백함수) : 배열 데이터의 요소 갯수만큼 콜백함수를 반복적으로 실행 (반환 O, 원본 데이터 손상 X)

const map1 = array13.forEach(function (array13, index) {
  console.log(`${array13}-${index}`);
}); // 콜백함수 밖으로 반환 X

/* 축약
array13.forEach((array13, index) => {
    console.log(`${array13}-${index}`);
}); */

// Apple-0
// Banana-1
// Cherry-2

const map2 = array13.map(function (array13, index) {
  return `${array13}-${index}`;
}); // 콜백함수 밖으로 반환 O

const map3 = array13.map(function (array13, index) {
  return {
    id: index,
    name: array13,
  };
}); // 콜백함수 밖으로 반환 O

/* 축약
fruits.map((array13, index) => ({
    id: index,
    name: array13,
})); */

console.log(map1); // undefined
console.log(map2); // (3) ["Apple-0", "Banana-1", "Cherry-2"]
console.log(map3); // (3) [{…}, {…}, {…}]

/*

6-6. 배열 메서드 응용하기

*/

console.log("----- 6-6. 배열 메서드 응용하기 -----");

const array8 = ["안", "ㅎ", "녕", "ㅎ", "하", "세", "ㅎ", "요"];

while (array8.indexOf("ㅎ") > -1) {
  array8.splice(array8.indexOf("ㅎ"), 1);
}
console.log(array8); // (5) ["안", "녕", "하", "세", "요"]

const array9 = ["안", "ㅎ", "녕", "ㅎ", "하", "세", "ㅎ", "요"];
let array9_index = array9.indexOf("ㅎ");

while (array9_index > -1) {
  array9.splice(array9_index, 1);
  array9_index = array9.indexOf("ㅎ"); // 꼭 적어줘야함
}
console.log(array9); // (5) ["안", "녕", "하", "세", "요"]

// 0은 false를 의미하기 때문에 오류 발생
const array10 = [1, 2, 3, 4, 5];

if (array10.indexOf(1)) {
  console.log("1 찾음");
} else {
  console.log("1 못찾음");
} // 1 못찾음

if (array10.indexOf(1) > -1) {
  console.log("1 찾음");
} else {
  console.log("1 못찾음");
} // 1 찾음

// Array.filter() : 필터링된 결과(true)만 반환 (반환 O, 원본 데이터 손상 X)
const array14 = [1, 2, 3, 4];
const filter1 = array14.map((number) => {
  return number < 3;
});

/* 축약
array14.map((number) => number < 3); */

const filter2 = array14.filter((number) => {
  return number < 3;
});

/* 축약
array14.filter((number) => number < 3); */

console.log(filter1); // (4) [true, true, false, false]
console.log(filter2); // (2) [1, 2]

// Array.find() : 조건을 만족하는 첫 번째 요소의 값을 반환 (없다면 undefined)
const array15 = ["Apple", "Banana", "Cherry"];
const find = array15.find((fruit) => {
  return /^B/.test(fruit);
});

/* 축약
const find = array15.find((fruit) => /^B/.test(fruit)); */

// 정규표현식 /^B/
// ^ : 시작
// 대문자 B로 시작하는 문자 데이터

console.log(find); // Banana

// Array.findIndex() : 일치하는 첫 번째 데이터의 index를 찾음
const findIndex = array15.findIndex((fruit) => {
  return /^B/.test(fruit);
});

/* 축약
const findIndex = array15.findIndex((fruit) => /^B/.test(fruit)); */

// 정규표현식 /^B/
// ^ : 시작
// 대문자 B로 시작하는 문자 데이터

console.log(findIndex); // 1

/*

7-1. 호이스팅

*/

console.log("----- 7-1. 호이스팅 -----");

// 호이스팅 : 함수 선언부가 유효범위 최상단으로 끌어올려지는 현상

// 함수 선언 방식 (기명 함수) : function20()을 먼저 호출하는 것이 가능
function20(1, 2); // 3

function function20(x, y) {
  console.log(x + y);
}

// 함수 표현 방식 (익명 함수) : double3()을 먼저 호출하는 것이 불가능
/* function21(1, 2); // err */

const function21 = function (x, y) {
  console.log(x + y);
};

/*

7-2. 화살표 함수

*/

console.log("----- 7-2. 화살표 함수 -----");

// function () {}
const function24 = function (x, y) {
  console.log(x + y);
};

// 축약형 () => {}
const function25 = (x, y) => {
  console.log(x + y);
};

// 객체 데이터 축약형 () => ({})
// 화살표 함수에서 {}는 함수의 범위를 나타내므로 () 안에서 객체 데이터를 정의해줘야지만 함수 밖으로 반환
const doubleArrow2 = (x) => ({ age: x + 1 });
console.log(doubleArrow2(7)); // {age: 8}

/*

7-3. return

*/

console.log("----- 7-3. return -----");

// return : 종료

// 함수를 호출하지 않으면 undefined, 즉 반환값이 없음
function function1() {
  // return undefined; // return을 사용하지 않으면 기본적으로 생략되어 있음
}
function1();

function function2() {
  return console.log("반환값");
}
function2(); // 반환값

// 함수 안에 조건을 둬서 어디까지 실행되는지 정할 수 있음
function function3() {
  if (true) {
    return;
  }
  console.log("return");
}
function3(); // 아무것도 출력되지 않음

function function4() {
  if (false) {
    return;
  }
  console.log("return");
}
function4(); // return

// return은 하나만 가능
function function5() {
  return 1, 5;
}
console.log(function5()); // 5

function function6() {
  return [1, 5];
}
console.log(function6()); // (2) [1, 5]

function function7() {
  console.log("Hi");
  return;
  console.log("return");
}
function7(); // Hi

function function22(x, y) {
  if (x < 2) {
    return;
  }
  return x + y;
}
console.log(function22(1, 3)); // undefined
console.log(function22(7, 3)); // 10

function function23(x, y) {
  if (x < 2) {
    return 123;
  }
  return x + y;
}
console.log(function23(1, 3)); // 123

// {}와 return이 바로 이어서 나오면 {}와 return 생략 가능
const function13 = (x, y, z) => {
  return x * y * z;
};

const function14 = (x, y, z) => x * y * z;

/*

7-4. 매개변수(parameter)와 인수(argument)

*/

console.log("----- 7-4. 매개변수(parameter)와 인수(argument) -----");

// parameter, argument는 화살표 함수에서는 사용 불가
// parameter : 매개 변수 지정 없이도 함수 안에서 언제든 사용 가능
// 권장되는 방법은 아니지만 매개 변수가 너무 많아서
// 일일이 지정하기가 힘든 경우 사용

function function8(parameter) {
  console.log(parameter);
}
function8("argument"); // argument

function function9(w, x, y, z) {
  console.log(w, x, y, z); // a b c undefined
  console.log(arguments); // Arguments(3) ["a", "b", "c"]
}
function9("a", "b", "c");

function function10(x, y) {
  return console.log(x + y);
}
function10(5, 3); // 8

function function11(x, y) {
  console.log(x, y); // 5 undefined
  return console.log(x + y); // NaN
}
function11(5);

function function12(x, y) {
  return console.log(x, y); // a b
}
function12("a", "b", "c");

// 함수 내부에서 변수나 상수 선언 가능
function function15(x, y) {
  const fff = 100;
  return console.log((x - y) * fff);
}
function15(4, 2); // 200

// 함수 외부의 변수나 상수 사용 가능
const fff = 100;
function function16(x, y) {
  return console.log((x - y) * fff);
}
function16(4, 2); // 200

// 변수를 선언하지 않고
// console.log(function17(1, 3) + function17(4, 12))
// 라고 해도 되지만 더 느림
// why?
// 변수를 선언하면 선언할 때만 함수를 호출하면 되지만
// 변수를 선언하지 않으면 매번 함수를 실행하기 때문에
// 여러번 함수를 실행하는 것은 비효율적

function function17(x, y) {
  console.log(x + y);
  return x + y;
}
const function18 = function17(1, 3);
const function19 = function17(4, 12);

console.log(function18); // 4
console.log(function19); // 16
console.log(function18 + function19); // 20

/*

7-5. 즉시실행함수 (IIFE)

*/

console.log("----- 7-5. 즉시실행함수 (IIFE) -----");

// ;를 안써주면 err

// 즉시실행함수 X
function function26(a) {
  console.log(a * 2);
}
function26(7); // 14

// 즉시실행함수 O
(function (a) {
  console.log(a * 2);
})(7); // 14

/*

8-1. 객체 리터럴 기본

*/

console.log("----- 8-1. 객체 리터럴 기본 -----");

/* const 객체 = {
    속성1 이름: 속성1 값,
    속성2 이름: 속성2 값,
    속성3 이름: 속성3 값,
} */

const yeona = {
  name: "전연아",
  year: 1994,
  month: 10,
  date: 31,
  gender: "W",
};

console.log(yeona.name); // 전연아
console.log(yeona["year"]); // 1994

// []를 사용할 경우 ""를 꼭 써야함
const name = "???";
console.log(yeona[name]); // undefined  //  yeona["???"]와 같음

const yeona2 = {
  name: {
    first: "연아",
    last: "전",
  },
  gender: "W",
};
console.log(yeona2.name.last); // 전
console.log(yeona2["name"]["last"]); // 전

// 속성 이름에 "" 붙여줘야하는 경우
const literal = {
  ab: "a",
  "2ab": "b", // 첫글자 숫자인 경우
  "a b": "c", // 뛰어쓰기가 있는 경우
  "a-b": "d", // 특수문자가 있는 경우
};

// 속성 이름에 "" 붙여줘야하는 경우에는 []만 가능
console.log(literal.ab); // a
// console.log(literal.2ab); // err
console.log(literal["2ab"]); // b

// 객체 속성 추가
yeona.number = "010-1234-5678";
console.log(yeona.number); // 010-1234-5678

// 객체 속성 수정
yeona.month = "10월";
console.log(yeona.month); // 10월

// 객체 속성 제거
delete yeona.gender;
console.log(yeona.gender); // undefined

// 객체 리터럴 : {}를 사용해 만든 객체

// 배열과 함수가 객체인 이유 : 객체의 성질을 모두 사용할 수 있기 때문
function literal2() {}
literal2.a = "Hi";
console.log(literal2.a); // Hi

const literal3 = [];
literal3.a = "bye";
console.log(literal3.a); // bye

// 메서드 : 객체의 속성 값인 함수
// console.log : console이라는 객체의 log 메서드
const debug = {
  log: function (a) {
    console.log(a);
  },
};
debug.log("Hi"); // Hi

/*

8-2. 객체의 비교 (원시값과의 차이점)

*/

console.log("----- 8-2. 객체의 비교 (원시값과의 차이점) -----");

// 객체끼리 비교는 항상 false
console.log({} === {}); // false

const object = { a: "10" }; // 객체 리터럴
const object2 = [1, 2, object]; // 배열 리터럴

console.log(object === object2[2]); // true
console.log(object2 === [1, 2, object]); // false

// 같은 객체를 참조하는 객체는 함께 속성 값이 바뀜
const object3 = { a: 1 };
const object4 = object3;
console.log(object4); // {a: 1}

object3.a = 2;
console.log(object4); // {a: 2}

// 객체가 아닌 값 (원시형 데이터 - 문자, 숫자, boolean, null, undefined)은 함께 바뀌지 않음
let object5 = "a";
let object6 = object5;
console.log(object6); // a

object5 = "b";
console.log(object6); // a

/*

8-3. 객체 데이터 생성

*/

console.log("----- 8-3. 객체 데이터 생성 -----");

// Object.assign(대상 객체, 출처 객체)
// : 하나 이상의 출처 객체로부터 대상 객체로 속성을 복사해서 대상 객체 반환

// 참조형 데이터 : 메모리 주소를 참조하는 데이터
// ex) 객체 데이터 {}, 배열 데이터 [], 함수 function

// 새로운 객체 데이터 생성 (원본 손상 O)
const Heropy1 = {
  name: "Heropy",
  age: 85,
};

const Heropy2 = {
  name: "Heropy",
  email: "thesecon@gmail.com",
};

const Mina = {
  name: "Mina",
};

const object7 = Object.assign(Heropy1, Heropy2);
const object8 = { a: 123 };
const object9 = { a: 123 };

console.log(object7); // {name: "Heropy", age: 85, email: "thesecon@gmail.com"}
console.log(Heropy1); // {name: "Heropy", age: 85, email: "thesecon@gmail.com"}
console.log(object7 === Heropy1); // true   // 메모리 주소가 같음
console.log(object8 === object9); // false   // 메모리 주소가 다름

const object10 = Object.assign(Heropy1, Mina); // 속성명이 같을 경우 덮어쓰기
console.log(object10); // {name: "Mina", age: 85, email: "thesecon@gmail.com"}

// 새로운 객체 데이터 생성 (원본 손상 X)
const Heropy3 = {
  name: "Heropy",
  age: 85,
};

const Heropy4 = {
  name: "Heropy",
  email: "thesecon@gmail.com",
};

const object11 = Object.assign({}, Heropy3, Heropy4); // 출처 객체의 수는 마음대로
const object12 = Object.assign({}, Heropy3);

console.log(object11); // {name: "Heropy", age: 85, email: "thesecon@gmail.com"}
console.log(Heropy3); // {name: "Heropy", age: 85}
console.log(object11 === Heropy3); // false

console.log(object12); // {name: "Heropy", age: 85}
console.log(object12 === Heropy3); // false   // 메모리 주소가 다름

// Object.keys() : 속성들을 배열로 만듬
const Heropy5 = {
  name: "Heropy",
  age: 85,
  email: "thesecon@gmail.com",
};

const keys = Object.keys(Heropy5);

console.log(keys); // (3) ["name", "age", "email"]
console.log(Heropy5.email); // thesecon@gmail.com
console.log(Heropy5["email"]); // thesecon@gmail.com   // 아래처럼 사용할 경우 사용

const object13 = keys.map((key) => Heropy5.key);
const object14 = keys.map((key) => Heropy5[key]); // return 생략한 축약형

console.log(object13); // (3) [undefined, undefined, undefined]   // 정상적인 동작 X
console.log(object14); // (3) ["Heropy", 85, "thesecon@gmail.com"]

/* 

*/

/* 

*/

/* 

*/

/* 

*/

/* 

*/

/* 

// 9-1. 변수 유효범위 (let, const)

console.log("----- 9-1. 변수 유효범위 (let, const) -----");

// 블록 레벨의 유효범위 (가장 가까운 중괄호의 범위)

function valid1() {
    if (true) {
        const valid = 123;
        console.log(valid);
    }
}
valid1(); // 123

function valid2() {
    if (true) {
        const valid = 123;
    }
    console.log(valid);
}
// valid2() // err

function valid3() {
    if (true) {
        console.log(valid);
        const valid = 123;
    }
}
// valid3(); // undefined  // err

function valid4() {
    console.log(valid);
    if (true) {
        const valid = 123;
    }
}
// valid4() // err

// 9-2. 변수 유효범위 (var)

console.log("----- 9-2. 변수 유효범위 (var) -----");

// 함수 레벨의 유효범위 (function 중괄호의 범위)

function valid5() {
    console.log(valid);
    if (true) {
        var valid = 123;
    }
}
valid5(); // undefined

function valid6() {
    if (true) {
        console.log(valid);
        var valid = 123;
    }
}
valid6(); // undefined

function valid7() {
    if (true) {
        var valid = 123;
        console.log(valid);
    }
}
valid7(); // 123

function valid8() {
    if (true) {
        var valid = 123;
    }
    console.log(valid);
}
valid8(); // 123

var valid9 = 100; // 전역변수
function valid10() {
    var valid = 200; // 지역변수
    console.log(valid9, valid);
}
valid10(); // 100, 200
// console.log(valid);  // err - 유효범위 밖에 있어서

function valid11() {
    var valid = 400;
    console.log(valid);
}
valid11(); // 400  // 전역변수보다 지역변수가 우선순위

function valid12() {
    var valid14 = 500;
    var valid15 = 800;
    console.log(valid14);

    function valid13() {
        console.log(valid15);
    }
    valid13();
}
valid12(); // 400  // 800

// 전역변수 줄이는 법
var jejudo = {
    a: 100,
    b: 200,
    c: 300,

    configMap: {
        deviceSize: null,
        total: 0,
    },
};

// var 보다 let, const 사용을 권장
// why?
// 유효범위가 커서 의도하지 않은 범위에서 변수가 사용될 수도 있고
// 메모리 누수로 발전할 수 있음 (메모리를 많이 차지)

 */
