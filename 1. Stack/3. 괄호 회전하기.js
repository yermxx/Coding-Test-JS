const assert = require('assert');

const solution = (s) => {
  let ret = 0;

  for (let i = 0; i < s.length; i++) {
    const stack = [];
    let isCorrect = true;

    for (let j = 0; j < s.length; j++) {
      const x = s[(i + j) % s.length];

      if (x === '[' || x === '(' || x === '{') stack.push(x);
      else {
        if (!stack.length) {
          isCorrect = false;
          break;
        }

        const top = stack[stack.length - 1];
        if (x === ']' && top === '[') stack.pop();
        else if (x === ')' && top === '(') stack.pop();
        else if (x === '}' && top === '{') stack.pop();
        else {
          isCorrect = false;
          break;
        }
      }
    }
    if (isCorrect && !stack.length) ret++;
  }
  return ret;
};

assert.strictEqual(solution('[](){}'), 3);
assert.strictEqual(solution('}]()[{'), 2);
assert.strictEqual(solution('[)(]'), 0);
