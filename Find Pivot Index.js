var pivotIndex = function (nums) {
  totalSum = nums.reduce((total, current) => total + current, 0);
  leftSum = 0;
  for (let i = 0; i < nums.length; i++) {
    if (leftSum == totalSum - leftSum - nums[i]) return i;
    leftSum += nums[i];
  }
  return -1
};
