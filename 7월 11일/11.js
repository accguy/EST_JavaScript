// 함수 선언 방법

func1(); // 함수 선언식은 호이스팅되어서 선언부 위에서도 함수 사용가능;;
// 1. 함수 선언식
function func1() {
  console.log("함수 선언식");
}
function func11() {
  console.log("복습");
}

// 2. 함수 표현식
// 함수 -> 값
// func2();
// 변수의 호이스팅 규칙과 동일하다.
// 변수에 함수가 할당되기 전이기 때문에 선언부 이전에 함수를 사용할수없다
let func2 = function () {
  console.log("함수 표현식");
};
func2();

let func22 = function () {
  console.log("함수 표현식은 변수에 함수를 할당하는 식이다");
};

// 3. 화살표 함수
const arrowFunction1 = (a, b) => a + b;
console.log(arrowFunction1(10, 20));

const arrowFunction2 = (c) => c * 3;
console.log(arrowFunction2(15));

// 메서드에서 콜백함수
// 함수의 인자로 다른 함수를 전달.
[1, 2, 3, 4, 5].map(function (item, index) {
  return item + index;
});
[1, 2, 3, 4, 5].map((item, index) => item + index);

// 즉시 실행 함수 ???????????????????
(function () {
  console.log("함수 즉시 실행");
})();

const iifeFunc = (function () {
  console.log("표현식으로 작성한 즉시 실행함수");
  let value = 0;

  return {
    // 리턴값: 객체 1개
    increment: function () {
      value++;
    },
    print: function () {
      console.log(value);
    },
  };
})();
console.log(iifeFunc);
// 객체의 메소드 선택
iifeFunc.increment();
iifeFunc.print();

// 단축평가를 이용한 반환값
function test() {
  return null || "b";
}
console.log(test());
