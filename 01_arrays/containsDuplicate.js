// Given an integer array nums, return true if any value appears at least twice in the array,
// and return false if every element is distinct.

// Example 1:

// Input:
// numbers = [1, 2, 3, 1];
// Output: true
// Example 2:

// Input:
// numbers = [1, 2, 3, 4];
// Output: false
// Example 3:

// Input:
// numbers = [1, 10, 100, 3, 3, 4, 3, 2, 4, 2];
// Output: true

// Input:
numbers = [1, 8, 10, 7, 80, 7, 1, 8, 2, 42, 31];
// Output: true

// Constraints:

// 1 <= numbers.length <= 105
// -109 <= numbers[i] <= 109

/**
 * @param {number[]} numbers
 * @return {boolean}
 */
var containsDuplicate = function (numbers) {
  const objNumbers = {};

  for (let intNum of numbers) {
    if (objNumbers.hasOwnProperty(intNum)) {
      return true;
    }

    objNumbers[intNum] = true;
  }

  return false;
};

var containsDuplicate2 = (numbers) => {
  console.log(numbers);
  const list = {};
  for (let i = 0; i <= numbers.length; i++) {
    if (list[numbers[i]] !== undefined) {
      return `${numbers[i]} is duplicated`;
    }
    list[numbers[i]] = numbers[i];
  }
  return 'There is not duplicated numbers';
};

// console.log(containsDuplicate(numbers));
console.log(containsDuplicate2(numbers));
