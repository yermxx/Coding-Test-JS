const assert = require('assert');

const solution = (prices) => {
  const n = prices.length;
  const ret = [];

  for (let i = 0; i < n; i++) {
    let stack = 0;
    for (let j = i + 1; j < n; j++) {
      stack++;
      if (prices[i] > prices[j]) break;
    }
    ret.push(stack);
  }
  return ret;
};

assert.deepStrictEqual(solution([1, 2, 3, 2, 3]), [4, 3, 1, 1, 0]);
assert.deepStrictEqual(solution([1, 6, 9, 5, 3, 2, 7]), [6, 2, 1, 1, 1, 1, 0]);
