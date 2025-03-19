import { safeEval } from "../../utils/Computation.js";
import CreateElements from "../../utils/CreateElements.js";

export const CalculatorScripts = () => {
  const temp = new CreateElements();
  const numValue = temp.getAllSelector(".numValue");
  const display = temp.getSingleSelector("#display");
  const clrValue = temp.getSingleSelector("#clrValue");
  const dltValue = temp.getSingleSelector("#dltValue");
  const equalSymbol = temp.getSingleSelector("#equalSymbol");

  numValue.forEach((item) => {
    item.addEventListener("click", (e) => {
      display.value += item.value;
    });
  });

  clrValue.addEventListener("click", () => {
    display.value = "";
  });

  dltValue.addEventListener("click", () => {
    display.value = display.value.slice(0, -1);
  });

  equalSymbol.addEventListener("click", () => {
    try {
      display.value = safeEval(display.value);
    } catch (error) {
      display.value = "error";
    }
  });
};
