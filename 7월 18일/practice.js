const article = document.querySelector(".cont-select");
const ul = document.querySelector(".list-member");
const btn = document.querySelector(".btn-select");

btn.addEventListener("click", function (e) {
  if (ul.style.display === "none") {
    ul.style.display = "block";
  } else {
    ul.style.display = "none";
  }
  // btn.classList.toggle("on");
});

const p = document.createElement("p");
article.prepend(p); // article 맨위에 추가
ul.addEventListener("click", function (event) {
  // <ul class="list-member">을 누르면 내용이 전부 다 들어가니까 예외 처리
  if (event.target.nodeName == "BUTTON") {
    p.innerText = event.target.innerText;
  }
  ul.style.display = "none";
});
