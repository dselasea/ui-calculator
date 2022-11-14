let num1 = ""
let num2 = ""
let operator = ""
let calculated = ""

let screen = document.querySelector("#screen")
let numbers = document.querySelectorAll(".numbers");
let operatotions = document.querySelectorAll(".operator");
let clear = document.querySelector("#clear")
let back = document.querySelector("back")
let equal = document.querySelector(".equal")
let percent = document.querySelector(".percentage")

numbers.forEach(number => {
  number.addEventListener("click", (e) => {
    console.log(e.target.textContent)
  })
})