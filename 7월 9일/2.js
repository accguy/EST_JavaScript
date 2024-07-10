//
const arr = [1, 2, 3];

// push
const length = arr.push(4);
console.log(arr);
console.log("length:", length);

const numbers = [1, 4, 5, 100, 27];
numbers.sort; // 사전식이라서 문자열로 취급하여 정렬
console.log(numbers);

numbers.sort(function (a, b) {
  return a - b;
});
console.log(numbers);

numbers.sort(function (a, b) {
  return b - a;
});
console.log(numbers);

numbers.sort(function (b, a) {
  return a - b;
});
console.log(numbers);

numbers.sort(function (b, a) {
  return b - a;
});
console.log(numbers);

const fruits3 = ["참외", "감귤", "사과"];
fruits3.forEach(function (item, index) {
  console.log(item, index);
  fruits3[index] = item + "🩷";
});
fruits3.forEach(function (item, index) {
  console.log(item, index);
  fruits3[index] = item + "🩷";
});
fruits3.forEach(function (item, index) {
  console.log(item, index);
  fruits3[index] = item + "🩷";
});

const res = [];
fruits3.forEach(function (item, index) {
  res.push(item + "🩷");
});
console.log(res);

const arr2 = [1, 2, 3, 4];

// forEach 와 map 메소드의 차이를 정리할것

const arr3 = [1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5];
const filterArr = arr3.filter(function (item3, index) {
  return item3 % 2 === 0; // filter메소드는 리턴값이 true인 item들만 반환한다.
});
console.log(filterArr);

const arr4 = [1, 2, 3, 4, 5];
// a(accumulator) c(currentValue)
const reduceArr = arr4.reduce(function (a, c) {
  return a + c;
}, 0); // 초기값 설정해주어야된다(특히 빈배열의 경우에 초기값이 없으면 에러 발생함.)
console.log(reduceArr);

const arr5 = ["aaa", "bbb", "ccc"];
console.log(arr5.join("---"));

const arr6 = ["aaa", "bbb", "ccc"];
const arr7 = ["ddd", "eee", "fff"];
console.log(arr6.concat(arr7));
