// switch

// switch(표현식){
//   case 값1:
//     // 실행
//   case 값2:
//     // 실행
//   default:
//     // 실행
// }

let name = "jiwon";
switch (name) {
  case "daon":
    console.log("issa daon");
    break;
  case "jiwon":
    console.log("issa jiwon");
    break;
  default:
}

const today = new Date();
console.log("오늘은", today.getDay());
// new Date().getDay()
// 일(0) 월(1)~토(6)
switch (today.getDay()) {
  case 1:
    console.log("오늘은 월요일");
    break;
  case 2:
    console.log("오늘은 화요일");
    break;
  case 3:
    console.log("오늘은 수요일");
    break;
  case 4:
    console.log("오늘은 목요일");
    break;
  case 5:
    console.log("오늘은 금요일");
    break;
  case 6:
    console.log("오늘은 토요일");
    break;
  case 0:
    console.log("오늘은 일요일");
    break;
  default:
    console.log("무슨 요일이지?");
}
