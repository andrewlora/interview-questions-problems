// Find the Maximum Number in an Array
// Question: Write a function that finds the maximum number in an array.

function findMax3(arr) {
  let sortedArray = arr.sort((a, b) => a - b);
  return sortedArray[sortedArray.length - 1];
}

console.log(findMax([10])); // Output: 5
console.log(findMax([1, 2, 3, 4, 5])); // Output: 5
console.log(findMax([2, 12, 0, 4, 1])); // Output: 12
console.log(findMax([7, 2, 3, 9, 5])); // Output: 9
console.log(findMax([17, 2, 3, 9, 5])); // Output: 17
console.log(findMax([7, 2, 21, 9, 55])); // Output: 9

function findMax2(arr) {
  return Math.max(...arr);
}

function findMax(arr) {
  let index = arr.length - 1;
  let max = arr[0];
  while (index > 0) {
    max = max < arr[index] ? arr[index] : max;
    index--;
  }
  return max;
}
