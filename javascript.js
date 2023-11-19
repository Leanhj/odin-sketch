const body = document.querySelector("body");
const mainDiv = document.createElement("div");
body.appendChild(mainDiv);

for (let i = 0; i < 16; i ++) {
    const row = document.createElement("div");
    row.className = "row";
    for (let j = 0; j < 16; j++) {
        const square = document.createElement("div");
        square.className = "square";
        row.appendChild(square);
    }
    mainDiv.appendChild(row);
}

const squareDivs = document.querySelectorAll(".square");

squareDivs.forEach(function(item) {
    item.addEventListener("mouseover", function() {
        item.className = "square-filled";
    });
});