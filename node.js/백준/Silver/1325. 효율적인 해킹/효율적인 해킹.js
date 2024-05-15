// 효율적인 해킹

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [n, m] = input.shift().split(" ").map(Number);

const graph = Array.from({length: n + 1}, () => []);

for (let i = 0; i < m; i++) {
    let [a, b] = input[i].split(" ").map(Number);
    graph[b].push(a); // b가 해킹되면 a도 해킹 됨
}

let max = 0; // 최대 해킹 컴퓨터 수
let answer = []; // 최대 해킹 컴퓨터들의 번호

for (let i = 1; i <= n; i++) {
    const stack = [i];
    const check = Array.from({length: n  + 1}, () => 0);

    let count = 0;
    let result = 0;

    // DFS (깊이 우선 탐색)
    // stack (후입선출)
    while(stack.length) {
        let cur = stack.pop();
        if(result < count) result = count; // 최대값 갱신
        check[cur] = 1; // 자기자신 자리
        for (let i = 0; i < graph[cur].length; i++) {
            let value = graph[cur][i]; // 해당 컴퓨터가 해킹할 수 있는 컴퓨터의 번호
            if(check[value]) continue; // 이미 chk 됐으면 패스
            check[value] = 1;
            count += 1; // 카운트 증가
            stack.push(value); // 스택에 추가
        }
    }

    if(max < result) { // 기존 최대 수보다 크면
        max = result; // 최대값 갱신
        answer = []; // 이전 컴퓨터 번호 초기화
        answer.push(i);
    }else if(max == result) { // 최대 수 동일하면
        answer.push(i); // 컴퓨터 번호 추가
    }
}

console.log(answer.join(" "));