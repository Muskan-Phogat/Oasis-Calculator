"use strict";
const number = document.querySelectorAll("input");
const screen = document.querySelector(".screen");
number.forEach(function (e) {
  e.addEventListener("click", function () {
    const operators = ["+", "-", "*", "/"];
    const lastChar = screen.value.slice(-1); 
    if (e.value === "AC") {
      screen.value = "";
    } else if (e.value === "DE") {
      screen.value = String(screen.value).slice(0, -1); 
    } else if (operators.includes(e.value)) {
      if (operators.includes(lastChar)) {
        screen.value = screen.value.slice(0, -1) + e.value; 
      } else {
        screen.value += e.value;
      }
    } else if (e.value === ".") {
      const currentNumber = screen.value.split(/[\+\-\*\/]/).pop(); 
      if (!currentNumber.includes(".")) {
        screen.value += e.value;  
      }
    } else if (e.value === "=") {
      if (screen.value && !operators.includes(lastChar)) {
        screen.value = eval(screen.value);
      } else {
        screen.value = "Invalid";
      }
    } else {
      screen.value += e.value;
    }
  });
});
