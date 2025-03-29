import { NavbarContent } from "../../Content/NavbarContent.js";
import CreateElements from "../../utils/CreateElements.js";

function Navbar(container) {
  const temp = new CreateElements();

  const navCont = temp.div(container, "", [
    "flex",
    "p-2",
    "justify-center",
    "gap-10",
  ]);
  NavbarContent.map((item) => {
    const btn = temp.button(navCont, "button", item.path, [
      "py-2",
      "px-3",
      "text-md",
      "md:text-4xl",
      "rounded-lg",
      "border",
      "border-gray-700",
      "hover:bg-blue-700",
      "hover:border-none",
      "hover:font-bold",
      "hover:text-white",
    ]);
    btn.textContent = item.name;
  });
}
export default Navbar;
