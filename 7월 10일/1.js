// 객체 (Object)
const obj = {
  name: "Daon",
  company: "Weniv",
  sayHello1: function () {
    console.log("Hello world1");
  },
  // 함수의 경우 축약이 가능
  sayHello2() {
    console.log("Hello world2");
  },
};

// Auto boxing: 원시타입도 객체타입처럼 사용할수있게함 -> 메소드 사용할수있게함
// 원시값에 대해 임시적인 객체를 만듬 -> 메소드를 사용하고 나면 사라짐

// 객체의 요소에 접근하기
console.log(obj["name"]);
console.log(obj["company"]);
// 점표기법 -> 키 값이 변수명 작성 규칙을 만족할 때만 가능함
console.log(obj.name);
console.log(obj.company);

// 메소드 호출
obj["sayHello1"]();
obj["sayHello2"]();
obj.sayHello1();
obj.sayHello2();

// 따옴표가 없으면 변수로 작동하기 때문에 키값은 항상 따옴표로 해야됨
console.log(obj["name"]);
console.log(obj[name]); // undefined
const key = "name";
console.log(obj[key]);

// 프로퍼티 변경
obj["name"] = "Dasol";
console.log(obj["name"]);

// 프로퍼티 추가
obj["job"] = "rapper";
console.log(obj);

// 프로퍼티 삭제 - delete obj["key"]
delete obj["job"];
delete obj["company"];
delete obj["sayHello2"];
console.log(obj);

// 프로퍼티 값이 있는지 확인 - "key" in obj
console.log("name" in obj);
console.log("sayHello1" in obj);
console.log("company" in obj);
console.log("sayHello2" in obj);
