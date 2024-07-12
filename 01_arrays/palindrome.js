// Check for Palindrome
// Question: Write a function that checks if a
// given string is a palindrome (reads the same backward as forward).

const isPalindrome1 = (s) => {
  let palindrome = [];

  for (let i = s.length - 1; i >= 0; i--) {
    palindrome.push(s[i]);
  }
  return palindrome.join('') === s ? true : false;
};

const isPalindrome = (s) => {
  let lastIndexToCheck = Math.floor(s.length / 2) - 1;
  for (let i = 0; i <= lastIndexToCheck; i++) {
    if (s[i] !== s[s.length - 1 - i]) return false;
  }
  return true;
};

console.log(isPalindrome('maloolam')); // Output: true
console.log(isPalindrome('maloiolam')); // Output: true
console.log(isPalindrome('racecar')); // Output: true
console.log(isPalindrome('hello')); // Output: false
console.log(isPalindrome('madam')); // Output: true

// start in the middle
const isPalindrome3 = (s) => {
  let indexMiddle = s.length / 2 - 1;
  let indexCheck = s.length % 2 === 0 ? indexMiddle + 1 : indexMiddle + 2;
};

//
//
// function isPalindrome(str) {
//   const reversed = str.split('').reverse().join('');
//   return str === reversed;
// }
