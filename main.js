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

console.log(parseInt("문자열")); // NaN
console.log(NaN - 0); // NaN
console.log("문자열" - 0); // NaN

// 문자열에서 숫자를 빼거나 곱하거나 나눌 때 문자열이 숫자로 형 변환
// 문자열에 기본적으로 Number 적용 (parseInt나 parseFloat가 아님)
console.log("3" - 0); // 3
console.log(typeof ("3" - 0)); // number
console.log("3월" - 0); // NaN
console.log(Number("3월")); // NaN
console.log(Number("3월") - 0); // NaN
console.log(parseInt("3월")); // 3
console.log(parseInt("3월") - 0); // 3

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

1-5. 데이터 타입 - 확인 (typeof)

*/

console.log("----- 1-5. 데이터 타입 - 확인 (typeof) -----");

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

// break : 조건이 일치하면 정지
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

6-1. 배열

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

6-2. 배열 메서드 (수정)

*/

console.log("----- 6-2. 배열 메서드 (수정) -----");

// 배열 요소 추가
const array2 = ["b", "d"];

array2[2] = "d";
console.log(array2); // (3) ["b", "d", "d"]

// 배열 마지막 자리에 요소 추가
array2[array2.length] = "e";
console.log(array2); // (4) ["b", "d", "d", "e"]

array2.push("f");
console.log(array2); // (5) ["b", "d", "d", "e", "f"]

// 배열 첫번째 자리에 요소 추가
array2.unshift("a");
console.log(array2); // (6) ["a", "b", "d", "d", "e", "f"]

// const는 값을 바꾸지(재할당) 못하지만 객체 내부의 속성이나 배열 요소는 수정 가능
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

// 배열 중간 요소 제거
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

/*

6-3. 배열 메서드 (조회)

*/

console.log("----- 6-3. 배열 메서드 (조회) -----");

// 배열에 요소가 있는지 없는지 찾기
console.log(array4.includes("c")); // true
console.log(array4.includes("d")); // false

// 배열의 앞에서부터 찾기
console.log(array4.indexOf("c")); // 2

// 배열의 뒤에서부터 찾기
console.log(array4.lastIndexOf("c")); // 4

// 배열에 요소가 없을 경우
console.log(array4.lastIndexOf("d")); // -1

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

6-5. 배열 메서드 응용하기

*/

console.log("----- 6-5. 배열 메서드 응용하기 -----");

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
