// 배열의 요소를 추가하거나 삭제
const arr = [10, 20, 30];

// push & pop
console.log("--- push & pop ---");
const length = arr.push(40); // 길이값을 반환
console.log(arr);
console.log("length", length);
arr.push(50, 60, 70); // 여러개의 요소도 추가가 가능
console.log(arr);

const element = arr.pop(); // 마지막 요소을 반환
console.log(arr);
console.log("element", element); // 40

console.log("--- unshift & shift ---");
arr.unshift(50); // 길이값을 반환
console.log(arr);
arr.shift(); // 첫번째 요소를 반환
console.log(arr);

// splice
// splice(시작, 개수, 내용);
// splice(시작, 개수); -> 내용이 없으므로 (없음)으로 변경, 즉 삭제가 된다.
console.log("--- splice ---");
const arr2 = [1, 2, 3];
arr2.splice(1, 0, 4, 5, 6); // 추가
console.log(arr2); // [1, 4, 5, 6, 2, 3]

// 5, 6을 삭제
arr2.splice(2, 2);
console.log(arr2); // [1, 4, 2, 3]

// 변경
arr2.splice(3, 1, 5, 8);
console.log(arr2); // [1, 4, 2, 5, 8]

// slice
console.log("--- slice ---");
const fruits = ["사과", "바나나", "체리", "블루베리", "두리안"];
console.log(fruits.slice(1, 3));
console.log(fruits.slice(3));
const fruits2 = fruits.slice(); // 배열 전체를 복사할 수 있다.
fruits2[0] = "딸기";
console.log("fruits:", fruits);
console.log("fruits2:", fruits2);

console.log("--- sort ---");
fruits.sort();
console.log(fruits); // 유니코드 -> 사전식

const numbers = [1, 5, 2, 4];
numbers.sort();
console.log(numbers);

const numbers2 = [5, 100, 27, 36];
numbers2.sort();
console.log(numbers2);

// 숫자를 오름차순
numbers2.sort(function (a, b) {
  return a - b;
});
console.log(numbers2);

// 숫자를 내림차순
numbers2.sort(function (a, b) {
  return b - a;
});
console.log(numbers2);

console.log("--- indexOf ---");
const arr3 = [1, 2, 3, 1, 2, 3, 4];
console.log(arr3.indexOf(2));
console.log(arr3.indexOf(5));
console.log(arr3.indexOf(2, 3));

console.log("--- includes ---");
console.log(arr3.includes(3));
console.log(arr3.includes(5));
