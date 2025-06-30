let choresArray = []
let costArray = []
let cost = 0
let carButton = document.getElementById("carButton")
let lawnButton = document.getElementById("lawnButton")
let weedButton = document.getElementById("weedButton")

let choresList = document.getElementById("chores-list")
let costList = document.getElementById("amount-list")
let totalCost = document.getElementById("amountTotal")
carButton.addEventListener("click", function(){
    choresArray.push("Wash car")
    let index = choresArray.length-1
    updateChoresList(index)

    costArray.push(10)
    updateCostList(index)

    updateTotalcost(10)
})

lawnButton.addEventListener("click", function(){
    choresArray.push("Mow Lawn")
    let index = choresArray.length-1
    updateChoresList(index)

    costArray.push(20)
    updateCostList(index)

    updateTotalcost(20)
})

weedButton.addEventListener("click", function(){
    choresArray.push("Pull Weed")
    let index = choresArray.length-1
    updateChoresList(index)

    costArray.push(30)
    updateCostList(index)

    updateTotalcost(30)
})

function sendInvoice(){
    cost = 0
    choresArray = []
    choresList.innerHTML = ``
    costList.innerHTML = ``
    totalCost.textContent = "$0"
}

function updateChoresList(index){
    choresList.innerHTML += `<h3>${choresArray[index]} </h3>`
}

function updateCostList(index){
    costList.innerHTML += `<p>$ ${costArray[index]} </p>`
}

function updateTotalcost(amount){
    
    cost += amount
    
    totalCost.textContent= `$ ${cost}`

}