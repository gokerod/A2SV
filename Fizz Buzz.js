/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function (n) {
  var output = [];
  for (i = 1; i <= n; i++) {
    if (i % 3 == 0) {
      if (i % 5 == 0) output.push("FizzBuzz");
      else output.push("Fizz");
    } else if (i % 5 == 0) {
      if (i % 3 == 0) output.push("FizzBuzz");
      else output.push("Buzz");
    } else output.push("" + i);
  }
  return output;
};
