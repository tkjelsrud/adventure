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
function gameLoop() {
    // Clear the canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw player
    ctx.fillStyle = 'blue';
    ctx.fillRect(player.x - 10, player.y - 10, 20, 20);

    // Move player based on user input (e.g., arrow keys)
    // Update player position

    // Call the next frame
    requestAnimationFrame(gameLoop);
}

// Start the game loop
gameLoop();
