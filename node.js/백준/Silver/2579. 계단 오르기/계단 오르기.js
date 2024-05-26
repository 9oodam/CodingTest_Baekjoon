// 계단 오르기

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const num = Number(input.shift());
const arr = input.map(Number);

const dp = []; // 각 계단까지 최대 점수를 저장

// 초기 조건
dp[0] = arr[0];
dp[1] = Math.max(arr[0] + arr[1], arr[1]);
dp[2] = Math.max(arr[0] + arr[2], arr[1] + arr[2]);

// 점화식
for (let i = 3; i < arr.length; i++) {
    // 1) 현재 계단 + 이전 계단 + 3전 계단의 최대값
    // 2) 현재 계단 + 2전 계단의 최대값
    dp[i] = Math.max(arr[i] + arr[i-1] + dp[i-3], arr[i] + dp[i-2]);    
}

console.log(dp[num-1]);