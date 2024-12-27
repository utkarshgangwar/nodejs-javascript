// Ashutosh Verma
// 4:18 PM
// LRU caches are often used to implement caches which you do not want to grow indefinitely. 
// The cache has a max size, and when a new key is inserted that would make it grow larger than the max size, 
// the key which has not been accessed for the longest time is removed to make space.
// It should support these operations:
// get(key): get the value of the key if it exists in cache otherwise it inserts the value. 
// When the cache reaches its capacity, it should invalidate the least recently used item before inserting a new item.
// const array = [
//   { a: 1 }, { b: 2 }, { c: 3 }, { d: 4 }, { e: 5 },
//   { f: 6 }, { g: 7 }, { h: 8 }, { i: 9 }, { j: 10 },
//   { k: 11 }, { l: 12 }, { m: 13 }, { n: 14 }, { o: 15 },
//   { p: 16 }, { q: 17 }, { r: 18 }, { s: 19 }, { t: 20 },
//   { u: 21 }, { v: 22 }, { w: 23 }, { x: 24 }, { y: 25 },
//   { z: 26 }
// ]