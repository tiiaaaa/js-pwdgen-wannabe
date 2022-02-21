const firstName = prompt("Inserisci il tuo nome");
console.log(firstName);
const lastName = prompt("Inserisci il tuo cognome");
console.log(lastName);

let favouriteColor = prompt("Qual'è il tuo colore preferito");
console.log(favouriteColor);
document.getElementById("my-password").innerHTML = firstName + lastName + favouriteColor;  