const personPrototypes = {
  greeting: function () {
    return `Hello there ${this.firstName} ${this.lastName}`
  },
  getsMarried: function(newLastName) {
    this.lastName = newLastName;
  }
}

const mary = Object.create(personPrototypes);
mary.firstName = 'Mary';
mary.lastName = 'Williams';
mary.age = 30;

mary.getsMarried('Thompson');

console.log(mary.greeting());

const erik = Object.create(personPrototypes, {
  firstName: {value: 'Erik'},
  lastName: {value: 'Robles'},
  age: {value: 48}
});

console.log(erik);
console.log(erik.greeting());