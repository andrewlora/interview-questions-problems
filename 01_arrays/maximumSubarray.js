// Given an integer array nums, find the subarray
//  with the largest sum, and return its sum.

// Example 1:

// Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
// Output: 6
// Explanation: The subarray [4,-1,2,1] has the largest sum 6.
// Example 2:

// Input: nums = [1]
// Output: 1
// Explanation: The subarray [1] has the largest sum 1.
// Example 3:

// Input: nums = [5,4,-1,7,8]
// Output: 23
// Explanation: The subarray [5,4,-1,7,8] has the largest sum 23.

// Constraints:

// 1 <= nums.length <= 105
// -104 <= nums[i] <= 104

// Follow up: If you have figured out the O(n) solution,
// try coding another solution using the divide and conquer approach,
// which is more subtle.

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  let arrSums = [nums[0]];
  let intMax = nums[0];

  for (let i = 1; i < nums.length; i++) {
    const intSum = arrSums[i - 1] + nums[i];

    if (intSum > nums[i]) {
      arrSums.push(intSum);
      intMax = intMax > intSum ? intMax : intSum;
    } else {
      arrSums.push(nums[i]);
      intMax = intMax > nums[i] ? intMax : nums[i];
    }
  }

  return intMax;
};

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));

// Maximum Subarray
// Problem: Given an integer array nums,
// find the contiguous subarray (containing at least one number)
// which has the largest sum and return its sum.

function maxSubArray2(nums) {
  let maxEndingHere = nums[0];
  let maxSoFar = nums[0];
  for (let i = 1; i < nums.length; i++) {
    maxEndingHere = Math.max(nums[i], maxEndingHere + nums[i]);
    maxSoFar = Math.max(maxSoFar, maxEndingHere);
  }
  return maxSoFar;
}

// Example usage:
// console.log(maxSubArray2([-2, 1, -3, 4, -1, 2, 1, -5, 4])); // Output: 6
// i=0
// maxEndingHere = -2
// maxSoFar = -2
// -------------------------------------------
// i=1
// maxEndingHere = (1 > (-2+1) = -1)) = 1
// maxSoFar = -2 > 1 = 1
// -------------------------------------------
// i=2
// maxEndingHere = (-3 > (1+(-3)) = -2)) = -2
// maxSoFar = 1 > -2 = 1
// -------------------------------------------
// i=3
// maxEndingHere = (4 > (-2+4) = 2)) = 4
// maxSoFar = 1 > 4 = 4
// -------------------------------------------
// i=4
// maxEndingHere = (-1 > (4+(-1) = 3)) = 3
// maxSoFar = 4 > 3 = 4
// -------------------------------------------
// i=5
// maxEndingHere = (2 > (3+2 = 5)) = 5
// maxSoFar = 4 > 5 = 5
// -------------------------------------------
// i=6
// maxEndingHere = (1 > (5+1 = 6)) = 6
// maxSoFar = 5 > 6 = 6
// -------------------------------------------
// i=7
// maxEndingHere = (-5 > (6+(-5)) = 1)) = 1
// maxSoFar = 6 > 1 = 6
// -------------------------------------------
// i=8
// maxEndingHere = (4 > (1+4 = 5)) = 5
// maxSoFar = 6 > 5 = 6
