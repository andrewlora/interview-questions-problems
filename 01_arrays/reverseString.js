// Problem: Write a function that reverses a string.
// The input string is given as an array of characters s.

function reverse(str) {
  if (!str || typeof str != 'string' || str.length < 2) return str;

  const backwards = [];
  const totalItems = str.length - 1;
  for (let i = totalItems; i >= 0; i--) {
    backwards.push(str[i]);
  }
  return backwards.join('');
}

function reverse2(str) {
  //check for valid input
  return str.split('').reverse().join('');
}

const reverse3 = (str) => [...str].reverse().join('');

function reverseString(s) {
  let left = 0;
  let right = s.length - 1;
  while (left < right) {
    [s[left], s[right]] = [s[right], s[left]];
    left++;
    right--;
  }
  return s;
}

function reverseString2(list) {
  let left = 0;
  let right = list.length - 1;
  let reverseArray = [];
  while (left <= list.length - 1) {
    reverseArray[left] = list[right];
    left++;
    right--;
  }
  return reverseArray;
}

function reverseString3(list) {
  let index = list.length - 1;
  for (let i = 0; i <= list.length - 1; i++) {
    let temp = list[i];
    list[i] = list[index - i];
    list[index - i] = temp;
  }
  return list;
}

// console.log(reverse('serdna se erbmon im aloH'));
// console.log(reverse2('retteb gniddoc no sucoF'));
// console.log(reverse3('ocixem ot emoclew'));
// Example usage:
// console.log(reverseString(['h', 'e', 'l', 'l', 'o'])); // Output: ['o', 'l', 'l', 'e', 'h']
// console.log(reverseString2(['h', 'e', 'l', 'l', 'o'])); // Output: ['o', 'l', 'l', 'e', 'h']
console.log(reverseString3(['h', 'e', 'l', 'l', 'o'])); // Output: ['o', 'l', 'l', 'e', 'h']
