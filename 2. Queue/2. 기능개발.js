const assert = require('assert');

const solution = (p, s) => {
  let arr = p.map((a) => 100 - a);

  const queue = [];

  arr = arr.map((a, idx) => Math.ceil(a / s[idx]));

  for (let i = 0; i < arr.length; i++) {
    if (queue.length === 0) queue.push(1);
    else {
      if (arr[0] > arr[i]) queue[queue.length - 1]++;
      else queue.push(1);
    }
  }
  return queue;
};

assert.deepStrictEqual(solution([93, 30, 55], [1, 30, 5]), [2, 1]);
assert.deepStrictEqual(solution([95, 90, 99, 99, 80, 99], [1, 1, 1, 1, 1, 1]), [1, 3, 2]);
