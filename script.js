const button = document.querySelectorAll("button");
let screenNumber = document.getElementById("screen");
const allNumbers = document.querySelectorAll(".number");
const clearBtn = document.getElementById("clear");
const back = document.getElementById("back");

const calculator = {
  number: "",
  operator: "",
  another: "",
};

const add = () => {};
const substract = () => {};
const multiply = () => {};
const divide = () => {};

const operate = (operator, number, another) => {
  if (operator === "+") {
    return add(number, another);
  } else if (operator === "-") {
    return substract(number, another);
  } else if (operator === "*") {
    return multiply(number, another);
  } else if (operator === "/") {
    return divide(number, another);
  } else {
    return;
  }
};

[...allNumbers].forEach((number) => {
  number.addEventListener("click", () => {
    screenNumber.textContent += number.textContent;
    calculator.number = Number(screenNumber.textContent);
    console.log(calculator.number);
  });
});
