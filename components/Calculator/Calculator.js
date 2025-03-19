import { CalcuContent } from "../../Content/CalcuContent.js";
import CreateElements from "../../utils/CreateElements.js";
import { CalculatorScripts } from "./CalculatorScripts.js";

function Calculator(container) {
  const template = new CreateElements();
  CalcuContent.map((item) => {
    const box = template.div(container, "", [
      "flex",
      "p-2",
      "w-75",
      "flex-col",
      "mx-auto",
    ]);

    item.display.map((view) => {
      const valBox = template.div(box, "", ["border", "p-2", "w-full"]);
      view.textline.map((txt) => {
        const input = template.textline(valBox, txt.id, txt.type, [
          "p-2",
          "border",
          "w-full",
          "text-end",
        ]);
        input.disabled = txt.disabled;
        input.placeholder = 0;
      });
    });

    item.buttons.forEach((view) => {
      const buttonBox = template.div(box, "", [
        "flex",
        "flex-col",
        "border",
        "p-2",
      ]);
      view.btn.forEach((btnView) => {
        const btnLayer = template.div(buttonBox, "", [
          "flex",
          "w-full",
          "py-2",
          "gap-2",
        ]);
        btnView.button.forEach((calBtn) => {
          const btnCal = template.button(
            btnLayer,
            calBtn.type,
            calBtn.id,
            calBtn.classlist
          );
          btnCal.textContent = calBtn.name;
          btnCal.value = calBtn.name;
        });
      });
    });
  });

  CalculatorScripts();
}

export default Calculator;
