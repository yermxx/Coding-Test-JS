const assert = require('assert');

const solution = (s) => {
  const stack = [];

  for (let v of s) {
    if (stack.length === 0) stack.push(v);
    else {
      stack[stack.length - 1] === v ? stack.pop() : stack.push(v);
    }
  }

  return stack.length ? 0 : 1;
};

assert.strictEqual(solution('baabaa'), 1);
assert.strictEqual(solution('cdcd'), 0);
