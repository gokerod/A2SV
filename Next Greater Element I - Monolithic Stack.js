var nextGreaterElement = function (nums1, nums2) {
  answer = [];
  nums1.forEach((num, index) => {
    for (i = nums2.indexOf(num) + 1; i < nums2.length; i++) {
      if (nums2[i] > num) {
        answer.push(nums2[i]);
        break;
      }
    }
    if (!answer[index]) answer[index] = -1;
  });
  return answer;
};
