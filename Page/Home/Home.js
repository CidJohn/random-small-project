import Calculator from "../../components/Calculator/Calculator.js";
import Navbar from "../../components/Navbar/navbar.js";
import SnakeGame from "../../components/SnakeGame/SnakeGame.js";
import CreateElements from "../../utils/CreateElements.js";

function Home() {
  const element = new CreateElements();
  const root = element.getRoot();
  Navbar(root);
  const room = element.div(root, "room", [
    "flex",
    "gap-2",
    "p-2",
    "flex-col",
    "md:flex-row",
  ]);
  const div = element.div(room, "idCalc", [
    "p-2",
    "w-full",
    "text-center",
    "font-bold",
  ]);
  const title = element.div(div, "", ["text-4xl", "p-2"]);
  title.textContent = "Calculator App";
  Calculator(div);

  const div2 = element.div(room, "idSnake", [
    "p-2",
    "w-full",
    "text-center",
    "font-bold",
  ]);
  const title2 = element.div(div2, "", ["text-4xl", "p-2"]);
  title2.textContent = "Retro Snake Game";
  const snakeCont = element.div(div2, "", [
    "flex",
    "flex-col",
    "w-full",
    "justify-center",
    "items-center",
  ]);
  SnakeGame(snakeCont);
}

export default Home;
