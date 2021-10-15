let container = document.querySelector('.container');

for (let i = 0; i < 256; i++) {
    let gridDiv = document.createElement('div');
    gridDiv.classList.add('grid-item');
    container.appendChild(gridDiv);
}

const gridItems = document.querySelectorAll('.grid-item');


gridItems.forEach((gridItem) => {

    gridItem.addEventListener('mouseover', () => {
        gridItem.classList.add('color');
    });
    
});
