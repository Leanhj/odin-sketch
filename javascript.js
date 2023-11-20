const CANVAS_SIZE = 512;
let userSize = 0;

const body = document.querySelector("body");

const buttonDiv = document.createElement("div");
buttonDiv.className = "button-div";

const button = document.createElement("button");
button.textContent = "Change size";
button.className = "button";
buttonDiv.appendChild(button);

const mainDiv = document.createElement("div");
mainDiv.className = "main-div";
mainDiv.appendChild(buttonDiv);
body.appendChild(mainDiv);

const gridDiv = document.createElement("div");
gridDiv.className = "canvas-container";
mainDiv.appendChild(gridDiv);

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
        gridDiv.appendChild(row);
    }
    gridAddEvents();
}

function updateGrid(size) {
    userSize = size;
    const blankSquares = document.querySelectorAll(".square");
    blankSquares.forEach(function(item) {
        item.remove();
    });
    const filledSquares = document.querySelectorAll(".square-filled");
    filledSquares.forEach(function(item) {
        item.remove();
    });
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
        gridDiv.appendChild(row);
    }
    gridAddEvents();
}

function gridAddEvents() {
    const squareDivs = document.querySelectorAll(".square");
    
    squareDivs.forEach(function(item) {
        item.addEventListener("mouseover", function() {
            item.className = "square-filled";
            item.style.backgroundColor = randomColor();
            item.style.height = CANVAS_SIZE/userSize + "px";
            item.style.width = CANVAS_SIZE/userSize + "px";
        });
    });
}

function randomColor() {
    return "#" + Math.floor(Math.random()*16777215).toString(16);
}

createGrid(16);

button.addEventListener("click", () => {
    newSize = prompt("Input canvas size", 16);
    if (newSize <= 100) {
        updateGrid(parseInt(newSize));
        gridAddEvents();
    } else {
        alert("Please enter a number below 100");
    }
});