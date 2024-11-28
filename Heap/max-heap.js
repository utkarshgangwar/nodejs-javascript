// Initialize an empty heap
let heap = [];

// Function to insert an element into the heap
function insert(value) {
    heap.push(value);  // Add value to the end of the heap
    bubbleUp(heap.length - 1);  // Maintain the max heap property by bubbling up
}

// Function to maintain the max heap property by bubbling up
function bubbleUp(index) {
    let parentIndex = Math.floor((index - 1) / 2);
    if (index > 0 && heap[index] > heap[parentIndex]) {
        // Swap if current node is greater than parent
        [heap[index], heap[parentIndex]] = [heap[parentIndex], heap[index]];
        bubbleUp(parentIndex);  // Recursively bubble up
    }
}

// Function to get the heap in array format
// function getHeap() {
//     return heap;
// }

const arr = [5, 2, 1, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, -5, -4, -3, -2]
const start = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        insert(arr[i]);
    }
    return heap;
}
console.log("Max Heap Array:", start(arr));
