var evalRPN = function (tokens) {
  var stack = [];
  for (i of tokens) {
    if (i === "+") stack.push(stack.pop() + stack.pop());
    else if (i === "*") stack.push(stack.pop() * stack.pop());
    else if (i === "-" || i === "/") {
      var b = stack.pop();
      var a = stack.pop();
      if (i === "-") stack.push(a - b);
      else stack.push(Math.trunc(a / b));
    } else stack.push(Number(i));
  }
  return stack.pop();
};
