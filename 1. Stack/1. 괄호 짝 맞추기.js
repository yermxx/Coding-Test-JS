const assert = require('assert');

const solution = (s) => {
  const stack = [];

  for (let v of s) {
    if (v === '(') stack.push(v);
    else if (v === ')') {
      if (stack.length === 0) {
        return false;
      } else {
        stack.pop();
      }
    }
  }
  return !stack.length;
};

assert.strictEqual(solution('(())()'), true);
assert.strictEqual(solution('((())()'), false);
