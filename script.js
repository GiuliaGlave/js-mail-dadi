//variabili numero giocatore e numero pc

const playerNumber = Math.floor((Math.random() * 6) + 1);
console.log("giocatore " + playerNumber);

const pcNumber = Math.floor((Math.random() * 6) + 1);
console.log("pc " + pcNumber);

//condizioni

//vinci
if (playerNumber > pcNumber) {
    console.log(`${playerNumber} > ${pcNumber} hai vinto!`);
//pareggi
} else if (playerNumber == pcNumber) {
    console.log(`${playerNumber} = ${pcNumber} hai pareggiato`);
//perdi
} else {
    console.log(`${playerNumber} < ${pcNumber} hai perso`);
}