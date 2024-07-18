// 이벤트 객체
// const btnFirst = document.querySelector(".btn-first");
// btnFirst.addEventListener("click", (event) => {
//   console.log(event); // PointerEvent 객체
// });

// 이벤트 흐름 관찰해보기
// 1. 캡쳐링 단계: window -> document -> body -> .. 순으로 이벤트의 타켓 요소를 찾아가는 단계
// 2. 버블링 단계: 반대로 타겟에서 부터 window로 올라옴

const parent = document.querySelector(".parent");
const btnFirst = document.querySelector(".btn");

// 캡쳐링 이벤트 -  addEventListener에 3번째 인자로 true를 넣어주면 됨
// btnFirst.addEventListener(
//   "click",
//   (event) => {
//     console.log("btn capture!");
//   },
//   true
// );

// window.addEventListener(
//   "click",
//   () => {
//     console.log("window capture!");
//   },
//   true
// ); // true : 캡처링 단계의 이벤트가 발생하도록 합니다.

// document.addEventListener(
//   "click",
//   () => {
//     console.log("document capture!");
//   },
//   true
// );

// parent.addEventListener(
//   "click",
//   () => {
//     console.log("parent capture!");
//   },
//   true
// );

// // 버블링 이벤트 - 기본적으로 addEventListener는 버블링 이벤트 등록이다.
// window.addEventListener("click", () => {
//   console.log("window bubble!");
// });

// document.addEventListener("click", () => {
//   console.log("document bubble!");
// });

// parent.addEventListener("click", () => {
//   console.log("parent bubble!");
// });

// btnFirst.addEventListener("click", (event) => {
//   console.log("btn bubble!");
// });

// // 이벤트 target, currentTarget 확인하기

// window.addEventListener("click", (e) => {
//   console.log(e.target, "target"); // 이벤트가 직접 발생한 요소
//   console.log(e.currentTarget, "currentTarget"); // 이벤트 리스너가 연결된 요소(여기서는 window)
// });

// 이벤트 위임

// 부모 요소에 이벤트를 위임
// parent.addEventListener("click", function (event) {
//   console.log("event.target:", event.target);
//   if (event.target.nodeName === "BUTTON") {
//     event.target.textContent = "버튼4";
//   }
// });

// 이벤트에서 this ?

// 함수 선언식 -> this = currentTarget
parent.addEventListener("click", function (e) {
  console.log(this, "this"); // parent
  console.log(e.target, "target"); // 이벤트 발생 지점
  console.log(e.currentTarget, "currentTarget"); // 이벤트 리스너가 연결된 요소
});

// 화살표 함수 -> this = window
parent.addEventListener("click", (e) => {
  console.log(this, "this"); // window
  console.log(e.target, "target"); // 이벤트 발생 지점
  console.log(e.currentTarget, "currentTarget"); // 이벤트 리스너가 연결된 요소
});
