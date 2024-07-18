const myBtn = document.querySelector("button");
const myP = document.querySelector("p");
const myInput = document.querySelector("input");

// myBtn.addEventListener("click", function () {
//   // console.log(typeof myInput.value); // string
//   if (myInput.value.length < 2) {
//     alert("2글자 이상 입력해라.");
//     return; // 함수 종료 -> 아래 코드 실행 안되도록 함.
//   }
//   myP.textContent = myInput.value; // input 태그에 있는 값을 가져옴
// });

// 'input' 이벤트 -> 실시간으로 값 반영됨.
myInput.addEventListener("input", () => {
  myP.textContent = myInput.value;
});

// myP.innerHTML = "<strong>I'm Strong!!</strong>";

// innerHTML vs innerText vs textContent

// innerHTML 은 요소(element) 내에 포함된 HTML 마크업을 가져오거나 설정합니다.
// 중요한 기능은 innerHTML로 값을 할당할 때, 마크업으로 변환할 수 있는 문자열이 있다면
// 마크업으로 만들어 보여준다는 것 입니다.
// 만약 그런 문자열이 없다면 그냥 문자열만 컨텐츠로 설정합니다.

// innerText 속성은 요소의 렌더링된 텍스트 콘텐츠를 나타냅니다.
// (렌더링된에 주목하세요. innerText는 텍스트 내에 문법적으로 처리가 가능한 텍스트가 있으면
// 처리가 끝난 결과물을 텍스트로 전달합니다.)

// textContent 속성은 노드의 텍스트 콘텐츠를 표현합니다.
// 컨텐츠를 단순히 텍스트로만 다룹니다.
