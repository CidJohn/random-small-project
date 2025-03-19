import CreateElements from "../../utils/CreateElements.js";
import { SnakeGameScript } from "./SnakeGameScript.js";
let canvasLayout = [
  "border-2",
  "border-gray-900",
  "bg-white",
  "mb-10",
  "hidden",
];
function SnakeGame(container) {
  const temp = new CreateElements();
  const buttonStart = temp.button(container, "button", "btnStart", [
    "py-2",
    "px-4",
    "bg-blue-600",
    "text-white",
    "border",
    "rounded-lg",
    "border-blue-600",
    "hover:bg-white",
    "hover:text-gray-900",
  ]);
  buttonStart.textContent = "start";
  const scoreBoard = temp.div(container, "", ["flex", "gap-2"]);
  scoreBoard.textContent = "Score: ";
  temp.div(scoreBoard, "scores");
  const canvas = temp.element("canvas");
  canvas.id = "gameCanvas";
  canvas.classList.add(...canvasLayout);
  container.appendChild(canvas);

  SnakeGameScript(canvas);
}

export default SnakeGame;
