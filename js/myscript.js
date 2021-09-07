let studente = {
    nome: "Pinco",
    cognome: "Pallino",
    eta: 20

};

for(let key in studente){
    console.log(studente[key]);
};

console.log(studente);

const arrayStudenti = [

    //array n. 0
    {
        nome: "Josh",
        cognome: "Doe",
        eta: 25

    },{
        nome: "Rocky",
        cognome: "Smith",
        eta: 25
    },{
        nome: "Ivan",
        cognome: "Black",
        eta: 25
    }

];

console.log(arrayStudenti.length);

for(let i = 0; i < arrayStudenti.length; i++){
    console.log("Nome: " + arrayStudenti[i].nome);
    console.log("Cognome: " + arrayStudenti[i].cognome);
}

/**
 * funzione che crea un nuovo studente
 */
function creaOggettoStudente(name,surname,age){
    let nuovoStudente = {
        nome: name,
        cognome: surname,
        eta: age
    }
    
    return nuovoStudente;
}
let nome = prompt("Inserisci il nome del nuovo studente");
let cognome = prompt("Inserisci il cognome del nuovo studente");
let eta = prompt("Inserisci l'età del nuovo studente");

let nuovoOggettoStudente = creaOggettoStudente(nome,cognome,eta);
// console.log(nuovoOggettoStudente);

arrayStudenti.push(nuovoOggettoStudente);
console.log(arrayStudenti);

