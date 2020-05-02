/* 
The Fibonacci sequence goes like this:
1  2  3  4  5  6  7   8   9   10
1  1  2  3  5  8  13  21  34  55 ...

each number is the sum of the previous 2 numbers

The function should return the Nth Fibonacci number

*/

function fib(n) {
  // if n is 1 or 2, return 1
  if (n <= 2) return 1;
  
  // this will keep looping until the returns
  // of function calls start hitting the base case.
  // at that point, all the 1's will be added up 
  // to become the resulting number
  return fib(n - 1) + fib(n - 2);
}

console.log(fib(10));