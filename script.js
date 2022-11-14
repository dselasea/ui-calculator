let num1 = ""
let num2 = ""
let operator = ""
let calculated = ""
let num = ""

let screen = document.querySelector("#screen")
let numbers = document.querySelectorAll(".numbers");
let operations = document.querySelectorAll(".operator");
let clear = document.querySelector("#clear")
let back = document.querySelector("back")
let equal = document.querySelector(".equal")
let percent = document.querySelector(".percentage")

numbers.forEach(number => {
  number.addEventListener("click", (e) => {
    if(num.length <= 10){
      num += e.target.textContent
      screen.textContent = num
    }
  })
})

operations.forEach(operation => {
  operation.addEventListener("click", (e) => {
    operator = operation
    screen.textContent = e.target.textContent
    console.log(e.target.textContent)
  })
})

clear.addEventListener("click", () => {
  screen.textContent = "0"
  num = ""
})