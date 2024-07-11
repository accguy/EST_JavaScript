let i = 0; // 초기화식 바깥에
for (; i < 5; ) {
  // 조건식은 생략불가
  console.log(i);
  i++; // 증감식 내부에
}
