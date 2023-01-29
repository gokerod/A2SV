var isValid = function (s) {
  var stack = [];
  for (var par of s) {
    if ("({[".includes(par)) stack.push(par);
    else {
      var popped = stack.pop();
      if (
        (par === ")" && popped !== "(") ||
        (par === "}" && popped !== "{") ||
        (par === "]" && popped !== "[")
      )
        return false;
    }
  }if(stack.length>0) return false;
  return true;
};
