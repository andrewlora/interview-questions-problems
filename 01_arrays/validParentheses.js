// Valid Parentheses
// Problem: Given a string s containing just the characters '(', ')', '{', '}', '[' and ']',
// determine if the input string is valid.

const isValid = (s) => {
  const map = new Map();
  map.set('(', ')');
  map.set('[', ']');
  map.set('{', '}');
  const length = s.length;
  for (let i = 0; i <= length - 1; i += 2) {
    if (!s[i]) return false;
    if (!map.has(s[i])) return false;
    else if (map.get(s[i]) !== s[i + 1]) return false;
    else console.log(s[i] + '' + map.get(s[i]));
    // console.log('i:', i);
  }
  return true;
};
// Example usage:
// console.log(isValid('()')); // Output: true
// console.log(isValid('()[]{}[()')); // Output: false
// console.log(isValid('()[]{}()[}')); // Output: false
// console.log(isValid('()[]{}()[]()()[]()()')); // Output: true
// console.log(isValid('()[]{}()[]{}()()[]{}[[]{}()[]{}')); // Output: false
// console.log(isValid('()[]{}')); // Output: true
// console.log(isValid('(]')); // Output: false
console.log(isValid('()[]{}()(]')); // Output: false
