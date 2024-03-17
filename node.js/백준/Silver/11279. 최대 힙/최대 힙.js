const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

class MaxHeap {
    constructor() {
        this.heap = [];
    }

    add(num) {
        this.heap.push(num);
        this.bubbleUp(this.heap.length - 1);
    }

    removeMax() {
        if (this.heap.length === 0) {
            return 0;
        }
        const max = this.heap[0];
        const last = this.heap.pop();
        if (this.heap.length > 0) {
            this.heap[0] = last;
            this.bubbleDown(0);
        }
        return max;
    }

    bubbleUp(index) {
        while (index > 0) {
            const parentIndex = Math.floor((index - 1) / 2);
            if (this.heap[parentIndex] >= this.heap[index]) {
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
            let largestIndex = index;
    
            if (leftChildIndex < this.heap.length && this.heap[leftChildIndex] > this.heap[largestIndex]) {
                largestIndex = leftChildIndex;
            }
            if (rightChildIndex < this.heap.length && this.heap[rightChildIndex] > this.heap[largestIndex]) {
                largestIndex = rightChildIndex;
            }
            if (largestIndex === index) {
                break;
            }
            [this.heap[index], this.heap[largestIndex]] = [this.heap[largestIndex], this.heap[index]];
            index = largestIndex;
        }
    }
}

function play(inputs) {
    const heap = new MaxHeap();
    let result = '';

    for (let i = 1; i < inputs.length; i++) {
        let X = Number(inputs[i]);
        if(X === 0) {
            result += heap.removeMax() + '\n';
        }else {
            heap.add(X);
        }
    }
    return result;
}

const output = play(input);
console.log(output);