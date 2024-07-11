function sum(num1, num2) {
  // 함수 선언
  // 매개변수(parameter)
  return num1 + num2;
}
sum(3, 4); // 인자(argument) // 함수 실행
function sumNumbers(a = 10, b = 20, c = 10) {
  console.log(`${a} ${b} ${c}`);
  return a + b + c;
}
console.log(sumNumbers(1, 2, 3, 4, 5, 6)); // 인자의 개수가 매개변수보다 크면 순서대로 사용
console.log(sumNumbers(1, 2)); // 인자의 개수가 더 적으면 입력안된 나머지 인자는 undefined로 들어감
console.log(sumNumbers(0, undefined, 0)); // 인자가 undefined이면 기본값이 적용됨
// -> 값이 전달되지 않았거나 undefined가 전달이 되면 기본값을 적용합니다.
console.log(sumNumbers(0, null, 3)); // null -> null 그대로 들어감.
console.log("---------");

// 원시 call
let number = 10;
function test(num) {
  num = num + 10;
  console.log("function", num);
}
test(number);
console.log(number);

// 객체 call ???????
const object = { a: 1, b: 2 };
function test2(obj) {
  obj.c = 3; // 객체가 수정됨
  obj = { name: "hati" }; // 다른 객체를 할당함
  console.log("function", obj);
}
test2(object);
console.log(object);
