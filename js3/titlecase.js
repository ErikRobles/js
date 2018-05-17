const titleCase = (str) => {
    return str.replace(/\w\S*/g, function(txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
}

console.log(titleCase('this is a fine wine'));
document.write(titleCase('this is a fine wine') + ' <br>');

const capitolizeFirst = (str) => {
  str = str.toLowerCase().split(' ');
  for (let i = 0; i < str.length; i++) {
    str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
  }
  return str.join(' ');
}
console.log(capitolizeFirst("I'm a very dedicated learner"));
document.write(capitolizeFirst("I'm a very dedicated learner"));