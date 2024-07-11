// 구조 분해 할당 (Destructuring)
// 구조를 분해해서 변수에 할당하는 기능

// 객체
const foods = {
  food1: "과일",
  food2: "생선",
  food3: "채소",
};

let food1, food2, food3;
food1 = foods["food1"];
food2 = foods["food2"];
food3 = foods["food3"];
console.log(food1, food2, food3);
// 가져와야되는 값마다 변수에 할당을 해야되는 번거로움이 있음

const obj = { one: 1, two: 2 };
// let { 키 : 변수명 } = 객체 // 변수를 선언하고 키에 해당하는 값을 객체에서 가져와 할당한다.
let { two: myNum } = obj;
let { one, two } = obj; // 변수이름과 객체의 키이름이 동일하면 그냥 변수명만 써도 값이 할당된다.
console.log(myNum);
console.log(one, two);

let { food1: breakfast, food2: lunch, food3: dinner } = foods;
let { f1, f2, f3 } = foods; // 변수가 객체의 키이름이 달라서 값이 변수에 할당이 안됨
console.log(breakfast, lunch, dinner);
console.log(f1, f2, f3); // undefined

// 배열
const arr = [1, 2, 3, 4, 5];
let [a, b, c] = arr; // 배열의 경우 인덱스가 동일한 값이 변수에 할당된다. // 배열에 있는 값이 변수에 할당됨.
console.log(a, b, c);
let [d, , , , f] = arr; // 한칸 건너 뛸수있음
console.log(d, f); // 1 5

let [x, y, z] = [1, 2];
console.log(x, y, z);

// 함수의 매개변수
// 매개변수를 배열이나 객체로 사용해서 얻는 이점: ??????????

function fucn1(a, b) {
  console.log(a, b);
}
func1({ a: "hello", b: "world" });
// 매개변수 {a,b} = {a:"hello", b:"world"}

func1({ b: 20, a: 10 });

////////////////////////////////////////////////////
console.log("--- 함수의 매개변수 디스트럭쳐링 ---");
function func1({ a, b }) {
  console.log(a, b);
}
// obj['a'], obj['b']
func1({ a: "hello", b: "world" });
// 매개변수 {a, b} = {a:'hello', b:'world'} 인자

func1({ b: 20, a: 10 }); // 10 20
// {a, b} = {b: 20, a: 10}

function func2([a, b, c]) {
  console.log(a, b, c);
}
func2([10, 20, 30]);
// 매개변수 [a, b, c] = [10, 20, 30] 인자
// 순서대로 들어간다!
