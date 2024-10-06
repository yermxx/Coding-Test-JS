const assert = require('assert');

const solution = (s) => {
  if (s.length % 2 !== 0) return false;
  if (s[s.length - 1] === '(') return false;

  const stack = [];

  for (let v of s) {
    if (v === '(') {
      stack.push(v);
    } else {
      if (stack.length === 0) return false;
      else stack.pop();
    }
  }
  return !stack.length;
};

assert.deepEqual(solution('()()'), true);
assert.deepEqual(solution('(())()'), true);
assert.deepEqual(solution(')()('), false);
assert.deepEqual(solution('(()('), false);
