/* 
Validate Balanced Brackets

Given a string containing just the characters `(`, `)`, `{`, `}`, `[` and `]`, determine if the input string is valid.
An input string is valid if:
Open brackets are closed by the same type of brackets.
Open brackets are closed in the correct order.
*Examples:
Input: `s = "()"`     Output: true
Input: `s = "()[]{}"` Output: true
Input: `s = "(]"`     Output: false
Input: `s = "([)]"`   Output: false
Input: `s = "{[]}"`   Output: true

### Hints:
Use a stack to keep track of open brackets.
When encountering a closing bracket, check if it matches the most recent open bracket stored in the stack.
If it matches, remove that open bracket from the stack; otherwise, the string is not valid.
At the end, the stack should be empty if all the brackets were properly balanced.

*/

function isValid(s) {
  // Luego dejas un comment diciendo: acabé a las 5:40 o algo así. Ahorita son las 5:19 en donde estoy. Suerte y que te diviertas. bye! !
  // Gracias David, muchas gracias aqui ando dandole thanks <!DOCTYPE html>

  // Termine a las 5:29pm

  // David puedes revisarlo por favor y espero tus comentarios de nuevo gracias ,
  // Muchas gracias por tu tiempo y esfuerzo Jesús.

  let list = new Map();
  list.set('(', ')');
  list.set('[', ']');
  list.set('{', '}');

  let openStack = [];
  for (let i = 0; i < s.length; i++) {
    if (list.has(s[i])) {
      openStack.push(s[i]);
    } else {
      if (list.get(openStack[openStack.length - 1]) === s[i]) {
        openStack.pop();
      } else {
        return false;
      }
    }
  }
  return openStack.length ? false : true;
}
// Test examples
console.log(isValid('()[]{({[]})}')); // true
console.log(isValid('([])([])([])([])')); // true
console.log(isValid('([])')); // true
console.log(isValid('([)]')); // false
console.log(isValid('{[]}')); // true
console.log(isValid('{[]}')); // true
console.log(isValid('(){[]}[]')); // true
console.log(isValid('()')); // true
console.log(isValid('()[]{}')); // true
console.log(isValid('(]')); // false
console.log(isValid('([)]')); // false
console.log(isValid('{[]}')); // true
console.log(isValid('(){[]}[]')); // true
