// DFS와 BFS

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");


const [N, M, V] = input.shift().split(" ").map(Number);
const graph = [...Array(N + 1)].map(v => []);
for (let i = 0; i < M; i++) {
    let [from, to] = input[i].split(" ").map(Number);
    graph[from].push(to);
    graph[to].push(from);    
}

// 깊이 우선 탐색
const dfs = () => {
    const visited = [];
    let needVisit = [];

    needVisit.push(V); // 루트

    while(needVisit.length !== 0) {
        const node = needVisit.pop(); // 끝까지 갔다가 가장 가까운 노드 찾기 위해
        if(!visited.includes(node)) {
            visited.push(node);
            let nodes = graph[node];
            // 스택을 사용하기 때문에 가장 먼저 추가되는 노드가 가장 나중에 탐색
            needVisit = [...needVisit, ...nodes.sort((a, b) => b - a)]; // 내림차순
        }
    }
    return visited;
}

// 너비 우선 탐색
const bfs = () => {
    const visited = [];
    let needVisit = [];

    needVisit.push(V); // 루트

    while(needVisit.length !== 0) {
        const node = needVisit.shift(); // 루트에서 가장 인접한 노드를 찾기 위해
        if(!visited.includes(node)) {
            visited.push(node);
            let nodes = graph[node];
            // 큐를 사용하기 때문에 가장 먼저 추가된 노드가 먼저 탐색
            needVisit = [...needVisit, ...nodes.sort((a, b) => a - b)]; // 오름차순
        }
    }
    return visited;
}

console.log(dfs().join(' '))
console.log(bfs().join(' '))