let zvjezdica = ""
for (let i = 1; i < 6; i++) {
    zvjezdica = zvjezdica + "*";
    console.log(zvjezdica);
}

const ime = "SeLmA";
const velika = ime.toLowerCase();
console.log(velika);

//Funkcije

function pozdravi(ime, spol) {
    if (spol === 0) {
        console.log("Dobrodosao, " + ime);
    } else {
        console.log("Dobrodosla, " + ime);
    }
    console.log("Drago nam je da ste se pridruzili!");
}

pozdravi("Mujo", 0);
pozdravi("Selma", 1)

let arrowPozdrav = (ime, spol) => {
    if (spol === 0) {
        console.log("Dobrodosao, " + ime);
    } else {
        console.log("Dobrodosla, " + ime);
    }
    console.log("Drago nam je da ste se pridruzili!");
}

arrowPozdrav("Huso", 0);

//funkcije koje vracaju vrijednost
function obimKruga(r) {
    const pi = 3.14;
    let obim = 2 * pi * r;
    return obim;
}

const rezultat = obimKruga(10);
console.log(rezultat);
console.log(obimKruga(10));

function countdown(n) {
    if (n === 1) {
        console.log("KRAJ")
    } else {
        console.log(n);
        countdown(n - 1)
    }
}

countdown(5);
