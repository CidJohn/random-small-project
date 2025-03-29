export const navbarFunc = () => {
  const btns = [
    {
      query: document.querySelector("#calculator"),
      showElement: document.querySelector("#idCalc"),
    },
    {
      query: document.querySelector("#snakegame"),
      showElement: document.querySelector("#idSnake"),
    },
  ];

  if (btns.some((btn) => !btn.query || !btn.showElement)) {
    console.error("One or more elements not found.");
    return;
  }

  const toggleDisplay = (activeBtn) => {
    btns.forEach((btn) => {
      if (btn === activeBtn) {
        btn.showElement.style.display = "block";
        btn.query.classList.add("active");
      } else {
        btn.showElement.style.display = "none";
        btn.query.classList.remove("active");
      }
    });
  };

  btns.forEach((btn) => {
    btn.query.addEventListener("click", () => toggleDisplay(btn));
  });
};
