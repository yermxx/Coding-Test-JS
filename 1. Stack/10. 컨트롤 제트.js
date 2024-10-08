const assert = require('assert');

const solution = (s) => {
  const arr = s.split(' ');
  const stack = [];

  for (v of arr) {
    if (!stack.length) stack.push(v);
    else {
      v === 'Z' ? stack.pop() : stack.push(v);
    }
  }

  return stack.map(Number).reduce((a, b) => a + b, 0);
};

assert.strictEqual(solution('1 2 Z 3'), 4);
assert.strictEqual(solution('10 20 30 40'), 100);
assert.strictEqual(solution('10 Z 20 Z 1'), 1);
assert.strictEqual(solution('10 Z 20 Z'), 0);
assert.strictEqual(solution('-1 -2 -3 Z'), -3);
