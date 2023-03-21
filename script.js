
function makeRandomRGB() {
    return Math.floor(Math.random() * 256);
}

let size = 16;
let temp = size;
let gridWidth = (960 / size) + "px";
let gridHeight = (659 / size) + "px";
const grids = [];

// Create grids
    for(let i = 0; i < size*size; ++i)
        {
            grids[i] = document.createElement('div');
            grids[i].style.cssText = 'box-sizing: border-box; border: 1px solid black;';
            grids[i].style.width = gridWidth;
            grids[i].classList.add('grid');
            const container = document.querySelector('.container');
            container.appendChild(grids[i]);
         }
function createGrids(temp) {
    if(size != 16) {

        for(let i = 0; i < temp*temp; ++i) {
            grids[i].remove();
        }
        for(let i = 0; i < size*size; ++i)
        {
            grids[i] = document.createElement('div');
            grids[i].style.cssText = 'box-sizing: border-box; border: 1px solid black; ';
            grids[i].style.width = gridWidth;
            grids[i].style.height = gridHeight;
            grids[i].classList.add('grid');
            grids.length = size*size;
            const container = document.querySelector('.container');
            container.appendChild(grids[i]);
        }
    }   

let grid
let red, green, blue;
// Hover effect
const gridElements = Array.from(document.getElementsByClassName('grid'));
gridElements.forEach(element => {
    
    element.addEventListener('mouseover', () => {
      
       
        red = makeRandomRGB();
        green = makeRandomRGB();
        blue = makeRandomRGB(); 
        element.style.backgroundColor = "rgb("+red+"," +green+"," +blue+")";
       
      
       
         
    });
    element.addEventListener('mouseleave', () => {
        element.style.backgroundColor = "rgb("+red+"," +green+"," +blue+")";
      
    });
});

}


createGrids();

const changeSizeButton = document.querySelector('.changeButton');


function clearGrid() {
    for(let i = 0; i < size*size; ++i) {
        grids[i].style.backgroundColor = 'white';
    }
}

changeSizeButton.addEventListener('click', () => { 
    clearGrid();
    temp = size;
    size = document.getElementById("changeSizeInput").value;
    if(size > 64 || size <= 0) {
        alert("Please enter again with the smaller number!");
        size = temp;
        return;
    }
    gridHeight = (659 / size) + "px";
    gridWidth = (960 / size) + "px";
    createGrids(temp);
 })

const clearButton = document.querySelector('.clearButton');
clearButton.addEventListener('click', clearGrid);

// put it on DOM

