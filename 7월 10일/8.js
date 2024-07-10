//  숫자형으로 변환

// 1. Number()
console.log(Number("123")); // 123
console.log(Number("Hi")); // NaN
console.log(Number(true)); // 1
console.log(Number(false)); // 0
console.log(Number(null)); // 0
console.log(Number(undefined)); // NaN

// 2. parseInt, parseFloat

// 3. 단항 연산자 +
console.log(+"12345");
console.log(+"Hi");
console.log(+true);
console.log(+undefined);

// 4. 자동 형변환 -> 곱하기 연산자 * 1
console.log("12345" * 1);
console.log("abc" * 1);
console.log(undefined * 1);
