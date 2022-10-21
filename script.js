const button = document.querySelectorAll("button")
let screenNumber = document.getElementById("screen")
let screenNumber2 = document.getElementById("screen2")
const clearBtn = document.getElementById("clear")
const back = document.getElementById("back");
// const zero = document.createTextNode("0")
// screenNumber.appendChild(zero)
let store = []
let storeCalculations = []

button.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        let number = Number(e.target.textContent);
        if(!isNaN(number) && store.length < 11){
            screenNumber.textContent = ""
                store.push(number)
          }
        screenNumber.textContent = store.join("")
    })
})

button.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        if(store.length == "0"){
            screenNumber.textContent = "0"
            return false
        }
        
        if(e.target.textContent === '/' && store[store.length - 1] !== '*' && store[store.length - 1] !== '-' && store[store.length - 1] !== '+'){
            if(store[store.length - 1] !== '/'){
                store.push("/")
                screenNumber.textContent = store.join("")
            }
            return false
        }
        else if(e.target.textContent === '*' && store[store.length - 1] !== '/' && store[store.length - 1] !== '-' && store[store.length - 1] !== '+'){
            if(store[store.length - 1] !== '*'){
                store.push("*")
                screenNumber.textContent = store.join("")
            }
        }
        else if(e.target.textContent === '-' && store[store.length - 1] !== '*' && store[store.length - 1] !== '/' && store[store.length - 1] !== '+'){
            if(store[store.length - 1] !== '-'){
                store.push("-")
                screenNumber.textContent = store.join("")
            }
        }
        else if(e.target.textContent === '+' && store[store.length - 1] !== '*' && store[store.length - 1] !== '-' && store[store.length - 1] !== '/'){
            if(store[store.length - 1] !== '+'){
                store.push("+")
                screenNumber.textContent = store.join("")
            }
        }
        else if(e.target.textContent === '.'){
            if(store[store.length - 1] !== '.'){
                console.log(store)
                store.push(".")
                screenNumber.textContent = store.join("")
            }
        }else if(e.target.textContent === "="){
            console.log(store.join(""))
        }
    })
})


clearBtn.addEventListener('click', () => {
    screenNumber.textContent = "0"
    store = []
    storeCalculations = []
})

back.addEventListener("click", () => {
    if(store.length >= 0){
        store.pop()
        screenNumber.textContent = store.join("")
        console.log(store.length)
    }
    if(store.length === 0){
        screenNumber.textContent = "0"
        store = []
    }
})

const checkCharacter = () => {
    if(store[store.length === 0] && store.length[0] != "+"){
        return false;
    }
}

const add = () => {
    return "+"
}

const substract = () => {
    return "-"
}

const multiply = () => {
    return "*"
}

const divide = () => {
    return "/"
}

const operate = (operator, number1, number2) => {
    let calculation;
    switch(operator){
        case "+":
            calculation = number1 + number2
            break;
        case "-":
            calculation = number1 - number2
            break;
        case "*":
            calculation = number1 * number2
            break;
        case "/":
            calculation = number1 / number2
            break;
    }
    return calculation
}


console.log(operate(divide(), 2, 4))

