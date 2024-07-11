// do while

let num = 1;
do {
  console.log(num);
  num++;
} while (num < 11);

let inpNum;
// do {
//   inpNum = window.prompt("숫자를 입력할 때까지 입력을 받습니다.");
// } while (isNaN(inpNum));

// continue
let num1 = 0;
do {
  num1++;
  if (num1 >= 5 && num1 <= 7) continue; // skip
  console.log(num1);
} while (num1 < 11);
