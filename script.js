let brojevi = [4, 235, 0, 9];
brojevi.forEach((elm, index) => {
    console.log(index);
    console.log(elm);
});
brojevi.forEach(ispisi);
function ispisi(elm, index) {
    console.log(index);
    console.log(elm);
}


//Objekti

const osoba = {
    ime: "Mujo",
    brPrijatelja: 300,
    posaljiZahtjev: function () {
        console.log("NOTIFIKACIJA, dodani ste u prijatelje")
    }
};
console.log(osoba.brPrijatelja);
osoba.posaljiZahtjev()