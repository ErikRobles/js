<<<<<<< HEAD
// Basic Structure

// (function() {
//   // Declare private vars and function

//   return {
//     // Declare public vars and function
//   }
// })();
// -------------------------//

// Standard module pattern

// const UICtrl = (function() {
//   let text = 'Hello World';

//   const changeText = function() {
//     const element = document.querySelector('h1');
//     element.textContent = text;
//   }

//   return {
//     callChangeText: function() {
//       changeText();
//       console.log(text);
//     }
//   }
// })(); 

// UICtrl.callChangeText();

// --------------------//

// Revealing Module Pattern
const ItemCtrl = (function() {
  let data = [];

  function add(item) {
    data.push(item);
    console.log('Item Added...');
  }

  function get(id) {
    return data.find(item => {
      return item.id === id;
    });
  }

  return {
    add: add,
    get: get
  }
})();

ItemCtrl.add({id: 1, name: 'John'});
ItemCtrl.add({id: 2, name: 'Mark'});

console.log(ItemCtrl.get(2));

=======
// Basic Structure

// (function() {
//   // Declare private vars and function

//   return {
//     // Declare public vars and function
//   }
// })();
// -------------------------//

// Standard module pattern

// const UICtrl = (function() {
//   let text = 'Hello World';

//   const changeText = function() {
//     const element = document.querySelector('h1');
//     element.textContent = text;
//   }

//   return {
//     callChangeText: function() {
//       changeText();
//       console.log(text);
//     }
//   }
// })(); 

// UICtrl.callChangeText();

// --------------------//

// Revealing Module Pattern
const ItemCtrl = (function() {
  let data = [];

  function add(item) {
    data.push(item);
    console.log('Item Added...');
  }

  function get(id) {
    return data.find(item => {
      return item.id === id;
    });
  }

  return {
    add: add,
    get: get
  }
})();

ItemCtrl.add({id: 1, name: 'John'});
ItemCtrl.add({id: 2, name: 'Mark'});

console.log(ItemCtrl.get(2));

>>>>>>> d62a8fabdb79af6fca9e8308f58a1401339465ca
