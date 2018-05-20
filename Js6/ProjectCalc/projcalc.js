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