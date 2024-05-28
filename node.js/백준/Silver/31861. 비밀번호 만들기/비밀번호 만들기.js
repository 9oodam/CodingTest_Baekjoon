// 비밀번호 만들기 (31861)

const fs = require("fs");
let [N, M] = fs.readFileSync("/dev/stdin").toString().trim().split(" ").map(Number);

const mod = 1000_000_007;

let dp = Array.from({length: M+1}, () => Array(26).fill(0))

for (let i = 0; i < 26; i++) {
    dp[1][i] = 1;    
}

for (let i = 2; i <= M; i++) {
    for (let j = 0; j < 26; j++) {
        for (let k = 0; k < 26; k++) {
            if(Math.abs(j - k) >= N) {
                dp[i][j] += dp[i-1][k];
                dp[i][j] %= mod;
            }            
        }        
    }    
}

let total = 0;
for (let i = 0; i < 26; i++) {
    total += dp[M][i];
    total %= mod;    
}

console.log(total);