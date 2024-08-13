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