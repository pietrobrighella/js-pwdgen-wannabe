// chiedo all’utente il suo nome
const firstName = prompt('Qual é il tuo nome?');

// chiedo all’utente il suo cognome
const lastName = prompt('Qual é il tuo cognome?');

// chiedo all’utente il suo colore preferito
const favouriteColor = prompt('Qual é il tuo colore preferito?');

// chiedo all’utente il suo anno di nascita e lo converto in intero
let userAge = prompt('Inserisci il tuo anno di nascita');
userAge = parseInt(userAge);

// ricavo l'anno dalla data attuale
const today = new Date();
const year = today.getFullYear();

// riattribuisco alla variabile userAge il valore dell'anno attuale meno l'anno di nascita dell'utente
userAge = year - userAge;

//recupero l'elemento HTML e lo assegno ad una variabile
let password = document.getElementById('user_password')


// Creo l'output con il template literal trasformando la password in minuscolo ed eliminando eventuali spazi tra parole in input
password.innerHTML = `
<h2>Ciao ${firstName}, ecco la tua nuova password:</h2>
<h4>${firstName.toLowerCase().replace(/\s+/g, '')}${lastName.toLowerCase().replace(/\s+/g, '')}${favouriteColor.toLowerCase().replace(/\s+/g, '')}${userAge}</h4>
`;