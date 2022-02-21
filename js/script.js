// Dichiaro e Assegno una variabile che non può essere modificata (const)
const firstName = prompt("Inserisci il tuo nome");
// Richiamo la variabile tramite il nome che le ho assegnato
console.log(firstName);

const lastName = prompt("Inserisci il tuo cognome");
console.log(lastName);
// Dichiaro e Assegno una variabile che può essere riassegnata (let) 
let favouriteColor = prompt("Qual'è il tuo colore preferito");
console.log(favouriteColor);
// Inserisco all'interno del HTML, dentro l'elemento con id my-password l'output delle variabili + il 21 finale 
document.getElementById("my-password").innerHTML = firstName + lastName + favouriteColor + ("21")  