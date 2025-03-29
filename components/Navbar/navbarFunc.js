export const navbarFunc = () => {
  const btnCalc = document.querySelector("#calculator");
  const btnSnake = document.querySelector("#snakegame");
  const getDisplayCalc = document.querySelector("#idCalc");
  const getDisplaySnake = document.querySelector("#idSnake");

  if (!btnCalc || !btnSnake || !getDisplayCalc || !getDisplaySnake) {
    console.error("One or more elements not found.");
    return;
  }

  const toggleDisplay = (activeBtn, inactiveBtn, showElement, hideElement) => {
    showElement.style.display = "block";
    hideElement.style.display = "none";

    activeBtn.classList.add("active");
    inactiveBtn.classList.remove("active");
  };

  btnCalc.addEventListener("click", () => {
    toggleDisplay(btnCalc, btnSnake, getDisplayCalc, getDisplaySnake);
  });

  btnSnake.addEventListener("click", () => {
    toggleDisplay(btnSnake, btnCalc, getDisplaySnake, getDisplayCalc);
  });
};
