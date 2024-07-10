// 비교 연산
// 모든 피연산자를 숫자형으로 전환합니다.
// 피연산자가 모두 문자열인 경우에만 사전식으로 비교합니다.

let x = "20";
let y = "10";
console.log("x > y:", x > y);
console.log("x < y:", x < y);

let z = 20;
console.log("x >= z:", x >= z);
console.log("x <= z:", x <= z);

console.log("hello" < 2); // NaN < 2
console.log(2 < "hello"); // 2 < NaN

// NaN은 모든 비교 연산에 있어서 false 반환합니다.
console.log(NaN == NaN); // false
console.log(NaN < NaN); // false

let num1 = 30;
let num2 = 20;
let num3 = 30;

console.log(num1 == 30);
console.log(num1 == "30"); // true: 동등, 부등 연산자는 자동형변환이 일어난다.
console.log(num1 == num2); // false: 값이 다를 경우
console.log(num1 != num2); // true
console.log(num1 != "30"); // false
console.log(num1 != 30n); // false

console.log(+true);
console.log(+false);
console.log(+"123");
console.log(+"aaa");
console.log(+""); // 빈 문자열
console.log(+null); // 0
console.log(+undefined); // NaN

console.log("" == false); // true
console.log("Hello" == true); // false
console.log("Hello" == false); // false
console.log("Hello" == NaN); // false

console.log(isNaN("Hello")); // true
console.log(Number.isNaN("Hello")); // false ???

console.log(null == undefined); // true
console.log(null == null); // true
console.log(undefined == undefined); // true
console.log(null == ""); // false
console.log(undefined == ""); // false

// 객체의 비교
const obj1 = { a: "1", b: "2" };
const obj2 = { a: "1", b: "2" };
const obj3 = obj1;

console.log(obj1 == obj2); // false ?
console.log(obj1 == obj3); // true ?
console.log([] == []); // false ?

// 객체를 원시 타입에 맞춰서 변환
console.log([1, 2] == "1,2"); // true ?
console.log([] == 0); // true ?

let a = 30;
let b = 20;
console.log(a === 30); // true
console.log(a === "30"); // false
console.log(a === 30n); // false

console.log(a !== 30); // false
console.log(a !== "30"); // true
console.log(a !== 30n); // true

const obj4 = [1, 2, 3, 4];
const obj5 = [1, 2, 3, 4];
const obj6 = obj5;
console.log(obj4 === obj5); // false
console.log(obj6 === obj5); // true
