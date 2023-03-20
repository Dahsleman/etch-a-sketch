//making the squares
const grid = document.getElementById("grid");
const width = 6;

function makeSquares(quantity) { 
    var length = width/quantity;
    var rows = quantity;
    var cols = quantity;
  
    grid.style.setProperty('grid-template-columns', `repeat(${cols},${length}in)`);
    grid.style.setProperty('grid-template-rows', `repeat(${rows},${length}in)`);
    
    for (let c = 0; c < (rows * cols); c++) {
      let cell = document.createElement("div");
      cell.setAttribute("id", c);
      grid.appendChild(cell).className = "grid-item";
    };
};

function removeAllChildNodes(parent){
    while(parent.firstChild){
        parent.removeChild(parent.firstChild);
    }
}

//changing the color of the navbar buttons
function changeNavbar(color) {
    var navbar_black = document.getElementById('black');
    var navbar_rgb = document.getElementById('rgb');
    if (color === 'black'){
        navbar_black.style.setProperty('background-color', 'black');
        navbar_rgb.style.setProperty('background-color', '#333');
    }else{
        navbar_rgb.style.setProperty('background-color', "rgb(155, 102, 102)");
        navbar_black.style.setProperty('background-color', '#333');
    }
}

//setting the color of the squares
var color = localStorage.getItem('color')
changeNavbar(color)
if (color === null) {
    color = 'black'
    localStorage.setItem('color', color);
    changeNavbar(color)
}

function black() {
    color = 'black'
    localStorage.setItem('color', color);
    changeNavbar(color)
    reset()
}

function rgb() {
    randonColor = Math.floor(Math.random()*16777215).toString(16);
    color = "#" + randonColor
    localStorage.setItem('color', color);
    changeNavbar(color)
    reset()
}

//reset button
function reset() {
    let cell = grid.children;
    let val = document.getElementById('slider').value;
    for (let i = 0; i < val*val; i++) {
        cell[i].style.backgroundColor = 'transparent';
    }    
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

//range slider
var slider = document.getElementById("slider");
var number = document.getElementById("number");

number.innerHTML = slider.value;
var range = slider.value;
makeSquares(range)

slider.oninput = function() {
    range = this.value;
    number.innerHTML = range;
    removeAllChildNodes(grid)
    makeSquares(range)
}
