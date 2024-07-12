// Write two functions that finds the factorial of any number.
// One should use recursive, the other should just use a for loop

//ANSWER:

function findFactorialRecursive(number) {
  if (number === 0) {
    return 1;
  }
  return number * findFactorialRecursive(number - 1);
}

function findFactorialIterative(number) {
  let answer = 1;
  // you actually no longer need the if statement because of the for loop
  // if (number === 2) {
  //   answer = 2;
  // }
  for (let i = 2; i <= number; i++) {
    answer = answer * i;
  }
  return answer;
}

// findFactorialIterative(5);
console.log(findFactorialRecursive(3));

// If you want, try to add a base case condition for the recursive solution
// if the parameter given is less than 2

function factorial(n) {
  if (n === 0) return 1;
  return n * factorial(n - 1);
}

// console.log(factorial(5)); // Output: 120
