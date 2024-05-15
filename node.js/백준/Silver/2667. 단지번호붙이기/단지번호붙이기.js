// 단지번호붙이기

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const n = Number(input.shift());
const apartment = input.map((v) => v.split("").map(Number));

const move = [[-1, 0], [1, 0], [0, 1], [0, -1]];

const result = []; // 각 단지 내 집의 수

// n X n
for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
        // 0인 곳은 패스 (1인 곳만 탐색)
        if(!apartment[i][j]) continue;
        apartment[i][j] = 0; // 다시 방문 안하게
        
        const queue = [[i, j]];
        let complexNum = 0; // 단지 내 집 개수

        while(queue.length) {
            const [curY, curX] = queue.shift();
            complexNum++;

            for (let i = 0; i < 4; i++) {
                const nextY = curY + move[i][1];
                const nextX = curX + move[i][0];
                
                // 바깥으로 벗어나면 continue
                if(nextX < 0 || nextY < 0 || nextX >= n || nextY >= n) continue; 

                if(apartment[nextY][nextX]) {
                    apartment[nextY][nextX] = 0; // 방문 완료
                    queue.push([nextY, nextX]);
                }
            }
        }
        result.push(complexNum);
    }    
}

console.log(result.length);
console.log(result.sort((a, b) => a - b).join("\n"));