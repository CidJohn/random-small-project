import CreateElements from "../utils/CreateElements.js";
import Home from "./Home/Home.js";

function index() {
  const body = document.querySelector("body");
  const template = new CreateElements();
  template.div(body, "root");
  Home();
}

export default index;
