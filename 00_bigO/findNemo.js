//#1 -- For loop in Javascript.
const nemo = [
  'nemo',
  'dory',
  'bruce',
  'marlin',
  'gill',
  'bloat',
  'nigel',
  'squirt',
  'darla',
  'hank',
];
// Shuffle array
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

const shuffledNemo = shuffleArray(nemo);
console.log(shuffledNemo);
function findNemo1(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === 'nemo') {
      return 'Found NEMO!: ' + i;
    }
  }
}

console.log(findNemo1(shuffledNemo));
