const body = document.querySelector("body");
const mainDiv = document.createElement("div");
body.appendChild(mainDiv);

for (let i = 0; i < 16*16; i ++) {
    const square = document.createElement("div");
    mainDiv.appendChild(square);
}