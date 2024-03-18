// 그리디

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const classes = [];
for (let i = 1; i < input.length; i++) {
    const [start, end] = input[i].split(" ");
    // 시작시간 끝시간 나누기
    classes.push([Number(start), 1]);
    classes.push([Number(end), -1]);
}

// 정렬
classes.sort((a, b) => {
    // 시작 시간이 같으면 종료 시간이 먼저 오도록 정렬
    if(a[0] == b[0]) return a[1] - b[1];
    // 시작 시간이 다르면 강의의 시작 시간을 기준으로 오름차순 정렬
    return a[0] - b[0];
})

let classroom = 0;
let result = 0;

for (let i = 0; i < classes.length; i++) {
    result += classes[i][1];
    classroom = result >= classroom ? result : classroom;    
}

console.log(classroom);