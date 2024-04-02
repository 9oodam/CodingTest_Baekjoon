const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

for (let i = 1; i < input.length; i++) {
    let reg = /^[A-F]?A+F+C+[A-F]?$/
    if(input[i].match(reg)) {
        console.log('Infected!');
    }else {
        console.log('Good')
    }
}