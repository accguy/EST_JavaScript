// 반복문
const weniv_friends = ["licat", "binky", "gary", "soulgom", "mura"];

// let text = "<ul>\n";
// text += "<li>" + weniv_friends[0] + "</li>\n";
// text += "<li>" + weniv_friends[1] + "</li>\n";
// text += "<li>" + weniv_friends[2] + "</li>\n";
// text += "<li>" + weniv_friends[3] + "</li>\n";
// text += "<li>" + weniv_friends[4] + "</li>\n";
// text += "</ul>\n";
// console.log(text);
// document.body.innerHTML = text;

let text2 = "<ul>";
for (let i = 0; i < weniv_friends.length; i++) {
  text2 += "<li>" + weniv_friends[i] + "</li>";
}
text2 += "</ul>\n";
document.body.innerHTML = text2;

// 1. 1부터 100까지의 짝수 합
let sum = 0;
for (let i = 0; i <= 100; i += 2) {
  sum += i;
}
console.log(sum);

// 2. 반평균
let result = 0;
const score = [84, 92, 39, 55, 71];
for (let i = 0; i < score.length; i++) {
  result += score[i];
}
console.log(result / score.length);
