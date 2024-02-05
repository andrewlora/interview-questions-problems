// Given 2 arrays, create a function that let's a user know
// (true / false) whether these two arrays contain any common items

// For example:
// const array1 = ['a','b','c','x'];
// const array1 = ['z','y','i'];
// should return false.

// --------------------
// const array1 = ['a','b','c','x'];
// const array1 = ['z','y','x'];
// should return true.

// 2 parameters - arrays
// return false or true

let containsCommonItem = (array1, array2) => {
  if (!array1 || array1.length === 0)
    return console.log('Array1 should not be empty');
  if (!array2 || array2.length === 0)
    return console.log('Array2 should not be empty');
  for (i = 0; i < array1.length; i++) {
    for (j = 0; j < array2.length; j++) {
      console.log(array1[i], array2[j]);
      if (array1[i] === array2[j]) return console.log('result', true);
    }
  }
  return console.log('result', false);
};
// O(n^2) Quadratic Time
// O(1) Space complexity

// containsCommonItem(["a", "b", "c", "x"], ["z", "y", "i"]);
// containsCommonItem(["a", "b", "c", "x"], ["b", "y", "x"]);
// containsCommonItem([], ["z", "y", "i"]);
// containsCommonItem(["a", "b", "c", "x"], []);

let containsCommonItem2 = (array1, array2) => {
  let map = {};
  for (let i = 0; i < array1.length; i++) {
    if (!map[array1[i]]) map[array1[i]] = true;
  }
  console.log(map);
  for (let i = 0; i < array1.length; i++) {
    if (map[array2[i]]) return console.log('result', true);
  }
  return console.log('result', false);
};
// O(a+b) Time Complexity
// O(a) Space Complexity

// containsCommonItem2(["a", "b", "c", "x"], ["b", "y", "x"]);

let containsCommonItem3 = (array1, array2) => {
  return array1.some((item) => array2.includes(item));
};

console.log(containsCommonItem3(['a', 'b', 'c', 'z'], ['m', 'y', 'p']));
