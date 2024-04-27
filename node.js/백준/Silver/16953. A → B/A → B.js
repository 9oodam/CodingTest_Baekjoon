const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");

let start = input[0];
let end = input[1];

let cnt = 0;

// end가 start와 같아질 때까지 반복
while(start != end) {
    let splitted = String(end).split('');

    // 끝의 자리가 1인 경우
    if(splitted[splitted.length - 1] == 1) {
        splitted.pop();
        let popped = Number(splitted.join(''));
        end = popped;
        cnt += 1;
    }else {
        end /= 2;
        cnt += 1;
    }

    if(start == end) {
        cnt += 1;
        break;
    }
    if(start > end) {
        cnt = -1;
        break;
    }
}

console.log(cnt);