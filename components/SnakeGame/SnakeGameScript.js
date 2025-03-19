export const SnakeGameScript = (canvas) => {
  const ctx = canvas.getContext("2d");
  const buttonStart = document.getElementById("btnStart");
  const scoreDisplay = document.getElementById("scores");

  canvas.width = 400;
  canvas.height = 400;

  const box = 10;
  let snake, food, direction, score, gameLoop;
  let gameStarted = false;

  function startGame() {
    gameStarted = true;
    buttonStart.style.display = "none";
    canvas.style.display = "block";

    snake = [{ x: 50, y: 50 }];
    direction = "RIGHT";
    score = 0;
    scoreDisplay.textContent = score;

    spanFood();

    if (gameLoop) clearInterval(gameLoop);
    gameLoop = setInterval(Draw, 100);
  }

  function spanFood() {
    food = {
      x: Math.floor(Math.random() * (canvas.width / box)) * box,
      y: Math.floor(Math.random() * (canvas.height / box)) * box,
    };
  }

  function Draw() {
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "lime";
    snake.forEach((part) => {
      ctx.fillRect(part.x, part.y, box, box);
      ctx.strokeStyle = "darkgreen";
      ctx.strokeRect(part.x, part.y, box, box);
    });

    ctx.fillStyle = "red";
    ctx.fillRect(food.x, food.y, box, box);

    let head = { ...snake[0] };
    if (direction === "UP") head.y -= box;
    if (direction === "DOWN") head.y += box;
    if (direction === "LEFT") head.x -= box;
    if (direction === "RIGHT") head.x += box;

    if (
      head.x < 0 ||
      head.x >= canvas.width ||
      head.y < 0 ||
      head.y >= canvas.height ||
      snake.some((part) => part.x === head.x && part.y === head.y)
    ) {
      alert("Game Over! Your Score: " + score);
      buttonStart.style.display = "block";
      canvas.style.display = "none";
      scoreDisplay.textContent = "0";
      clearInterval(gameLoop);
      return;
    }

    if (head.x === food.x && head.y === food.y) {
      score++;
      scoreDisplay.textContent = score;
      spanFood();
    } else {
      snake.pop();
    }

    snake.unshift(head);
  }

  document.addEventListener("keydown", (event) => {
    if (!gameStarted) return;
    if (event.key === "ArrowUp" && direction !== "DOWN") direction = "UP";
    if (event.key === "ArrowDown" && direction !== "UP") direction = "DOWN";
    if (event.key === "ArrowLeft" && direction !== "RIGHT") direction = "LEFT";
    if (event.key === "ArrowRight" && direction !== "LEFT") direction = "RIGHT";
  });

  buttonStart.addEventListener("click", startGame);
};
