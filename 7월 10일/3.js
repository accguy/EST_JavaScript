// 연산

//  1. 산술연산
let x = 10;
let y = 3;
// let y = "3";
// let y = "hello";

console.log("x + y = ", x + y); // 더하기는 피연산자 중에 하나라도 문자열이라면 문자열 합치기 연산을 합니다.
console.log("x - y = ", x - y);
console.log("x * y = ", x * y);
console.log("x / y = ", x / y);
console.log("x % y = ", x % y);
console.log("x ** y = ", x ** y);

let a = 0;
a += 3;
console.log(a);
a -= 13;
console.log(a);
a *= 5;
console.log(a);
a /= -5;
console.log(a);
a %= 7;
console.log(a);
a **= 3;
console.log(a);

let num = 0;
console.log(num++); // 후위 증감 연산: 참조 후 변수 값 증가(재할당)
console.log(num);
console.log(num);
console.log(++num); // 전위 증감 연산: 변수 값 증가(재할당) 후 값 참조
console.log(num);
