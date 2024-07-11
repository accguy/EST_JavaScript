// 전개 구문 ...
// 배열 혹은 객체를 합치거나 복사할때 사용

// 배열
const fruits = ["사과", "귤", "수박"];
const fish = ["조기", "갈치", "상어"];
const food = [...fruits, ...fish];
console.log(food);
console.log(fruits.concat(fish));

const copyFruits = [...fruits]; // 얉은 복사
copyFruits.push("파인애플");
console.log("fruits:", fruits);
console.log("copyFruits:", copyFruits);

// 객체
const weniv1 = { A: 1, B: 2 };
const weniv2 = { C: 3 };
const weniv3 = { ...weniv1, ...weniv2 };
console.log(weniv3);

const me = { name: "weniv", address: "jeju" };
const copyMe = { ...me };
copyMe.number = 1;
console.log("me", me);
console.log("copyMe", copyMe);

// 객체의 전개구문에서 동일한 key가 있으면 값이 덮어쓰기가 된다. 가장 마지막에 오는 값(seoul)이 됨.
const obj1 = { name: "weniv", address: "jeju" };
const obj2 = { address: "seoul" };
const obj = { ...obj1, ...obj2 };
console.log(obj);
console.log(obj.address); // seoul
