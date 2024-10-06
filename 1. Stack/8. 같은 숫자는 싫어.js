const assert = require('assert');

const solution = (arr) => {
  const stack = [];

  for (v of arr) {
    if (!stack.length) stack.push(v);
    else {
      if (stack[stack.length - 1] === v) continue;
      else stack.push(v);
    }
  }

  return stack;
};

assert.deepStrictEqual(solution([1, 1, 3, 3, 0, 1, 1]), [1, 3, 0, 1]);
assert.deepStrictEqual(solution([4, 4, 4, 3, 3]), [4, 3]);
