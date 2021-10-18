let container = document.querySelector('.container');

// Initialize default HTML container with 16x16 grid
for (let i = 0; i < 256; i++) {
    let gridDiv = document.createElement('div');
    gridDiv.classList.add('grid-item');
    container.appendChild(gridDiv);
}



// Declared with let as size will change later if user alters resolution
let gridItems = document.querySelectorAll('.grid-item');

gridItems.forEach((gridItem) => {
    gridItem.addEventListener('mouseover', () => {
            gridItem.classList.add('color');
    });
});



const resetButton = document.querySelector('button');

// Unsure whether iterating through all gridItems or initializing new nodelist
// with just colored pixels is faster way of selecting and clearing grid
function clearGrid() {
    let colorPixels = document.querySelectorAll('.color');
    colorPixels.forEach((pixel) => {
        pixel.classList.remove('color');
    });
}

function changeResolution(resolution) {
    if (resolution == gridItems.length) {
        return; // If equal, no need to change grid size
    }
    
    gridItems.forEach((item) => item.remove());
    container.style.gridTemplateColumns = 'repeat(' + resolution + ', 1fr)';

    for (let i = 0; i < (resolution * resolution); i++) {
        let gridDiv = document.createElement('div');
        gridDiv.classList.add('grid-item');
        container.appendChild(gridDiv);
    }

    gridItems = document.querySelectorAll('.grid-item');

    // Need to reset event listener, given removal and addition of new divs
    gridItems.forEach((gridItem) => {
        gridItem.addEventListener('mouseover', () => {
            gridItem.classList.add('color');
        });
    });  
}

// Event Listener to clear and resize the drawing panel
resetButton.addEventListener('click', () => {
    clearGrid();

    let resolution;

    while (true) {
        resolution = prompt('Number of squares per side of new grid? (Max: 100)');

        if (resolution <= 100 && resolution > 0 && resolution != false) {
            resolution = parseInt(resolution)
            resolution = Math.round(resolution);
            break;
        } else if (resolution === null || resolution === '') {
            return; // If prompt cancelled, return without changing the resolution
        } else {
            alert('Number of squares must be between 0 and 100')
        }
    }

    changeResolution(resolution);

})