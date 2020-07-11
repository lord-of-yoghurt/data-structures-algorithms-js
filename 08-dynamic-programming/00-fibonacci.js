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

// recursive fibonacci with basic memoization
const memoFibRec = (n, cashe = []) {
  // if we have a cached result, return it
  if (cache[n]) return cache[n];
  // base case
  if (n < 2) return n;

  // perform the calculation
  const res = memoFibRec(n - 1, cache) + memoFibRec(n - 2, cache);
  // save it
  cache[n] = res;

  return res;
}

module.exports = { fibIter, fibRec };