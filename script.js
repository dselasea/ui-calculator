let previousValue = ""
let currentValue = ""
let operator = ""

document.addEventListener("DOMContentLoaded", function(){
  let screen = document.querySelector("#screen")
let numbers = document.querySelectorAll(".numbers");
let operations = document.querySelectorAll(".operator");
let clear = document.querySelector("#clear")
let back = document.querySelector("#back")
let equal = document.querySelector(".equal")
let percent = document.querySelector(".percentage")

numbers.forEach(number => {
  number.addEventListener("click", (e) => {
    if(currentValue.length <= 10){
      currentValue += e.target.textContent
      screen.textContent = currentValue
    }
  })
})

operations.forEach(operation => {
  operation.addEventListener("click", (e) => {
    operator = e.target.textContent
    previousValue = currentValue
    currentValue = currentValue
    screen.textContent = e.target.textContent
  })
})

clear.addEventListener("click", () => {
  previousValue = ""
  currentValue = ""
  operator = ""
  
})

back.addEventListener("click", () => {
  previousValue = ""
  currentValue = ""
  operator = ""
})

equal.addEventListener("click", () => {
  previousValue = Number(previousValue)
  currentValue = Number(currentValue)
  if(operator === "+"){
    previousValue += currentValue
  }else if(operator === "-"){
    previousValue -= currentValue
  }else if(operator === "*"){
    previousValue *= currentValue
  }else {
    previousValue /= currentValue
  }
  previousValue = Math.round(previousValue * 1000) / 1000
  previousValue = previousValue.toString()
  currentValue = currentValue.toString()
  console.log(currentValue, previousValue)
})
})