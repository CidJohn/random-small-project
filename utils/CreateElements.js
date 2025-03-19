class CreateElements {
  element(name) {
    return document.createElement(name);
  }
  getRoot() {
    return document.getElementById("root");
  }
  getAllSelector(name) {
    return document.querySelectorAll(name);
  }
  getSingleSelector(name) {
    return document.querySelector(name);
  }

  div(parent, idName, classList) {
    const div = this.element("div");
    div.id = idName;
    if (classList && classList.length > 0)
      classList.forEach((item) => div.classList.add(item));
    parent.appendChild(div);

    return div;
  }

  textline(parent, idName, type, classList) {
    const textline = this.element("input");
    textline.id = idName;
    textline.name = idName;
    textline.type = type;
    if (classList && classList.length > 0)
      classList.forEach((item) => textline.classList.add(item));
    parent.appendChild(textline);

    return textline;
  }

  button(parent, type, idName, classlist) {
    const button = this.element("button");
    button.id = idName;
    button.name = idName;
    button.type = type;
    if (classlist && classlist.length > 0)
      classlist.forEach((item) => button.classList.add(item));
    parent.appendChild(button);

    return button;
  }
}

export default CreateElements;
