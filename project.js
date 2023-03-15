//making the squares
const grid = document.getElementById("grid");
function makeSquares(quantity) { 
    var leght = 6/quantity;
    var rows = quantity;
    var cols = quantity;
  
    grid.style.setProperty('--grid-rows', rows);
    grid.style.setProperty('--grid-cols', cols);
    grid.style.setProperty('grid-template-columns', `repeat(${cols},${leght}in)`);
    grid.style.setProperty('grid-template-rows', `repeat(${rows},${leght}in)`);
    
    for (let c = 0; c < (rows * cols); c++) {
      let cell = document.createElement("div");
      cell.setAttribute("id", c);
      grid.appendChild(cell).className = "grid-item";
    };
};

//setting the color of the squares
var color = localStorage.getItem('color')
if (color === null) {
    color = 'black'
    localStorage.setItem('color', color);
}

function black() {
    color = 'black'
    localStorage.setItem('color', color);
    window.location.reload();
      
}

function rgb() {
    randonColor = Math.floor(Math.random()*16777215).toString(16);
    color = "#" + randonColor
    localStorage.setItem('color', color);
    window.location.reload();
}


//changing the color of the squares
document.onmouseover = function(e) {
    var cell_id = e.target.id;
    if (cell_id!=='grid' && cell_id!=='black' && cell_id!=='rgb') {
        var cell = document.getElementById(e.target.id);
        color = localStorage.getItem('color') 
        if (color !=='black'){
            randonColor = Math.floor(Math.random()*16777215).toString(16);
            color = "#" + randonColor
        }
        cell.style.setProperty('background-color', color);
    }
}

//changing the color of the navbar buttons
var navbar_black = document.getElementById('black');
var navbar_rgb = document.getElementById('rgb');
if (color === 'black'){
    navbar_black.style.setProperty('background-color', 'black');
    navbar_rgb.style.setProperty('background-color', '#333');
}else{
    navbar_rgb.style.setProperty('background-color', "rgb(155, 102, 102)");
    navbar_black.style.setProperty('background-color', '#333');
}

//reset button
function reset() {
    window.location.reload();
}

//range slider
var slider = document.getElementById("slider");
var number = document.getElementById("number");
var range = localStorage.getItem('range')

if (range === null){
    range = slider.value;
    localStorage.setItem('range', range);
}

range = localStorage.getItem('range')
number.innerHTML = range;
slider.value = range;

slider.oninput = function() {
    range = this.value;
    number.innerHTML = range;
    localStorage.setItem('range', range);
    window.location.reload();
}

makeSquares(range)

// //square button (not using)
// var square = localStorage.getItem('square')
// if (square === null) {
//     square = 16
//     localStorage.setItem('square', square);
// }

// function squareNumbers() {
//     let choise = prompt("Select the number of squares per side", "16");
//     square = parseInt(choise)
//     localStorage.setItem('square', square);
//     window.location.reload();
// }

// square = localStorage.getItem('square')
// makeSquares(square)