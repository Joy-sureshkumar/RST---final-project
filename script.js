// area of a circle = ( d / 2 ) ^2 * PI
// area of trianlge = (base * height/2)
// area of a square = length*length
// area of a trapeziod = (a + b)/2 *height
// area of a rectangle = length * width 
var x = 0 
let length = 0;
let parralelLength = 0;
let width = 0;
let height = 0;
let base = 0;
let area = 0;
let diameter = 0;
let result = 0;
let userinput = 0;
const PI = (22 / 7);

// connects the button and the equation so the area will be displayed
document.getElementById('button').addEventListener('click', circArea);
document.getElementById('button').addEventListener('click', rectArea);
document.getElementById('button').addEventListener('click', squareArea);
document.getElementById('button').addEventListener('click', trapArea);
document.getElementById('button').addEventListener('click', triArea);

// the function takes the input and then caluculates the area via the equation
function circArea() {
  diameter = document.getElementById('diameter').value;
  diameter = parseInt(diameter);
  result = ((diameter / 2) ** 2) * PI;
  // displays the answer directly on the page
  document.getElementById('area').innerHTML = result;
}

function rectArea() {
  length = document.getElementById('length').value;
  length = parseInt(length);
  width = document.getElementById('width').value;
  width = parseInt(width);
  result = (length * width);
  document.getElementById('rectArea').innerHTML = result;
}

function squareArea() {
  length = document.getElementById('length').value;
  length = parseInt(length);
  result = (length * length);
  document.getElementById('area').innerHTML = result;
}

function trapArea() {
  parralelLength = document.getElementById('parralelLength').value;
  parralelLength = parseInt(parralelLength);
  base = document.getElementById('base').value;
  base = parseInt(base);
  height = document.getElementById('height').value;
  height = parseInt(height);
  result = ((parralelLength + base) / 2) * height;
  document.getElementById('trapArea').innerHTML = result;
}

function triArea() {
  height = document.getElementById('height').value;
  height = parseInt(height);
  base = document.getElementById('base').value;
  base = parseInt(base);
  result = ((base * height) / 2);
  document.getElementById('triArea').innerHTML = result;
}
