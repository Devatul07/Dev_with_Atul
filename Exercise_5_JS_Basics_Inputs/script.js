const textInput = document.getElementById("textInput");
const borderInput = document.getElementById("borderInput");
const colorRange = document.getElementById("colorRange");
const fontSelect = document.getElementById("fontSelect");
const styleBox = document.getElementById("styleBox");

textInput.addEventListener("input", () => {
  styleBox.textContent = textInput.value || "Hello, style me!";
});

borderInput.addEventListener("input", () => {
  styleBox.style.borderWidth = `${borderInput.value}px`;
});

colorRange.addEventListener("input", () => {
  const intensity = colorRange.value;
  styleBox.style.backgroundColor = `rgb(${intensity}, 216, 230)`;
});

fontSelect.addEventListener("change", () => {
  styleBox.style.fontFamily = fontSelect.value;
});
