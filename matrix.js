var matrix = document.getElementById("matrix");
var matrixCtx = matrix.getContext("2d");
var w = document.documentElement.clientWidth;
var h = document.documentElement.clientHeight;
matrix.width = w;
matrix.height = h;

// Set font size
var fontSize = 15;
// Calculate the number of characters per row, rounded down
var cols = Math.floor(w / fontSize);
// Create an array to store the y-coordinates for each column
var drops = [];
var str = "01";
// Populate the array with `cols` number of zeros
for (var i = 0; i < cols; i++) {
    drops.push(0);
}

function drawStr() {
    // Set the fill color for the rectangle
    matrixCtx.fillStyle = "#0000000d";
    // Draw a rectangle
    matrixCtx.fillRect(0, 0, w, h);

    // Configure text style and color
    matrixCtx.font = "600 " + fontSize + "px Arial";
    matrixCtx.fillStyle = "#00ff00";

    for (var i = 0; i < cols; i++) {
        // x-coordinate
        var x = i * fontSize;
        // y-coordinate
        var y = drops[i] * fontSize;
        // Randomly select a character
        matrixCtx.fillText(str[Math.floor(Math.random() * str.length)], x, y);

        // Reset to the top with some randomness
        if (y > h && Math.random() > 0.99) {
            drops[i] = 0;
        }
        drops[i]++;
    }
}

// Execute the function every 30 milliseconds
setInterval(drawStr, 30);
