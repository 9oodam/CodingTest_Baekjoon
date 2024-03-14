const fs = require("fs");

class Deque {
    constructor() {
        this.items = [];
    }

    // 배열이 비어있는지 확인
    isEmpty() {
        return this.items.length === 0;
    }

    // 덱 배열 맨 앞에 정수 추가
    push_front(numX) {
        this.items.unshift(numX);
    }
    // 덱 배열 맨 뒤에 정수 추가
    push_back(numX) {
        this.items.push(numX);
    }
    // 덱 배열 맨 앞 정수 빼내고 출력 (없는 경우 -1 출력)
    pop_front() {
        if(this.isEmpty()) return -1;
        return this.items.shift();
    }
    // 덱 배열 맨 뒤 정수 빼내고 출력 (없는 경우 -1 출력)
    pop_back() {
        if(this.isEmpty()) return -1;
        return this.items.pop();
    }
    // 덱 개수 출력
    size() {
        return this.items.length;
    }
    // 덱이 비어있으면 1, 아니면 0 출력
    empty() {
        if(this.isEmpty()) return 1;
        return 0;
    }
    // 덱의 가장 앞에 있는 정수 출력, 없으면 -1 출력
    front() {
        if(this.isEmpty()) return -1;
        return this.items[0];
    }
    // 덱의 가장 뒤에 있는 정수 출력, 없으면 -1 출력
    back() {
        if(this.isEmpty()) return -1;
        return this.items[this.items.length - 1];
    }
}

function play(inputs) {
    const deq = new Deque();
    let result = '';

    for (let i = 1; i < inputs.length; i++) {
        const [input, num] = inputs[i].split(" "); // 명령어 숫자 나눠주기

        switch (input) {
            case "push_front":
                deq.push_front(parseInt(num));
                break;
            case "push_back":
                deq.push_back(parseInt(num));
                break;
            case "pop_front":
                result += deq.pop_front() + '\n';
                break;
            case "pop_back":
                result += deq.pop_back() + '\n';
                break;
            case "size":
                result += deq.size() + '\n';
                break;
            case "empty":
                result += deq.empty() + '\n';
                break;
            case "front":
                result += deq.front() + '\n';
                break;
            case "back":
                result += deq.back() + '\n';
                break;
        }
    }

    return result;
}

const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const result = play(input);
console.log(result);
