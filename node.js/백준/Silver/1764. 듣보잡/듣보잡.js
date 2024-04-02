const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [n, m] = input[0].split(" ").map(Number);

const n_arr = new Set(input.slice(1, n+1)); // index 1부터 4전까지
const m_arr = input.slice(n+1); // index 4부터

let result = [];

for (let i = 0; i < m; i++) {
    if(n_arr.has(m_arr[i])) {
        result.push(m_arr[i])
    }   
}

result.sort();
console.log(result.length);
console.log(result.join("\n"));