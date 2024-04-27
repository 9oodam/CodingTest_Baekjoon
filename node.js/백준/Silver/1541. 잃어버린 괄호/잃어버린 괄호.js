const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();

// 첫 번째 시도
// 숫자, 부호 나누기
let arr = [];
let buffer = '';
for (let i = 0; i < input.length; i++) {
    const char = input[i];
    if(char == '+' || char == '-') {
        if(buffer != '') {
            arr.push(parseInt(buffer));
            buffer = ''
        }
        arr.push(char);
    }else if(!isNaN(char)) {
        buffer += char;
    }
}
if(buffer != '') {
    arr.push(parseInt(buffer));
}

let result = 0;
let firstMinus = arr.indexOf('-'); // 첫번째 마이너스
// 마이너스 없으면 전부 합산
if(firstMinus == -1) {
    arr.map(el => {
        if(!isNaN(el)) result += el;
    });
// 마이너스 있으면
}else {
    // '-' 나올 때까지 더해주고
    // '-' 나오면 다음 '-' 나올 때까지 빼주기
    let isMinus = false;
    for (let i = 0; i < arr.length; i++) {
        if(!isNaN(arr[i])) {
            if(!isMinus) result += arr[i];
            if(isMinus) result -= arr[i];
        }else {
            if(arr[i] == '-') {
                isMinus = true;
            }
        }
    }
}

console.log(result);