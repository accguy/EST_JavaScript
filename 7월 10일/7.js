// 형 변환

// 1. String()
console.log(String(23));
console.log(typeof String(23));
console.log(String(NaN));
console.log(typeof String(NaN));
console.log(String(true));
console.log(String(null));
console.log(String(undefined));

// 2. toString()
console.log(false.toString());
// console.log(2.toString());
console.log((2).toString()); // 정수의 경우 괄호로 묶어줘야됨
console.log((3.5).toString());
console.log((3).toString(2)); // 2진수로 변환
// null, undefined 은 오류 발생
// console.log(null.toString());
// console.log(undefined.toString());

// 3. 자동 형 변환을 이용
console.log(3 + "");
console.log(true + "");
console.log(null + "");
console.log(undefined + "");
