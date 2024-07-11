// while문
let num = 0;
while (num < 11) {
  console.log(num);
  num++;
}

let i = 2;
while (i <= 9) {
  console.log(`----${i}단----`);
  let j = 1; // while문 시작전에 1로 초기화가 되어야됨! 그리고 블록이라서 재선언 아님
  while (j <= 9) {
    console.log(`${i} * ${j} = ${i * j}`);
    j++;
  }
  i++;
}
