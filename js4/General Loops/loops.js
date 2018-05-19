// for (let i = 0; i < 10; i++) {
//   if (i === 2) {
//     console.log('2 is my favorite number');
//     continue;
//   }

//   if(i === 5){
//     break;
//   }
//   console.log('Number ' + i);
// }

/* 
let i = 0;

while(i < 10){
  console.log('Number ' + i);
  i++;
}
*/

// let i = 0;

// do {
//   console.log('Number ' + i);
//   i++;
// }

// while(i < 10);

const cars = ['Ford', 'Chevy', 'Honda', 'Toyota'];

// for (let i = 0; i < cars.length; i++) {
//   console.log(cars[i]);
// }

// cars.forEach(function(car, index) {
//   console.log(`${index} : ${car}`);
// });

// Map 

/* 
const users = [
  {id:1, name: 'John'},
  {id:2, name: 'Sara'},
  {id:3, name: 'Karen'},
  {id:4, name: 'Steve'}
];

const ids = users.map(function(user){
  return user.id;
});

console.log(ids); 
*/

// Obtaining key value pairs FOR IN LOOP
const user = {
  firstName: 'John',
  lastName: 'Doe',
  age: 40
}

for(let x in user){
  console.log(`${x} : ${user[x]}`);
}