const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n").map(el => el.split(" ").map(Number));

let curPrice = input[2][0]; // 현재 가격
let result = 0;

for (let i = 0; i < input[0]-1; i++) {
    // 현재 가격 * 거리
    result += curPrice * input[1][i];
    // 다음 가격이 더 싸면 현재 가격 업데이트
    if(curPrice > input[2][i+1]) curPrice = input[2][i+1];
}

console.log(result);