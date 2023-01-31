/**
 * @param {number} k
 */
var MyCircularDeque = function (k) {
  this.queue = [];
  this.count = 0;
  this.limit = k;
};

/**
 * @param {number} value
 * @return {boolean}
 */
MyCircularDeque.prototype.insertFront = function (value) {
  if (this.count == this.limit) return false;
  this.queue.unshift(value);
  this.count++;
  return true;
};

/**
 * @param {number} value
 * @return {boolean}
 */
MyCircularDeque.prototype.insertLast = function (value) {
  if (this.count == this.limit) return false;
  this.queue.push(value);
  this.count++;
  return true;
};

/**
 * @return {boolean}
 */
MyCircularDeque.prototype.deleteFront = function () {
  if (this.count < 1) return false;
  this.queue.shift();
  this.count--;
  return true;
};

/**
 * @return {boolean}
 */
MyCircularDeque.prototype.deleteLast = function () {
  if (this.count < 1) return false;
  this.queue.pop();
  this.count--;
  return true;
};

/**
 * @return {number}
 */
MyCircularDeque.prototype.getFront = function () {
  if (this.count < 1) return -1;
  return this.queue[0];
};

/**
 * @return {number}
 */
MyCircularDeque.prototype.getRear = function () {
  if (this.count < 1) return -1;
  return this.queue[this.queue.length - 1];
};

/**
 * @return {boolean}
 */
MyCircularDeque.prototype.isEmpty = function () {
  return this.count == 0;
};

/**
 * @return {boolean}
 */
MyCircularDeque.prototype.isFull = function () {
  return this.limit == this.count;
};
