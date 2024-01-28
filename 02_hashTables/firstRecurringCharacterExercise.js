//Google Question
//Given an array = [2,5,1,2,3,5,1,2,4]:
//It should return 2

//Given an array = [2,1,1,2,3,5,1,2,4]:
//It should return 1

//Given an array = [2,3,4,5]:
//It should return undefined

function firstRecurringCharacter2(input) {
  let firstPair = {};
  for (let i = 0; i < input.length; i++) {
    if (firstPair[input[i]] !== undefined) {
      return input[i];
    } else {
      firstPair[input[i]] = i;
    }
  }
  return firstPair;
}

console.log(firstRecurringCharacter2([2, 1, 1, 2, 3, 5, 1, 2, 4]));
// console.log(firstRecurringCharacter2([2,1,8,1,3,5,1,2,4]));
// console.log(firstRecurringCharacter2([2,1,8,2,3,5,1,2,4]));
// console.log(firstRecurringCharacter2([2,1,8,9,2,5,1,2,4]));
// console.log(firstRecurringCharacter2([9,1,8,9,2,5,1,2,4]));

//Bonus... What if we had this:
// [2,5,5,2,3,5,1,2,4]
// return 5 because the pairs are before 2,2
