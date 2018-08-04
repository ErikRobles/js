<<<<<<< HEAD
// Maps = key-value pairs - can use any type as a key or a value

const map1 = new Map();

// Set keys
const key1 = 'some string',
      key2 = {},
      key3 = function() {};


// Set map values by key
map1.set(key1, 'Value of key1');
map1.set(key2, 'Value of key2');
map1.set(key3, 'Value of key3');

// Get values by key
// console.log(map1.get(key1), map1.get(key2), map1.get(key3));

// Count the values
// console.log(map1.size);

// Iterating through maps

// Loop using for...of to get keys and values
// for(let [key, value] of map1) {
//   console.log(`${key} = ${value}`);
// }

// Iterate keys only
// for(let key of map1.keys()) {
//   console.log(key);
// }

// Iterate values only
// for(let value of map1.values()) {
//   console.log(value);
// }

// Loop with forEach
// map1.forEach(function(value, key) {
//   console.log(`${key} = ${value}`);
// });

// --------------------//

// Convert sets to arrays

// Create an array of the key value pairs
// const keyValArr = Array.from(map1);
// console.log(keyValArr);

//------------------------//

// Create an array of the values 
const valArr = Array.from(map1.values());
console.log(valArr);

// Create an array of the keys 
const keyArr = Array.from(map1.keys());
=======
// Maps = key-value pairs - can use any type as a key or a value

const map1 = new Map();

// Set keys
const key1 = 'some string',
      key2 = {},
      key3 = function() {};


// Set map values by key
map1.set(key1, 'Value of key1');
map1.set(key2, 'Value of key2');
map1.set(key3, 'Value of key3');

// Get values by key
// console.log(map1.get(key1), map1.get(key2), map1.get(key3));

// Count the values
// console.log(map1.size);

// Iterating through maps

// Loop using for...of to get keys and values
// for(let [key, value] of map1) {
//   console.log(`${key} = ${value}`);
// }

// Iterate keys only
// for(let key of map1.keys()) {
//   console.log(key);
// }

// Iterate values only
// for(let value of map1.values()) {
//   console.log(value);
// }

// Loop with forEach
// map1.forEach(function(value, key) {
//   console.log(`${key} = ${value}`);
// });

// --------------------//

// Convert sets to arrays

// Create an array of the key value pairs
// const keyValArr = Array.from(map1);
// console.log(keyValArr);

//------------------------//

// Create an array of the values 
const valArr = Array.from(map1.values());
console.log(valArr);

// Create an array of the keys 
const keyArr = Array.from(map1.keys());
>>>>>>> d62a8fabdb79af6fca9e8308f58a1401339465ca
console.log(keyArr);