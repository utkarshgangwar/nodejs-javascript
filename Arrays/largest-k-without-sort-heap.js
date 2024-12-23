class MinHeap {
    constructor() {
        this.heap = [];
    }

    // Insert value into the heap
    insert(val) {
        this.heap.push(val);
        this._heapifyUp();
    }

    // Remove and return the minimum (root) value from the heap
    extractMin() {
        if (this.heap.length === 0) return null;

        const min = this.heap[0];
        const end = this.heap.pop();
        if (this.heap.length > 0) {
            this.heap[0] = end;
            this._heapifyDown();
        }
        return min;
    }

    // Get the minimum value (root) of the heap
    peek() {
        return this.heap[0];
    }

    // Private function to maintain the heap property after insertion
    _heapifyUp() {
        let idx = this.heap.length - 1;
        while (idx > 0) {
            const parentIdx = Math.floor((idx - 1) / 2);
            if (this.heap[idx] < this.heap[parentIdx]) {
                [this.heap[idx], this.heap[parentIdx]] = [this.heap[parentIdx], this.heap[idx]];
                idx = parentIdx;
            } else {
                break;
            }
        }
    }

    // Private function to maintain the heap property after extraction
    _heapifyDown() {
        let idx = 0;
        const length = this.heap.length;
        while (true) {
            let leftChildIdx = 2 * idx + 1;
            let rightChildIdx = 2 * idx + 2;
            let smallest = idx;

            if (leftChildIdx < length && this.heap[leftChildIdx] < this.heap[smallest]) {
                smallest = leftChildIdx;
            }

            if (rightChildIdx < length && this.heap[rightChildIdx] < this.heap[smallest]) {
                smallest = rightChildIdx;
            }

            if (smallest !== idx) {
                [this.heap[idx], this.heap[smallest]] = [this.heap[smallest], this.heap[idx]];
                idx = smallest;
            } else {
                break;
            }
        }
    }
}

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
    const minHeap = new MinHeap();

    // Build a min-heap of size k
    for (let num of nums) {
        minHeap.insert(num);
        if (minHeap.heap.length > k) {
            minHeap.extractMin();
        }
    }

    // The root of the min-heap is the k-th largest element
    return minHeap.peek();
};

// Test case with larger n and k
const nums = [3, 2, 3, 1, 2, 4, 5, 5, 6];
const k = 4;
console.log(findKthLargest(nums, k));  // Output will be the 4th largest element (4)
