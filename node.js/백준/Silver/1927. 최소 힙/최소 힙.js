// 최소 힙

const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

class MinHeap {
    constructor() {
        this.heap = [];
    }

    add(num) {
        this.heap.push(num);
        this.bubbleUp(this.heap.length - 1);
    }

    removeMin() {
        if (this.heap.length === 0) {
            return 0;
        }
        const min = this.heap[0];
        const last = this.heap.pop();
        if (this.heap.length > 0) {
            this.heap[0] = last;
            this.bubbleDown(0);
        }
        return min;
    }

    bubbleUp(index) {
        while (index > 0) {
            const parentIndex = Math.floor((index - 1) / 2);
            if (this.heap[parentIndex] <= this.heap[index]) {
                break;
            }
            [this.heap[parentIndex], this.heap[index]] = [this.heap[index], this.heap[parentIndex]];
            index = parentIndex;
        }
    }

    bubbleDown(index) {
        while (index < this.heap.length) {
            const leftChildIndex = 2 * index + 1;
            const rightChildIndex = 2 * index + 2;
            let smallestIndex = index;
            if (leftChildIndex < this.heap.length && this.heap[leftChildIndex] < this.heap[smallestIndex]) {
                smallestIndex = leftChildIndex;
            }
            if (rightChildIndex < this.heap.length && this.heap[rightChildIndex] < this.heap[smallestIndex]) {
                smallestIndex = rightChildIndex;
            }
            if (smallestIndex === index) {
                break;
            }
            [this.heap[index], this.heap[smallestIndex]] = [this.heap[smallestIndex], this.heap[index]];
            index = smallestIndex;
        }
    }
}

function play(inputs) {
    const heap = new MinHeap();
    let result = '';

    for (let i = 1; i < inputs.length; i++) {
        let X = Number(inputs[i]);
        if(X === 0) {
            result += heap.removeMin() + '\n';
        }else {
            heap.add(X);
        }
    }
    return result;
}

const output = play(input);
console.log(output);