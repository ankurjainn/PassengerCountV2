// document.getElementById("count-el").innerText = 5


// Initialize the count as 0
// listen for clicks
// increment the count variable when button is clicked
// change the count - el in the html to reflect new count



let count = 0
let saveEl = document.getElementById("save-el")
let totalEl = document.getElementById("total-el")

let totalCount = 0

function increment() {
    count += 1
    document.getElementById("count-el").textContent = count
}

function save() {
    let countStr = " " + count + " - "
    saveEl.textContent += countStr
    totalCount += count
    count = 0
    document.getElementById("count-el").textContent = " " + count
    totalEl.textContent = totalCount
}


