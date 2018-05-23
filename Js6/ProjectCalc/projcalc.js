// Square Footage Calculator

const calcButton = document.getElementById('calculate');
let len = document.getElementById('length');
let wid = document.getElementById('width');

function area(length, width) {
  let area = len.value * wid.value;
  document.getElementById('result').innerHTML = area + " square feet";
}

calcButton.addEventListener('click', function() {
  area(length, width);
});

// Cubic Footage Calculator

const calcCubeButton = document.getElementById('calculateCube');
let m1 = document.getElementById('cubicN1');
let m2 = document.getElementById('cubicN2');
let hei = document.getElementById('height');


function cube(cubicN1, cubicN2, height) {
  let cube = m1.value * m2.value * hei.value;
  document.getElementById('result').innerHTML = cube + " cubic feet";
}

calcCubeButton.addEventListener('click', function() {
  cube(cubicN1, cubicN2, height);
});

// Decimal to Inch Calculator

const calcDecButton = document.getElementById('calculateDec');
let decimal = document.getElementById('dec');

function decimalToInch(dec) {
  let decimalToInch = decimal.value * 12;
  document.getElementById('result2').innerHTML = Math.round(decimalToInch) + " inch(s)";
}

calcDecButton.addEventListener('click', function() {
  decimalToInch(dec);
});


// Inch To Decimal Calculator

const calcIncButton = document.getElementById('calculateInc');
let inches = document.getElementById('inc');

function inchToDecimal(inc) {
  let inchToDecimal = inches.value / 12;
  document.getElementById('result2').innerHTML = inchToDecimal.toFixed(3) + " inch(s)";
  if (inches.value == 12) {
    document.getElementById('result2').innerHTML = "1 Foot or 1.000 inches."
  }
}

calcIncButton.addEventListener('click', function() {
  inchToDecimal(inc);
});