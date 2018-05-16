const reverseInt = (int) => {
  int = int + '';
  return int.split("").reverse().join("");
}

console.log(reverseInt(123));
document.write(reverseInt(123));
