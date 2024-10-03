const assert = require('assert');

const solution = (n) => {
  const stack = [];

  while (n > 0) {
    const rem = n % 2;
    stack.push(rem);
    n = Math.floor(n / 2);
  }

  return +stack.reverse().join('');
};

assert.strictEqual(solution(10), 1010);
assert.strictEqual(solution(27), 11011);
assert.strictEqual(solution(12345), 11000000111001);
