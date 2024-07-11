// 반환값
// return 값

function sum(a, b) {
  return a + b;
  console.log("리턴문 뒤에 오는 코드는 실행되지 않는다.");
}
console.log(sum(2, 3));

function sub(a, b) {
  return a - b;
}
console.log(sub(2, 3));

function sumNumbers(a, b) {
  if (isNaN(a) || isNaN(b)) {
    console.log("숫자가 아님.");
    return; // 함수 종료
  }
  return a + b;
}
console.log(sumNumbers(2, 3));
console.log(sumNumbers(2, "문자열"));
