

const screen = document.querySelector("#screen");
screen.style.display = "flex";
screen.style.width = "960px";
screen.style.height = "960px";
screen.style.flexDirection = "column";
screen.style.justifyContent = "space-between";


const initialGrid = 16;

function clearGrid() {
    while (screen.firstChild) {
        screen.firstChild.remove();
    }
}

function buildGrid(spaces) {
    for (let row = 0; row < spaces; row++){
        let currentRow = document.createElement("div");
        for (let column = 0; column < spaces; column++) {
            let currentColumn = document.createElement("div");
            currentColumn.style.flexGrow = "1";
            currentColumn.addEventListener("mouseover", () => {
                let r = Math.floor(Math.random() * 256);
                let g = Math.floor(Math.random() * 256);
                let b = Math.floor(Math.random() * 256);

                currentColumn.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";

            });
            currentRow.appendChild(currentColumn);
        }
        currentRow.style.display = "flex";
        currentRow.style.flexDirection = "row";
        currentRow.style.justifyContent = "space-between";
        currentRow.style.flexGrow = "1";
        screen.appendChild(currentRow);
    }
}

buildGrid(initialGrid);


const btn = document.querySelector("#redraw");
btn.addEventListener("click", () => {
    let spaces = prompt("Please enter the number of spaces (1-100)");
    clearGrid();
    buildGrid(spaces);
});