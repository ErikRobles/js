// Person constructor
function Person(name, dob) {
  this.name = name;
  // this.age = age;
  this.birthday = new Date(dob);
  this.calculateAge = function () {
    const diff = Date.now() - this.birthday.getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }
}



// const erik = new Person('Erik', 48);
// const john = new Person('John', 32);
// const brad = new Person('Brad', 51);

// console.log(brad.age);
const brad = new Person('Brad', '9-10-1981');
const erik = new Person('Erik',  '6-30-1969');
console.log(erik.calculateAge());