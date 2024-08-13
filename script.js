let zvjezdica = ""
for (let i = 1; i < 6; i++) {
    zvjezdica = zvjezdica + "*";
    console.log(zvjezdica);
}

const ime = "SeLmA";
const velika = ime.toLowerCase();
console.log(velika);

//Funkcije

function pozdravi(ime) {
    console.log("Dobrodosao, " + ime);
    console.log("Drago nam je da ste se pridruzili!");
}

pozdravi("Mujo");
pozdravi("Selma")