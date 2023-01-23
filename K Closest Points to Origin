/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */

var kClosest = function (points, k) {
  closestPoints = points.sort((a, b) => getLength(a) - getLength(b));
  return closestPoints.splice(0, k);
};

const getLength = (p) => {
  return p[0] * p[0] + p[1] * p[1];
};
