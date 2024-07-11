// 이중반복문
for (let i = 2; i <= 9; i++) {
  console.log(`----${i}단----`);
  for (let j = 1; j <= 9; j++) {
    console.log(`${i} * ${j} = ${i * j}`);
  }
}

// 2차원 배열 순회
const arr = [
  [1, 2, 3],
  [4, 5],
];
for (let i = 0; i < arr.length; i++) {
  // j < arr[i].length
  for (let j = 0; j < arr[i].length; j++) {
    console.log(arr[i][j]);
  }
}
