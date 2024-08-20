document.getElementById("naslov").style.color = "red";
//Random brojevi

function generateRandomNumber() {
    let randomNumber = Math.random() * 100;
    let rounded = Math.floor(randomNumber) + 1;

    if (rounded % 2 == 0) {
        console.log("Ovaj broj je paran: " + rounded)
    } else {
        console.log("Neparan " + rounded);
    }
    return randomNumber;
}

generateRandomNumber();

let osobaIme = "Selma";
let osobaGodine = 23;
let osoba = {
    ime: "Selma",
    godine: 23
}
osoba.ime = "Nove ime";
console.log(osoba.ime)

function ispisiPozdrav() {
    document.getElementById("naslov").innerHTML = "Welcome";
}

let button = document.getElementById("click-me");
button.addEventListener("click", ispisiPozdrav);

let mark = document.getElementById("mark");
mark.addEventListener("click", ispisiPozdrav);