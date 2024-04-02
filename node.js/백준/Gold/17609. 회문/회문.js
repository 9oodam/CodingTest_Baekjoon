const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

// 회문이면 true
function isPalindrome(str) {
    return str == str.split("").reverse().join("");   
}

// 유사회문이면 true
function isPalindrome2(str) {
    let strArr = str.split("");

    for (let i = 0; i <= Math.floor(strArr.length/2); i++) {
        if(strArr[i] !== strArr[strArr.length - 1 - i]) {
            let firstSplit = strArr.slice(0, i).concat(strArr.slice(i+1)).join("");
            let lastSplit = strArr.slice(0, strArr.length - 1 - i).concat(strArr.slice(strArr.length - i)).join("");
            return isPalindrome(firstSplit) || isPalindrome(lastSplit);
        }

        if(i == Math.floor(strArr.length - 1 - i)) {
            return isPalindrome(strArr.slice(i, 1).join(""));
        }
    }
}

for (let i = 1; i <= input[0]; i++) {
    if(isPalindrome(input[i])) {
        console.log(0);
    }else if(isPalindrome2(input[i])) {
        console.log(1);
    }else {
        console.log(2);
    }
}