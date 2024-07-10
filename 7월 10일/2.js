// 객체 메소드

// 객체 프포퍼티, 밸류, 키-밸류 쌍
const user = {
  name: "daon",
  job: "fe",
  sayWussup() {
    console.log("WUSSAP!!");
  },
};

console.log(Object.keys(user)); // 키 배열 반환
console.log(Object.values(user)); // 값 배열 반환
console.log(Object.entries(user)); // [키, 값] 배열 반환

// 객체에 키가 있는지 없는지 판단 - obj.hasOwnProperty("key")
console.log(user.hasOwnProperty("name")); // true
console.log(user.hasOwnProperty("daon")); // false

// forin
for (const key in user) {
  console.log(key, user[key]);
}
