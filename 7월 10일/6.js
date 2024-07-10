// ES2020에 도입된 연산 두가지

// nullish - ??
// or 비슷함 -> 첫번째로 오는 true

// 첫번째로오는 (undefined) or (null 아닌값) 을 반환
console.log(null ?? null ?? null);
console.log(null ?? null ?? undefined);
console.log(null ?? "" ?? undefined); // 빈 문자열 반환
console.log(null ?? "hi" ?? undefined);

// let name = window.prompt("이름을 입력해주세요");
console.log(name);
name = name ?? "사용자";
console.log("이름: ", name); // 빈 문자열을 반환

// 옵셔널 체이닝 - ?.
let user = {
  name: "경현",
  address: {
    city: "jeju",
  },
  sayHello() {
    console.log("sd");
  },
};
console.log(user.number); // undefined
// console.log(user.number.location);
console.log(user && user.number && user.number.location);
console.log(user?.address?.city); // jeju
console.log(user?.number?.location); // undefined
console.log(user.sayHello?.()); // 메소드
// 유효성 평가에 사용

// 옵셔널 + 널리쉬
console.log(user?.number?.location ?? "기본값");
console.log(user?.address?.city ?? "기본값");
