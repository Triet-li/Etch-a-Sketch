
// change the size of the grid
const button4x4 = document.querySelector('.b4x4');
const button8x8 = document.querySelector('.b8x8');
const button16x16 = document.querySelector('.b16x16');
const button32x32 = document.querySelector('.b32x32');
const button64x64 = document.querySelector('.b64x64');
const buttonOptional = document.querySelector('.optional');

const buttons = document.querySelectorAll('.btn');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        let optionalGridColumn;
        if(button === button4x4) optionalGridColumn = 4
        else if(button === button8x8) optionalGridColumn =  8
        else if(button === button16x16) optionalGridColumn =  16
        else if(button === button32x32) optionalGridColumn = 32
        else if(button === button64x64) optionalGridColumn = 64
        else if(button === buttonOptional) {
            optionalGridColumn = +prompt("Choose your size:");
            while(optionalGridColumn > 100) {
                alert("Choose value <= 100");
                optionalGridColumn = +prompt("Choose your size:");
            }
        }
        for(let i = 1; i <= optionalGridColumn*optionalGridColumn; i++) {
            const gridDivs = document.createElement('div');
            gridDivs.classList.add('items');
            gridContainer.appendChild(gridDivs);
        }

        let root = document.querySelector(':root');
        root.style.setProperty('--gridColumn', optionalGridColumn);

        const container = document.querySelector('#gridContainer');
        const divs = container.querySelectorAll(':scope > div');

        divs.forEach(div => {
           div.addEventListener('mouseover', () => {
              div.style.cssText = 'background: black';
    });
});
    });
});

// clear the board
const resetButton = document.querySelector('#resetButton');
resetButton.addEventListener('click', () => {
    const container = document.querySelector('#gridContainer');
    const whiteDivs = container.querySelectorAll(':scope > div');
    whiteDivs.forEach(div => {
        div.style.cssText = 'background: white';
    })
   
});




