// iterative fibonacci - O(n)
const fibIter = n => {
  if (n < 0) return undefined;
  if (n < 2) return n;

  const fibArr = [0, 1];

  for (let i = 0, j = 0; i < n - 1; i++, j++) {
    fibArr.push(fibArr[j] + fibArr[j + 1]);
  }

  return fibArr[n];
}

// recursive fibonacci
const fibRec = n => {
  if (n < 2) return n;

  return fibRec(n - 1) + fibRec(n - 2);
}

module.exports = { fibIter, fibRec };