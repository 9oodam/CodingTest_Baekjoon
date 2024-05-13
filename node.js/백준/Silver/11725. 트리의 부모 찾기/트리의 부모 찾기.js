// 트리의 부모 찾기

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const n = Number(input.shift());

const tree = Array.from({length: n + 1}, () => new Array());
let check = Array.from({length: n + 1}, () => 0);

input.map((el) => {
    const [from, to] = el.split(" ").map(Number);
    tree[from].push(to);
    tree[to].push(from);
})

const queue = [];
check[1] = 1;

for(let next of tree[1]) {
    check[next] = 1; // 부모 노드 값 (루트 1)
    queue.push(next); // 다음 자식 노드 추가
}

while(queue.length) {
    const node = queue.shift();
    for(let next of tree[node]) {
        if(check[next]) continue; // 방문한 곳은 건너띔
        check[next] = node; // 부모 노드의 값을 넣어줌
        queue.push(next);
    }
}

check = check.slice(2);
console.log(check.join("\n"));