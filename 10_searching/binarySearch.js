function binarySearch(arr, target) {
  let low = 0;
  let high = arr.length - 1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    if (arr[mid] === target) {
      return mid; // Target found, return the index
    } else if (arr[mid] < target) {
      low = mid + 1; // Search in the right half
    } else {
      high = mid - 1; // Search in the left half
    }
  }

  return -1; // Target not found
}

// Example usage
let array = [2, 3, 4, 10, 40];
let target = 10;
let result = binarySearch(array, target);

if (result !== -1) {
  console.log(`Element is present at index ${result}`);
} else {
  console.log('Element is not present in array');
}
