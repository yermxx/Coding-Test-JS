const assert = require('assert');

const solution = (board, moves) => {
  const change = board[0].map((_, i) =>
    board
      .map((row) => row[i])
      .filter((doll) => doll !== 0)
      .reverse()
  );

  const basket = [];
  let count = 0;

  for (const m of moves) {
    const column = change[m - 1];
    // 빈 열 처리
    if (column.length === 0) continue;

    const doll = column.pop();
    if (basket.length > 0 && basket[basket.length - 1] === doll) {
      basket.pop();
      count += 2;
    } else {
      basket.push(doll);
    }
  }
  return count;
};

assert.strictEqual(
  solution(
    [
      [0, 0, 0, 0, 0],
      [0, 0, 1, 0, 3],
      [0, 2, 5, 0, 1],
      [4, 2, 4, 4, 2],
      [3, 5, 1, 3, 1],
    ],
    [1, 5, 3, 5, 1, 2, 1, 4]
  ),
  4
);
