// label
outer: for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    if (i + j === 3) {
      break outer; // break [탈출할 반복문 라벨];
    }
    console.log(i, j);
  }
}
console.log("---");

outer2: for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    if (i + j === 3) {
      continue outer2; // 바깥쪽 for문의 진행중이던 i 단계 생략 (내부 for 문 스킵하고 i++)
    }
    console.log(i, j);
  }
}
