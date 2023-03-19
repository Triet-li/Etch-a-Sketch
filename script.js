const grids = [];
for(let i = 0; i < 16*16; ++i)
{
    grids[i] = document.createElement('div');
    grids[i].style.cssText = 'box-sizing: border-box; border: 1px solid black; padding: 10px; width: 6.25%;';

}

const container = document.querySelector('.container');

for(let i = 0; i < 16*16; ++i)
{
    container.appendChild(grids[i]);
}