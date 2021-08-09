const container = document.querySelector(".container");
const button = document.querySelector(".clr-generator");
const clrCode = document.querySelector(".clr-code");

const chars = "0123456789abcdef";

const generateClr = () => {
  let clr = "#";

  for (let i = 0; i < 6; i++) {
    const randChar = chars[Math.floor(Math.random() * 16)];
    clr += randChar;
  }

  clrCode.innerHTML = clr;
  container.setAttribute("style", `background: ${clr}`);
};

window.addEventListener("DOMContentLoaded", () => {
  generateClr();
});

button.addEventListener("click", () => {
  generateClr();
});
