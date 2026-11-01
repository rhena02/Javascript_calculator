//Display a value
const checkValue = document.getElementById("checkValue")
checkValue.addEventListener("click", function () {
    const userInput = document.getElementById("valueInput")
    const error = document.getElementById("error1")
    const result = document.getElementById("result1")

    if (userInput.value.trim()=== "") {
        userInput.style.borderColor = "red"
        error.innerHTML = "You must enter a value"
        result.innerHTML = ""
    }else {
        userInput.style.borderColor = "green";
        error.innerHTML = ""
        result.innerHTML = "Your value is: " + userInput.value
    }
})

//Cement Calculator
function calculateCement(bags) {
    let price = 13500
    let  cost = bags * price
    return `Total cement cost in ₦${cost}`
}
const cementBtn = document.getElementById("calculateCement")
cementBtn.addEventListener("click", function () {
    let inputError = ""
    const userInput = document.getElementById("bags")
    const error = document.getElementById("error2")
    const result = document.getElementById("result2")

    if (userInput.value === ""){
        userInput.style.borderColor = "#ff0000"
        inputError = "You must enter a valid number of bags"
        error.innerHTML = inputError
        result.innerHTML = ""
    }else if(isNaN(userInput.value)){
        userInput.style.borderColor = "#00ff00"
        inputError = "Invalid number of bags"
        error.innerHTML = "inputError"
        result.innerHTML = ""
    }else {
        error.innerHTML = ""
        userInput.style.borderColor = "#00ff00"
        result.innerHTML = calculateCement(userInput.value)
    }
})

//Medical Products
let products = [
    "Stethoscope",
    "Thermometer",
    "Syringe",
    "Surgical Gloves",
    "Face mask",
    "Scale",
    "Wheelchair",
    "X-ray Machine",
    "Ultrasound Machine",
    "CT scanner",
    "MRI Scannner ",
    "Nebulizer",
    "Ventilator",
    "Scapel",
    "Surgical forcep",
    "Surgical Gown",
    "Antiseptic Wipes",
    "Centrifuge",
    "Microscope",
    "Hospital Bed",
    "Suction Machine",
    "Splint",
    "Insulin",
    "Arm Sling",
    "Clutches"
]
document.getElementById("product1").innerHTML = products[0]
document.getElementById("product2").innerHTML = products[1]
document.getElementById("product3").innerHTML = products[2]
document.getElementById("product4").innerHTML = products[3]
document.getElementById("product5").innerHTML = products[4]
document.getElementById("product6").innerHTML = products[5]
document.getElementById("product7").innerHTML = products[6]
document.getElementById("product8").innerHTML = products[7]
document.getElementById("product9").innerHTML = products[8]
document.getElementById("product10").innerHTML = products[9]
document.getElementById("product11").innerHTML = products[10]
document.getElementById("product12").innerHTML = products[11]
document.getElementById("product13").innerHTML = products[12]
document.getElementById("product14").innerHTML = products[13]
document.getElementById("product15").innerHTML = products[14]
document.getElementById("product16").innerHTML = products[15]
document.getElementById("product17").innerHTML = products[16]
document.getElementById("product18").innerHTML = products[17]
document.getElementById("product19").innerHTML = products[18]
document.getElementById("product20").innerHTML = products[19]
document.getElementById("product21").innerHTML = products[20]
document.getElementById("product22").innerHTML = products[21]
document.getElementById("product22").innerHTML = products[22]
document.getElementById("product23").innerHTML = products[23]
document.getElementById("product24").innerHTML = products[24]

//Crude oil Calculator
function calculateOilPrice(barrels) {
    let price = 160515
    let cost = barrels * price
    return `Total crude oil cost is ₦${cost}`
}

const oilBtn = document.getElementById("calculateOil")
oilBtn.addEventListener("click", function () {
    let inputError = ""
    const error = document.getElementById("error3")
    const userInput = document.getElementById("barrels")
    const getCost = document.getElementById("result3")

    if (userInput.value === "") {
        userInput.style.borderColor = "#ff0000"
        inputError = "You must enter a valid amount of barrels"
        error.innerHTML = inputError
        getCost.innerHTML = ""
    }else if(isNaN(userInput.value)){
        userInput.style.borderColor = "#00ff00"
        inputError = "Invalid barrel entry"
        error.innerHTML = "inputError"
        getCost.innerHTML = ""
    }else {
        error.innerHTML = ""
        userInput.style.borderColor = "#00ff00"
        getCost.innerHTML = calculateOilPrice(userInput.value)
    }
})