const $button = document.querySelector("button");

// element.addEventListener("이벤트 타입", 함수)
$button.addEventListener("click", () => console.log("HELLO~~"));

$button.addEventListener("click", function () {
  $button.classList.add("blue"); // 버튼에 blue 클래스를 추가함
  $li.classList.toggle("blue");
});

// const $li = document.querySelector("li.test#daon");
// $li.addEventListener("click", function () {
//   $li.classList.add("blue"); // 버튼에 blue 클래스를 추가함
// });

const div = document.createElement("div"); // div 생성, html에는 없음?
div.classList.add("blue");
// document.body.appendChild(div);
document.querySelector("ul").appendChild(div); // ul의 자식으로 위치시킴
document.querySelector("ul").removeChild(div); // 위치 시킨걸 취소
div.innerText = "oh...";

const myBtn = document.querySelector("button");
const myUl = document.querySelector("ul");

myBtn.addEventListener("click", function () {
  for (let i = 1; i < 10; i++) {
    const myLi = document.createElement("li");
    myLi.innerText = `2 * ${i} = ${2 * i}`;
    myUl.appendChild(myLi);
  }
});
