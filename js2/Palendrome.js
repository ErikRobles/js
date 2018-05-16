const isPalendrome = (str) => {
  const revString = str.split('').reverse().join('');
  return revString === str;
}

document.write('<h1>Is it a Palendrome or not?</h1>');
document.write('<h2>¿Es un palíndromo o no?</h2><br>');


console.log('hello = ' + isPalendrome('hello'));
document.write('<h3 style="display: inline;">hello = </h3>' + isPalendrome('hello') + '<br>');

console.log('level = ' + isPalendrome('level'));
document.write('<h3 style="display: inline;">level = </h3> ' + isPalendrome('level') + '<br>');

console.log('mom = ' + isPalendrome('mom'));
document.write('<h3 style="display: inline;">mom = </h3> ' + isPalendrome('mom') + '<br>');

console.log('moon = ' + isPalendrome('moon'));
document.write('<h3 style="display: inline;">moon = </h3> ' + isPalendrome('moon') + '<br>');

document.write('<h4>End of file</h4>')
