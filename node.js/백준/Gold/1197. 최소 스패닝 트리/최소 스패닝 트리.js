// 최소 스패닝 트리 (최소 신장 트리)
// 크루스칼 알고리즘
// 모든 노드를 포함하면서 사이클이 존재하지 않음
// 최소한의 가중치로 모든 간선을 연결

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

// 정점 수, 간선 수
const [V, E] = input.shift().split(" ").map(Number);

const graph = [];
for(let el of input) {
    const [node1, node2, cost] = el.split(" ").map(Number);
    graph.push({node1, node2, cost});
}

// 가중치 작은 순대로 오름차순
graph.sort((a, b) => a.cost - b.cost);

// 부모 노드를 저장하는 배열
const parent = Array.from({length : V + 1}, (_, i) => i);

let result = 0;

// 부모 노드 찾기
const find = (parent, n) => {
    if(parent[n] == n) return n; // 부모가 자기자신인 경우
    // 경로 압축
    // 경로 상에 있는 모든 노드들의 부모를 최상위 부모로 갱신
    return parent[n] = find(parent, parent[n]);
}

// 두 노드 합치기
const union = (parent, a, b) => {
    const parentA = find(parent, a); // 정점A의 부모
    const parentB = find(parent, b); // 정점B의 부모
    // 더 작은 쪽의 부모를 따르게
    if(parentA < parentB) {
        parent[parentB] = parentA;
    }else {
        parent[parentA] = parentB
    }
}


for(let {node1, node2, cost} of graph) {
    // 각 간선의 두 노드의 부모가 같지 않은 경우
    if(find(parent, node1) !== find(parent, node2)) {
        union(parent, node1, node2); // 두 노드 연결
        result += cost; // 가중치 합산
    }
}

console.log(result);