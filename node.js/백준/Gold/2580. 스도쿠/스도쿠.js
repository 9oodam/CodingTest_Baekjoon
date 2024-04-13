// 스도쿠

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n").map(el => el.split(" ").map(Number));

// console.log(input)

const zero = [];
for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
        if(input[i][j] == 0) {
            zero.push([i, j]); // 빈칸(0)인 부분 자리 표시
        }        
    }    
}

function play(now) {
    if(now == zero.length) {
        console.log(input.map(el => el.join(" ")).join("\n"));
        process.exit();
    }

    const [x, y] = zero[now];

    for (let i = 1; i < 10; i++) {
        if(check(x, y, i)) { // 1) 1~9 중 조건에 맞는 숫자를 찾기
            input[x][y] = i;
            play(now + 1);
            input[x][y] = 0;
        }        
    }
}

play(0);

function check(x, y, n) {
    // 2) 같은 행에 해당 숫자가 있으면 false
    for (let i = 0; i < 9; i++) {
        if(input[x][i] == n) return false;        
    }
    // 3) 같은 열에 해당 숫자가 있으면 false
    for (let i = 0; i < 9; i++) {
        if(input[i][y] == n) return false;        
    }

    // 해당 위치에서 3x3 자리 구하기
    const X = Math.floor(x / 3) * 3;
    const Y = Math.floor(y / 3) * 3;

    // 4) 3x3 구역에 해당 숫자가 있으면 false
    for (let i = X; i < X + 3; i++) {
        for (let j = Y; j < Y + 3; j++) {
            if(input[i][j] == n) return false;            
        }        
    }
    return true;
}