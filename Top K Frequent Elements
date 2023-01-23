/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
let topKFrequent = function (nums, k) {
  let map = new Map();
  for (let number of nums) {
    if (map.has(number)) {
      map.set(number, map.get(number) + 1);
    } else map.set(number, 1);
  }
  let arr = Array.from(map.entries()).sort((a, b) => b[1] - a[1]);
  let output = [];

  for (let i = 0; i < k && i < arr.length; i++) output.push(arr[i][0]);
  return output;
};
console.log(topKFrequent([1, 1, 1, 1], 1));
