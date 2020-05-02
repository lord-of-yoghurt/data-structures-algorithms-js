function facIterative(num) {
  let fac = 1;

  // starting from num, multiply
  for (let i = num; i > 0; i--) {
    fac *= i;
  }

  return fac;
}

console.log(facIterative(10));

function facRecursive(num) {
  // base case:
  // 1! is 1, 2! is 2, so 
    // * if the input is 1 or 2, the function will return here
    // * otherwise, it'll return the number times the return value 
    //   of the function call with the number - 1, until it hits 2
  if (num <= 2) return num;

  return num * facRecursive(num - 1);
}

console.log(facRecursive(0));

/* 
facRecursive(4)                 ^
  return 4 * facRecursive(3)    | 24
    return 3 * facRecursive(2)  | 6
      return 2                  | 2  (things don't multiply 
                                      until every call returns)
*/