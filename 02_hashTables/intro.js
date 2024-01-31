let user = {
  name: 'Kyle',
  age: 54,
  magic: true,
  scream: function () {
    console.log('aaaaaah!');
  },
};

console.log(user.name); // Lookup O(1)
user.spell = 'abra kadabra'; // Insert O(1);
console.log(user);

const myMap = new Map(); //  Diff between a Map and an object is the fact that a map allows you to save any data type as a Key
const mySet = new Set(); // only store the keys, no values
