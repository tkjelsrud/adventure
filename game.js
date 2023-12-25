// Get the canvas element and its 2D context
const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

// Set canvas size
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Define player and initial position
const player = {
    x: canvas.width / 2,
    y: canvas.height / 2,
    speed: 5,
};

// Main game loop
/*function gameLoop() {
    // Clear the canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw player
    ctx.fillStyle = 'blue';
    ctx.fillRect(player.x - 10, player.y - 10, 20, 20);

    // Move player based on user input (e.g., arrow keys)
    // Update player position

    // Call the next frame
    requestAnimationFrame(gameLoop);
}*/

// Start the game loop
gameLoop();

// Handle keyboard input
document.addEventListener('keydown', (event) => {
    switch (event.key) {
        case 'ArrowUp':
            player.y -= player.speed;
            break;
        case 'ArrowDown':
            player.y += player.speed;
            break;
        case 'ArrowLeft':
            player.x -= player.speed;
            break;
        case 'ArrowRight':
            player.x += player.speed;
            break;
    }
});

function drawWalls() {
    // Example: Draw back wall
    const backWallHeight = 200;
    ctx.fillStyle = 'gray';
    ctx.fillRect(0, 0, canvas.width, backWallHeight);

    // Example: Draw side walls
    const sideWallWidth = 50;
    ctx.fillRect(0, 0, sideWallWidth, canvas.height);
    ctx.fillRect(canvas.width - sideWallWidth, 0, sideWallWidth, canvas.height);
}

function gameLoop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    drawWalls();

    ctx.fillStyle = 'blue';
    ctx.fillRect(player.x - 10, player.y - 10, 20, 20);

    requestAnimationFrame(gameLoop);
}
