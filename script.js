// IBT CAL - Smart Scientific Calculator Logic

const display = document.getElementById("display");
const sound = document.getElementById("click-sound");

function playSound() {
  sound.currentTime = 0;
  sound.play();
}

function appendSymbol(symbol) {
  playSound();
  if (display.value === "0" && symbol !== ".") {
    display.value = symbol;
  } else {
    display.value += symbol;
  }
}

function clearDisplay() {
  playSound();
  display.value = "";
}

function deleteLast() {
  playSound();
  display.value = display.value.slice(0, -1);
}

function calculate() {
  playSound();
  try {
    const result = Function('"use strict";return (' + display.value + ")")();
    display.value = result ?? "";
  } catch {
    display.value = "Error";
  }
}
