// 삼항연산자
// (조건식) ? (참일 때 실행할 코드) : (거짓일 때 실행할 코드)
let num = true ? 1 : 0;
num = false ? 1 : 0;
console.log(num);

const result = false ? console.log("true") : console.log("false");
console.log(result); // undefined

const item = num === 0 ? "a" : "b";
console.log(item);

// if문 -> 문
// 삼항연산자 -> 표현식

// 삼항연산자 중첩
let price = 4500;
let message = price > 6000 ? "비싸요" : price > 3000 ? "적당해요" : "저렴해요";
console.log(message);
