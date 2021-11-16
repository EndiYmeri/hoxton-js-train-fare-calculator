const priceForKm = 0.21
const age = Number(prompt("What is ur age"))
const question = prompt("Location or distance?")
const Rome = 1000
const Paris = 2000
const Berlin = 2500
const London = 4000

let distance
let fullPrice
if (question.toLowerCase() === "distance") {

    distance = Number(prompt("How far are u travelling?"))
    fullPrice = priceForKm * distance

    if (age < 18) fullPrice = fullPrice - fullPrice * 0.2
    else if (age > 65) fullPrice = fullPrice - fullPrice * 0.4

}
if (question.toLowerCase() === "location") {
    const location = prompt(`Choose location:
        1. Rome
        2. Paris
        3. Berlin
        4. London
    `)
    if (location.toLowerCase() === "rome") {
        distance = Rome
        fullPrice = priceForKm * distance

        if (age < 18) fullPrice = fullPrice - fullPrice * 0.2
        else if (age > 65) fullPrice = fullPrice - fullPrice * 0.4
    }
    if (location.toLowerCase() === "paris") {
        distance = Paris
        fullPrice = priceForKm * distance

        if (age < 18) fullPrice = fullPrice - fullPrice * 0.2
        else if (age > 65) fullPrice = fullPrice - fullPrice * 0.4
    }
    if (location.toLowerCase() === "berlin") {
        distance = Berlin
        fullPrice = priceForKm * distance

        if (age < 18) fullPrice = fullPrice - fullPrice * 0.2
        else if (age > 65) fullPrice = fullPrice - fullPrice * 0.4
    }
    if (location.toLowerCase() === "london") {
        distance = London
        fullPrice = priceForKm * distance

        if (age < 18) fullPrice = fullPrice - fullPrice * 0.2
        else if (age > 65) fullPrice = fullPrice - fullPrice * 0.4
    }
}

const confirmation = confirm(`You have to pay £${fullPrice} for this ride`)

if (confirmation) alert("All good")
else alert("Hope you have strong legs");