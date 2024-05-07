// 숨바꼭질

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split(" ").map(Number);

const visited = Array(100000).fill(0);
const queue = [[input[0], 0]]; // 현재 자리와 시간

while(queue.length) {
    const [cur, time] = queue.shift();
    if(visited[cur]) continue; // 이미 들렸다면

    visited[cur] = 1;

    // 도착하면
    if(cur == input[1]) {
        console.log(time);
        break;
    }

    if(cur * 2 <= 100000) {
        queue.push([cur * 2, time + 1]);
    }
    if(cur + 1 <= 100000) {
        queue.push([cur + 1, time + 1]);
    }
    if(cur - 1 >= 0) {
        queue.push([cur - 1, time + 1])
    }
}
