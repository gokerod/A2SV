var reverseParentheses = function (s) {
  var stack = [];
  for (char of s) {
    str = "";
    if (char == ")") {
      while (stack.length > 0) {
        popped = stack.pop();
        if (popped === "(") break;
        str += popped;
      }
      for (s of str) stack.push(s);
      continue;
    }

    stack.push(char);
  }
  return stack.join("");
};
