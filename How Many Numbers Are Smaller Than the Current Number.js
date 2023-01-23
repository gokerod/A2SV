/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function (nums) {
  var output = [];
  var sorted = [...nums].sort((a, b) => a-b);
  nums.forEach((number) => {
    output.push(sorted.indexOf(number));
  });
  return output;
};
