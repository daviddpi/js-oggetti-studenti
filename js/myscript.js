/**
 * funzione in cui vengono inseriti, tramite un prompt, in un oggetto le proprietà: nome, cognome, età
 */
function inserisciProprieta(name,surname,age){
    nuovoStudente.nome = name;
    nuovoStudente.cognome = surname;
    nuovoStudente.eta = age;
}

let studente = {
    nome: "Pinco",
    cognome: "Pallino",
    eta: 20

};

for(let key in studente){
    console.log(studente);
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

let nuovoStudente = {
    nome: undefined,
    cognome: undefined,
    eta: undefined
};

inserisciProprieta(
    prompt("Inserisci il nome del nuovo studente"),
    prompt("Inserisci il cognome del nuovo studente"),
    prompt("Inserisci l'età del nuovo studente")
);

// nuovoStudente.nome = prompt("Inserisci il nome del nuovo studente");
// nuovoStudente.cognome = prompt("Inserisci il cognome del nuovo studente");
// nuovoStudente.eta = prompt("Inserisci l'età del nuovo studente");

arrayStudenti.push(nuovoStudente);
console.log(arrayStudenti);

