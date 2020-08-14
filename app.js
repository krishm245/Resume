window.addEventListener("load", () => {
  const preload = document.querySelector(".preload");
  preload.classList.add("preload-finish");
});
const texts = ["COMPUTER", "SCIENCE", "STUDENT"];
let count = 0;
let index = 0;
let currentText = "";
let letter = "";

(function typeWriter() {
  if (count === texts.length) {
    count = 0;
  }
  currentText = texts[count];
  letter = currentText.slice(0, ++index);

  document.querySelector(".typing").textContent = letter;

  if (letter.length === currentText.length) {
    count++;
    index = 0;
  }
  setTimeout(typeWriter, 300);
})();
