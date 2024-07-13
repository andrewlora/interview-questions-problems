// Given an integer array nums, move all 0's to the end of it while maintaining
// the relative order of the non - zero elements.

// Note that you must do this in-place without making a copy of the array.

// Example 1:

// Input: nums = [0,1,0,3,12]
// Output: [1,3,12,0,0]
// Example 2:

// Input: nums = [0]
// Output: [0]

// Constraints:

// 1 <= nums.length <= 104
// -231 <= nums[i] <= 231 - 1

// Follow up: Could you minimize the total number of operations done?

const moveZeroes1 = (nums) => {
  let index = nums.length;
  for (let i = 0; i < index; i++) {
    if (nums[i] === 0) {
      nums[nums.length] = nums[i];
      nums.splice(i, 1);
      i--;
      index--;
    }
  }
  return nums;
};
console.log(moveZeroes1([0, 1, 0, 3, 12, 4, 9, 0]));
// [0, 1, 0, 3, 12]
// [1, 0, 3, 12, 0]
// [1, 0, 3, 12, 0]

var moveZeroes = function (nums) {
  let finalArray = [];

  for (let i = nums.length - 1; i >= 0; i--) {
    if (nums[i] === 0) {
      finalArray.push(0);
    } else {
      finalArray.unshift(nums[i]);
    }
  }

  return finalArray;
};

// console.log(moveZeroes([0, 1, 0, 3, 12]));
