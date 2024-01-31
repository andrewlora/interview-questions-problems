// A cat is hiding in one of 5 boxes that are lined up in a row
// The boxes are numbered 1 to 5
// Each night the cat hides in an adjacent box, exactly one number away
// Each morning you can open a single box to try to find the cat

// Can you win this game of hide and seek?
// What is your strategy for finding the cat?
// Bonus: What if are n boxes in a row?

const hidingCatPuzzle = (numBoxes) => {
  let boxes = [];
  let catIndex;
  let firstDay = true;
  let getBoxes = () => {
    for (let i = 0; i <= numBoxes - 1; i++) {
      boxes[i] = 0;
    }
  };
  let catMoves = () => {
    if (firstDay) {
      let random = Math.floor(Math.random() * numBoxes) + 1;
      catIndex = random - 1;
    } else {
      boxes[catIndex] = 0;
      if (catIndex === 0 && numBoxes > 1) {
        catIndex = catIndex + 1;
      } else if (catIndex === numBoxes - 1 && numBoxes > 1) {
        catIndex = catIndex - 1;
      } else {
        let leftOrRight = Math.floor(Math.random() * 2) + 1;
        catIndex = leftOrRight === 2 ? catIndex + 1 : catIndex - 1;
      }
    }
    boxes[catIndex] = 1;
  };
  getBoxes();
  catMoves();
  let findCat = () => {
    if (numBoxes === 1) return 1;
    if (boxes[numBoxes - 1] === 1 && numBoxes > 1) {
      catIndex = numBoxes - 1;
      firstDay = false;
    } else {
      if (firstDay) {
        firstDay = false;
        for (let i = 1; i <= numBoxes - 2; i++) {
          if (boxes[i] === 1) {
            catIndex = i;
            break;
          }
        }
      } else {
        if (boxes[catIndex - 1] === 1) {
          catIndex = catIndex - 1;
        } else if (boxes[catIndex + 1] === 1) {
          catIndex = catIndex + 1;
        }
      }
    }
    console.log('-------------------');
    console.log(boxes);
    console.log('cat is founded in box:', catIndex + 1);
    catMoves();
  };
  return findCat;
};

let findCat = hidingCatPuzzle(10);
console.log('findCat monday:', findCat());
console.log('findCat tuesday:', findCat());
console.log('findCat wednesday:', findCat());
// console.log('findCat thursday:', findCat());
// console.log('findCat friday:', findCat());
// console.log('findCat saturday:', findCat());
// console.log('findCat sunday:', findCat());
// console.log('findCat monday:', findCat());
// console.log('findCat tuesday:', findCat());
// console.log('findCat wednesday:', findCat());

// console.log(getBoxesWithCat(boxes));
// console.log(boxes);
// console.log(findCat(getBoxesWithCat(boxes)));
