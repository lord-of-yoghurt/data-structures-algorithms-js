// iterative fibonacci - O(n). meh
const fibIter = n => {
  if (n < 0) return undefined;
  if (n < 2) return n;

  const fibArr = [0, 1];

  for (let i = 0, j = 0; i < n - 1; i++, j++) {
    fibArr.push(fibArr[j] + fibArr[j + 1]);
  }

  return fibArr[n];
};

// recursive fibonacci - O(2 ^ n). BAD!
const fibRec = n => {
  if (n < 2) return n;

  return fibRec(n - 1) + fibRec(n - 2);
};

// finish this up
const memoize = fn => {
  const memo = {};

  return () => {

  };
};

const memoFibRec = memoize(fibRec);

module.exports = { fibIter, fibRec };