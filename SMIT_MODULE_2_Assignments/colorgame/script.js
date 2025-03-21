const colors = ["red", "green", "blue", "yellow", "purple", "orange"];
let chances = 3;
let correctColor;

const circle = document.getElementById("circle");
const question = document.getElementById("question");
const buttons = document.getElementById("buttons");
const result = document.getElementById("result");
const chancesDisplay = document.getElementById("chances");

// Function to start the game
function startGame() {
  // Reset chances
  chances = 3;
  chancesDisplay.textContent = `Chances left: ${chances}`;
  result.textContent = "";

  // Pick a random color
  correctColor = colors[Math.floor(Math.random() * colors.length)];
  question.textContent = `Pick the color: ${correctColor}`;

  // Create buttons for each color
  buttons.innerHTML = "";
  colors.forEach(color => {
    const button = document.createElement("button");
    button.textContent = color;
    button.style.backgroundColor = color;
    button.addEventListener("click", () => checkAnswer(color));
    buttons.appendChild(button);
  });
}

// Function to check the user's answer
function checkAnswer(selectedColor) {
  if (selectedColor === correctColor) {
    circle.style.backgroundColor = correctColor;
    result.textContent = "Correct! You win!";
    setTimeout(startGame, 2000); // Restart game after 2 seconds
  } else {
    chances--;
    chancesDisplay.textContent = `Chances left: ${chances}`;
    if (chances === 0) {
      result.textContent = "Game Over! You ran out of chances.";
      setTimeout(startGame, 2000); // Restart game after 2 seconds
    } else {
      result.textContent = "Wrong! Try again.";
    }
  }
}

// Start the game when the page loads
startGame();