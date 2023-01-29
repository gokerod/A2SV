var MyQueue = function () {
  this.stack_1 = [];
  this.stack_2 = [];
};

/**
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function (x) {
  this.stack_1.push(x);
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function () {
  while (this.stack_1.length > 0) this.stack_2.push(this.stack_1.pop());
  var popped = this.stack_2.pop();
  while (this.stack_2.length > 0) this.stack_1.push(this.stack_2.pop());
  return popped;
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function () {
  while (this.stack_1.length > 0) this.stack_2.push(this.stack_1.pop());
  var popped = this.stack_2.pop();
  this.stack_2.push(popped);
  while (this.stack_2.length > 0) this.stack_1.push(this.stack_2.pop());
  return popped;
};
/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function () {
  return this.stack_1.length === 0;
};

var obj = new MyQueue();
