const strings = ['a', 'b', 'c', 'd'];
const numbers = [1, 2, 3, 4, 5];
// Variable array is somewhere in memory and the computer knows it.
// When I do array[2], i'm telling the computer, hey go to the array and grab the 3rd item from where the array is stored.
// - Static
//     - Big O
//         - Lookup O(1)
//         - push O(1)
//         - Insert O(n)
//         - delete O(n)
// - Dynamic
//     - Big O
//         - Lookup O(1)
//         - append* O(1) * can be O(n)
//         - Insert O(n)
//         - delete O(n)
// - Tips
//     - Sorting? ~ O(N log N)
//         - Radix Sort
//         - Quick Sort
//         - Heap Sort
//         - Bubble Sort
//         - Selection Sort
//         - Insertion Sort
//         - Merge Sort
//         - Counting Sort
//     - Searching. Is it sorted?
//         - Yes:
//             - Divide and Conquer - Binary Search O(log N)
//         - No:
//             - Will sorting make it faster? If still no, Linear Search
//             - Is it a String? See if a Tree data structure helps
//     - String question?
//         - Turn it into an Array ~ split()

strings[3]; // O(1)

//push
strings.push('e'); // O(1)

//pop
strings.pop(); // O(1)
strings.pop(); // O(1)

//unshift: add item at the start on the list
strings.unshift('x'); // O(n) because it needs to iterate reassign the indexes

//splice
strings.splice(2, 0, 'alien'); // O(n/2) ==> O(n) remove constants

console.log(strings);
