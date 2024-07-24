const $input = document.querySelector("input");
const $button = document.querySelector("button");
const $ul = document.querySelector("ul");
const $form = document.querySelector("form");

// fetchTodos
const fetchTodos = async function () {
  const res = await fetch("http://localhost:3000/todos");
  const todos = await res.json();

  todos.forEach((item) => {
    const $li = document.createElement("li");
    const $newBtn = document.createElement("button");
    $newBtn.innerText = "삭제";
    $newBtn.classList.add(`id_${item.id}`);

    $newBtn.addEventListener("click", function (e) {
      deleteTodo(e.target.classList[0].split("_")[1]);
    });

    $li.appendChild(document.createTextNode(item.todo));
    $li.appendChild($newBtn);
    $ul.appendChild($li);

    $li.style.marginBottom = "10px";
    $newBtn.style.marginLeft = "10px";
  });
};
// 추가 함수
const addTodo = function () {
  const todoInput = $input.value;
  const newTodoData = {
    todo: todoInput,
    done: false,
  };
  console.log(todoInput);
  fetch("http://localhost:3000/todos", {
    method: "POST",
    header: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newTodoData),
  });
};

// 삭제 함수
const deleteTodo = function (id) {
  // console.log(todoInput);
  fetch(`http://localhost:3000/todos/${id}`, {
    method: "DELETE",
  }).then(() => {
    $ul.innerHTML = ""; // 기존 리스트를 비웁니다.
    fetchTodos();
  });
};

fetchTodos();
$form.addEventListener("submit", function (e) {
  e.preventDefault();
  addTodo();
});
