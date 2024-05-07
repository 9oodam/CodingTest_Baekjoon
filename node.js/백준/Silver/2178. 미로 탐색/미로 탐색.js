// 미로 탐색

const fs = require("fs");
// const input = fs.readFileSync("2178-3.txt").toString().trim().split("\n").map((v)=>v.split("").map(Number));
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [N, M] = input[0].split(" ").map((v) => Number(v));

const maze = [];
for (let i = 1; i <= N; i++) {
    maze.push(input[i].split("").map(v => Number(v)));    
}


// 도착점
const [goalY, goalX] = [N-1, M-1];

// 방문 여부 체크
// const visited = Array(M).fill(Array(N).fill(0)); // 배열을 복사했기 때문에 한 배열의 값을 변경하면 모두 변경
const visited = Array.from({length:N}, () => Array(M).fill(0)); // from() : 각 행을 독립적으로 초기화

// 좌표
const queue = [[0, 0]];

// 동서남북 이동용
const move = [[-1, 0], [1, 0], [0, 1], [0, -1]];

// 스타트 지점 1부터
visited[0][0] = 1;

while (queue.length) {
    const [curX, curY] = queue.shift();
    for (let i = 0; i < 4; i++) {
        // 다음 이동좌표 계산
        const [nextX, nextY] = [curX + move[i][0], curY + move[i][1]];

        // 미로 벗어나면 X
        if(nextX < 0 || nextY < 0 || nextX >= N || nextY >= M) continue; 

        // 갈 수 있는 곳이면
        if(maze[nextX][nextY] && !visited[nextX][nextY]) {
            visited[nextX][nextY] = visited[curX][curY] + 1;
            queue.push([nextX, nextY]);
        }
    }
}

console.log(visited[goalY][goalX]);