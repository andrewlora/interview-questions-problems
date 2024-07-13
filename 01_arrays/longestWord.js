// Find the Longest Word in a String
// Question: Write a function that returns the length of the longest word in a given sentence.
function findLongestWord(str) {
  const words = str.split(' ');
  let maxLength = 0;
  for (let word of words) {
    if (word.length > maxLength) {
      maxLength = word.length;
    }
  }
  return maxLength;
}

console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // Output: 6

function LongestWord(sen) {
  const arrWords = sen.split(' ');
  const regularExpression = /^[a-zA-Z0-9ñáéíóúÁÉÍÓÚÑ ,.'-]+$/u;

  let strLonger = '';

  for (let stringSen of arrWords) {
    if (
      regularExpression.test(stringSen) &&
      stringSen.length > strLonger.length
    ) {
      strLonger = stringSen;
    }
  }

  // code goes here
  return strLonger;
}

// keep this function call here
console.log(LongestWord('The quick brown fox jumped over the lazy dog'));
