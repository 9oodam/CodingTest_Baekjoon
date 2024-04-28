const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const crane = input[1].split(" ").map(el => Number(el)).sort((a, b) => b - a);
const boxWeight = input[3].split(" ").map(el => Number(el)).sort((a, b) => b - a);

const play = () => {
    if(boxWeight[0] > crane[0]) {
        return -1;
    }else {
        let result = 0;
        
        while(boxWeight.length) {
            for (let i = 0; i < crane.length; i++) {
                for (let j = 0; j < boxWeight.length; j++) {
                    if(boxWeight[j] <= crane[i]) {
                        boxWeight.splice(j, 1);
                        break;
                    }
                }    
            }
            result += 1;
        }
        return result;
    }
}

console.log(play())