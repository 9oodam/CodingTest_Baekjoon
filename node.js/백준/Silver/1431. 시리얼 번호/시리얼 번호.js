const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
input.shift();

function getSum(str) {
    let sum = 0;
    for (let i = 0; i < str.length; i++) {
        if(!isNaN(parseInt(str[i]))) {
            sum += parseInt(str[i]);
        }      
    }
    return sum;
}

input.sort((a, b) => {
    // 1) 길이 순 정렬
    if(a.length !== b.length) {
        return a.length - b.length;
    }else {
        // 2) 숫자 합 정렬
        let sumA = getSum(a);
        let sumB = getSum(b);
        if(sumA !== sumB) return sumA - sumB;
        // 3) 사전순 정렬
        return a.localeCompare(b);
    }
})

console.log(input.join("\n"));