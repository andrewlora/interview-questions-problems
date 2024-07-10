// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
// Example 2:

// Input: nums = [3,2,4], target = 6
// Output: [1,2]
// Example 3:

// Input: nums = [3,3], target = 6
// Output: [0,1]

// Constraints:

// 2 <= nums.length <= 104
// -109 <= nums[i] <= 109
// -109 <= target <= 109
// Only one valid answer exists.

// Follow-up: Can you come up with an algorithm that is less than O(n2) time complexity?

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum1 = function (nums, target) {
  const finalArray = [];
  const objIndices = {};

  for (let i = 0; i < nums.length; i++) {
    if (objIndices.hasOwnProperty(target - nums[i])) {
      finalArray.push(objIndices[target - nums[i]]);
      finalArray.push(i);
    } else {
      objIndices[nums[i]] = i;
    }
  }

  return finalArray;
};

// console.log(twoSum1([3, 8, 1, 11, 2, 4, 7], 6));

/**
 * Problem: Given an array of integers nums and an integer target,
 * return indices of the two numbers such that they add up to target.
 *
 * @param {*} nums
 * @param {*} target
 * @return {*}
 */
function twoSum2(nums, target) {
  let map = new Map();
  for (let i = 0; i < nums.length; i++) {
    console.log(map);
    let complement = target - nums[i];
    if (map.has(complement)) {
      return [map.get(complement), i];
    }
    map.set(nums[i], i);
  }
  return [];
}

// Example usage:
// console.log(twoSum2([0, 4, 23, 2, 7, 11, 15], 9)); // Output: [3, 4]

const twoSum3 = (nums, target) => {
  let list = {};
  for (let i = 0; i < nums.length; i++) {
    let complement = target - nums[i];
    if (list[complement]) return 'indexes are ' + list[complement] + '-' + i;
    list[nums[i]] = i;
  }

  return list;
};

// Example usage:
console.log(twoSum3([3, 4, 23, 2, 1, 11, 5], 9)); // Output: [3, 4]
