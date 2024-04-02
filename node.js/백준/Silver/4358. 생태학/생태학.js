const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

input.sort();

let obj = {};

input.forEach(el => {
    obj[el] == null ? obj[el] = 1 : obj[el] += 1
});

console.log(Object.keys(obj).sort().map(key => `${key} ${((obj[key]) * 100 / input.length).toFixed(4)}`).join("\n"));