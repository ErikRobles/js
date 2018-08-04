<<<<<<< HEAD
// SETS -  Store unique values of any type

const set1 = new Set();

// Add values to set
set1.add(100);
set1.add('A string');
set1.add({name: 'John'});
set1.add(true);
set1.add(100); // Will not add to set as it is no longer unique.

// const set2 = new Set([1, true, 'string'])

// console.log(set2);

// console.log(set1);

// Get count
// console.log(set1.size);

// Check for values
// console.log(set1.has(100));
// console.log(set1.has(50 + 50));
// console.log(set1.has(100));
// console.log(set1.has({name: 'John'})); // Will return false

// console.log({name: 'John'} === {name: 'John'}); // will return false as they are pointing to different areas of memory in the computer.


// Delete from set
// set1.delete(100);

// console.log(set1);

// Iterate through sets

// For...of 
// for(let item of set1) {
//       console.log(item);
// }

// ForEach loop
// set1.forEach((value) => {
//       console.log(value);
// });

// Convert sets into arrays
const setArr = Array.from(set1);
=======
// SETS -  Store unique values of any type

const set1 = new Set();

// Add values to set
set1.add(100);
set1.add('A string');
set1.add({name: 'John'});
set1.add(true);
set1.add(100); // Will not add to set as it is no longer unique.

// const set2 = new Set([1, true, 'string'])

// console.log(set2);

// console.log(set1);

// Get count
// console.log(set1.size);

// Check for values
// console.log(set1.has(100));
// console.log(set1.has(50 + 50));
// console.log(set1.has(100));
// console.log(set1.has({name: 'John'})); // Will return false

// console.log({name: 'John'} === {name: 'John'}); // will return false as they are pointing to different areas of memory in the computer.


// Delete from set
// set1.delete(100);

// console.log(set1);

// Iterate through sets

// For...of 
// for(let item of set1) {
//       console.log(item);
// }

// ForEach loop
// set1.forEach((value) => {
//       console.log(value);
// });

// Convert sets into arrays
const setArr = Array.from(set1);
>>>>>>> d62a8fabdb79af6fca9e8308f58a1401339465ca
console.log(setArr);