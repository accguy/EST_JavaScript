console.log("--- forEach ---");
const fruits3 = ["참외", "키위", "감귤"];
const result = [];
const resultArr = fruits3.forEach(function (item, index) {
  console.log(item, index);
  fruits3[index] = item + "💗";
  result.push(item + "💗");
});
console.log(fruits3);
console.log(result);
console.log("resultArr-> ", resultArr);

console.log("--- map ---");
const arr4 = [10, 20, 30];
const newArr = arr4.map(function (item, index) {
  console.log(item, index);
  return item * index;
});
console.log(newArr);
console.log(arr4);

console.log("--- filter ---");
const arr5 = [1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5];
const filterArr = arr5.filter(function (item, index) {
  // 짝수만 -> 짝수로 2로 나누면 나머지가 항상 0이 나와요.
  return item % 2;
});
console.log(filterArr);

console.log("--- reduce ---");
const arr6 = [1, 2, 3, 4, 5];
// accumulator 누적값
// currentValue 현재값
const reduceRes = arr6.reduce(function (a, c) {
  return a + c;
}, 0);
console.log(reduceRes);

const redRes = [].reduce(function (a, c) {
  console.log("in reduce: ", a, c);
  return a + c;
}, 0);
console.log(redRes);

console.log("--- join ---"); // split의 반대 기능
const arr7 = ["hello", "world", "weniv"];
console.log(arr7.join(" "));
console.log(arr7.join("-"));

console.log("--- concat ---");
const arr8 = [1, 2, 3];
const arr9 = [4, 5, 6];

// 배열은 풀어서, 값은 요소로 넣는다.
// 원본 배열은 수정되지 않는다.
const concatRes = arr8.concat(arr9, [[7, 8]], [10]);
console.log(concatRes);
console.log(arr8);
console.log(arr9);

const arr10 = [0, 1, [2, 3]];
const copyArr = arr10.concat();
copyArr[0] = 10;
copyArr[2][0] = 20;
console.log("origin:", arr10);
console.log("copy: ", copyArr);
// concat = 얉은 복사
// 카피본의 원시값인 0을 수정해도 원본배열은 변하지 않는다.
// 카피본의 3번째 요소인 배열을 수정하면 원본배열도 바뀐다.
// 왜냐하면 copyArr[2]는 해당 배열의 원본배열에 있는 내부 배열과 같은 메모리 주소값을 가리킨다.
//
