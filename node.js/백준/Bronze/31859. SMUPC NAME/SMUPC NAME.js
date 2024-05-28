// SMUPC NAME (31859)

const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");
const N = Number(input[0]);
const S = input[1];

let seen = new Set();
let uniqueChar = '';
let discardedCount = 0;

// 1. 중복 없애기
for (let char of S) {
    if(!seen.has(char)) {
        uniqueChar += char;
        seen.add(char);
    }else {
        discardedCount++;
    }
}

// 2. 4 더하기
uniqueChar += (discardedCount + 4).toString();

// 3. 1906 더하기
let registerNum = (N + 1906).toString();
let combined = registerNum + uniqueChar;

// 4. 문자열 뒤집기
let reversed = combined.split('').reverse().join('');

// 5. smupc_
let finalName = "smupc_" + reversed;

console.log(finalName);