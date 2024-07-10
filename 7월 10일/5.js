// 논리연산

// 논리곱 - &&
console.log(true && true);
console.log(true && false);
console.log(false && false);

let age = 28;
console.log(age > 5 && age < 30); // true
console.log("aa" && "bb"); // bb ?? 둘다 truethy 하면 마지막 문자열을 출력한다.

// 단축평가
console.log(age > 5 && false && age < 30);
console.log(age > 5 && "" && age < 30); // 첫번째로 falsy한 값을 반환한다.
console.log(age > 5 && age < 30 && "cc"); // 마지막으로 truthy한 값을 반환한다.

let isLoggedIn = true;
const result = isLoggedIn && console.log("hiii"); // 마지막으로 truthy한 console.log("hiii")
console.log(result);

const user = {
  name: "다온",
  address: {
    city: "인천",
  },
};
console.log(user.number); //undefined
console.log(user.number && console.log(user.address));

// 논리합 - ||
console.log(`true || true : ${true || true}`);
console.log(`true || false : ${true || false}`);
console.log(`false || true : ${false || true}`);
console.log(`false || false : ${false || false}`);

let age2 = 20;
console.log(age2 < 10 || age2 < 25); // true
// 첫번째로 truthy한 값을 반환
console.log("" || "licat" || NaN || null || undefined); // licat
// 마지막으로 falsy한 값을 반환
console.log("" || NaN || null || undefined); // undefined

// let name = window.prompt("이름:");
name = name || "사용자";
console.log("이름은", name);

// 논리부정 - !
console.log(!true);
console.log(!false);

// 논리부정을 두번 !! -> boolean 타입으로 변환
console.log(!!23);
console.log(!!"123");
console.log(!!"kkk");
console.log(!!null);
console.log(!!NaN);
console.log(!!"");
