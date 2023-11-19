const CANVAS_SIZE = 512;
let userSize = 0;

const body = document.querySelector("body");
const mainDiv = document.createElement("div");
body.appendChild(mainDiv);

function createGrid(size) {
    userSize = size;
    for (let i = 0; i < size; i ++) {
        const row = document.createElement("div");
        row.className = "row";
        for (let j = 0; j < size; j++) {
            const square = document.createElement("div");
            square.className = "square";
            square.style.height = CANVAS_SIZE/userSize + "px";
            square.style.width = CANVAS_SIZE/userSize + "px";
            row.appendChild(square);
        }
        mainDiv.appendChild(row);
    }
}

createGrid(16);

mainDiv.className = "canvas-container";

const squareDivs = document.querySelectorAll(".square");

squareDivs.forEach(function(item) {
    item.addEventListener("mouseover", function() {
        item.className = "square-filled";
        item.style.height = CANVAS_SIZE/userSize + "px";
        item.style.width = CANVAS_SIZE/userSize + "px";
    });
});