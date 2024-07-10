// 숫자형 메소드

console.log();
console.log("---parseInt---");
// 문자열 -> 숫자
console.log(parseInt("200"), typeof parseInt("200"));
console.log(parseInt("300px"), typeof parseInt("300px"));
console.log(parseInt("12.5px"), typeof parseInt("12.5px"));
console.log(parseInt("width: 12.5px"), typeof parseInt("width: 12.5px"));
console.log(parseInt("0011", 2), typeof parseInt("1010", 2));

console.log("---parseFloat---");
console.log(parseFloat("2.5px"), typeof parseFloat("2.5px"));
console.log(parseFloat("2.5.7px"), typeof parseFloat("2.5.7px"));

//
console.log("---isNaN---");
console.log(isNaN(2));
console.log(isNaN("2"));
console.log(isNaN("a"));
console.log(isNaN(undefined));
console.log(isNaN(1 == 1));

console.log("---isNaN---");
console.log(isNaN(23)); // true
console.log(isNaN(undefined)); // true
console.log(isNaN("2345")); // false
console.log(isNaN("hello")); // true
// isNaN : 자동으로 숫자로 변환해서 확인합니다. undefined는 숫자로 변환하면 NaN가 됩니다.

console.log("---Number.isNaN---");
console.log(Number.isNaN(23)); // false
console.log(Number.isNaN(undefined)); // false
console.log(Number.isNaN("2345")); // false
console.log(Number.isNaN("hello"));
console.log(Number.isNaN(NaN));
console.log(Number.isNaN("hello" * 3));
// Number.isNaN : 형변환X, 숫자형 NaN일 경우에만 true를 반환합니다.

console.log("---toFixed---");
const pi = 3.1415926;
console.log(pi.toFixed(2));
console.log(typeof pi.toFixed(10));
console.log(pi.toFixed());
// 결과는 문자형
// Math 객체

// 원주율
console.log(`Math.PI: ${Math.PI}`);

// 숫자를 버림(floor), 반올림(round), 올림(ceil)
console.log(`Math.floor: ${Math.floor(4.7)}`);
console.log(`Math.round: ${Math.round(4.7)}`);
console.log(`Math.round: ${Math.round(4.3)}`);
console.log(`Math.ceil: ${Math.ceil(4.3)}`);

// 정수부만 가져옴
console.log(`Math.trunc: ${Math.trunc(4.7)}`);
console.log(`Math.trunc: ${Math.trunc(-1.5)}`);
console.log(`toFixed: ${(-1.4).toFixed(0)}`); // 반올림

// 제곱과 제곱근
console.log(`Math.pow: ${Math.pow(2, 3)}`);
console.log(`2 ** 3 = ${2 ** 3}`);
console.log(`Math.sqrt: ${Math.sqrt(16)}`);

// 절댓값
console.log(`Math.abs: ${Math.abs(-5)}`);
console.log(`Math.abs: ${Math.abs(4)}`);

// 랜덤숫자
console.log(`Math.random: ${Math.random()}`);
// 0부터 1미만의 랜덤숫자를
// 1부터 10까지
// 0 <= random < 1
// 0 <= random < 10
// 1 <= random < 11
// random -> 1, 1.1, 10.9999
// 버림 1부터 10까지의 랜덤 정수 숫자를 얻을 수 있게
console.log(`1부터 10까지의 랜덤 정수 :${Math.floor(Math.random() * 10 + 1)}`);

// 가장 큰 값 max, 가장 작은 값 min
console.log(`Math.max: ${Math.max(10, 20, 30, 40, 20)}`);
console.log(`Math.min: ${Math.min(10, 20, 30, 40, 20)}`);

// BigInt
// ES2020
console.log(Number.MIN_SAFE_INTEGER);
console.log(Number.MAX_SAFE_INTEGER);
let num = 123123123n;
console.log(typeof num); // bigint

// BigInt
// ES2020 도입
// BigInt와 숫자형은 다른 타입

console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MIN_SAFE_INTEGER);

let bigNum1 = 123456n;
console.log(typeof bigNum1);

// bigint 연산
console.log(5n / 2n); // BigInt 2n
// console.log(5n / 2); // error: BigInt와 숫자형은 연산 불가
console.log(5n / BigInt(2));

// BigInt 변환 시 주의사항
// 문자열 형태로 전달하면 안전함
console.log(BigInt("9007199254740992"));
console.log(BigInt("9007199254740993"));
console.log(BigInt("9007199254740994"));
console.log(BigInt("9007199254740995"));

// boolean
// 참과 거짓을 나타냄
// 조건문이나 반복문에서 나타남.
let bool1 = true;
let bool2 = false;

console.log(typeof bool1, typeof bool2);

// Truthy : Boolean으로 타입을 변환했을 때, true가 되는 값
// Falsy: Boolean으로 타입을 변환했을 때, false가 되는 값
// 값을 형변환을 해보면 됩니다. -> 앞에 !!
console.log("---Truthy---");
console.log(`true: ${!!true}`);
console.log(`23: ${!!23}`);
console.log(`'hello': ${!!"hello"}`);
console.log(`배열: ${!![]}`);
console.log(`객체: ${!!{ name: "weniv" }}`);

console.log("---Falsy---");
console.log(`false: ${!!false}`);
console.log(`0 : ${!!0}`); // 0은 falsy, 나머지 숫자는 truthy
console.log(`'' : ${!!""}`);
console.log(`null: ${!!null}`);
console.log(`undefined: ${!!undefined}`);
console.log(`NaN: ${!!NaN}`);

// undefined

let a;
console.log(a);
console.log(typeof a);

// if (b) {
//   console.log("b입니다");
// }

console.log(`typeof b ${typeof b}`);
console.log(`type(typeof b) ${typeof typeof b}`);

if (typeof b === "undefined") {
  console.log("b는 선언되지 않았습니다");
}

//혹시 "undefined"와 undefined는 다른가요?
console.log(typeof "undefined"); // 문자열
console.log(typeof undefined); // undefined

// null
// 사용자의 로그인 정보
let isLoggedIn = true;
let currentUser = {
  name: "licat",
  level: 3,
};

// 로그아웃
// 로그인되어있음 isLoggedIn 거짓
// currentUser 빈 값
isLoggedIn = false;
currentUser = null; // 개발자가 비어있는 값을 나타내기위해 사용
console.log(typeof currentUser); // null이 object 나오는 것은 오류이다.
console.log(Object.prototype.toString.call(null));

// Symbol
// ES6

let sym1 = Symbol();
let sym2 = Symbol();
console.log(sym1);
console.log(sym2);

let sym3 = Symbol("name");
let sym4 = Symbol("name");
console.log(sym3 === sym4);

const passwordSymbol = Symbol("password");
const licat = {
  name: "라이캣",
  [passwordSymbol]: "#0000",
  name: "라이캣2",
};
console.log(licat);

// 객체타입

let arr1 = [1, 2, 3];
let arr2 = arr1;

arr2[0] = 10;
console.log(`arr1: ${arr1}`);
console.log(`arr2: ${arr2}`);
// arr2로 arr1을 수정할 수 있다.

// 배열 선언
const arr = []; // 빈 배열
const arr2 = [1, 2, 3, 4]; // 요소를 갖는 배열

console.log(arr);
console.log(arr2);

// Array 생성자 함수
const arr3 = new Array(10, 20, 30);
console.log(arr3);

// 생성자함수 주의사항
const arr4 = new Array(5); // 인자가 하나인데 숫자다 -> 길이
console.log(arr4);
console.log(new Array(1));

const arr5 = new Array("a");
console.log(arr5);
