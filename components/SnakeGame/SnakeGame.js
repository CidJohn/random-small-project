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

  const jstickCont = temp.div(container, "", [
    "jstick-cont",
    "flex",
    "justify-center",
    "w-full",
    "md:hidden",
  ]);

  const jstick = temp.div(jstickCont, "joy_stick", [
    "flex",
    "flex-col",
    "w-75",
    "h-50",
    "px-2",
  ]);

  const contUp = temp.div(jstick, "arrw-up", ["flex", "justify-center"]);
  const btnUp = temp.button(contUp, "button", "btnUp", [
    "p-5",
    "text-4xl",
    "font-bold",
    "border",
    "border-gray-700",
    "rounded-lg",
  ]);
  btnUp.innerHTML = `
<svg class="w-6 h-6 text-gray-800 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 8">
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7 7.674 1.3a.91.91 0 0 0-1.348 0L1 7"/>
</svg>
  `;

  const contLeftRight = temp.div(jstick, "arrw-leftRignt", [
    "flex",
    "justify-between",
    "gap-3",
    "h-25",
  ]);

  const btnLeft = temp.button(contLeftRight, "button", "btnLeft", [
    "p-5",
    "text-4xl",
    "font-bold",
    "border",
    "border-gray-700",
    "rounded-lg",
  ]);
  btnLeft.innerHTML = `
   <svg class="w-6 h-6 text-gray-800 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 8 14">
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 1 1.3 6.326a.91.91 0 0 0 0 1.348L7 13"/>
</svg>
  
  `;
  const btnRight = temp.button(contLeftRight, "button", "btnRight", [
    "p-5",
    "text-4xl",
    "font-bold",
    "border",
    "border-gray-700",
    "rounded-lg",
  ]);
  btnRight.innerHTML = `
<svg class="w-6 h-6 text-gray-800 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 8 14">
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1"/>
</svg>
  `;

  const contDown = temp.div(jstick, "arrw-down", ["flex", "justify-center"]);

  const btnDown = temp.button(contDown, "button", "btnDown", [
    "p-5",
    "text-4xl",
    "font-bold",
    "border",
    "border-gray-700",
    "rounded-lg",
  ]);
  btnDown.innerHTML = `
   <svg class="w-6 h-6 text-gray-800 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 8">
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 5.326 5.7a.909.909 0 0 0 1.348 0L13 1"/>
</svg>
  `;

  SnakeGameScript(canvas);
}

export default SnakeGame;
